import ExtensionPage from 'flarum/common/components/ExtensionPage';
import app from 'flarum/app';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';
import saveSettings from 'flarum/utils/saveSettings';
import isExtensionEnabled from 'flarum/utils/isExtensionEnabled';
import icon from 'flarum/helpers/icon';
import Alert from 'flarum/common/components/Alert';

import ImageDropdown from './ImageDropdown';

export default class DefaultSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    // get settings name in Object format
    this.settings = JSON.parse(app.data.settings["block-cat.default_settings"]);

    // is used when data is saving
    this.loading = false;
    // is used to check modification
    this.modified = false;

    // is used to check settings with with another settings dependencies
    this.settingStates = {
      // is used for sidebarmenu from IndexPage
      hideMainPageMenu: 0,
      // is used for toolbar from IndexPage
      hideToolBar: 0,
      // is used for sidebarmenu from DiscussionPage
      hideDiscussionMenu: 0,
    };

    // check value for settings with dependencies
    // if value === 1 then some settings should to hide on page
    Object.keys(this.settings).map((key) => {
      if (key === 'mainPageMenu') {
        this.settingStates.hideMainPageMenu = this.settings[key].value;
      }

      if (key === 'toolbar') {
        this.settingStates.hideToolBar = this.settings[key].value;
      }

      if (key === 'discussionMenu') {
        this.settingStates.hideDiscussionMenu = this.settings[key].value;
      }
    });
  }

  content() {
    const allDiscussions = app.translator.trans('core.admin.basics.all_discussions_label');

    return (
      // standard containers on extensions page
      m('.ExtensionPage-settings', [
        m('.container', [
          // insert all in form tag
          m('Form', {
            // onsubmit action call onsubmit method
            onsubmit: this.onsubmit.bind(this),
          }, [
            m('.Settings', [ // Start Settings
              m('label', app.translator.trans('block-cat-default.admin.settings.title')),
              m('.Settings-items', [ // Start Settings-items
                !this.settingStates.hideMainPageMenu ? // check if 'mainPageMenu' is not selected
                  m('.Form-group.item-allDiscussionsIcon', [ // allDiscussionsIcon
                    m('label',
                      app.translator.trans('block-cat-default.admin.settings.allDiscussionsIcon_icon', { text: allDiscussions }),
                      [
                        ImageDropdown.component({
                          imageURL: this.settings['allDiscussionsIcon'].imageHelpURL,
                        })
                      ]),
                    m('.helpText', app.translator.trans('block-cat-default.admin.settings.allDiscussionsIcon_icon_help_text', { text: allDiscussions })),
                    m('.inline',
                      // if icon exists this will be displayed realtime on page
                      this.settings['allDiscussionsIcon'].value !== "" ? icon(this.settings['allDiscussionsIcon'].value) : '',
                      this.settings['allDiscussionsIcon'].value !== "" ? m('span', app.translator.trans('core.admin.basics.all_discussions_label')) : '',
                      m('input.FormControl', {
                        type: 'text',
                        placeholder: "far fa-comments",
                        value: this.settings['allDiscussionsIcon'].value,
                        oninput: (e) => {
                          this.settings['allDiscussionsIcon'].value = e.target.value;
                          this.modified = true;
                        }
                      })
                    ),
                  ]) : '',
                isExtensionEnabled('fof-drafts') ? // check if 'fof-drafts' is enabled
                  m('.Form-group.item-draftsIcon', [ // draftsIcon
                    m('label',
                      app.translator.trans('block-cat-default.admin.settings.draftsIcon_icon'),
                      [
                        ImageDropdown.component({
                          imageURL: this.settings['draftsIcon'].imageHelpURL,
                        })
                      ]),
                    m('.helpText', app.translator.trans('block-cat-default.admin.settings.draftsIcon_icon_help_text')),
                    m('.inline',
                      // if icon exists this will be displayed realtime on page
                      this.settings['draftsIcon'].value !== "" ? icon(this.settings['draftsIcon'].value) : '',
                      m('input.FormControl', {
                        type: 'text',
                        placeholder: "far fa-comments",
                        value: this.settings['draftsIcon'].value,
                        oninput: (e) => {
                          this.settings['draftsIcon'].value = e.target.value;
                          this.modified = true;
                        }
                      })
                    ),
                  ]) : '',
                Object.keys(this.settings).map((key) => {
                  // exit because element was created yet
                  if (key === 'allDiscussionsIcon' || key === 'draftsIcon') return;

                  if (key === 'refreshButton' || key === 'markAllAsReadButton') {
                    return [
                      !this.settingStates.hideToolBar ? // check if 'toolbar' is not selected
                        m('.Form-group.item-' + key, [ // refreshButton and markAllAsReadButton
                          Switch.component({
                            state: this.settings[key].value || false,
                            onchange: () => {
                              this.settings[key].value ^= true;
                              this.modified = true;
                            }
                          },
                            m('li', app.translator.trans(`block-cat-default.admin.settings.${key}`),
                            [
                              ImageDropdown.component({
                                imageURL: this.settings[key].imageHelpURL,
                              })
                            ])
                          ),
                          m('.helpText', app.translator.trans(`block-cat-default.admin.settings.${key}_help_text`)),
                        ]) : ''
                    ];
                  }

                  if (key === 'controlsButton' || key === 'scrubberDiv') {
                    return [
                      !this.settingStates.hideDiscussionMenu ? // check if 'discussionMenu' is not selected
                        m('.Form-group.item-' + key, [ // controlsButton and scrubberDiv
                          Switch.component({
                            state: this.settings[key].value || false,
                            onchange: () => {
                              this.settings[key].value ^= true;
                              this.modified = true;
                            }
                          },
                            m('li', app.translator.trans(`block-cat-default.admin.settings.${key}`),
                            [
                              ImageDropdown.component({
                                imageURL: this.settings[key].imageHelpURL,
                              })
                            ])
                          ),
                          m('.helpText', app.translator.trans(`block-cat-default.admin.settings.${key}_help_text`)),
                        ]) : ''
                    ];
                  }

                  // create another elements
                  return [
                    m('.Form-group.item-' + key, [
                      Switch.component({
                        state: this.settings[key].value || false,
                        onchange: () => {
                          this.settings[key].value ^= true;
                          this.modified = true;
                          // mentioned elements have dependencies
                          key === 'mainPageMenu' ? this.settingStates.hideMainPageMenu ^= true : '';
                          key === 'toolbar' ? this.settingStates.hideToolBar ^= true : '';
                          key === 'discussionMenu' ? this.settingStates.hideDiscussionMenu ^= true : '';
                        }
                      },
                        m('li', app.translator.trans(`block-cat-default.admin.settings.${key}`),
                        [
                          ImageDropdown.component({
                            imageURL: this.settings[key].imageHelpURL,
                          })
                        ])
                      ),
                      m('.helpText', app.translator.trans(`block-cat-default.admin.settings.${key}_help_text`)),
                    ])
                  ];
                }),
              ]), // End Settings-items
            ]), // End Settings
            // save button
            Button.component(
              {
                type: 'submit',
                className: 'Button Button--primary',
                loading: this.loading,
                disabled: !this.modified,
              },
              app.translator.trans('core.admin.edit_header.submit_button')
            ),
          ]),
        ])
      ])
    );
  }

  onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    try {
      saveSettings({
        ["block-cat.default_settings"]: JSON.stringify(this.settings),
      });
      app.alerts.show(
        Alert,
        {
          type: "success"
        },
        app.translator.trans('core.admin.settings.saved_message')
      );
    } catch {
      app.alerts.show(
        Alert,
        {
          type: "error"
        },
        app.translator.trans('core.lib.error.generic_message')
      );
    } finally {
      this.settings = JSON.parse(app.data.settings["block-cat.default_settings"]);
      this.loading = false;
      this.modified = false;
    }
  }
}