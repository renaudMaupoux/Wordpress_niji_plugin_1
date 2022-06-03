/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/4-block/edit.js":
/*!*****************************!*\
  !*** ./src/4-block/edit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/4-block/editor.scss");




function Edit(props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(); // La fonction qui met à jour la valeur

  const onChangeContent = content => {
    props.setAttributes({
      content: content
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "first-line"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "#"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    placeholder: "1",
    value: props.attributes.number,
    className: "number",
    onChange: number => props.setAttributes({
      number
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h2",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your title here', 'new-gutenberg-block'),
    value: props.attributes.title,
    className: "title",
    onChange: title => props.setAttributes({
      title
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your content here', 'new-gutenberg-block'),
    value: props.attributes.content,
    className: "content",
    onChange: content => props.setAttributes({
      content
    })
  }));
}

/***/ }),

/***/ "./src/4-block/index.js":
/*!******************************!*\
  !*** ./src/4-block/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/4-block/style.scss");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons.js */ "./src/icons.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/4-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/4-block/save.js");




/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('new-gutenberg-block/css', {
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].icon5,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/4-block/save.js":
/*!*****************************!*\
  !*** ./src/4-block/save.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save(props) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "first-line"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "#"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    className: "number",
    value: props.attributes.number
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    className: "title",
    value: props.attributes.title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: "content",
    value: props.attributes.content
  }));
}

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const blockIcons = {};
blockIcons.icon1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "700pt",
  height: "700pt",
  viewBox: "0 0 700 700"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "e",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.766-1.125c-.969.5-1.98.875-3.031 1.125-1.043.258-2.137.39-3.281.39-3.399 0-6.09-.945-8.079-2.843-1.992-1.906-2.984-4.485-2.984-7.735 0-3.257.992-5.835 2.984-7.734 1.989-1.906 4.68-2.86 8.079-2.86 1.144 0 2.238.133 3.28.391 1.052.25 2.063.625 3.032 1.125v4.219c-.98-.656-1.945-1.14-2.89-1.453a9.532 9.532 0 00-3-.469c-1.876 0-3.352.606-4.423 1.813-1.074 1.199-1.609 2.855-1.609 4.968 0 2.106.535 3.762 1.61 4.97C9.523-4.02 11-3.423 12.874-3.423c1.051 0 2.051-.148 3-.453.946-.312 1.91-.8 2.891-1.469z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "c",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.734-11.141a6.765 6.765 0 00-1.297-.438 5.346 5.346 0 00-1.265-.156c-1.262 0-2.231.406-2.907 1.219-.68.805-1.015 1.953-1.015 3.453V0H2.36v-15.312h4.89v2.515c.625-1 1.344-1.726 2.156-2.187.82-.469 1.8-.703 2.937-.703.164 0 .344.011.532.03.195.013.476.04.843.079z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "a",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.641-7.703v1.406H6.188c.125 1.148.54 2.008 1.25 2.578.707.574 1.703.86 2.984.86a11.52 11.52 0 003.157-.454 16.707 16.707 0 003.328-1.39v3.765a20.629 20.629 0 01-3.47.985A18.006 18.006 0 019.97.39C7.196.39 5.04-.313 3.5-1.72 1.97-3.125 1.203-5.098 1.203-7.64c0-2.5.754-4.46 2.266-5.89 1.508-1.438 3.582-2.157 6.219-2.157 2.406 0 4.332.731 5.781 2.188 1.445 1.45 2.172 3.383 2.172 5.797zM12.61-9.328c0-.926-.274-1.672-.813-2.234-.543-.57-1.25-.86-2.125-.86-.949 0-1.719.266-2.312.797s-.965 1.297-1.11 2.297z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "j",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.219-6.89c-1.024 0-1.793.171-2.313.515-.511.344-.765.855-.765 1.531 0 .625.207 1.117.625 1.469.414.344.988.516 1.718.516.926 0 1.704-.328 2.329-.985.632-.664.953-1.492.953-2.484v-.563zm7.469-1.844V0h-4.922v-2.266c-.657.93-1.399 1.606-2.22 2.032-.823.414-1.823.625-3 .625-1.585 0-2.87-.457-3.859-1.375-.992-.926-1.484-2.13-1.484-3.61 0-1.789.613-3.101 1.844-3.937 1.238-.844 3.18-1.266 5.828-1.266h2.89v-.39c0-.77-.308-1.333-.921-1.688-.617-.363-1.57-.547-2.86-.547-1.054 0-2.03.106-2.937.313-.899.21-1.73.523-2.5.937v-3.734c1.039-.25 2.086-.442 3.14-.578a25.68 25.68 0 013.188-.204c2.758 0 4.75.547 5.969 1.641 1.226 1.086 1.844 2.856 1.844 5.313z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "b",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.703-19.656v4.344h5.047v3.5H7.703v6.5c0 .71.14 1.187.422 1.437s.836.375 1.672.375h2.515V0H8.125C6.187 0 4.812-.398 4-1.203c-.805-.812-1.203-2.18-1.203-4.11v-6.5H.375v-3.5h2.422v-4.343z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "i",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12.766-13.078v-8.203h4.922v21.28h-4.922v-2.218c-.668.906-1.406 1.57-2.219 1.985S8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.211-1.5-1.813-3.426-1.813-5.782 0-2.363.602-4.297 1.812-5.797 1.207-1.5 2.754-2.25 4.641-2.25 1.063 0 2 .215 2.813.641.82.43 1.566 1.086 2.234 1.969zM9.547-3.156c1.04 0 1.836-.379 2.39-1.14.552-.77.829-1.883.829-3.344 0-1.457-.277-2.567-.828-3.329-.555-.77-1.352-1.156-2.39-1.156-1.044 0-1.84.387-2.391 1.156-.555.762-.829 1.872-.829 3.329 0 1.46.274 2.574.829 3.343.55.762 1.347 1.14 2.39 1.14z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "h",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10.5-3.156c1.05 0 1.852-.38 2.406-1.14.551-.77.828-1.884.828-3.345 0-1.457-.277-2.566-.828-3.328-.554-.77-1.355-1.156-2.406-1.156-1.055 0-1.86.387-2.422 1.156-.555.774-.828 1.883-.828 3.328 0 1.45.273 2.559.828 3.329.563.773 1.367 1.156 2.422 1.156zm-3.25-9.922c.676-.883 1.422-1.54 2.234-1.969.82-.426 1.766-.64 2.829-.64 1.894 0 3.445.75 4.656 2.25 1.207 1.5 1.812 3.433 1.812 5.796 0 2.356-.605 4.282-1.812 5.782C15.758-.36 14.207.39 12.312.39 11.25.39 10.305.18 9.484-.234 8.672-.66 7.926-1.32 7.25-2.22V0H2.36v-21.281h4.89z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "g",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M.344-15.312h4.89L9.36-4.921l3.5-10.391h4.89L11.313 1.454c-.648 1.695-1.402 2.883-2.265 3.562-.867.688-2 1.032-3.406 1.032H2.797v-3.22h1.531c.832 0 1.438-.136 1.813-.405.382-.262.68-.73.89-1.407l.14-.421z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "f",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.953-3.719H6.734L5.422 0H.14l7.563-20.406h6.266L21.53 0H16.25zM8.047-7.5h5.578l-2.781-8.125z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "u",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.578-20.406h6.688l4.656 10.922 4.672-10.922h6.687V0h-4.984v-14.938L15.594-3.922h-3.328L7.562-14.938V0H2.578z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "t",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10.75-12.516c.82 0 1.445-.18 1.875-.547.438-.363.656-.898.656-1.61 0-.695-.219-1.226-.656-1.593-.43-.375-1.055-.563-1.875-.563H7.828v4.313zm.172 8.938c1.062 0 1.86-.223 2.39-.672.532-.446.797-1.125.797-2.032 0-.882-.265-1.546-.797-1.984-.523-.437-1.32-.656-2.39-.656H7.828v5.344zm4.89-7.344c1.133.324 2.008.93 2.625 1.812.625.887.938 1.969.938 3.25 0 1.969-.668 3.438-2 4.406C16.039-.484 14.019 0 11.312 0H2.578v-20.406h7.89c2.833 0 4.883.43 6.157 1.28 1.281.856 1.922 2.227 1.922 4.11 0 1-.235 1.852-.703 2.547-.47.688-1.149 1.203-2.032 1.547z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "s",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12.422-21.281v3.219H9.719c-.688 0-1.172.125-1.453.375-.274.25-.406.687-.406 1.312v1.063h4.187v3.5H7.86V0H2.969v-11.812H.531v-3.5H2.97v-1.063c0-1.664.46-2.898 1.39-3.703.926-.8 2.368-1.203 4.329-1.203z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "d",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.64-12.188c-1.085 0-1.914.39-2.484 1.172-.574.781-.86 1.906-.86 3.375s.286 2.594.86 3.375c.57.773 1.399 1.156 2.485 1.156 1.062 0 1.875-.383 2.437-1.156.57-.781.86-1.906.86-3.375s-.29-2.594-.86-3.375c-.562-.781-1.375-1.172-2.437-1.172zm0-3.5c2.633 0 4.692.715 6.172 2.14 1.477 1.419 2.22 3.387 2.22 5.907 0 2.512-.743 4.48-2.22 5.906C14.333-.317 12.274.39 9.642.39c-2.649 0-4.715-.707-6.203-2.125-1.493-1.426-2.235-3.394-2.235-5.906 0-2.52.742-4.488 2.235-5.906 1.488-1.426 3.554-2.141 6.203-2.141z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "r",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.547-12.766c.613-.945 1.348-1.672 2.203-2.172.852-.5 1.79-.75 2.813-.75 1.757 0 3.097.547 4.015 1.64.926 1.087 1.39 2.657 1.39 4.72V0h-4.921v-8.345c.008-.132.016-.32.016-.562 0-1.082-.165-1.863-.485-2.343-.312-.489-.824-.735-1.531-.735-.93 0-1.648.387-2.156 1.156-.512.762-.774 1.868-.782 3.313v7.515h-4.921v-7.984c0-1.695-.149-2.785-.438-3.266-.293-.488-.812-.734-1.562-.734-.938 0-1.665.387-2.172 1.156-.512.762-.766 1.86-.766 3.297V0H2.328v-15.312H7.25v2.235c.602-.864 1.29-1.516 2.063-1.953a5.186 5.186 0 012.578-.657c1.062 0 2 .258 2.812.766.813.512 1.426 1.23 1.844 2.156z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "q",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.75-9.328V0h-4.922v-7.11c0-1.343-.031-2.265-.094-2.765s-.168-.867-.312-1.11a1.994 1.994 0 00-.781-.734 2.295 2.295 0 00-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-21.28h4.89v8.203c.738-.883 1.52-1.54 2.344-1.969.832-.426 1.75-.64 2.75-.64 1.77 0 3.113.546 4.031 1.64.914 1.086 1.375 2.656 1.375 4.719z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "p",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.578-20.406h5.875l7.422 14v-14h4.984V0h-5.875L7.563-14V0H2.578z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "o",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.188-5.969v-9.344h4.921v1.532c0 .836-.007 1.875-.015 3.125-.012 1.25-.016 2.086-.016 2.5 0 1.242.031 2.132.094 2.672.07.542.18.933.328 1.171.207.325.473.575.797.75.32.168.691.25 1.11.25 1.019 0 1.82-.39 2.406-1.171.582-.782.875-1.868.875-3.266v-7.563h4.89V0h-4.89v-2.218c-.743.898-1.524 1.558-2.344 1.984C9.519.179 8.609.39 7.609.39c-1.761 0-3.105-.54-4.03-1.625-.93-1.082-1.391-2.66-1.391-4.734z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "n",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.75-9.328V0h-4.922v-7.14c0-1.32-.031-2.235-.094-2.735s-.168-.867-.312-1.11a1.994 1.994 0 00-.781-.734 2.295 2.295 0 00-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-15.311h4.89v2.234c.738-.883 1.52-1.539 2.344-1.969.832-.425 1.75-.64 2.75-.64 1.77 0 3.113.547 4.031 1.64.914 1.086 1.375 2.657 1.375 4.72z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "m",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.578-20.406h8.735c2.593 0 4.581.578 5.968 1.734 1.395 1.149 2.094 2.79 2.094 4.922 0 2.137-.7 3.782-2.094 4.938-1.386 1.156-3.375 1.734-5.968 1.734H7.828V0h-5.25zm5.25 3.813v5.703h2.922c1.02 0 1.805-.25 2.36-.75.562-.5.843-1.203.843-2.11 0-.914-.281-1.617-.844-2.11-.554-.487-1.34-.734-2.359-.734z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "l",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.36-15.312h4.89V-.281c0 2.05-.496 3.617-1.484 4.703-.98 1.082-2.407 1.625-4.282 1.625H-.937V2.828h.859c.926 0 1.562-.21 1.906-.625.352-.418.531-1.246.531-2.484zm0-5.969h4.89v4H2.36z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "k",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.719-14.828v3.984a7.612 7.612 0 00-2-1.015 6.629 6.629 0 00-2.078-.328c-1.367 0-2.434.402-3.203 1.203-.762.793-1.14 1.906-1.14 3.344 0 1.43.378 2.543 1.14 3.343.77.793 1.836 1.188 3.203 1.188.758 0 1.484-.11 2.172-.328a6.412 6.412 0 001.906-1.016v4c-.762.281-1.54.488-2.328.625a13.04 13.04 0 01-2.375.219C7.254.39 5.094-.316 3.53-1.734 1.977-3.148 1.203-5.117 1.203-7.64c0-2.531.774-4.504 2.328-5.922 1.563-1.414 3.723-2.125 6.485-2.125.8 0 1.594.074 2.375.219.781.136 1.555.351 2.328.64z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M497.28 222.32c-11.199 0-21.84 1.68-31.922 5.04l-33.039-85.68h24.082c-1.68 1.12-3.922 3.358-7.84 5.6-3.36 2.239-3.922 6.16-2.239 9.52 1.122 2.238 3.36 3.36 5.602 3.36 1.121 0 2.8-.559 3.922-1.122 9.52-6.16 19.039-14 16.238-22.398-2.8-8.398-15.121-8.96-22.398-8.96h-36.961c-3.922 0-6.719 3.359-6.719 6.718 0 3.922 3.36 6.72 6.719 6.72h3.922l11.199 28.558-129.36-.558-5.602-14h8.961c3.922 0 6.719-3.36 6.719-6.72 0-3.921-3.36-6.718-6.719-6.718h-36.398c-3.922 0-6.719 3.36-6.719 6.719 0 3.922 3.36 6.719 6.72 6.719h12.878l7.84 20.16-35.84 58.238c-14-7.282-30.238-11.2-47.039-11.2h-.559c-57.69.005-104.73 46.485-104.73 104.72 0 58.239 46.48 105.28 104.72 105.28h.559c54.879 0 100.24-42.558 104.72-96.32h44.801c2.8 0 5.04-1.12 6.16-3.359l77.84-140.56 15.68 40.32c-35.84 16.801-60.48 52.641-60.48 94.641 0 58.238 46.48 105.28 104.72 105.28h.559c57.68 0 104.72-47.039 105.28-104.72-.555-57.684-47.035-105.29-105.27-105.29zm-294 196c-24.641 0-47.602-9.52-64.961-26.879s-26.32-40.32-26.32-64.398c0-49.84 40.879-90.719 91.281-90.719h.559c14.559 0 28 3.36 39.762 9.52l-48.72 79.52c-1.12 2.238-1.12 5.039 0 7.28 1.122 2.239 3.36 3.36 6.16 3.36L294 336c-4.48 46.48-43.68 82.32-90.72 82.32zM212.8 322l42.558-69.441C277.756 268.239 292.32 293.438 294 322zm95.198 0c-1.68-33.602-19.039-63.281-45.359-81.199l30.238-49.281L342.717 322zm45.922-9.52l-49.28-129.36 120.96.56zm142.8 105.84c-50.398 0-91.28-41.44-91.28-91.28 0-35.84 21.28-67.2 52.077-81.762l32.484 84.562c1.122 2.8 3.922 4.48 6.72 4.48.558 0 1.679 0 2.238-.559 3.359-1.12 5.601-5.601 3.921-8.96l-32.48-84.56c8.399-2.8 17.36-3.921 26.32-3.921h.56c24.64 0 47.038 9.52 64.397 26.879s26.32 40.32 26.32 64.398c.004 50.402-40.875 90.723-91.277 90.723z"
}));
blockIcons.icon2 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "700pt",
  height: "700pt",
  version: "1.1",
  viewBox: "0 0 700 700"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "x",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m18.766-1.125c-0.96875 0.5-1.9805 0.875-3.0312 1.125-1.043 0.25781-2.1367 0.39062-3.2812 0.39062-3.3984 0-6.0898-0.94531-8.0781-2.8438-1.9922-1.9062-2.9844-4.4844-2.9844-7.7344 0-3.2578 0.99219-5.8359 2.9844-7.7344 1.9883-1.9062 4.6797-2.8594 8.0781-2.8594 1.1445 0 2.2383 0.13281 3.2812 0.39062 1.0508 0.25 2.0625 0.625 3.0312 1.125v4.2188c-0.98047-0.65625-1.9453-1.1406-2.8906-1.4531-0.94922-0.3125-1.9492-0.46875-3-0.46875-1.875 0-3.3516 0.60547-4.4219 1.8125-1.0742 1.1992-1.6094 2.8555-1.6094 4.9688 0 2.1055 0.53516 3.7617 1.6094 4.9688 1.0703 1.1992 2.5469 1.7969 4.4219 1.7969 1.0508 0 2.0508-0.14844 3-0.45312 0.94531-0.3125 1.9102-0.80078 2.8906-1.4688z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "e",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m13.734-11.141c-0.4375-0.19531-0.87109-0.34375-1.2969-0.4375-0.41797-0.10156-0.83984-0.15625-1.2656-0.15625-1.2617 0-2.2305 0.40625-2.9062 1.2188-0.67969 0.80469-1.0156 1.9531-1.0156 3.4531v7.0625h-4.8906v-15.312h4.8906v2.5156c0.625-1 1.3438-1.7266 2.1562-2.1875 0.82031-0.46875 1.8008-0.70312 2.9375-0.70312 0.16406 0 0.34375 0.011719 0.53125 0.03125 0.19531 0.011719 0.47656 0.039062 0.84375 0.078125z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "a",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m17.641-7.7031v1.4062h-11.453c0.125 1.1484 0.53906 2.0078 1.25 2.5781 0.70703 0.57422 1.7031 0.85938 2.9844 0.85938 1.0312 0 2.082-0.14844 3.1562-0.45312 1.082-0.3125 2.1914-0.77344 3.3281-1.3906v3.7656c-1.1562 0.4375-2.3125 0.76562-3.4688 0.98438-1.1562 0.22656-2.3125 0.34375-3.4688 0.34375-2.7734 0-4.9297-0.70312-6.4688-2.1094-1.5312-1.4062-2.2969-3.3789-2.2969-5.9219 0-2.5 0.75391-4.4609 2.2656-5.8906 1.5078-1.4375 3.582-2.1562 6.2188-2.1562 2.4062 0 4.332 0.73047 5.7812 2.1875 1.4453 1.4492 2.1719 3.3828 2.1719 5.7969zm-5.0312-1.625c0-0.92578-0.27344-1.6719-0.8125-2.2344-0.54297-0.57031-1.25-0.85938-2.125-0.85938-0.94922 0-1.7188 0.26562-2.3125 0.79688s-0.96484 1.2969-1.1094 2.2969z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "d",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m9.2188-6.8906c-1.0234 0-1.793 0.17188-2.3125 0.51562-0.51172 0.34375-0.76562 0.85547-0.76562 1.5312 0 0.625 0.20703 1.1172 0.625 1.4688 0.41406 0.34375 0.98828 0.51562 1.7188 0.51562 0.92578 0 1.7031-0.32812 2.3281-0.98438 0.63281-0.66406 0.95312-1.4922 0.95312-2.4844v-0.5625zm7.4688-1.8438v8.7344h-4.9219v-2.2656c-0.65625 0.92969-1.3984 1.6055-2.2188 2.0312-0.82422 0.41406-1.8242 0.625-3 0.625-1.5859 0-2.8711-0.45703-3.8594-1.375-0.99219-0.92578-1.4844-2.1289-1.4844-3.6094 0-1.7891 0.61328-3.1016 1.8438-3.9375 1.2383-0.84375 3.1797-1.2656 5.8281-1.2656h2.8906v-0.39062c0-0.76953-0.30859-1.332-0.92188-1.6875-0.61719-0.36328-1.5703-0.54688-2.8594-0.54688-1.0547 0-2.0312 0.10547-2.9375 0.3125-0.89844 0.21094-1.7305 0.52344-2.5 0.9375v-3.7344c1.0391-0.25 2.0859-0.44141 3.1406-0.57812 1.0625-0.13281 2.125-0.20312 3.1875-0.20312 2.7578 0 4.75 0.54688 5.9688 1.6406 1.2266 1.0859 1.8438 2.8555 1.8438 5.3125z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "b",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m7.7031-19.656v4.3438h5.0469v3.5h-5.0469v6.5c0 0.71094 0.14062 1.1875 0.42188 1.4375s0.83594 0.375 1.6719 0.375h2.5156v3.5h-4.1875c-1.9375 0-3.3125-0.39844-4.125-1.2031-0.80469-0.8125-1.2031-2.1797-1.2031-4.1094v-6.5h-2.4219v-3.5h2.4219v-4.3438z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "j",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m12.766-13.078v-8.2031h4.9219v21.281h-4.9219v-2.2188c-0.66797 0.90625-1.4062 1.5703-2.2188 1.9844s-1.7578 0.625-2.8281 0.625c-1.8867 0-3.4336-0.75-4.6406-2.25-1.2109-1.5-1.8125-3.4258-1.8125-5.7812 0-2.3633 0.60156-4.2969 1.8125-5.7969 1.207-1.5 2.7539-2.25 4.6406-2.25 1.0625 0 2 0.21484 2.8125 0.64062 0.82031 0.42969 1.5664 1.0859 2.2344 1.9688zm-3.2188 9.9219c1.0391 0 1.8359-0.37891 2.3906-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3516-1.1562-2.3906-1.1562-1.043 0-1.8398 0.38672-2.3906 1.1562-0.55469 0.76172-0.82812 1.8711-0.82812 3.3281 0 1.4609 0.27344 2.5742 0.82812 3.3438 0.55078 0.76172 1.3477 1.1406 2.3906 1.1406z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "i",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m10.5-3.1562c1.0508 0 1.8516-0.37891 2.4062-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3555-1.1562-2.4062-1.1562-1.0547 0-1.8594 0.38672-2.4219 1.1562-0.55469 0.77344-0.82812 1.8828-0.82812 3.3281 0 1.4492 0.27344 2.5586 0.82812 3.3281 0.5625 0.77344 1.3672 1.1562 2.4219 1.1562zm-3.25-9.9219c0.67578-0.88281 1.4219-1.5391 2.2344-1.9688 0.82031-0.42578 1.7656-0.64062 2.8281-0.64062 1.8945 0 3.4453 0.75 4.6562 2.25 1.207 1.5 1.8125 3.4336 1.8125 5.7969 0 2.3555-0.60547 4.2812-1.8125 5.7812-1.2109 1.5-2.7617 2.25-4.6562 2.25-1.0625 0-2.0078-0.21094-2.8281-0.625-0.8125-0.42578-1.5586-1.0859-2.2344-1.9844v2.2188h-4.8906v-21.281h4.8906z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "f",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0.34375-15.312h4.8906l4.125 10.391 3.5-10.391h4.8906l-6.4375 16.766c-0.64844 1.6953-1.4023 2.8828-2.2656 3.5625-0.86719 0.6875-2 1.0312-3.4062 1.0312h-2.8438v-3.2188h1.5312c0.83203 0 1.4375-0.13672 1.8125-0.40625 0.38281-0.26172 0.67969-0.73047 0.89062-1.4062l0.14062-0.42188z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "h",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16.781-19.766v4.3125c-1.125-0.5-2.2266-0.875-3.2969-1.125-1.0625-0.25781-2.0703-0.39062-3.0156-0.39062-1.25 0-2.1797 0.17969-2.7812 0.53125-0.60547 0.34375-0.90625 0.88281-0.90625 1.6094 0 0.54297 0.20312 0.96875 0.60938 1.2812 0.40625 0.30469 1.1406 0.5625 2.2031 0.78125l2.25 0.45312c2.2695 0.44922 3.8789 1.1406 4.8281 2.0781 0.95703 0.92969 1.4375 2.2461 1.4375 3.9531 0 2.25-0.66797 3.9297-2 5.0312-1.3359 1.0938-3.3711 1.6406-6.1094 1.6406-1.3047 0-2.6055-0.125-3.9062-0.375-1.3047-0.23828-2.6055-0.59766-3.9062-1.0781v-4.4531c1.3008 0.69922 2.5625 1.2266 3.7812 1.5781 1.2188 0.34375 2.3906 0.51562 3.5156 0.51562 1.1562 0 2.0352-0.1875 2.6406-0.5625 0.61328-0.38281 0.92188-0.9375 0.92188-1.6562 0-0.63281-0.21094-1.125-0.625-1.4688-0.41797-0.34375-1.2461-0.65625-2.4844-0.9375l-2.0312-0.4375c-2.043-0.4375-3.5391-1.1328-4.4844-2.0938-0.9375-0.95703-1.4062-2.25-1.4062-3.875 0-2.0312 0.65625-3.5938 1.9688-4.6875s3.1953-1.6406 5.6562-1.6406c1.125 0 2.2734 0.085938 3.4531 0.25 1.1875 0.16797 2.4141 0.42188 3.6875 0.76562z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "w",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m7.25-2.2188v8.0469h-4.8906v-21.141h4.8906v2.2344c0.67578-0.88281 1.4219-1.5391 2.2344-1.9688 0.82031-0.42578 1.7656-0.64062 2.8281-0.64062 1.8945 0 3.4453 0.75 4.6562 2.25 1.207 1.5 1.8125 3.4336 1.8125 5.7969 0 2.3555-0.60547 4.2812-1.8125 5.7812-1.2109 1.5-2.7617 2.25-4.6562 2.25-1.0625 0-2.0078-0.21094-2.8281-0.625-0.8125-0.42578-1.5586-1.0859-2.2344-1.9844zm3.25-9.9062c-1.0547 0-1.8594 0.38672-2.4219 1.1562-0.55469 0.77344-0.82812 1.8828-0.82812 3.3281 0 1.4492 0.27344 2.5586 0.82812 3.3281 0.5625 0.77344 1.3672 1.1562 2.4219 1.1562 1.0508 0 1.8516-0.37891 2.4062-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3555-1.1562-2.4062-1.1562z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "g",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m17.75-9.3281v9.3281h-4.9219v-7.1406c0-1.3203-0.03125-2.2344-0.09375-2.7344s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-15.312h4.8906v2.2344c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "v",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m10.75-12.516c0.82031 0 1.4453-0.17969 1.875-0.54688 0.4375-0.36328 0.65625-0.89844 0.65625-1.6094 0-0.69531-0.21875-1.2266-0.65625-1.5938-0.42969-0.375-1.0547-0.5625-1.875-0.5625h-2.9219v4.3125zm0.17188 8.9375c1.0625 0 1.8594-0.22266 2.3906-0.67188 0.53125-0.44531 0.79688-1.125 0.79688-2.0312 0-0.88281-0.26562-1.5469-0.79688-1.9844-0.52344-0.4375-1.3203-0.65625-2.3906-0.65625h-3.0938v5.3438zm4.8906-7.3438c1.1328 0.32422 2.0078 0.92969 2.625 1.8125 0.625 0.88672 0.9375 1.9688 0.9375 3.25 0 1.9688-0.66797 3.4375-2 4.4062-1.3359 0.96875-3.3555 1.4531-6.0625 1.4531h-8.7344v-20.406h7.8906c2.832 0 4.8828 0.42969 6.1562 1.2812 1.2812 0.85547 1.9219 2.2266 1.9219 4.1094 0 1-0.23438 1.8516-0.70312 2.5469-0.46875 0.6875-1.1484 1.2031-2.0312 1.5469z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "u",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.3594-21.281h4.8906v21.281h-4.8906z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "t",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.3594-21.281h4.8906v11.594l5.625-5.625h5.6875l-7.4688 7.0312 8.0625 8.2812h-5.9375l-5.9688-6.3906v6.3906h-4.8906z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "c",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m9.6406-12.188c-1.0859 0-1.9141 0.39062-2.4844 1.1719-0.57422 0.78125-0.85938 1.9062-0.85938 3.375s0.28516 2.5938 0.85938 3.375c0.57031 0.77344 1.3984 1.1562 2.4844 1.1562 1.0625 0 1.875-0.38281 2.4375-1.1562 0.57031-0.78125 0.85938-1.9062 0.85938-3.375s-0.28906-2.5938-0.85938-3.375c-0.5625-0.78125-1.375-1.1719-2.4375-1.1719zm0-3.5c2.6328 0 4.6914 0.71484 6.1719 2.1406 1.4766 1.418 2.2188 3.3867 2.2188 5.9062 0 2.5117-0.74219 4.4805-2.2188 5.9062-1.4805 1.418-3.5391 2.125-6.1719 2.125-2.6484 0-4.7148-0.70703-6.2031-2.125-1.4922-1.4258-2.2344-3.3945-2.2344-5.9062 0-2.5195 0.74219-4.4883 2.2344-5.9062 1.4883-1.4258 3.5547-2.1406 6.2031-2.1406z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "s",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0.42188-15.312h4.8906l3.8281 10.578 3.7969-10.578h4.9062l-6.0312 15.312h-5.375z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "r",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m12.422-21.281v3.2188h-2.7031c-0.6875 0-1.1719 0.125-1.4531 0.375-0.27344 0.25-0.40625 0.6875-0.40625 1.3125v1.0625h4.1875v3.5h-4.1875v11.812h-4.8906v-11.812h-2.4375v-3.5h2.4375v-1.0625c0-1.6641 0.46094-2.8984 1.3906-3.7031 0.92578-0.80078 2.3672-1.2031 4.3281-1.2031z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "q",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16.547-12.766c0.61328-0.94531 1.3477-1.6719 2.2031-2.1719 0.85156-0.5 1.7891-0.75 2.8125-0.75 1.7578 0 3.0977 0.54688 4.0156 1.6406 0.92578 1.0859 1.3906 2.6562 1.3906 4.7188v9.3281h-4.9219v-7.9844-0.35938c0.007813-0.13281 0.015625-0.32031 0.015625-0.5625 0-1.082-0.16406-1.8633-0.48438-2.3438-0.3125-0.48828-0.82422-0.73438-1.5312-0.73438-0.92969 0-1.6484 0.38672-2.1562 1.1562-0.51172 0.76172-0.77344 1.8672-0.78125 3.3125v7.5156h-4.9219v-7.9844c0-1.6953-0.14844-2.7852-0.4375-3.2656-0.29297-0.48828-0.8125-0.73438-1.5625-0.73438-0.9375 0-1.6641 0.38672-2.1719 1.1562-0.51172 0.76172-0.76562 1.8594-0.76562 3.2969v7.5312h-4.9219v-15.312h4.9219v2.2344c0.60156-0.86328 1.2891-1.5156 2.0625-1.9531 0.78125-0.4375 1.6406-0.65625 2.5781-0.65625 1.0625 0 2 0.25781 2.8125 0.76562 0.8125 0.51172 1.4258 1.2305 1.8438 2.1562z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "p",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m17.75-9.3281v9.3281h-4.9219v-7.1094c0-1.3438-0.03125-2.2656-0.09375-2.7656s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-21.281h4.8906v8.2031c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "o",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.5781-20.406h5.875l7.4219 14v-14h4.9844v20.406h-5.875l-7.4219-14v14h-4.9844z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "n",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.1875-5.9688v-9.3438h4.9219v1.5312c0 0.83594-0.007813 1.875-0.015625 3.125-0.011719 1.25-0.015625 2.0859-0.015625 2.5 0 1.2422 0.03125 2.1328 0.09375 2.6719 0.070313 0.54297 0.17969 0.93359 0.32812 1.1719 0.20703 0.32422 0.47266 0.57422 0.79688 0.75 0.32031 0.16797 0.69141 0.25 1.1094 0.25 1.0195 0 1.8203-0.39062 2.4062-1.1719 0.58203-0.78125 0.875-1.8672 0.875-3.2656v-7.5625h4.8906v15.312h-4.8906v-2.2188c-0.74219 0.89844-1.5234 1.5586-2.3438 1.9844-0.82422 0.41406-1.7344 0.625-2.7344 0.625-1.7617 0-3.1055-0.53906-4.0312-1.625-0.92969-1.082-1.3906-2.6602-1.3906-4.7344z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "m",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.5781-20.406h8.7344c2.5938 0 4.582 0.57812 5.9688 1.7344 1.3945 1.1484 2.0938 2.7891 2.0938 4.9219 0 2.1367-0.69922 3.7812-2.0938 4.9375-1.3867 1.1562-3.375 1.7344-5.9688 1.7344h-3.4844v7.0781h-5.25zm5.25 3.8125v5.7031h2.9219c1.0195 0 1.8047-0.25 2.3594-0.75 0.5625-0.5 0.84375-1.2031 0.84375-2.1094 0-0.91406-0.28125-1.6172-0.84375-2.1094-0.55469-0.48828-1.3398-0.73438-2.3594-0.73438z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "l",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.3594-15.312h4.8906v15.031c0 2.0508-0.49609 3.6172-1.4844 4.7031-0.98047 1.082-2.4062 1.625-4.2812 1.625h-2.4219v-3.2188h0.85938c0.92578 0 1.5625-0.21094 1.9062-0.625 0.35156-0.41797 0.53125-1.2461 0.53125-2.4844zm0-5.9688h4.8906v4h-4.8906z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "k",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m14.719-14.828v3.9844c-0.65625-0.45703-1.3242-0.79688-2-1.0156-0.66797-0.21875-1.3594-0.32812-2.0781-0.32812-1.3672 0-2.4336 0.40234-3.2031 1.2031-0.76172 0.79297-1.1406 1.9062-1.1406 3.3438 0 1.4297 0.37891 2.543 1.1406 3.3438 0.76953 0.79297 1.8359 1.1875 3.2031 1.1875 0.75781 0 1.4844-0.10938 2.1719-0.32812 0.6875-0.22656 1.3203-0.56641 1.9062-1.0156v4c-0.76172 0.28125-1.5391 0.48828-2.3281 0.625-0.78125 0.14453-1.5742 0.21875-2.375 0.21875-2.7617 0-4.9219-0.70703-6.4844-2.125-1.5547-1.4141-2.3281-3.3828-2.3281-5.9062 0-2.5312 0.77344-4.5039 2.3281-5.9219 1.5625-1.4141 3.7227-2.125 6.4844-2.125 0.80078 0 1.5938 0.074219 2.375 0.21875 0.78125 0.13672 1.5547 0.35156 2.3281 0.64062z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m493.02 473.1c-65.48 0-118.76-53.277-118.76-118.75 0-65.488 53.277-118.77 118.76-118.77 65.48 0 118.76 53.277 118.76 118.77 0 65.477-53.277 118.75-118.76 118.75zm0-226.06c-59.168 0-107.31 48.145-107.31 107.31 0 59.168 48.145 107.31 107.31 107.31 59.168 0 107.31-48.137 107.31-107.31 0-59.172-48.137-107.31-107.31-107.31z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m206.98 473.1c-65.48 0-118.76-53.277-118.76-118.75 0-65.488 53.277-118.77 118.76-118.77 65.48 0 118.76 53.277 118.76 118.77 0 65.477-53.277 118.75-118.76 118.75zm0-226.06c-59.168 0-107.31 48.145-107.31 107.31 0 59.168 48.137 107.31 107.31 107.31 59.176 0 107.31-48.137 107.31-107.31 0-59.172-48.137-107.31-107.31-107.31z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m412.93 184.41c-26.887 0-48.758-21.875-48.758-48.754s21.875-48.758 48.758-48.758c26.879 0 48.754 21.879 48.754 48.758s-21.871 48.754-48.754 48.754zm0-86.066c-20.574 0-37.309 16.734-37.309 37.312 0 20.57 16.734 37.301 37.309 37.301 20.57 0 37.309-16.734 37.309-37.301 0-20.574-16.738-37.312-37.309-37.312z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m350.09 403.02-10.953-3.3164c8.6445-28.59 14.324-58.191 16.871-87.961 0.67188-7.8242 1.0547-15.988-2.2188-22.344-3.0625-5.9531-9.1289-10.152-15.551-14.598l-2.8242-1.9648c-8.6758-6.1211-16.793-13.105-24.148-20.77-10.535-10.969-14.766-21.004-12.938-30.684 1.5625-8.3008 7.3906-14.441 12.891-19.363 17.191-15.371 37.973-26.898 60.105-33.336l3.1992 10.992c-20.496 5.957-39.754 16.637-55.668 30.871-4.0664 3.6328-8.3438 8.0195-9.2734 12.945-1.0938 5.7773 2.1562 12.527 9.9336 20.629 6.8594 7.1445 14.426 13.652 22.5 19.355l2.7344 1.9023c6.9609 4.8164 14.844 10.281 19.227 18.781 4.6523 9.0625 4.2188 19.48 3.4375 28.547-2.6172 30.57-8.4414 60.957-17.324 90.312z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m508.92 326.51c-66.602-12.77-126.27-58.637-155.76-119.7l10.309-4.9844c27.934 57.871 84.492 101.34 147.6 113.43z"
})));
blockIcons.icon3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "700pt",
  height: "700pt",
  viewBox: "0 0 700 700"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.766-1.125c-.969.5-1.98.875-3.031 1.125-1.043.258-2.137.39-3.281.39-3.399 0-6.09-.945-8.079-2.843-1.992-1.906-2.984-4.485-2.984-7.735 0-3.257.992-5.835 2.984-7.734 1.989-1.906 4.68-2.86 8.079-2.86 1.144 0 2.238.133 3.28.391 1.052.25 2.063.625 3.032 1.125v4.219c-.98-.656-1.945-1.14-2.89-1.453a9.532 9.532 0 00-3-.469c-1.876 0-3.352.606-4.423 1.813-1.074 1.199-1.609 2.855-1.609 4.968 0 2.106.535 3.762 1.61 4.97C9.523-4.02 11-3.423 12.874-3.423c1.051 0 2.051-.148 3-.453.946-.312 1.91-.8 2.891-1.469z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.734-11.141a6.765 6.765 0 00-1.297-.438 5.346 5.346 0 00-1.265-.156c-1.262 0-2.231.406-2.907 1.219-.68.805-1.015 1.953-1.015 3.453V0H2.36v-15.312h4.89v2.515c.625-1 1.344-1.726 2.156-2.187.82-.469 1.8-.703 2.937-.703.164 0 .344.011.532.03.195.013.476.04.843.079z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.641-7.703v1.406H6.188c.125 1.148.54 2.008 1.25 2.578.707.574 1.703.86 2.984.86a11.52 11.52 0 003.157-.454 16.707 16.707 0 003.328-1.39v3.765a20.629 20.629 0 01-3.47.985A18.006 18.006 0 019.97.39C7.196.39 5.04-.313 3.5-1.72 1.97-3.125 1.203-5.098 1.203-7.64c0-2.5.754-4.46 2.266-5.89 1.508-1.438 3.582-2.157 6.219-2.157 2.406 0 4.332.731 5.781 2.188 1.445 1.45 2.172 3.383 2.172 5.797zM12.61-9.328c0-.926-.274-1.672-.813-2.234-.543-.57-1.25-.86-2.125-.86-.949 0-1.719.266-2.312.797s-.965 1.297-1.11 2.297z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.219-6.89c-1.024 0-1.793.171-2.313.515-.511.344-.765.855-.765 1.531 0 .625.207 1.117.625 1.469.414.344.988.516 1.718.516.926 0 1.704-.328 2.329-.985.632-.664.953-1.492.953-2.484v-.563zm7.469-1.844V0h-4.922v-2.266c-.657.93-1.399 1.606-2.22 2.032-.823.414-1.823.625-3 .625-1.585 0-2.87-.457-3.859-1.375-.992-.926-1.484-2.13-1.484-3.61 0-1.789.613-3.101 1.844-3.937 1.238-.844 3.18-1.266 5.828-1.266h2.89v-.39c0-.77-.308-1.333-.921-1.688-.617-.363-1.57-.547-2.86-.547-1.054 0-2.03.106-2.937.313-.899.21-1.73.523-2.5.937v-3.734c1.039-.25 2.086-.442 3.14-.578a25.68 25.68 0 013.188-.204c2.758 0 4.75.547 5.969 1.641 1.226 1.086 1.844 2.856 1.844 5.313z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.703-19.656v4.344h5.047v3.5H7.703v6.5c0 .71.14 1.187.422 1.437s.836.375 1.672.375h2.515V0H8.125C6.187 0 4.812-.398 4-1.203c-.805-.812-1.203-2.18-1.203-4.11v-6.5H.375v-3.5h2.422v-4.343z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12.766-13.078v-8.203h4.922v21.28h-4.922v-2.218c-.668.906-1.406 1.57-2.219 1.985S8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.211-1.5-1.813-3.426-1.813-5.782 0-2.363.602-4.297 1.812-5.797 1.207-1.5 2.754-2.25 4.641-2.25 1.063 0 2 .215 2.813.641.82.43 1.566 1.086 2.234 1.969zM9.547-3.156c1.04 0 1.836-.379 2.39-1.14.552-.77.829-1.883.829-3.344 0-1.457-.277-2.567-.828-3.329-.555-.77-1.352-1.156-2.39-1.156-1.044 0-1.84.387-2.391 1.156-.555.762-.829 1.872-.829 3.329 0 1.46.274 2.574.829 3.343.55.762 1.347 1.14 2.39 1.14z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10.5-3.156c1.05 0 1.852-.38 2.406-1.14.551-.77.828-1.884.828-3.345 0-1.457-.277-2.566-.828-3.328-.554-.77-1.355-1.156-2.406-1.156-1.055 0-1.86.387-2.422 1.156-.555.774-.828 1.883-.828 3.328 0 1.45.273 2.559.828 3.329.563.773 1.367 1.156 2.422 1.156zm-3.25-9.922c.676-.883 1.422-1.54 2.234-1.969.82-.426 1.766-.64 2.829-.64 1.894 0 3.445.75 4.656 2.25 1.207 1.5 1.812 3.433 1.812 5.796 0 2.356-.605 4.282-1.812 5.782C15.758-.36 14.207.39 12.312.39 11.25.39 10.305.18 9.484-.234 8.672-.66 7.926-1.32 7.25-2.22V0H2.36v-21.281h4.89z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M.344-15.312h4.89L9.36-4.921l3.5-10.391h4.89L11.313 1.454c-.648 1.695-1.402 2.883-2.265 3.562-.867.688-2 1.032-3.406 1.032H2.797v-3.22h1.531c.832 0 1.438-.136 1.813-.405.382-.262.68-.73.89-1.407l.14-.421z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M.828-20.406h5.047L9.406-5.578l3.5-14.828h5.078l3.5 14.828L25-20.406h5.016L25.203 0h-6.078l-3.703-15.516L11.766 0H5.688z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.188-5.969v-9.344h4.921v1.532c0 .836-.007 1.875-.015 3.125-.012 1.25-.016 2.086-.016 2.5 0 1.242.031 2.132.094 2.672.07.542.18.933.328 1.171.207.325.473.575.797.75.32.168.691.25 1.11.25 1.019 0 1.82-.39 2.406-1.171.582-.782.875-1.868.875-3.266v-7.563h4.89V0h-4.89v-2.218c-.743.898-1.524 1.558-2.344 1.984C9.519.179 8.609.39 7.609.39c-1.761 0-3.105-.54-4.03-1.625-.93-1.082-1.391-2.66-1.391-4.734z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.36-21.281h4.89V0H2.36z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.75-9.328V0h-4.922v-7.14c0-1.32-.031-2.235-.094-2.735s-.168-.867-.312-1.11a1.994 1.994 0 00-.781-.734 2.295 2.295 0 00-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-15.311h4.89v2.234c.738-.883 1.52-1.539 2.344-1.969.832-.425 1.75-.64 2.75-.64 1.77 0 3.113.547 4.031 1.64.914 1.086 1.375 2.657 1.375 4.72z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.953-3.719H6.734L5.422 0H.14l7.563-20.406h6.266L21.53 0H16.25zM8.047-7.5h5.578l-2.781-8.125z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12.766-2.594c-.668.887-1.406 1.543-2.219 1.969C9.735-.207 8.79 0 7.72 0 5.852 0 4.313-.734 3.094-2.203 1.875-3.68 1.266-5.555 1.266-7.828c0-2.29.61-4.164 1.828-5.625 1.219-1.469 2.758-2.203 4.625-2.203 1.07 0 2.016.215 2.828.64.813.418 1.551 1.075 2.219 1.97v-2.266h4.922v13.766c0 2.457-.777 4.336-2.328 5.64-1.555 1.301-3.809 1.953-6.766 1.953-.949 0-1.87-.074-2.765-.218a17.74 17.74 0 01-2.703-.672V1.344c.863.488 1.703.852 2.515 1.094.82.238 1.649.36 2.485.36 1.601 0 2.773-.352 3.515-1.048.75-.699 1.125-1.796 1.125-3.296zm-3.219-9.531c-1.012 0-1.805.375-2.375 1.125-.562.742-.844 1.797-.844 3.172 0 1.398.27 2.46.813 3.187.55.72 1.352 1.079 2.406 1.079 1.02 0 1.813-.368 2.375-1.11.563-.75.844-1.8.844-3.156 0-1.375-.281-2.43-.844-3.172-.562-.75-1.355-1.125-2.375-1.125z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12.422-21.281v3.219H9.719c-.688 0-1.172.125-1.453.375-.274.25-.406.687-.406 1.312v1.063h4.187v3.5H7.86V0H2.969v-11.812H.531v-3.5H2.97v-1.063c0-1.664.46-2.898 1.39-3.703.926-.8 2.368-1.203 4.329-1.203z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.64-12.188c-1.085 0-1.914.39-2.484 1.172-.574.781-.86 1.906-.86 3.375s.286 2.594.86 3.375c.57.773 1.399 1.156 2.485 1.156 1.062 0 1.875-.383 2.437-1.156.57-.781.86-1.906.86-3.375s-.29-2.594-.86-3.375c-.562-.781-1.375-1.172-2.437-1.172zm0-3.5c2.633 0 4.692.715 6.172 2.14 1.477 1.419 2.22 3.387 2.22 5.907 0 2.512-.743 4.48-2.22 5.906C14.333-.317 12.274.39 9.642.39c-2.649 0-4.715-.707-6.203-2.125-1.493-1.426-2.235-3.394-2.235-5.906 0-2.52.742-4.488 2.235-5.906 1.488-1.426 3.554-2.141 6.203-2.141z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.547-12.766c.613-.945 1.348-1.672 2.203-2.172.852-.5 1.79-.75 2.813-.75 1.757 0 3.097.547 4.015 1.64.926 1.087 1.39 2.657 1.39 4.72V0h-4.921v-8.345c.008-.132.016-.32.016-.562 0-1.082-.165-1.863-.485-2.343-.312-.489-.824-.735-1.531-.735-.93 0-1.648.387-2.156 1.156-.512.762-.774 1.868-.782 3.313v7.515h-4.921v-7.984c0-1.695-.149-2.785-.438-3.266-.293-.488-.812-.734-1.562-.734-.938 0-1.665.387-2.172 1.156-.512.762-.766 1.86-.766 3.297V0H2.328v-15.312H7.25v2.235c.602-.864 1.29-1.516 2.063-1.953a5.186 5.186 0 012.578-.657c1.062 0 2 .258 2.812.766.813.512 1.426 1.23 1.844 2.156z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17.75-9.328V0h-4.922v-7.11c0-1.343-.031-2.265-.094-2.765s-.168-.867-.312-1.11a1.994 1.994 0 00-.781-.734 2.295 2.295 0 00-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-21.28h4.89v8.203c.738-.883 1.52-1.54 2.344-1.969.832-.426 1.75-.64 2.75-.64 1.77 0 3.113.546 4.031 1.64.914 1.086 1.375 2.656 1.375 4.719z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.578-20.406h5.875l7.422 14v-14h4.984V0h-5.875L7.563-14V0H2.578z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.578-20.406h8.735c2.593 0 4.581.578 5.968 1.734 1.395 1.149 2.094 2.79 2.094 4.922 0 2.137-.7 3.782-2.094 4.938-1.386 1.156-3.375 1.734-5.968 1.734H7.828V0h-5.25zm5.25 3.813v5.703h2.922c1.02 0 1.805-.25 2.36-.75.562-.5.843-1.203.843-2.11 0-.914-.281-1.617-.844-2.11-.554-.487-1.34-.734-2.359-.734z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2.36-15.312h4.89V-.281c0 2.05-.496 3.617-1.484 4.703-.98 1.082-2.407 1.625-4.282 1.625H-.937V2.828h.859c.926 0 1.562-.21 1.906-.625.352-.418.531-1.246.531-2.484zm0-5.969h4.89v4H2.36z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.719-14.828v3.984a7.612 7.612 0 00-2-1.015 6.629 6.629 0 00-2.078-.328c-1.367 0-2.434.402-3.203 1.203-.762.793-1.14 1.906-1.14 3.344 0 1.43.378 2.543 1.14 3.343.77.793 1.836 1.188 3.203 1.188.758 0 1.484-.11 2.172-.328a6.412 6.412 0 001.906-1.016v4c-.762.281-1.54.488-2.328.625a13.04 13.04 0 01-2.375.219C7.254.39 5.094-.316 3.53-1.734 1.977-3.148 1.203-5.117 1.203-7.64c0-2.531.774-4.504 2.328-5.922 1.563-1.414 3.723-2.125 6.485-2.125.8 0 1.594.074 2.375.219.781.136 1.555.351 2.328.64z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M491.12 366.86c6.184 0 11.199 5.016 11.199 11.199 0 6.188-5.016 11.203-11.199 11.203h-218.4a11.226 11.226 0 01-8.68-3.809l-140.56-140a47.402 47.402 0 01-13.105-28 39.983 39.983 0 016.723-30.129l41.273-59.078-.004-.004a11.202 11.202 0 0111.535-4.476l253.79 52.023c1.625.305 3.156.973 4.48 1.957l171.92 129.75a10.85 10.85 0 014.477 8.96v61.603-.004c0 2.973-1.18 5.82-3.277 7.922a11.216 11.216 0 01-7.922 3.281h-68.598c-6.188 0-11.203-5.016-11.203-11.203 0-6.184 5.016-11.199 11.203-11.199h57.285v-44.801l-165.54-124.71-243.99-49.953-37.297 53.145-1.457 1.96h.004a17.857 17.857 0 00-1.121 12.099 24.863 24.863 0 006.55 15.008l137.98 137.25z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M593.43 305.43a11.2 11.2 0 010 22.398H380.97a42.306 42.306 0 01-14.168-2.464 49.647 49.647 0 01-21.73-15.961 45.744 45.744 0 01-9.293-27.438 50.301 50.301 0 013.023-16.13l22.398-62.55c2.075-5.848 8.493-8.907 14.336-6.832 5.848 2.07 8.907 8.488 6.832 14.336l-22.398 62.55a24.838 24.838 0 00-1.625 8.626 22.388 22.388 0 004.649 13.887 26.536 26.536 0 0011.199 8.457 21.39 21.39 0 006.383 1.12z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M368.03 212.18c6.094 1.16 10.094 7.04 8.934 13.133s-7.04 10.09-13.133 8.93L185.02 200.64v.004c-6.094-1.145-10.105-7.012-8.961-13.105 1.144-6.09 7.011-10.102 13.105-8.957zM224.22 347.2a11.22 11.22 0 011.164-8.645 11.21 11.21 0 017.012-5.187c6.062-1.422 12.16 2.223 13.777 8.234.617 3.192 1.289 6.215 1.566 9.13v-.005a55.48 55.48 0 01.672 9.243 76.62 76.62 0 01-22.539 53.96 76.617 76.617 0 01-54.05 22.333 76.618 76.618 0 01-54.056-22.31 76.316 76.316 0 01-22.312-53.995A76.322 76.322 0 01117.86 306a76.346 76.346 0 0154-22.305c2.238 0 4.816 0 7.559.336s5.265.671 7.504 1.12h.003a11.195 11.195 0 018.79 13.274 11.187 11.187 0 01-4.817 7.129 11.224 11.224 0 01-8.453 1.606c-1.902-.282-3.695-.618-5.266-.786a50.356 50.356 0 00-5.32 0 53.696 53.696 0 00-37.844 15.883 53.697 53.697 0 00-15.578 37.97 53.707 53.707 0 0053.723 53.559 53.724 53.724 0 0037.922-15.7 53.718 53.718 0 0015.762-37.895 39.958 39.958 0 00-.504-6.55 64.987 64.987 0 00-1.12-6.551z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M204.85 310.69a11.204 11.204 0 018.008-3.371 11.19 11.19 0 018.008 3.371c4.343 4.367 4.343 11.426 0 15.793l-40.992 41.383a11.19 11.19 0 01-8.008 3.371 11.203 11.203 0 01-8.008-3.371 11.204 11.204 0 010-15.961zM568.4 381.08c0-6.184 5.016-11.199 11.203-11.199 6.184 0 11.199 5.016 11.199 11.199a55.375 55.375 0 01-16.223 39.07 55.37 55.37 0 01-39.07 16.223 55.394 55.394 0 01-39.125-16.09 54.62 54.62 0 01-16.352-39.203c0-6.184 5.016-11.199 11.199-11.199 6.187 0 11.203 5.016 11.203 11.199a32.353 32.353 0 009.965 23.129 32.924 32.924 0 0046.426 0 32.31 32.31 0 009.574-23.129zM534.18 307.33c5.125 3.438 6.504 10.375 3.082 15.512a11.205 11.205 0 01-15.738 3.191l-49.785-33.602h-34.273l.004.004c-6.188 0-11.2-5.015-11.2-11.203 0-6.183 5.012-11.199 11.2-11.199h37.184a11.97 11.97 0 016.55 1.961z"
}));
blockIcons.icon4 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "700pt",
  height: "700pt",
  version: "1.1",
  viewBox: "0 0 700 700"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "e",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m18.766-1.125c-0.96875 0.5-1.9805 0.875-3.0312 1.125-1.043 0.25781-2.1367 0.39062-3.2812 0.39062-3.3984 0-6.0898-0.94531-8.0781-2.8438-1.9922-1.9062-2.9844-4.4844-2.9844-7.7344 0-3.2578 0.99219-5.8359 2.9844-7.7344 1.9883-1.9062 4.6797-2.8594 8.0781-2.8594 1.1445 0 2.2383 0.13281 3.2812 0.39062 1.0508 0.25 2.0625 0.625 3.0312 1.125v4.2188c-0.98047-0.65625-1.9453-1.1406-2.8906-1.4531-0.94922-0.3125-1.9492-0.46875-3-0.46875-1.875 0-3.3516 0.60547-4.4219 1.8125-1.0742 1.1992-1.6094 2.8555-1.6094 4.9688 0 2.1055 0.53516 3.7617 1.6094 4.9688 1.0703 1.1992 2.5469 1.7969 4.4219 1.7969 1.0508 0 2.0508-0.14844 3-0.45312 0.94531-0.3125 1.9102-0.80078 2.8906-1.4688z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "c",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m13.734-11.141c-0.4375-0.19531-0.87109-0.34375-1.2969-0.4375-0.41797-0.10156-0.83984-0.15625-1.2656-0.15625-1.2617 0-2.2305 0.40625-2.9062 1.2188-0.67969 0.80469-1.0156 1.9531-1.0156 3.4531v7.0625h-4.8906v-15.312h4.8906v2.5156c0.625-1 1.3438-1.7266 2.1562-2.1875 0.82031-0.46875 1.8008-0.70312 2.9375-0.70312 0.16406 0 0.34375 0.011719 0.53125 0.03125 0.19531 0.011719 0.47656 0.039062 0.84375 0.078125z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "a",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m17.641-7.7031v1.4062h-11.453c0.125 1.1484 0.53906 2.0078 1.25 2.5781 0.70703 0.57422 1.7031 0.85938 2.9844 0.85938 1.0312 0 2.082-0.14844 3.1562-0.45312 1.082-0.3125 2.1914-0.77344 3.3281-1.3906v3.7656c-1.1562 0.4375-2.3125 0.76562-3.4688 0.98438-1.1562 0.22656-2.3125 0.34375-3.4688 0.34375-2.7734 0-4.9297-0.70312-6.4688-2.1094-1.5312-1.4062-2.2969-3.3789-2.2969-5.9219 0-2.5 0.75391-4.4609 2.2656-5.8906 1.5078-1.4375 3.582-2.1562 6.2188-2.1562 2.4062 0 4.332 0.73047 5.7812 2.1875 1.4453 1.4492 2.1719 3.3828 2.1719 5.7969zm-5.0312-1.625c0-0.92578-0.27344-1.6719-0.8125-2.2344-0.54297-0.57031-1.25-0.85938-2.125-0.85938-0.94922 0-1.7188 0.26562-2.3125 0.79688s-0.96484 1.2969-1.1094 2.2969z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "j",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m9.2188-6.8906c-1.0234 0-1.793 0.17188-2.3125 0.51562-0.51172 0.34375-0.76562 0.85547-0.76562 1.5312 0 0.625 0.20703 1.1172 0.625 1.4688 0.41406 0.34375 0.98828 0.51562 1.7188 0.51562 0.92578 0 1.7031-0.32812 2.3281-0.98438 0.63281-0.66406 0.95312-1.4922 0.95312-2.4844v-0.5625zm7.4688-1.8438v8.7344h-4.9219v-2.2656c-0.65625 0.92969-1.3984 1.6055-2.2188 2.0312-0.82422 0.41406-1.8242 0.625-3 0.625-1.5859 0-2.8711-0.45703-3.8594-1.375-0.99219-0.92578-1.4844-2.1289-1.4844-3.6094 0-1.7891 0.61328-3.1016 1.8438-3.9375 1.2383-0.84375 3.1797-1.2656 5.8281-1.2656h2.8906v-0.39062c0-0.76953-0.30859-1.332-0.92188-1.6875-0.61719-0.36328-1.5703-0.54688-2.8594-0.54688-1.0547 0-2.0312 0.10547-2.9375 0.3125-0.89844 0.21094-1.7305 0.52344-2.5 0.9375v-3.7344c1.0391-0.25 2.0859-0.44141 3.1406-0.57812 1.0625-0.13281 2.125-0.20312 3.1875-0.20312 2.7578 0 4.75 0.54688 5.9688 1.6406 1.2266 1.0859 1.8438 2.8555 1.8438 5.3125z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "b",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m7.7031-19.656v4.3438h5.0469v3.5h-5.0469v6.5c0 0.71094 0.14062 1.1875 0.42188 1.4375s0.83594 0.375 1.6719 0.375h2.5156v3.5h-4.1875c-1.9375 0-3.3125-0.39844-4.125-1.2031-0.80469-0.8125-1.2031-2.1797-1.2031-4.1094v-6.5h-2.4219v-3.5h2.4219v-4.3438z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "i",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m12.766-13.078v-8.2031h4.9219v21.281h-4.9219v-2.2188c-0.66797 0.90625-1.4062 1.5703-2.2188 1.9844s-1.7578 0.625-2.8281 0.625c-1.8867 0-3.4336-0.75-4.6406-2.25-1.2109-1.5-1.8125-3.4258-1.8125-5.7812 0-2.3633 0.60156-4.2969 1.8125-5.7969 1.207-1.5 2.7539-2.25 4.6406-2.25 1.0625 0 2 0.21484 2.8125 0.64062 0.82031 0.42969 1.5664 1.0859 2.2344 1.9688zm-3.2188 9.9219c1.0391 0 1.8359-0.37891 2.3906-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3516-1.1562-2.3906-1.1562-1.043 0-1.8398 0.38672-2.3906 1.1562-0.55469 0.76172-0.82812 1.8711-0.82812 3.3281 0 1.4609 0.27344 2.5742 0.82812 3.3438 0.55078 0.76172 1.3477 1.1406 2.3906 1.1406z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "h",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m10.5-3.1562c1.0508 0 1.8516-0.37891 2.4062-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3555-1.1562-2.4062-1.1562-1.0547 0-1.8594 0.38672-2.4219 1.1562-0.55469 0.77344-0.82812 1.8828-0.82812 3.3281 0 1.4492 0.27344 2.5586 0.82812 3.3281 0.5625 0.77344 1.3672 1.1562 2.4219 1.1562zm-3.25-9.9219c0.67578-0.88281 1.4219-1.5391 2.2344-1.9688 0.82031-0.42578 1.7656-0.64062 2.8281-0.64062 1.8945 0 3.4453 0.75 4.6562 2.25 1.207 1.5 1.8125 3.4336 1.8125 5.7969 0 2.3555-0.60547 4.2812-1.8125 5.7812-1.2109 1.5-2.7617 2.25-4.6562 2.25-1.0625 0-2.0078-0.21094-2.8281-0.625-0.8125-0.42578-1.5586-1.0859-2.2344-1.9844v2.2188h-4.8906v-21.281h4.8906z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "g",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0.34375-15.312h4.8906l4.125 10.391 3.5-10.391h4.8906l-6.4375 16.766c-0.64844 1.6953-1.4023 2.8828-2.2656 3.5625-0.86719 0.6875-2 1.0312-3.4062 1.0312h-2.8438v-3.2188h1.5312c0.83203 0 1.4375-0.13672 1.8125-0.40625 0.38281-0.26172 0.67969-0.73047 0.89062-1.4062l0.14062-0.42188z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "f",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m14.953-3.7188h-8.2188l-1.3125 3.7188h-5.2812l7.5625-20.406h6.2656l7.5625 20.406h-5.2812zm-6.9062-3.7812h5.5781l-2.7812-8.125z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "u",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.5781-20.406h6.6875l4.6562 10.922 4.6719-10.922h6.6875v20.406h-4.9844v-14.938l-4.7031 11.016h-3.3281l-4.7031-11.016v14.938h-4.9844z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "t",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m10.75-12.516c0.82031 0 1.4453-0.17969 1.875-0.54688 0.4375-0.36328 0.65625-0.89844 0.65625-1.6094 0-0.69531-0.21875-1.2266-0.65625-1.5938-0.42969-0.375-1.0547-0.5625-1.875-0.5625h-2.9219v4.3125zm0.17188 8.9375c1.0625 0 1.8594-0.22266 2.3906-0.67188 0.53125-0.44531 0.79688-1.125 0.79688-2.0312 0-0.88281-0.26562-1.5469-0.79688-1.9844-0.52344-0.4375-1.3203-0.65625-2.3906-0.65625h-3.0938v5.3438zm4.8906-7.3438c1.1328 0.32422 2.0078 0.92969 2.625 1.8125 0.625 0.88672 0.9375 1.9688 0.9375 3.25 0 1.9688-0.66797 3.4375-2 4.4062-1.3359 0.96875-3.3555 1.4531-6.0625 1.4531h-8.7344v-20.406h7.8906c2.832 0 4.8828 0.42969 6.1562 1.2812 1.2812 0.85547 1.9219 2.2266 1.9219 4.1094 0 1-0.23438 1.8516-0.70312 2.5469-0.46875 0.6875-1.1484 1.2031-2.0312 1.5469z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "s",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m12.422-21.281v3.2188h-2.7031c-0.6875 0-1.1719 0.125-1.4531 0.375-0.27344 0.25-0.40625 0.6875-0.40625 1.3125v1.0625h4.1875v3.5h-4.1875v11.812h-4.8906v-11.812h-2.4375v-3.5h2.4375v-1.0625c0-1.6641 0.46094-2.8984 1.3906-3.7031 0.92578-0.80078 2.3672-1.2031 4.3281-1.2031z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "d",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m9.6406-12.188c-1.0859 0-1.9141 0.39062-2.4844 1.1719-0.57422 0.78125-0.85938 1.9062-0.85938 3.375s0.28516 2.5938 0.85938 3.375c0.57031 0.77344 1.3984 1.1562 2.4844 1.1562 1.0625 0 1.875-0.38281 2.4375-1.1562 0.57031-0.78125 0.85938-1.9062 0.85938-3.375s-0.28906-2.5938-0.85938-3.375c-0.5625-0.78125-1.375-1.1719-2.4375-1.1719zm0-3.5c2.6328 0 4.6914 0.71484 6.1719 2.1406 1.4766 1.418 2.2188 3.3867 2.2188 5.9062 0 2.5117-0.74219 4.4805-2.2188 5.9062-1.4805 1.418-3.5391 2.125-6.1719 2.125-2.6484 0-4.7148-0.70703-6.2031-2.125-1.4922-1.4258-2.2344-3.3945-2.2344-5.9062 0-2.5195 0.74219-4.4883 2.2344-5.9062 1.4883-1.4258 3.5547-2.1406 6.2031-2.1406z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "r",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16.547-12.766c0.61328-0.94531 1.3477-1.6719 2.2031-2.1719 0.85156-0.5 1.7891-0.75 2.8125-0.75 1.7578 0 3.0977 0.54688 4.0156 1.6406 0.92578 1.0859 1.3906 2.6562 1.3906 4.7188v9.3281h-4.9219v-7.9844-0.35938c0.007813-0.13281 0.015625-0.32031 0.015625-0.5625 0-1.082-0.16406-1.8633-0.48438-2.3438-0.3125-0.48828-0.82422-0.73438-1.5312-0.73438-0.92969 0-1.6484 0.38672-2.1562 1.1562-0.51172 0.76172-0.77344 1.8672-0.78125 3.3125v7.5156h-4.9219v-7.9844c0-1.6953-0.14844-2.7852-0.4375-3.2656-0.29297-0.48828-0.8125-0.73438-1.5625-0.73438-0.9375 0-1.6641 0.38672-2.1719 1.1562-0.51172 0.76172-0.76562 1.8594-0.76562 3.2969v7.5312h-4.9219v-15.312h4.9219v2.2344c0.60156-0.86328 1.2891-1.5156 2.0625-1.9531 0.78125-0.4375 1.6406-0.65625 2.5781-0.65625 1.0625 0 2 0.25781 2.8125 0.76562 0.8125 0.51172 1.4258 1.2305 1.8438 2.1562z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "q",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m17.75-9.3281v9.3281h-4.9219v-7.1094c0-1.3438-0.03125-2.2656-0.09375-2.7656s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-21.281h4.8906v8.2031c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "p",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.5781-20.406h5.875l7.4219 14v-14h4.9844v20.406h-5.875l-7.4219-14v14h-4.9844z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "o",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.1875-5.9688v-9.3438h4.9219v1.5312c0 0.83594-0.007813 1.875-0.015625 3.125-0.011719 1.25-0.015625 2.0859-0.015625 2.5 0 1.2422 0.03125 2.1328 0.09375 2.6719 0.070313 0.54297 0.17969 0.93359 0.32812 1.1719 0.20703 0.32422 0.47266 0.57422 0.79688 0.75 0.32031 0.16797 0.69141 0.25 1.1094 0.25 1.0195 0 1.8203-0.39062 2.4062-1.1719 0.58203-0.78125 0.875-1.8672 0.875-3.2656v-7.5625h4.8906v15.312h-4.8906v-2.2188c-0.74219 0.89844-1.5234 1.5586-2.3438 1.9844-0.82422 0.41406-1.7344 0.625-2.7344 0.625-1.7617 0-3.1055-0.53906-4.0312-1.625-0.92969-1.082-1.3906-2.6602-1.3906-4.7344z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "n",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m17.75-9.3281v9.3281h-4.9219v-7.1406c0-1.3203-0.03125-2.2344-0.09375-2.7344s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-15.312h4.8906v2.2344c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "m",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.5781-20.406h8.7344c2.5938 0 4.582 0.57812 5.9688 1.7344 1.3945 1.1484 2.0938 2.7891 2.0938 4.9219 0 2.1367-0.69922 3.7812-2.0938 4.9375-1.3867 1.1562-3.375 1.7344-5.9688 1.7344h-3.4844v7.0781h-5.25zm5.25 3.8125v5.7031h2.9219c1.0195 0 1.8047-0.25 2.3594-0.75 0.5625-0.5 0.84375-1.2031 0.84375-2.1094 0-0.91406-0.28125-1.6172-0.84375-2.1094-0.55469-0.48828-1.3398-0.73438-2.3594-0.73438z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "l",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.3594-15.312h4.8906v15.031c0 2.0508-0.49609 3.6172-1.4844 4.7031-0.98047 1.082-2.4062 1.625-4.2812 1.625h-2.4219v-3.2188h0.85938c0.92578 0 1.5625-0.21094 1.9062-0.625 0.35156-0.41797 0.53125-1.2461 0.53125-2.4844zm0-5.9688h4.8906v4h-4.8906z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
  id: "k",
  overflow: "visible"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m14.719-14.828v3.9844c-0.65625-0.45703-1.3242-0.79688-2-1.0156-0.66797-0.21875-1.3594-0.32812-2.0781-0.32812-1.3672 0-2.4336 0.40234-3.2031 1.2031-0.76172 0.79297-1.1406 1.9062-1.1406 3.3438 0 1.4297 0.37891 2.543 1.1406 3.3438 0.76953 0.79297 1.8359 1.1875 3.2031 1.1875 0.75781 0 1.4844-0.10938 2.1719-0.32812 0.6875-0.22656 1.3203-0.56641 1.9062-1.0156v4c-0.76172 0.28125-1.5391 0.48828-2.3281 0.625-0.78125 0.14453-1.5742 0.21875-2.375 0.21875-2.7617 0-4.9219-0.70703-6.4844-2.125-1.5547-1.4141-2.3281-3.3828-2.3281-5.9062 0-2.5312 0.77344-4.5039 2.3281-5.9219 1.5625-1.4141 3.7227-2.125 6.4844-2.125 0.80078 0 1.5938 0.074219 2.375 0.21875 0.78125 0.13672 1.5547 0.35156 2.3281 0.64062z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m572.32 258.16c-19.602-19.602-45.359-30.238-72.801-30.238-12.32 0-24.641 2.2383-35.84 6.1602l-44.801-94.641c-3.9219-7.8398-11.762-12.879-20.16-12.879h-26.879c-5.0391 0-8.9609 3.9219-8.9609 8.9609 0 5.0391 3.9219 8.9609 8.9609 8.9609h26.879c1.6797 0 3.3594 1.1211 3.9219 2.2383l13.441 28-120.4-0.55859-3.3594-8.9609h5.6016c5.0391 0 8.9609-3.9219 8.9609-8.9609 0-5.0391-3.9219-8.9609-8.9609-8.9609h-40.32c-5.0391 0-8.9609 3.9219-8.9609 8.9609 0 5.0391 3.9219 8.9609 8.9609 8.9609h15.121l6.7188 16.801-33.602 55.441c-13.441-6.7188-28.559-10.078-44.238-10.078-57.125 0.55469-103.61 46.473-103.61 103.03 0 27.441 10.641 53.199 29.68 72.238 19.602 19.602 45.359 30.238 72.801 30.238h0.55859c53.199 0 96.879-40.32 102.48-91.84h42.559c3.3594 0 6.1602-1.6797 7.8398-4.4805l74.48-134.4 19.039 39.762c-7.8359 4.4805-14.559 9.5234-20.719 15.684-19.602 19.039-30.238 44.801-30.238 72.238 0 27.441 10.641 53.199 29.68 72.238 19.602 19.602 45.359 30.238 72.801 30.238h0.55859c56.559 0 102.48-45.922 103.04-101.92-0.55859-26.875-11.199-52.633-30.238-72.234zm-371.28 156.8s-0.55859 0 0 0c-22.961 0-44.238-8.9609-60.48-25.199-15.68-15.684-24.637-36.961-24.637-59.363 0-46.48 38.078-84 85.121-84h0.55859c12.32 0 24.078 2.8008 34.719 7.2812l-45.359 73.922c-1.6797 2.8008-1.6797 6.1602 0 8.9609 1.6797 2.8008 4.4805 4.4805 7.8398 4.4805h86.801c-5.6016 41.438-41.441 73.918-84.562 73.918zm13.441-91.84 36.961-60.48c3.3594 2.8008 6.7188 5.0391 10.078 8.3984 14 14 22.398 32.48 24.078 52.078zm89.039 0c-1.6797-24.641-11.762-47.039-29.68-64.961-3.9219-3.9219-8.3984-7.8398-12.879-11.199l26.32-43.121 45.918 119.28zm44.242-12.32-44.801-117.6 110.32 0.55859zm151.2 104.16c-22.961 0-44.238-8.9609-60.48-25.199-15.68-15.684-24.641-36.961-24.641-59.363 0-22.398 8.9609-43.68 25.199-59.359 5.0391-5.0391 10.078-8.9609 15.68-12.32l35.84 75.602c1.6797 3.3594 5.0391 5.0391 8.3984 5.0391 1.1211 0 2.8008 0 3.9219-1.1211 4.4805-2.2383 6.1602-7.2812 4.4805-11.762l-35.84-75.602c8.9609-2.8008 17.922-4.4805 28-4.4805h0.55859c22.961 0 44.238 8.9609 59.922 25.199 16.238 16.238 24.641 36.961 24.641 59.922-0.5625 45.926-38.641 83.445-85.68 83.445z"
})));
blockIcons.icon5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 600 600",
  xmlns: "http://www.w3.org/2000/svg",
  width: "22",
  height: "22"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h600v600H0z",
  fill: "#06f"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M172 373.3h-66.4v-5.7c10.8 0 11.9-2.7 11.9-15.9v-75.8c0-13.2-1.1-15.9-11.9-15.9v-5.7h54.5v20.5c5.4-11.6 19.4-23.2 36.4-23.2 24.8 0 38.3 17.5 38.3 39.1v61c0 13.2 1.1 15.9 11.9 15.9v5.7h-66.4v-5.7c10.8 0 11.9-2.7 11.9-15.9v-55.9c0-18.1-7.3-25.1-17.5-25.1-5.7 0-11.3 3.5-14.6 10.8v70.2c0 13.2 1.3 15.9 11.9 15.9zM264 260v-5.7h54.5v97.4c0 13.2 1.3 15.9 11.9 15.9v5.7H264v-5.7c10.8 0 11.9-2.7 11.9-15.9v-75.8c0-13.2-1.1-15.9-11.9-15.9z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M357.9 275.9c0-13.2-1.3-15.9-11.9-15.9v-5.7h54.5v123.6c0 34.5-23.2 49.4-51.5 49.4-14.6 0-24.3-3.8-29.4-8.1l2.4-5.1c4.6 3 8.4 4.6 14.8 4.6 12.4 0 21-8.1 21-26.7V275.9zM428 260v-5.7h54.5v97.4c0 13.2 1.3 15.9 11.9 15.9v5.7H428v-5.7c10.8 0 11.9-2.7 11.9-15.9v-75.8c0-13.2-1.1-15.9-11.9-15.9z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "297.2",
  cy: "195.6",
  r: "22.9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "379.2",
  cy: "195.6",
  r: "22.9"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "461.2",
  cy: "195.6",
  r: "22.9"
})));
/* harmony default export */ __webpack_exports__["default"] = (blockIcons);

/***/ }),

/***/ "./src/4-block/editor.scss":
/*!*********************************!*\
  !*** ./src/4-block/editor.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/4-block/style.scss":
/*!********************************!*\
  !*** ./src/4-block/style.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"4-block/index": 0,
/******/ 			"4-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknew_gutenberg_block"] = self["webpackChunknew_gutenberg_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["4-block/style-index"], function() { return __webpack_require__("./src/4-block/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map