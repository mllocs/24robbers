'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_title = {
  width: '500px',
  margin: '140px auto 0',
  fontSize: '76px',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  verticalAlign: 'middle',
  textShadow: '2px 2px 1px #333'
};

var s_subtitle = {
  width: '800px',
  margin: '30px auto 0',
  fontSize: '40px',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  verticalAlign: 'middle',
  textShadow: '2px 2px 1px #333'
};

var Cover = function Cover(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-766284868'
  }, _react2.default.createElement('div', {
    className: 'jsx-766284868' + ' ' + 'cover_bg'
  }), _react2.default.createElement('div', {
    className: 'jsx-766284868' + ' ' + 'cover_image'
  }), _react2.default.createElement('div', {
    className: 'jsx-766284868' + ' ' + 'cover_text'
  }, _react2.default.createElement('div', { style: s_title, className: 'jsx-766284868'
  }, props.title), _react2.default.createElement('div', { style: s_subtitle, className: 'jsx-766284868'
  }, props.subtitle)), _react2.default.createElement(_style2.default, {
    styleId: '766284868',
    css: ['.cover_bg.jsx-766284868{background-color:black;width:100%;height:600px;position:absolute;top:0;z-index:-15;}', '.cover_image.jsx-766284868{background:url(static/titanic_bw.jpg) no-repeat center center fixed;background-color:black;background-size:cover;width:100%;height:600px;position:absolute;top:0;z-index:-10;opacity:0.4;}', '.cover_text.jsx-766284868{width:100%;height:400px;z-index:0;}']
  }));
};

exports.default = Cover;