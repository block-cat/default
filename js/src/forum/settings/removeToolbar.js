/*
 * This function removes tools bar from top of
 * discussions list on main page
 */

import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
  extend(IndexPage.prototype, 'oncreate', function() {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));

    // check if is set '1' for toolbar
    if (defaultSettings.toolbar.value === 1) {
      this.$('.IndexPage-toolbar').remove();
    }
  });
};
