"use strict";

//render in <ul>
//add tansitions
//randomize
//https://facebook.github.io/react/tutorial/tutorial.html for functionality
//http://www.jackcallister.com/2015/01/05/the-react-quick-start-guide.html image functionallity

//allocate the Components to separate files

'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      date: new Date()
    };
    return _this;
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'footer', {
          className: 'bg-footer'
        },
        '©all Rights Reserved to Hordan Senir 2017',
        React.createElement(
          'time',
          null,
          '   It is ',
          this.state.date.toLocaleTimeString(),
          '.'
        ),
        React.createElement(
          'details',
          null,
          React.createElement(
            'summary',
            null,
            'Click for Citation'
          ),
          React.createElement(
            'p',
            null,
            'Senir Hordan, 2017, Tel-Aviv, Israel, Technion'
          )
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

  //Fischer-Yates Algorithm
var randomArray=function(x){
        var length=x.length, j, temp, i;
        for(i=length-1; i>0;i--){
            j=Math.floor(Math.random()*(i+1));
            temp=x[i];
            x[i]=x[j];
            x[j]=temp;
        }
        return x;
  };

function Blog(props) {
//Assigning a variable to posts property
var newPosts=props.posts;
var shuffle = randomArray(newPosts);
  var content = shuffle.slice(0, 4).map(function (post) {
    return React.createElement(
      "div", {
        key: post.id,
        className: "container-top"
      },
      React.createElement(
        "div", {
          key: post.id,
          className: "container-fluid"
        },
        React.createElement("img", {
          className: "img-responsive center-block img-thumbnail",
          src: post.content,
          alt: post.title,
          height: "133",
          width: "100"
        })
      )
    );
  });
  var content2 = shuffle.splice(4).map(function (post) {
    return React.createElement(
      "div", {
        key: post.id,
        className: "container-top"
      },
      React.createElement(
        "div", {
          key: post.id,
          className: "container-fluid"
        },
        React.createElement("img", {
          className: "img-responsive center-block img-thumbnail",
          src: post.content,
          alt: post.title,
          height: "133",
          width: "100"
        })
      )
    );
  });
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1", {
        className: 'page-header'
      },
      'Memory Game'
    ),
    React.createElement(
      "section",
      null,
      content
    ),
    React.createElement(
      "section",
      null,
      content2
    ),
    React.createElement("hr", null),
    React.createElement(
      "section",
      null,
      content
    ),
    React.createElement(
      "section",
      null,
      content2
    ),

    React.createElement(Clock, null),
    React.createElement(
      "section",
      {className: 'img-scroll'},
      null
    )
  );
}

var posts = [{
  id: 1,
  title: 'Hello World',
  content: './src/image/pic.jpg'
}, {
  id: 2,
  title: 'Installation',
  content: './src/image/pic2.jpg'
}, {
  id: 3,
  title: 'Hello World',
  content: './src/image/pic3.jpg'
}, {
  id: 4,
  title: 'Installation',
  content: './src/image/pic4.jpg'
}, {
  id: 5,
  title: 'Hello World',
  content: './src/image/pic5.jpg'
}, {
  id: 6,
  title: 'Installation',
  content: './src/image/pic6.jpg'
}, {
  id: 7,
  title: 'Installation',
  content: './src/image/pic7.jpg'
}, {
  id: 8,
  title: 'Installation',
  content: './src/image/pic8.jpg'
}];
ReactDOM.render(React.createElement(Blog, {
  posts: posts
}), document.getElementById('root'));