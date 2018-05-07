'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Cover = require('../components/Cover');

var _Cover2 = _interopRequireDefault(_Cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_Cover2.default, {
    title: '24 Robbers Swing Band',
    subtitle: 'A one of a kind vintage jazz band'
  }), _react2.default.createElement('div', {
    className: 'jsx-2386645895' + ' ' + 'main_block'
  }, _react2.default.createElement('div', {
    className: 'jsx-2386645895' + ' ' + 'text_block'
  }, _react2.default.createElement('p', {
    className: 'jsx-2386645895'
  }, 'Let\u2019s swing it!'), _react2.default.createElement('p', {
    className: 'jsx-2386645895'
  }, '24 Robbers is a multicultural group of vintage jazz & blues musicians and dancers based in Lisbon,  well known among the swing dancers in Portugal.'), _react2.default.createElement('p', {
    className: 'jsx-2386645895'
  }, 'One of the very few vintage jazz bands in Portugal, 24 Robbers are making themselves a name on the dance-floors, clubs and festivals.')), _react2.default.createElement('img', { src: '/static/porto.jpg', className: 'jsx-2386645895'
  }), _react2.default.createElement('div', {
    className: 'jsx-2386645895' + ' ' + 'text_block'
  }, _react2.default.createElement('p', {
    className: 'jsx-2386645895'
  }, 'This international group, that truly appreciate the art of swing, is heavily influenced by Fats Waller, Louis Armstrong, Ella Fitzgerald, Slim & Slam, Duke Ellington, Django Reinhardt and many other greats stars from the 1920s to the 1940s.'), _react2.default.createElement('p', {
    className: 'jsx-2386645895'
  }, 'They don\u2019t play only for your listening pleasure. No sir, they don\u2019t. They also play for your feet and body, which will probably find it pretty hard to stay still during a 24 robbers concert!'), _react2.default.createElement('p', {
    className: 'jsx-2386645895'
  }, 'We can bring happiness and energy to any kind of event!')), _react2.default.createElement('img', { src: '/static/titanic_dancing1.jpg', className: 'jsx-2386645895'
  })), _react2.default.createElement(_style2.default, {
    styleId: '2386645895',
    css: ['.text_block.jsx-2386645895{background-color:#FDE8DE;padding:40px 100px;text-align:center;color:#6D625E;}', '.main_block.jsx-2386645895{background-color:black;text-align:center;}', 'p.jsx-2386645895{margin:40px 0;font-size:24px;line-height:32px;}', 'img.jsx-2386645895{width:70%;margin:0 auto;}']
  }));
};

exports.default = Index;