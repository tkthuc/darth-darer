webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(36);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _hello = __webpack_require__(182);

	var _hello2 = _interopRequireDefault(_hello);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_hello2.default, null), document.getElementById('hello'));

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(36);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header() {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Header'
	                )
	            );
	        }
	    }]);

	    return Header;
	}(_react2.default.Component);

	var TableRow = function (_React$Component2) {
	    _inherits(TableRow, _React$Component2);

	    function TableRow() {
	        _classCallCheck(this, TableRow);

	        return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).apply(this, arguments));
	    }

	    _createClass(TableRow, [{
	        key: 'handleClick',
	        value: function handleClick(item) {
	            console.log(item);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement(
	                        'button',
	                        { onClick: this.handleClick.bind(this, this.props.person.id) },
	                        this.props.person.id
	                    )
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    this.props.person.name
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    this.props.person.age
	                )
	            );
	        }
	    }]);

	    return TableRow;
	}(_react2.default.Component);

	var Hello = function (_React$Component3) {
	    _inherits(Hello, _React$Component3);

	    function Hello() {
	        _classCallCheck(this, Hello);

	        var _this3 = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this));

	        _this3.state = {
	            people: [{
	                "id": 1,
	                "name": "Foo",
	                "age": "20"
	            }, {
	                "id": 2,
	                "name": "Bar",
	                "age": "30"
	            }, {
	                "id": 3,
	                "name": "Baz",
	                "age": "40"
	            }]
	        };
	        return _this3;
	    }

	    _createClass(Hello, [{
	        key: 'render',
	        value: function render() {
	            var myStyle = {
	                fontSize: 15,
	                color: '#FF0000'
	            };

	            return _react2.default.createElement(
	                'div',
	                { style: myStyle },
	                _react2.default.createElement(Header, null),
	                _react2.default.createElement(
	                    'table',
	                    null,
	                    _react2.default.createElement(
	                        'tbody',
	                        null,
	                        this.state.people.map(function (person, i) {
	                            return _react2.default.createElement(TableRow, { key: i, person: person });
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return Hello;
	}(_react2.default.Component);

	exports.default = Hello;

/***/ })

});