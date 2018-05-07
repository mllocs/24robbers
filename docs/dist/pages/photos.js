'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Gallery = require('../components/Gallery');

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HARD_ROCK_IMAGES = [{ id: '1', caption: '' }, { id: '2', caption: '' }, { id: '3', caption: '' }];

var XMAS_SWING_STATION_IMAGES = [{ id: '1', caption: '' }, { id: '2', caption: '' }, { id: '3', caption: '' }, { id: '4', caption: '' }, { id: '5', caption: '' }, { id: '6', caption: '' }];

var PORTO_IMAGES = [{ id: '1', caption: '' }, { id: '2', caption: '' }, { id: '3', caption: '' }, { id: '4', caption: '' }, { id: '5', caption: '' }, { id: '6', caption: '' }];

var TITANIC_IMAGES = [{ id: '1', caption: '' }, { id: '2', caption: '' }, { id: '3', caption: '' }, { id: '4', caption: '' }, { id: '5', caption: '' }, { id: '6', caption: '' }];

var SALVATERRA_IMAGES = [{ id: '1', caption: '' }, { id: '2', caption: '' }, { id: '3', caption: '' }, { id: '4', caption: '' }, { id: '5', caption: '' }, { id: '6', caption: '' }];

var Photos = function (_Component) {
  (0, _inherits3.default)(Photos, _Component);

  function Photos() {
    (0, _classCallCheck3.default)(this, Photos);

    return (0, _possibleConstructorReturn3.default)(this, (Photos.__proto__ || (0, _getPrototypeOf2.default)(Photos)).apply(this, arguments));
  }

  (0, _createClass3.default)(Photos, [{
    key: 'mapImages',
    value: function mapImages(images, prefix) {
      return images.map(function (_ref) {
        var id = _ref.id,
            caption = _ref.caption;

        return {
          src: '/static/' + prefix + '/' + id + '.jpg',
          thumbnail: '/static/' + prefix + '/' + id + '_320.jpg',
          srcset: ['/static/' + prefix + '/' + id + '_320.jpg 320w', '/static/' + prefix + '/' + id + '.jpg 1600w'],
          caption: caption
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('div', {
        className: 'jsx-2762212016' + ' ' + 'gallery'
      }, _react2.default.createElement('div', {
        className: 'jsx-2762212016' + ' ' + 'title'
      }, 'Concert at Hard Rock Cafe, Lisboa (May 2018)'), _react2.default.createElement(_Gallery2.default, { images: this.mapImages(HARD_ROCK_IMAGES, 'hard_rock_may_2018') }), _react2.default.createElement('div', {
        className: 'jsx-2762212016' + ' ' + 'title'
      }, 'Concert at Teatro Comuna, Lisboa (December 2017)'), _react2.default.createElement(_Gallery2.default, { images: this.mapImages(XMAS_SWING_STATION_IMAGES, 'xmas_swing_station_december_2017') }), _react2.default.createElement('div', {
        className: 'jsx-2762212016' + ' ' + 'title'
      }, 'Concert at Mercado Bom Sucesso, Porto (November 2017)'), _react2.default.createElement(_Gallery2.default, { images: this.mapImages(TITANIC_IMAGES, 'porto_november_2017') }), _react2.default.createElement('div', {
        className: 'jsx-2762212016' + ' ' + 'title'
      }, 'Concert at Salvaterra Festival (June 2017)'), _react2.default.createElement(_Gallery2.default, { images: this.mapImages(SALVATERRA_IMAGES, 'salvaterra_june_2017') }), _react2.default.createElement('div', {
        className: 'jsx-2762212016' + ' ' + 'title'
      }, 'Concert at Titanic sur Mer, Lisbon (March 2017)'), _react2.default.createElement(_Gallery2.default, { images: this.mapImages(TITANIC_IMAGES, 'titanic_march_2017') })), _react2.default.createElement(_style2.default, {
        styleId: '2762212016',
        css: ['.title.jsx-2762212016{text-transform:uppercase;font-size:20px;padding:8px 0;margin-top:40px;}', '.gallery.jsx-2762212016{width:968px;margin:40px auto;}']
      }));
    }
  }]);

  return Photos;
}(_react.Component);

exports.default = Photos;