'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//https://placehold.it/
var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Toggle, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState(function (prevState) {
        return {
          isToggleOn: !prevState.isToggleOn
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement('img', { className: this.state.isToggleOn ? 'YES' : 'NO',
          onClick: this.handleClick,
          src: 'http://placehold.it/350x150',
          alt: 'whatever',
          height: '150',
          width: '150' }),
        React.createElement('img', { className: this.state.isToggleOn ? 'ON' : 'OFF',
          onClick: this.handleClick,
          src: 'http://www.w3schools.com/images/w3schools_green.jpg',
          alt: 'whatever',
          height: '150',
          width: '150' })
      );
    }
  }]);

  return Toggle;
}(React.Component);

var Multiple = function (_React$Component2) {
  _inherits(Multiple, _React$Component2);

  function Multiple(props) {
    _classCallCheck(this, Multiple);

    return _possibleConstructorReturn(this, (Multiple.__proto__ || Object.getPrototypeOf(Multiple)).call(this, props));
  }

  _createClass(Multiple, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Toggle, null),
        React.createElement('br', null), //Get ri of breaks!!
            React.createElement('br', null),
                React.createElement('br', null),
                    React.createElement('br', null),
                        React.createElement('br', null),
        React.createElement(Toggle, null)
      );
    }
  }]);

  return Multiple;
}(React.Component);

ReactDOM.render(React.createElement(Multiple, null), document.getElementById('root'));