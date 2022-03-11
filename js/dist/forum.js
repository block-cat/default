module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_addEMoldovaButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/addEMoldovaButton */ "./src/forum/settings/addEMoldovaButton.js");
/* harmony import */ var _settings_changeIconFromMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/changeIconFromMenu */ "./src/forum/settings/changeIconFromMenu.js");
/* harmony import */ var _settings_changePostControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/changePostControls */ "./src/forum/settings/changePostControls.js");
/* harmony import */ var _settings_removeActionItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/removeActionItems */ "./src/forum/settings/removeActionItems.js");
/* harmony import */ var _settings_removeLeftsideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/removeLeftsideMenu */ "./src/forum/settings/removeLeftsideMenu.js");
/* harmony import */ var _settings_removePane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/removePane */ "./src/forum/settings/removePane.js");
/* harmony import */ var _settings_removePostCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/removePostCount */ "./src/forum/settings/removePostCount.js");
/* harmony import */ var _settings_removeReplyPlaceholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/removeReplyPlaceholder */ "./src/forum/settings/removeReplyPlaceholder.js");
/* harmony import */ var _settings_removeRightsideMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/removeRightsideMenu */ "./src/forum/settings/removeRightsideMenu.js");
/* harmony import */ var _settings_removeSidebarItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/removeSidebarItems */ "./src/forum/settings/removeSidebarItems.js");
/* harmony import */ var _settings_removeTerminalPost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/removeTerminalPost */ "./src/forum/settings/removeTerminalPost.js");
/* harmony import */ var _settings_removeToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/removeToolbar */ "./src/forum/settings/removeToolbar.js");
/* harmony import */ var _settings_changeIconForDrafts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/changeIconForDrafts */ "./src/forum/settings/changeIconForDrafts.js");













app.initializers.add('block-cat/default', function () {
  Object(_settings_changeIconFromMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_settings_changeIconForDrafts__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_settings_removeLeftsideMenu__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_settings_removeToolbar__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_settings_removeActionItems__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_settings_removeRightsideMenu__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_settings_removeSidebarItems__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_settings_changePostControls__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_settings_removePostCount__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_settings_addEMoldovaButton__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_settings_removeReplyPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_settings_removeTerminalPost__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_settings_removePane__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/forum/settings/addEMoldovaButton.js":
/*!*************************************************!*\
  !*** ./src/forum/settings/addEMoldovaButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Navigation */ "flarum/components/Navigation");
/* harmony import */ var flarum_components_Navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Navigation__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function add button to emoldova.org on header on main page
 */

 // This is emoldova.org button

function getEMoldovaButton() {
  // message for confirm
  var text = app.translator.trans('block-cat-default.forum.confirm_exit_message');
  return m("a", {
    "class": "Button Button--icon hasIcon",
    href: "https://emoldova.org/",
    title: "e-Moldova",
    active: "false",
    type: "button",
    target: "_self",
    onclick: function onclick() {
      return confirm(text);
    }
  }, m("i", {
    "class": "icon fas fa-home Button-icon"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Navigation__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (view) {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for EMoldova button

    if (defaultSettings.emoldovaButton.value === 1) {
      var _app = app,
          history = _app.history; // check if is on Main Page

      if (!history.canGoBack()) {
        if (view.children) {
          // check if 'view' has children
          view.children.unshift(getEMoldovaButton());
        } else {
          // if 'view' hasn't children
          // message for confirm
          var text = app.translator.trans('block-cat-default.forum.confirm_exit_message'); // check if button not exists

          if ($('#header-navigation > .Navigation.ButtonGroup').find('a > .fas.fa-home').length == 0) {
            $('#header-navigation > .Navigation.ButtonGroup').append('<a class="Button Button--icon hasIcon"\
                href="https://emoldova.org/"\
                title="e-Moldova"\
                active="false"\
                type="button"\
                target="_self"\
                onclick="return confirm(\'' + text + '\')">\
                  <i class="icon fas fa-home Button-icon"></i>\
                </a>');
          }
        }
      } else {
        // if is not on Main Page, should remove button
        if ($('#header-navigation > .Navigation.ButtonGroup').find('a > .fas.fa-home').length == 1) {
          $('a[title="e-Moldova"]').remove();
        }
      }
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/changeIconForDrafts.js":
/*!***************************************************!*\
  !*** ./src/forum/settings/changeIconForDrafts.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/HeaderSecondary */ "flarum/common/components/HeaderSecondary");
/* harmony import */ var flarum_common_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function change icon 'Drafts' item
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!flarum.extensions['fof-drafts']) return;
  var DraftsDropdown = flarum.extensions['fof-drafts'].components.DraftsDropdown;
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set icon for Drafts

    if (defaultSettings.draftsIcon.value !== "") {
      // check if exists 'Draft' item
      if (items.has('Drafts')) {
        // change 'Draft' item
        items.replace('Drafts', m(DraftsDropdown, {
          state: app.drafts,
          icon: defaultSettings.draftsIcon.value
        }), 20);
      }
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/changeIconFromMenu.js":
/*!**************************************************!*\
  !*** ./src/forum/settings/changeIconFromMenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This function change icon in sidebar menu for 'allDiscussions'
 */



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    var params = app.search.stickyParams(); // check if is set icon for main page menu

    if (defaultSettings.allDiscussionsIcon.value !== "") {
      // check if exists 'allDiscussions' item
      if (items.has('allDiscussions')) {
        // change 'allDiscussions' item
        items.replace('allDiscussions', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
          href: app.route('index', params),
          // change the icon...
          icon: defaultSettings.allDiscussionsIcon.value
        }, app.translator.trans('core.forum.index.all_discussions_link')), 100);
      }
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/changePostControls.js":
/*!**************************************************!*\
  !*** ./src/forum/settings/changePostControls.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/PostControls */ "flarum/utils/PostControls");
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Post */ "flarum/components/Post");
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/*
 * This function duplicates Post Controls on header
 * if posts are very large and merge Discussion Controls
 * with Post Controls for first post in discussion
 */







/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'headerItems', function (items) {
    var _this = this;

    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // get all PostControls

    var controls = flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default.a.controls(this.attrs.post, this); // check if is set '1' for mergging controls

    if (defaultSettings.discussionControlsToPost.value === 1) {
      // check if is first post
      if (this.attrs.post.number() === 1) {
        // get type and id of discussion from post info
        var discussionData = this.attrs.post.data.relationships.discussion.data; // get current discussion from Flarum API

        var discussion = app.store.getById(discussionData.type, discussionData.id); // get moderation controls for current discussion

        var discussionModerationControls = flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4___default.a.moderationControls(discussion); // remove unneeded controls for discussion

        discussionModerationControls.has('lock') ? discussionModerationControls.remove('lock') : '';
        discussionModerationControls.has('sticky') ? discussionModerationControls.remove('sticky') : ''; // change icon for 'rename' control

        discussionModerationControls.has('rename') ? discussionModerationControls.get('rename').attrs.icon = 'fas fa-heading' : ''; // merge all controls in one list

        controls.merge(discussionModerationControls);
      }
    } // check if is set '1' for duplication


    if (defaultSettings.postControlsUp.value === 1) {
      // add item 'controls' on post header
      // like in original Flarum code
      items.add('controls', m("aside", {
        className: "Post-actions-top"
      }, m("ul", null, controls.toArray().length ? m("li", null, m(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "Post-controls-h",
        buttonClassName: "Button Button--icon Button--flat",
        menuClassName: "Dropdown-menu--right",
        icon: "fas fa-ellipsis-h",
        onshow: function onshow() {
          return _this.$(".Post-actions-top").addClass("open");
        },
        onhide: function onhide() {
          return _this.$(".Post-actions-top").removeClass("open");
        }
      }, controls.toArray())) : "")));
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_Post__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'view', function (original) {
    var _this2 = this;

    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // code from Flarum

    var attrs = this.elementAttrs();
    attrs.className = this.classes(attrs.className).join(' '); // get all PostControls

    var controls = flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default.a.controls(this.attrs.post, this); // check if is set '1' for mergging controls

    if (defaultSettings.discussionControlsToPost.value === 1) {
      // check if is first post
      if (this.attrs.post.number() === 1) {
        // get type and id of discussion from post info
        var discussionData = this.attrs.post.data.relationships.discussion.data; // get current discussion from Flarum API

        var discussion = app.store.getById(discussionData.type, discussionData.id); // get moderation controls option for current discussion

        var discussionModerationControls = flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4___default.a.moderationControls(discussion); // remove unneeded controls for discussion

        discussionModerationControls.has('lock') ? discussionModerationControls.remove('lock') : '';
        discussionModerationControls.has('sticky') ? discussionModerationControls.remove('sticky') : ''; // change icon for 'rename' control

        discussionModerationControls.has('rename') ? discussionModerationControls.get('rename').attrs.icon = 'fas fa-heading' : ''; // merge all controls in one list

        controls.merge(discussionModerationControls);
      } // return result
      // like in original Flarum code


      return m("article", attrs, m("div", null, this.content(), m("aside", {
        className: "Post-actions"
      }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.actionItems().toArray()), controls.toArray().length ? m("li", null, m(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "Post-controls",
        buttonClassName: "Button Button--icon Button--flat",
        menuClassName: "Dropdown-menu--right",
        icon: "fas fa-ellipsis-h",
        onshow: function onshow() {
          return _this2.$('.Post-actions').addClass('open');
        },
        onhide: function onhide() {
          return _this2.$('.Post-actions').removeClass('open');
        }
      }, controls.toArray())) : '')), m("footer", {
        className: "Post-footer"
      }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.footerItems().toArray())))));
    } else {
      // if is set '0' for mergging controls
      // return original Flarum code
      return original();
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removeActionItems.js":
/*!*************************************************!*\
  !*** ./src/forum/settings/removeActionItems.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function removes refresh button and
 * mark all as read button from top of
 * discussions list on main page
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'actionItems', function (items) {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for refresh button

    if (defaultSettings.refreshButton.value === 1) {
      // check if exists 'refresh' item
      if (items.has('refresh')) {
        // remove 'refresh' item
        items.remove('refresh');
      }
    } // check if is set '1' for mark all as read button


    if (defaultSettings.markAllAsReadButton.value === 1) {
      // check if exists 'markAllAsRead' item
      if (items.has('markAllAsRead')) {
        // remove 'markAllAsRead' item
        items.remove('markAllAsRead');
      }
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removeLeftsideMenu.js":
/*!**************************************************!*\
  !*** ./src/forum/settings/removeLeftsideMenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function removes leftside menu from main page
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'sidebarItems', function (items) {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for main page menu

    if (defaultSettings.mainPageMenu.value === 1) {
      // check if exists 'nav' item
      if (items.has('nav')) {
        // remove 'nav' item
        items.remove('nav');
      }
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removePane.js":
/*!******************************************!*\
  !*** ./src/forum/settings/removePane.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * This function removes leftside pane on discussion page
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oninit', function () {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for pane

    if (defaultSettings.pane.value === 1) {
      // disable pin button for pane 
      app.pane.disable();
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oncreate', function () {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for pane

    if (defaultSettings.pane.value === 1) {
      for (var _iterator = _createForOfIteratorHelperLoose(this.element.children), _step; !(_step = _iterator()).done;) {
        var i = _step.value;

        // check classname for pane
        if (i.className === 'DiscussionPage-list') {
          // remove pane with discussions list
          i.remove();
        }
      }
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removePostCount.js":
/*!***********************************************!*\
  !*** ./src/forum/settings/removePostCount.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function removes number of posts
 * from every discussion on main page
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oncreate', function () {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for post count

    if (defaultSettings.postCount.value === 1) {
      this.$('.DiscussionListItem-count').remove();
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removeReplyPlaceholder.js":
/*!******************************************************!*\
  !*** ./src/forum/settings/removeReplyPlaceholder.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/PostStream */ "flarum/components/PostStream");
/* harmony import */ var flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function removes area for posting from end of posts on discussion page
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PostStream__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (view) {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for post reply

    if (defaultSettings.postReply.value === 1) {
      // map all children of 'view'
      view.children.map(function (discuss) {
        // check if exists post with key 'reply'
        if (discuss.key === 'reply') {
          // remove last element from 'view.children'
          view.children.pop();
        }
      });
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removeRightsideMenu.js":
/*!***************************************************!*\
  !*** ./src/forum/settings/removeRightsideMenu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function removes rightside menu from discussion page
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function () {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for dicussion page menu

    if (defaultSettings.discussionMenu.value === 1) {
      this.$('.DiscussionPage-nav').remove();
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removeSidebarItems.js":
/*!**************************************************!*\
  !*** ./src/forum/settings/removeSidebarItems.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function removes blue button from
 * rightside from discussion page and
 * what is below to this
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'sidebarItems', function (items) {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for controls button

    if (defaultSettings.controlsButton.value === 1) {
      // check if exists 'controls' item
      if (items.has('controls')) {
        // remove 'controls' item
        items.remove('controls');
      }
    } // check if is set '1' for timeline


    if (defaultSettings.scrubberDiv.value === 1) {
      // check if exists 'scrubber' item
      if (items.has('scrubber')) {
        // remove 'scrubber' item
        items.remove('scrubber');
      }
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removeTerminalPost.js":
/*!**************************************************!*\
  !*** ./src/forum/settings/removeTerminalPost.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function removes last action info from every discussion on main page
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'infoItems', function (items) {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for terminal post

    if (defaultSettings.terminalPost.value === 1) {
      // check if exists 'terminalPost' item
      if (items.has('terminalPost')) {
        // remove 'terminalPost' item
        items.remove('terminalPost');
      }
    }
  });
});
;

/***/ }),

/***/ "./src/forum/settings/removeToolbar.js":
/*!*********************************************!*\
  !*** ./src/forum/settings/removeToolbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This function removes tools bar from top of
 * discussions list on main page
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oncreate', function () {
    // get all settings from Flarum API
    var defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings')); // check if is set '1' for toolbar

    if (defaultSettings.toolbar.value === 1) {
      this.$('.IndexPage-toolbar').remove();
    }
  });
});
;

/***/ }),

/***/ "flarum/common/components/HeaderSecondary":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['common/components/HeaderSecondary']" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/HeaderSecondary'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Navigation":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/Navigation']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Navigation'];

/***/ }),

/***/ "flarum/components/Post":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Post']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Post'];

/***/ }),

/***/ "flarum/components/PostStream":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/PostStream']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostStream'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/PostControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/PostControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/PostControls'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map