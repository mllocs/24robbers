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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gallery = function (_Component) {
  (0, _inherits3.default)(Gallery, _Component);

  function Gallery() {
    (0, _classCallCheck3.default)(this, Gallery);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Gallery.__proto__ || (0, _getPrototypeOf2.default)(Gallery)).call(this));

    _this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    _this.closeLightbox = _this.closeLightbox.bind(_this);
    _this.gotoNext = _this.gotoNext.bind(_this);
    _this.gotoPrevious = _this.gotoPrevious.bind(_this);
    _this.gotoImage = _this.gotoImage.bind(_this);
    _this.handleClickImage = _this.handleClickImage.bind(_this);
    _this.openLightbox = _this.openLightbox.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Gallery, [{
    key: 'openLightbox',
    value: function openLightbox(index, event) {
      event.preventDefault();
      this.setState({
        currentImage: index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: 'closeLightbox',
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: 'gotoPrevious',
    value: function gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: 'gotoImage',
    value: function gotoImage(index) {
      this.setState({
        currentImage: index
      });
    }
  }, {
    key: 'handleClickImage',
    value: function handleClickImage() {
      if (this.state.currentImage === this.props.images.length - 1) return;

      this.gotoNext();
    }
  }, {
    key: 'renderGallery',
    value: function renderGallery() {
      var _this2 = this;

      var images = this.props.images;

      if (!images) return;

      var gallery = images.map(function (obj, i) {
        return _react2.default.createElement('a', {
          href: obj.src,
          style: classes.thumbnail,
          key: i,
          onClick: function onClick(e) {
            return _this2.openLightbox(i, e);
          }
        }, _react2.default.createElement('img', {
          src: obj.thumbnail,
          style: classes.source
        }));
      });

      return _react2.default.createElement('div', { style: classes.gallery }, gallery);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'section' }, this.props.heading && _react2.default.createElement('h2', null, this.props.heading), this.props.subheading && _react2.default.createElement('p', null, this.props.subheading), this.renderGallery(), _react2.default.createElement(_reactImages2.default, {
        currentImage: this.state.currentImage,
        images: this.props.images,
        isOpen: this.state.lightboxIsOpen,
        onClickImage: this.handleClickImage,
        onClickNext: this.gotoNext,
        onClickPrev: this.gotoPrevious,
        onClickThumbnail: this.gotoImage,
        onClose: this.closeLightbox,
        showThumbnails: this.props.showThumbnails,
        theme: this.props.theme
      }));
    }
  }]);

  return Gallery;
}(_react.Component);
// import { css, StyleSheet } from 'aphrodite/no-important';


Gallery.displayName = 'Gallery';

var gutter = {
  small: 2,
  large: 4
};

var classes = {
  gallery: {
    marginRight: -gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      marginRight: -gutter.large
    }
  },

  thumbnail: {
    boxSizing: 'border-box',
    display: 'block',
    float: 'left',
    lineHeight: 0,
    marginRight: gutter.small,
    marginBottom: gutter.small,
    overflow: 'hidden',
    width: '320px',
    height: '180px',

    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large
    }
  },

  source: {
    border: 0,
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    width: 'auto'
  }
};

exports.default = Gallery;