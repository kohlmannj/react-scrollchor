'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _animatescroll = require('./animatescroll');

var _animatescroll2 = _interopRequireDefault(_animatescroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;

var Scrollchor = function (_React$Component) {
  _inherits(Scrollchor, _React$Component);

  function Scrollchor() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Scrollchor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Scrollchor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event) {
      event.preventDefault();

      var animate = _this.props.animate;


      (0, _animatescroll2.default)(_this._to, animate);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Scrollchor, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$to = this.props.to;
      var to = _props$to === undefined ? '' : _props$to;

      this._to = to.replace(/^#/, '');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('a', _extends({}, this.props, { href: '#' + this._to, onClick: this.handleClick }));
    }
  }]);

  return Scrollchor;
}(_react2.default.Component);

Scrollchor.propTypes = {
  to: string.isRequired,
  animate: object
};
exports.default = Scrollchor;