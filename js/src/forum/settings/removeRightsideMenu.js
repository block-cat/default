/*
 * This function removes rightside menu from discussion page
 */

import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

export default function () {
  extend(DiscussionPage.prototype, 'view', function() {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    
    // check if is set '1' for dicussion page menu
    if (defaultSettings.discussionMenu.value === 1) {
      this.$('.DiscussionPage-nav').remove();
    }
  });
};
