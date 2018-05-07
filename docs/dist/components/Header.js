'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_title = {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: 0,
  margin: '0 0 0 20px',
  verticalAlign: 'middle',
  fontSize: 18,
  color: 'white'
};

var s_link = {};

var Header = function Header() {
  return _react2.default.createElement('div', {
    className: 'jsx-761682278' + ' ' + 'topbar'
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
    className: 'jsx-761682278'
  }, _react2.default.createElement('h1', { style: s_title, className: 'jsx-761682278'
  }, '24 Robbers swing band'))), _react2.default.createElement('div', {
    className: 'jsx-761682278' + ' ' + 'links'
  }, _react2.default.createElement(_link2.default, { href: 'https://www.facebook.com/pg/24RobbersSwingBand/' }, _react2.default.createElement('a', { target: '_blank', className: 'jsx-761682278' + ' ' + 'link'
  }, 'Facebook')), _react2.default.createElement(_link2.default, { href: '/photos' }, _react2.default.createElement('a', {
    className: 'jsx-761682278' + ' ' + 'link'
  }, 'Photos')), _react2.default.createElement(_link2.default, { href: '/videos' }, _react2.default.createElement('a', {
    className: 'jsx-761682278' + ' ' + 'link'
  }, 'Videos')), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
    className: 'jsx-761682278' + ' ' + 'link'
  }, 'Contact'))), _react2.default.createElement(_style2.default, {
    styleId: '761682278',
    css: ['.link{margin-right:25px;color:white;text-decoration:none;}', '.topbar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:16px 0;background-color:black;z-index:10;position:fixed;top:0;left:0;width:100%;}', '.links{margin-right:10px;}']
  }));
};

exports.default = Header;