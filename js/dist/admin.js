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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/components/DefaultSettingsPage.js":
/*!*****************************************************!*\
  !*** ./src/admin/components/DefaultSettingsPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultSettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/ExtensionPage */ "flarum/common/components/ExtensionPage");
/* harmony import */ var flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/isExtensionEnabled */ "flarum/utils/isExtensionEnabled");
/* harmony import */ var flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ImageDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageDropdown */ "./src/admin/components/ImageDropdown.js");











var DefaultSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DefaultSettingsPage, _ExtensionPage);

  function DefaultSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = DefaultSettingsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _ExtensionPage.prototype.oninit.call(this, vnode); // get settings name in Object format


    this.settings = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings["block-cat.default_settings"]); // is used when data is saving

    this.loading = false; // is used to check modification

    this.modified = false; // is used to check settings with with another settings dependencies

    this.settingStates = {
      // is used for sidebarmenu from IndexPage
      hideMainPageMenu: 0,
      // is used for toolbar from IndexPage
      hideToolBar: 0,
      // is used for sidebarmenu from DiscussionPage
      hideDiscussionMenu: 0
    }; // check value for settings with dependencies
    // if value === 1 then some settings should to hide on page

    Object.keys(this.settings).map(function (key) {
      if (key === 'mainPageMenu') {
        _this.settingStates.hideMainPageMenu = _this.settings[key].value;
      }

      if (key === 'toolbar') {
        _this.settingStates.hideToolBar = _this.settings[key].value;
      }

      if (key === 'discussionMenu') {
        _this.settingStates.hideDiscussionMenu = _this.settings[key].value;
      }
    });
  };

  _proto.content = function content() {
    var _this2 = this;

    var allDiscussions = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.basics.all_discussions_label');
    return (// standard containers on extensions page
      m('.ExtensionPage-settings', [m('.container', [// insert all in form tag
      m('Form', {
        // onsubmit action call onsubmit method
        onsubmit: this.onsubmit.bind(this)
      }, [m('.Settings', [// Start Settings
      m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.settings.title')), m('.Settings-items', [// Start Settings-items
      !this.settingStates.hideMainPageMenu ? // check if 'mainPageMenu' is not selected
      m('.Form-group.item-allDiscussionsIcon', [// allDiscussionsIcon
      m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.settings.allDiscussionsIcon_icon', {
        text: allDiscussions
      }), [_ImageDropdown__WEBPACK_IMPORTED_MODULE_9__["default"].component({
        imageURL: this.settings['allDiscussionsIcon'].imageHelpURL
      })]), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.settings.allDiscussionsIcon_icon_help_text', {
        text: allDiscussions
      })), m('.inline', // if icon exists this will be displayed realtime on page
      this.settings['allDiscussionsIcon'].value !== "" ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()(this.settings['allDiscussionsIcon'].value) : '', this.settings['allDiscussionsIcon'].value !== "" ? m('span', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.basics.all_discussions_label')) : '', m('input.FormControl', {
        type: 'text',
        placeholder: "far fa-comments",
        value: this.settings['allDiscussionsIcon'].value,
        oninput: function oninput(e) {
          _this2.settings['allDiscussionsIcon'].value = e.target.value;
          _this2.modified = true;
        }
      }))]) : '', flarum_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_6___default()('fof-drafts') ? // check if 'fof-drafts' is enabled
      m('.Form-group.item-draftsIcon', [// draftsIcon
      m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.settings.draftsIcon_icon'), [_ImageDropdown__WEBPACK_IMPORTED_MODULE_9__["default"].component({
        imageURL: this.settings['draftsIcon'].imageHelpURL
      })]), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('block-cat-default.admin.settings.draftsIcon_icon_help_text')), m('.inline', // if icon exists this will be displayed realtime on page
      this.settings['draftsIcon'].value !== "" ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()(this.settings['draftsIcon'].value) : '', m('input.FormControl', {
        type: 'text',
        placeholder: "far fa-comments",
        value: this.settings['draftsIcon'].value,
        oninput: function oninput(e) {
          _this2.settings['draftsIcon'].value = e.target.value;
          _this2.modified = true;
        }
      }))]) : '', Object.keys(this.settings).map(function (key) {
        // exit because element was created yet
        if (key === 'allDiscussionsIcon' || key === 'draftsIcon') return;

        if (key === 'refreshButton' || key === 'markAllAsReadButton') {
          return [!_this2.settingStates.hideToolBar ? // check if 'toolbar' is not selected
          m('.Form-group.item-' + key, [// refreshButton and markAllAsReadButton
          flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
            state: _this2.settings[key].value || false,
            onchange: function onchange() {
              _this2.settings[key].value ^= true;
              _this2.modified = true;
            }
          }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key), [_ImageDropdown__WEBPACK_IMPORTED_MODULE_9__["default"].component({
            imageURL: _this2.settings[key].imageHelpURL
          })])), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key + "_help_text"))]) : ''];
        }

        if (key === 'controlsButton' || key === 'scrubberDiv') {
          return [!_this2.settingStates.hideDiscussionMenu ? // check if 'discussionMenu' is not selected
          m('.Form-group.item-' + key, [// controlsButton and scrubberDiv
          flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
            state: _this2.settings[key].value || false,
            onchange: function onchange() {
              _this2.settings[key].value ^= true;
              _this2.modified = true;
            }
          }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key), [_ImageDropdown__WEBPACK_IMPORTED_MODULE_9__["default"].component({
            imageURL: _this2.settings[key].imageHelpURL
          })])), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key + "_help_text"))]) : ''];
        } // create another elements


        return [m('.Form-group.item-' + key, [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
          state: _this2.settings[key].value || false,
          onchange: function onchange() {
            _this2.settings[key].value ^= true;
            _this2.modified = true; // mentioned elements have dependencies

            key === 'mainPageMenu' ? _this2.settingStates.hideMainPageMenu ^= true : '';
            key === 'toolbar' ? _this2.settingStates.hideToolBar ^= true : '';
            key === 'discussionMenu' ? _this2.settingStates.hideDiscussionMenu ^= true : '';
          }
        }, m('li', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key), [_ImageDropdown__WEBPACK_IMPORTED_MODULE_9__["default"].component({
          imageURL: _this2.settings[key].imageHelpURL
        })])), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("block-cat-default.admin.settings." + key + "_help_text"))])];
      })]) // End Settings-items
      ]), // End Settings
      // save button
      flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        type: 'submit',
        className: 'Button Button--primary',
        loading: this.loading,
        disabled: !this.modified
      }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.edit_header.submit_button'))])])])
    );
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    try {
      var _saveSettings;

      flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_5___default()((_saveSettings = {}, _saveSettings["block-cat.default_settings"] = JSON.stringify(this.settings), _saveSettings));
      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "success"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.settings.saved_message'));
    } catch (_unused) {
      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "error"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.lib.error.generic_message'));
    } finally {
      this.settings = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings["block-cat.default_settings"]);
      this.loading = false;
      this.modified = false;
    }
  };

  return DefaultSettingsPage;
}(flarum_common_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/ImageDropdown.js":
/*!***********************************************!*\
  !*** ./src/admin/components/ImageDropdown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);




var ImageDropdown = /*#__PURE__*/function (_Dropdown) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ImageDropdown, _Dropdown);

  function ImageDropdown() {
    return _Dropdown.apply(this, arguments) || this;
  }

  var _proto = ImageDropdown.prototype;

  _proto.oninit = function oninit(vnode) {
    _Dropdown.prototype.oninit.call(this, vnode);

    this.imageURL = this.attrs.imageURL;
  };

  _proto.view = function view() {
    return m("div", {
      className: 'ButtonGroup Dropdown dropdown ' + this.attrs.className + (this.showing ? ' open' : '')
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-info-circle', {
      className: 'Dropdown-toggle ' + this.attrs.buttonClassName,
      'aria-haspopup': "menu",
      'aria-label': this.attrs.accessibleToggleLabel,
      'data-toggle': "dropdown",
      onclick: this.attrs.onclick
    }), m("div", {
      className: 'Dropdown-menu dropdown-menu Dropdown-menu--left'
    }, m("img", {
      src: this.imageURL
    })));
  };

  return ImageDropdown;
}(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DefaultSettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DefaultSettingsPage */ "./src/admin/components/DefaultSettingsPage.js");

app.initializers.add('block-cat/default', function () {
  app.extensionData["for"]('block-cat-default').registerPage(_components_DefaultSettingsPage__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/ExtensionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/ExtensionPage']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/ExtensionPage'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/utils/isExtensionEnabled":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/isExtensionEnabled']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/isExtensionEnabled'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map