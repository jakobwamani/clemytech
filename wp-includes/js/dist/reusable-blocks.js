this["wp"] = this["wp"] || {}; this["wp"]["reusableBlocks"] =
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
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 452);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 479);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["element"]; }());
=======
(function() { module.exports = this["wp"]["element"]; }());
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());
=======
(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 452:
=======
(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ 479:
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
<<<<<<< HEAD
__webpack_require__.d(__webpack_exports__, "store", function() { return /* reexport */ store; });
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
__webpack_require__.d(__webpack_exports__, "ReusableBlocksMenuItems", function() { return /* reexport */ reusable_blocks_menu_items; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "__experimentalConvertBlockToStatic", function() { return __experimentalConvertBlockToStatic; });
__webpack_require__.d(actions_namespaceObject, "__experimentalConvertBlocksToReusable", function() { return __experimentalConvertBlocksToReusable; });
__webpack_require__.d(actions_namespaceObject, "__experimentalDeleteReusableBlock", function() { return __experimentalDeleteReusableBlock; });
__webpack_require__.d(actions_namespaceObject, "__experimentalSetEditingReusableBlock", function() { return __experimentalSetEditingReusableBlock; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "__experimentalIsEditingReusableBlock", function() { return __experimentalIsEditingReusableBlock; });

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__(56);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(16);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(47);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__(9);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);
=======
// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external {"this":["wp","coreData"]}
var external_this_wp_coreData_ = __webpack_require__(83);

// EXTERNAL MODULE: external {"this":["wp","notices"]}
var external_this_wp_notices_ = __webpack_require__(94);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external {"this":"regeneratorRuntime"}
var external_this_regeneratorRuntime_ = __webpack_require__(20);
var external_this_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_this_regeneratorRuntime_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(45);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(11);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/controls.js



/**
<<<<<<< HEAD
 * External dependencies
 */

/**
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
 * WordPress dependencies
 */



<<<<<<< HEAD

/**
 * Internal dependencies
 */


=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * Convert a reusable block to a static block effect handler
 *
 * @param {string}  clientId Block ID.
 * @return {Object} control descriptor.
 */

function convertBlockToStatic(clientId) {
  return {
    type: 'CONVERT_BLOCK_TO_STATIC',
    clientId: clientId
  };
}
/**
 * Convert a static block to a reusable block effect handler
 *
 * @param {Array}  clientIds Block IDs.
 * @return {Object} control descriptor.
 */

function controls_convertBlocksToReusable(clientIds) {
  return {
    type: 'CONVERT_BLOCKS_TO_REUSABLE',
    clientIds: clientIds
  };
}
/**
 * Deletes a reusable block.
 *
 * @param {string} id Reusable block ID.
 * @return {Object} control descriptor.
 */

<<<<<<< HEAD
function deleteReusableBlock(id) {
=======
function controls_deleteReusableBlock(id) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
  return {
    type: 'DELETE_REUSABLE_BLOCK',
    id: id
  };
}
var controls = {
<<<<<<< HEAD
  CONVERT_BLOCK_TO_STATIC: Object(external_wp_data_["createRegistryControl"])(function (registry) {
=======
  CONVERT_BLOCK_TO_STATIC: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    return function (_ref) {
      var clientId = _ref.clientId;
      var oldBlock = registry.select('core/block-editor').getBlock(clientId);
      var reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', oldBlock.attributes.ref);
<<<<<<< HEAD
      var newBlocks = Object(external_wp_blocks_["parse"])(Object(external_lodash_["isFunction"])(reusableBlock.content) ? reusableBlock.content(reusableBlock) : reusableBlock.content);
      registry.dispatch('core/block-editor').replaceBlocks(oldBlock.clientId, newBlocks);
    };
  }),
  CONVERT_BLOCKS_TO_REUSABLE: Object(external_wp_data_["createRegistryControl"])(function (registry) {
    return /*#__PURE__*/function () {
      var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(_ref2) {
        var clientIds, reusableBlock, updatedRecord, newBlock;
        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
=======
      var newBlocks = Object(external_this_wp_blocks_["parse"])(reusableBlock.content);
      registry.dispatch('core/block-editor').replaceBlocks(oldBlock.clientId, newBlocks);
    };
  }),
  CONVERT_BLOCKS_TO_REUSABLE: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return /*#__PURE__*/function () {
      var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(function _callee(_ref2) {
        var clientIds, reusableBlock, updatedRecord, newBlock;
        return external_this_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clientIds = _ref2.clientIds;
                reusableBlock = {
<<<<<<< HEAD
                  title: Object(external_wp_i18n_["__"])('Untitled Reusable Block'),
                  content: Object(external_wp_blocks_["serialize"])(registry.select('core/block-editor').getBlocksByClientId(clientIds)),
=======
                  title: Object(external_this_wp_i18n_["__"])('Untitled Reusable Block'),
                  content: Object(external_this_wp_blocks_["serialize"])(registry.select('core/block-editor').getBlocksByClientId(clientIds)),
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
                  status: 'publish'
                };
                _context.next = 4;
                return registry.dispatch('core').saveEntityRecord('postType', 'wp_block', reusableBlock);

              case 4:
                updatedRecord = _context.sent;
<<<<<<< HEAD
                newBlock = Object(external_wp_blocks_["createBlock"])('core/block', {
=======
                newBlock = Object(external_this_wp_blocks_["createBlock"])('core/block', {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
                  ref: updatedRecord.id
                });
                registry.dispatch('core/block-editor').replaceBlocks(clientIds, newBlock);

<<<<<<< HEAD
                registry.dispatch(store).__experimentalSetEditingReusableBlock(newBlock.clientId, true);
=======
                registry.dispatch('core/reusable-blocks').__experimentalSetEditingReusableBlock(newBlock.clientId, true);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();
  }),
<<<<<<< HEAD
  DELETE_REUSABLE_BLOCK: Object(external_wp_data_["createRegistryControl"])(function (registry) {
    return /*#__PURE__*/function () {
      var _ref5 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2(_ref4) {
        var id, reusableBlock, allBlocks, associatedBlocks, associatedBlockClientIds;
        return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
=======
  DELETE_REUSABLE_BLOCK: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return /*#__PURE__*/function () {
      var _ref5 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(function _callee2(_ref4) {
        var id, reusableBlock, allBlocks, associatedBlocks, associatedBlockClientIds;
        return external_this_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref4.id;
                reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', id); // Don't allow a reusable block with a temporary ID to be deleted

                if (reusableBlock) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                // Remove any other blocks that reference this reusable block
                allBlocks = registry.select('core/block-editor').getBlocks();
                associatedBlocks = allBlocks.filter(function (block) {
<<<<<<< HEAD
                  return Object(external_wp_blocks_["isReusableBlock"])(block) && block.attributes.ref === id;
=======
                  return Object(external_this_wp_blocks_["isReusableBlock"])(block) && block.attributes.ref === id;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
                });
                associatedBlockClientIds = associatedBlocks.map(function (block) {
                  return block.clientId;
                }); // Remove the parsed block.

                if (associatedBlockClientIds.length) {
                  registry.dispatch('core/block-editor').removeBlocks(associatedBlockClientIds);
                }

                _context2.next = 10;
                return registry.dispatch('core').deleteEntityRecord('postType', 'wp_block', id);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }();
  })
};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js


<<<<<<< HEAD
var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(__experimentalConvertBlockToStatic),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(__experimentalConvertBlocksToReusable),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(__experimentalDeleteReusableBlock);
=======
var _marked = /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(__experimentalConvertBlockToStatic),
    _marked2 = /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(__experimentalConvertBlocksToReusable),
    _marked3 = /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(__experimentalDeleteReusableBlock);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */

/**
 * Returns a generator converting a reusable block into a static block.
 *
 * @param {string} clientId The client ID of the block to attach.
 */

function __experimentalConvertBlockToStatic(clientId) {
<<<<<<< HEAD
  return external_regeneratorRuntime_default.a.wrap(function __experimentalConvertBlockToStatic$(_context) {
=======
  return external_this_regeneratorRuntime_default.a.wrap(function __experimentalConvertBlockToStatic$(_context) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return convertBlockToStatic(clientId);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Returns a generator converting one or more static blocks into a reusable block.
 *
 * @param {string[]} clientIds The client IDs of the block to detach.
 */

function __experimentalConvertBlocksToReusable(clientIds) {
<<<<<<< HEAD
  return external_regeneratorRuntime_default.a.wrap(function __experimentalConvertBlocksToReusable$(_context2) {
=======
  return external_this_regeneratorRuntime_default.a.wrap(function __experimentalConvertBlocksToReusable$(_context2) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return controls_convertBlocksToReusable(clientIds);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Returns a generator deleting a reusable block.
 *
 * @param {string} id The ID of the reusable block to delete.
 */

function __experimentalDeleteReusableBlock(id) {
<<<<<<< HEAD
  return external_regeneratorRuntime_default.a.wrap(function __experimentalDeleteReusableBlock$(_context3) {
=======
  return external_this_regeneratorRuntime_default.a.wrap(function __experimentalDeleteReusableBlock$(_context3) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
<<<<<<< HEAD
          return deleteReusableBlock(id);
=======
          return controls_deleteReusableBlock(id);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Returns an action descriptor for SET_EDITING_REUSABLE_BLOCK action.
 *
 * @param {string} clientId The clientID of the reusable block to target.
 * @param {boolean} isEditing Whether the block should be in editing state.
 * @return {Object} Action descriptor.
 */

function __experimentalSetEditingReusableBlock(clientId, isEditing) {
  return {
    type: 'SET_EDITING_REUSABLE_BLOCK',
    clientId: clientId,
    isEditing: isEditing
  };
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

function isEditingReusableBlock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if ((action === null || action === void 0 ? void 0 : action.type) === 'SET_EDITING_REUSABLE_BLOCK') {
    return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, action.clientId, action.isEditing));
  }

  return state;
}
<<<<<<< HEAD
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
=======
/* harmony default export */ var reducer = (Object(external_this_wp_data_["combineReducers"])({
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
  isEditingReusableBlock: isEditingReusableBlock
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js
/**
 * Returns true if reusable block is in the editing state.
 *
 * @param {Object} state Global application state.
 * @param {number} clientId the clientID of the block.
 * @return {boolean} Whether the reusable block is in the editing state.
 */
function __experimentalIsEditingReusableBlock(state, clientId) {
  return state.isEditingReusableBlock[clientId];
}

<<<<<<< HEAD
=======
// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/constants.js
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */
var STORE_KEY = 'core/reusable-blocks';

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





<<<<<<< HEAD
var STORE_NAME = 'core/reusable-blocks';
/**
 * Store definition for the reusable blocks namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
=======

/**
 * Data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
 *
 * @type {Object}
 */

<<<<<<< HEAD
var store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, {
=======
/* harmony default export */ var store = (Object(external_this_wp_data_["registerStore"])(STORE_KEY, {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
  actions: actions_namespaceObject,
  controls: store_controls,
  reducer: reducer,
  selectors: selectors_namespaceObject
<<<<<<< HEAD
});
Object(external_wp_data_["register"])(store);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(7);
=======
}));

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(7);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/reusable-block.js


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
var reusable_block_reusableBlock = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
=======
var reusable_block_reusableBlock = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
  d: "M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"
}));
/* harmony default export */ var reusable_block = (reusable_block_reusableBlock);

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","notices"]
var external_wp_notices_ = __webpack_require__(51);

=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-block-convert-button.js




/**
 * WordPress dependencies
 */







<<<<<<< HEAD

=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * Internal dependencies
 */


/**
 * Menu control to convert block(s) to reusable block.
 *
 * @param {Object}   props              Component props.
 * @param {string[]} props.clientIds    Client ids of selected blocks.
 * @param {string}   props.rootClientId ID of the currently selected top-level block.
 * @return {import('@wordpress/element').WPComponent} The menu control or null.
 */

function ReusableBlockConvertButton(_ref) {
  var clientIds = _ref.clientIds,
      rootClientId = _ref.rootClientId;
<<<<<<< HEAD
  var canConvert = Object(external_wp_data_["useSelect"])(function (select) {
=======
  var canConvert = Object(external_this_wp_data_["useSelect"])(function (select) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    var _getBlocksByClientId;

    var _select = select('core'),
        canUser = _select.canUser;

    var _select2 = select('core/block-editor'),
        getBlocksByClientId = _select2.getBlocksByClientId,
        canInsertBlockType = _select2.canInsertBlockType;

    var blocks = (_getBlocksByClientId = getBlocksByClientId(clientIds)) !== null && _getBlocksByClientId !== void 0 ? _getBlocksByClientId : [];
<<<<<<< HEAD
    var isReusable = blocks.length === 1 && blocks[0] && Object(external_wp_blocks_["isReusableBlock"])(blocks[0]) && !!select('core').getEntityRecord('postType', 'wp_block', blocks[0].attributes.ref);
=======
    var isReusable = blocks.length === 1 && blocks[0] && Object(external_this_wp_blocks_["isReusableBlock"])(blocks[0]) && !!select('core').getEntityRecord('postType', 'wp_block', blocks[0].attributes.ref);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

    var _canConvert = // Hide when this is already a reusable block.
    !isReusable && // Hide when reusable blocks are disabled.
    canInsertBlockType('core/block', rootClientId) && blocks.every(function (block) {
      return (// Guard against the case where a regular block has *just* been converted.
        !!block && // Hide on invalid blocks.
        block.isValid && // Hide when block doesn't support being made reusable.
<<<<<<< HEAD
        Object(external_wp_blocks_["hasBlockSupport"])(block.name, 'reusable', true)
=======
        Object(external_this_wp_blocks_["hasBlockSupport"])(block.name, 'reusable', true)
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
      );
    }) && // Hide when current doesn't have permission to do that.
    !!canUser('create', 'blocks');

    return _canConvert;
  }, [clientIds]);

<<<<<<< HEAD
  var _useDispatch = Object(external_wp_data_["useDispatch"])(store),
      convertBlocksToReusable = _useDispatch.__experimentalConvertBlocksToReusable;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]),
      createSuccessNotice = _useDispatch2.createSuccessNotice,
      createErrorNotice = _useDispatch2.createErrorNotice;

  var onConvert = Object(external_wp_element_["useCallback"])( /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
    return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
=======
  var _useDispatch = Object(external_this_wp_data_["useDispatch"])(STORE_KEY),
      convertBlocksToReusable = _useDispatch.__experimentalConvertBlocksToReusable;

  var _useDispatch2 = Object(external_this_wp_data_["useDispatch"])('core/notices'),
      createSuccessNotice = _useDispatch2.createSuccessNotice,
      createErrorNotice = _useDispatch2.createErrorNotice;

  var onConvert = Object(external_this_wp_element_["useCallback"])( /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(function _callee() {
    return external_this_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return convertBlocksToReusable(clientIds);

          case 3:
<<<<<<< HEAD
            createSuccessNotice(Object(external_wp_i18n_["__"])('Block created.'), {
=======
            createSuccessNotice(Object(external_this_wp_i18n_["__"])('Block created.'), {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
              type: 'snackbar'
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            createErrorNotice(_context.t0.message, {
              type: 'snackbar'
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  })), [clientIds]);

  if (!canConvert) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockSettingsMenuControls"], null, function (_ref3) {
    var onClose = _ref3.onClose;
    return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
=======
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockSettingsMenuControls"], null, function (_ref3) {
    var onClose = _ref3.onClose;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
      icon: reusable_block,
      onClick: function onClick() {
        onConvert();
        onClose();
      }
<<<<<<< HEAD
    }, Object(external_wp_i18n_["__"])('Add to Reusable blocks'));
  });
}

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-blocks-manage-button.js
=======
    }, Object(external_this_wp_i18n_["__"])('Add to Reusable blocks'));
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-block-delete-button.js


>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3


/**
 * WordPress dependencies
 */






<<<<<<< HEAD

function ReusableBlocksManageButton(_ref) {
  var clientId = _ref.clientId;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
=======
/**
 * Internal dependencies
 */



function ReusableBlockDeleteButton(_ref) {
  var clientId = _ref.clientId;

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    var _select = select('core/block-editor'),
        getBlock = _select.getBlock;

    var _select2 = select('core'),
        canUser = _select2.canUser;

<<<<<<< HEAD
    var reusableBlock = getBlock(clientId);
    return {
      isVisible: !!reusableBlock && Object(external_wp_blocks_["isReusableBlock"])(reusableBlock) && !!canUser('update', 'blocks', reusableBlock.attributes.ref)
    };
  }, [clientId]),
      isVisible = _useSelect.isVisible;
=======
    var blockObj = getBlock(clientId);
    var reusableBlock = blockObj && Object(external_this_wp_blocks_["isReusableBlock"])(blockObj) ? select('core').getEntityRecord('postType', 'wp_block', blockObj.attributes.ref) : null;
    return {
      block: blockObj,
      isVisible: !!reusableBlock && (reusableBlock.isTemporary || !!canUser('delete', 'blocks', reusableBlock.id)),
      isDisabled: reusableBlock && reusableBlock.isTemporary
    };
  }, [clientId]),
      isVisible = _useSelect.isVisible,
      isDisabled = _useSelect.isDisabled,
      block = _useSelect.block;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])(STORE_KEY),
      deleteReusableBlock = _useDispatch.__experimentalDeleteReusableBlock;

  var _useDispatch2 = Object(external_this_wp_data_["useDispatch"])('core/notices'),
      createSuccessNotice = _useDispatch2.createSuccessNotice,
      createErrorNotice = _useDispatch2.createErrorNotice;

  var onDelete = Object(external_this_wp_element_["useCallback"])( /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(function _callee() {
    return external_this_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return deleteReusableBlock(block.attributes.ref);

          case 3:
            createSuccessNotice(Object(external_this_wp_i18n_["__"])('Block deleted.'), {
              type: 'snackbar'
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            createErrorNotice(_context.t0.message, {
              type: 'snackbar'
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  })), [block]);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

  if (!isVisible) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockSettingsMenuControls"], null, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    href: Object(external_wp_url_["addQueryArgs"])('edit.php', {
      post_type: 'wp_block'
    })
  }, Object(external_wp_i18n_["__"])('Manage Reusable blocks')));
}

/* harmony default export */ var reusable_blocks_manage_button = (ReusableBlocksManageButton);
=======
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockSettingsMenuControls"], null, function (_ref3) {
    var onClose = _ref3.onClose;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
      disabled: isDisabled,
      onClick: function onClick() {
        // eslint-disable-next-line no-alert
        var hasConfirmed = window.confirm( // eslint-disable-next-line @wordpress/i18n-no-collapsible-whitespace
        Object(external_this_wp_i18n_["__"])('Are you sure you want to delete this Reusable Block?\n\n' + 'It will be permanently removed from all posts and pages that use it.'));

        if (hasConfirmed) {
          onDelete();
          onClose();
        }
      }
    }, Object(external_this_wp_i18n_["__"])('Remove from Reusable blocks'));
  });
}

/* harmony default export */ var reusable_block_delete_button = (ReusableBlockDeleteButton);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




function ReusableBlocksMenuItems(_ref) {
  var clientIds = _ref.clientIds,
      rootClientId = _ref.rootClientId;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(ReusableBlockConvertButton, {
    clientIds: clientIds,
    rootClientId: rootClientId
  }), clientIds.length === 1 && Object(external_wp_element_["createElement"])(reusable_blocks_manage_button, {
=======
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(ReusableBlockConvertButton, {
    clientIds: clientIds,
    rootClientId: rootClientId
  }), clientIds.length === 1 && Object(external_this_wp_element_["createElement"])(reusable_block_delete_button, {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    clientId: clientIds[0]
  }));
}

<<<<<<< HEAD
/* harmony default export */ var reusable_blocks_menu_items = (Object(external_wp_data_["withSelect"])(function (select) {
=======
/* harmony default export */ var reusable_blocks_menu_items = (Object(external_this_wp_data_["withSelect"])(function (select) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
  var _select = select('core/block-editor'),
      getSelectedBlockClientIds = _select.getSelectedBlockClientIds;

  return {
    clientIds: getSelectedBlockClientIds()
  };
})(ReusableBlocksMenuItems));

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/index.js


// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/index.js
/**
 * WordPress dependencies
 */



<<<<<<< HEAD



/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
=======
/**
 * Internal dependencies
 */




>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

<<<<<<< HEAD
/***/ 51:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());
=======
/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["coreData"]; }());

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["notices"]; }());
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/***/ })

/******/ });