import ExtensionPage from 'flarum/common/components/ExtensionPage';
import app from 'flarum/app';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';
import saveSettings from 'flarum/utils/saveSettings';
import icon from 'flarum/helpers/icon';

export default class DefaultSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.settings = Object.entries(JSON.parse(app.data.settings["block-cat.default_settings"] || null));

    this.loading = false;
    this.modified = false;

    this.hideMainPageMenu = false;
    this.hideToolBar = false;
    this.hideDiscussionMenu = false;

    this.settings.map((option) => {
      if (option[0] === 'mainPageMenu' && option[1] === 1) {
        this.hideMainPageMenu = true;
      }
      if (option[0] === 'toolbar' && option[1] === 1) {
        this.hideToolBar = true;
      }
      if (option[0] === 'discussionMenu' && option[1] === 1) {
        this.hideDiscussionMenu = true;
      }
    });
  }

  content() {
    const allDiscussions = app.translator.trans('core.admin.basics.all_discussions_label');

    return (
      m('.ExtensionPage-settings', [
        m('.container', [
          m('Form', {
            onsubmit: this.onsubmit.bind(this),
          }, [
            !this.hideMainPageMenu ?
              m('.Form-group', [
                m('label', app.translator.trans('block-cat-default.admin.settings.icon')),
                m('.helpText', app.translator.trans('block-cat-default.admin.settings.icon_help_text', { text: allDiscussions })),
                m('.inline',
                  this.settings[0][1] !== "" ? icon(this.settings[0][1]) : '',
                  this.settings[0][1] !== "" ? m('span', app.translator.trans('core.admin.basics.all_discussions_label')) : '',
                  m('input.FormControl', {
                    type: 'text',
                    placeholder: "far fa-comments",
                    value: this.settings[0][1],
                    oninput: (e) => {
                      this.settings[0][1] = e.target.value;
                    }
                  })
                ),
              ]) : '',
            this.settings.map((option) => {
              if (option[0] === 'allDiscussionsIcon') return;

              if (option[0] === 'refreshButton' || option[0] === 'markAllAsReadButton') 
                return [
                  !this.hideToolBar ?
                  m('.Form-group', [
                    Switch.component({
                      state: option[1] || false,
                      onchange: () => {
                        option[1] ^= true;
                        this.modified = true;
                      }
                    },
                    m('li', app.translator.trans(`block-cat-default.admin.settings.${option[0]}`))
                    ),
                    m('.helpText', app.translator.trans(`block-cat-default.admin.settings.${option[0]}_help_text`)),
                  ]) : ''
                ];

              if (option[0] === 'controlsButton' || option[0] === 'scrubberDiv') 
                return [
                  !this.hideDiscussionMenu ?
                  m('.Form-group', [
                    Switch.component({
                      state: option[1] || false,
                      onchange: () => {
                        option[1] ^= true;
                        this.modified = true;
                      }
                    },
                    m('li', app.translator.trans(`block-cat-default.admin.settings.${option[0]}`))
                    ),
                    m('.helpText', app.translator.trans(`block-cat-default.admin.settings.${option[0]}_help_text`)),
                  ]) : ''
                ];

              return [
                m('.Form-group', [
                  Switch.component({
                    state: option[1] || false,
                    onchange: () => {
                      option[1] ^= true;
                      this.modified = true;
                      option[0] === 'mainPageMenu' ? this.hideMainPageMenu ^= true : '';
                      option[0] === 'toolbar' ? this.hideToolBar ^= true : '';
                      option[0] === 'discussionMenu' ? this.hideDiscussionMenu ^= true : '';
                    }
                  },
                  m('li', app.translator.trans(`block-cat-default.admin.settings.${option[0]}`))
                  ),
                  m('.helpText', app.translator.trans(`block-cat-default.admin.settings.${option[0]}_help_text`)),
                ])
              ];
            }),
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

    saveSettings({
      ["block-cat.default_settings"]: JSON.stringify(Object.fromEntries(this.settings)),
    });

    this.loading = false;
    this.modified = false;
  }
}