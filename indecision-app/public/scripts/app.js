"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: "handleToggleVisibility",
        value: function handleToggleVisibility() {
            this.setState(function (state) {
                return {
                    visible: !state.visible
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibility Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleToggleVisibility },
                    this.state.visible ? "make it vanish" : "make it appear"
                ),
                this.state.visible ? React.createElement(
                    "p",
                    null,
                    this.props.message
                ) : null,
                React.createElement(TimeReporter, null)
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

;

var TimeReporter = function (_React$Component2) {
    _inherits(TimeReporter, _React$Component2);

    function TimeReporter(props) {
        _classCallCheck(this, TimeReporter);

        var _this2 = _possibleConstructorReturn(this, (TimeReporter.__proto__ || Object.getPrototypeOf(TimeReporter)).call(this, props));

        _this2.tickClock = _this2.tickClock.bind(_this2);
        _this2.state = {
            time: Date().toString()
        };
        setInterval(_this2.tickClock, 1000);
        return _this2;
    }

    _createClass(TimeReporter, [{
        key: "tickClock",
        value: function tickClock() {
            this.setState(function () {
                return {
                    time: Date().toString()
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    Date().toString()
                )
            );
        }
    }]);

    return TimeReporter;
}(React.Component);

var message = "This is the message!";

ReactDOM.render(React.createElement(VisibilityToggle, { message: message }), document.getElementById("app"));
