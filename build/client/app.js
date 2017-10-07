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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @description A base component for mostly all components in this application.
 * Can be used to create a custom tag
 *
 * @export
 * @class BaseComponent
 */
var BaseComponent = function BaseComponent(selector) {
  _classCallCheck(this, BaseComponent);

  if (!selector || !(typeof selector === 'string')) {
    throw Error('to create a component, selector must exsting with type string');
  }

  this.element = document.createElement(selector);
};

exports.default = BaseComponent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Loading styles


// Loading global services


// Load slot machine game component


__webpack_require__(3);

var _logger = __webpack_require__(4);

var _logger2 = _interopRequireDefault(_logger);

var _slotMachine = __webpack_require__(5);

var _slotMachine2 = _interopRequireDefault(_slotMachine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.game = new _slotMachine2.default();
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			this.element = document.createElement('app');
			this.element.appendChild(this.game.element);

			document.body.appendChild(this.element);
		}
	}]);

	return App;
}();

// instantiate client global services


global.logger = new _logger2.default();

new App().render();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoggerService = function () {
	function LoggerService() {
		_classCallCheck(this, LoggerService);
	}

	_createClass(LoggerService, [{
		key: 'info',
		value: function info(message) {
			console.log('[Info] :', message);
		}
	}, {
		key: 'warning',
		value: function warning() {
			console.log('[Warning] :', message);
		}
	}, {
		key: 'error',
		value: function error() {
			console.log('[Error] :', message);
		}
	}]);

	return LoggerService;
}();

exports.default = LoggerService;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _reelAssembly = __webpack_require__(6);

var _reelAssembly2 = _interopRequireDefault(_reelAssembly);

var _spinResult = __webpack_require__(8);

var _spinResult2 = _interopRequireDefault(_spinResult);

var _playButtonContainer = __webpack_require__(9);

var _playButtonContainer2 = _interopRequireDefault(_playButtonContainer);

var _bonusIndicator = __webpack_require__(10);

var _bonusIndicator2 = _interopRequireDefault(_bonusIndicator);

var _slotMachine = __webpack_require__(11);

var _slotMachine2 = _interopRequireDefault(_slotMachine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import child components


// import local services


/**
 * @description Slot machine game base component. This component is responsible
 * to load all other child components like reel assembly, play button,
 * bonus indicator and result.
 *
 * @export
 * @class SlotMachineComponent
 * @extends {BaseComponent}
 */
var SlotMachineComponent = function (_BaseComponent) {
	_inherits(SlotMachineComponent, _BaseComponent);

	function SlotMachineComponent() {
		_classCallCheck(this, SlotMachineComponent);

		// instantiate child components
		var _this = _possibleConstructorReturn(this, (SlotMachineComponent.__proto__ || Object.getPrototypeOf(SlotMachineComponent)).call(this, 'slot-machine'));

		_this.reelAssembly = new _reelAssembly2.default();
		_this.SpinResultComponent = new _spinResult2.default();
		_this.playButtonContainer = new _playButtonContainer2.default();
		_this.bounsIndicator = new _bonusIndicator2.default();

		// instantiate local service
		_this.service = new _slotMachine2.default();

		// render slot machine view
		_this.render();
		return _this;
	}

	_createClass(SlotMachineComponent, [{
		key: 'render',
		value: function render() {
			this.appendChildElements();
			this.bindEvents();
		}

		////////////////////

		/**
   * @description append reel assembly, play button, bonus indicator and result area
   * into slot machine base component
   *
   * @function appendChildElements
   * @memberof SlotMachineComponent
   */

	}, {
		key: 'appendChildElements',
		value: function appendChildElements() {
			this.element.appendChild(this.SpinResultComponent.element);
			this.element.appendChild(this.reelAssembly.element);
			this.element.appendChild(this.playButtonContainer.element);
			this.element.appendChild(this.bounsIndicator.element);
		}

		/**
   * @description bind application events
   *
   * @function bindEvents
   * @memberof SlotMachineComponent
   */

	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			this.playButton = this.playButtonContainer.element.children.namedItem('playbutton');

			// spin the reels on click of `playButton`
			this.playButton.onclick = this.spinReels.bind(this);
		}

		/**
   * @description hit the lever to roll slot machine reels
   *
   * @function spinReels
   * @memberof SlotMachineComponent
   */

	}, {
		key: 'spinReels',
		value: function spinReels() {
			this.playButton.setAttribute('disabled', true);
			this.SpinResultComponent.message = 'Spinning...';

			this.service.triggerLever().then(handleSuccess.bind(this));

			function handleSuccess(response) {
				var resultNumbers = response.result;
				var hasBonus = response.hasBonus;
				var winType = response.winType;

				this.reelAssembly.resetReels(resultNumbers);
				this.SpinResultComponent.message = winType;

				hasBonus ? this.triggerBonus() : this.playButton.removeAttribute('disabled');
			}
		}

		/**
   * @description display bonus indicator for a while and then
   * automatically re-spin reels.
   *
   * @function triggerBonus
   * @memberof SlotMachineComponent
   */

	}, {
		key: 'triggerBonus',
		value: function triggerBonus() {
			this.bounsIndicator.trigger().then(this.spinReels.bind(this));
		}
	}]);

	return SlotMachineComponent;
}(_base2.default);

exports.default = SlotMachineComponent;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _reel = __webpack_require__(7);

var _reel2 = _interopRequireDefault(_reel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReelAssemblyComponent = function (_BaseComponent) {
	_inherits(ReelAssemblyComponent, _BaseComponent);

	function ReelAssemblyComponent() {
		_classCallCheck(this, ReelAssemblyComponent);

		// instantiate reels : array of three reels.
		// this is 3 reel machine. if slot machine is 5 reel type then
		// instantiate assembly with 5 reels
		var _this = _possibleConstructorReturn(this, (ReelAssemblyComponent.__proto__ || Object.getPrototypeOf(ReelAssemblyComponent)).call(this, 'game-reel-assembly'));

		_this.reels = [new _reel2.default(), new _reel2.default(), new _reel2.default()];

		_this.render();
		return _this;
	}

	_createClass(ReelAssemblyComponent, [{
		key: 'render',
		value: function render() {
			// load all three reels in reel assembly
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.reels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var reel = _step.value;

					this.element.appendChild(reel.element);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		////////////////////

		/**
   * @description reload reels with new graphics as per result received
   * from server
   *
   * @function resetReels
   * @param {any} result array of random numbers generated by api
   * @memberof ReelAssemblyComponent
   */

	}, {
		key: 'resetReels',
		value: function resetReels(result) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.reels.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _ref = _step2.value;

					var _ref2 = _slicedToArray(_ref, 2);

					var index = _ref2[0];
					var reel = _ref2[1];

					reel.setGraphic(result[index]);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	}]);

	return ReelAssemblyComponent;
}(_base2.default);

exports.default = ReelAssemblyComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReelComponent = function (_BaseComponent) {
	_inherits(ReelComponent, _BaseComponent);

	function ReelComponent() {
		_classCallCheck(this, ReelComponent);

		var _this = _possibleConstructorReturn(this, (ReelComponent.__proto__ || Object.getPrototypeOf(ReelComponent)).call(this, 'game-reel'));

		_this.render();
		return _this;
	}

	_createClass(ReelComponent, [{
		key: 'render',
		value: function render() {
			// initialize reel with `no-symbol` class
			this.element.className = 'no-symbol';
		}

		////////////////////

		/**
   * @description set appropriate graphic for reel according to
   * assigned graphicId
   *
   * @function setGraphic
   * @param {number} graphicId
   * @memberof ReelComponent
   */

	}, {
		key: 'setGraphic',
		value: function setGraphic(graphicId) {
			this.element.className = 'graphic-' + graphicId;
		}
	}]);

	return ReelComponent;
}(_base2.default);

exports.default = ReelComponent;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpinResultComponent = function (_BaseComponent) {
	_inherits(SpinResultComponent, _BaseComponent);

	function SpinResultComponent() {
		_classCallCheck(this, SpinResultComponent);

		var _this = _possibleConstructorReturn(this, (SpinResultComponent.__proto__ || Object.getPrototypeOf(SpinResultComponent)).call(this, 'spin-result'));

		_this.render();
		return _this;
	}

	_createClass(SpinResultComponent, [{
		key: 'render',
		value: function render() {
			this.element.textContent = "Let's play. Click on button below.";
		}

		////////////////////

	}, {
		key: 'message',
		set: function set(message) {
			return this.element.textContent = message;
		}
	}]);

	return SpinResultComponent;
}(_base2.default);

exports.default = SpinResultComponent;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayButtonContainerComponent = function (_BaseComponent) {
	_inherits(PlayButtonContainerComponent, _BaseComponent);

	function PlayButtonContainerComponent() {
		_classCallCheck(this, PlayButtonContainerComponent);

		var _this = _possibleConstructorReturn(this, (PlayButtonContainerComponent.__proto__ || Object.getPrototypeOf(PlayButtonContainerComponent)).call(this, 'play-button-container'));

		_this.render();
		return _this;
	}

	_createClass(PlayButtonContainerComponent, [{
		key: 'render',
		value: function render() {
			// craete a button element and set type and name attributes
			var playButton = document.createElement('button');
			playButton.type = 'button';
			playButton.name = 'playbutton';

			// append button to `play-button-container`
			this.element.appendChild(playButton);
		}
	}]);

	return PlayButtonContainerComponent;
}(_base2.default);

exports.default = PlayButtonContainerComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BounsIndicatorComponent = function (_BaseComponent) {
	_inherits(BounsIndicatorComponent, _BaseComponent);

	function BounsIndicatorComponent() {
		_classCallCheck(this, BounsIndicatorComponent);

		var _this = _possibleConstructorReturn(this, (BounsIndicatorComponent.__proto__ || Object.getPrototypeOf(BounsIndicatorComponent)).call(this, 'bonus-indicator'));

		_this.render();
		return _this;
	}

	_createClass(BounsIndicatorComponent, [{
		key: 'render',
		value: function render() {
			var title = document.createElement('h2');
			var message = document.createElement('p');

			title.textContent = 'You got the Bonus!';
			message.textContent = 'Free spin for you. Next spin is bonus for you and will ' + 'be triggered automatically. Have a fun!!!';

			this.element.appendChild(title);
			this.element.appendChild(message);
		}

		////////////////////

	}, {
		key: 'trigger',
		value: function trigger() {
			var _this2 = this;

			var indicatorShowPromise = new Promise(function (resolve) {
				_this2.show();
				setTimeout(function () {
					_this2.hide();
					resolve();
				}, 5000);
			});

			return indicatorShowPromise;
		}
	}, {
		key: 'show',
		value: function show() {
			this.element.className = 'show';
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.element.removeAttribute('class');
		}
	}]);

	return BounsIndicatorComponent;
}(_base2.default);

exports.default = BounsIndicatorComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(12);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @description This is a slot machine local service whic handles various
 * behaviours of SlotMachineComponent
 *
 * @export
 * @class SlotMachineService
 */
var SlotMachineService = function () {
	function SlotMachineService() {
		_classCallCheck(this, SlotMachineService);

		this.api = new _api2.default();
	}

	/**
  * @description makes API call to server to fetch spin result.
  * result would be in below format:
  * {
  * 	"result": array of randomNumbers,
  * 	"isBonus": true/false,
  * 	"winType": (Big Win | Small Win | No Win)
  * }
  *
  * @function triggerLever
  * @returns {promise} get result API response
  * @memberof SlotMachineService
  */


	_createClass(SlotMachineService, [{
		key: 'triggerLever',
		value: function triggerLever() {
			return this.animationDelay(2).then(this.getSpinResult.bind(this));
		}
	}, {
		key: 'getSpinResult',
		value: function getSpinResult() {
			return this.api.get('/api/spin/result').then(handleSuccess.bind(this)).catch(handleError);

			function handleSuccess(response) {
				logger.info('Successfull response');
				return response;
			}

			function handleError(err) {
				logger.error('Some thing went wrong: ', err);
			}
		}
	}, {
		key: 'animationDelay',
		value: function animationDelay(delayInSecond) {
			var delayPromise = new Promise(function (resolve) {
				setTimeout(function () {
					resolve();
				}, delayInSecond * 1000);
			});

			return delayPromise;
		}
	}]);

	return SlotMachineService;
}();

exports.default = SlotMachineService;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiService = function () {
	function ApiService() {
		_classCallCheck(this, ApiService);
	}

	_createClass(ApiService, [{
		key: 'get',
		value: function get(url) {
			return this.loadXMLRequest(url);
		}
	}, {
		key: 'loadXMLRequest',
		value: function loadXMLRequest(url) {
			var promise = new Promise(function (resolve, reject) {
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.responseType = 'json';

				xmlhttp.onreadystatechange = function () {
					if (xmlhttp.readyState == XMLHttpRequest.DONE) {
						if (xmlhttp.status == 200) {
							resolve(xmlhttp.response);
						} else if (xmlhttp.status == 400) {
							alert('There was an error 400');
							reject();
						} else {
							alert('something else other than 200 was returned');
							reject();
						}
					}
				};

				xmlhttp.open("GET", url, true);
				xmlhttp.send();
			});

			return promise;
		}
	}]);

	return ApiService;
}();

exports.default = ApiService;

/***/ })
/******/ ]);