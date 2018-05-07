'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-140681645'
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
    className: 'jsx-140681645'
  }, '24 Robbers Swing Band'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Karla', rel: 'stylesheet', className: 'jsx-140681645'
  }), _react2.default.createElement('link', { rel: 'icon', href: '/static/24.png', type: 'image/x-icon', className: 'jsx-140681645'
  })), _react2.default.createElement('div', {
    className: 'jsx-140681645'
  }, _react2.default.createElement(_Header2.default, null), _react2.default.createElement('div', {
    className: 'jsx-140681645' + ' ' + 'content'
  }, props.children)), _react2.default.createElement(_style2.default, {
    styleId: '140681645',
    css: ['body{margin:0;padding:0;font-family:Karla,Helvetica;}', '.content{margin-top:100px;}']
  }));
};

exports.default = Layout;