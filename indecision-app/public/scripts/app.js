'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless functional component are used wherever possible. The class based components are still kept as comments.


var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) this.setState(function () {
                    return { options: options };
                });
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("bye :(");
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            this.setState(function (state) {
                return {
                    options: state.options.filter(function (o) {
                        return o !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick(i) {
            alert(this.state.options[i]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(optionText) {
            if (!optionText) return "Empty textbox is not a valid option";
            if (this.state.options.indexOf(optionText) > -1) return "Please enter a new option";

            this.setState(function (state) {
                return {
                    options: state.options.concat([optionText])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = "Put your life in the hands of a computer!";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { numOptions: this.state.options.length, handlePick: this.handlePick }),
                React.createElement(Options, { handleDeleteOptions: this.handleDeleteOptions, handleDeleteOption: this.handleDeleteOption, options: this.state.options }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

;

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision"
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// };


var Action = function Action(props) {
    var handlePick = function handlePick() {
        var ran = Math.floor(Math.random() * props.numOptions);
        props.handlePick(ran);
    };
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: handlePick,
                disabled: props.numOptions == 0
            },
            'What should I do?'
        )
    );
};

// class Action extends React.Component {

//     constructor(props){
//         super(props);
//         this.handlePick = this.handlePick.bind(this);
//     }


//     handlePick(){
//         const ran = Math.floor(Math.random()*this.props.numOptions);
//         this.props.handlePick(ran);
//     }

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.handlePick}
//                     disabled={this.props.numOptions==0}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }


var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.length === 0 ? React.createElement(
            'p',
            null,
            'Please add some options to get started!'
        ) : React.createElement(
            'p',
            null,
            'Here are your options:'
        ),
        React.createElement(
            'ol',
            null,
            props.options.map(function (opt, i) {
                return React.createElement(Option, { key: i, opt: opt, handleDeleteOption: props.handleDeleteOption });
            })
        )
    );
};

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <p>Options Component Here:</p>
//                 <ol>
//                     {this.props.options.map((opt, i) => <Option key = {i} opt={opt}/>)}
//                 </ol>
//             </div>
//         );
//     }
// }

var Option = function Option(props) {

    var handleDeleteOption = function handleDeleteOption() {
        props.handleDeleteOption(props.opt);
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            null,
            props.opt,
            ' ',
            React.createElement(
                'button',
                { onClick: handleDeleteOption },
                'Remove'
            )
        )
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li>{this.props.opt}</li>
//             </div>
//         );
//     }
// }


var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            if (!error) {
                e.target.elements.option.value = '';
            }

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && this.state.error,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ["option 1", "option 2"] }), document.getElementById("app"));
