/*
 * This function change icon 'Drafts' item
 */

import { extend } from 'flarum/extend';
import HeaderSecondary from 'flarum/common/components/HeaderSecondary';

export default function () {
  if (!flarum.extensions['fof-drafts']) return;

  const {
    DraftsDropdown
  } = flarum.extensions['fof-drafts'].components;

  extend(HeaderSecondary.prototype, 'items', function(items) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    
    // check if is set icon for Drafts
    if (defaultSettings.draftsIcon.value !== "") {
      // check if exists 'Draft' item
      if (items.has('Drafts')) {
        // change 'Draft' item
        items.replace(
          'Drafts',
          <DraftsDropdown state={app.drafts} icon={defaultSettings.draftsIcon.value}/>,
          20
        );
      }
    }
  });
};
