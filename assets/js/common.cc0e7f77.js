(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],Array(91).concat([
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});var useThemeConfig_1=__webpack_require__(121);Object.defineProperty(exports,"useThemeConfig",{enumerable:true,get:function(){return useThemeConfig_1.useThemeConfig;}});var useAlternatePageUtils_1=__webpack_require__(142);Object.defineProperty(exports,"useAlternatePageUtils",{enumerable:true,get:function(){return useAlternatePageUtils_1.useAlternatePageUtils;}});var searchUtils_1=__webpack_require__(143);Object.defineProperty(exports,"docVersionSearchTag",{enumerable:true,get:function(){return searchUtils_1.docVersionSearchTag;}});Object.defineProperty(exports,"DEFAULT_SEARCH_TAG",{enumerable:true,get:function(){return searchUtils_1.DEFAULT_SEARCH_TAG;}});var docsUtils_1=__webpack_require__(122);Object.defineProperty(exports,"isDocsPluginEnabled",{enumerable:true,get:function(){return docsUtils_1.isDocsPluginEnabled;}});var pathUtils_1=__webpack_require__(147);Object.defineProperty(exports,"isSamePath",{enumerable:true,get:function(){return pathUtils_1.isSamePath;}});var generalUtils_1=__webpack_require__(148);Object.defineProperty(exports,"useTitleFormatter",{enumerable:true,get:function(){return generalUtils_1.useTitleFormatter;}});var usePluralForm_1=__webpack_require__(149);Object.defineProperty(exports,"usePluralForm",{enumerable:true,get:function(){return usePluralForm_1.usePluralForm;}});var useDocsPreferredVersion_1=__webpack_require__(150);Object.defineProperty(exports,"useDocsPreferredVersion",{enumerable:true,get:function(){return useDocsPreferredVersion_1.useDocsPreferredVersion;}});Object.defineProperty(exports,"useDocsPreferredVersionByPluginId",{enumerable:true,get:function(){return useDocsPreferredVersion_1.useDocsPreferredVersionByPluginId;}});var DocsPreferredVersionProvider_1=__webpack_require__(123);Object.defineProperty(exports,"DocsPreferredVersionContextProvider",{enumerable:true,get:function(){return DocsPreferredVersionProvider_1.DocsPreferredVersionContextProvider;}});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ translate; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Translate; });

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//*
Minimal implementation of a React interpolate component.
We don't ship a markdown parser nor a feature-complete i18n library on purpose.
More details here: https://github.com/facebook/docusaurus/pull/4295
*/const ValueRegexp=/{\w+}/g;const ValueFoundMarker='{}';// does not care much
function interpolate(text,values){const elements=[];const processedText=text.replace(ValueRegexp,match=>{// remove {{ and }} around the placeholder
const key=match.substr(1,match.length-2);const value=values===null||values===void 0?void 0:values[key];if(typeof value!=='undefined'){const element=/*#__PURE__*/react_default.a.isValidElement(value)?value:// For non-React elements: basic primitive->string conversion
String(value);elements.push(element);return ValueFoundMarker;}else{return match;// no match? add warning?
}});// No interpolation to be done: just return the text
if(elements.length===0){return text;}// Basic string interpolation: returns interpolated string
else if(elements.every(el=>typeof el==='string')){return processedText.split(ValueFoundMarker).reduce((str,value,index)=>{var _a;return str.concat(value).concat((_a=elements[index])!==null&&_a!==void 0?_a:'');},'');}// JSX interpolation: returns ReactNode
else{return processedText.split(ValueFoundMarker).reduce((array,value,index)=>{return[...array,/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,{key:index},value,elements[index])];},[]);}}function Interpolate({children,values}){return interpolate(children,values);}
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(27);

// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Can't read it from context, due to exposing imperative API
function getLocalizedMessage({id,message}){var _a;return(_a=codeTranslations[id!==null&&id!==void 0?id:message])!==null&&_a!==void 0?_a:message;}// Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)
function translate({message,id},values){var _a;const localizedMessage=(_a=getLocalizedMessage({message,id}))!==null&&_a!==void 0?_a:message;return interpolate(localizedMessage,values);}// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near the text?
function Translate({children,id,values}){var _a;const localizedMessage=(_a=getLocalizedMessage({message:children,id}))!==null&&_a!==void 0?_a:children;return/*#__PURE__*/react_default.a.createElement(Interpolate,{values:values},localizedMessage);}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js + 1 modules
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ../node_modules/react-simple-code-editor/lib/index.js
var lib = __webpack_require__(161);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/prism-react-renderer/prism/index.js
var prism_react_renderer_prism = __webpack_require__(25);

// CONCATENATED MODULE: ../node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var duotoneDark_theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (duotoneDark_theme);

// CONCATENATED MODULE: ../node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism_react_renderer_prism["a" /* default */],
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react["Component"]);

/* harmony default export */ var dist = (Highlight);


// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/custom-buble.js
var custom_buble = __webpack_require__(162);

// EXTERNAL MODULE: ../node_modules/react-live/node_modules/core-js/fn/object/assign.js
var object_assign = __webpack_require__(168);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ../node_modules/react-live/dist/react-live.es.js







var react_live_es_theme = {
  plain: {
    color: '#C5C8C6',
    backgroundColor: '#1D1F21'
  },
  styles: [{
    types: ['prolog', 'comment', 'doctype', 'cdata'],
    style: {
      color: 'hsl(30, 20%, 50%)'
    }
  }, {
    types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
    style: { color: 'hsl(350, 40%, 70%)' }
  }, {
    types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
    style: {
      color: 'hsl(75, 70%, 60%)'
    }
  }, {
    types: ['operator', 'entity', 'url', 'string', 'variable', 'language-css'],
    style: {
      color: 'hsl(40, 90%, 60%)'
    }
  }, {
    types: ['deleted'],
    style: {
      color: 'rgb(255, 85, 85)'
    }
  }, {
    types: ['italic'],
    style: {
      fontStyle: 'italic'
    }
  }, {
    types: ['important', 'bold'],
    style: {
      fontWeight: 'bold'
    }
  }, {
    types: ['regex', 'important'],
    style: {
      color: '#e90'
    }
  }, {
    types: ['atrule', 'attr-value', 'keyword'],
    style: {
      color: 'hsl(350, 40%, 70%)'
    }
  }, {
    types: ['punctuation', 'symbol'],
    style: {
      opacity: '0.7'
    }
  }]
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var react_live_es_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
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
};









var react_live_es_objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var react_live_es_CodeEditor = function (_Component) {
  inherits(CodeEditor, _Component);

  function CodeEditor() {
    var _temp, _this, _ret;

    classCallCheck(this, CodeEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      code: ''
    }, _this.updateContent = function (code) {
      _this.setState({ code: code }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.code);
        }
      });
    }, _this.highlightCode = function (code) {
      return react_default.a.createElement(
        dist,
        {
          Prism: prism_react_renderer_prism["a" /* default */],
          code: code,
          theme: _this.props.theme || react_live_es_theme,
          language: _this.props.language
        },
        function (_ref) {
          var tokens = _ref.tokens,
              getLineProps = _ref.getLineProps,
              getTokenProps = _ref.getTokenProps;
          return react_default.a.createElement(
            react["Fragment"],
            null,
            tokens.map(function (line, i) {
              return (
                // eslint-disable-next-line react/jsx-key
                react_default.a.createElement(
                  'div',
                  getLineProps({ line: line, key: i }),
                  line.map(function (token, key) {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      react_default.a.createElement('span', getTokenProps({ token: token, key: key }))
                    );
                  })
                )
              );
            })
          );
        }
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  CodeEditor.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.code !== state.prevCodeProp) {
      return { code: props.code, prevCodeProp: props.code };
    }

    return null;
  };

  CodeEditor.prototype.render = function render() {
    // eslint-disable-next-line no-unused-vars
    var _props = this.props,
        style = _props.style,
        _code = _props.code,
        onChange = _props.onChange,
        language = _props.language,
        theme$$1 = _props.theme,
        rest = react_live_es_objectWithoutProperties(_props, ['style', 'code', 'onChange', 'language', 'theme']);
    var code = this.state.code;


    var baseTheme = theme$$1 && _typeof(theme$$1.plain) === 'object' ? theme$$1.plain : {};

    return react_default.a.createElement(lib_default.a, react_live_es_extends({
      value: code,
      padding: 10,
      highlight: this.highlightCode,
      onValueChange: this.updateContent,
      style: react_live_es_extends({
        whiteSpace: 'pre',
        fontFamily: 'monospace'
      }, baseTheme, style)
    }, rest));
  };

  return CodeEditor;
}(react["Component"]);

var LiveContext = Object(react["createContext"])({});

var _poly = { assign: assign_default.a };

var opts = {
  objectAssign: '_poly.assign',
  transforms: {
    dangerousForOf: true,
    dangerousTaggedTemplateString: true
  }
};

var transform$1 = (function (code) {
  return Object(custom_buble["transform"])(code, opts).code;
});

var react_live_es_errorBoundary = function errorBoundary(Element, errorCallback) {
  return function (_Component) {
    inherits(ErrorBoundary, _Component);

    function ErrorBoundary() {
      classCallCheck(this, ErrorBoundary);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ErrorBoundary.prototype.componentDidCatch = function componentDidCatch(error) {
      errorCallback(error);
    };

    ErrorBoundary.prototype.render = function render() {
      return typeof Element === 'function' ? react_default.a.createElement(Element, null) : Element;
    };

    return ErrorBoundary;
  }(react["Component"]);
};

var react_live_es_evalCode = function evalCode(code, scope) {
  var scopeKeys = Object.keys(scope);
  var scopeValues = scopeKeys.map(function (key) {
    return scope[key];
  });
  // eslint-disable-next-line no-new-func
  var res = new (Function.prototype.bind.apply(Function, [null].concat(['_poly', 'React'], scopeKeys, [code])))();
  return res.apply(undefined, [_poly, react_default.a].concat(scopeValues));
};

var generateElement = function generateElement(_ref, errorCallback) {
  var _ref$code = _ref.code,
      code = _ref$code === undefined ? '' : _ref$code,
      _ref$scope = _ref.scope,
      scope = _ref$scope === undefined ? {} : _ref$scope;

  // NOTE: Remove trailing semicolon to get an actual expression.
  var codeTrimmed = code.trim().replace(/;$/, '');

  // NOTE: Workaround for classes and arrow functions.
  var transformed = transform$1('return (' + codeTrimmed + ')').trim();
  return react_live_es_errorBoundary(react_live_es_evalCode(transformed, scope), errorCallback);
};

var renderElementAsync = function renderElementAsync(_ref2, resultCallback, errorCallback
// eslint-disable-next-line consistent-return
) {
  var _ref2$code = _ref2.code,
      code = _ref2$code === undefined ? '' : _ref2$code,
      _ref2$scope = _ref2.scope,
      scope = _ref2$scope === undefined ? {} : _ref2$scope;

  var render = function render(element) {
    if (typeof element === 'undefined') {
      errorCallback(new SyntaxError('`render` must be called with valid JSX.'));
    } else {
      resultCallback(react_live_es_errorBoundary(element, errorCallback));
    }
  };

  if (!/render\s*\(/.test(code)) {
    return errorCallback(new SyntaxError('No-Inline evaluations must call `render`.'));
  }

  react_live_es_evalCode(transform$1(code), react_live_es_extends({}, scope, { render: render }));
};

var react_live_es_LiveProvider = function (_Component) {
  inherits(LiveProvider, _Component);

  function LiveProvider() {
    var _temp, _this, _ret;

    classCallCheck(this, LiveProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onChange = function (code) {
      var _this$props = _this.props,
          scope = _this$props.scope,
          transformCode = _this$props.transformCode,
          noInline = _this$props.noInline;

      _this.transpile({ code: code, scope: scope, transformCode: transformCode, noInline: noInline });
    }, _this.onError = function (error) {
      _this.setState({ error: error.toString() });
    }, _this.transpile = function (_ref) {
      var code = _ref.code,
          scope = _ref.scope,
          transformCode = _ref.transformCode,
          _ref$noInline = _ref.noInline,
          noInline = _ref$noInline === undefined ? false : _ref$noInline;

      // Transpilation arguments
      var input = {
        code: transformCode ? transformCode(code) : code,
        scope: scope
      };

      var errorCallback = function errorCallback(err) {
        return _this.setState({ element: undefined, error: err.toString() });
      };
      var renderElement = function renderElement(element) {
        return _this.setState(react_live_es_extends({}, state, { element: element }));
      };

      // State reset object
      var state = { unsafeWrapperError: undefined, error: undefined };

      try {
        if (noInline) {
          _this.setState(react_live_es_extends({}, state, { element: null })); // Reset output for async (no inline) evaluation
          renderElementAsync(input, renderElement, errorCallback);
        } else {
          renderElement(generateElement(input, errorCallback));
        }
      } catch (error) {
        _this.setState(react_live_es_extends({}, state, { error: error.toString() }));
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  // eslint-disable-next-line camelcase
  LiveProvider.prototype.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    var _props = this.props,
        code = _props.code,
        scope = _props.scope,
        transformCode = _props.transformCode,
        noInline = _props.noInline;


    this.transpile({ code: code, scope: scope, transformCode: transformCode, noInline: noInline });
  };

  LiveProvider.prototype.componentDidUpdate = function componentDidUpdate(_ref2) {
    var prevCode = _ref2.code,
        prevScope = _ref2.scope,
        prevNoInline = _ref2.noInline,
        prevTransformCode = _ref2.transformCode;
    var _props2 = this.props,
        code = _props2.code,
        scope = _props2.scope,
        noInline = _props2.noInline,
        transformCode = _props2.transformCode;

    if (code !== prevCode || scope !== prevScope || noInline !== prevNoInline || transformCode !== prevTransformCode) {
      this.transpile({ code: code, scope: scope, transformCode: transformCode, noInline: noInline });
    }
  };

  LiveProvider.prototype.render = function render() {
    var _props3 = this.props,
        children = _props3.children,
        code = _props3.code,
        language = _props3.language,
        theme = _props3.theme,
        disabled = _props3.disabled;


    return react_default.a.createElement(
      LiveContext.Provider,
      {
        value: react_live_es_extends({}, this.state, {
          code: code,
          language: language,
          theme: theme,
          disabled: disabled,
          onError: this.onError,
          onChange: this.onChange
        })
      },
      children
    );
  };

  return LiveProvider;
}(react["Component"]);

react_live_es_LiveProvider.defaultProps = {
  code: '',
  noInline: false,
  language: 'jsx',
  disabled: false
};

function LiveEditor(props) {
  return react_default.a.createElement(
    LiveContext.Consumer,
    null,
    function (_ref) {
      var code = _ref.code,
          language = _ref.language,
          theme = _ref.theme,
          disabled = _ref.disabled,
          onChange = _ref.onChange;
      return react_default.a.createElement(react_live_es_CodeEditor, react_live_es_extends({
        theme: theme,
        code: code,
        language: language,
        disabled: disabled,
        onChange: onChange
      }, props));
    }
  );
}

function LiveError(props) {
  return react_default.a.createElement(
    LiveContext.Consumer,
    null,
    function (_ref) {
      var error = _ref.error;
      return error ? react_default.a.createElement(
        'pre',
        props,
        error
      ) : null;
    }
  );
}

function LivePreview(_ref) {
  var Component$$1 = _ref.Component,
      rest = react_live_es_objectWithoutProperties(_ref, ['Component']);

  return react_default.a.createElement(
    Component$$1,
    rest,
    react_default.a.createElement(
      LiveContext.Consumer,
      null,
      function (_ref2) {
        var Element = _ref2.element;
        return Element && react_default.a.createElement(Element, null);
      }
    )
  );
}

LivePreview.defaultProps = {
  Component: 'div'
};

function withLive(WrappedComponent) {
  var WithLive = function (_Component) {
    inherits(WithLive, _Component);

    function WithLive() {
      classCallCheck(this, WithLive);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    WithLive.prototype.render = function render() {
      var _this2 = this;

      return react_default.a.createElement(
        LiveContext.Consumer,
        null,
        function (live) {
          return react_default.a.createElement(WrappedComponent, react_live_es_extends({ live: live }, _this2.props));
        }
      );
    };

    return WithLive;
  }(react["Component"]);

  return WithLive;
}



// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(92);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(93);

// EXTERNAL MODULE: ./src/theme/Playground/styles.module.css
var styles_module = __webpack_require__(70);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./src/theme/Playground/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Playground({children,theme,transformCode,...props}){return/*#__PURE__*/react["createElement"](react_live_es_LiveProvider,Object(esm_extends["a" /* default */])({code:children.replace(/\n$/,''),transformCode:transformCode||(code=>`${code};`),theme:theme},props),/*#__PURE__*/react["createElement"]("div",{className:styles_module_default.a.playgroundPreview},/*#__PURE__*/react["createElement"](LivePreview,null)),/*#__PURE__*/react["createElement"](EditorWithHeader,null));}function EditorWithHeader(){return/*#__PURE__*/react["createElement"](react["Fragment"],null,/*#__PURE__*/react["createElement"](Header,{translateId:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",text:"Live Editor"}),/*#__PURE__*/react["createElement"](LiveEditor,{className:styles_module_default.a.playgroundEditor}),/*#__PURE__*/react["createElement"](LiveError,null));}function Header({translateId,description,text}){return/*#__PURE__*/react["createElement"]("div",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.playgroundHeader)},/*#__PURE__*/react["createElement"](Translate["a" /* default */],{id:translateId,description:description},text));}
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(95);

// EXTERNAL MODULE: ../node_modules/mobx-react-lite/es/observer.js + 9 modules
var observer = __webpack_require__(195);

// CONCATENATED MODULE: ./src/theme/ReactLiveScope/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Add react-live imports you need here
const ReactLiveScope={React: react_default.a,...react_default.a,...index_esm,observer: observer["a" /* observer */]};/* harmony default export */ var theme_ReactLiveScope = (ReactLiveScope);
// CONCATENATED MODULE: ../node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input, {target = document.body} = {}) {
	const element = document.createElement('textarea');
	const previouslyFocusedElement = document.activeElement;

	element.value = input;

	// Prevent keyboard from showing on mobile
	element.setAttribute('readonly', '');

	element.style.contain = 'strict';
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	element.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	let originalRange = false;
	if (selection.rangeCount > 0) {
		originalRange = selection.getRangeAt(0);
	}

	target.append(element);
	element.select();

	// Explicit selection workaround for iOS
	element.selectionStart = 0;
	element.selectionEnd = input.length;

	let isSuccess = false;
	try {
		isSuccess = document.execCommand('copy');
	} catch {}

	element.remove();

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	// Get the focus back on the previously focused element, if any
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus();
	}

	return isSuccess;
}

// EXTERNAL MODULE: ../node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(194);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);

// CONCATENATED MODULE: ../node_modules/prism-react-renderer/themes/palenight/index.js
// Converted automatically using ./tools/themeFromVsCode
var palenight_theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "inserted"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag", "deleted"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};

/* harmony default export */ var palenight = (palenight_theme);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(114);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var theme_common_lib = __webpack_require__(91);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const usePrismTheme=()=>{const{prism}=Object(theme_common_lib["useThemeConfig"])();const{isDarkTheme}=Object(useThemeContext["a" /* default */])();const lightModeTheme=prism.theme||palenight;const darkModeTheme=prism.darkTheme||lightModeTheme;const prismTheme=isDarkTheme?darkModeTheme:lightModeTheme;return prismTheme;};/* harmony default export */ var hooks_usePrismTheme = (usePrismTheme);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/styles.module.css
var CodeBlock_styles_module = __webpack_require__(71);
var CodeBlock_styles_module_default = /*#__PURE__*/__webpack_require__.n(CodeBlock_styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const highlightLinesRangeRegex=/{([\d,-]+)}/;const getHighlightDirectiveRegex=(languages=['js','jsBlock','jsx','python','html'])=>{// supported types of comments
const comments={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},python:{start:'#',end:''},html:{start:'<!--',end:'-->'}};// supported directives
const directives=['highlight-next-line','highlight-start','highlight-end'].join('|');// to be more reliable, the opening and closing comment must match
const commentPattern=languages.map(lang=>`(?:${comments[lang].start}\\s*(${directives})\\s*${comments[lang].end})`).join('|');// white space is allowed, but otherwise it should be on it's own line
return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);};// select comment styles based on language
const highlightDirectiveRegex=lang=>{switch(lang){case'js':case'javascript':case'ts':case'typescript':return getHighlightDirectiveRegex(['js','jsBlock']);case'jsx':case'tsx':return getHighlightDirectiveRegex(['js','jsBlock','jsx']);case'html':return getHighlightDirectiveRegex(['js','jsBlock','html']);case'python':case'py':return getHighlightDirectiveRegex(['python']);default:// all comment types
return getHighlightDirectiveRegex();}};const codeBlockTitleRegex=/(?:title=")(.*)(?:")/;function CodeBlock({children,className:languageClassName,metastring}){const{prism}=Object(theme_common_lib["useThemeConfig"])();const[showCopied,setShowCopied]=Object(react["useState"])(false);const[mounted,setMounted]=Object(react["useState"])(false);// The Prism theme on SSR is always the default theme but the site theme
// can be in a different mode. React hydration doesn't update DOM styles
// that come from SSR. Hence force a re-render after mounting to apply the
// current relevant styles. There will be a flash seen of the original
// styles seen using this current approach but that's probably ok. Fixing
// the flash will require changing the theming approach and is not worth it
// at this point.
Object(react["useEffect"])(()=>{setMounted(true);},[]);const button=Object(react["useRef"])(null);let highlightLines=[];let codeBlockTitle='';const prismTheme=hooks_usePrismTheme();// In case interleaved Markdown (e.g. when using CodeBlock as standalone component).
const content=Array.isArray(children)?children.join(''):children;if(metastring&&highlightLinesRangeRegex.test(metastring)){// Tested above
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const highlightLinesRange=metastring.match(highlightLinesRangeRegex)[1];highlightLines=parse_numeric_range_default()(highlightLinesRange).filter(n=>n>0);}if(metastring&&codeBlockTitleRegex.test(metastring)){// Tested above
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
codeBlockTitle=metastring.match(codeBlockTitleRegex)[1];}let language=languageClassName&&// Force Prism's language union type to `any` because it does not contain all available languages
// eslint-disable-next-line @typescript-eslint/no-explicit-any
languageClassName.replace(/language-/,'');if(!language&&prism.defaultLanguage){language=prism.defaultLanguage;}// only declaration OR directive highlight can be used for a block
let code=content.replace(/\n$/,'');if(highlightLines.length===0&&language!==undefined){let range='';const directiveRegex=highlightDirectiveRegex(language);// go through line by line
const lines=content.replace(/\n$/,'').split('\n');let blockStart;// loop through lines
for(let index=0;index<lines.length;){const line=lines[index];// adjust for 0-index
const lineNumber=index+1;const match=line.match(directiveRegex);if(match!==null){const directive=match.slice(1).reduce((final,item)=>final||item,undefined);switch(directive){case'highlight-next-line':range+=`${lineNumber},`;break;case'highlight-start':blockStart=lineNumber;break;case'highlight-end':range+=`${blockStart}-${lineNumber-1},`;break;default:break;}lines.splice(index,1);}else{// lines without directives are unchanged
index+=1;}}highlightLines=parse_numeric_range_default()(range);code=lines.join('\n');}const handleCopyCode=()=>{copyTextToClipboard(code);setShowCopied(true);setTimeout(()=>setShowCopied(false),2000);};return/*#__PURE__*/react_default.a.createElement(dist,Object(esm_extends["a" /* default */])({},defaultProps,{key:String(mounted),theme:prismTheme,code:code,language:language}),({className,style,tokens,getLineProps,getTokenProps})=>/*#__PURE__*/react_default.a.createElement("div",{className:CodeBlock_styles_module_default.a.codeBlockContainer},codeBlockTitle&&/*#__PURE__*/react_default.a.createElement("div",{style:style,className:CodeBlock_styles_module_default.a.codeBlockTitle},codeBlockTitle),/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])(CodeBlock_styles_module_default.a.codeBlockContent,language)},/*#__PURE__*/react_default.a.createElement("div",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:Object(clsx_m["a" /* default */])(className,CodeBlock_styles_module_default.a.codeBlock,'thin-scrollbar',{[CodeBlock_styles_module_default.a.codeBlockWithTitle]:codeBlockTitle})},/*#__PURE__*/react_default.a.createElement("div",{className:CodeBlock_styles_module_default.a.codeBlockLines,style:style},tokens.map((line,i)=>{if(line.length===1&&line[0].content===''){line[0].content='\n';// eslint-disable-line no-param-reassign
}const lineProps=getLineProps({line,key:i});if(highlightLines.includes(i+1)){lineProps.className=`${lineProps.className} docusaurus-highlight-code-line`;}return/*#__PURE__*/react_default.a.createElement("div",Object(esm_extends["a" /* default */])({key:i},lineProps),line.map((token,key)=>/*#__PURE__*/react_default.a.createElement("span",Object(esm_extends["a" /* default */])({key:key},getTokenProps({token,key})))));}))),/*#__PURE__*/react_default.a.createElement("button",{ref:button,type:"button","aria-label":Object(Translate["b" /* translate */])({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),className:Object(clsx_m["a" /* default */])(CodeBlock_styles_module_default.a.copyButton),onClick:handleCopyCode},showCopied?/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))));}
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const withLiveEditor=Component=>{const WrappedComponent=props=>{if(props.live){return/*#__PURE__*/react_default.a.createElement(Playground,Object(esm_extends["a" /* default */])({scope:theme_ReactLiveScope},props));}return/*#__PURE__*/react_default.a.createElement(Component,props);};return WrappedComponent;};/* harmony default export */ var theme_CodeBlock = __webpack_exports__["a"] = (withLiveEditor(CodeBlock));

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "BackgroundWrapper", function() { return /* binding */ BackgroundWrapper; });
__webpack_require__.d(__webpack_exports__, "Callbacks", function() { return /* binding */ Callbacks; });
__webpack_require__.d(__webpack_exports__, "DISABLED_USER_SELECT_CSS_CLASS", function() { return /* binding */ DISABLED_USER_SELECT_CSS_CLASS; });
__webpack_require__.d(__webpack_exports__, "Diagram", function() { return /* binding */ _Diagram; });
__webpack_require__.d(__webpack_exports__, "DiagramSettings", function() { return /* binding */ index_esm_DiagramSettings; });
__webpack_require__.d(__webpack_exports__, "DiagramState", function() { return /* binding */ index_esm_DiagramState; });
__webpack_require__.d(__webpack_exports__, "HtmlElementRefState", function() { return /* binding */ index_esm_HtmlElementRefState; });
__webpack_require__.d(__webpack_exports__, "InnerDiagram", function() { return /* binding */ InnerDiagram; });
__webpack_require__.d(__webpack_exports__, "LinkCreationState", function() { return /* binding */ index_esm_LinkCreationState; });
__webpack_require__.d(__webpack_exports__, "LinkDefault", function() { return /* binding */ LinkDefault; });
__webpack_require__.d(__webpack_exports__, "LinkPointEndpointState", function() { return /* binding */ index_esm_LinkPointEndpointState; });
__webpack_require__.d(__webpack_exports__, "LinkPortEndpointState", function() { return /* binding */ index_esm_LinkPortEndpointState; });
__webpack_require__.d(__webpack_exports__, "LinkState", function() { return /* binding */ index_esm_LinkState; });
__webpack_require__.d(__webpack_exports__, "LinkWrapper", function() { return /* binding */ LinkWrapper; });
__webpack_require__.d(__webpack_exports__, "LinksLayer", function() { return /* binding */ LinksLayer; });
__webpack_require__.d(__webpack_exports__, "LinksSettings", function() { return /* binding */ index_esm_LinksSettings; });
__webpack_require__.d(__webpack_exports__, "LinksStore", function() { return /* binding */ index_esm_LinksStore; });
__webpack_require__.d(__webpack_exports__, "MiniControlWrapper", function() { return /* binding */ MiniControlWrapper; });
__webpack_require__.d(__webpack_exports__, "NodeContext", function() { return /* binding */ NodeContext; });
__webpack_require__.d(__webpack_exports__, "NodeDefault", function() { return /* binding */ NodeDefault; });
__webpack_require__.d(__webpack_exports__, "NodeLabel", function() { return /* binding */ NodeLabel; });
__webpack_require__.d(__webpack_exports__, "NodeState", function() { return /* binding */ index_esm_NodeState; });
__webpack_require__.d(__webpack_exports__, "NodeWrapper", function() { return /* binding */ NodeWrapper; });
__webpack_require__.d(__webpack_exports__, "NodesLayer", function() { return /* binding */ NodesLayer; });
__webpack_require__.d(__webpack_exports__, "NodesSettings", function() { return /* binding */ index_esm_NodesSettings; });
__webpack_require__.d(__webpack_exports__, "NodesStore", function() { return /* binding */ index_esm_NodesStore; });
__webpack_require__.d(__webpack_exports__, "Port", function() { return /* binding */ Port; });
__webpack_require__.d(__webpack_exports__, "PortInnerDefault", function() { return /* binding */ PortInnerDefault; });
__webpack_require__.d(__webpack_exports__, "PortInnerWrapper", function() { return /* binding */ PortInnerWrapper; });
__webpack_require__.d(__webpack_exports__, "PortState", function() { return /* binding */ index_esm_PortState; });
__webpack_require__.d(__webpack_exports__, "PortsSettings", function() { return /* binding */ index_esm_PortsSettings; });
__webpack_require__.d(__webpack_exports__, "RootStore", function() { return /* binding */ RootStore; });
__webpack_require__.d(__webpack_exports__, "RootStoreContext", function() { return /* binding */ RootStoreContext; });
__webpack_require__.d(__webpack_exports__, "RubbishBinButton", function() { return /* binding */ index_esm_RubbishBinButton; });
__webpack_require__.d(__webpack_exports__, "SelectionState", function() { return /* binding */ index_esm_SelectionState; });
__webpack_require__.d(__webpack_exports__, "VisualComponentState", function() { return /* binding */ index_esm_VisualComponentState; });
__webpack_require__.d(__webpack_exports__, "VisualComponentWithDefault", function() { return /* binding */ index_esm_VisualComponentWithDefault; });
__webpack_require__.d(__webpack_exports__, "VisualComponents", function() { return /* binding */ index_esm_VisualComponents; });
__webpack_require__.d(__webpack_exports__, "addPoints", function() { return /* binding */ addPoints; });
__webpack_require__.d(__webpack_exports__, "arePointsEqual", function() { return /* binding */ arePointsEqual; });
__webpack_require__.d(__webpack_exports__, "areTranformationsEqual", function() { return /* binding */ areTranformationsEqual; });
__webpack_require__.d(__webpack_exports__, "canDragGestureBeTapInstead", function() { return /* binding */ canDragGestureBeTapInstead; });
__webpack_require__.d(__webpack_exports__, "clampValue", function() { return /* binding */ clampValue; });
__webpack_require__.d(__webpack_exports__, "componentDefaultType", function() { return /* binding */ componentDefaultType; });
__webpack_require__.d(__webpack_exports__, "createCrossesImageGenerator", function() { return /* binding */ createCrossesImageGenerator; });
__webpack_require__.d(__webpack_exports__, "createCurvedLinkPathConstructor", function() { return /* binding */ createCurvedLinkPathConstructor; });
__webpack_require__.d(__webpack_exports__, "createDefaultBackground", function() { return /* binding */ createDefaultBackground; });
__webpack_require__.d(__webpack_exports__, "createDefaultMiniControl", function() { return /* binding */ createDefaultMiniControl; });
__webpack_require__.d(__webpack_exports__, "createDotsImageGenerator", function() { return /* binding */ createDotsImageGenerator; });
__webpack_require__.d(__webpack_exports__, "createFullPortId", function() { return /* binding */ createFullPortId; });
__webpack_require__.d(__webpack_exports__, "createGridImageGenerator", function() { return /* binding */ createGridImageGenerator; });
__webpack_require__.d(__webpack_exports__, "createLinkDefault", function() { return /* binding */ createLinkDefault; });
__webpack_require__.d(__webpack_exports__, "createLinkPath", function() { return /* binding */ createLinkPath; });
__webpack_require__.d(__webpack_exports__, "createNodeDefault", function() { return /* binding */ createNodeDefault; });
__webpack_require__.d(__webpack_exports__, "createPortInnerDefault", function() { return /* binding */ createPortInnerDefault; });
__webpack_require__.d(__webpack_exports__, "createPortsContainerDefault", function() { return /* binding */ createPortsContainerDefault; });
__webpack_require__.d(__webpack_exports__, "createStraightLinkPathConstructor", function() { return /* binding */ createStraightLinkPathConstructor; });
__webpack_require__.d(__webpack_exports__, "deepCopy", function() { return /* binding */ deepCopy; });
__webpack_require__.d(__webpack_exports__, "disableNodeUserInteractionClassName", function() { return /* binding */ disableNodeUserInteractionClassName; });
__webpack_require__.d(__webpack_exports__, "distanceBetweenPoints", function() { return /* binding */ distanceBetweenPoints; });
__webpack_require__.d(__webpack_exports__, "enableNodeUserInteractionClassName", function() { return /* binding */ enableNodeUserInteractionClassName; });
__webpack_require__.d(__webpack_exports__, "errorResult", function() { return /* binding */ errorResult; });
__webpack_require__.d(__webpack_exports__, "eventPathContainsClass", function() { return /* binding */ eventPathContainsClass; });
__webpack_require__.d(__webpack_exports__, "generateTransform", function() { return /* binding */ generateTransform; });
__webpack_require__.d(__webpack_exports__, "guid", function() { return /* binding */ guid; });
__webpack_require__.d(__webpack_exports__, "guidForcedUniqueness", function() { return /* binding */ guidForcedUniqueness; });
__webpack_require__.d(__webpack_exports__, "isBoolean", function() { return /* binding */ isBoolean; });
__webpack_require__.d(__webpack_exports__, "isNumber", function() { return /* binding */ isNumber; });
__webpack_require__.d(__webpack_exports__, "isObject", function() { return /* binding */ isObject; });
__webpack_require__.d(__webpack_exports__, "isPoint", function() { return /* binding */ isPoint; });
__webpack_require__.d(__webpack_exports__, "linkCreationComponentType", function() { return /* binding */ linkCreationComponentType; });
__webpack_require__.d(__webpack_exports__, "linkPortEndpointsEquals", function() { return /* binding */ linkPortEndpointsEquals; });
__webpack_require__.d(__webpack_exports__, "multiplyPoint", function() { return /* binding */ multiplyPoint; });
__webpack_require__.d(__webpack_exports__, "positionValues", function() { return /* binding */ positionValues; });
__webpack_require__.d(__webpack_exports__, "relativeXYPositionValues", function() { return /* binding */ relativeXYPositionValues; });
__webpack_require__.d(__webpack_exports__, "roundPoint", function() { return /* binding */ roundPoint; });
__webpack_require__.d(__webpack_exports__, "splitRelativeXYPostionByAxis", function() { return /* binding */ splitRelativeXYPostionByAxis; });
__webpack_require__.d(__webpack_exports__, "subtractPoints", function() { return /* binding */ subtractPoints; });
__webpack_require__.d(__webpack_exports__, "successResult", function() { return /* binding */ successResult; });
__webpack_require__.d(__webpack_exports__, "successValueResult", function() { return /* binding */ successValueResult; });
__webpack_require__.d(__webpack_exports__, "useDiagram", function() { return /* binding */ index_esm_useDiagram; });
__webpack_require__.d(__webpack_exports__, "useDiagramDragHandlers", function() { return /* binding */ useDiagramDragHandlers; });
__webpack_require__.d(__webpack_exports__, "useDiagramPinchHandlers", function() { return /* binding */ useDiagramPinchHandlers; });
__webpack_require__.d(__webpack_exports__, "useDiagramUserInteraction", function() { return /* binding */ index_esm_useDiagramUserInteraction; });
__webpack_require__.d(__webpack_exports__, "useDiagramWheelHandler", function() { return /* binding */ useDiagramWheelHandler; });
__webpack_require__.d(__webpack_exports__, "useLinkUserInteraction", function() { return /* binding */ index_esm_useLinkUserInteraction; });
__webpack_require__.d(__webpack_exports__, "useNodeUserInteraction", function() { return /* binding */ index_esm_useNodeUserInteraction; });
__webpack_require__.d(__webpack_exports__, "useNotifyRef", function() { return /* binding */ index_esm_useNotifyRef; });
__webpack_require__.d(__webpack_exports__, "usePortUserInteraction", function() { return /* binding */ index_esm_usePortUserInteraction; });
__webpack_require__.d(__webpack_exports__, "useRelativePositionStyles", function() { return /* binding */ useRelativePositionStyles; });
__webpack_require__.d(__webpack_exports__, "useRootStore", function() { return /* binding */ index_esm_useRootStore; });
__webpack_require__.d(__webpack_exports__, "useUpdateOrCreatePortState", function() { return /* binding */ useUpdateOrCreatePortState; });
__webpack_require__.d(__webpack_exports__, "useUserAbilityToSelectSwitcher", function() { return /* binding */ useUserAbilityToSelectSwitcher; });

// EXTERNAL MODULE: ../node_modules/mobx-react-lite/es/observer.js + 9 modules
var observer = __webpack_require__(195);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ../node_modules/react-use-gesture/dist/react-use-gesture.esm.js


// vector add
function addV(v1, v2) {
  return v1.map(function (v, i) {
    return v + v2[i];
  });
} // vector substract

function subV(v1, v2) {
  return v1.map(function (v, i) {
    return v - v2[i];
  });
}
/**
 * Calculates distance
 * @param movement the difference between current and initial vectors
 * @returns distance
 */

function calculateDistance(movement) {
  return Math.hypot.apply(Math, movement);
}
function calculateAllGeometry(movement, delta) {
  if (delta === void 0) {
    delta = movement;
  }

  var dl = calculateDistance(delta);
  var alpha = dl === 0 ? 0 : 1 / dl;
  var direction = delta.map(function (v) {
    return alpha * v;
  });
  var distance = calculateDistance(movement);
  return {
    distance: distance,
    direction: direction
  };
}
/**
 * Calculates all kinematics
 * @template T the expected vector type
 * @param movement the difference between current and initial vectors
 * @param delta the difference between current and previous vectors
 * @param delta_t the time difference between current and previous timestamps
 * @returns all kinematics
 */

function calculateAllKinematics(movement, delta, dt) {
  var dl = calculateDistance(delta);
  var alpha = dl === 0 ? 0 : 1 / dl;
  var beta = dt === 0 ? 0 : 1 / dt;
  var velocity = beta * dl;
  var velocities = delta.map(function (v) {
    return beta * v;
  });
  var direction = delta.map(function (v) {
    return alpha * v;
  });
  var distance = calculateDistance(movement);
  return {
    velocities: velocities,
    velocity: velocity,
    distance: distance,
    direction: direction
  };
}
/**
 * Because IE doesn't support `Math.sign` function, so we use the polyfill version of the function.
 * This polyfill function is suggested by Mozilla:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#Polyfill
 * @param x target number
 */

function sign(x) {
  if (Math.sign) return Math.sign(x);
  return Number(x > 0) - Number(x < 0) || +x;
}

function minMax(value, min, max) {
  return Math.max(min, Math.min(value, max));
} // Based on @aholachek ;)
// https://twitter.com/chpwn/status/285540192096497664
// iOS constant = 0.55
// https://medium.com/@nathangitter/building-fluid-interfaces-ios-swift-9732bb934bf5


function rubberband2(distance, constant) {
  // default constant from the article is 0.7
  return Math.pow(distance, constant * 5);
}

function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return rubberband2(distance, constant);
  return distance * dimension * constant / (dimension + constant * distance);
}

function rubberbandIfOutOfBounds(position, min, max, constant) {
  if (constant === void 0) {
    constant = 0.15;
  }

  if (constant === 0) return minMax(position, min, max);
  if (position < min) return -rubberband(min - position, max - min, constant) + min;
  if (position > max) return +rubberband(position - max, max - min, constant) + max;
  return position;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function noop() {}
/**
 * TODO Beware that only optimized cases are covered in tests =)
 * TODO Need to cover general case as well
 *
 * @param fns
 */

function chainFns() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) return noop;
  if (fns.length === 1) return fns[0];
  return function () {
    var result;

    for (var _iterator = _createForOfIteratorHelperLoose(fns), _step; !(_step = _iterator()).done;) {
      var fn = _step.value;
      result = fn.apply(this, arguments) || result;
    }

    return result;
  };
}
/**
 * Expects a simple value or 2D vector (an array with 2 elements) and
 * always returns 2D vector. If simple value is passed, returns a
 * vector with this value as both coordinates.
 *
 * @param value
 */

function ensureVector(value, fallback) {
  if (value === undefined) {
    if (fallback === undefined) {
      throw new Error('Must define fallback value if undefined is expected');
    }

    value = fallback;
  }

  if (Array.isArray(value)) return value;
  return [value, value];
}
/**
 * Helper for defining a default value
 *
 * @param value
 * @param fallback
 */

function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}
/**
 * Resolves getters (functions) by calling them
 * If simple value is given it just passes through
 *
 * @param v
 */

function valueFn(v) {
  if (typeof v === 'function') {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    // @ts-ignore
    return v.apply(void 0, args);
  } else {
    return v;
  }
}

function resolveWith(config, resolvers) {
  if (config === void 0) {
    config = {};
  }

  var result = {};

  for (var _i = 0, _Object$entries = Object.entries(resolvers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
        key = _Object$entries$_i[0],
        resolver = _Object$entries$_i[1];

    switch (typeof resolver) {
      case 'function':
        result[key] = resolver.call(result, config[key], key, config);
        break;

      case 'object':
        result[key] = resolveWith(config[key], resolver);
        break;

      case 'boolean':
        if (resolver) result[key] = config[key];
        break;
    }
  }

  return result;
}

var DEFAULT_DRAG_DELAY = 180;
var DEFAULT_RUBBERBAND = 0.15;
var DEFAULT_SWIPE_VELOCITY = 0.5;
var DEFAULT_SWIPE_DISTANCE = 60;
var InternalGestureOptionsNormalizers = {
  threshold: function threshold(value) {
    if (value === void 0) {
      value = 0;
    }

    return ensureVector(value);
  },
  rubberband: function rubberband(value) {
    if (value === void 0) {
      value = 0;
    }

    switch (value) {
      case true:
        return ensureVector(DEFAULT_RUBBERBAND);

      case false:
        return ensureVector(0);

      default:
        return ensureVector(value);
    }
  },
  enabled: function enabled(value) {
    if (value === void 0) {
      value = true;
    }

    return value;
  },
  triggerAllEvents: function triggerAllEvents(value) {
    if (value === void 0) {
      value = false;
    }

    return value;
  },
  initial: function initial(value) {
    if (value === void 0) {
      value = 0;
    }

    if (typeof value === 'function') return value;
    return ensureVector(value);
  }
};

var InternalCoordinatesOptionsNormalizers = /*#__PURE__*/_extends({}, InternalGestureOptionsNormalizers, {
  axis: true,
  lockDirection: function lockDirection(value) {
    if (value === void 0) {
      value = false;
    }

    return value;
  },
  bounds: function bounds(value) {
    if (value === void 0) {
      value = {};
    }

    if (typeof value === 'function') return function (state) {
      return InternalCoordinatesOptionsNormalizers.bounds(value(state));
    };
    var _value2 = value,
        _value2$left = _value2.left,
        left = _value2$left === void 0 ? -Infinity : _value2$left,
        _value2$right = _value2.right,
        right = _value2$right === void 0 ? Infinity : _value2$right,
        _value2$top = _value2.top,
        top = _value2$top === void 0 ? -Infinity : _value2$top,
        _value2$bottom = _value2.bottom,
        bottom = _value2$bottom === void 0 ? Infinity : _value2$bottom;
    return [[left, right], [top, bottom]];
  }
});

var isBrowser = typeof window !== 'undefined' && window.document && window.document.createElement;
var InternalGenericOptionsNormalizers = {
  enabled: function enabled(value) {
    if (value === void 0) {
      value = true;
    }

    return value;
  },
  domTarget: true,
  window: /*#__PURE__*/function (_window) {
    function window(_x) {
      return _window.apply(this, arguments);
    }

    window.toString = function () {
      return _window.toString();
    };

    return window;
  }(function (value) {
    if (value === void 0) {
      value = isBrowser ? window : undefined;
    }

    return value;
  }),
  eventOptions: function eventOptions(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$passive = _ref.passive,
        passive = _ref$passive === void 0 ? true : _ref$passive,
        _ref$capture = _ref.capture,
        capture = _ref$capture === void 0 ? false : _ref$capture;

    return {
      passive: passive,
      capture: capture
    };
  }
};

var InternalDistanceAngleOptionsNormalizers = /*#__PURE__*/_extends({}, InternalGestureOptionsNormalizers, {
  bounds: function bounds(_value, _key, _ref2) {
    var _ref2$distanceBounds = _ref2.distanceBounds,
        distanceBounds = _ref2$distanceBounds === void 0 ? {} : _ref2$distanceBounds,
        _ref2$angleBounds = _ref2.angleBounds,
        angleBounds = _ref2$angleBounds === void 0 ? {} : _ref2$angleBounds;

    var _distanceBounds = function _distanceBounds(state) {
      var D = assignDefault(valueFn(distanceBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };

    var _angleBounds = function _angleBounds(state) {
      var A = assignDefault(valueFn(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };

    if (typeof distanceBounds !== 'function' && typeof angleBounds !== 'function') return [_distanceBounds(), _angleBounds()];
    return function (state) {
      return [_distanceBounds(state), _angleBounds(state)];
    };
  }
});

var InternalDragOptionsNormalizers = /*#__PURE__*/_extends({}, InternalCoordinatesOptionsNormalizers, {
  threshold: function threshold(v, _k, _ref3) {
    var _ref3$filterTaps = _ref3.filterTaps,
        filterTaps = _ref3$filterTaps === void 0 ? false : _ref3$filterTaps,
        _ref3$lockDirection = _ref3.lockDirection,
        lockDirection = _ref3$lockDirection === void 0 ? false : _ref3$lockDirection,
        _ref3$axis = _ref3.axis,
        axis = _ref3$axis === void 0 ? undefined : _ref3$axis;
    var A = ensureVector(v, filterTaps ? 3 : lockDirection ? 1 : axis ? 1 : 0);
    this.filterTaps = filterTaps || A[0] + A[1] > 0;
    return A;
  },
  swipeVelocity: function swipeVelocity(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_VELOCITY;
    }

    return ensureVector(v);
  },
  swipeDistance: function swipeDistance(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_DISTANCE;
    }

    return ensureVector(v);
  },
  delay: function delay(value) {
    if (value === void 0) {
      value = 0;
    }

    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;

      case false:
        return 0;

      default:
        return value;
    }
  }
});

function getInternalGenericOptions(config) {
  if (config === void 0) {
    config = {};
  }

  // TODO warn when passive is set to true and domTarget is undefined
  return resolveWith(config, InternalGenericOptionsNormalizers);
}
function getInternalCoordinatesOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalCoordinatesOptionsNormalizers);
}
function getInternalDistanceAngleOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalDistanceAngleOptionsNormalizers);
}
function getInternalDragOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalDragOptionsNormalizers);
}

function _buildMoveConfig(_ref) {
  var domTarget = _ref.domTarget,
      eventOptions = _ref.eventOptions,
      window = _ref.window,
      enabled = _ref.enabled,
      rest = _objectWithoutPropertiesLoose(_ref, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.move = getInternalCoordinatesOptions(rest);
  return opts;
}
function _buildHoverConfig(_ref2) {
  var domTarget = _ref2.domTarget,
      eventOptions = _ref2.eventOptions,
      window = _ref2.window,
      enabled = _ref2.enabled,
      rest = _objectWithoutPropertiesLoose(_ref2, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.hover = _extends({
    enabled: true
  }, rest);
  return opts;
}
function _buildDragConfig(_ref3) {
  var domTarget = _ref3.domTarget,
      eventOptions = _ref3.eventOptions,
      window = _ref3.window,
      enabled = _ref3.enabled,
      rest = _objectWithoutPropertiesLoose(_ref3, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.drag = getInternalDragOptions(rest);
  return opts;
}
function _buildPinchConfig(_ref4) {
  var domTarget = _ref4.domTarget,
      eventOptions = _ref4.eventOptions,
      window = _ref4.window,
      enabled = _ref4.enabled,
      rest = _objectWithoutPropertiesLoose(_ref4, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.pinch = getInternalDistanceAngleOptions(rest);
  return opts;
}
function _buildScrollConfig(_ref5) {
  var domTarget = _ref5.domTarget,
      eventOptions = _ref5.eventOptions,
      window = _ref5.window,
      enabled = _ref5.enabled,
      rest = _objectWithoutPropertiesLoose(_ref5, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.scroll = getInternalCoordinatesOptions(rest);
  return opts;
}
function _buildWheelConfig(_ref6) {
  var domTarget = _ref6.domTarget,
      eventOptions = _ref6.eventOptions,
      window = _ref6.window,
      enabled = _ref6.enabled,
      rest = _objectWithoutPropertiesLoose(_ref6, ["domTarget", "eventOptions", "window", "enabled"]);

  var opts = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    window: window,
    enabled: enabled
  });
  opts.wheel = getInternalCoordinatesOptions(rest);
  return opts;
}
function buildComplexConfig(config, actions) {
  if (config === void 0) {
    config = {};
  }

  if (actions === void 0) {
    actions = new Set();
  }

  var _config = config,
      drag = _config.drag,
      wheel = _config.wheel,
      move = _config.move,
      scroll = _config.scroll,
      pinch = _config.pinch,
      hover = _config.hover,
      eventOptions = _config.eventOptions,
      window = _config.window,
      domTarget = _config.domTarget,
      enabled = _config.enabled;
  var mergedConfig = getInternalGenericOptions({
    eventOptions: eventOptions,
    window: window,
    domTarget: domTarget,
    enabled: enabled
  });
  if (actions.has('onDrag')) mergedConfig.drag = getInternalDragOptions(drag);
  if (actions.has('onWheel')) mergedConfig.wheel = getInternalCoordinatesOptions(wheel);
  if (actions.has('onScroll')) mergedConfig.scroll = getInternalCoordinatesOptions(scroll);
  if (actions.has('onMove')) mergedConfig.move = getInternalCoordinatesOptions(move);
  if (actions.has('onPinch')) mergedConfig.pinch = getInternalDistanceAngleOptions(pinch);
  if (actions.has('onHover')) mergedConfig.hover = _extends({
    enabled: true
  }, hover);
  return mergedConfig;
}

function getInitial(mixed) {
  return _extends({
    _active: false,
    _blocked: false,
    _intentional: [false, false],
    _movement: [0, 0],
    _initial: [0, 0],
    _bounds: [[-Infinity, Infinity], [-Infinity, Infinity]],
    _lastEventType: undefined,
    event: undefined,
    // currentTarget: undefined,
    // pointerId: undefined,
    intentional: false,
    values: [0, 0],
    velocities: [0, 0],
    delta: [0, 0],
    movement: [0, 0],
    offset: [0, 0],
    lastOffset: [0, 0],
    direction: [0, 0],
    initial: [0, 0],
    previous: [0, 0],
    first: false,
    last: false,
    active: false,
    timeStamp: 0,
    startTime: 0,
    elapsedTime: 0,
    cancel: noop,
    canceled: false,
    memo: undefined,
    args: undefined
  }, mixed);
}

function getInitialState() {
  var shared = {
    hovering: false,
    scrolling: false,
    wheeling: false,
    dragging: false,
    moving: false,
    pinching: false,
    touches: 0,
    buttons: 0,
    down: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false
  };
  var drag = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0,
    _isTap: true,
    _delayedEvent: false,
    _pointerId: undefined,
    tap: false,
    swipe: [0, 0]
  });
  var pinch = getInitial({
    da: [0, 0],
    vdva: [0, 0],
    // @ts-ignore origin can never be passed as undefined in userland
    origin: undefined,
    turns: 0
  });
  var wheel = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var move = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var scroll = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  return {
    shared: shared,
    drag: drag,
    pinch: pinch,
    wheel: wheel,
    move: move,
    scroll: scroll
  };
}

var RecognizersMap = /*#__PURE__*/new Map();
/**
 * @private
 * Recognizer abstract class.
 */

var Recognizer = /*#__PURE__*/function () {
  /**
   * Creates an instance of a gesture recognizer.
   * @param stateKey drag, move, pinch, etc.
   * @param controller the controller attached to the gesture
   * @param [args] the args that should be passed to the gesture handler
   */
  function Recognizer(controller, args) {
    var _this = this;

    if (args === void 0) {
      args = [];
    }

    this.controller = controller;
    this.args = args;
    this.debounced = true; // Convenience method to set a timeout for a given gesture

    this.setTimeout = function (callback, ms) {
      var _window;

      if (ms === void 0) {
        ms = 140;
      }

      clearTimeout(_this.controller.timeouts[_this.stateKey]);

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args));
    }; // Convenience method to clear a timeout for a given gesture


    this.clearTimeout = function () {
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
    };
    /**
     * Fires the gesture handler
     */


    this.fireGestureHandler = function (forceFlag) {
      if (forceFlag === void 0) {
        forceFlag = false;
      }

      /**
       * If the gesture has been blocked (this can happen when the gesture has started in an unwanted direction),
       * clean everything and don't do anything.
       */
      if (_this.state._blocked) {
        // we need debounced gestures to end by themselves
        if (!_this.debounced) {
          _this.state._active = false;

          _this.clean();
        }

        return null;
      } // If the gesture has no intentional dimension, don't fire the handler.


      if (!forceFlag && !_this.state.intentional && !_this.config.triggerAllEvents) return null;

      if (_this.state.intentional) {
        var prev_active = _this.state.active;
        var next_active = _this.state._active;
        _this.state.active = next_active;
        _this.state.first = next_active && !prev_active;
        _this.state.last = prev_active && !next_active;
        _this.controller.state.shared[_this.ingKey] = next_active; // Sets dragging, pinching, etc. to the gesture active state
      }

      var state = _extends({}, _this.controller.state.shared, _this.state, _this.mapStateValues(_this.state)); // @ts-ignore


      var newMemo = _this.handler(state); // Sets memo to the returned value of the handler (unless it's not undefined)


      _this.state.memo = newMemo !== void 0 ? newMemo : _this.state.memo; // Cleans the gesture when the gesture is no longer active.

      if (!_this.state._active) _this.clean();
      return state;
    };
  } // Returns the gesture config


  var _proto = Recognizer.prototype;

  // Convenience method to update the shared state
  _proto.updateSharedState = function updateSharedState(sharedState) {
    Object.assign(this.controller.state.shared, sharedState);
  } // Convenience method to update the gesture state
  ;

  _proto.updateGestureState = function updateGestureState(gestureState) {
    Object.assign(this.state, gestureState);
  }
  /**
   * Returns state properties depending on the movement and state.
   *
   * Should be overriden for custom behavior, doesn't do anything in the implementation
   * below.
   */
  ;

  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    return {
      _intentional: _intentional,
      _blocked: false
    };
  }
  /**
   * Returns basic movement properties for the gesture based on the next values and current state.
   */
  ;

  _proto.getMovement = function getMovement(values) {
    var _this$config = this.config,
        initial = _this$config.initial,
        bounds = _this$config.bounds,
        rubberband = _this$config.rubberband,
        T = _this$config.threshold;
    var _this$state = this.state,
        _bounds = _this$state._bounds,
        _initial = _this$state._initial,
        _active = _this$state._active,
        wasIntentional = _this$state._intentional,
        lastOffset = _this$state.lastOffset,
        prevMovement = _this$state.movement;
    var M = this.getInternalMovement(values, this.state);
    var i0 = wasIntentional[0] === false ? getIntentionalDisplacement(M[0], T[0]) : wasIntentional[0];
    var i1 = wasIntentional[1] === false ? getIntentionalDisplacement(M[1], T[1]) : wasIntentional[1]; // Get gesture specific state properties based on intentionality and movement.

    var intentionalityCheck = this.checkIntentionality([i0, i1], M);

    if (intentionalityCheck._blocked) {
      return _extends({}, intentionalityCheck, {
        _movement: M,
        delta: [0, 0]
      });
    }

    var _intentional = intentionalityCheck._intentional;
    var _movement = M;

    var __cachedBounds;

    var __cachedInitial;

    if (_intentional[0] !== false && wasIntentional[0] === false) {
      __cachedInitial = valueFn(initial, this.state);
      __cachedBounds = valueFn(bounds, this.state);
      _initial[0] = __cachedInitial[0];
      _bounds[0] = __cachedBounds[0];
    }

    if (_intentional[1] !== false && wasIntentional[1] === false) {
      var _cachedInitial, _cachedBounds;

      __cachedInitial = (_cachedInitial = __cachedInitial) != null ? _cachedInitial : valueFn(initial, this.state);
      __cachedBounds = (_cachedBounds = __cachedBounds) != null ? _cachedBounds : valueFn(bounds, this.state);
      _initial[1] = __cachedInitial[1];
      _bounds[1] = __cachedBounds[1];
    }
    /**
     * The movement sent to the handler has 0 in its dimensions when intentionality is false.
     * It is calculated from the actual movement minus the threshold.
     */


    var movement = [_intentional[0] !== false ? M[0] - _intentional[0] : _initial[0], _intentional[1] !== false ? M[1] - _intentional[1] : _initial[1]];
    var offset = addV(movement, lastOffset);
    /**
     * Rubberband should be 0 when the gesture is no longer active, so that movement
     * and offset can return within their bounds.
     */

    var _rubberband = _active ? rubberband : [0, 0];

    movement = computeRubberband(_bounds, addV(movement, _initial), _rubberband);
    return _extends({}, intentionalityCheck, {
      intentional: _intentional[0] !== false || _intentional[1] !== false,
      _initial: _initial,
      _movement: _movement,
      movement: movement,
      values: values,
      offset: computeRubberband(_bounds, offset, _rubberband),
      delta: subV(movement, prevMovement)
    });
  } // Cleans the gesture. Can be overriden by gestures.
  ;

  _proto.clean = function clean() {
    this.clearTimeout();
  };

  _createClass(Recognizer, [{
    key: "config",
    get: function get() {
      return this.controller.config[this.stateKey];
    } // Is the gesture enabled

  }, {
    key: "enabled",
    get: function get() {
      return this.controller.config.enabled && this.config.enabled;
    } // Returns the controller state for a given gesture

  }, {
    key: "state",
    get: function get() {
      return this.controller.state[this.stateKey];
    } // Returns the gesture handler

  }, {
    key: "handler",
    get: function get() {
      return this.controller.handlers[this.stateKey];
    }
  }]);

  return Recognizer;
}(); //--------------------------------------------

function getIntentionalDisplacement(movement, threshold) {
  if (Math.abs(movement) >= threshold) {
    return sign(movement) * threshold;
  } else {
    return false;
  }
}

function computeRubberband(bounds, _ref, _ref2) {
  var Vx = _ref[0],
      Vy = _ref[1];
  var Rx = _ref2[0],
      Ry = _ref2[1];
  var _bounds$ = bounds[0],
      X1 = _bounds$[0],
      X2 = _bounds$[1],
      _bounds$2 = bounds[1],
      Y1 = _bounds$2[0],
      Y2 = _bounds$2[1];
  return [rubberbandIfOutOfBounds(Vx, X1, X2, Rx), rubberbandIfOutOfBounds(Vy, Y1, Y2, Ry)];
}
/**
 * Returns a generic, common payload for all gestures from an event.
 */


function getGenericPayload(_ref3, event, isStartEvent) {
  var state = _ref3.state,
      args = _ref3.args;
  var timeStamp = event.timeStamp,
      _lastEventType = event.type;
  var previous = state.values;
  var elapsedTime = isStartEvent ? 0 : timeStamp - state.startTime;
  return {
    _lastEventType: _lastEventType,
    event: event,
    timeStamp: timeStamp,
    elapsedTime: elapsedTime,
    args: args,
    previous: previous
  };
}
/**
 * Returns the reinitialized start state for the gesture.
 * Should be common to all gestures.
 */

function getStartGestureState(recognizer, values, event) {
  var offset = recognizer.state.offset;
  var startTime = event.timeStamp;
  return _extends({}, getInitialState()[recognizer.stateKey], {
    _active: true,
    values: values,
    initial: values,
    offset: offset,
    lastOffset: offset,
    startTime: startTime
  });
}

function partial(func, state) {
  return function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // @ts-ignore
    return func.call.apply(func, [this, _extends({}, state, {
      event: event
    })].concat(args));
  };
}
/**
 * The controller will keep track of the state for all gestures and also keep
 * track of timeouts, and window listeners.
 */


var Controller = function Controller(classes) {
  var _this = this;

  this.classes = classes;

  this.bind = function () {
    var bindings = {};

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    for (var _iterator = _createForOfIteratorHelperLoose(_this.classes), _step; !(_step = _iterator()).done;) {
      var RecognizerClass = _step.value;
      new RecognizerClass(_this, args).addBindings(bindings);
    } // we also add event bindings for native handlers


    for (var _i = 0, _Object$entries = Object.entries(_this.nativeRefs); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
          event = _Object$entries$_i[0],
          handler = _Object$entries$_i[1];
      addBindings(bindings, event, partial(handler, _extends({}, _this.state.shared, {
        args: args
      })));
    }

    if (_this.config.domTarget) {
      // If config.domTarget is set we add event listeners to it and return the clean function.
      return updateDomListeners(_this, bindings);
    } else {
      // If not, we return an object that contains gesture handlers mapped to react handler event keys.
      return getPropsListener(_this, bindings);
    }
  };

  this.effect = function () {
    if (_this.config.domTarget) _this.bind();
    return _this.clean;
  };
  /**
   * Function ran on component unmount: cleans timeouts and removes dom listeners set by the bind function.
   */


  this.clean = function () {
    var domTarget = getDomTargetFromConfig(_this.config);
    var eventOptions = _this.config.eventOptions;
    if (domTarget) removeListeners(domTarget, takeAll(_this.domListeners), eventOptions);
    Object.values(_this.timeouts).forEach(clearTimeout);
    clearAllWindowListeners(_this);
  };

  this.state = getInitialState();
  this.timeouts = {};
  this.domListeners = [];
  this.windowListeners = {};
};
function clearAllWindowListeners(controller) {
  var _controller$config = controller.config,
      el = _controller$config.window,
      eventOptions = _controller$config.eventOptions,
      windowListeners = controller.windowListeners;
  if (!el) return;

  for (var stateKey in windowListeners) {
    var handlers = windowListeners[stateKey];
    removeListeners(el, handlers, eventOptions);
  }

  controller.windowListeners = {};
}
function clearWindowListeners(_ref, stateKey) {
  var config = _ref.config,
      windowListeners = _ref.windowListeners;
  if (!config.window) return;
  removeListeners(config.window, windowListeners[stateKey], config.eventOptions);
  delete windowListeners[stateKey];
}
function updateWindowListeners(_ref2, stateKey, listeners) {
  var config = _ref2.config,
      windowListeners = _ref2.windowListeners;

  if (listeners === void 0) {
    listeners = [];
  }

  if (!config.window) return;
  removeListeners(config.window, windowListeners[stateKey], config.eventOptions);
  addListeners(config.window, windowListeners[stateKey] = listeners, config.eventOptions);
}

function updateDomListeners(_ref3, bindings) {
  var config = _ref3.config,
      domListeners = _ref3.domListeners;
  var domTarget = getDomTargetFromConfig(config);
  if (!domTarget) throw new Error('domTarget must be defined');
  var eventOptions = config.eventOptions;
  removeListeners(domTarget, takeAll(domListeners), eventOptions);

  for (var _i2 = 0, _Object$entries2 = Object.entries(bindings); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _Object$entries2[_i2],
        key = _Object$entries2$_i[0],
        fns = _Object$entries2$_i[1];
    var name = key.slice(2).toLowerCase();
    domListeners.push([name, chainFns.apply(void 0, fns)]);
  }

  addListeners(domTarget, domListeners, eventOptions);
}

function getPropsListener(_ref4, bindings) {
  var config = _ref4.config;
  var props = {};
  var captureString = config.eventOptions.capture ? 'Capture' : '';

  for (var _i3 = 0, _Object$entries3 = Object.entries(bindings); _i3 < _Object$entries3.length; _i3++) {
    var _Object$entries3$_i = _Object$entries3[_i3],
        event = _Object$entries3$_i[0],
        fns = _Object$entries3$_i[1];
    var fnsArray = Array.isArray(fns) ? fns : [fns];
    var key = event + captureString;
    props[key] = chainFns.apply(void 0, fnsArray);
  }

  return props;
}

function takeAll(array) {
  if (array === void 0) {
    array = [];
  }

  return array.splice(0, array.length);
}

function getDomTargetFromConfig(_ref5) {
  var domTarget = _ref5.domTarget;
  return domTarget && 'current' in domTarget ? domTarget.current : domTarget;
}
/**
 * bindings is an object which keys match ReactEventHandlerKeys.
 * Since a recognizer might want to bind a handler function to an event key already used by a previously
 * added recognizer, we need to make sure that each event key is an array of all the functions mapped for
 * that key.
 */


function addBindings(bindings, name, fn) {
  if (!bindings[name]) bindings[name] = [];
  bindings[name].push(fn);
}

function addListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }

  if (options === void 0) {
    options = {};
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(listeners), _step2; !(_step2 = _iterator2()).done;) {
    var _step2$value = _step2.value,
        eventName = _step2$value[0],
        eventHandler = _step2$value[1];
    el.addEventListener(eventName, eventHandler, options);
  }
}

function removeListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }

  if (options === void 0) {
    options = {};
  }

  for (var _iterator3 = _createForOfIteratorHelperLoose(listeners), _step3; !(_step3 = _iterator3()).done;) {
    var _step3$value = _step3.value,
        eventName = _step3$value[0],
        eventHandler = _step3$value[1];
    el.removeEventListener(eventName, eventHandler, options);
  }
}

/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Utility hook called by all gesture hooks and that will be responsible for the internals.
 *
 * @param handlers
 * @param classes
 * @param config
 * @param nativeHandlers - native handlers such as onClick, onMouseDown, etc.
 */

function useRecognizers(handlers, config, nativeHandlers) {
  if (nativeHandlers === void 0) {
    nativeHandlers = {};
  }

  var classes = resolveClasses(handlers);
  var controller = react_default.a.useMemo(function () {
    return new Controller(classes);
  }, []);
  controller.config = config;
  controller.handlers = handlers;
  controller.nativeRefs = nativeHandlers;
  react_default.a.useEffect(controller.effect, []); // @ts-ignore

  if (controller.config.domTarget) return deprecationNoticeForDomTarget; // @ts-ignore

  return controller.bind;
}

function deprecationNoticeForDomTarget() {
  if (false) {}
}

function resolveClasses(internalHandlers) {
  var classes = new Set();
  if (internalHandlers.drag) classes.add(RecognizersMap.get('drag'));
  if (internalHandlers.wheel) classes.add(RecognizersMap.get('wheel'));
  if (internalHandlers.scroll) classes.add(RecognizersMap.get('scroll'));
  if (internalHandlers.move) classes.add(RecognizersMap.get('move'));
  if (internalHandlers.pinch) classes.add(RecognizersMap.get('pinch'));
  if (internalHandlers.hover) classes.add(RecognizersMap.get('hover'));
  return classes;
}

/**
 * @private
 * Abstract class for coordinates-based gesture recongizers
 */

var CoordinatesRecognizer = /*#__PURE__*/function (_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer, _Recognizer);

  function CoordinatesRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = CoordinatesRecognizer.prototype;

  /**
   * Returns the real movement (without taking intentionality into acount)
   */
  _proto.getInternalMovement = function getInternalMovement(values, state) {
    return subV(values, state.initial);
  }
  /**
   * In coordinates-based gesture, this function will detect the first intentional axis,
   * lock the gesture axis if lockDirection is specified in the config, block the gesture
   * if the first intentional axis doesn't match the specified axis in config.
   */
  ;

  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    if (_intentional[0] === false && _intentional[1] === false) {
      return {
        _intentional: _intentional,
        axis: this.state.axis
      };
    }

    var _movement$map = _movement.map(Math.abs),
        absX = _movement$map[0],
        absY = _movement$map[1];

    var axis = this.state.axis || (absX > absY ? 'x' : absX < absY ? 'y' : undefined);
    if (!this.config.axis && !this.config.lockDirection) return {
      _intentional: _intentional,
      _blocked: false,
      axis: axis
    };
    if (!axis) return {
      _intentional: [false, false],
      _blocked: false,
      axis: axis
    };
    if (!!this.config.axis && axis !== this.config.axis) return {
      _intentional: _intentional,
      _blocked: true,
      axis: axis
    };
    _intentional[axis === 'x' ? 1 : 0] = false;
    return {
      _intentional: _intentional,
      _blocked: false,
      axis: axis
    };
  };

  _proto.getKinematics = function getKinematics(values, event) {
    var state = this.getMovement(values);

    if (!state._blocked) {
      var dt = event.timeStamp - this.state.timeStamp;
      Object.assign(state, calculateAllKinematics(state.movement, state.delta, dt));
    }

    return state;
  };

  _proto.mapStateValues = function mapStateValues(state) {
    return {
      xy: state.values,
      vxvy: state.velocities
    };
  };

  return CoordinatesRecognizer;
}(Recognizer);

var WEBKIT_DISTANCE_SCALE_FACTOR = 260;
/**
 * Whether the browser supports GestureEvent (ie Safari)
 * @returns true if the browser supports gesture event
 */

function supportsGestureEvents() {
  try {
    // TODO [TS] possibly find GestureEvent definitions?
    // @ts-ignore: no type definitions for webkit GestureEvents
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}
function supportsTouchEvents() {
  return typeof window !== 'undefined' && window.ontouchstart === null;
}

function getTouchEvents(event) {
  if ('touches' in event) {
    var targetTouches = event.targetTouches,
        changedTouches = event.changedTouches;
    return targetTouches.length > 0 ? targetTouches : changedTouches;
  }

  return null;
}

function getGenericEventData(event) {
  var buttons = 'buttons' in event ? event.buttons : 0;
  var touchEvents = getTouchEvents(event);
  var touches = touchEvents && touchEvents.length || 0;
  var down = touches > 0 || buttons > 0;
  var shiftKey = event.shiftKey,
      altKey = event.altKey,
      metaKey = event.metaKey,
      ctrlKey = event.ctrlKey; // TODO check if this might create some overrides?

  return {
    touches: touches,
    down: down,
    buttons: buttons,
    shiftKey: shiftKey,
    altKey: altKey,
    metaKey: metaKey,
    ctrlKey: ctrlKey
  };
}
/**
 * Gets pointer event values.
 * @param event
 * @returns pointer event values
 */

function getPointerEventValues(event) {
  var touchEvents = getTouchEvents(event);

  var _ref = touchEvents ? touchEvents[0] : event,
      clientX = _ref.clientX,
      clientY = _ref.clientY;

  return [clientX, clientY];
}
/**
 * Gets scroll event values
 * @param event
 * @returns scroll event values
 */

function getScrollEventValues(event) {
  // If the currentTarget is the window then we return the scrollX/Y position.
  // If not (ie the currentTarget is a DOM element), then we return scrollLeft/Top
  var _event$currentTarget = event.currentTarget,
      scrollX = _event$currentTarget.scrollX,
      scrollY = _event$currentTarget.scrollY,
      scrollLeft = _event$currentTarget.scrollLeft,
      scrollTop = _event$currentTarget.scrollTop;
  return [scrollX || scrollLeft || 0, scrollY || scrollTop || 0];
}
/**
 * Gets wheel event values.
 * @param event
 * @returns wheel event values
 */

function getWheelEventValues(event) {
  var deltaX = event.deltaX,
      deltaY = event.deltaY; //TODO implement polyfill ?
  // https://developer.mozilla.org/en-US/docs/Web/Events/wheel#Polyfill

  return [deltaX, deltaY];
}
/**
 * Gets webkit gesture event values.
 * @param event
 * @returns webkit gesture event values
 */

function getWebkitGestureEventValues(event) {
  return [event.scale * WEBKIT_DISTANCE_SCALE_FACTOR, event.rotation];
}
/**
 * Gets two touches event data
 * @param event
 * @returns two touches event data
 */

function getTwoTouchesEventData(event) {
  var _e$rotation;

  var targetTouches = event.targetTouches;
  var A = targetTouches[0],
      B = targetTouches[1];
  var dx = B.clientX - A.clientX;
  var dy = B.clientY - A.clientY;
  var cx = (B.clientX + A.clientX) / 2;
  var cy = (B.clientY + A.clientY) / 2;
  var e = 'nativeEvent' in event ? event.nativeEvent : event;
  var distance = Math.hypot(dx, dy);
  var angle = (_e$rotation = e.rotation) != null ? _e$rotation : -(Math.atan2(dx, dy) * 180) / Math.PI;
  var values = [distance, angle];
  var origin = [cx, cy];
  return {
    values: values,
    origin: origin
  };
}

var TAP_DISTANCE_THRESHOLD = 3;
var SWIPE_MAX_ELAPSED_TIME = 220;
var DragRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer, _CoordinatesRecognize);

  function DragRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'dragging';
    _this.stateKey = 'drag';
    /**
     * TODO add back when setPointerCapture is widely wupported
     * https://caniuse.com/#search=setPointerCapture
     * private setPointers = (event: UseGestureEvent<PointerEvent>) => {
     *   const { currentTarget, pointerId } = event
     *   if (currentTarget) currentTarget.setPointerCapture(pointerId)
     *   this.updateGestureState({ currentTarget, pointerId })
     * }
            * private removePointers = () => {
     *   const { currentTarget, pointerId } = this.state
     *   if (currentTarget && pointerId) currentTarget.releasePointerCapture(pointerId)
     * }
     */

    _this.onDragStart = function (event) {
      if (!_this.enabled || _this.state._active) return;
      /**
       * TODO add back when setPointerCapture is widely supported
       * this.setPointers(event as PointerEvent)
       */

      updateWindowListeners(_this.controller, _this.stateKey, [['pointermove', _this.onDragChange], ['pointerup', _this.onDragEnd], ['pointercancel', _this.onDragEnd]]); // We set the state pointerId to the event.pointerId so we can make sure
      // that we lock the drag to the event initiating the gesture

      _this.updateGestureState({
        _pointerId: event.pointerId
      });

      if (_this.config.delay > 0) {
        _this.state._delayedEvent = true; // If it's a React SyntheticEvent we need to persist it so that we can use it async

        if ('persist' in event && typeof event.persist === 'function') event.persist();

        _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), _this.config.delay, event);
      } else {
        _this.startDrag(event);
      }
    };

    _this.onDragChange = function (event) {
      // If the gesture was canceled don't respond to the event.
      if (_this.state.canceled) return; // If the event pointerId doesn't match the initiating pointerId
      // don't respond to the event.

      if (event.pointerId !== _this.state._pointerId) return; // If the gesture isn't active then respond to the event only if
      // it's been delayed via the `delay` option, in which case start
      // the gesture immediately.

      if (!_this.state._active) {
        if (_this.state._delayedEvent) {
          _this.clearTimeout();

          _this.startDrag(event);
        }

        return;
      }

      var genericEventData = getGenericEventData(event); // If the event doesn't have any button / touches left we should cancel
      // the gesture. This may happen if the drag release happens outside the browser
      // window.

      if (!genericEventData.down) {
        _this.onDragEnd(event);

        return;
      }

      _this.updateSharedState(genericEventData);

      var values = getPointerEventValues(event);

      var kinematics = _this.getKinematics(values, event);

      var genericPayload = getGenericPayload(_assertThisInitialized(_this), event); // This verifies if the drag can be assimilated to a tap by checking
      // if the real distance of the drag (ie not accounting for the threshold) is
      // greater than the TAP_DISTANCE_THRESHOLD.

      var _isTap = _this.state._isTap;
      var realDistance = calculateDistance(kinematics._movement);
      if (_isTap && realDistance >= TAP_DISTANCE_THRESHOLD) _isTap = false;

      _this.updateGestureState(_extends({}, genericPayload, kinematics, {
        _isTap: _isTap
      }));

      _this.fireGestureHandler();
    };

    _this.onDragEnd = function (event) {
      // If the event pointerId doesn't match the initiating pointerId
      // don't respond to the event.
      if (event.pointerId !== _this.state._pointerId) return;
      _this.state._active = false;

      _this.updateSharedState({
        down: false,
        buttons: 0,
        touches: 0
      });

      var tap = _this.state._isTap;
      var _this$state$velocitie = _this.state.velocities,
          vx = _this$state$velocitie[0],
          vy = _this$state$velocitie[1];
      var _this$state$movement = _this.state.movement,
          mx = _this$state$movement[0],
          my = _this$state$movement[1];
      var _this$state$_intentio = _this.state._intentional,
          ix = _this$state$_intentio[0],
          iy = _this$state$_intentio[1];
      var _this$config$swipeVel = _this.config.swipeVelocity,
          svx = _this$config$swipeVel[0],
          svy = _this$config$swipeVel[1];
      var _this$config$swipeDis = _this.config.swipeDistance,
          sx = _this$config$swipeDis[0],
          sy = _this$config$swipeDis[1];

      var endState = _extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values));

      var swipe = [0, 0];

      if (endState.elapsedTime < SWIPE_MAX_ELAPSED_TIME) {
        if (ix !== false && Math.abs(vx) > svx && Math.abs(mx) > sx) swipe[0] = sign(vx);
        if (iy !== false && Math.abs(vy) > svy && Math.abs(my) > sy) swipe[1] = sign(vy);
      }

      _this.updateGestureState(_extends({}, endState, {
        tap: tap,
        swipe: swipe
      }));

      _this.fireGestureHandler(tap === true);
    };

    _this.clean = function () {
      _CoordinatesRecognize.prototype.clean.call(_assertThisInitialized(_this));

      _this.state._delayedEvent = false; // can't remember if this is useful?

      clearWindowListeners(_this.controller, _this.stateKey); // TODO add back when setPointerCapture is widely wupported
      // this.removePointers()
    };

    _this.onCancel = function () {
      if (_this.state.canceled) return;

      _this.updateGestureState({
        canceled: true
      });

      _this.state._active = false;

      _this.updateSharedState({
        down: false,
        buttons: 0,
        touches: 0
      });

      requestAnimationFrame(function () {
        return _this.fireGestureHandler();
      });
    };

    _this.onClick = function (event) {
      if (!_this.state._isTap) event.stopPropagation();
    };

    return _this;
  }

  var _proto = DragRecognizer.prototype;

  _proto.startDrag = function startDrag(event) {
    var values = getPointerEventValues(event);
    this.updateSharedState(getGenericEventData(event));
    this.updateGestureState(_extends({}, getStartGestureState(this, values, event), getGenericPayload(this, event, true), {
      _pointerId: event.pointerId,
      cancel: this.onCancel
    }));
    this.updateGestureState(this.getMovement(values));
    this.fireGestureHandler();
  };

  _proto.addBindings = function addBindings$1(bindings) {
    addBindings(bindings, 'onPointerDown', this.onDragStart);

    if (this.config.filterTaps) {
      var handler = this.controller.config.eventOptions.capture ? 'onClick' : 'onClickCapture';

      addBindings(bindings, handler, this.onClick);
    } // TODO add back when setPointerCapture is widely wupported
    // addBindings(bindings, 'onPointerMove', this.onDragChange)
    // addBindings(bindings, 'onPointerUp', this.onDragEnd)
    // addBindings(bindings, 'onPointerCancel', this.onDragEnd)

  };

  return DragRecognizer;
}(CoordinatesRecognizer);

/**
 * Inlined from https://github.com/alexreardon/memoize-one
 */
function memoizeOne(resultFn, isEqual) {
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

/**
 * Taken from https://github.com/FormidableLabs/react-fast-compare
 *
 * Dropped comments and ArrayBuffer handling
 */
function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    var it;

    if (typeof Map === 'function' && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      it = a.entries();

      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      }

      return true;
    }

    if (typeof Set === 'function' && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    if (typeof Element !== 'undefined' && a instanceof Element) return false;

    for (i = length; i-- !== 0;) {
      if (keys[i] === '_owner' && a.$$typeof) continue;
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }

    return true;
  } // true if both NaN, false otherwise — NaN !== NaN → true
  // eslint-disable-next-line no-self-compare


  return a !== a && b !== b;
}

function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }

    throw error;
  }
}

/**
 * Drag hook.
 *
 * @param handler - the function fired every time the drag gesture updates
 * @param [config={}] - the config object including generic options and drag options
 */

function useDrag(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('drag', DragRecognizer);
  var buildDragConfig = Object(react["useRef"])();

  if (!buildDragConfig.current) {
    buildDragConfig.current = memoizeOne(_buildDragConfig, isEqual);
  }

  return useRecognizers({
    drag: handler
  }, buildDragConfig.current(config));
}

/**
 * @private
 * Abstract class for distance/angle-based gesture recongizers
 */

var DistanceAngleRecognizer = /*#__PURE__*/function (_Recognizer) {
  _inheritsLoose(DistanceAngleRecognizer, _Recognizer);

  function DistanceAngleRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = DistanceAngleRecognizer.prototype;

  _proto.getInternalMovement = function getInternalMovement(values, state) {
    var prev_a = state.values[1]; // not be defined if ctrl+wheel is used for zoom only

    var d = values[0],
        _values$ = values[1],
        a = _values$ === void 0 ? prev_a : _values$;
    var delta_a = a - prev_a;
    var next_turns = state.turns;
    if (Math.abs(delta_a) > 270) next_turns += sign(delta_a);
    return subV([d, a - 360 * next_turns], state.initial);
  };

  _proto.getKinematics = function getKinematics(values, event) {
    var state = this.getMovement(values);
    var turns = (values[1] - state.movement[1] - this.state.initial[1]) / 360;
    var dt = event.timeStamp - this.state.timeStamp;
    var kinematics = calculateAllKinematics(state.movement, state.delta, dt);
    return _extends({
      turns: turns
    }, state, kinematics);
  };

  _proto.mapStateValues = function mapStateValues(state) {
    return {
      da: state.values,
      vdva: state.velocities
    };
  };

  return DistanceAngleRecognizer;
}(Recognizer);

var PinchRecognizer = /*#__PURE__*/function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchRecognizer, _DistanceAngleRecogni);

  function PinchRecognizer() {
    var _this;

    _this = _DistanceAngleRecogni.apply(this, arguments) || this;
    _this.ingKey = 'pinching';
    _this.stateKey = 'pinch';

    _this.pinchShouldStart = function (event) {
      var _getGenericEventData = getGenericEventData(event),
          touches = _getGenericEventData.touches;

      return _this.enabled && touches === 2;
    };

    _this.onPinchStart = function (event) {
      if (!_this.pinchShouldStart(event)) return;

      var _getTwoTouchesEventDa = getTwoTouchesEventData(event),
          values = _getTwoTouchesEventDa.values,
          origin = _getTwoTouchesEventDa.origin;

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        cancel: _this.onCancel,
        origin: origin
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onPinchChange = function (event) {
      var _this$state = _this.state,
          canceled = _this$state.canceled,
          _active = _this$state._active;
      if (canceled || !_active) return;
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var _getTwoTouchesEventDa2 = getTwoTouchesEventData(event),
          values = _getTwoTouchesEventDa2.values,
          origin = _getTwoTouchesEventDa2.origin; // @ts-ignore


      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), kinematics, {
        origin: origin
      }));

      _this.fireGestureHandler();
    };

    _this.onPinchEnd = function (event) {
      if (!_this.state.active) return;
      _this.state._active = false;

      _this.updateSharedState({
        down: false,
        touches: 0
      });

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values)));

      _this.fireGestureHandler();
    };

    _this.onCancel = function () {
      if (_this.state.canceled) return;
      _this.state._active = false;

      _this.updateGestureState({
        canceled: true
      });

      _this.updateSharedState({
        down: false,
        touches: 0
      });

      requestAnimationFrame(function () {
        return _this.fireGestureHandler();
      });
    };
    /**
     * PINCH WITH WEBKIT GESTURES
     */


    _this.onGestureStart = function (event) {
      if (!_this.enabled) return;
      event.preventDefault(); // useless

      var values = getWebkitGestureEventValues(event);

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        origin: [event.clientX, event.clientY],
        cancel: _this.onCancel
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onGestureChange = function (event) {
      var _this$state2 = _this.state,
          canceled = _this$state2.canceled,
          _active = _this$state2._active;
      if (canceled || !_active) return;
      event.preventDefault();
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var values = getWebkitGestureEventValues(event);

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), kinematics, {
        origin: [event.clientX, event.clientY]
      }));

      _this.fireGestureHandler();
    };

    _this.onGestureEnd = function (event) {
      event.preventDefault();
      if (!_this.state.active) return;
      _this.state._active = false;

      _this.updateSharedState({
        down: false,
        touches: 0
      });

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values), {
        origin: [event.clientX, event.clientY]
      }));

      _this.fireGestureHandler();
    };
    /**
     * PINCH WITH WHEEL
     */


    _this.wheelShouldRun = function (event) {
      return _this.enabled && event.ctrlKey;
    };

    _this.getWheelValuesFromEvent = function (event) {
      var _getWheelEventValues = getWheelEventValues(event),
          delta_d = _getWheelEventValues[1];

      var _this$state$values = _this.state.values,
          prev_d = _this$state$values[0],
          prev_a = _this$state$values[1];
      var d = prev_d - delta_d;
      var a = prev_a !== void 0 ? prev_a : 0;
      return {
        values: [d, a],
        origin: [event.clientX, event.clientY],
        delta: [0, delta_d]
      };
    };

    _this.onWheel = function (event) {
      if (!_this.wheelShouldRun(event)) return;

      _this.setTimeout(_this.onWheelEnd);

      if (!_this.state._active) _this.onWheelStart(event);else _this.onWheelChange(event);
    };

    _this.onWheelStart = function (event) {
      var _this$getWheelValuesF = _this.getWheelValuesFromEvent(event),
          values = _this$getWheelValuesF.values,
          delta = _this$getWheelValuesF.delta,
          origin = _this$getWheelValuesF.origin;

      if (event.cancelable) event.preventDefault();else if (false) {}

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        initial: _this.state.values,
        offset: values,
        delta: delta,
        origin: origin
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onWheelChange = function (event) {
      _this.updateSharedState(getGenericEventData(event));

      var _this$getWheelValuesF2 = _this.getWheelValuesFromEvent(event),
          values = _this$getWheelValuesF2.values,
          origin = _this$getWheelValuesF2.origin,
          delta = _this$getWheelValuesF2.delta;

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event), {
        origin: origin,
        delta: delta
      }));

      _this.fireGestureHandler();
    };

    _this.onWheelEnd = function () {
      _this.state._active = false;

      _this.updateGestureState(_this.getMovement(_this.state.values));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = PinchRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    // Only try to use gesture events when they are supported and domTarget is set
    // as React doesn't support gesture handlers.
    if (this.controller.config.domTarget && !supportsTouchEvents() && supportsGestureEvents()) {
      addBindings(bindings, 'onGestureStart', this.onGestureStart);

      addBindings(bindings, 'onGestureChange', this.onGestureChange);

      addBindings(bindings, 'onGestureEnd', this.onGestureEnd);
    } else {
      addBindings(bindings, 'onTouchStart', this.onPinchStart);

      addBindings(bindings, 'onTouchMove', this.onPinchChange);

      addBindings(bindings, 'onTouchEnd', this.onPinchEnd);

      addBindings(bindings, 'onTouchCancel', this.onPinchEnd);

      addBindings(bindings, 'onWheel', this.onWheel);
    }
  };

  return PinchRecognizer;
}(DistanceAngleRecognizer);

/**
 * Pinch hook.
 *
 * @param handler - the function fired every time the pinch gesture updates
 * @param [config={}] - the config object including generic options and pinch options
 */

function usePinch(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('pinch', PinchRecognizer);
  var buildPinchConfig = Object(react["useRef"])();

  if (!buildPinchConfig.current) {
    buildPinchConfig.current = memoizeOne(_buildPinchConfig, isEqual);
  }

  return useRecognizers({
    pinch: handler
  }, buildPinchConfig.current(config));
}

var WheelRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(WheelRecognizer, _CoordinatesRecognize);

  function WheelRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'wheeling';
    _this.stateKey = 'wheel';
    _this.debounced = true;

    _this.handleEvent = function (event) {
      if (event.ctrlKey && 'pinch' in _this.controller.handlers) return;
      if (!_this.enabled) return;

      _this.setTimeout(_this.onEnd);

      _this.updateSharedState(getGenericEventData(event));

      var values = addV(getWheelEventValues(event), _this.state.values);

      if (!_this.state._active) {
        _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
          initial: _this.state.values
        }));

        var movement = _this.getMovement(values);

        var geometry = calculateAllGeometry(movement.delta);

        _this.updateGestureState(movement);

        _this.updateGestureState(geometry);
      } else {
        _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));
      }

      _this.fireGestureHandler();
    };

    _this.onEnd = function () {
      var movement = _this.getMovement(_this.state.values);

      _this.updateGestureState(movement);

      _this.updateGestureState({
        _active: false,
        velocities: [0, 0],
        velocity: 0
      });

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = WheelRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    addBindings(bindings, 'onWheel', this.handleEvent);
  };

  return WheelRecognizer;
}(CoordinatesRecognizer);

/**
 * Wheel hook.
 *
 * @param handler - the function fired every time the wheel gesture updates
 * @param the config object including generic options and wheel options
 */

function useWheel(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('wheel', WheelRecognizer);
  var buildWheelConfig = Object(react["useRef"])();

  if (!buildWheelConfig.current) {
    buildWheelConfig.current = memoizeOne(_buildWheelConfig, isEqual);
  }

  return useRecognizers({
    wheel: handler
  }, buildWheelConfig.current(config));
}

var MoveRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(MoveRecognizer, _CoordinatesRecognize);

  function MoveRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'moving';
    _this.stateKey = 'move';
    _this.debounced = true;

    _this.onMove = function (event) {
      if (!_this.enabled) return;

      _this.setTimeout(_this.onMoveEnd);

      if (!_this.state._active) _this.onMoveStart(event);else _this.onMoveChange(event);
    };

    _this.onMoveStart = function (event) {
      _this.updateSharedState(getGenericEventData(event));

      var values = getPointerEventValues(event);

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true)));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onMoveChange = function (event) {
      _this.updateSharedState(getGenericEventData(event));

      var values = getPointerEventValues(event);

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));

      _this.fireGestureHandler();
    };

    _this.onMoveEnd = function () {
      var values = _this.state.values;

      _this.updateGestureState(_this.getMovement(values));

      _this.updateGestureState({
        velocities: [0, 0],
        velocity: 0,
        _active: false
      });

      _this.fireGestureHandler();
    };

    _this.onPointerEnter = function (event) {
      _this.controller.state.shared.hovering = true;
      if (!_this.controller.config.enabled) return;

      if (_this.controller.config.hover.enabled) {
        var values = getPointerEventValues(event);

        var state = _extends({}, _this.controller.state.shared, _this.state, getGenericPayload(_assertThisInitialized(_this), event, true), {
          values: values,
          active: true,
          hovering: true
        });

        _this.controller.handlers.hover(_extends({}, state, _this.mapStateValues(state)));
      }

      if ('move' in _this.controller.handlers) _this.onMoveStart(event);
    };

    _this.onPointerLeave = function (event) {
      _this.controller.state.shared.hovering = false;
      if ('move' in _this.controller.handlers) _this.onMoveEnd();
      if (!_this.controller.config.hover.enabled) return;
      var values = getPointerEventValues(event);

      var state = _extends({}, _this.controller.state.shared, _this.state, getGenericPayload(_assertThisInitialized(_this), event), {
        values: values,
        active: false
      });

      _this.controller.handlers.hover(_extends({}, state, _this.mapStateValues(state)));
    };

    return _this;
  }

  var _proto = MoveRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    if ('move' in this.controller.handlers) {
      addBindings(bindings, 'onPointerMove', this.onMove);
    }

    if ('hover' in this.controller.handlers) {
      addBindings(bindings, 'onPointerEnter', this.onPointerEnter);

      addBindings(bindings, 'onPointerLeave', this.onPointerLeave);
    }
  };

  return MoveRecognizer;
}(CoordinatesRecognizer);

/**
 * Move hook.
 *
 * @param handler - the function fired every time the move gesture updates
 * @param [config={}] - the config object including generic options and move options
 */

function useMove(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('move', MoveRecognizer);
  var buildMoveConfig = Object(react["useRef"])();

  if (!buildMoveConfig.current) {
    buildMoveConfig.current = memoizeOne(_buildMoveConfig, isEqual);
  }

  return useRecognizers({
    move: handler
  }, buildMoveConfig.current(config));
}

/**
 * Hover hook.
 *
 * @param handler - the function fired every time the hover gesture updates
 * @param [config={}] - the config object including generic options and hover options
 */

function useHover(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('hover', MoveRecognizer);
  var buildHoverConfig = Object(react["useRef"])();

  if (!buildHoverConfig.current) {
    buildHoverConfig.current = memoizeOne(_buildHoverConfig, isEqual);
  }

  return useRecognizers({
    hover: handler
  }, buildHoverConfig.current(config));
}

var ScrollRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(ScrollRecognizer, _CoordinatesRecognize);

  function ScrollRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'scrolling';
    _this.stateKey = 'scroll';
    _this.debounced = true;

    _this.handleEvent = function (event) {
      if (!_this.enabled) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onEnd);

      var values = getScrollEventValues(event);

      _this.updateSharedState(getGenericEventData(event));

      if (!_this.state._active) {
        _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
          initial: _this.state.values
        }));

        var movementDetection = _this.getMovement(values);

        var geometry = calculateAllGeometry(movementDetection.delta);

        _this.updateGestureState(movementDetection);

        _this.updateGestureState(geometry);
      } else {
        _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));
      }

      _this.fireGestureHandler();
    };

    _this.onEnd = function () {
      _this.state._active = false;

      _this.updateGestureState(_extends({}, _this.getMovement(_this.state.values), {
        velocities: [0, 0],
        velocity: 0
      }));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = ScrollRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    addBindings(bindings, 'onScroll', this.handleEvent);
  };

  return ScrollRecognizer;
}(CoordinatesRecognizer);

/**
 * Scroll hook.
 *
 * @param handler - the function fired every time the scroll gesture updates
 * @param [config={}] - the config object including generic options and scroll options
 */

function useScroll(handler, config) {
  if (config === void 0) {
    config = {};
  }

  RecognizersMap.set('scroll', ScrollRecognizer);
  var buildScrollConfig = Object(react["useRef"])();

  if (!buildScrollConfig.current) {
    buildScrollConfig.current = memoizeOne(_buildScrollConfig, isEqual);
  }

  return useRecognizers({
    scroll: handler
  }, buildScrollConfig.current(config));
}

var RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

function sortHandlers(handlers) {
  var _native = {};
  var handle = {};
  var actions = new Set();

  for (var key in handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch);
      handle[key] = handlers[key];
    } else {
      _native[key] = handlers[key];
    }
  }

  return [handle, _native, actions];
}
/**
 * @public
 *
 * The most complete gesture hook, allowing support for multiple gestures.
 *
 * @param {Handlers} handlers - an object with on[Gesture] keys containg gesture handlers
 * @param {UseGestureConfig} [config={}] - the full config object
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */


function useGesture(_handlers, config) {
  if (config === void 0) {
    config = {};
  }

  var _sortHandlers = sortHandlers(_handlers),
      handlers = _sortHandlers[0],
      nativeHandlers = _sortHandlers[1],
      actions = _sortHandlers[2];

  RecognizersMap.set('drag', DragRecognizer);
  RecognizersMap.set('hover', MoveRecognizer);
  RecognizersMap.set('move', MoveRecognizer);
  RecognizersMap.set('pinch', PinchRecognizer);
  RecognizersMap.set('scroll', ScrollRecognizer);
  RecognizersMap.set('wheel', WheelRecognizer);
  var mergedConfig = buildComplexConfig(config, actions);
  var internalHandlers = {};
  if (actions.has('onDrag')) internalHandlers.drag = includeStartEndHandlers(handlers, 'onDrag');
  if (actions.has('onWheel')) internalHandlers.wheel = includeStartEndHandlers(handlers, 'onWheel');
  if (actions.has('onScroll')) internalHandlers.scroll = includeStartEndHandlers(handlers, 'onScroll');
  if (actions.has('onMove')) internalHandlers.move = includeStartEndHandlers(handlers, 'onMove');
  if (actions.has('onPinch')) internalHandlers.pinch = includeStartEndHandlers(handlers, 'onPinch');
  if (actions.has('onHover')) internalHandlers.hover = handlers.onHover;
  return useRecognizers(internalHandlers, mergedConfig, nativeHandlers);
}

function includeStartEndHandlers(handlers, handlerKey) {
  var startKey = handlerKey + 'Start';
  var endKey = handlerKey + 'End';

  var fn = function fn(state) {
    var memo = undefined;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo;
  };

  return fn;
}


//# sourceMappingURL=react-use-gesture.esm.js.map

// EXTERNAL MODULE: ../node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(119);

// CONCATENATED MODULE: ../lib_core/dist/index.esm.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _assign=function __assign(){_assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return _assign.apply(this,arguments);};var BackgroundDefault=Object(observer["a" /* observer */])(function(_a){var diagramOffset=_a.diagramOffset,diagramZoom=_a.diagramZoom,settings=_a.settings;var finalSettings=settings!==null&&settings!==void 0?settings:defaultSettings$1;var backgroundImage=Object(react["useMemo"])(function(){return finalSettings.imageGenerator?finalSettings.imageGenerator(100*diagramZoom,100*diagramZoom):undefined;},[finalSettings,finalSettings.imageGenerator,diagramZoom]);return/*#__PURE__*/react_default.a.createElement("div",{className:'react_fast_diagram_Background_Default',style:{backgroundColor:finalSettings.color,backgroundImage:backgroundImage,backgroundPosition:diagramOffset[0]+"px "+diagramOffset[1]+"px"}});});var gridImageGenerator=function gridImageGenerator(width,height,sizeMultiplicator,linesColor,linesOpacity){linesColor=linesColor.replace('#','%23');return"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+width*sizeMultiplicator+"' height='"+height*sizeMultiplicator+"' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='"+linesColor+"' fill-opacity='"+linesOpacity+"'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";};var createGridImageGenerator=function createGridImageGenerator(sizeMultiplicator,linesColor,linesOpacity){return function(width,height){return gridImageGenerator(width,height,sizeMultiplicator,linesColor,linesOpacity);};};var dotsImageGenerator=function dotsImageGenerator(width,height,sizeMultiplicator,dotsColor,dotsOpacity,dotsRadius){sizeMultiplicator=0.1*sizeMultiplicator;dotsColor=dotsColor.replace('#','%23');return"url(\"data:image/svg+xml,%3Csvg width='"+width*sizeMultiplicator+"' height='"+height*sizeMultiplicator+"' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='"+dotsColor+"' fill-opacity='"+dotsOpacity+"' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='"+dotsRadius+"'/%3E%3Ccircle cx='13' cy='13' r='"+dotsRadius+"'/%3E%3C/g%3E%3C/svg%3E\")";};var createDotsImageGenerator=function createDotsImageGenerator(sizeMultiplicator,dotsColor,dotsOpacity,dotsRadius){return function(width,height){return dotsImageGenerator(width,height,sizeMultiplicator,dotsColor,dotsOpacity,dotsRadius);};};var crossesImageGenerator=function crossesImageGenerator(width,height,sizeMultiplicator,color,opacity){color=color.replace('#','%23');return"url(\"data:image/svg+xml,%3Csvg width='"+width*sizeMultiplicator+"' height='"+height*sizeMultiplicator+"' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='"+color+"' fill-opacity='"+opacity+"'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";};var createCrossesImageGenerator=function createCrossesImageGenerator(sizeMultiplicator,color,opacity){return function(width,height){return crossesImageGenerator(width,height,sizeMultiplicator,color,opacity);};};var defaultSettings$1={imageGenerator:createCrossesImageGenerator(0.2,'#858585',0.1),color:'#ffffff'};var createDefaultBackground=function createDefaultBackground(settings){var finalSettings=_assign(_assign({},defaultSettings$1),settings?settings:{});return{component:BackgroundDefault,settings:finalSettings};};var index_esm_useNotifyRef=function useNotifyRef(init){var _a=Object(react["useState"])(0);_a[0];var forceUpdate=_a[1];var ref=Object(react["useState"])(function(){return{value:init,facade:{get current(){return ref.value;},set current(value){var last=ref.value;if(last!==value){ref.value=value;forceUpdate(function(i){return i+1;});}}}};})[0];return ref.facade;};function clampValue(value,interval){return Math.min(Math.max(value,interval[0]),interval[1]);}function deepCopy(value){return JSON.parse(JSON.stringify(value));}function isPoint(value){return Array.isArray(value)&&value.length===2&&value.every(function(v){return Number.isFinite(v);});}var distanceBetweenPoints=function distanceBetweenPoints(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2));};var roundPoint=function roundPoint(point){return[Math.round(point[0]),Math.round(point[1])];};var addPoints=function addPoints(){var points=[];for(var _i=0;_i<arguments.length;_i++){points[_i]=arguments[_i];}return points.reduce(function(prev,curr){return curr?[prev[0]+curr[0],prev[1]+curr[1]]:prev;});};var subtractPoints=function subtractPoints(){var points=[];for(var _i=0;_i<arguments.length;_i++){points[_i]=arguments[_i];}return points.reduce(function(prev,curr){return curr?[prev[0]-curr[0],prev[1]-curr[1]]:prev;});};var multiplyPoint=function multiplyPoint(a,m){return[a[0]*m,a[1]*m];};var arePointsEqual=function arePointsEqual(a,b){return a===b||a&&b&&a[0]===b[0]&&a[1]===b[1];};var LinkPointEndpointState$1=/** @class */function(){function LinkPointEndpointState(pos){var _this=this;this.translateBy=function(pointToTranslateBy){_this._point=addPoints(_this._point,pointToTranslateBy);};this._point=pos;Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(LinkPointEndpointState.prototype,"point",{get:function get(){return this._point;},enumerable:false,configurable:true});return LinkPointEndpointState;}();var index_esm_LinkPortEndpointState=/** @class */function(){function LinkPortEndpointState(nodeId,portId,rootStore){var _this=this;this.export=function(){return deepCopy({nodeId:_this._nodeId,portId:_this._portId});};this._nodeId=nodeId;this._portId=portId;Object(mobx_esm["c" /* makeAutoObservable */])(this);this._rootStore=rootStore;}Object.defineProperty(LinkPortEndpointState.prototype,"nodeId",{get:function get(){return this._nodeId;},enumerable:false,configurable:true});Object.defineProperty(LinkPortEndpointState.prototype,"portId",{get:function get(){return this._portId;},enumerable:false,configurable:true});Object.defineProperty(LinkPortEndpointState.prototype,"node",{get:function get(){return this._rootStore.nodesStore.getNodeOrThrowException(this._nodeId);},enumerable:false,configurable:true});Object.defineProperty(LinkPortEndpointState.prototype,"port",{get:function get(){return this.node.getPort(this._portId);},enumerable:false,configurable:true});Object.defineProperty(LinkPortEndpointState.prototype,"point",{get:function get(){if(this.port&&this.port.offsetRelativeToNode&&this.port.realSize){return addPoints(this.node.position,addPoints(this.port.offsetRelativeToNode,multiplyPoint(this.port.realSize,0.5)));}return undefined;},enumerable:false,configurable:true});return LinkPortEndpointState;}();function linkPortEndpointsEquals(a,b){return a.nodeId===b.nodeId&&a.portId===b.portId;}var index_esm_VisualComponentState=/** @class */function(){function VisualComponentState(component){var _this=this;this._settings=null;this.import=function(newComponent){var _a;if('component'in newComponent){_this._component=newComponent.component;_this._settings=(_a=newComponent.settings)!==null&&_a!==void 0?_a:{};}else{_this._component=newComponent;_this._settings={};}};this.import(component);Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(VisualComponentState.prototype,"component",{get:function get(){return this._component;},enumerable:false,configurable:true});Object.defineProperty(VisualComponentState.prototype,"settings",{get:function get(){return this._settings;},enumerable:false,configurable:true});return VisualComponentState;}();var index_esm_VisualComponents=/** @class */function(){function VisualComponents(defaultComponents){var _this=this;this._defaultType=componentDefaultType;this.import=function(obj){_this.setDefaultType(obj===null||obj===void 0?void 0:obj.defaultType);_this._components=_assign(_assign({},_this._defaultComponents),_this._createComponentCollection(obj===null||obj===void 0?void 0:obj.components));};this.getComponent=function(type){var _a;var finalComponentType=type!==null&&type!==void 0?type:_this.defaultType;return(_a=_this._components[finalComponentType])!==null&&_a!==void 0?_a:_this._components[_this.defaultType];};this.setDefaultType=function(value){_this._defaultType=value!==null&&value!==void 0?value:componentDefaultType;};this._createComponentCollection=function(componentsObjects){var collection={};componentsObjects&&Object.entries(componentsObjects).forEach(function(_a){var key=_a[0],value=_a[1];collection[key]=new index_esm_VisualComponentState(value);});return collection;};this._defaultComponents=this._createComponentCollection(defaultComponents);this._components=_assign({},this._defaultComponents);Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(VisualComponents.prototype,"defaultType",{get:function get(){return this._defaultType;},enumerable:false,configurable:true});return VisualComponents;}();var componentDefaultType='default';function isNumber(value){return Number.isFinite(value);}function isObject(value){return value!=null&&typeof value=='object'&&!Array.isArray(value);}function isBoolean(value){return value!=null&&typeof value=='boolean';}var index_esm_LinkState=/** @class */function(){function LinkState(rootStore,id,state){var _this=this;this.import=function(state){_this._source=_this._createEndpointState(state.source);_this._target=_this._createEndpointState(state.target);_this.setComponentType(state.componentType);_this.setSegments(state.segments);_this.setExtra(state.extra);_this.setIsSelectionEnabled(state===null||state===void 0?void 0:state.isSelectionEnabled);};this._createEndpointState=function(endpoint){return new index_esm_LinkPortEndpointState(endpoint.nodeId,endpoint.portId,_this._rootStore);};this.export=function(){var _a;return _assign({source:_this.source.export(),target:_this.target.export()},deepCopy({id:_this._id,componentType:_this.componentType,segments:_this.segments,extra:_this.extra,isSelectionEnabled:(_a=_this._isSelectionEnabled)!==null&&_a!==void 0?_a:undefined}));};this.setComponentType=function(value){_this._componentType=value!==null&&value!==void 0?value:componentDefaultType;};this.setSegments=function(value){_this._segments=value!==null&&value!==void 0?value:[];};this.setExtra=function(value){_this._extra=value!==null&&value!==void 0?value:null;};this.setIsSelectionEnabled=function(value){_this._isSelectionEnabled=isBoolean(value)?value:null;};this._rootStore=rootStore;this._id=id;this._selected=false;this._hovered=false;this.import(state);Object(mobx_esm["c" /* makeAutoObservable */])(this,{// @ts-ignore
_rootStore:false});}Object.defineProperty(LinkState.prototype,"id",{get:function get(){return this._id;},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"componentType",{get:function get(){return this._componentType;},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"segments",{get:function get(){return this._segments;},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"path",{get:function get(){return createLinkPath(this._rootStore,this.source,this.target);},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"componentDefinition",{get:function get(){var visualComponents=this._rootStore.linksSettings.visualComponents;return visualComponents.getComponent(this.componentType);},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"selected",{get:function get(){return this._selected;},set:function set(value){this._selected=value;},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"hovered",{get:function get(){return this._hovered;},set:function set(value){this._hovered=value;},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"extra",{get:function get(){return this._extra;},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"source",{get:function get(){return this._source;},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"target",{get:function get(){return this._target;},enumerable:false,configurable:true});Object.defineProperty(LinkState.prototype,"isSelectionEnabled",{get:function get(){return this._isSelectionEnabled===null?this._rootStore.diagramSettings.userInteraction.linkSelection:this._isSelectionEnabled;},enumerable:false,configurable:true});return LinkState;}();function createLinkPath(rootStore,source,target){var linksSettings=rootStore.linksSettings;if(!source.port||target instanceof index_esm_LinkPortEndpointState&&!target.port||!source.point||!target.point){return undefined;}var pathStr=linksSettings.pathConstructor({point:source.point,portType:source.port.type,direction:source.port.linkDirection},{point:target.point,portType:target instanceof LinkPointEndpointState$1?undefined:target.port.type,direction:target instanceof LinkPointEndpointState$1?undefined:target.port.linkDirection});return{svgPath:pathStr,source:source.point,target:target.point};}var DISABLED_USER_SELECT_CSS_CLASS='react_fast_diagram_disabled_user_select';function useUserAbilityToSelectSwitcher(active,elementToSwitchUserSelectOn){Object(react["useEffect"])(function(){if(!active||!elementToSwitchUserSelectOn){return;}if(elementToSwitchUserSelectOn.classList.contains(DISABLED_USER_SELECT_CSS_CLASS)){return;}elementToSwitchUserSelectOn.classList.add(DISABLED_USER_SELECT_CSS_CLASS);return function(){elementToSwitchUserSelectOn.classList.remove(DISABLED_USER_SELECT_CSS_CLASS);};},[active,elementToSwitchUserSelectOn]);}var index_esm_useLinkUserInteraction=function useLinkUserInteraction(linkState){var _a,_b;var rootStore=index_esm_useRootStore();var activeRef=index_esm_useNotifyRef(false);var selectionHandledRef=Object(react["useRef"])(false);var selectionTimeoutRef=Object(react["useRef"])(null);var handlers=Object(react["useMemo"])(function(){return linkState instanceof index_esm_LinkState?{onPointerEnter:function onPointerEnter(){linkState.hovered=true;},onPointerLeave:function onPointerLeave(){linkState.hovered=false;},onDragStart:function onDragStart(){activeRef.current=true;selectionHandledRef.current=false;if(linkState.isSelectionEnabled){selectionTimeoutRef.current=setTimeout(function(){if(!selectionHandledRef.current){selectionHandledRef.current=true;rootStore.selectionState.select(linkState,true);}},selectDelay$1);}},onDragEnd:function onDragEnd(_a){var tap=_a.tap,ctrlKey=_a.ctrlKey;activeRef.current=false;if(selectionTimeoutRef.current){clearTimeout(selectionTimeoutRef.current);}if(linkState.isSelectionEnabled&&tap&&!selectionHandledRef.current){selectionHandledRef.current=true;rootStore.selectionState.select(linkState,ctrlKey);}}}:{};},[linkState,rootStore]);var bind=useGesture(handlers,{eventOptions:{passive:false}});useUserAbilityToSelectSwitcher(activeRef.current,(_b=(_a=rootStore.diagramState.diagramInnerRef.current)===null||_a===void 0?void 0:_a.ownerDocument)===null||_b===void 0?void 0:_b.body);return{bind:bind};};var selectDelay$1=500;var LinkWrapper=Object(observer["a" /* observer */])(function(_a){var link=_a.link;var bind=index_esm_useLinkUserInteraction(link).bind;return/*#__PURE__*/react_default.a.createElement("g",null,/*#__PURE__*/react_default.a.createElement(link.componentDefinition.component,{bind:bind,entity:link,settings:link.componentDefinition.settings}));});var LinksLayer=Object(observer["a" /* observer */])(function(_a){var linksStore=_a.linksStore;return/*#__PURE__*/react_default.a.createElement("svg",null,Array.from(linksStore.links).map(function(_a){_a[0];var link=_a[1];return/*#__PURE__*/react_default.a.createElement(LinkWrapper,{key:link.id,link:link});}),/*#__PURE__*/react_default.a.createElement(LinkWrapper,{key:'__creation__',link:linksStore.linkCreation}));});function successResult(){return{success:true};}function successValueResult(value){return{success:true,value:value};}function errorResult(error){return{success:false,error:error};}function guidS4(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);}function guid(){// return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
return guidS4()+guidS4()+'-'+guidS4()+'-'+guidS4()+'-'+guidS4()+'-'+guidS4()+guidS4()+guidS4();}function guidForcedUniqueness(checkExistence){var id=guid();while(checkExistence(id)){id=guid();}return id;}var index_esm_HtmlElementRefState=/** @class */function(){function HtmlElementRefState(initValue){var _this=this;this._triggerSizePositionRecalculation=0;this.offsetRelativeToParent=function(parent){_this._triggerSizePositionRecalculation|1;if(_this.current){var iterElement=_this.current;var acumLeft=0;var acumTop=0;while(parent!==iterElement&&iterElement){var translate=getTranslate(iterElement);acumLeft+=iterElement.offsetLeft+translate[0];acumTop+=iterElement.offsetTop+translate[1];iterElement=iterElement.parentElement;}return[acumLeft,acumTop];}return null;};this.recalculateSizeAndPosition=function(){_this._triggerSizePositionRecalculation+=1;};this._currentInternal=initValue;Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(HtmlElementRefState.prototype,"current",{get:function get(){return this._currentInternal;},set:function set(value){this._currentInternal=value;},enumerable:false,configurable:true});Object.defineProperty(HtmlElementRefState.prototype,"realSize",{/**
         * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
         * Value can be @type {null} in case reference to real DOM object is not set.
         */get:function get(){this._triggerSizePositionRecalculation|1;if(this.current){return[this.current.clientWidth,this.current.clientHeight];}else{return null;}},enumerable:false,configurable:true});return HtmlElementRefState;}();// https://stackoverflow.com/questions/21912684/how-to-get-value-of-translatex-and-translatey
// https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
function getTranslate(item){var transArr=[0,0];if(!window.getComputedStyle){return transArr;}var style=window.getComputedStyle(item);var transform=style.transform||style.webkitTransform;// matrix(a, b, c, d, tx, ty)
// consider also to add matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)
var mat=transform.match(/^matrix\((.+)\)$/);if(mat){transArr[0]=parseInt(mat[1].split(', ')[4],10);transArr[1]=parseInt(mat[1].split(', ')[5],10);}return transArr;}var index_esm_PortState=/** @class */function(){function PortState(rootStore,id,nodeId,state){var _this=this;this._ref=new index_esm_HtmlElementRefState(null);this._dragging=false;this._hovered=false;this._validForConnection=true;this._sizeAndPositionRecalculationWithDelay=0;this.setLabel=function(value){_this._label=value!==null&&value!==void 0?value:'';};this.setType=function(value){_this._type=value!==null&&value!==void 0?value:componentDefaultType;};this.import=function(state){_this.setType(state===null||state===void 0?void 0:state.type);_this.setLabel(state===null||state===void 0?void 0:state.label);_this.setExtra(state===null||state===void 0?void 0:state.extra);_this.setComponent(state===null||state===void 0?void 0:state.component);_this.setLinkDirection(state===null||state===void 0?void 0:state.linkDirection);_this.setIsConnectionEnabled(state===null||state===void 0?void 0:state.isConnectionEnabled);};this.export=function(){var _a,_b;return deepCopy({id:_this._id,nodeId:_this._nodeId,label:_this._label,type:_this._type,linkDirection:(_a=_this._linkDirection)!==null&&_a!==void 0?_a:undefined,isConnectionEnabled:(_b=_this._isConnectionEnabled)!==null&&_b!==void 0?_b:undefined});};this.setExtra=function(value){_this._extra=value!==null&&value!==void 0?value:null;};this.setComponent=function(value){if(!value){_this._component=null;}else{_this._component=new index_esm_VisualComponentState(value);}};this.setLinkDirection=function(value){_this._linkDirection=value!==null&&value!==void 0?value:null;};this.setLinkDirectionIfNotYet=function(direction){var _a;_this._linkDirection=(_a=_this._linkDirection)!==null&&_a!==void 0?_a:direction;};this.recalculateSizeAndPosition=function(){_this._sizeAndPositionRecalculationWithDelay+=1;};this.recalculateSizeAndPositionWithoutDelay=function(){_this._ref.recalculateSizeAndPosition();};this.setIsConnectionEnabled=function(value){_this._isConnectionEnabled=isBoolean(value)?value:null;};this._id=id;this._nodeId=nodeId;this.import(state);Object(mobx_esm["c" /* makeAutoObservable */])(this);this._rootStore=rootStore;Object(mobx_esm["d" /* reaction */])(function(){return[_this._id,_this._nodeId,_this._label,_this._type,_this._extra,_this._component];},function(){_this.recalculateSizeAndPosition();});}Object.defineProperty(PortState.prototype,"id",{get:function get(){return this._id;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"nodeId",{get:function get(){return this._nodeId;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"fullId",{get:function get(){return createFullPortId(this.nodeId,this.id);},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"ref",{get:function get(){return this._ref;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"dragging",{get:function get(){return this._dragging;},set:function set(value){this._dragging=value;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"hovered",{get:function get(){return this._hovered;},set:function set(value){this._hovered=value;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"validForConnection",{get:function get(){return this._validForConnection;},set:function set(value){this._validForConnection=value;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"label",{get:function get(){return this._label;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"type",{get:function get(){return this._type;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"extra",{get:function get(){return this._extra;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"node",{get:function get(){return this._rootStore.nodesStore.getNodeOrThrowException(this.nodeId);},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"offsetRelativeToNode",{get:function get(){if(this.node.ref.current){return this._ref.offsetRelativeToParent(this.node.ref.current);}return null;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"realSize",{/**
         * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
         * Value can be @type {null} in case reference to real DOM object is not set.
         */get:function get(){return this._ref.realSize;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"componentDefinition",{get:function get(){if(this._component)return this._component;var portVisualComponents=this._rootStore.portsSettings.portVisualComponents;return portVisualComponents.getComponent(this.type);},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"connectedLinks",{get:function get(){return this._rootStore.linksStore.getPortLinks(this.nodeId,this.id);},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"connectedPorts",{get:function get(){var _this=this;return this.connectedLinks.map(function(v){return v.source.portId===_this._id?v.target.port:v.source.port;}).filter(function(p){return p;});// cast because typescript cannot deal with undefined check
},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"linkDirection",{get:function get(){if(this._linkDirection)return this._linkDirection;// Try to guess
if(!this.offsetRelativeToNode)return undefined;var nodeCenter=this.node.realSize&&multiplyPoint(this.node.realSize,0.5);if(!nodeCenter)return undefined;if(this._rootStore.linksSettings.preferLinksDirection==='horizontal'){return this.offsetRelativeToNode[0]<nodeCenter[0]?'left':'right';}else if(this._rootStore.linksSettings.preferLinksDirection==='vertical'){return this.offsetRelativeToNode[1]<nodeCenter[1]?'up':'down';}},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"sizeAndPositionRecalculationWithDelay",{get:function get(){return this._sizeAndPositionRecalculationWithDelay;},enumerable:false,configurable:true});Object.defineProperty(PortState.prototype,"isConnectionEnabled",{get:function get(){return this._isConnectionEnabled===null?this._rootStore.diagramSettings.userInteraction.portConnection:this._isConnectionEnabled;},enumerable:false,configurable:true});return PortState;}();function createFullPortId(nodeId,portId){return nodeId+"-"+portId;}var generateTransform=function generateTransform(translate,scale){var translatePart="translate("+translate[0]+"px, "+translate[1]+"px)";if(scale){var scalePart="scale("+scale+")";return translatePart+' '+scalePart;}else{return translatePart;}};var areTranformationsEqual=function areTranformationsEqual(a,b){return a===b||a&&b&&a.zoom===b.zoom&&arePointsEqual(a.offset,b.offset);};var index_esm_NodeState=/** @class */function(){function NodeState(rootStore,id,state){var _this=this;this.import=function(newState){var _a;_this.setPosition(newState===null||newState===void 0?void 0:newState.position);_this.setComponentType(newState===null||newState===void 0?void 0:newState.componentType);_this.setExtra(newState===null||newState===void 0?void 0:newState.extra);_this.label=(_a=newState===null||newState===void 0?void 0:newState.label)!==null&&_a!==void 0?_a:'';_this._ports={};(newState===null||newState===void 0?void 0:newState.ports)&&newState.ports.forEach(_this.addPort);_this.setIsSelectionEnabled(newState===null||newState===void 0?void 0:newState.isSelectionEnabled);_this.setIsDragEnabled(newState===null||newState===void 0?void 0:newState.isDragEnabled);};this.export=function(){var _a,_b;return _assign(_assign({},deepCopy({id:_this._id,label:_this._label,position:_this._position,componentType:_this.componentType,extra:_this.extra,isSelectionEnabled:(_a=_this._isSelectionEnabled)!==null&&_a!==void 0?_a:undefined,isDragEnabled:(_b=_this._isDragEnabled)!==null&&_b!==void 0?_b:undefined})),{ports:Object.values(_this._ports).map(function(p){return p.export();})});};/**
         * @param newPosition - new position
         * @param force - do not take into account snapping to grid
         * @returns remainder in case snap to grid is turned on. For example if newPosition would be [22,17] and snap [10,10],
         * the node position would be set to [20,20] and remainder equals [2,-3]
         */this.setPosition=function(newPosition,force){if(force===void 0){force=false;}newPosition=newPosition!==null&&newPosition!==void 0?newPosition:[0,0];if(!_this._position||force){_this._position=newPosition;return undefined;}var result=snapPositionToGrid(newPosition,_this._rootStore.nodesSettings.gridSnap);_this._position=result.position;return result.remainder;};this.setComponentType=function(value){_this._componentType=value!==null&&value!==void 0?value:componentDefaultType;};this.setExtra=function(value){_this._extra=value!==null&&value!==void 0?value:null;};this.getPort=function(portId){if(portId&&_this._ports[portId]){return _this._ports[portId];}else return undefined;};this.addPort=function(port){var _a;if(!port||port.id&&_this._ports[port.id]){return errorResult();}var newPort=new index_esm_PortState(_this._rootStore,(_a=port.id)!==null&&_a!==void 0?_a:guidForcedUniqueness(function(id){return!!_this._ports[id];}),_this._id,port);_this._ports[newPort.id]=newPort;return successValueResult(newPort);};this.removePort=function(portId){if(portId&&_this._ports[portId]){delete _this._ports[portId];_this._rootStore.linksStore.removePortLinks(_this._id,portId);return true;}return false;};this.getPortOrThrowException=function(portId){var port=_this.getPort(portId);if(port)return port;else throw"Port with id '"+portId+"' does not exist in the node '"+_this._id+"'";};this.recalculatePortsSizeAndPosition=function(){Object.values(_this._ports).forEach(function(p){return p.recalculateSizeAndPosition();});};this.setIsSelectionEnabled=function(value){_this._isSelectionEnabled=isBoolean(value)?value:null;};this.setIsDragEnabled=function(value){_this._isDragEnabled=isBoolean(value)?value:null;};this._rootStore=rootStore;this._id=id;this._ref=new index_esm_HtmlElementRefState(null);this._selected=false;this.import(state);Object(mobx_esm["c" /* makeAutoObservable */])(this,{// @ts-ignore
_rootStore:false});Object(mobx_esm["d" /* reaction */])(function(){return[_this._id,_this._label,_this._extra,_this._componentType];},function(){_this.recalculatePortsSizeAndPosition();});}Object.defineProperty(NodeState.prototype,"id",{get:function get(){return this._id;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"label",{get:function get(){return this._label;},set:function set(value){this._label=value;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"position",{get:function get(){return this._position;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"componentType",{get:function get(){return this._componentType;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"selected",{get:function get(){return this._selected;},set:function set(value){this._selected=value;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"extra",{get:function get(){return this._extra;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"ref",{get:function get(){return this._ref;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"ports",{get:function get(){return this._ports;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"transformString",{get:function get(){return generateTransform(this._position);},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"componentDefinition",{get:function get(){var visualComponents=this._rootStore.nodesSettings.visualComponents;return visualComponents.getComponent(this.componentType);},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"realSize",{/**
         * @returns Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
         * Value can be @type {null} in case reference to real DOM object is not set.
         */get:function get(){return this._ref.realSize;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"connectedExternalPorts",{get:function get(){var keyValues=Object.values(this.ports).map(function(p){return[p.id,p.connectedPorts];});return Object.fromEntries(keyValues);},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"connectedLinks",{get:function get(){return this._rootStore.linksStore.getNodeLinks(this._id);},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"isSelectionEnabled",{get:function get(){return this._isSelectionEnabled===null?this._rootStore.diagramSettings.userInteraction.nodeSelection:this._isSelectionEnabled;},enumerable:false,configurable:true});Object.defineProperty(NodeState.prototype,"isDragEnabled",{get:function get(){return this._isDragEnabled===null?this._rootStore.diagramSettings.userInteraction.nodeDrag:this._isDragEnabled;},enumerable:false,configurable:true});return NodeState;}();function snapPositionToGrid(position,snap){if(!snap)return{position:position,remainder:undefined};var resultX=snapPositionValueToGridValue(position[0],snap[0]);var resultY=snapPositionValueToGridValue(position[1],snap[1]);return{position:[resultX.value,resultY.value],remainder:[resultX.remainder,resultY.remainder]};}function snapPositionValueToGridValue(value,snapValue){var mod=value%snapValue;var remainder=0;var newValue=value;if(snapValue/2>mod){newValue-=mod;remainder=mod;}else{newValue+=snapValue-mod;remainder=-(snapValue-mod);}return{value:newValue,remainder:remainder};}/**
 * Check each element starting from the first one in composedPath() (see https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath),
 * if exceptClassName is the first class found -> return false,
 * if className is the first class found -> return true,
 * if neither exceptClassName nor className were found -> return false
 */var eventPathContainsClass=function eventPathContainsClass(event,className,exceptClassName){var typedEvent=event;if('composedPath'in typedEvent){var targets=typedEvent.composedPath();for(var i=0;i<targets.length;i++){var target=targets[i];if('classList'in target){var classList=target.classList;if(exceptClassName&&classList.contains(exceptClassName)){return false;}else if(classList.contains(className)){return true;}}}}return false;};/**
 * Does gesture can be potentially a tap/click event?
 * Drag gesture will be tap/click gesture on mouse or touch release only when the drag displacement is inferior to 3 pixels.
 * See useGestures documetation for more information.
 * @param movement - state value of gesture, represent gesture offset
 */function canDragGestureBeTapInstead(movement){return Math.max(Math.abs(movement[0]),Math.abs(movement[1]))<3;}var index_esm_useNodeUserInteraction=function useNodeUserInteraction(nodeState){var _a,_b;var rootStore=index_esm_useRootStore();// Should trigger rendering on change, otherwise useUserSelectSwitcher will not be invoked
var activeRef=index_esm_useNotifyRef(false);// In case the snap to grid option is enabled in settings
var remainderFromPreviousDragEventRef=Object(react["useRef"])(new Map());var selectionHandledRef=Object(react["useRef"])(false);var selectionTimeoutRef=Object(react["useRef"])(null);var userInteractionElemRef=Object(react["useRef"])(null);var handlers=Object(react["useMemo"])(function(){return{onDrag:function onDrag(_a){var pinching=_a.pinching,delta=_a.delta,ctrlKey=_a.ctrlKey,movement=_a.movement;if(!activeRef.current||pinching||canDragGestureBeTapInstead(movement)){return;}else if(nodeState.isSelectionEnabled&&!nodeState.selected&&!selectionHandledRef.current){rootStore.selectionState.select(nodeState,ctrlKey);selectionHandledRef.current=true;}else if(nodeState.isDragEnabled&&nodeState.selected){// prevent canceling selection on timeout
selectionHandledRef.current=true;rootStore.selectionState.selectedItems.filter(function(i){return i instanceof index_esm_NodeState;}).forEach(function(n){var _a;var newPosition=addPoints(n.position,multiplyPoint(delta,1/rootStore.diagramState.zoom),(_a=remainderFromPreviousDragEventRef.current.get(n))!==null&&_a!==void 0?_a:[0,0]);var newRemainder=n.setPosition(newPosition);remainderFromPreviousDragEventRef.current.set(n,newRemainder);});}},onDragStart:function onDragStart(_a){var event=_a.event;if(!allowNodeInteraction(event)){return;}activeRef.current=true;selectionHandledRef.current=false;if(nodeState.isSelectionEnabled){selectionTimeoutRef.current=setTimeout(function(){if(activeRef.current&&!selectionHandledRef.current){selectionHandledRef.current=true;rootStore.selectionState.select(nodeState,true);}},selectDelay);}},onDragEnd:function onDragEnd(_a){var tap=_a.tap,ctrlKey=_a.ctrlKey;if(selectionTimeoutRef.current){clearTimeout(selectionTimeoutRef.current);}activeRef.current=false;if(nodeState.isSelectionEnabled&&tap&&!selectionHandledRef.current){rootStore.selectionState.select(nodeState,ctrlKey);}remainderFromPreviousDragEventRef.current.clear();}};},[activeRef,nodeState,rootStore]);useGesture(handlers,{domTarget:userInteractionElemRef,eventOptions:{passive:false}});useUserAbilityToSelectSwitcher(activeRef.current,(_b=(_a=userInteractionElemRef.current)===null||_a===void 0?void 0:_a.ownerDocument)===null||_b===void 0?void 0:_b.body);return{active:activeRef.current,userInteractionElemRef:userInteractionElemRef};};var selectDelay=500;function allowNodeInteraction(event){return eventPathContainsClass(event,enableNodeUserInteractionClassName,disableNodeUserInteractionClassName);}var enableNodeUserInteractionClassName='react_easy_diagram_enable_node_user_interaction';var disableNodeUserInteractionClassName='react_easy_diagram_disable_node_user_interaction';var NodeContext=/*#__PURE__*/react_default.a.createContext(null);var NodeWrapper=Object(observer["a" /* observer */])(function(_a){var node=_a.node;var userInteractionElemRef=index_esm_useNodeUserInteraction(node).userInteractionElemRef;return/*#__PURE__*/react_default.a.createElement(NodeContext.Provider,{value:node},/*#__PURE__*/react_default.a.createElement("div",{id:node.id,className:"react_fast_diagram_NodeWrapper "+enableNodeUserInteractionClassName,style:{left:node.position[0],top:node.position[1],zIndex:node.selected?10:undefined},ref:node.ref},/*#__PURE__*/react_default.a.createElement(node.componentDefinition.component,{draggableRef:userInteractionElemRef,entity:node,settings:node.componentDefinition.settings})));});var NodesLayer=Object(observer["a" /* observer */])(function(_a){var nodesStore=_a.nodesStore;var rootStore=index_esm_useRootStore();Object(react["useEffect"])(function(){rootStore.diagramState.zoomToFit();},[]);return/*#__PURE__*/react_default.a.createElement("div",null,Array.from(nodesStore.nodes).map(function(_a){_a[0];var node=_a[1];return/*#__PURE__*/react_default.a.createElement(NodeWrapper,{key:node.id,node:node});}));});function useDiagramDragHandlers(cancelEvent){var _a,_b;var rootStore=index_esm_useRootStore();var diagramState=rootStore.diagramState;var activeRef=index_esm_useNotifyRef(false);var handlers=Object(react["useMemo"])(function(){return{onDrag:function onDrag(_a){var pinching=_a.pinching,delta=_a.delta;if(!activeRef.current||pinching){return;}diagramState.setOffset([diagramState.offset[0]+delta[0],diagramState.offset[1]+delta[1]]);},onDragStart:function onDragStart(_a){var event=_a.event,cancel=_a.cancel;if(cancelEvent&&cancelEvent(event)){cancel();return;}// Do not activate so drag will not be performed, but also don't cancel, as it would not be possible to clear selection
if(!rootStore.diagramSettings.userInteraction.diagramPan){return;}activeRef.current=true;},onDragEnd:function onDragEnd(_a){var tap=_a.tap;if(tap){rootStore.selectionState.clear();}activeRef.current=false;}};},[activeRef,diagramState,cancelEvent,rootStore]);useUserAbilityToSelectSwitcher(activeRef.current,(_b=(_a=diagramState.diagramInnerRef.current)===null||_a===void 0?void 0:_a.ownerDocument)===null||_b===void 0?void 0:_b.body);return handlers;}function useDiagramPinchHandlers(cancel){var _a,_b;var _c=index_esm_useRootStore(),diagramState=_c.diagramState,diagramSettings=_c.diagramSettings;var activeRef=index_esm_useNotifyRef(false);var pinchState=Object(react["useRef"])({distance:0,origin:[0,0],elementLeftTop:[0,0]});var handlers=Object(react["useMemo"])(function(){return{onPinch:function onPinch(_a){var distance=_a.da[0],origin=_a.origin;if(!activeRef.current||!diagramState.diagramInnerRef.current){return;}var originDiff=diagramSettings.userInteraction.diagramPan?subtractPoints(origin,pinchState.current.origin):[0,0];var originPositionOnElement=subtractPoints(origin,pinchState.current.elementLeftTop);diagramState.tranlsateAndZoomInto(originDiff,originPositionOnElement,distance/pinchState.current.distance);pinchState.current={distance:distance,origin:origin,elementLeftTop:pinchState.current.elementLeftTop};},onPinchStart:function onPinchStart(_a){var distance=_a.da[0],origin=_a.origin,event=_a.event;if(!diagramSettings.userInteraction.diagramZoom||cancel(event)||!diagramState.diagramInnerRef.current){return;}var rect=diagramState.diagramInnerRef.current.getBoundingClientRect();pinchState.current={distance:distance,origin:origin,elementLeftTop:[rect.left,rect.top]};activeRef.current=true;},onPinchEnd:function onPinchEnd(){return activeRef.current=false;}};},[diagramState.diagramInnerRef.current,activeRef,diagramState,cancel,diagramSettings]);useUserAbilityToSelectSwitcher(activeRef.current,(_b=(_a=diagramState.diagramInnerRef.current)===null||_a===void 0?void 0:_a.ownerDocument)===null||_b===void 0?void 0:_b.body);return handlers;}function useDiagramWheelHandler(state){var _a=index_esm_useRootStore(),diagramState=_a.diagramState,diagramSettings=_a.diagramSettings;var handlers=Object(react["useMemo"])(function(){return{onWheel:function onWheel(_a){var _b=_a.direction;_b[0];var yDirection=_b[1],event=_a.event;if(!diagramState.diagramInnerRef.current||!diagramSettings.userInteraction.diagramZoom)return;event===null||event===void 0?void 0:event.preventDefault();var rect=diagramState.diagramInnerRef.current.getBoundingClientRect();var mousePositionOnElement=subtractPoints([event.clientX,event.clientY],[rect.left,rect.top]);var factor=0.9;if(yDirection<0){factor=1/factor;}state.tranlsateAndZoomInto([0,0],mousePositionOnElement,factor);}};},[diagramState.diagramInnerRef,state,diagramSettings]);return handlers;}var index_esm_useDiagramUserInteraction=function useDiagramUserInteraction(){var diagramState=index_esm_useRootStore().diagramState;var cancelGesture=Object(react["useCallback"])(function(event){return event.target!==diagramState.diagramInnerRef.current;},[diagramState.diagramInnerRef]);var dragHandlers=useDiagramDragHandlers(cancelGesture);var pinchHandlers=useDiagramPinchHandlers(cancelGesture);var wheelHandler=useDiagramWheelHandler(diagramState);useGesture(_assign(_assign(_assign({},dragHandlers),pinchHandlers),wheelHandler),{domTarget:diagramState.diagramInnerRef,eventOptions:{passive:false}});return{transform:diagramState.transformString};};var MiniControlWrapper=Object(observer["a" /* observer */])(function(){var rootStore=index_esm_useRootStore();var minicontrolComponentState=rootStore.diagramSettings.miniControlComponentState;return minicontrolComponentState.component&&/*#__PURE__*/react_default.a.createElement(minicontrolComponentState.component,{rootStore:rootStore,settings:minicontrolComponentState.settings});});var InnerDiagram=Object(observer["a" /* observer */])(function(props){var rootStore=index_esm_useRootStore();var transform=index_esm_useDiagramUserInteraction().transform;return/*#__PURE__*/react_default.a.createElement("div",{ref:rootStore.diagramState.diagramInnerRef,style:_assign({},props.diagramStyles),className:'react_fast_diagram_DiagramInner'},/*#__PURE__*/react_default.a.createElement(BackgroundWrapper,null),/*#__PURE__*/react_default.a.createElement("div",{className:'react_fast_diagram_DiagramInner_DraggablePart',style:{transform:transform}},/*#__PURE__*/react_default.a.createElement(LinksLayer,{linksStore:rootStore.linksStore}),/*#__PURE__*/react_default.a.createElement(NodesLayer,{nodesStore:rootStore.nodesStore})),/*#__PURE__*/react_default.a.createElement(MiniControlWrapper,null));});InnerDiagram.displayName='InnerDiagram';var Callbacks=/** @class */function(){function Callbacks(rootStore){var _this=this;this.import=function(callbacks){_this._validateLinkEndpoints=callbacks===null||callbacks===void 0?void 0:callbacks.validateLinkEndpoints;};this.export=function(){return{validateLinkEndpoints:_this._validateLinkEndpoints};};this._rootStore=rootStore;}Object.defineProperty(Callbacks.prototype,"validateLinkEndpoints",{get:function get(){return this._validateLinkEndpoints;},enumerable:false,configurable:true});return Callbacks;}();var index_esm_VisualComponentWithDefault=/** @class */function(){function VisualComponentWithDefault(defaultComponent){var _this=this;this.import=function(newComponent){_this._innerComponent=newComponent?new index_esm_VisualComponentState(newComponent):_this._defaultComponent;};this._innerComponent=new index_esm_VisualComponentState(defaultComponent);this._defaultComponent=this._innerComponent;Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(VisualComponentWithDefault.prototype,"component",{get:function get(){return this._innerComponent.component;},enumerable:false,configurable:true});Object.defineProperty(VisualComponentWithDefault.prototype,"settings",{get:function get(){return this._innerComponent.settings;},enumerable:false,configurable:true});return VisualComponentWithDefault;}();var MiniControlDefault=Object(observer["a" /* observer */])(function(_a){var rootStore=_a.rootStore,settings=_a.settings;settings=settings!==null&&settings!==void 0?settings:defaultSettings;return/*#__PURE__*/react_default.a.createElement("div",{className:'react_fast_diagram_Minicontrol_Default',style:_assign(_assign({},getOffsetStyles(settings)),settings===null||settings===void 0?void 0:settings.containerStyle)},rootStore.selectionState.selectedItems.length>0&&/*#__PURE__*/react_default.a.createElement(index_esm_RubbishBinButton,{size:settings.buttonsSize,onClick:rootStore.selectionState.removeSelected}),settings.buttons.zoomIn&&/*#__PURE__*/react_default.a.createElement(index_esm_MiniControlButton,{size:settings.buttonsSize,onClick:rootStore.diagramState.zoomIn,children:'+'}),settings.buttons.zoomOut&&/*#__PURE__*/react_default.a.createElement(index_esm_MiniControlButton,{size:settings.buttonsSize,onClick:rootStore.diagramState.zoomOut,children:'-'}),/*#__PURE__*/react_default.a.createElement(index_esm_MiniControlButton,{size:settings.buttonsSize,onClick:rootStore.diagramState.zoomToFit,children:'[ ]'}));});function getOffsetStyles(settings){return{top:settings.position=='left-top'||settings.position=='right-top'?settings.parentOffset:undefined,right:settings.position=='right-bottom'||settings.position=='right-top'?settings.parentOffset:undefined,bottom:settings.position=='left-bottom'||settings.position=='right-bottom'?settings.parentOffset:undefined,left:settings.position=='left-top'||settings.position=='left-bottom'?settings.parentOffset:undefined};}var index_esm_RubbishBinButton=function RubbishBinButton(props){return/*#__PURE__*/react_default.a.createElement("div",{onClick:props.onClick,className:'react_fast_diagram_Minicontrol_Default_Btn',style:{width:props.size+'px',height:props.size+'px',padding:5,backgroundColor:'#fa4040'}},/*#__PURE__*/react_default.a.createElement("svg",{viewBox:'0 0 488.936 488.936',fill:'white'},/*#__PURE__*/react_default.a.createElement("g",null,/*#__PURE__*/react_default.a.createElement("path",{d:'M381.16,111.948H107.376c-6.468,0-12.667,2.819-17.171,7.457c-4.504,4.649-6.934,11.014-6.738,17.477l9.323,307.69\r\n\t\t\tc0.39,12.92,10.972,23.312,23.903,23.312h20.136v-21.012c0-24.121,19.368-44.049,43.488-44.049h127.896\r\n\t\t\tc24.131,0,43.893,19.928,43.893,44.049v21.012h19.73c12.933,0,23.52-10.346,23.913-23.268l9.314-307.7\r\n\t\t\tc0.195-6.462-2.234-12.863-6.738-17.513C393.821,114.767,387.634,111.948,381.16,111.948z'}),/*#__PURE__*/react_default.a.createElement("path",{d:'M309.166,435.355H181.271c-6.163,0-11.915,4.383-11.915,11.516v30.969c0,6.672,5.342,11.096,11.915,11.096h127.895\r\n\t\t\tc6.323,0,11.366-4.773,11.366-11.096v-30.969C320.532,440.561,315.489,435.355,309.166,435.355z'}),/*#__PURE__*/react_default.a.createElement("path",{d:'M427.696,27.106C427.696,12.138,415.563,0,400.591,0H88.344C73.372,0,61.239,12.138,61.239,27.106v30.946\r\n\t\t\tc0,14.973,12.133,27.106,27.105,27.106H400.59c14.973,0,27.105-12.133,27.105-27.106L427.696,27.106L427.696,27.106z'}))));};var index_esm_MiniControlButton=function MiniControlButton(props){return/*#__PURE__*/react_default.a.createElement("div",{onClick:props.onClick,className:'react_fast_diagram_Minicontrol_Default_Btn',style:{width:props.size+'px',height:props.size+'px'}},/*#__PURE__*/react_default.a.createElement("span",null,props.children));};var createDefaultMiniControl=function createDefaultMiniControl(settings){var finalSettings=_assign(_assign({},defaultSettings),settings?settings:{});return{component:MiniControlDefault,settings:finalSettings};};var defaultSettings={position:'left-bottom',containerStyle:{},buttonsSize:30,buttons:{zoomIn:true,zoomOut:true},parentOffset:20};var index_esm_DiagramSettings=/** @class */function(){function DiagramSettings(){var _this=this;this._zoomInterval=defaultZoomInterval;this._zoomToFitSettings=defaultZoomToFitSettings;this._userInteraction=enableAllUserInteraction;this.import=function(obj){_this._backgroundComponentState.import(obj===null||obj===void 0?void 0:obj.backgroundComponent);_this._miniControlComponentState.import(obj===null||obj===void 0?void 0:obj.miniControlComponent);_this.setZoomInterval(obj===null||obj===void 0?void 0:obj.zoomInterval);_this._zoomToFitSettings=_assign(_assign({},defaultZoomToFitSettings),obj===null||obj===void 0?void 0:obj.zoomToFitSettings);_this.setUserInteraction(obj===null||obj===void 0?void 0:obj.userInteraction);};this.setZoomInterval=function(value){_this._zoomInterval=value!==null&&value!==void 0?value:defaultZoomInterval;};this.setUserInteraction=function(value){if(value===true||value===undefined||value===null)_this._userInteraction=enableAllUserInteraction;else if(value===false)_this._userInteraction=disableAllUserInteraction;else if(isObject(value))_this._userInteraction=_assign(_assign({},enableAllUserInteraction),value);};this._backgroundComponentState=new index_esm_VisualComponentWithDefault(createDefaultBackground());this._miniControlComponentState=new index_esm_VisualComponentWithDefault(createDefaultMiniControl());Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(DiagramSettings.prototype,"backgroundComponentState",{get:function get(){return this._backgroundComponentState;},enumerable:false,configurable:true});Object.defineProperty(DiagramSettings.prototype,"miniControlComponentState",{get:function get(){return this._miniControlComponentState;},enumerable:false,configurable:true});Object.defineProperty(DiagramSettings.prototype,"zoomInterval",{get:function get(){return this._zoomInterval;},enumerable:false,configurable:true});Object.defineProperty(DiagramSettings.prototype,"zoomToFitSettings",{get:function get(){return this._zoomToFitSettings;},enumerable:false,configurable:true});Object.defineProperty(DiagramSettings.prototype,"userInteraction",{get:function get(){return this._userInteraction;},enumerable:false,configurable:true});return DiagramSettings;}();var defaultZoomInterval=[0.1,3];var defaultZoomToFitSettings={padding:[30,30]};var enableAllUserInteraction={diagramZoom:true,diagramPan:true,nodeDrag:true,portConnection:true,nodeSelection:true,linkSelection:true};var disableAllUserInteraction={diagramZoom:false,diagramPan:false,nodeDrag:false,portConnection:false,nodeSelection:false,linkSelection:false};var index_esm_DiagramState=/** @class */function(){function DiagramState(rootStore){var _this=this;this.import=function(state){_this.setOffset(state===null||state===void 0?void 0:state.offset);_this.setZoom(state===null||state===void 0?void 0:state.zoom);};this.export=function(){return deepCopy({offset:_this._offset,zoom:_this._zoom});};this.setOffset=function(newOffset){_this._offset=newOffset!==null&&newOffset!==void 0?newOffset:[0,0];};this.setZoom=function(newZoom){_this._zoom=clampValue(newZoom!==null&&newZoom!==void 0?newZoom:1,_this._rootStore.diagramSettings.zoomInterval);};this.zoomIn=function(){return _this._rootStore.diagramState.zoomIntoCenter(1/0.8);};this.zoomOut=function(){return _this._rootStore.diagramState.zoomIntoCenter(0.8);};this.setTransformation=function(newOffset,newZoom){_this.setOffset(newOffset);_this.setZoom(newZoom);};// See: https://stackoverflow.com/a/30039971/9142642
this.zoomInto=function(pointToZoomInto,zoomMultiplicator){var newZoom=clampValue(_this._zoom*zoomMultiplicator,_this._rootStore.diagramSettings.zoomInterval);var pointDisplacementAfterZoom=multiplyPoint(subtractPoints(pointToZoomInto,_this._offset),newZoom/_this._zoom);_this.setTransformation(// Compensate for the displacement by moving the point back under the cursor
subtractPoints(pointToZoomInto,pointDisplacementAfterZoom),newZoom);};this.translate=function(translateBy){_this.setOffset(addPoints(_this._offset,translateBy));};this.tranlsateAndZoomInto=function(translateBy,pointToZoomInto,zoomMultiplicator){_this.translate(translateBy);_this.zoomInto(pointToZoomInto,zoomMultiplicator);};this.zoomIntoCenter=function(zoomMultiplicator){var diagramRealSize=_this._diagramInnerRef.realSize;if(!diagramRealSize)return;_this._rootStore.diagramState.zoomInto(multiplyPoint(diagramRealSize,0.5),zoomMultiplicator);};this.zoomToFit=function(){var nodesBoundingBox=_this._getNodesBoundingBoxWithPadding();var diagramSize=_this._diagramInnerRef.realSize;if(!diagramSize){console.warn('Cannot retrieve diagram size');return;}var newZoom=calculateNewZoomToFitBoundingBox(diagramSize,nodesBoundingBox);// Extend interval to be able to set required zoom
_this._rootStore.diagramSettings.setZoomInterval([Math.min(_this._rootStore.diagramSettings.zoomInterval[0],newZoom),Math.max(_this._rootStore.diagramSettings.zoomInterval[1],newZoom)]);_this.setZoom(newZoom);_this.setOffset(calculateOffsetToCenterBoundingBox(diagramSize,newZoom,nodesBoundingBox));};this._getNodesBoundingBoxWithPadding=function(){var nodesBoundingBox=_this._rootStore.nodesStore.getNodesBoundingBox();var padding=_this._rootStore.diagramSettings.zoomToFitSettings.padding;nodesBoundingBox.topLeftCorner=subtractPoints(nodesBoundingBox.topLeftCorner,padding);nodesBoundingBox.bottomRightCorner=addPoints(nodesBoundingBox.bottomRightCorner,padding);nodesBoundingBox.size=subtractPoints(nodesBoundingBox.bottomRightCorner,nodesBoundingBox.topLeftCorner);return nodesBoundingBox;};this._diagramInnerRef=new index_esm_HtmlElementRefState(null);this._rootStore=rootStore;this.import();Object(mobx_esm["c" /* makeAutoObservable */])(this,{// @ts-ignore
_rootStore:false});}Object.defineProperty(DiagramState.prototype,"transformString",{get:function get(){return generateTransform(this._offset,this._zoom);},enumerable:false,configurable:true});Object.defineProperty(DiagramState.prototype,"diagramInnerRef",{get:function get(){return this._diagramInnerRef;},enumerable:false,configurable:true});Object.defineProperty(DiagramState.prototype,"offset",{get:function get(){return this._offset;},enumerable:false,configurable:true});Object.defineProperty(DiagramState.prototype,"zoom",{get:function get(){return this._zoom;},enumerable:false,configurable:true});return DiagramState;}();function calculateNewZoomToFitBoundingBox(diagramSize,boundingBox){// Zoom to fit the largest size, horizontal or vertical
var newZoom=Math.min(diagramSize[0]/boundingBox.size[0],diagramSize[1]/boundingBox.size[1]);return newZoom;}function calculateOffsetToCenterBoundingBox(diagramSize,zoom,boundingBox){// Take zoom into account
var contentSizeWithZoom=multiplyPoint(boundingBox.size,zoom);var topLeftCornerWithZoom=multiplyPoint(boundingBox.topLeftCorner,zoom);var diffBetweenDiagramAndContentSizes=subtractPoints(diagramSize,contentSizeWithZoom);return addPoints(multiplyPoint(topLeftCornerWithZoom,-1),// topLeft corner of content will be at topleft corner of diagram
multiplyPoint(diffBetweenDiagramAndContentSizes,1/2)// center content
);}var index_esm_LinkCreationState=/** @class */function(){function LinkCreationState(rootStore){var _this=this;this._source=null;this._target=null;this._targetPortCandidate=null;this.startLinking=function(portState,pointOnPort){_this._resetProps();_this._source=new index_esm_LinkPortEndpointState(portState.nodeId,portState.id,_this._rootStore);var sourcePoint=_this._source.point;var portSize=_this._source.port.realSize;if(sourcePoint&&portSize){// endpoint point is calculated for center of port
var topLeftCornerPoint=subtractPoints(sourcePoint,multiplyPoint(portSize,0.5));_this._target=new LinkPointEndpointState$1(addPoints(topLeftCornerPoint,multiplyPoint(pointOnPort,1/_this._rootStore.diagramState.zoom)));}else{_this._resetProps();return false;}return true;};this.setTargetPortCandidate=function(portState){if(!_this._source)return;var canAddLink=_this._rootStore.linksStore.canAddLink({source:{nodeId:_this._source.nodeId,portId:_this._source.portId},target:{nodeId:portState.nodeId,portId:portState.id}});_this._targetPortCandidate=portState;if(canAddLink.success){portState.validForConnection=true;}else{portState.validForConnection=false;}};this.resetTargetPortCandidate=function(portState){if(_this._targetPortCandidate===portState){_this._targetPortCandidate=null;}portState.validForConnection=true;};this.stopLinking=function(){if(_this._targetPortCandidate&&_this._source){var result=_this._rootStore.linksStore.addLink({source:{nodeId:_this._source.nodeId,portId:_this._source.portId},target:{nodeId:_this._targetPortCandidate.nodeId,portId:_this._targetPortCandidate.id}});if(result.success){_this._rootStore.selectionState.select(result.value,false);}}_this._resetProps();};this._resetProps=function(){if(_this._source){if(_this._source.port){_this._source.port.validForConnection=true;}_this._source=null;}_this._target=null;if(_this._targetPortCandidate){_this._targetPortCandidate.validForConnection=true;_this._targetPortCandidate=null;}};Object(mobx_esm["c" /* makeAutoObservable */])(this);this._rootStore=rootStore;}Object.defineProperty(LinkCreationState.prototype,"selected",{get:function get(){return true;},enumerable:false,configurable:true});Object.defineProperty(LinkCreationState.prototype,"hovered",{get:function get(){return true;},enumerable:false,configurable:true});Object.defineProperty(LinkCreationState.prototype,"source",{get:function get(){return this._source;},enumerable:false,configurable:true});Object.defineProperty(LinkCreationState.prototype,"target",{get:function get(){return this._target;},enumerable:false,configurable:true});Object.defineProperty(LinkCreationState.prototype,"targetPortCandidate",{get:function get(){return this._targetPortCandidate;},enumerable:false,configurable:true});Object.defineProperty(LinkCreationState.prototype,"isLinking",{get:function get(){return!!this._source;},enumerable:false,configurable:true});Object.defineProperty(LinkCreationState.prototype,"componentDefinition",{get:function get(){var visualComponents=this._rootStore.linksSettings.visualComponents;return visualComponents.getComponent(linkCreationComponentType);},enumerable:false,configurable:true});Object.defineProperty(LinkCreationState.prototype,"path",{get:function get(){if(!this._source||!this._target)return undefined;else return createLinkPath(this._rootStore,this._source,this._target);},enumerable:false,configurable:true});return LinkCreationState;}();var linkCreationComponentType='linkCreation';var LinkDefault=Object(observer["a" /* observer */])(function(_a){var entity=_a.entity,settings=_a.settings,bind=_a.bind;var finalSettings=_assign(_assign({},linkDefaultSettings),settings);var path=entity.path;if(!path)return null;var color=finalSettings.color;if(entity.selected)color=finalSettings.selectedColor;return/*#__PURE__*/react_default.a.createElement("g",null,/*#__PURE__*/react_default.a.createElement("path",{d:path.svgPath,stroke:color,strokeWidth:finalSettings.strokeWidth,fill:'none',strokeLinecap:"round"}),/*#__PURE__*/react_default.a.createElement("path",_assign({d:path.svgPath,stroke:color,strokeWidth:finalSettings.strokeWidth+5},bind(),{pointerEvents:'auto',fill:"none",strokeLinecap:"round",strokeOpacity:entity.hovered?0.22:0})),entity instanceof index_esm_LinkCreationState&&/*#__PURE__*/react_default.a.createElement("circle",{cx:path.target[0],cy:path.target[1],r:finalSettings.cirleRadius,fill:'orange'}));});var linkDefaultSettings={color:'#c2c2c2',selectedColor:'#6eb7ff',strokeWidth:1,cirleRadius:3};function createLinkDefault(settings){return{component:LinkDefault,settings:settings};}function curvedLinkPathConstructor(source,target,settings){if(!source||!target)return'';var sourcePoint=roundPoint(source.point);var targetPoint=roundPoint(target.point);var sourceStr=source.point[0]+", "+source.point[1];var targetStr=target.point[0]+", "+target.point[1];var directionFactor=settings.tweakDirectionFactorBasedOnDistance(distanceBetweenPoints(sourcePoint,targetPoint),settings.directionFactor);function getControl(endpoint,direction){switch(direction){case'left':return endpoint[0]-directionFactor+", "+endpoint[1];case'up':return endpoint[0]+", "+(endpoint[1]-directionFactor);case'right':return endpoint[0]+directionFactor+", "+endpoint[1];case'down':return endpoint[0]+", "+(endpoint[1]+directionFactor);default:return endpoint[0]+", "+endpoint[1];}}if(source.direction||target.direction){var sourceControl=getControl(sourcePoint,source.direction);var targetControl=getControl(targetPoint,target.direction);return"M "+sourceStr+" C "+sourceControl+" "+targetControl+", "+targetStr;}else{return"M "+sourceStr+" Q "+target.point[0]+", "+source.point[1]+", "+targetStr;}}var defualtSettings={directionFactor:60,tweakDirectionFactorBasedOnDistance:function tweakDirectionFactorBasedOnDistance(distance,directionFactor){if(distance<100){return directionFactor*(distance/100);}return directionFactor;}};function createCurvedLinkPathConstructor(settings){return function(source,target){return curvedLinkPathConstructor(source,target,settings?_assign(_assign({},defualtSettings),settings):defualtSettings);};}var index_esm_LinksSettings=/** @class */function(){function LinksSettings(){var _a;var _this=this;this._visualComponents=new index_esm_VisualComponents((_a={},_a[componentDefaultType]=LinkDefault,_a[linkCreationComponentType]=LinkDefault,_a));this.import=function(obj){var _a;_this._visualComponents.import(obj);_this.setPathConstructor(obj===null||obj===void 0?void 0:obj.pathConstructor);_this._preferLinksDirection=(_a=obj===null||obj===void 0?void 0:obj.preferLinksDirection)!==null&&_a!==void 0?_a:'horizontal';};this.setPathConstructor=function(value){_this._pathConstructor=value!==null&&value!==void 0?value:defaultPathConstructor;};this.import();Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(LinksSettings.prototype,"pathConstructor",{get:function get(){return this._pathConstructor;},enumerable:false,configurable:true});Object.defineProperty(LinksSettings.prototype,"visualComponents",{get:function get(){return this._visualComponents;},enumerable:false,configurable:true});Object.defineProperty(LinksSettings.prototype,"preferLinksDirection",{get:function get(){return this._preferLinksDirection;},enumerable:false,configurable:true});return LinksSettings;}();var defaultPathConstructor=createCurvedLinkPathConstructor();var index_esm_LinksStore=/** @class */function(){function LinksStore(rootStore){var _this=this;this.import=function(newLinks){_this._links=new Map();_this._nodesLinksCollection=new Map();newLinks&&newLinks.forEach(function(link){return _this.addLink(link,false);});// do not check existence of link's ports as they could be added after first rendering of node
};this.export=function(){return Array.from(_this._links).map(function(_a){_a[0];var value=_a[1];return value.export();});};this.getNodeLinks=function(nodeId){var _a;return(_a=_this._nodesLinksCollection.get(nodeId))!==null&&_a!==void 0?_a:[];};this.getPortLinks=function(nodeId,portId){var nodeLinks=_this.getNodeLinks(nodeId);var fullPortId=createFullPortId(nodeId,portId);return nodeLinks.filter(function(l){return l.source.port&&l.source.port.fullId===fullPortId||l.target.port&&l.target.port.fullId===fullPortId;});};this.removeNodeLinks=function(nodeId){var links=_this.getNodeLinks(nodeId);links.forEach(function(l){return _this.removeLink(l.id);});};this.removePortLinks=function(nodeId,portId){if(!nodeId||!portId)return;var links=_this.getNodeLinks(nodeId);var endpointToRemove={nodeId:nodeId,portId:portId};links.forEach(function(l){if(linkPortEndpointsEquals(l.source,endpointToRemove)||linkPortEndpointsEquals(l.target,endpointToRemove)){_this.removeLink(l.id);}});};this.addLink=function(link,checkPortsExistence){var _a;if(checkPortsExistence===void 0){checkPortsExistence=true;}var canAdd=_this.canAddLink(link,checkPortsExistence);if(!canAdd.success)return canAdd;var newLink=new index_esm_LinkState(_this._rootStore,(_a=link.id)!==null&&_a!==void 0?_a:guidForcedUniqueness(function(id){return _this._links.has(id);}),link);_this._links.set(newLink.id,newLink);_this._addLinkToNodeLinksCollection(newLink,link.source.nodeId);_this._addLinkToNodeLinksCollection(newLink,link.target.nodeId);return successValueResult(newLink);};this.removeLink=function(linkId){var linkToRemove=_this._links.get(linkId);if(linkToRemove){_this._removeLinkFromNodeLinksCollection(linkToRemove,linkToRemove.source.nodeId);_this._removeLinkFromNodeLinksCollection(linkToRemove,linkToRemove.target.nodeId);_this._rootStore.selectionState.unselect(linkToRemove);_this._links.delete(linkId);return true;}return false;};this.canAddLink=function(link,checkPortsExistence){var _a,_b;if(checkPortsExistence===void 0){checkPortsExistence=true;}if(!link)return errorResult("Cannot add empty");if(link.id&&_this._links.has(link.id))return errorResult("Cannot add link with id '"+link.id+"', as it already exists");if(checkPortsExistence){var isSourceValid=_this.doesEndpointPortExist(link.source);if(!isSourceValid.success)return isSourceValid;var isTargetValid=_this.doesEndpointPortExist(link.target);if(!isTargetValid.success)return isTargetValid;}if(link.source.nodeId===link.target.nodeId)return errorResult("Link's endpoints are located in the same node");if(_this.areEndpointsConnected(link.source,link.target))return errorResult("Link's endpoints are already connected");if(((_b=(_a=_this._rootStore.callbacks).validateLinkEndpoints)===null||_b===void 0?void 0:_b.call(_a,_this.getEndpointPort(link.source),_this.getEndpointPort(link.target),_this._rootStore))===false){return errorResult("Link's endpoints are not valid according to validation callback");}return successResult();};this.doesEndpointPortExist=function(endpoint){try{_this.getEndpointPort(endpoint);}catch(ex){return errorResult(''+ex);}return successResult();};this.getEndpointPort=function(endpoint){return _this._rootStore.nodesStore.getNodeOrThrowException(endpoint.nodeId).getPortOrThrowException(endpoint.portId);};this.areEndpointsConnected=function(source,target){return!!_this.getLinkForEndpointsIfExists(source,target);};this.getLinkForEndpointsIfExists=function(source,target){var links=_this._nodesLinksCollection.get(source.nodeId);if(links){return links.find(function(l){return linkPortEndpointsEquals(l.source,source)&&linkPortEndpointsEquals(l.target,target)||linkPortEndpointsEquals(l.target,source)&&linkPortEndpointsEquals(l.source,target);});}};this._addLinkToNodeLinksCollection=function(link,nodeId){var links=_this._nodesLinksCollection.get(nodeId);if(!links){_this._nodesLinksCollection.set(nodeId,[link]);}else{links.push(link);}};this._removeLinkFromNodeLinksCollection=function(link,nodeId){var collection=_this._nodesLinksCollection.get(nodeId);if(collection){collection=collection.filter(function(l){return l.id!==link.id;});if(collection.length>0){_this._nodesLinksCollection.set(nodeId,collection);}else{_this._nodesLinksCollection.delete(nodeId);}}};this._linkCreation=new index_esm_LinkCreationState(rootStore);this.import();Object(mobx_esm["c" /* makeAutoObservable */])(this);this._rootStore=rootStore;}Object.defineProperty(LinksStore.prototype,"links",{get:function get(){return this._links;},enumerable:false,configurable:true});Object.defineProperty(LinksStore.prototype,"linkCreation",{get:function get(){return this._linkCreation;},enumerable:false,configurable:true});return LinksStore;}();var index_esm_usePortUserInteraction=function usePortUserInteraction(portState){var _a,_b;var _c=index_esm_useRootStore(),linkCreation=_c.linksStore.linkCreation,diagramState=_c.diagramState;var handlers=Object(react["useMemo"])(function(){return{onDrag:function onDrag(_a){var _b;var delta=_a.delta;if(!portState||!portState.dragging)return;var parentScale=diagramState.zoom;(_b=linkCreation.target)===null||_b===void 0?void 0:_b.translateBy(multiplyPoint(delta,1/parentScale));},onDragStart:function onDragStart(_a){var event=_a.event,xy=_a.xy;if(!portState||!portState.isConnectionEnabled)return;// Important! Otherwise on touch display onPointerEnter will not work!
var portHtmlElement=event.target;portHtmlElement.releasePointerCapture(event.pointerId);var pointOnPort=subtractPoints(xy,[portHtmlElement.getBoundingClientRect().x,portHtmlElement.getBoundingClientRect().y]);if(linkCreation.startLinking(portState,pointOnPort)){portState.dragging=true;}},onDragEnd:function onDragEnd(){if(!portState)return;portState.dragging=false;linkCreation.stopLinking();},onPointerEnter:function onPointerEnter(){if(!portState)return;if(portState.isConnectionEnabled||!linkCreation.isLinking){portState.hovered=true;}if(portState.isConnectionEnabled){linkCreation.setTargetPortCandidate(portState);}},onPointerLeave:function onPointerLeave(){if(!portState)return;portState.hovered=false;linkCreation.resetTargetPortCandidate(portState);}};},[portState,linkCreation,diagramState]);// Temporary bug fix when pointer events handlers are not reasigned.
// See https://github.com/pmndrs/react-use-gesture/issues/263 and https://github.com/pmndrs/react-use-gesture/issues/264
// There could be some other bugs related to handlers object replacing
var bind=useGesture(handlers,{eventOptions:{passive:false}});useUserAbilityToSelectSwitcher(!!(portState===null||portState===void 0?void 0:portState.dragging),(_b=(_a=portState===null||portState===void 0?void 0:portState.ref.current)===null||_a===void 0?void 0:_a.ownerDocument)===null||_b===void 0?void 0:_b.body);return{active:!!(portState===null||portState===void 0?void 0:portState.dragging),bind:bind};};var PortInnerWrapper=Object(observer["a" /* observer */])(function(_a){var port=_a.port,styles=_a.styles;var bind=index_esm_usePortUserInteraction(port).bind;Object(react["useEffect"])(function(){port.ref.recalculateSizeAndPosition();},[port,port.ref,port.sizeAndPositionRecalculationWithDelay]);return/*#__PURE__*/react_default.a.createElement("div",_assign({style:styles,id:port.fullId,className:disableNodeUserInteractionClassName,ref:port.ref},bind()),/*#__PURE__*/react_default.a.createElement(port.componentDefinition.component,{entity:port,settings:port.componentDefinition.settings}));});var positionValues=['left','top','right','bottom'];var relativeXYPositionValues=['center-center','center-bottom','center-top','left-center','left-bottom','left-top','right-center','right-bottom','right-top'];function splitRelativeXYPostionByAxis(position){return position.split('-');}var PortsContainerDefault=Object(observer["a" /* observer */])(function(_a){var position=_a.position,ports=_a.ports,style=_a.style,gapBetweenPorts=_a.gapBetweenPorts,offsetFromOriginPosition=_a.offsetFromOriginPosition;Object(react["useEffect"])(function(){ports.forEach(function(p){return p.setLinkDirectionIfNotYet(positionToDirection[position]);});},[position,ports]);var className='react_fast_diagram_flex_gap ';if(position==='top'||position==='bottom'){className+='react_fast_diagram_flex_gap_x';}else{className+='react_fast_diagram_flex_gap_y';}var positionStyle={position:'absolute',left:position==='left'?0:undefined,top:position==='left'||position==='right'||position==='top'?0:undefined,right:position==='right'?0:undefined,bottom:position==='bottom'?0:undefined,height:position==='left'||position==='right'?'100%':undefined,width:position==='top'||position==='bottom'?'100%':undefined};var offsetFromOriginPositionStyle={};if(offsetFromOriginPosition&&positionValues.includes(position)){offsetFromOriginPositionStyle[position]=-offsetFromOriginPosition;}return/*#__PURE__*/react_default.a.createElement("div",{className:className,style:_assign(_assign(_assign({// @ts-ignore
'--gap':gapBetweenPorts},style),positionStyle),offsetFromOriginPositionStyle)},ports&&ports.map(function(port){return/*#__PURE__*/react_default.a.createElement(PortInnerWrapper,{key:port.id,port:port});}));});var positionToDirection={left:'left',top:'up',right:'right',bottom:'down'};function createPortsContainerDefault(settings){return function(props){return/*#__PURE__*/react_default.a.createElement(PortsContainerDefault,_assign({},_assign(_assign({},portsContainerDefaultSettings),settings),props));};}var portsContainerDefaultSettings={gapBetweenPorts:'8px'};var NodeLabel=Object(observer["a" /* observer */])(function(_a){var node=_a.node;return/*#__PURE__*/react_default.a.createElement("span",null,node.label?node.label:node.id);});var NodeDefault=Object(observer["a" /* observer */])(function(_a){var entity=_a.entity,settings=_a.settings,draggableRef=_a.draggableRef;var finalSettings=_assign(_assign({},defaultNodeDefaultSettings),settings);var finalStyles=_assign(_assign({},finalSettings.style),entity.selected?finalSettings.selectedStyle:undefined);var groupedPorts=new Map();Object.values(entity.ports).forEach(function(p){var _a;var position=portTypeToPosition(p.type,finalSettings.portTypeToPositionMapping);if(position){groupedPorts.has(position)?(_a=groupedPorts.get(position))===null||_a===void 0?void 0:_a.push(p):groupedPorts.set(position,[p]);}});return/*#__PURE__*/react_default.a.createElement("div",{ref:draggableRef,className:'react_fast_diagram_Node_Default',style:finalStyles},/*#__PURE__*/react_default.a.createElement(finalSettings.innerNode,{node:entity}),Array.from(groupedPorts).map(function(_a){var k=_a[0],v=_a[1];return/*#__PURE__*/react_default.a.createElement(finalSettings.nodeContainer,{ports:v,position:k,key:k});}));});function portTypeToPosition(portType,mapping){if(!portType)return undefined;if(mapping&&mapping[portType]){return mapping[portType];}else{return positionValues.includes(portType)?portType:undefined;}}var defaultNodeDefaultSettings={selectedStyle:{border:'#6eb7ff solid 1px'},nodeContainer:createPortsContainerDefault({offsetFromOriginPosition:5}),innerNode:NodeLabel};function createNodeDefault(settings){return{component:NodeDefault,settings:_assign(_assign({},defaultNodeDefaultSettings),settings)};}var index_esm_NodesSettings=/** @class */function(){function NodesSettings(){var _a;var _this=this;this._visualComponents=new index_esm_VisualComponents((_a={},_a[componentDefaultType]=NodeDefault,_a));this.import=function(obj){_this._visualComponents.import(obj);_this.setGridSnap(obj===null||obj===void 0?void 0:obj.gridSnap);};this.setGridSnap=function(gridSnap){if(!gridSnap){_this._gridSnap=null;}else if(typeof gridSnap==='number'){_this._gridSnap=[gridSnap,gridSnap];}else if(Array.isArray(gridSnap)&&gridSnap.length===2){_this._gridSnap=gridSnap;}};this.setGridSnap();Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(NodesSettings.prototype,"visualComponents",{get:function get(){return this._visualComponents;},enumerable:false,configurable:true});Object.defineProperty(NodesSettings.prototype,"gridSnap",{get:function get(){return this._gridSnap;},enumerable:false,configurable:true});return NodesSettings;}();var index_esm_NodesStore=/** @class */function(){function NodesStore(rootStore){var _this=this;this._nodes=new Map();this.import=function(newNodes){_this._nodes=new Map();newNodes===null||newNodes===void 0?void 0:newNodes.forEach(function(node){return _this.addNode(node,true);});};this.export=function(){return Array.from(_this._nodes).map(function(_a){_a[0];var value=_a[1];return value.export();});};this.addNode=function(node,rewriteIfExists){var _a;if(!node||!rewriteIfExists&&node.id&&_this._nodes.has(node.id)){return errorResult('');}var newNode=new index_esm_NodeState(_this._rootStore,(_a=node.id)!==null&&_a!==void 0?_a:guidForcedUniqueness(function(id){return _this._nodes.has(id);}),node);_this._nodes.set(newNode.id,newNode);return successValueResult(newNode);};this.removeNode=function(nodeId){var node=_this._nodes.get(nodeId);if(node){_this._rootStore.linksStore.removeNodeLinks(nodeId);_this._rootStore.selectionState.unselect(node);_this._nodes.delete(nodeId);return true;}return false;};this.getNode=function(nodeId){return _this._nodes.get(nodeId);};this.getNodeOrThrowException=function(nodeId){var node=_this.getNode(nodeId);if(node)return node;else throw"Node with id '"+nodeId+"' does not exist";};/**
         * @returns Values are calculated without zoom taking into account, that is, the same as zoom would be '1'
         */this.getNodesBoundingBox=function(){var topLeftCorner=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY];var bottomRightCorner=[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];_this._nodes.forEach(function(node){var _a;var pos=node.position;var size=(_a=node.realSize)!==null&&_a!==void 0?_a:[1,1];topLeftCorner[0]=Math.min(topLeftCorner[0],pos[0]);topLeftCorner[1]=Math.min(topLeftCorner[1],pos[1]);bottomRightCorner[0]=Math.max(bottomRightCorner[0],pos[0]+size[0]);bottomRightCorner[1]=Math.max(bottomRightCorner[1],pos[1]+size[1]);});return{topLeftCorner:topLeftCorner,bottomRightCorner:bottomRightCorner,size:subtractPoints(bottomRightCorner,topLeftCorner)};};Object(mobx_esm["c" /* makeAutoObservable */])(this);this._rootStore=rootStore;}Object.defineProperty(NodesStore.prototype,"nodes",{get:function get(){return this._nodes;},enumerable:false,configurable:true});return NodesStore;}();var PortInnerDefault=Object(observer["a" /* observer */])(function(_a){var port=_a.entity,settings=_a.settings;var finalSettings=_assign(_assign({},portDefaultSettings),settings);var color=finalSettings.color;if(port.dragging)color=finalSettings.dragColor;else if(port.hovered&&port.validForConnection)color=finalSettings.hoverColor;else if(port.hovered&&!port.validForConnection)color=finalSettings.invalidColor;return/*#__PURE__*/react_default.a.createElement("div",{style:{width:finalSettings.size[0],height:finalSettings.size[1],backgroundColor:color,borderRadius:'2px'}});});var portDefaultSettings={size:[10,10],color:'#6eb7ff',dragColor:'#49f860',hoverColor:'#49f860',invalidColor:'#fa4040'};function createPortInnerDefault(settings){return{component:PortInnerDefault,settings:_assign(_assign({},portDefaultSettings),settings)};}var index_esm_PortsSettings=/** @class */function(){function PortsSettings(){var _a;var _this=this;this._portVisualComponents=new index_esm_VisualComponents((_a={},_a[componentDefaultType]=createPortInnerDefault(),_a));this.import=function(obj){_this.portVisualComponents.import({components:obj===null||obj===void 0?void 0:obj.portComponents,defaultType:obj===null||obj===void 0?void 0:obj.portDefaultType});};Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(PortsSettings.prototype,"portVisualComponents",{get:function get(){return this._portVisualComponents;},enumerable:false,configurable:true});return PortsSettings;}();var index_esm_SelectionState=/** @class */function(){function SelectionState(rootStore){var _this=this;this._selectedItems=[];this.select=function(item,multipleActivated){if(multipleActivated){if(_this._selectedItems.includes(item)){_this.unselect(item);}else{item.selected=true;_this._selectedItems.push(item);}}else{_this.clear();item.selected=true;_this._selectedItems.push(item);}};this.unselect=function(item){item.selected=false;_this._selectedItems=_this._selectedItems.filter(function(i){return i!==item;});};this.clear=function(){_this._selectedItems.forEach(function(i){return i.selected=false;});_this._selectedItems=[];};this.removeSelected=function(){_this.removeSelectedNodes();_this.removeSelectedLinks();};this.removeSelectedNodes=function(){_this._selectedItems.filter(function(i){return i instanceof index_esm_NodeState;}).forEach(function(node){_this._rootStore.nodesStore.removeNode(node.id);});};this.removeSelectedLinks=function(){_this._selectedItems.filter(function(i){return i instanceof index_esm_LinkState;}).forEach(function(link){_this._rootStore.linksStore.removeLink(link.id);});};Object(mobx_esm["c" /* makeAutoObservable */])(this);this._rootStore=rootStore;}Object.defineProperty(SelectionState.prototype,"selectedItems",{get:function get(){return this._selectedItems;},enumerable:false,configurable:true});return SelectionState;}();var RootStore=/** @class */function(){function RootStore(){var _this=this;this.importState=function(nodes,links){_this._nodesStore.import(nodes);_this._linksStore.import(links);};this.export=function(){return{nodes:_this._nodesStore.export(),links:_this._linksStore.export()};};this.importSettings=function(settings){_this._diagramSettings.import(settings.diagram);_this._nodesSettings.import(settings.nodes);_this._linksSettings.import(settings.links);_this._portsSettings.import(settings.ports);_this._callbacks.import(settings.callbacks);};this._diagramSettings=new index_esm_DiagramSettings();this._nodesSettings=new index_esm_NodesSettings();this._linksSettings=new index_esm_LinksSettings();this._portsSettings=new index_esm_PortsSettings();this._callbacks=new Callbacks(this);this._diagramState=new index_esm_DiagramState(this);this._nodesStore=new index_esm_NodesStore(this);this._linksStore=new index_esm_LinksStore(this);this._selectionState=new index_esm_SelectionState(this);}Object.defineProperty(RootStore.prototype,"diagramState",{get:function get(){return this._diagramState;},enumerable:false,configurable:true});Object.defineProperty(RootStore.prototype,"nodesStore",{get:function get(){return this._nodesStore;},enumerable:false,configurable:true});Object.defineProperty(RootStore.prototype,"linksStore",{get:function get(){return this._linksStore;},enumerable:false,configurable:true});Object.defineProperty(RootStore.prototype,"diagramSettings",{get:function get(){return this._diagramSettings;},enumerable:false,configurable:true});Object.defineProperty(RootStore.prototype,"nodesSettings",{get:function get(){return this._nodesSettings;},enumerable:false,configurable:true});Object.defineProperty(RootStore.prototype,"linksSettings",{get:function get(){return this._linksSettings;},enumerable:false,configurable:true});Object.defineProperty(RootStore.prototype,"portsSettings",{get:function get(){return this._portsSettings;},enumerable:false,configurable:true});Object.defineProperty(RootStore.prototype,"callbacks",{get:function get(){return this._callbacks;},enumerable:false,configurable:true});Object.defineProperty(RootStore.prototype,"selectionState",{get:function get(){return this._selectionState;},enumerable:false,configurable:true});return RootStore;}();function styleInject(css,ref){if(ref===void 0)ref={};var insertAt=ref.insertAt;if(!css||typeof document==='undefined'){return;}var head=document.head||document.getElementsByTagName('head')[0];var style=document.createElement('style');style.type='text/css';if(insertAt==='top'){if(head.firstChild){head.insertBefore(style,head.firstChild);}else{head.appendChild(style);}}else{head.appendChild(style);}if(style.styleSheet){style.styleSheet.cssText=css;}else{style.appendChild(document.createTextNode(css));}}var css_248z=".react_fast_diagram_DiagramInner {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.react_fast_diagram_DiagramInner * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: black;\n}\n\n.react_fast_diagram_DiagramInner_DraggablePart {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: visible;\n  transform-origin: 0px 0px;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  /* useGestures hook use targetTouches instead of simply touches, \n  so we should set this property to Movable, otherwise if user put \n  one finger above Movable and another above DiagramInner, the hook \n  will not trigger pinch gesture */\n  pointer-events: none; \n}\n\n.react_fast_diagram_DiagramInner_DraggablePart > * {\n  overflow: visible;\n}\n\n.react_fast_diagram_NodeWrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; \n  height: -webkit-fit-content; \n  height: -moz-fit-content; \n  height: fit-content;\n  pointer-events: auto;\n}\n\n.react_fast_diagram_Node_Default {\n  min-width: 10px;\n  min-height: 10px;\n  border-radius: 3px;\n  background-color: white;\n  border: #c2c2c2 solid 1px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n  padding: 15px;\n  font-size: small;\n}\n\n.react_fast_diagram_PortContainer_Default {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.react_fast_diagram_PortContainer_Default_Horizontal > * {\n  margin: 0 5px;\n}\n\n.react_fast_diagram_PortContainer_Default_Vertical > * {\n  margin: 5px 0;\n}\n\n.react_fast_diagram_PortContainer_Default_Horizontal {\n  flex-direction: row;\n  width: 100%;\n}\n\n.react_fast_diagram_PortContainer_Default_Vertical {\n  flex-direction: column;\n  height: 100%;\n}\n\n.react_fast_diagram_Node_Default > * {\n  text-align: center;\n  margin: auto;\n}\n\n.react_fast_diagram_disabled_user_select {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.react_fast_diagram_BackgroundWrapper {\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.react_fast_diagram_Background_Default {\n  height: 100%;\n  width: 100%;\n}\n\n.react_fast_diagram_Minicontrol_Default {\n  position: absolute;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n.react_fast_diagram_Minicontrol_Default_Btn {\n  background-color: white;\n  border: 1px solid rgb(209, 209, 209);\n  letter-spacing: normal;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.react_fast_diagram_Minicontrol_Default_Btn > * {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n@media (hover: hover) {\n  .react_fast_diagram_Minicontrol_Default_Btn:hover {\n    background-color: rgb(228, 228, 228);\n    border: 1px solid rgb(209, 209, 209)\n  }\n}\n\n/* Containers with gap between items */\n\n.react_fast_diagram_flex_gap {\n  --gap: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.react_fast_diagram_flex_gap_y {\n  flex-direction: column;\n  height: 100%;\n}\n\n.react_fast_diagram_flex_gap_y > * {\n  margin: var(--gap) 0 0 0;\n}\n\n.react_fast_diagram_flex_gap_y > :first-child {\n  margin: 0;\n}\n\n.react_fast_diagram_flex_gap_x {\n  flex-direction: row;\n  width: 100%;\n}\n\n.react_fast_diagram_flex_gap_x > * {\n  margin: 0 0 0 var(--gap);\n}\n\n.react_fast_diagram_flex_gap_x > :first-child {\n  margin: 0;\n}\n\n/* Containers with gap between items */";styleInject(css_248z);var RootStoreContext=/*#__PURE__*/react_default.a.createContext(null);function _Diagram(props){var rootStore=Object(react["useMemo"])(function(){var _a,_b,_c,_d;var store=new RootStore();props.settings&&store.importSettings(props.settings);store.importState((_b=(_a=props.initState)===null||_a===void 0?void 0:_a.nodes)!==null&&_b!==void 0?_b:[],(_d=(_c=props.initState)===null||_c===void 0?void 0:_c.links)!==null&&_d!==void 0?_d:[]);return store;},[]);Object(react["useEffect"])(function(){if(props.storeRef){props.storeRef.current=rootStore;}},[rootStore,props.storeRef]);return/*#__PURE__*/react_default.a.createElement(RootStoreContext.Provider,{value:rootStore},/*#__PURE__*/react_default.a.createElement(InnerDiagram,null));}_Diagram.displayName='Diagram';var index_esm_useRootStore=function useRootStore(){return Object(react["useContext"])(RootStoreContext);};var BackgroundWrapper=Object(observer["a" /* observer */])(function(){var _a=index_esm_useRootStore(),diagramSettings=_a.diagramSettings,diagramState=_a.diagramState;return/*#__PURE__*/react_default.a.createElement("div",{className:'react_fast_diagram_BackgroundWrapper'},/*#__PURE__*/react_default.a.createElement(diagramSettings.backgroundComponentState.component,{diagramOffset:diagramState.offset,diagramZoom:diagramState.zoom,settings:diagramSettings.backgroundComponentState.settings}));});function useUpdateOrCreatePortState(port){var nodesStore=index_esm_useRootStore().nodesStore;var portRef=index_esm_useNotifyRef(undefined);Object(react["useEffect"])(function(){var node=nodesStore.getNode(port.nodeId);if(!node){portRef.current=undefined;return;}var portState=port.id&&node.getPort(port.id);if(portState){portRef.current=portState;}else{var result=node.addPort(port);if(result.success){portRef.current=result.value;}else{portRef.current=undefined;}}},[port===null||port===void 0?void 0:port.id,port===null||port===void 0?void 0:port.nodeId,nodesStore]);index_esm_usePortPropertyUpdate(portRef.current,port===null||port===void 0?void 0:port.label,function(portState){return portState.setLabel(port===null||port===void 0?void 0:port.label);});index_esm_usePortPropertyUpdate(portRef.current,port===null||port===void 0?void 0:port.component,function(portState){return portState.setComponent(port===null||port===void 0?void 0:port.component);});index_esm_usePortPropertyUpdate(portRef.current,port===null||port===void 0?void 0:port.extra,function(portState){return portState.setExtra(port===null||port===void 0?void 0:port.extra);});index_esm_usePortPropertyUpdate(portRef.current,port===null||port===void 0?void 0:port.linkDirection,function(portState){return portState.setLinkDirection(port===null||port===void 0?void 0:port.linkDirection);});index_esm_usePortPropertyUpdate(portRef.current,port===null||port===void 0?void 0:port.type,function(portState){return portState.setType(port===null||port===void 0?void 0:port.type);});return portRef.current;}var index_esm_usePortPropertyUpdate=function usePortPropertyUpdate(port,valueInProps,valueSetter){Object(react["useEffect"])(function(){if(port){valueSetter&&valueSetter(port);}},[port,valueInProps]);};var useRelativePositionStyles=function useRelativePositionStyles(position,offsetFromParentCenter,offsetFromOrigin){if(!position)return{};if(!isNumber(offsetFromParentCenter))offsetFromParentCenter=0;if(!isPoint(offsetFromOrigin))offsetFromOrigin=[0,0];var _a=splitRelativeXYPostionByAxis(position),positionX=_a[0],positionY=_a[1];var offsetFromCenter=[positionX==='center'?0:-offsetFromParentCenter,positionY==='center'?0:-offsetFromParentCenter];var positionStyle={position:'absolute'};if(position==='left-top'){positionStyle.left=offsetFromCenter[0]+offsetFromOrigin[0];positionStyle.top=offsetFromCenter[1]+offsetFromOrigin[1];}else if(position==='left-center'){positionStyle.left=offsetFromCenter[0]+offsetFromOrigin[0];positionStyle.top='50%';positionStyle.transform="translateY(calc(-50% + "+offsetFromOrigin[1]+"px))";}else if(position==='left-bottom'){positionStyle.left=offsetFromCenter[0]+offsetFromOrigin[0];positionStyle.bottom=offsetFromCenter[1]+offsetFromOrigin[1];}else if(position==='center-top'){positionStyle.left='50%';positionStyle.transform="translateX(calc(-50% + "+offsetFromOrigin[0]+"px))";positionStyle.top=offsetFromCenter[1]+offsetFromOrigin[1];}else if(position==='center-bottom'){positionStyle.left='50%';positionStyle.transform="translateX(calc(-50% + "+offsetFromOrigin[0]+"px))";positionStyle.bottom=offsetFromCenter[1]-offsetFromOrigin[1];}else if(position==='right-top'){positionStyle.right=offsetFromCenter[0]-offsetFromOrigin[0];positionStyle.top=offsetFromCenter[1]+offsetFromOrigin[1];}else if(position==='right-center'){positionStyle.right=offsetFromCenter[0]-offsetFromOrigin[0];positionStyle.top='50%';positionStyle.transform="translateY(calc(-50% + "+offsetFromOrigin[1]+"px))";}else if(position==='right-bottom'){positionStyle.right=offsetFromCenter[0]-offsetFromOrigin[0];positionStyle.bottom=offsetFromCenter[1]-offsetFromOrigin[1];}return positionStyle;};var Port=Object(observer["a" /* observer */])(function(props){var node=Object(react["useContext"])(NodeContext);// node should already exist
var portState=useUpdateOrCreatePortState(_assign(_assign({},props),{nodeId:node.id}));var positionStyles=useRelativePositionStyles(props.position,props.offsetFromNodeCenter,props.offsetFromOrigin);if(!portState){return null;}return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(PortInnerWrapper,{port:portState,styles:positionStyles}));});var index_esm_useDiagram=function useDiagram(initState,settings){var storeRef=index_esm_useNotifyRef(null);var obj=Object(react["useMemo"])(function(){return{Diagram:function Diagram(){return/*#__PURE__*/react_default.a.createElement(_Diagram,{storeRef:storeRef,initState:initState,settings:settings});},storeRef:storeRef};},[]);return obj;};function straightLinkPathConstructor(source,target){var path="M "+source.point[0]+" "+source.point[1]+", "+target.point[0]+" "+target.point[1];return path;}function createStraightLinkPathConstructor(){return straightLinkPathConstructor;}var index_esm_LinkPointEndpointState=/** @class */function(){function LinkPointEndpointState(pos){var _this=this;this.translateBy=function(pointToTranslateBy){_this._point=addPoints(_this._point,pointToTranslateBy);};this._point=pos;Object(mobx_esm["c" /* makeAutoObservable */])(this);}Object.defineProperty(LinkPointEndpointState.prototype,"point",{get:function get(){return this._point;},enumerable:false,configurable:true});return LinkPointEndpointState;}();

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_SkipToContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var _theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);
/* harmony import */ var _theme_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(111);
/* harmony import */ var _theme_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(106);
/* harmony import */ var _theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(112);
/* harmony import */ var _theme_LayoutHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(113);
/* harmony import */ var _theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(107);
// Copied from docusaurus Layout
function ExampleWrapper(props){Object(_theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_LayoutHead__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_SkipToContent__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Navbar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],null),props.children,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Footer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],null));}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function DiagramContainer(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{height:'calc(90vh - var(--ifm-navbar-height))'}},props.children);}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // See https://github.com/facebook/docusaurus/issues/3360
// TODO find a better solution, this shouldn't be needed
// TODO this is not ideal and produce a warning!
// see https://github.com/webpack/webpack/issues/7713#issuecomment-467888437
// note: warning can be filtered: https://github.com/facebook/docusaurus/pull/3382#issuecomment-684966924
try{module.exports=__webpack_require__(144);}catch(e){// In case the docs plugin is not available, might be useful to stub some methods here
// https://github.com/facebook/docusaurus/issues/3947
const Empty={};module.exports={useAllDocsData:()=>Empty,useActivePluginAndVersion:()=>undefined};}/*
throw new Error(
  "The docs plugin is not used, so you can't require the useDocs hooks. ",
);
 */

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(10);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(115);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(8);

// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/LinksCollector.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const createStatefulLinksCollector=()=>{// Set to dedup, as it's not useful to collect multiple times the same link
const allLinks=new Set();return{collectLink:link=>{allLinks.add(link);},getCollectedLinks:()=>{return[...allLinks];}};};const Context=/*#__PURE__*/Object(react["createContext"])({collectLink:()=>{// noop by default for client
// we only use the broken links checker server-side
}});const useLinksCollector=()=>{return Object(react["useContext"])(Context);};const ProvideLinksCollector=({children,linksCollector})=>{return/*#__PURE__*/react_default.a.createElement(Context.Provider,{value:linksCollector},children);};
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(100);

// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
const shouldAddBaseUrlAutomatically=to=>to.startsWith('/');function Link(_a){var _b;var{isNavLink,to,href,activeClassName,isActive,'data-noBrokenLinkCheck':noBrokenLinkCheck,autoAddBaseUrl=true}=_a,props=__rest(_a,["isNavLink","to","href","activeClassName","isActive",'data-noBrokenLinkCheck',"autoAddBaseUrl"]);const{withBaseUrl}=Object(useBaseUrl["b" /* useBaseUrlUtils */])();const linksCollector=useLinksCollector();// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
const targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}const isInternal=Object(isInternalUrl["a" /* default */])(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
const targetLinkWithoutPathnameProtocol=targetLinkUnprefixed===null||targetLinkUnprefixed===void 0?void 0:targetLinkUnprefixed.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
const targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;const preloaded=Object(react["useRef"])(false);const LinkComponent=isNavLink?react_router_dom["e" /* NavLink */]:react_router_dom["c" /* Link */];const IOSupported=ExecutionEnvironment["a" /* default */].canUseIntersectionObserver;let io;const handleIntersection=(el,cb)=>{io=new window.IntersectionObserver(entries=>{entries.forEach(entry=>{if(el===entry.target){// If element is in viewport, stop listening/observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(el);io.disconnect();cb();}}});});// Add element to the observer.
io.observe(el);};const handleRef=ref=>{if(IOSupported&&ref&&isInternal){// If IO supported and element reference found, setup Observer functionality.
handleIntersection(ref,()=>{window.docusaurus.prefetch(targetLink);});}};const onMouseEnter=()=>{if(!preloaded.current){window.docusaurus.preload(targetLink);preloaded.current=true;}};Object(react["useEffect"])(()=>{// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){window.docusaurus.prefetch(targetLink);}// When unmounting, stop intersection observer from watching.
return()=>{if(IOSupported&&io){io.disconnect();}};},[targetLink,IOSupported,isInternal]);const isAnchorLink=(_b=targetLink===null||targetLink===void 0?void 0:targetLink.startsWith('#'))!==null&&_b!==void 0?_b:false;const isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;if(targetLink&&isInternal&&!isAnchorLink&&!noBrokenLinkCheck){linksCollector.collectLink(targetLink);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
react_default.a.createElement("a",Object.assign({href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props)):/*#__PURE__*/react_default.a.createElement(LinkComponent,Object.assign({},props,{onMouseEnter:onMouseEnter,innerRef:handleRef,to:targetLink||''},isNavLink&&{isActive,activeClassName}));}/* harmony default export */ var exports_Link = __webpack_exports__["a"] = (Link);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useBaseUrlUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBaseUrl; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(siteUrl,baseUrl,url,{forcePrependBaseUrl=false,absolute=false}={}){if(!url){return url;}// it never makes sense to add a base url to a local anchor url
if(url.startsWith('#')){return url;}// it never makes sense to add a base url to an url with a protocol
if(Object(_isInternalUrl__WEBPACK_IMPORTED_MODULE_1__[/* hasProtocol */ "b"])(url)){return url;}if(forcePrependBaseUrl){return baseUrl+url;}// We should avoid adding the baseurl twice if it's already there
const shouldAddBaseUrl=!url.startsWith(baseUrl);const basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){const{siteConfig:{baseUrl='/',url:siteUrl}={}}=Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__["default"])();return{withBaseUrl:(url,options)=>{return addBaseUrl(siteUrl,baseUrl,url,options);}};}function useBaseUrl(url,options={}){const{withBaseUrl}=useBaseUrlUtils();return withBaseUrl(url,options);}

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(100);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavLink({activeBasePath,activeBaseRegex,to,href,label,activeClassName='navbar__link--active',prependBaseUrlToHref,...props}){// TODO all this seems hacky
// {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
const toUrl=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(to);const activeBaseUrl=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(activeBasePath);const normalizedHref=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(href,{forcePrependBaseUrl:true});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},href?{href:prependBaseUrlToHref?normalizedHref:href}:{isNavLink:true,activeClassName,to:toUrl,...(activeBasePath||activeBaseRegex?{isActive:(_match,location)=>activeBaseRegex?new RegExp(activeBaseRegex).test(location.pathname):location.pathname.startsWith(activeBaseUrl)}:null)},props),label);}function NavItemDesktop({items,position,className,...props}){var _props$children;const dropdownRef=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);const dropdownMenuRef=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);const[showDropdown,setShowDropdown]=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{const handleClickOutside=event=>{if(!dropdownRef.current||dropdownRef.current.contains(event.target)){return;}setShowDropdown(false);};document.addEventListener('mousedown',handleClickOutside);document.addEventListener('touchstart',handleClickOutside);return()=>{document.removeEventListener('mousedown',handleClickOutside);document.removeEventListener('touchstart',handleClickOutside);};},[dropdownRef]);const navLinkClassNames=(extraClassName,isDropdownItem=false)=>Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({'navbar__item navbar__link':!isDropdownItem,dropdown__link:isDropdownItem},extraClassName);if(!items){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({className:navLinkClassNames(className)},props));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{ref:dropdownRef,className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('navbar__item','dropdown','dropdown--hoverable',{'dropdown--left':position==='left','dropdown--right':position==='right','dropdown--show':showDropdown})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({className:navLinkClassNames(className)},props,{onClick:props.to?undefined:e=>e.preventDefault(),onKeyDown:e=>{if(e.key==='Enter'){e.preventDefault();setShowDropdown(!showDropdown);}}}),(_props$children=props.children)!==null&&_props$children!==void 0?_props$children:props.label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{ref:dropdownMenuRef,className:"dropdown__menu"},items.map(({className:childItemClassName,...childItemProps},i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({onKeyDown:e=>{if(i===items.length-1&&e.key==='Tab'){e.preventDefault();setShowDropdown(false);const nextNavbarItem=dropdownRef.current.nextElementSibling;if(nextNavbarItem){nextNavbarItem.focus();}}},activeClassName:"dropdown__link--active",className:navLinkClassNames(childItemClassName,true)},childItemProps))))));}function NavItemMobile({items,className,position:_position,// Need to destructure position from props so that it doesn't get passed on.
...props}){var _menuListRef$current,_menuListRef$current2,_props$children2;const menuListRef=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);const{pathname}=Object(_docusaurus_router__WEBPACK_IMPORTED_MODULE_5__["useLocation"])();const[collapsed,setCollapsed]=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(()=>{var _items$some;return(_items$some=!(items!==null&&items!==void 0&&items.some(item=>Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__["isSamePath"])(item.to,pathname))))!==null&&_items$some!==void 0?_items$some:true;});const navLinkClassNames=(extraClassName,isSubList=false)=>Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('menu__link',{'menu__link--sublist':isSubList},extraClassName);if(!items){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{className:"menu__list-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({className:navLinkClassNames(className)},props)));}const menuListHeight=(_menuListRef$current=menuListRef.current)!==null&&_menuListRef$current!==void 0&&_menuListRef$current.scrollHeight?`${(_menuListRef$current2=menuListRef.current)===null||_menuListRef$current2===void 0?void 0:_menuListRef$current2.scrollHeight}px`:undefined;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('menu__list-item',{'menu__list-item--collapsed':collapsed})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({role:"button",className:navLinkClassNames(className,true)},props,{onClick:e=>{e.preventDefault();setCollapsed(state=>!state);}}),(_props$children2=props.children)!==null&&_props$children2!==void 0?_props$children2:props.label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:"menu__list",ref:menuListRef,style:{height:!collapsed?menuListHeight:undefined}},items.map(({className:childItemClassName,...childItemProps},i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{className:"menu__list-item",key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({activeClassName:"menu__link--active",className:navLinkClassNames(childItemClassName)},childItemProps,{onClick:props.onClick}))))));}function DefaultNavbarItem({mobile=false,...props}){const Comp=mobile?NavItemMobile:NavItemDesktop;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comp,props);}/* harmony default export */ __webpack_exports__["a"] = (DefaultNavbarItem);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function programmaticFocus(el){el.setAttribute('tabindex','-1');el.focus();el.removeAttribute('tabindex');}function SkipToContent(){const containerRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);const location=Object(_docusaurus_router__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();const handleSkip=e=>{e.preventDefault();const targetElement=document.querySelector('main:first-of-type')||document.querySelector('.main-wrapper');if(targetElement){programmaticFocus(targetElement);}};Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{if(!location.hash){programmaticFocus(containerRef.current);}},[location.pathname]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:containerRef},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"#main",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.skipToContent,onClick:handleSkip},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")));}/* harmony default export */ __webpack_exports__["a"] = (SkipToContent);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_hooks_useUserPreferencesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(124);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){const{isAnnouncementBarClosed,closeAnnouncementBar}=Object(_theme_hooks_useUserPreferencesContext__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();const{announcementBar}=Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__["useThemeConfig"])();if(!announcementBar){return null;}const{content,backgroundColor,textColor,isCloseable}=announcementBar;if(!content||isCloseable&&isAnnouncementBarClosed){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.announcementBar,style:{backgroundColor,color:textColor},role:"banner"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.announcementBarContent,{[_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.announcementBarCloseable]:isCloseable})// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}}),isCloseable?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{type:"button",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.announcementBarClose,onClick:closeAnnouncementBar,"aria-label":Object(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__[/* translate */ "b"])({id:'theme.AnnouncementBar.closeButtonAriaLabel',message:'Close',description:'The ARIA label for close button of announcement bar'})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{"aria-hidden":"true"},"\xD7")):null);}/* harmony default export */ __webpack_exports__["a"] = (AnnouncementBar);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(100);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(131);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLink({to,href,label,prependBaseUrlToHref,...props}){const toUrl=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(to);const normalizedHref=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(href,{forcePrependBaseUrl:true});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({className:"footer__link-item"},href?{href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl},props),label);}const FooterLogo=({sources,alt})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{className:"footer__logo",alt:alt,sources:sources});function Footer(){const{footer}=Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__["useThemeConfig"])();const{copyright,links=[],logo={}}=footer||{};const sources={light:Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(logo.src),dark:Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(logo.srcDark||logo.src)};if(!footer){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('footer',{'footer--dark':footer.style==='dark'})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},links&&links.length>0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row footer__links"},links.map((linkItem,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:i,className:"col footer__col"},linkItem.title!=null?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4",{className:"footer__title"},linkItem.title):null,linkItem.items!=null&&Array.isArray(linkItem.items)&&linkItem.items.length>0?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:"footer__items"},linkItem.items.map((item,key)=>item.html?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{key:key,className:"footer__item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{key:item.href||item.to,className:"footer__item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLink,item)))):null))),(logo||copyright)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"footer__bottom text--center"},logo&&(logo.src||logo.srcDark)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"margin-bottom--sm"},logo.href?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{href:logo.href,className:_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.footerLogoLink},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLogo,{alt:logo.alt,sources:sources})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLogo,{alt:logo.alt,sources:sources})),copyright?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"footer__copyright"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:copyright}}):null)));}/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This hook detect keyboard focus indicator to not show outline for mouse users
// Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
function useKeyboardNavigation(){Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{const keyboardFocusedClassName='navigation-with-keyboard';function handleOutlineStyles(e){if(e.type==='keydown'&&e.key==='Tab'){document.body.classList.add(keyboardFocusedClassName);}if(e.type==='mousedown'){document.body.classList.remove(keyboardFocusedClassName);}}document.addEventListener('keydown',handleOutlineStyles);document.addEventListener('mousedown',handleOutlineStyles);return()=>{document.body.classList.remove(keyboardFocusedClassName);document.removeEventListener('keydown',handleOutlineStyles);document.removeEventListener('mousedown',handleOutlineStyles);};},[]);}/* harmony default export */ __webpack_exports__["a"] = (useKeyboardNavigation);

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 109 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(118)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js + 1 modules
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(92);

// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ var Noop = (()=>null);
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/SearchBar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this file, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar

// EXTERNAL MODULE: ../node_modules/react-toggle/dist/component/index.js
var component = __webpack_require__(153);
var component_default = /*#__PURE__*/__webpack_require__.n(component);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(91);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(16);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/styles.module.css
var styles_module = __webpack_require__(59);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Dark=({icon,style})=>/*#__PURE__*/react_default.a.createElement("span",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.toggle,styles_module_default.a.dark),style:style},icon);const Light=({icon,style})=>/*#__PURE__*/react_default.a.createElement("span",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.toggle,styles_module_default.a.light),style:style},icon);/* harmony default export */ var Toggle = (function(props){const{colorMode:{switchConfig:{darkIcon,darkIconStyle,lightIcon,lightIconStyle}}}=Object(lib["useThemeConfig"])();const{isClient}=Object(useDocusaurusContext["default"])();return/*#__PURE__*/react_default.a.createElement(component_default.a,Object(esm_extends["a" /* default */])({disabled:!isClient,icons:{checked:/*#__PURE__*/react_default.a.createElement(Dark,{icon:darkIcon,style:darkIconStyle}),unchecked:/*#__PURE__*/react_default.a.createElement(Light,{icon:lightIcon,style:lightIconStyle})}},props));});
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(114);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/router.js
var router = __webpack_require__(23);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useScrollPosition.js
var useScrollPosition = __webpack_require__(127);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const useHideableNavbar=hideOnScroll=>{const location=Object(router["useLocation"])();const[isNavbarVisible,setIsNavbarVisible]=Object(react["useState"])(hideOnScroll);const isFocusedAnchor=Object(react["useRef"])(false);const[lastScrollTop,setLastScrollTop]=Object(react["useState"])(0);const[navbarHeight,setNavbarHeight]=Object(react["useState"])(0);const navbarRef=Object(react["useCallback"])(node=>{if(node!==null){setNavbarHeight(node.getBoundingClientRect().height);}},[]);Object(useScrollPosition["a" /* default */])(({scrollY:scrollTop})=>{if(!hideOnScroll){return;}if(scrollTop<navbarHeight){setIsNavbarVisible(true);return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;setIsNavbarVisible(false);setLastScrollTop(scrollTop);return;}if(lastScrollTop&&scrollTop===0){setIsNavbarVisible(true);}const documentHeight=document.documentElement.scrollHeight-navbarHeight;const windowHeight=window.innerHeight;if(lastScrollTop&&scrollTop>=lastScrollTop){setIsNavbarVisible(false);}else if(scrollTop+windowHeight<documentHeight){setIsNavbarVisible(true);}setLastScrollTop(scrollTop);},[lastScrollTop,navbarHeight,isFocusedAnchor]);Object(react["useEffect"])(()=>{if(!hideOnScroll){return;}if(!lastScrollTop){return;}setIsNavbarVisible(true);},[location.pathname]);Object(react["useEffect"])(()=>{if(!hideOnScroll){return;}if(!location.hash){return;}isFocusedAnchor.current=true;},[location.hash]);return{navbarRef,isNavbarVisible};};/* harmony default export */ var hooks_useHideableNavbar = (useHideableNavbar);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useLockBodyScroll.js
var useLockBodyScroll = __webpack_require__(128);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(129);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/DefaultNavbarItem.js
var DefaultNavbarItem = __webpack_require__(103);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconLanguage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const IconLanguage=({width=20,height=20,...props})=>{return/*#__PURE__*/react_default.a.createElement("svg",Object(esm_extends["a" /* default */])({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:width,height:height},props),/*#__PURE__*/react_default.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));};/* harmony default export */ var theme_IconLanguage = (IconLanguage);
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/LocaleDropdownNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LocaleDropdownNavbarItem({mobile,dropdownItemsBefore,dropdownItemsAfter,...props}){const{i18n:{currentLocale,locales,localeConfigs}}=Object(useDocusaurusContext["default"])();const alternatePageUtils=Object(lib["useAlternatePageUtils"])();function getLocaleLabel(locale){return localeConfigs[locale].label;}const localeItems=locales.map(locale=>{const to=`pathname://${alternatePageUtils.createUrl({locale,fullyQualified:false})}`;return{isNavLink:true,label:getLocaleLabel(locale),to,target:'_self',autoAddBaseUrl:false,className:locale===currentLocale?'dropdown__link--active':''};});const items=[...dropdownItemsBefore,...localeItems,...dropdownItemsAfter];// Mobile is handled a bit differently
const dropdownLabel=mobile?'Languages':getLocaleLabel(currentLocale);return/*#__PURE__*/react_default.a.createElement(DefaultNavbarItem["a" /* default */],Object(esm_extends["a" /* default */])({},props,{href:"#",mobile:mobile,label:/*#__PURE__*/react_default.a.createElement("span",null,/*#__PURE__*/react_default.a.createElement(theme_IconLanguage,{style:{verticalAlign:'text-bottom',marginRight:5}}),/*#__PURE__*/react_default.a.createElement("span",null,dropdownLabel)),items:items}));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/styles.module.css
var NavbarItem_styles_module = __webpack_require__(60);
var NavbarItem_styles_module_default = /*#__PURE__*/__webpack_require__.n(NavbarItem_styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/SearchNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SearchNavbarItem({mobile}){if(mobile){return null;}return/*#__PURE__*/react_default.a.createElement("div",{className:NavbarItem_styles_module_default.a.searchWrapper},/*#__PURE__*/react_default.a.createElement(Noop,null));}
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const NavbarItemComponents={default:()=>DefaultNavbarItem["a" /* default */],localeDropdown:()=>LocaleDropdownNavbarItem,search:()=>SearchNavbarItem,// Need to lazy load these items as we don't know for sure the docs plugin is loaded
// See https://github.com/facebook/docusaurus/issues/3360
docsVersion:()=>// eslint-disable-next-line @typescript-eslint/no-var-requires
__webpack_require__(158).default,docsVersionDropdown:()=>// eslint-disable-next-line @typescript-eslint/no-var-requires
__webpack_require__(159).default,doc:()=>// eslint-disable-next-line @typescript-eslint/no-var-requires
__webpack_require__(160).default};const getNavbarItemComponent=(type='default')=>{const navbarItemComponent=NavbarItemComponents[type];if(!navbarItemComponent){throw new Error(`No NavbarItem component found for type=${type}.`);}return navbarItemComponent();};function NavbarItem({type,...props}){const NavbarItemComponent=getNavbarItemComponent(type);return/*#__PURE__*/react_default.a.createElement(NavbarItemComponent,props);}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(130);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconMenu/index.js
var IconMenu = __webpack_require__(132);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/styles.module.css
var Navbar_styles_module = __webpack_require__(62);
var Navbar_styles_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// retrocompatible with v1
const DefaultNavItemPosition='right';// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items){const leftItems=items.filter(item=>{var _item$position;return((_item$position=item.position)!==null&&_item$position!==void 0?_item$position:DefaultNavItemPosition)==='left';});const rightItems=items.filter(item=>{var _item$position2;return((_item$position2=item.position)!==null&&_item$position2!==void 0?_item$position2:DefaultNavItemPosition)==='right';});return{leftItems,rightItems};}function Navbar(){const{navbar:{items,hideOnScroll,style},colorMode:{disableSwitch:disableColorModeSwitch}}=Object(lib["useThemeConfig"])();const[sidebarShown,setSidebarShown]=Object(react["useState"])(false);const{isDarkTheme,setLightTheme,setDarkTheme}=Object(useThemeContext["a" /* default */])();const{navbarRef,isNavbarVisible}=hooks_useHideableNavbar(hideOnScroll);Object(useLockBodyScroll["a" /* default */])(sidebarShown);const showSidebar=Object(react["useCallback"])(()=>{setSidebarShown(true);},[setSidebarShown]);const hideSidebar=Object(react["useCallback"])(()=>{setSidebarShown(false);},[setSidebarShown]);const onToggleChange=Object(react["useCallback"])(e=>e.target.checked?setDarkTheme():setLightTheme(),[setLightTheme,setDarkTheme]);const windowSize=Object(useWindowSize["a" /* default */])();Object(react["useEffect"])(()=>{if(windowSize===useWindowSize["b" /* windowSizes */].desktop){setSidebarShown(false);}},[windowSize]);const hasSearchNavbarItem=items.some(item=>item.type==='search');const{leftItems,rightItems}=splitNavItemsByPosition(items);return/*#__PURE__*/react_default.a.createElement("nav",{ref:navbarRef,className:Object(clsx_m["a" /* default */])('navbar','navbar--fixed-top',{'navbar--dark':style==='dark','navbar--primary':style==='primary','navbar-sidebar--show':sidebarShown,[Navbar_styles_module_default.a.navbarHideable]:hideOnScroll,[Navbar_styles_module_default.a.navbarHidden]:hideOnScroll&&!isNavbarVisible})},/*#__PURE__*/react_default.a.createElement("div",{className:"navbar__inner"},/*#__PURE__*/react_default.a.createElement("div",{className:"navbar__items"},items!=null&&items.length!==0&&/*#__PURE__*/react_default.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:showSidebar,onKeyDown:showSidebar},/*#__PURE__*/react_default.a.createElement(IconMenu["a" /* default */],null)),/*#__PURE__*/react_default.a.createElement(Logo["a" /* default */],{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(clsx_m["a" /* default */])('navbar__title')}),leftItems.map((item,i)=>/*#__PURE__*/react_default.a.createElement(NavbarItem,Object(esm_extends["a" /* default */])({},item,{key:i})))),/*#__PURE__*/react_default.a.createElement("div",{className:"navbar__items navbar__items--right"},rightItems.map((item,i)=>/*#__PURE__*/react_default.a.createElement(NavbarItem,Object(esm_extends["a" /* default */])({},item,{key:i}))),!disableColorModeSwitch&&/*#__PURE__*/react_default.a.createElement(Toggle,{className:Navbar_styles_module_default.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:isDarkTheme,onChange:onToggleChange}),!hasSearchNavbarItem&&/*#__PURE__*/react_default.a.createElement(Noop,null))),/*#__PURE__*/react_default.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:hideSidebar}),/*#__PURE__*/react_default.a.createElement("div",{className:"navbar-sidebar"},/*#__PURE__*/react_default.a.createElement("div",{className:"navbar-sidebar__brand"},/*#__PURE__*/react_default.a.createElement(Logo["a" /* default */],{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:hideSidebar}),!disableColorModeSwitch&&sidebarShown&&/*#__PURE__*/react_default.a.createElement(Toggle,{"aria-label":"Dark mode toggle in sidebar",checked:isDarkTheme,onChange:onToggleChange})),/*#__PURE__*/react_default.a.createElement("div",{className:"navbar-sidebar__items"},/*#__PURE__*/react_default.a.createElement("div",{className:"menu"},/*#__PURE__*/react_default.a.createElement("ul",{className:"menu__list"},items.map((item,i)=>/*#__PURE__*/react_default.a.createElement(NavbarItem,Object(esm_extends["a" /* default */])({mobile:true},item,{// TODO fix typing
onClick:hideSidebar,key:i}))))))));}/* harmony default export */ var theme_Navbar = __webpack_exports__["a"] = (Navbar);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LayoutProviders; });

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(8);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(91);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const themes={light:'light',dark:'dark'};// Ensure to always return a valid theme even if input is invalid
const coerceToTheme=theme=>{return theme===themes.dark?themes.dark:themes.light;};const getInitialTheme=defaultMode=>{if(!ExecutionEnvironment["a" /* default */].canUseDOM){return coerceToTheme(defaultMode);}return coerceToTheme(document.documentElement.getAttribute('data-theme'));};const storeTheme=newTheme=>{try{localStorage.setItem('theme',coerceToTheme(newTheme));}catch(err){console.error(err);}};const useTheme=()=>{const{colorMode:{defaultMode,disableSwitch,respectPrefersColorScheme}}=Object(lib["useThemeConfig"])();const[theme,setTheme]=Object(react["useState"])(getInitialTheme(defaultMode));const setLightTheme=Object(react["useCallback"])(()=>{setTheme(themes.light);storeTheme(themes.light);},[]);const setDarkTheme=Object(react["useCallback"])(()=>{setTheme(themes.dark);storeTheme(themes.dark);},[]);Object(react["useEffect"])(()=>{document.documentElement.setAttribute('data-theme',coerceToTheme(theme));},[theme]);Object(react["useEffect"])(()=>{if(disableSwitch){return;}try{const localStorageTheme=localStorage.getItem('theme');if(localStorageTheme!==null){setTheme(coerceToTheme(localStorageTheme));}}catch(err){console.error(err);}},[setTheme]);Object(react["useEffect"])(()=>{if(disableSwitch&&!respectPrefersColorScheme){return;}window.matchMedia('(prefers-color-scheme: dark)').addListener(({matches})=>{setTheme(matches?themes.dark:themes.light);});},[]);return{isDarkTheme:theme===themes.dark,setLightTheme,setDarkTheme};};/* harmony default export */ var hooks_useTheme = (useTheme);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeContext.js
var ThemeContext = __webpack_require__(126);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemeProvider(props){const{isDarkTheme,setLightTheme,setDarkTheme}=hooks_useTheme();return/*#__PURE__*/react_default.a.createElement(ThemeContext["a" /* default */].Provider,{value:{isDarkTheme,setLightTheme,setDarkTheme}},props.children);}/* harmony default export */ var theme_ThemeProvider = (ThemeProvider);
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTabGroupChoice.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const TAB_CHOICE_PREFIX='docusaurus.tab.';const useTabGroupChoice=()=>{const[tabGroupChoices,setChoices]=Object(react["useState"])({});const setChoiceSyncWithLocalStorage=Object(react["useCallback"])((groupId,newChoice)=>{try{localStorage.setItem(`${TAB_CHOICE_PREFIX}${groupId}`,newChoice);}catch(err){console.error(err);}},[]);Object(react["useEffect"])(()=>{try{const localStorageChoices={};for(let i=0;i<localStorage.length;i+=1){const storageKey=localStorage.key(i);if(storageKey.startsWith(TAB_CHOICE_PREFIX)){const groupId=storageKey.substring(TAB_CHOICE_PREFIX.length);localStorageChoices[groupId]=localStorage.getItem(storageKey);}}setChoices(localStorageChoices);}catch(err){console.error(err);}},[]);return{tabGroupChoices,setTabGroupChoices:(groupId,newChoice)=>{setChoices(oldChoices=>({...oldChoices,[groupId]:newChoice}));setChoiceSyncWithLocalStorage(groupId,newChoice);}};};/* harmony default export */ var hooks_useTabGroupChoice = (useTabGroupChoice);
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useAnnouncementBar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const STORAGE_DISMISS_KEY='docusaurus.announcement.dismiss';const STORAGE_ID_KEY='docusaurus.announcement.id';const useAnnouncementBar=()=>{const{announcementBar}=Object(lib["useThemeConfig"])();const[isClosed,setClosed]=Object(react["useState"])(true);const handleClose=Object(react["useCallback"])(()=>{localStorage.setItem(STORAGE_DISMISS_KEY,'true');setClosed(true);},[]);Object(react["useEffect"])(()=>{if(!announcementBar){return;}const{id}=announcementBar;let viewedId=localStorage.getItem(STORAGE_ID_KEY);// retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}const isNewAnnouncement=id!==viewedId;localStorage.setItem(STORAGE_ID_KEY,id);if(isNewAnnouncement){localStorage.setItem(STORAGE_DISMISS_KEY,'false');}if(isNewAnnouncement||localStorage.getItem(STORAGE_DISMISS_KEY)==='false'){setClosed(false);}},[]);return{isAnnouncementBarClosed:isClosed,closeAnnouncementBar:handleClose};};/* harmony default export */ var hooks_useAnnouncementBar = (useAnnouncementBar);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesContext.js
var UserPreferencesContext = __webpack_require__(125);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UserPreferencesProvider(props){const{tabGroupChoices,setTabGroupChoices}=hooks_useTabGroupChoice();const{isAnnouncementBarClosed,closeAnnouncementBar}=hooks_useAnnouncementBar();return/*#__PURE__*/react_default.a.createElement(UserPreferencesContext["a" /* default */].Provider,{value:{tabGroupChoices,setTabGroupChoices,isAnnouncementBarClosed,closeAnnouncementBar}},props.children);}/* harmony default export */ var theme_UserPreferencesProvider = (UserPreferencesProvider);
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutProviders/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LayoutProviders({children}){return/*#__PURE__*/react_default.a.createElement(theme_ThemeProvider,null,/*#__PURE__*/react_default.a.createElement(theme_UserPreferencesProvider,null,/*#__PURE__*/react_default.a.createElement(lib["DocsPreferredVersionContextProvider"],null,children)));}

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LayoutHead; });

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js + 1 modules
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(26);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(16);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(100);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/SearchMetadatas/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note: we don't couple this to Algolia/DocSearch on purpose
// We may want to support other search engine plugins too
// Search plugins should swizzle/override this comp to add their behavior
function SearchMetadatas({locale,version,tag}){return/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,locale&&/*#__PURE__*/react_default.a.createElement("meta",{name:"docusaurus_locale",content:`${locale}`}),version&&/*#__PURE__*/react_default.a.createElement("meta",{name:"docusaurus_version",content:version}),tag&&/*#__PURE__*/react_default.a.createElement("meta",{name:"docusaurus_tag",content:tag}));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(133);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(91);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/router.js
var router = __webpack_require__(23);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutHead/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Useful for SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(){const{i18n:{defaultLocale,locales}}=Object(useDocusaurusContext["default"])();const alternatePageUtils=Object(lib["useAlternatePageUtils"])();// Note: it is fine to use both "x-default" and "en" to target the same url
// See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
return/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,locales.map(locale=>/*#__PURE__*/react_default.a.createElement("link",{key:locale,rel:"alternate",href:alternatePageUtils.createUrl({locale,fullyQualified:true}),hrefLang:locale})),/*#__PURE__*/react_default.a.createElement("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:defaultLocale,fullyQualified:true}),hrefLang:"x-default"}));}// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl(){const{siteConfig:{url:siteUrl}}=Object(useDocusaurusContext["default"])();const{pathname}=Object(router["useLocation"])();return siteUrl+Object(useBaseUrl["a" /* default */])(pathname);}function CanonicalUrlHeaders({permalink}){const{siteConfig:{url:siteUrl}}=Object(useDocusaurusContext["default"])();const defaultCanonicalUrl=useDefaultCanonicalUrl();const canonicalUrl=permalink?`${siteUrl}${permalink}`:defaultCanonicalUrl;return/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,/*#__PURE__*/react_default.a.createElement("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/react_default.a.createElement("link",{rel:"canonical",href:canonicalUrl}));}function LayoutHead(props){const{siteConfig,i18n:{currentLocale,localeConfigs}}=Object(useDocusaurusContext["default"])();const{favicon,themeConfig:{image:defaultImage,metadatas}}=siteConfig;const{title,description,image,keywords,searchMetadatas}=props;const faviconUrl=Object(useBaseUrl["a" /* default */])(favicon);// See https://github.com/facebook/docusaurus/issues/3317#issuecomment-754661855
// const htmlLang = currentLocale.split('-')[0];
const htmlLang=currentLocale;// should we allow the user to override htmlLang with localeConfig?
const htmlDir=localeConfigs[currentLocale].direction;return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,/*#__PURE__*/react_default.a.createElement("html",{lang:htmlLang,dir:htmlDir}),favicon&&/*#__PURE__*/react_default.a.createElement("link",{rel:"shortcut icon",href:faviconUrl})),/*#__PURE__*/react_default.a.createElement(Seo["a" /* default */],{title,description,keywords,image:image||defaultImage}),/*#__PURE__*/react_default.a.createElement(CanonicalUrlHeaders,null),/*#__PURE__*/react_default.a.createElement(AlternateLangHeaders,null),/*#__PURE__*/react_default.a.createElement(SearchMetadatas,Object(esm_extends["a" /* default */])({tag:lib["DEFAULT_SEARCH_TAG"],locale:currentLocale},searchMetadatas)),/*#__PURE__*/react_default.a.createElement(Head["a" /* default */]// it's important to have an additional <Head> element here,
// as it allows react-helmet to override values set in previous <Head>
// ie we can override default metadatas such as "twitter:card"
// In same Head, the same meta would appear twice instead of overriding
// See react-helmet doc
,null,metadatas.map((metadata,i)=>/*#__PURE__*/react_default.a.createElement("meta",Object(esm_extends["a" /* default */])({key:`metadata_${i}`},metadata)))));}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(126);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeContext(){const context=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);if(context==null){throw new Error('`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.');}return context;}/* harmony default export */ __webpack_exports__["a"] = (useThemeContext);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isInternalUrl; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(\w*:|\/\/)/.test(url)===true;}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),
/* 116 */,
/* 117 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export $mobx */
/* unused harmony export FlowCancellationError */
/* unused harmony export ObservableMap */
/* unused harmony export ObservableSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reaction; });
/* unused harmony export _allowStateChanges */
/* unused harmony export _allowStateChangesInsideComputed */
/* unused harmony export _allowStateReadsEnd */
/* unused harmony export _allowStateReadsStart */
/* unused harmony export _autoAction */
/* unused harmony export _endAction */
/* unused harmony export _getAdministration */
/* unused harmony export _getGlobalState */
/* unused harmony export _interceptReads */
/* unused harmony export _isComputingDerivation */
/* unused harmony export _resetGlobalState */
/* unused harmony export _startAction */
/* unused harmony export action */
/* unused harmony export autorun */
/* unused harmony export comparer */
/* unused harmony export computed */
/* unused harmony export configure */
/* unused harmony export createAtom */
/* unused harmony export entries */
/* unused harmony export extendObservable */
/* unused harmony export flow */
/* unused harmony export flowResult */
/* unused harmony export get */
/* unused harmony export getAtom */
/* unused harmony export getDebugName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDependencyTree; });
/* unused harmony export getObserverTree */
/* unused harmony export has */
/* unused harmony export intercept */
/* unused harmony export isAction */
/* unused harmony export isBoxedObservable */
/* unused harmony export isComputed */
/* unused harmony export isComputedProp */
/* unused harmony export isFlowCancellationError */
/* unused harmony export isObservable */
/* unused harmony export isObservableArray */
/* unused harmony export isObservableMap */
/* unused harmony export isObservableObject */
/* unused harmony export isObservableProp */
/* unused harmony export isObservableSet */
/* unused harmony export keys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return makeAutoObservable; });
/* unused harmony export makeObservable */
/* unused harmony export observable */
/* unused harmony export observe */
/* unused harmony export onBecomeObserved */
/* unused harmony export onBecomeUnobserved */
/* unused harmony export onReactionError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reaction; });
/* unused harmony export remove */
/* unused harmony export runInAction */
/* unused harmony export set */
/* unused harmony export spy */
/* unused harmony export toJS */
/* unused harmony export trace */
/* unused harmony export transaction */
/* unused harmony export untracked */
/* unused harmony export values */
/* unused harmony export when */
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(prop) {
    return "Cannot decorate undefined property: '" + prop.toString() + "'";
  },
  2: function _(prop) {
    return "invalid decorator for '" + prop.toString() + "'";
  },
  3: function _(prop) {
    return "Cannot decorate '" + prop.toString() + "': action can only be used on properties with a function value.";
  },
  4: function _(prop) {
    return "Cannot decorate '" + prop.toString() + "': computed can only be used on getter properties.";
  },
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  }
};
var errors =  false ? undefined : {};
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (false) { var e; }

  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/mobx6/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};
function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die( false ? undefined : "Proxy not available");
  }
}
function warnAboutProxyRequirement(msg) {
  if (false) {}
}
function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */

function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;

  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }

  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  var _proto$constructor;

  if (!isObject(value)) return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null) return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
} // https://stackoverflow.com/a/37865170

function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) return false;
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function assertPropertyConfigurable(object, prop) {
  if (false) { var descriptor; }
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */

function getPlainObjectKeys(object) {
  var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

  if (!hasGetOwnPropertySymbols) return keys;
  var symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) return keys;
  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string") return key;
  if (typeof key === "symbol") return key.toString();
  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};

var mobxDecoratorsSymbol = /*#__PURE__*/Symbol("mobx-decorators");
var mobxAppliedDecoratorsSymbol = /*#__PURE__*/Symbol("mobx-applied-decorators");
function createDecorator(type) {
  return assign(function (target, property) {
    if (property === undefined) {
      // @decorator(arg) member
      createDecoratorAndAnnotation(type, target);
    } else {
      // @decorator member
      storeDecorator(target, property, type);
    }
  }, {
    annotationType_: type
  });
}
function createDecoratorAndAnnotation(type, arg_) {
  return assign(function (target, property) {
    storeDecorator(target, property, type, arg_);
  }, {
    annotationType_: type,
    arg_: arg_
  });
}
function storeDecorator(target, property, type, arg_) {
  var desc = getDescriptor(target, mobxDecoratorsSymbol);
  var map;

  if (desc) {
    map = desc.value;
  } else {
    map = {};
    addHiddenProp(target, mobxDecoratorsSymbol, map);
  }

  map[property] = {
    annotationType_: type,
    arg_: arg_
  };
}
function applyDecorators(target) {
  if (target[mobxAppliedDecoratorsSymbol]) return true;
  var current = target; // optimization: this could be cached per prototype!
  // (then we can remove the weird short circuiting as well..)

  var annotations = [];

  while (current && current !== objectPrototype) {
    var desc = getDescriptor(current, mobxDecoratorsSymbol);

    if (desc) {
      if (!annotations.length) {
        for (var key in desc.value) {
          // second conditions is to recognize actions
          if (!hasProp(target, key) && !hasProp(current, key)) {
            // not all fields are defined yet, so we are in the makeObservable call of some super class,
            // short circuit, here, we will do this again in a later makeObservable call
            return true;
          }
        }
      }

      annotations.unshift(desc.value);
    }

    current = Object.getPrototypeOf(current);
  }

  annotations.forEach(function (a) {
    makeObservable(target, a);
  });
  addHiddenProp(target, mobxAppliedDecoratorsSymbol, true);
  return annotations.length > 0;
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
var Atom = /*#__PURE__*/function () {
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ = "Atom@" + getNextId();
    }

    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  } // onBecomeObservedListeners


  var _proto = Atom.prototype;

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  ;

  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  ;

  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  _proto.toString = function toString() {
    return this.name_;
  };

  return Atom;
}();
var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  return Object.is(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  if (false) {}
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if (false) {}
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

var _annotationToEnhancer;
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct"; // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases

var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
function getEnhancerFromOption(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
var annotationToEnhancer = (_annotationToEnhancer = {}, _annotationToEnhancer[OBSERVABLE] = deepEnhancer, _annotationToEnhancer[OBSERVABLE_REF] = referenceEnhancer, _annotationToEnhancer[OBSERVABLE_SHALLOW] = shallowEnhancer, _annotationToEnhancer[OBSERVABLE_STRUCT] = refStructEnhancer, _annotationToEnhancer);
function getEnhancerFromAnnotation(annotation) {
  var _annotationToEnhancer2;

  return !annotation ? deepEnhancer : (_annotationToEnhancer2 = annotationToEnhancer[annotation.annotationType_]) != null ? _annotationToEnhancer2 : die(12);
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (isStringish(arg2)) {
    storeDecorator(v, arg2, OBSERVABLE);
    return;
  } // it is an observable already, done


  if (isObservable(v)) return v; // something that can be converted and mutated?

  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v; // this value could be converted to a new observable data structure, return it

  if (res !== v) return res;
  return observable.box(v);
}

createObservable.annotationType_ = OBSERVABLE;
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOption(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOption(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOption(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOption(o), o.name);
  },
  object: function object(props, decorators, options) {
    var o = asCreateObservableOptions(options);
    var base = {};
    asObservableObject(base, options == null ? void 0 : options.name, getEnhancerFromOption(o));
    return extendObservable(globalState.useProxies === false || o.proxy === false ? base : createDynamicObservableObject(base), props, decorators, options);
  },
  ref: /*#__PURE__*/createDecorator(OBSERVABLE_REF),
  shallow: /*#__PURE__*/createDecorator(OBSERVABLE_SHALLOW),
  deep: /*#__PURE__*/createDecorator(OBSERVABLE),
  struct: /*#__PURE__*/createDecorator(OBSERVABLE_STRUCT)
}; // eslint-disable-next-line

var observable = /*#__PURE__*/assign(createObservable, observableFactories);

var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2, arg3) {
  if (isStringish(arg2)) {
    // @computed
    return storeDecorator(arg1, arg2, COMPUTED);
  }

  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAndAnnotation(COMPUTED, arg1);
  } // computed(expr, options?)


  if (false) {}

  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name = opts.name || arg1.name || "";
  /* for generated name */

  return new ComputedValue(opts);
};
computed.annotationType_ = COMPUTED;
computed.struct = /*#__PURE__*/assign(function (target, property) {
  storeDecorator(target, property, COMPUTED_STRUCT);
}, {
  annotationType_: COMPUTED_STRUCT
});

var _getDescriptor$config, _getDescriptor;
// mobx versions

var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }

  if (false) {}

  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }

  res.isMobxAction = true;

  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }

  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
  var notifySpy_ =  false && false;
  var startTime_ = 0;

  if (false) { var flattenedArgs; }

  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }

  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }

  currentActionId = runInfo.parentActionId_;

  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);

  if (false) {}

  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);

  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /*#__PURE__*/function (_Atom) {
  _inheritsLoose(ObservableValue, _Atom);

  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;

    if (name_ === void 0) {
      name_ = "ObservableValue@" + getNextId();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer["default"];
    }

    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);

    if (false) {}

    return _this;
  }

  var _proto = ObservableValue.prototype;

  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (false) {}

      this.setNewValue_(newValue);
      if (false) {}
    }
  };

  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };

  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) listener({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: UPDATE,
      newValue: this.value_,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };

  _proto.toJSON = function toJSON() {
    return this.get();
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/createInstanceofPredicate("ObservableValue", ObservableValue);

var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  // during tracking it's an array with new observed observers
  // to check for cycles
  // N.B: unminified as it is used by MST

  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.mapid_ = "#" + getNextId();
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) die(31);
    this.derivation = options.get;
    this.name_ = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter_ = createAction(this.name_ + "-setter", options.set);
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }

  var _proto = ComputedValue.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ;

  _proto.get = function get() {
    if (this.isComputing_) die(32, this.name_, this.derivation);

    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'

        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);

      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
        if (this.trackAndCompute()) propagateChangeConfirmed(this);
        globalState.trackingContext = prevTrackingContext;
      }
    }

    var result = this.value_;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) die(33, this.name_);
      this.isRunningSetter_ = true;

      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else die(34, this.name_);
  };

  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);

    if (false) {}

    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

    if (changed) {
      this.value_ = newValue;
    }

    return changed;
  };

  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true; // don't allow state changes during computation

    var prev = allowStateChangesStart(false);
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };

  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!
    }
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (true) return;

    if (this.requiresReaction_ === true) {
      die("[mobx] Computed value " + this.name_ + " is read outside a reactive context");
    }

    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name_ + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive$1] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}();
var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

var IDerivationState_;

(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause; // Empty
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */

function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;

    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;

    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing_,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  if (true) {
    return;
  }

  var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed(observable) {
  if (false) {}
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */

function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (true) return;
  if (derivation.observing_.length !== 0) return;

  if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation " + derivation.name_ + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount_;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }

  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }

    _dep.diffValue_ = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */

function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}

/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"];
var MobXGlobals = function MobXGlobals() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) die(36);
  isolateCalled = true;

  if (canMergeGlobalState) {
    var global = getGlobal();
    if (--global.__mobxInstanceCount === 0) global.__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */

function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }

function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);
  if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);

  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation_ === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */

function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation_ = false;

      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved_) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved_ = false;
          observable.onBUO();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

      if (!observable.isBeingObserved_ && globalState.trackingContext) {
        observable.isBeingObserved_ = true;
        observable.onBO();
      }
    }

    return true;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes

function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if (false) {}

      d.onBecomeStale_();
    }

    d.dependenciesState_ = IDerivationState_.STALE_;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed

function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) d.dependenciesState_ = IDerivationState_.STALE_;else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;

      if (false) {}

      d.onBecomeStale_();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = "Reaction@" + getNextId();
    }

    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }

    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.mapid_ = "#" + getNextId();
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }

  var _proto = Reaction.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };

  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  ;

  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;

      if (shouldCompute(this)) {
        this.isTrackPending_ = true;

        try {
          this.onInvalidate_();

          if (false) {}
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }

      endBatch();
    }
  };

  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (false) {}

    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...

    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;

    if (this.isDisposed_) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);

    if (false) {}

    endBatch();
  };

  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;

    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message =  false ? undefined : "[mobx] uncaught error in '" + this + "'";

    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (false) {} // prettier-ignore


    if (false) {}

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;

      if (!this.isRunning_) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };

  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */

var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error( false ? undefined : "[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return  false && false;
}
function spyReport(event) {
  if (true) return; // dead code elimination can do the rest

  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (true) return;

  var change = _extends({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (true) return;
  if (change) spyReport(_extends({}, change, {
    type: "report-end",
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}
function spy(listener) {
  if (true) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function () {};
  } else {}
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var ACTION_UNNAMED = "<unnamed action>";

function createActionFactory(autoAction, annotation) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) return createAction(arg1.name || ACTION_UNNAMED, arg1, autoAction); // action("name", fn() {})

    if (isFunction(arg2)) return createAction(arg1, arg2, autoAction); // @action

    if (isStringish(arg2)) {
      return storeDecorator(arg1, arg2, annotation);
    } // Annation: action("name") & @action("name")


    if (isStringish(arg1)) {
      return createDecoratorAndAnnotation(annotation, arg1);
    }

    if (false) {}
  };

  res.annotationType_ = annotation;
  return res;
}

var action = /*#__PURE__*/createActionFactory(false, ACTION);
var autoAction = /*#__PURE__*/createActionFactory(true, AUTOACTION);
action.bound = /*#__PURE__*/createDecorator(ACTION_BOUND);
autoAction.bound = /*#__PURE__*/createDecorator(AUTOACTION_BOUND);
function runInAction(fn) {
  return executeAction(fn.name || ACTION_UNNAMED, false, fn, this, undefined);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */

function autorun(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (false) {}

  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;
          if (!reaction.isDisposed_) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule_();
  return reaction.getDisposer_();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (false) {}

  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var oldValue = undefined; // only an issue with fireImmediately

  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false;
    if (r.isDisposed_) return;
    var changed = false;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      oldValue = value;
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);else if (!firstTime && changed) effectAction(value, oldValue, r);
    firstTime = false;
  }

  r.schedule_();
  return r.getDisposer_();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners["delete"](cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"

function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  var useProxies = options.useProxies,
      enforceActions = options.enforceActions;

  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }

  if (useProxies === "ifavailable") globalState.verifyProxies = true;

  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries"].forEach(function (key) {
    if (key in options) globalState[key] = !!options[key];
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;

  if (false) {}

  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (false) {}

  var o = asCreateObservableOptions(options);
  var adm = asObservableObject(target, o.name, getEnhancerFromOption(o));
  startBatch();

  try {
    var descs = getOwnPropertyDescriptors(properties);
    getPlainObjectKeys(descs).forEach(function (key) {
      makeProperty(adm, target, key, descs[key], !annotations ? true : key in annotations ? annotations[key] : true, true, !!(options == null ? void 0 : options.autoBind));
    });
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };
  if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  return result;
}

function unique(list) {
  return Array.from(new Set(list));
}

var FLOW = "flow";
var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow
  if (isStringish(arg2)) {
    return storeDecorator(arg1, arg2, "flow");
  } // flow(fn)


  if (false) {}
  var generator = arg1;
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };

  res.isMobXFlow = true;
  return res;
}, {
  annotationType_: "flow"
});

function cancelPromise(promise) {
  if (isFunction(promise.cancel)) promise.cancel();
}

function flowResult(result) {
  return result; // just tricking TypeScript :)
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (false) {}
    target = getAdministration(thing, propOrHandler);
  } else if (false) {}

  if (false) {}
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value[$mobx].values_.has(property)) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}
function isComputed(value) {
  if (false) {}
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if (false) {}
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) return false;

  if (property !== undefined) {
    if (false) {}

    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if (false) {}
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if (false) {}
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].getKeys_();
  }

  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;

    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    var adm = obj[$mobx];
    var existingObservable = adm.values_.get(key);

    if (existingObservable) {
      adm.write_(key, value);
    } else {
      adm.addObservableProp_(key, value, adm.defaultEnhancer_);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    if (key < 0) die("Invalid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else die(8);
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].remove_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    return getAdministration(obj).has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }

  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }

  die(11);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}

function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), __alreadySeen);

  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }

  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());

    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }

  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());

    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    keys(source); // make sure keys are observed

    var _res3 = cache(__alreadySeen, source, {});

    getPlainObjectKeys(source).forEach(function (key) {
      _res3[key] = toJSHelper(source[key], __alreadySeen);
    });
    return _res3;
  }
}
/**
 * Basically, a deep clone, so that no reactive property will exist anymore.
 */


function toJS(source, options) {
  if (false) {}
  return toJSHelper(source, new Map());
}

function trace() {
  if (true) die("trace() is not available in production builds");
  var enterBreakPoint = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }

  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */

function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed_) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect); // eslint-disable-next-line

  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);

    if (cond) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if (false) {}
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if (name === $mobx || name === "constructor") return true;
    if (false) {}
    var adm = getAdm(target); // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
    // check performance stats!
    // if (adm.values.get(name as string)) return true

    if (isStringish(name)) return adm.has_(name);
    return name in target;
  },
  get: function get(target, name) {
    if (name === $mobx || name === "constructor") return target[name];
    var adm = getAdm(target);
    var observable = adm.values_.get(name);

    if (observable instanceof Atom) {
      var result = observable.get();

      if (result === undefined) {
        // This fixes #1796, because deleting a prop that has an
        // undefined value won't retrigger a observer (no visible effect),
        // the autorun wouldn't subscribe to future key changes (see also next comment)
        adm.has_(name);
      }

      return result;
    } // make sure we start listening to future keys
    // note that we only do this here for optimization


    if (isStringish(name)) adm.has_(name);
    return target[name];
  },
  set: function set$1(target, name, value) {
    if (!isStringish(name)) return false;

    if (false) {}

    set(target, name, value);

    return true;
  },
  deleteProperty: function deleteProperty(target, name) {
    if (false) {}
    if (!isStringish(name)) return false;
    var adm = getAdm(target);
    adm.remove_(name);
    return true;
  },
  ownKeys: function ownKeys(target) {
    if (false) {}
    var adm = getAdm(target);
    adm.keysAtom_.reportObserved();
    return Reflect.ownKeys(target);
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function createDynamicObservableObject(base) {
  assertProxies();
  var proxy = new Proxy(base, objectProxyTraps);
  base[$mobx].proxy_ = proxy;
  return proxy;
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type) die(14);
      if (!change) break;
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

var CACHED_ANNOTATIONS = /*#__PURE__*/Symbol("mobx-cached-annotations");

function makeAction(target, key, name, fn, asAutoAction) {
  addHiddenProp(target, key, asAutoAction ? autoAction(name || key, fn) : action(name || key, fn));
}

function getInferredAnnotation(desc, defaultAnnotation, autoBind) {
  if (desc.get) return computed;
  if (desc.set) return false; // ignore pure setters
  // if already wrapped in action, don't do that another time, but assume it is already set up properly

  if (isFunction(desc.value)) return isGenerator(desc.value) ? flow : isAction(desc.value) ? false : autoBind ? autoAction.bound : autoAction; // if (!desc.configurable || !desc.writable) return false

  return defaultAnnotation != null ? defaultAnnotation : observable.deep;
}

function getDescriptorInChain(target, prop) {
  var current = target;

  while (current && current !== objectPrototype) {
    // Optimization: cache meta data, especially for members from prototypes?
    var desc = getDescriptor(current, prop);

    if (desc) {
      return [desc, current];
    }

    current = Object.getPrototypeOf(current);
  }

  die(1, prop);
}

function makeProperty(adm, owner, key, descriptor, annotation, forceCopy, // extend observable will copy even unannotated properties
autoBind) {
  var _annotation$annotatio;

  var target = adm.target_;
  var defaultAnnotation = observable; // ideally grap this from adm's defaultEnahncer instead!

  var originAnnotation = annotation;

  if (annotation === true) {
    annotation = getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
  }

  if (annotation === false) {
    if (forceCopy) {
      defineProperty(target, key, descriptor);
    }

    return;
  }

  if (!annotation || annotation === true || !annotation.annotationType_) {
    return die(2, key);
  }

  var type = annotation.annotationType_;

  switch (type) {
    case AUTOACTION:
    case ACTION:
      {
        var fn = descriptor.value;
        if (!isFunction(fn)) die(3, key);

        if (owner !== target && !forceCopy) {
          if (!isAction(owner[key])) makeAction(owner, key, annotation.arg_, fn, type === AUTOACTION);
        } else {
          makeAction(target, key, annotation.arg_, fn, type === AUTOACTION);
        }

        break;
      }

    case AUTOACTION_BOUND:
    case ACTION_BOUND:
      {
        var _fn = descriptor.value;
        if (!isFunction(_fn)) die(3, key);
        makeAction(target, key, annotation.arg_, _fn.bind(adm.proxy_ || target), type === AUTOACTION_BOUND);
        break;
      }

    case FLOW:
      {
        if (owner !== target && !forceCopy) {
          if (!isFlow(owner[key])) addHiddenProp(owner, key, flow(descriptor.value));
        } else {
          addHiddenProp(target, key, flow(descriptor.value));
        }

        break;
      }

    case COMPUTED:
    case COMPUTED_STRUCT:
      {
        if (!descriptor.get) die(4, key);
        adm.addComputedProp_(target, key, _extends({
          get: descriptor.get,
          set: descriptor.set,
          compareStructural: annotation.annotationType_ === COMPUTED_STRUCT
        }, annotation.arg_));
        break;
      }

    case OBSERVABLE:
    case OBSERVABLE_REF:
    case OBSERVABLE_SHALLOW:
    case OBSERVABLE_STRUCT:
      {
        if (false) {}
        if (false) {} // if the originAnnotation was true, preferred the adm's default enhancer over the inferred one

        var enhancer = originAnnotation === true ? adm.defaultEnhancer_ : getEnhancerFromAnnotation(annotation);
        adm.addObservableProp_(key, descriptor.value, enhancer);
        break;
      }

    default:
      if (false) {}
  }
}
function makeObservable(target, annotations, options) {
  var autoBind = !!(options == null ? void 0 : options.autoBind);
  var adm = asObservableObject(target, options == null ? void 0 : options.name, getEnhancerFromAnnotation(options == null ? void 0 : options.defaultDecorator));
  startBatch();

  try {
    if (!annotations) {
      var didDecorate = applyDecorators(target);
      if (false) {}
      return target;
    }

    var make = function make(key) {
      var annotation = annotations[key];

      var _getDescriptorInChain = getDescriptorInChain(target, key),
          desc = _getDescriptorInChain[0],
          owner = _getDescriptorInChain[1];

      makeProperty(adm, owner, key, desc, annotation, false, autoBind);
    };

    ownKeys(annotations).forEach(make);
  } finally {
    endBatch();
  }

  return target;
}
function makeAutoObservable(target, overrides, options) {
  var proto = Object.getPrototypeOf(target);
  var isPlain = proto == null || proto === objectPrototype;

  if (false) {}

  var annotations;

  if (!isPlain && hasProp(proto, CACHED_ANNOTATIONS)) {
    // shortcut, reuse inferred annotations for this type from the previous time
    annotations = proto[CACHED_ANNOTATIONS];
  } else {
    annotations = _extends({}, overrides);
    extractAnnotationsFromObject(target, annotations, options);

    if (!isPlain) {
      extractAnnotationsFromProto(proto, annotations, options);
      addHiddenProp(proto, CACHED_ANNOTATIONS, annotations);
    }
  }

  makeObservable(target, annotations, options);
  return target;
}

function extractAnnotationsFromObject(target, collector, options) {
  var _options$defaultDecor;

  var autoBind = !!(options == null ? void 0 : options.autoBind);
  var defaultAnnotation = (options == null ? void 0 : options.deep) === undefined ? (_options$defaultDecor = options == null ? void 0 : options.defaultDecorator) != null ? _options$defaultDecor : observable.deep : (options == null ? void 0 : options.deep) ? observable.deep : observable.ref;
  Object.entries(getOwnPropertyDescriptors(target)).forEach(function (_ref) {
    var key = _ref[0],
        descriptor = _ref[1];
    if (key in collector || key === "constructor") return;
    collector[key] = getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
  });
}

function extractAnnotationsFromProto(proto, collector, options) {
  Object.entries(getOwnPropertyDescriptors(proto)).forEach(function (_ref2) {
    var key = _ref2[0],
        prop = _ref2[1];
    if (key in collector || key === "constructor") return;

    if (prop.get) {
      collector[key] = computed;
    } else if (isFunction(prop.value)) {
      collector[key] = isGenerator(prop.value) ? flow : (options == null ? void 0 : options.autoBind) ? autoAction.bound : autoAction;
    }
  });
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) return adm;
    if (name === "length") return adm.getArrayLength_();

    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }

    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];

    if (name === "length") {
      adm.setArrayLength_(value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = /*#__PURE__*/function () {
  // this is the prop that gets proxied, so can't replace it!
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name || "ObservableArray@" + getNextId());

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  var _proto = ObservableArrayAdministration.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };

  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || newLength < 0) die("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray_(currentLength, 0, newItems);
    } else this.spliceWithArray_(newLength, currentLength - newLength);
  };

  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) die(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
  };

  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });

    if (this.legacyMode_ || "production" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };

  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;

      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length = index + newItems.length - deleteCount;

      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }

      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }

      return res;
    }
  };

  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if (false) {}
    this.atom_.reportChanged();
    if (notify) notifyListeners(this, change);
    if (false) {}
  };

  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (false) {}
    this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if (false) {}
  };

  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }

    console.warn( false ? undefined : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
  };

  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      // out of bounds
      die(17, index, values.length);
    }
  };

  return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = "ObservableArray@" + getNextId();
  }

  if (owned === void 0) {
    owned = false;
  }

  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
} // eslint-disable-next-line

var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray_(index);

      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }

    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];

    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];

    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }

    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }

    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */

addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc); // map

addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc); // reduce

addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);

function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
} // Report and delegate to dehanced array


function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
} // Make sure callbacks recieve correct array arg #2326


function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
} // Make sure callbacks recieve correct array arg #2326


function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };

    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}

var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /*#__PURE__*/function () {
  // hasMap, not hashMap >-).
  function ObservableMap(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ = "ObservableMap@" + getNextId();
    }

    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;

    if (!isFunction(Map)) {
      die(18);
    }

    this.keysAtom_ = createAtom(this.name_ + ".keys()");
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }

  var _proto = ObservableMap.prototype;

  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };

  _proto.has = function has(key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this.has_(key);
    var entry = this.hasMap_.get(key);

    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this.hasMap_["delete"](key);
      });
    }

    return entry.get();
  };

  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }

    return this;
  };

  _proto["delete"] = function _delete(key) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;

      if (false) {}
      transaction(function () {
        _this2.keysAtom_.reportChanged();

        _this2.updateHasMapEntry_(key, false);

        var observable = _this2.data_.get(key);

        observable.setNewValue_(undefined);

        _this2.data_["delete"](key);
      });
      if (notify) notifyListeners(this, _change);
      if (false) {}
      return true;
    }

    return false;
  };

  _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
    var entry = this.hasMap_.get(key);

    if (entry) {
      entry.setNewValue_(value);
    }
  };

  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;
      if (false) {}
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, change);
      if (false) {}
    }
  };

  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var observable = new ObservableValue(newValue, _this3.enhancer_, _this3.name_ + "." + stringifyKey(key), false);

      _this3.data_.set(key, observable);

      newValue = observable.value_; // value might have been changed

      _this3.updateHasMapEntry_(key, true);

      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (false) {}
    if (notify) notifyListeners(this, change);
    if (false) {}
  };

  _proto.get = function get(key) {
    if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(undefined);
  };

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };

  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  _proto[_Symbol$iterator] = function () {
    return this.entries();
  };

  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  ;

  _proto.merge = function merge(other) {
    var _this4 = this;

    if (isObservableMap(other)) {
      other = new Map(other);
    }

    transaction(function () {
      if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
        return _this4.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_ref) {
        var key = _ref[0],
            value = _ref[1];
        return _this4.set(key, value);
      });else if (isES6Map(other)) {
        if (other.constructor !== Map) die(19, other);
        other.forEach(function (value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== undefined) die(20, other);
    });
    return this;
  };

  _proto.clear = function clear() {
    var _this5 = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;

          _this5["delete"](key);
        }
      });
    });
  };

  _proto.replace = function replace(values) {
    var _this6 = this;

    // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors
    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value;

        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this6.data_.get(key);

            orderedData.set(key, value);
          }
        }
      } // Merge entries


      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1];

        // We will want to know whether a new key is added
        var keyExisted = _this6.data_.has(_key); // Add or update value


        _this6.set(_key, _value); // The addition could have been prevent by interceptor


        if (_this6.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this6.data_.get(_key);

          orderedData.set(_key, _value2); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      } // Check for possible key order change


      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this6.data_ = orderedData;
    });
    return this;
  };

  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (false) {}
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Map";
    }
  }]);

  return ObservableMap;
}(); // eslint-disable-next-line

var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return die(21, dataStructure);
  }
}

var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /*#__PURE__*/function () {
  function ObservableSet(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ = "ObservableSet@" + getNextId();
    }

    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;

    if (!isFunction(Set)) {
      die(22);
    }

    this.atom_ = createAtom(this.name_);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  var _proto = ObservableSet.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.clear = function clear() {
    var _this = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;

          _this["delete"](value);
        }
      });
    });
  };

  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };

  _proto.add = function add(value) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.atom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) return this; // ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this2.data_.add(_this2.enhancer_(value, undefined));

        _this2.atom_.reportChanged();
      });
      var notifySpy =  false && false;
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;

      if (notifySpy && "production" !== "production") spyReportStart(_change);
      if (notify) notifyListeners(this, _change);
      if (notifySpy && "production" !== "production") spyReportEnd();
    }

    return this;
  };

  _proto["delete"] = function _delete(value) {
    var _this3 = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy =  false && false;
      var notify = hasListeners(this);

      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;

      if (notifySpy && "production" !== "production") spyReportStart(_change2);
      transaction(function () {
        _this3.atom_.reportChanged();

        _this3.data_["delete"](value);
      });
      if (notify) notifyListeners(this, _change2);
      if (notifySpy && "production" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };

  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.keys = function keys() {
    return this.values();
  };

  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.replace = function replace(other) {
    var _this4 = this;

    if (isObservableSet(other)) {
      other = new Set(other);
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if (false) {}
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };

  _proto[_Symbol$iterator$1] = function () {
    return this.values();
  };

  _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get() {
      return "Set";
    }
  }]);

  return ObservableSet;
}(); // eslint-disable-next-line

var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_, defaultEnhancer_) {
    if (values_ === void 0) {
      values_ = new Map();
    }

    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultEnhancer_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.pendingKeys_ = void 0;
    this.keysValue_ = [];
    this.isStaledKeysValue_ = true;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultEnhancer_ = defaultEnhancer_;
    this.keysAtom_ = new Atom(name_ + ".keys");
  }

  var _proto = ObservableObjectAdministration.prototype;

  _proto.read_ = function read_(key) {
    return this.values_.get(key).get();
  };

  _proto.write_ = function write_(key, newValue) {
    var instance = this.target_;
    var observable = this.values_.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue_(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy =  false && false;

      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || instance,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if (false) {}
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, _change);
      if (false) {}
    }
  };

  _proto.has_ = function has_(key) {
    var map = this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = map.get(key);
    if (entry) return entry.get();else {
      var exists = !!this.values_.get(key); // Possible optimization: Don't have a separate map for non existing keys,
      // but store them in the values map instead, using a special symbol to denote "not existing"

      entry = new ObservableValue(exists, referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
      map.set(key, entry);
      return entry.get(); // read to subscribe
    }
  };

  _proto.addObservableProp_ = function addObservableProp_(propName, newValue, enhancer) {
    if (enhancer === void 0) {
      enhancer = this.defaultEnhancer_;
    }

    var target = this.target_;
    if (false) {}

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || target,
        name: propName,
        type: ADD,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    var observable = new ObservableValue(newValue, enhancer, this.name_ + "." + stringifyKey(propName), false);
    this.values_.set(propName, observable);
    newValue = observable.value_; // observableValue might have changed it

    defineProperty(target, propName, generateObservablePropConfig(propName));
    this.notifyPropertyAddition_(propName, newValue);
  };

  _proto.addComputedProp_ = function addComputedProp_(propertyOwner, // where is the property declared?
  propName, options) {
    var target = this.target_;
    options.name = options.name || this.name_ + "." + stringifyKey(propName);
    options.context = this.proxy_ || target;
    this.values_.set(propName, new ComputedValue(options)); // Doesn't seem we need this condition:
    // if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))

    defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
  };

  _proto.remove_ = function remove_(key) {
    if (!this.values_.has(key)) return;
    var target = this.target_;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || target,
        name: key,
        type: REMOVE
      });
      if (!change) return;
    }

    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy =  false && false;
      var oldObservable = this.values_.get(key);
      var oldValue = oldObservable && oldObservable.get();
      oldObservable && oldObservable.set(undefined); // notify key and keyset listeners

      this.reportKeysChanged();
      this.values_["delete"](key);

      if (this.pendingKeys_) {
        var entry = this.pendingKeys_.get(key);
        if (entry) entry.set(false);
      } // delete the prop


      delete this.target_[key];

      var _change2 = notify || notifySpy ? {
        type: REMOVE,
        observableKind: "object",
        object: this.proxy_ || target,
        debugObjectName: this.name_,
        oldValue: oldValue,
        name: key
      } : null;

      if (false) {}
      if (notify) notifyListeners(this, _change2);
      if (false) {}
    } finally {
      endBatch();
    }
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ;

  _proto.observe_ = function observe_(callback, fireImmediately) {
    if (false) {}
    return registerListener(this, callback);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, newValue) {
    var notify = hasListeners(this);
    var notifySpy =  false && false;
    var change = notify || notifySpy ? {
      type: ADD,
      observableKind: "object",
      debugObjectName: this.name_,
      object: this.proxy_ || this.target_,
      name: key,
      newValue: newValue
    } : null;
    if (false) {}
    if (notify) notifyListeners(this, change);
    if (false) {}

    if (this.pendingKeys_) {
      var entry = this.pendingKeys_.get(key);
      if (entry) entry.set(true);
    }

    this.reportKeysChanged();
  };

  _proto.getKeys_ = function getKeys_() {
    this.keysAtom_.reportObserved();

    if (!this.isStaledKeysValue_) {
      return this.keysValue_;
    } // return Reflect.ownKeys(this.values) as any


    this.keysValue_ = [];

    for (var _iterator = _createForOfIteratorHelperLoose(this.values_), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      if (value instanceof ObservableValue) this.keysValue_.push(key);
    }

    if (false) {}
    this.isStaledKeysValue_ = false;
    return this.keysValue_;
  };

  _proto.reportKeysChanged = function reportKeysChanged() {
    this.isStaledKeysValue_ = true;
    this.keysAtom_.reportChanged();
  };

  return ObservableObjectAdministration;
}();
function asObservableObject(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }

  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer;
  }

  if (hasProp(target, $mobx)) return target[$mobx];
  if (false) {}

  if (!name) {
    if (isPlainObject(target)) {
      name = "ObservableObject@" + getNextId();
    } else {
      name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    }
  }

  var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
  addHiddenProp(target, $mobx, adm);
  return adm;
}
var observablePropertyConfigs = /*#__PURE__*/Object.create(null);
var computedPropertyConfigs = /*#__PURE__*/Object.create(null);
function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this[$mobx].read_(propName);
    },
    set: function set(v) {
      this[$mobx].write_(propName, v);
    }
  });
}
function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: true,
    enumerable: false,
    get: function get() {
      return this[$mobx].read_(propName);
    },
    set: function set(v) {
      this[$mobx].write_(propName, v);
    }
  });
}
var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}

/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */

var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function StubArray() {};

function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6

var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
  _inheritsLoose(LegacyObservableArray, _StubArray);

  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;

    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }

    if (owned === void 0) {
      owned = false;
    }

    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true); // @ts-ignore

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    return _this;
  }

  var _proto = LegacyObservableArray.prototype;

  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();

    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }

    return Array.prototype.concat.apply(this.slice(), //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };

  _proto[Symbol.iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        // @ts-ignore
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };

  _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Array";
    }
  }]);

  return LegacyObservableArray;
}(StubArray);

Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
      fn = _ref[1];
  if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }

    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) die(23);
      return thing[$mobx].atom_;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      if (property === undefined) return thing.keysAtom_;
      var observable = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable) die(25, property, getDebugName(thing));
      return observable;
    }

    if (isObservableObject(thing)) {
      if (!property) return die(26);

      var _observable = thing[$mobx].values_.get(property);

      if (!_observable) die(27, property, getDebugName(thing));
      return _observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  die(28);
}
function getAdministration(thing, property) {
  if (!thing) die(29);
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing;
  if (thing[$mobx]) return thing[$mobx];
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well

  return named.name_;
}

var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.

function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a;
  if (!isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.slice();
  if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
  return a;
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}

/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
["Symbol", "Map", "Set", "Symbol"].forEach(function (m) {
  var g = getGlobal();

  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}


//# sourceMappingURL=mobx.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)))

/***/ }),
/* 120 */,
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.useThemeConfig=void 0;/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const useDocusaurusContext_1=__importDefault(__webpack_require__(16));function useThemeConfig(){return useDocusaurusContext_1.default().siteConfig.themeConfig;}exports.useThemeConfig=useThemeConfig;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.isDocsPluginEnabled=void 0;const useDocs_1=__webpack_require__(98);// TODO not ideal, see also "useDocs"
exports.isDocsPluginEnabled=!!useDocs_1.useAllDocsData;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(k!=="default"&&Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.useDocsPreferredVersionContext=exports.DocsPreferredVersionContextProvider=void 0;/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const react_1=__importStar(__webpack_require__(0));const useThemeConfig_1=__webpack_require__(121);const docsUtils_1=__webpack_require__(122);const useDocs_1=__webpack_require__(98);const DocsPreferredVersionStorage_1=__importDefault(__webpack_require__(151));// Initial state is always null as we can't read localstorage from node SSR
function getInitialState(pluginIds){const initialState={};pluginIds.forEach(pluginId=>{initialState[pluginId]={preferredVersionName:null};});return initialState;}// Read storage for all docs plugins
// Assign to each doc plugin a preferred version (if found)
function readStorageState({pluginIds,versionPersistence,allDocsData}){// The storage value we read might be stale,
// and belong to a version that does not exist in the site anymore
// In such case, we remove the storage value to avoid downstream errors
function restorePluginState(pluginId){const preferredVersionNameUnsafe=DocsPreferredVersionStorage_1.default.read(pluginId,versionPersistence);const pluginData=allDocsData[pluginId];const versionExists=pluginData.versions.some(version=>version.name===preferredVersionNameUnsafe);if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}else{DocsPreferredVersionStorage_1.default.clear(pluginId,versionPersistence);return{preferredVersionName:null};}}const initialState={};pluginIds.forEach(pluginId=>{initialState[pluginId]=restorePluginState(pluginId);});return initialState;}function useVersionPersistence(){return useThemeConfig_1.useThemeConfig().docs.versionPersistence;}// Value that  will be accessible through context: [state,api]
function useContextValue(){const allDocsData=useDocs_1.useAllDocsData();const versionPersistence=useVersionPersistence();const pluginIds=react_1.useMemo(()=>Object.keys(allDocsData),[allDocsData]);// Initial state is empty, as  we can't read browser storage in node/SSR
const[state,setState]=react_1.useState(()=>getInitialState(pluginIds));// On mount, we set the state read from browser storage
react_1.useEffect(()=>{setState(readStorageState({allDocsData,versionPersistence,pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
const api=react_1.useMemo(()=>{function savePreferredVersion(pluginId,versionName){DocsPreferredVersionStorage_1.default.save(pluginId,versionPersistence,versionName);setState(s=>Object.assign(Object.assign({},s),{[pluginId]:{preferredVersionName:versionName}}));}return{savePreferredVersion};},[setState]);return[state,api];}const Context=react_1.createContext(null);function DocsPreferredVersionContextProvider({children}){if(docsUtils_1.isDocsPluginEnabled){return react_1.default.createElement(DocsPreferredVersionContextProviderUnsafe,null,children);}else{return react_1.default.createElement(react_1.default.Fragment,null,children);}}exports.DocsPreferredVersionContextProvider=DocsPreferredVersionContextProvider;function DocsPreferredVersionContextProviderUnsafe({children}){const contextValue=useContextValue();return react_1.default.createElement(Context.Provider,{value:contextValue},children);}function useDocsPreferredVersionContext(){const value=react_1.useContext(Context);if(!value){throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");}return value;}exports.useDocsPreferredVersionContext=useDocsPreferredVersionContext;

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_UserPreferencesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(125);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useUserPreferencesContext(){const context=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_theme_UserPreferencesContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);if(context==null){throw new Error('`useUserPreferencesContext` is used outside of `Layout` Component.');}return context;}/* harmony default export */ __webpack_exports__["a"] = (useUserPreferencesContext);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const UserPreferencesContext=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);/* harmony default export */ __webpack_exports__["a"] = (UserPreferencesContext);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const ThemeContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);/* harmony default export */ __webpack_exports__["a"] = (ThemeContext);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getScrollPosition=()=>({scrollX:_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM?window.pageXOffset:0,scrollY:_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM?window.pageYOffset:0});const useScrollPosition=(effect,deps=[])=>{const[scrollPosition,setScrollPosition]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getScrollPosition());const handleScroll=()=>{const currentScrollPosition=getScrollPosition();setScrollPosition(currentScrollPosition);if(effect){effect(currentScrollPosition);}};Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{const opts={passive:true};window.addEventListener('scroll',handleScroll,opts);return()=>window.removeEventListener('scroll',handleScroll,opts);},deps);return scrollPosition;};/* harmony default export */ __webpack_exports__["a"] = (useScrollPosition);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLockBodyScroll(lock=true){Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{document.body.style.overflow=lock?'hidden':'visible';return()=>{document.body.style.overflow='visible';};},[lock]);}/* harmony default export */ __webpack_exports__["a"] = (useLockBodyScroll);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return windowSizes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const desktopThresholdWidth=996;const windowSizes={desktop:'desktop',mobile:'mobile'};function useWindowSize(){const isClient=_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM;function getSize(){if(!isClient){return undefined;}return window.innerWidth>desktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}const[windowSize,setWindowSize]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{if(!isClient){return undefined;}function handleResize(){setWindowSize(getSize());}window.addEventListener('resize',handleResize);return()=>window.removeEventListener('resize',handleResize);},[]);return windowSize;}/* harmony default export */ __webpack_exports__["a"] = (useWindowSize);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(100);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Logo=props=>{const{isClient}=Object(_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_5__["default"])();const{navbar:{title,logo={src:''}}}=Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__["useThemeConfig"])();const{imageClassName,titleClassName,...propsRest}=props;const logoLink=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(logo.href||'/');const sources={light:Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(logo.src),dark:Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(logo.srcDark||logo.src)};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({to:logoLink},propsRest,logo.target&&{target:logo.target}),logo.src&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{key:isClient,className:imageClassName,sources:sources,alt:logo.alt||title||'Logo'}),title!=null&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong",{className:titleClassName},title));};/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _theme_hooks_useThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(114);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const ThemedImage=props=>{const{isClient}=Object(_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__["default"])();const{isDarkTheme}=Object(_theme_hooks_useThemeContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();const{sources,className,alt='',...propsRest}=props;const renderedSourceNames=isClient?isDarkTheme?['dark']:['light']// We need to render both images on the server to avoid flash
:// See https://github.com/facebook/docusaurus/pull/3730
['light','dark'];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,renderedSourceNames.map(sourceName=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({key:sourceName,src:sources[sourceName],alt:alt,className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.themedImage,_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a[`themedImage--${sourceName}`],className)},propsRest))));};/* harmony default export */ __webpack_exports__["a"] = (ThemedImage);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const IconMenu=({width=30,height=30,className,...restProps})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({"aria-label":"Menu",className:className,width:width,height:height,viewBox:"0 0 30 30",role:"img",focusable:"false"},restProps),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title",null,"Menu"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}));};/* harmony default export */ __webpack_exports__["a"] = (IconMenu);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Seo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Seo({title,description,keywords,image}){const metaTitle=Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__["useTitleFormatter"])(title);const metaImageUrl=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(image,{absolute:true});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null,title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,metaTitle),title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:title",content:metaTitle}),description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:description}),description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:description",content:description}),keywords&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"keywords",content:Array.isArray(keywords)?keywords.join(','):keywords}),image&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:image",content:metaImageUrl}),image&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:image",content:metaImageUrl}),image&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}));}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(171);
var createDesc = __webpack_require__(176);
module.exports = __webpack_require__(110) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 135 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(109);
var global = __webpack_require__(108);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(179) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(139);
var defined = __webpack_require__(140);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(185);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 141 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.useAlternatePageUtils=void 0;const useDocusaurusContext_1=__importDefault(__webpack_require__(16));const router_1=__webpack_require__(23);// Permits to obtain the url of the current page in another locale
// Useful to generate hreflang meta headers etc...
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
function useAlternatePageUtils(){const{siteConfig:{baseUrl,url},i18n:{defaultLocale,currentLocale}}=useDocusaurusContext_1.default();const{pathname}=router_1.useLocation();const baseUrlUnlocalized=currentLocale===defaultLocale?baseUrl:baseUrl.replace(`/${currentLocale}/`,'/');const pathnameSuffix=pathname.replace(baseUrl,'');function getLocalizedBaseUrl(locale){return locale===defaultLocale?`${baseUrlUnlocalized}`:`${baseUrlUnlocalized}${locale}/`;}// TODO support correct alternate url when localized site is deployed on another domain
function createUrl({locale,fullyQualified}){return`${fullyQualified?url:''}${getLocalizedBaseUrl(locale)}${pathnameSuffix}`;}return{createUrl};}exports.useAlternatePageUtils=useAlternatePageUtils;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.docVersionSearchTag=exports.DEFAULT_SEARCH_TAG=void 0;exports.DEFAULT_SEARCH_TAG='default';function docVersionSearchTag(pluginId,versionName){return`docs-${pluginId}-${versionName}`;}exports.docVersionSearchTag=docVersionSearchTag;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.useDocVersionSuggestions=exports.useActiveDocContext=exports.useActiveVersion=exports.useLatestVersion=exports.useVersions=exports.useActivePluginAndVersion=exports.useActivePlugin=exports.useDocsData=exports.useAllDocsData=void 0;const router_1=__webpack_require__(23);const useGlobalData_1=__webpack_require__(145);const docsClientUtils_1=__webpack_require__(146);exports.useAllDocsData=()=>useGlobalData_1.useAllPluginInstancesData('docusaurus-plugin-content-docs');exports.useDocsData=pluginId=>useGlobalData_1.usePluginData('docusaurus-plugin-content-docs',pluginId);exports.useActivePlugin=(options={})=>{const data=exports.useAllDocsData();const{pathname}=router_1.useLocation();return docsClientUtils_1.getActivePlugin(data,pathname,options);};exports.useActivePluginAndVersion=(options={})=>{const activePlugin=exports.useActivePlugin(options);const{pathname}=router_1.useLocation();if(activePlugin){const activeVersion=docsClientUtils_1.getActiveVersion(activePlugin.pluginData,pathname);return{activePlugin,activeVersion};}return undefined;};// versions are returned ordered (most recent first)
exports.useVersions=pluginId=>{const data=exports.useDocsData(pluginId);return data.versions;};exports.useLatestVersion=pluginId=>{const data=exports.useDocsData(pluginId);return docsClientUtils_1.getLatestVersion(data);};// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
exports.useActiveVersion=pluginId=>{const data=exports.useDocsData(pluginId);const{pathname}=router_1.useLocation();return docsClientUtils_1.getActiveVersion(data,pathname);};exports.useActiveDocContext=pluginId=>{const data=exports.useDocsData(pluginId);const{pathname}=router_1.useLocation();return docsClientUtils_1.getActiveDocContext(data,pathname);};// Useful to say "hey, you are not on the latest docs version, please switch"
exports.useDocVersionSuggestions=pluginId=>{const data=exports.useDocsData(pluginId);const{pathname}=router_1.useLocation();return docsClientUtils_1.getDocVersionSuggestions(data,pathname);};

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGlobalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllPluginInstancesData", function() { return useAllPluginInstancesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePluginData", function() { return usePluginData; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO annoying constant duplication
// if we import something from outside the /client folder,
// the tsc directory structure is affected
// import {DEFAULT_PLUGIN_ID} from '../../constants';
const DEFAULT_PLUGIN_ID='default';function useGlobalData(){const{globalData}=Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__["default"])();if(!globalData){throw new Error('Docusaurus global data not found');}return globalData;}function useAllPluginInstancesData(pluginName){const globalData=useGlobalData();const pluginGlobalData=globalData[pluginName];if(!pluginGlobalData){throw new Error(`Docusaurus plugin global data not found for pluginName=${pluginName}`);}return pluginGlobalData;}function usePluginData(pluginName,pluginId=DEFAULT_PLUGIN_ID){const pluginGlobalData=useAllPluginInstancesData(pluginName);const pluginInstanceGlobalData=pluginGlobalData[pluginId];if(!pluginInstanceGlobalData){throw new Error(`Docusaurus plugin global data not found for pluginName=${pluginName} and pluginId=${pluginId}`);}return pluginInstanceGlobalData;}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.getDocVersionSuggestions=exports.getActiveDocContext=exports.getActiveVersion=exports.getLatestVersion=exports.getActivePlugin=void 0;const router_1=__webpack_require__(23);function getActivePlugin(allPluginDatas,pathname,options={}){const activeEntry=Object.entries(allPluginDatas).find(([_id,pluginData])=>{return!!router_1.matchPath(pathname,{path:pluginData.path,exact:false,strict:false});});const activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error(`Can't find active docs plugin for pathname=${pathname}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(allPluginDatas).map(plugin=>plugin.path).join(', ')}`);}return activePlugin;}exports.getActivePlugin=getActivePlugin;exports.getLatestVersion=data=>{return data.versions.find(version=>version.isLast);};// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
exports.getActiveVersion=(data,pathname)=>{const lastVersion=exports.getLatestVersion(data);// Last version is a route like /docs/*,
// we need to try to match it last or it would match /docs/version-1.0/* as well
const orderedVersionsMetadata=[...data.versions.filter(version=>version!==lastVersion),lastVersion];return orderedVersionsMetadata.find(version=>{return!!router_1.matchPath(pathname,{path:version.path,exact:false,strict:false});});};exports.getActiveDocContext=(data,pathname)=>{const activeVersion=exports.getActiveVersion(data,pathname);const activeDoc=activeVersion===null||activeVersion===void 0?void 0:activeVersion.docs.find(doc=>!!router_1.matchPath(pathname,{path:doc.path,exact:true,strict:false}));function getAlternateVersionDocs(docId){const result={};data.versions.forEach(version=>{version.docs.forEach(doc=>{if(doc.id===docId){result[version.name]=doc;}});});return result;}const alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion,activeDoc,alternateDocVersions:alternateVersionDocs};};exports.getDocVersionSuggestions=(data,pathname)=>{const latestVersion=exports.getLatestVersion(data);const activeDocContext=exports.getActiveDocContext(data,pathname);// We only suggest another doc/version if user is not using the latest version
const isNotOnLatestVersion=activeDocContext.activeVersion!==latestVersion;const latestDocSuggestion=isNotOnLatestVersion?activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.alternateDocVersions[latestVersion.name]:undefined;const latestVersionSuggestion=isNotOnLatestVersion?latestVersion:undefined;return{latestDocSuggestion,latestVersionSuggestion};};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.isSamePath=void 0;// Compare the 2 paths, ignoring trailing /
exports.isSamePath=(path1,path2)=>{const normalize=pathname=>{return!pathname||(pathname===null||pathname===void 0?void 0:pathname.endsWith('/'))?pathname:`${pathname}/`;};return normalize(path1)===normalize(path2);};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.useTitleFormatter=void 0;/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const useDocusaurusContext_1=__importDefault(__webpack_require__(16));exports.useTitleFormatter=title=>{const{siteConfig={}}=useDocusaurusContext_1.default();const{title:siteTitle,titleDelimiter='|'}=siteConfig;return title&&title.trim().length?`${title.trim()} ${titleDelimiter} ${siteTitle}`:siteTitle;};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.usePluralForm=void 0;const react_1=__webpack_require__(0);const useDocusaurusContext_1=__importDefault(__webpack_require__(16));// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(pf=>pluralForms.includes(pf));}// Hardcoded english/fallback implementation
const EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:count=>count===1?'one':'other'};function createLocalePluralForms(locale){const pluralRules=new Intl.PluralRules(locale);return{locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:count=>pluralRules.select(count)};}// Poor man's PluralSelector implementation, using an english fallback.
// We want a lightweight, future-proof and good-enough solution.
// We don't want a perfect and heavy solution.
//
// Docusaurus classic theme has only 2 deeply nested labels requiring complex plural rules
// We don't want to use Intl + PluralRules polyfills + full ICU syntax (react-intl) just for that.
//
// Notes:
// - 2021: 92+% Browsers support Intl.PluralRules, and support will increase in the future
// - NodeJS >= 13 has full ICU support by default
// - In case of "mismatch" between SSR and Browser ICU support, React keeps working!
function useLocalePluralForms(){const{i18n:{currentLocale}}=useDocusaurusContext_1.default();return react_1.useMemo(()=>{// @ts-expect-error checking Intl.PluralRules in case browser doesn't have it (e.g Safari 12-)
if(Intl.PluralRules){try{return createLocalePluralForms(currentLocale);}catch(e){console.error(`Failed to use Intl.PluralRules for locale=${currentLocale}.
Docusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.
`);return EnglishPluralForms;}}else{console.error(`Intl.PluralRules not available!
Docusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.
        `);return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){const separator='|';const parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}else{if(parts.length>localePluralForms.pluralForms.length){console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms}), but the message contains ${parts.length} plural forms: ${pluralMessages} `);}const pluralForm=localePluralForms.select(count);const pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other) instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}}function usePluralForm(){const localePluralForm=useLocalePluralForms();return{selectMessage:(count,pluralMessages)=>{return selectPluralMessage(pluralMessages,count,localePluralForm);}};}exports.usePluralForm=usePluralForm;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.useDocsPreferredVersionByPluginId=exports.useDocsPreferredVersion=void 0;/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const react_1=__webpack_require__(0);const DocsPreferredVersionProvider_1=__webpack_require__(123);const useDocs_1=__webpack_require__(98);const constants_1=__webpack_require__(152);// TODO improve typing
// Note, the preferredVersion attribute will always be null before mount
function useDocsPreferredVersion(pluginId=constants_1.DEFAULT_PLUGIN_ID){const docsData=useDocs_1.useDocsData(pluginId);const[state,api]=DocsPreferredVersionProvider_1.useDocsPreferredVersionContext();const{preferredVersionName}=state[pluginId];const preferredVersion=preferredVersionName?docsData.versions.find(version=>version.name===preferredVersionName):null;const savePreferredVersionName=react_1.useCallback(versionName=>{api.savePreferredVersion(pluginId,versionName);},[api]);return{preferredVersion,savePreferredVersionName};}exports.useDocsPreferredVersion=useDocsPreferredVersion;function useDocsPreferredVersionByPluginId(){const allDocsData=useDocs_1.useAllDocsData();const[state]=DocsPreferredVersionProvider_1.useDocsPreferredVersionContext();function getPluginIdPreferredVersion(pluginId){const docsData=allDocsData[pluginId];const{preferredVersionName}=state[pluginId];return preferredVersionName?docsData.versions.find(version=>version.name===preferredVersionName):null;}const pluginIds=Object.keys(allDocsData);const result={};pluginIds.forEach(pluginId=>{result[pluginId]=getPluginIdPreferredVersion(pluginId);});return result;}exports.useDocsPreferredVersionByPluginId=useDocsPreferredVersionByPluginId;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});const storageKey=pluginId=>`docs-preferred-version-${pluginId}`;const DocsPreferredVersionStorage={save:(pluginId,persistence,versionName)=>{if(persistence==='none'){// noop
}else{window.localStorage.setItem(storageKey(pluginId),versionName);}},read:(pluginId,persistence)=>{if(persistence==='none'){return null;}else{return window.localStorage.getItem(storageKey(pluginId));}},clear:(pluginId,persistence)=>{if(persistence==='none'){// noop
}else{window.localStorage.removeItem(storageKey(pluginId));}}};exports.default=DocsPreferredVersionStorage;

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PLUGIN_ID", function() { return DEFAULT_PLUGIN_ID; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
// eslint-disable-next-line no-restricted-imports
export {
  // constants were only available on node
  // this makes some useful constants available to frontend/themes too
  // import {DEFAULT_PLUGIN_ID} '@docusaurus/constants'
  DEFAULT_PLUGIN_ID,
} from '../../constants';
 */ // Not duplicating the constants seems to produce
// weird TS compilation side-effects
const DEFAULT_PLUGIN_ID='default';

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(154);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _check = __webpack_require__(155);

var _check2 = _interopRequireDefault(_check);

var _x = __webpack_require__(156);

var _x2 = _interopRequireDefault(_x);

var _util = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_PureComponent) {
  _inherits(Toggle, _PureComponent);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.previouslyChecked = !!(props.checked || props.defaultChecked);
    _this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.checked !== this.props.checked) {
        // Disable linting rule here since this usage of setState inside
        // componentDidUpdate is OK; see
        // https://reactjs.org/docs/react-component.html#componentdidupdate
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ checked: !!this.props.checked });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      if (this.props.disabled) {
        return;
      }
      var checkbox = this.input;
      if (event.target !== checkbox && !this.moved) {
        this.previouslyChecked = checkbox.checked;
        event.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      var checked = this.props.hasOwnProperty('checked') ? this.props.checked : checkbox.checked;

      this.setState({ checked: checked });
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      if (this.props.disabled) {
        return;
      }
      this.startX = (0, _util.pointerCoord)(event).x;
      this.activated = true;
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      if (!this.activated) return;
      this.moved = true;

      if (this.startX) {
        var currentX = (0, _util.pointerCoord)(event).x;
        if (this.state.checked && currentX + 15 < this.startX) {
          this.setState({ checked: false });
          this.startX = currentX;
          this.activated = true;
        } else if (currentX - 15 > this.startX) {
          this.setState({ checked: true });
          this.startX = currentX;
          this.activated = currentX < this.startX + 5;
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      if (!this.moved) return;
      var checkbox = this.input;
      event.preventDefault();

      if (this.startX) {
        var endX = (0, _util.pointerCoord)(event).x;
        if (this.previouslyChecked === true && this.startX + 4 > endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: false });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        } else if (this.startX - 4 < endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: true });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        }

        this.activated = false;
        this.startX = null;
        this.moved = false;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      var onFocus = this.props.onFocus;


      if (onFocus) {
        onFocus(event);
      }

      this.setState({ hasFocus: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var onBlur = this.props.onBlur;


      if (onBlur) {
        onBlur(event);
      }

      this.setState({ hasFocus: false });
    }
  }, {
    key: 'getIcon',
    value: function getIcon(type) {
      var icons = this.props.icons;

      if (!icons) {
        return null;
      }
      return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          _icons = _props.icons,
          inputProps = _objectWithoutProperties(_props, ['className', 'icons']);

      var classes = (0, _classnames2.default)('react-toggle', {
        'react-toggle--checked': this.state.checked,
        'react-toggle--focus': this.state.hasFocus,
        'react-toggle--disabled': this.props.disabled
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes,
          onClick: this.handleClick,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd },
        _react2.default.createElement(
          'div',
          { className: 'react-toggle-track' },
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-check' },
            this.getIcon('checked')
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-x' },
            this.getIcon('unchecked')
          )
        ),
        _react2.default.createElement('div', { className: 'react-toggle-thumb' }),
        _react2.default.createElement('input', _extends({}, inputProps, {
          ref: function ref(_ref) {
            _this2.input = _ref;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: 'react-toggle-screenreader-only',
          type: 'checkbox' }))
      );
    }
  }]);

  return Toggle;
}(_react.PureComponent);

exports.default = Toggle;


Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
  icons: {
    checked: _react2.default.createElement(_check2.default, null),
    unchecked: _react2.default.createElement(_x2.default, null)
  }
};

Toggle.propTypes = {
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  'aria-labelledby': _propTypes2.default.string,
  'aria-label': _propTypes2.default.string,
  icons: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    checked: _propTypes2.default.node,
    unchecked: _propTypes2.default.node
  })])
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '14', height: '11', viewBox: '0 0 14 11' },
    _react2.default.createElement('path', { d: 'M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '10', height: '10', viewBox: '0 0 10 10' },
    _react2.default.createElement('path', { d: 'M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointerCoord = pointerCoord;
// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts

function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    var changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      var touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    var pageX = event.pageX;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsVersionNavbarItem; });
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocsVersionNavbarItem({label:staticLabel,to:staticTo,docsPluginId,...props}){var _ref;const activeVersion=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useActiveVersion"])(docsPluginId);const{preferredVersion}=Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__["useDocsPreferredVersion"])(docsPluginId);const latestVersion=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useLatestVersion"])(docsPluginId);const version=(_ref=activeVersion!==null&&activeVersion!==void 0?activeVersion:preferredVersion)!==null&&_ref!==void 0?_ref:latestVersion;const label=staticLabel!==null&&staticLabel!==void 0?staticLabel:version.label;const path=staticTo!==null&&staticTo!==void 0?staticTo:getVersionMainDoc(version).path;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},props,{label:label,to:path}));}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsVersionDropdownNavbarItem; });
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocsVersionDropdownNavbarItem({mobile,docsPluginId,dropdownActiveClassDisabled,dropdownItemsBefore,dropdownItemsAfter,...props}){var _ref,_activeDocContext$act;const activeDocContext=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useActiveDocContext"])(docsPluginId);const versions=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useVersions"])(docsPluginId);const latestVersion=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useLatestVersion"])(docsPluginId);const{preferredVersion,savePreferredVersionName}=Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__["useDocsPreferredVersion"])(docsPluginId);function getItems(){const versionLinks=versions.map(version=>{// We try to link to the same doc, in another version
// When not possible, fallback to the "main doc" of the version
const versionDoc=(activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.alternateDocVersions[version.name])||getVersionMainDoc(version);return{isNavLink:true,label:version.label,to:versionDoc.path,isActive:()=>version===(activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.activeVersion),onClick:()=>{savePreferredVersionName(version.name);}};});const items=[...dropdownItemsBefore,...versionLinks,...dropdownItemsAfter];// We don't want to render a version dropdown with 0 or 1 item
// If we build the site with a single docs version (onlyIncludeVersions: ['1.0.0'])
// We'd rather render a button instead of a dropdown
if(items.length<=1){return undefined;}return items;}const dropdownVersion=(_ref=(_activeDocContext$act=activeDocContext.activeVersion)!==null&&_activeDocContext$act!==void 0?_activeDocContext$act:preferredVersion)!==null&&_ref!==void 0?_ref:latestVersion;// Mobile is handled a bit differently
const dropdownLabel=mobile?'Versions':dropdownVersion.label;const dropdownTo=mobile?undefined:getVersionMainDoc(dropdownVersion).path;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,items:getItems(),isActive:dropdownActiveClassDisabled?()=>false:undefined}));}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocNavbarItem; });
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocNavbarItem({docId,activeSidebarClassName,label:staticLabel,docsPluginId,...props}){var _ref;const{activeVersion,activeDoc}=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useActiveDocContext"])(docsPluginId);const{preferredVersion}=Object(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__["useDocsPreferredVersion"])(docsPluginId);const latestVersion=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useLatestVersion"])(docsPluginId);const version=(_ref=activeVersion!==null&&activeVersion!==void 0?activeVersion:preferredVersion)!==null&&_ref!==void 0?_ref:latestVersion;const doc=version.docs.find(versionDoc=>versionDoc.id===docId);if(!doc){throw new Error(`DocNavbarItem: couldn't find any doc with id=${docId} in version ${version.name}.
Available docIds=\n- ${version.docs.join('\n- ')}`);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({exact:true},props,{className:Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(props.className,{[activeSidebarClassName]:activeDoc&&activeDoc.sidebar===doc.sidebar}),label:staticLabel!==null&&staticLabel!==void 0?staticLabel:doc.id,to:doc.path}));}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global global */

var KEYCODE_ENTER = 13;
var KEYCODE_TAB = 9;
var KEYCODE_BACKSPACE = 8;
var KEYCODE_Y = 89;
var KEYCODE_Z = 90;
var KEYCODE_M = 77;
var KEYCODE_PARENS = 57;
var KEYCODE_BRACKETS = 219;
var KEYCODE_QUOTE = 222;
var KEYCODE_BACK_QUOTE = 192;
var KEYCODE_ESCAPE = 27;

var HISTORY_LIMIT = 100;
var HISTORY_TIME_GAP = 3000;

var isWindows = 'navigator' in global && /Win/i.test(navigator.platform);
var isMacLike = 'navigator' in global && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

var className = 'npm__react-simple-code-editor__textarea';

var cssText = /* CSS */'\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.' + className + ':empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn\'t support \'-webkit-text-fill-color\'\n    * So we use \'color: transparent\' to make the text transparent on IE\n    * Unlike other browsers, it doesn\'t affect caret color in IE\n    */\n  .' + className + ' {\n    color: transparent !important;\n  }\n\n  .' + className + '::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n';

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Editor.__proto__ || Object.getPrototypeOf(Editor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      capture: true
    }, _this._recordCurrentState = function () {
      var input = _this._input;

      if (!input) return;

      // Save current state of the input
      var value = input.value,
          selectionStart = input.selectionStart,
          selectionEnd = input.selectionEnd;


      _this._recordChange({
        value: value,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      });
    }, _this._getLines = function (text, position) {
      return text.substring(0, position).split('\n');
    }, _this._recordChange = function (record) {
      var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$_history = _this._history,
          stack = _this$_history.stack,
          offset = _this$_history.offset;


      if (stack.length && offset > -1) {
        // When something updates, drop the redo operations
        _this._history.stack = stack.slice(0, offset + 1);

        // Limit the number of operations to 100
        var count = _this._history.stack.length;

        if (count > HISTORY_LIMIT) {
          var extras = count - HISTORY_LIMIT;

          _this._history.stack = stack.slice(extras, count);
          _this._history.offset = Math.max(_this._history.offset - extras, 0);
        }
      }

      var timestamp = Date.now();

      if (overwrite) {
        var last = _this._history.stack[_this._history.offset];

        if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
          // A previous entry exists and was in short interval

          // Match the last word in the line
          var re = /[^a-z0-9]([a-z0-9]+)$/i;

          // Get the previous line
          var previous = _this._getLines(last.value, last.selectionStart).pop().match(re);

          // Get the current line
          var current = _this._getLines(record.value, record.selectionStart).pop().match(re);

          if (previous && current && current[1].startsWith(previous[1])) {
            // The last word of the previous line and current line match
            // Overwrite previous entry so that undo will remove whole word
            _this._history.stack[_this._history.offset] = _extends({}, record, { timestamp: timestamp });

            return;
          }
        }
      }

      // Add the new operation to the stack
      _this._history.stack.push(_extends({}, record, { timestamp: timestamp }));
      _this._history.offset++;
    }, _this._updateInput = function (record) {
      var input = _this._input;

      if (!input) return;

      // Update values and selection state
      input.value = record.value;
      input.selectionStart = record.selectionStart;
      input.selectionEnd = record.selectionEnd;

      _this.props.onValueChange(record.value);
    }, _this._applyEdits = function (record) {
      // Save last selection state
      var input = _this._input;
      var last = _this._history.stack[_this._history.offset];

      if (last && input) {
        _this._history.stack[_this._history.offset] = _extends({}, last, {
          selectionStart: input.selectionStart,
          selectionEnd: input.selectionEnd
        });
      }

      // Save the changes
      _this._recordChange(record);
      _this._updateInput(record);
    }, _this._undoEdit = function () {
      var _this$_history2 = _this._history,
          stack = _this$_history2.stack,
          offset = _this$_history2.offset;

      // Get the previous edit

      var record = stack[offset - 1];

      if (record) {
        // Apply the changes and update the offset
        _this._updateInput(record);
        _this._history.offset = Math.max(offset - 1, 0);
      }
    }, _this._redoEdit = function () {
      var _this$_history3 = _this._history,
          stack = _this$_history3.stack,
          offset = _this$_history3.offset;

      // Get the next edit

      var record = stack[offset + 1];

      if (record) {
        // Apply the changes and update the offset
        _this._updateInput(record);
        _this._history.offset = Math.min(offset + 1, stack.length - 1);
      }
    }, _this._handleKeyDown = function (e) {
      var _this$props = _this.props,
          tabSize = _this$props.tabSize,
          insertSpaces = _this$props.insertSpaces,
          ignoreTabKey = _this$props.ignoreTabKey,
          onKeyDown = _this$props.onKeyDown;


      if (onKeyDown) {
        onKeyDown(e);

        if (e.defaultPrevented) {
          return;
        }
      }

      if (e.keyCode === KEYCODE_ESCAPE) {
        e.target.blur();
      }

      var _e$target = e.target,
          value = _e$target.value,
          selectionStart = _e$target.selectionStart,
          selectionEnd = _e$target.selectionEnd;


      var tabCharacter = (insertSpaces ? ' ' : '\t').repeat(tabSize);

      if (e.keyCode === KEYCODE_TAB && !ignoreTabKey && _this.state.capture) {
        // Prevent focus change
        e.preventDefault();

        if (e.shiftKey) {
          // Unindent selected lines
          var linesBeforeCaret = _this._getLines(value, selectionStart);
          var startLine = linesBeforeCaret.length - 1;
          var endLine = _this._getLines(value, selectionEnd).length - 1;
          var nextValue = value.split('\n').map(function (line, i) {
            if (i >= startLine && i <= endLine && line.startsWith(tabCharacter)) {
              return line.substring(tabCharacter.length);
            }

            return line;
          }).join('\n');

          if (value !== nextValue) {
            var startLineText = linesBeforeCaret[startLine];

            _this._applyEdits({
              value: nextValue,
              // Move the start cursor if first line in selection was modified
              // It was modified only if it started with a tab
              selectionStart: startLineText.startsWith(tabCharacter) ? selectionStart - tabCharacter.length : selectionStart,
              // Move the end cursor by total number of characters removed
              selectionEnd: selectionEnd - (value.length - nextValue.length)
            });
          }
        } else if (selectionStart !== selectionEnd) {
          // Indent selected lines
          var _linesBeforeCaret = _this._getLines(value, selectionStart);
          var _startLine = _linesBeforeCaret.length - 1;
          var _endLine = _this._getLines(value, selectionEnd).length - 1;
          var _startLineText = _linesBeforeCaret[_startLine];

          _this._applyEdits({
            value: value.split('\n').map(function (line, i) {
              if (i >= _startLine && i <= _endLine) {
                return tabCharacter + line;
              }

              return line;
            }).join('\n'),
            // Move the start cursor by number of characters added in first line of selection
            // Don't move it if it there was no text before cursor
            selectionStart: /\S/.test(_startLineText) ? selectionStart + tabCharacter.length : selectionStart,
            // Move the end cursor by total number of characters added
            selectionEnd: selectionEnd + tabCharacter.length * (_endLine - _startLine + 1)
          });
        } else {
          var updatedSelection = selectionStart + tabCharacter.length;

          _this._applyEdits({
            // Insert tab character at caret
            value: value.substring(0, selectionStart) + tabCharacter + value.substring(selectionEnd),
            // Update caret position
            selectionStart: updatedSelection,
            selectionEnd: updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_BACKSPACE) {
        var hasSelection = selectionStart !== selectionEnd;
        var textBeforeCaret = value.substring(0, selectionStart);

        if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
          // Prevent default delete behaviour
          e.preventDefault();

          var _updatedSelection = selectionStart - tabCharacter.length;

          _this._applyEdits({
            // Remove tab character at caret
            value: value.substring(0, selectionStart - tabCharacter.length) + value.substring(selectionEnd),
            // Update caret position
            selectionStart: _updatedSelection,
            selectionEnd: _updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_ENTER) {
        // Ignore selections
        if (selectionStart === selectionEnd) {
          // Get the current line
          var line = _this._getLines(value, selectionStart).pop();
          var matches = line.match(/^\s+/);

          if (matches && matches[0]) {
            e.preventDefault();

            // Preserve indentation on inserting a new line
            var indent = '\n' + matches[0];
            var _updatedSelection2 = selectionStart + indent.length;

            _this._applyEdits({
              // Insert indentation character at caret
              value: value.substring(0, selectionStart) + indent + value.substring(selectionEnd),
              // Update caret position
              selectionStart: _updatedSelection2,
              selectionEnd: _updatedSelection2
            });
          }
        }
      } else if (e.keyCode === KEYCODE_PARENS || e.keyCode === KEYCODE_BRACKETS || e.keyCode === KEYCODE_QUOTE || e.keyCode === KEYCODE_BACK_QUOTE) {
        var chars = void 0;

        if (e.keyCode === KEYCODE_PARENS && e.shiftKey) {
          chars = ['(', ')'];
        } else if (e.keyCode === KEYCODE_BRACKETS) {
          if (e.shiftKey) {
            chars = ['{', '}'];
          } else {
            chars = ['[', ']'];
          }
        } else if (e.keyCode === KEYCODE_QUOTE) {
          if (e.shiftKey) {
            chars = ['"', '"'];
          } else {
            chars = ["'", "'"];
          }
        } else if (e.keyCode === KEYCODE_BACK_QUOTE && !e.shiftKey) {
          chars = ['`', '`'];
        }

        // If text is selected, wrap them in the characters
        if (selectionStart !== selectionEnd && chars) {
          e.preventDefault();

          _this._applyEdits({
            value: value.substring(0, selectionStart) + chars[0] + value.substring(selectionStart, selectionEnd) + chars[1] + value.substring(selectionEnd),
            // Update caret position
            selectionStart: selectionStart,
            selectionEnd: selectionEnd + 2
          });
        }
      } else if ((isMacLike ? // Trigger undo with ⌘+Z on Mac
      e.metaKey && e.keyCode === KEYCODE_Z : // Trigger undo with Ctrl+Z on other platforms
      e.ctrlKey && e.keyCode === KEYCODE_Z) && !e.shiftKey && !e.altKey) {
        e.preventDefault();

        _this._undoEdit();
      } else if ((isMacLike ? // Trigger redo with ⌘+Shift+Z on Mac
      e.metaKey && e.keyCode === KEYCODE_Z && e.shiftKey : isWindows ? // Trigger redo with Ctrl+Y on Windows
      e.ctrlKey && e.keyCode === KEYCODE_Y : // Trigger redo with Ctrl+Shift+Z on other platforms
      e.ctrlKey && e.keyCode === KEYCODE_Z && e.shiftKey) && !e.altKey) {
        e.preventDefault();

        _this._redoEdit();
      } else if (e.keyCode === KEYCODE_M && e.ctrlKey && (isMacLike ? e.shiftKey : true)) {
        e.preventDefault();

        // Toggle capturing tab key so users can focus away
        _this.setState(function (state) {
          return {
            capture: !state.capture
          };
        });
      }
    }, _this._handleChange = function (e) {
      var _e$target2 = e.target,
          value = _e$target2.value,
          selectionStart = _e$target2.selectionStart,
          selectionEnd = _e$target2.selectionEnd;


      _this._recordChange({
        value: value,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      }, true);

      _this.props.onValueChange(value);
    }, _this._history = {
      stack: [],
      offset: -1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._recordCurrentState();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          style = _props.style,
          padding = _props.padding,
          highlight = _props.highlight,
          textareaId = _props.textareaId,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled,
          form = _props.form,
          maxLength = _props.maxLength,
          minLength = _props.minLength,
          name = _props.name,
          placeholder = _props.placeholder,
          readOnly = _props.readOnly,
          required = _props.required,
          onClick = _props.onClick,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onKeyUp = _props.onKeyUp,
          onKeyDown = _props.onKeyDown,
          onValueChange = _props.onValueChange,
          tabSize = _props.tabSize,
          insertSpaces = _props.insertSpaces,
          ignoreTabKey = _props.ignoreTabKey,
          rest = _objectWithoutProperties(_props, ['value', 'style', 'padding', 'highlight', 'textareaId', 'autoFocus', 'disabled', 'form', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'onClick', 'onFocus', 'onBlur', 'onKeyUp', 'onKeyDown', 'onValueChange', 'tabSize', 'insertSpaces', 'ignoreTabKey']);

      var contentStyle = {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };

      var highlighted = highlight(value);

      return React.createElement(
        'div',
        _extends({}, rest, { style: _extends({}, styles.container, style) }),
        React.createElement('textarea', {
          ref: function ref(c) {
            return _this2._input = c;
          },
          style: _extends({}, styles.editor, styles.textarea, contentStyle),
          className: className,
          id: textareaId,
          value: value,
          onChange: this._handleChange,
          onKeyDown: this._handleKeyDown,
          onClick: onClick,
          onKeyUp: onKeyUp,
          onFocus: onFocus,
          onBlur: onBlur,
          disabled: disabled,
          form: form,
          maxLength: maxLength,
          minLength: minLength,
          name: name,
          placeholder: placeholder,
          readOnly: readOnly,
          required: required,
          autoFocus: autoFocus,
          autoCapitalize: 'off',
          autoComplete: 'off',
          autoCorrect: 'off',
          spellCheck: false,
          'data-gramm': false
        }),
        React.createElement('pre', _extends({
          'aria-hidden': 'true',
          style: _extends({}, styles.editor, styles.highlight, contentStyle)
        }, typeof highlighted === 'string' ? { dangerouslySetInnerHTML: { __html: highlighted + '<br />' } } : { children: highlighted })),
        React.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: cssText } })
      );
    }
  }, {
    key: 'session',
    get: function get() {
      return {
        history: this._history
      };
    },
    set: function set(session) {
      this._history = session.history;
    }
  }]);

  return Editor;
}(React.Component);

Editor.defaultProps = {
  tabSize: 2,
  insertSpaces: true,
  ignoreTabKey: false,
  padding: 0
};
exports.default = Editor;


var styles = {
  container: {
    position: 'relative',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: 0,
    overflow: 'hidden'
  },
  textarea: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    resize: 'none',
    color: 'inherit',
    overflow: 'hidden',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextFillColor: 'transparent'
  },
  highlight: {
    position: 'relative',
    pointerEvents: 'none'
  },
  editor: {
    margin: 0,
    border: 0,
    background: 'none',
    boxSizing: 'inherit',
    display: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontVariantLigatures: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
    tabSize: 'inherit',
    textIndent: 'inherit',
    textRendering: 'inherit',
    textTransform: 'inherit',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    overflowWrap: 'break-word'
  }
};
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)))

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // fork of Buble which removes Buble's large dependency and weighs in
// at a smaller size of ~51kB
// https://github.com/FormidableLabs/react-live#what-bundle-size-can-i-expect
const{transform,features:bubleFeatures}=__webpack_require__(163);// This file is designed to mimic what's written in
// https://github.com/kitten/buble/blob/mini/src/index.js, with custom transforms options,
// so that webpack can consume it correctly.
exports.features=bubleFeatures;exports.transform=function customTransform(source,options){return transform(source,{...options,transforms:{asyncAwait:false}});};

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "features", function() { return _i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return ki; });
var t={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},e="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",i={5:e,6:e+" const class extends export import super"},s=/^in(stanceof)?$/,r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",a=new RegExp("["+r+"]"),o=new RegExp("["+r+n+"]");r=n=null;var p=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,190,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,26,230,43,117,63,32,0,257,0,11,39,8,0,22,0,12,39,3,3,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,68,12,0,67,12,65,1,31,6129,15,754,9486,286,82,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541],h=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,280,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239];function c(t,e){for(var i=65536,s=0;s<e.length;s+=2){if((i+=e[s])>t)return!1;if((i+=e[s+1])>=t)return!0}}function l(t,e){return t<65?36===t:t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&a.test(String.fromCharCode(t)):!1!==e&&c(t,p)))}function u(t,e){return t<48?36===t:t<58||!(t<65)&&(t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&o.test(String.fromCharCode(t)):!1!==e&&(c(t,p)||c(t,h)))))}var d=function(t,e){void 0===e&&(e={}),this.label=t,this.keyword=e.keyword,this.beforeExpr=!!e.beforeExpr,this.startsExpr=!!e.startsExpr,this.isLoop=!!e.isLoop,this.isAssign=!!e.isAssign,this.prefix=!!e.prefix,this.postfix=!!e.postfix,this.binop=e.binop||null,this.updateContext=null};function f(t,e){return new d(t,{beforeExpr:!0,binop:e})}var m={beforeExpr:!0},g={startsExpr:!0},y={};function v(t,e){return void 0===e&&(e={}),e.keyword=t,y[t]=new d(t,e)}var x={num:new d("num",g),regexp:new d("regexp",g),string:new d("string",g),name:new d("name",g),eof:new d("eof"),bracketL:new d("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new d("]"),braceL:new d("{",{beforeExpr:!0,startsExpr:!0}),braceR:new d("}"),parenL:new d("(",{beforeExpr:!0,startsExpr:!0}),parenR:new d(")"),comma:new d(",",m),semi:new d(";",m),colon:new d(":",m),dot:new d("."),question:new d("?",m),arrow:new d("=>",m),template:new d("template"),invalidTemplate:new d("invalidTemplate"),ellipsis:new d("...",m),backQuote:new d("`",g),dollarBraceL:new d("${",{beforeExpr:!0,startsExpr:!0}),eq:new d("=",{beforeExpr:!0,isAssign:!0}),assign:new d("_=",{beforeExpr:!0,isAssign:!0}),incDec:new d("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new d("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:f("||",1),logicalAND:f("&&",2),bitwiseOR:f("|",3),bitwiseXOR:f("^",4),bitwiseAND:f("&",5),equality:f("==/!=/===/!==",6),relational:f("</>/<=/>=",7),bitShift:f("<</>>/>>>",8),plusMin:new d("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:f("%",10),star:f("*",10),slash:f("/",10),starstar:new d("**",{beforeExpr:!0}),_break:v("break"),_case:v("case",m),_catch:v("catch"),_continue:v("continue"),_debugger:v("debugger"),_default:v("default",m),_do:v("do",{isLoop:!0,beforeExpr:!0}),_else:v("else",m),_finally:v("finally"),_for:v("for",{isLoop:!0}),_function:v("function",g),_if:v("if"),_return:v("return",m),_switch:v("switch"),_throw:v("throw",m),_try:v("try"),_var:v("var"),_const:v("const"),_while:v("while",{isLoop:!0}),_with:v("with"),_new:v("new",{beforeExpr:!0,startsExpr:!0}),_this:v("this",g),_super:v("super",g),_class:v("class",g),_extends:v("extends",m),_export:v("export"),_import:v("import"),_null:v("null",g),_true:v("true",g),_false:v("false",g),_in:v("in",{beforeExpr:!0,binop:7}),_instanceof:v("instanceof",{beforeExpr:!0,binop:7}),_typeof:v("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:v("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:v("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},b=/\r\n?|\n|\u2028|\u2029/,_=new RegExp(b.source,"g");function S(t,e){return 10===t||13===t||!e&&(8232===t||8233===t)}var k=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,w=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,E=Object.prototype,C=E.hasOwnProperty,A=E.toString;function I(t,e){return C.call(t,e)}var L=Array.isArray||function(t){return"[object Array]"===A.call(t)};function N(t){return new RegExp("^(?:"+t.replace(/ /g,"|")+")$")}var P=function(t,e){this.line=t,this.column=e};P.prototype.offset=function(t){return new P(this.line,this.column+t)};var T=function(t,e,i){this.start=e,this.end=i,null!==t.sourceFile&&(this.source=t.sourceFile)};function R(t,e){for(var i=1,s=0;;){_.lastIndex=s;var r=_.exec(t);if(!(r&&r.index<e))return new P(i,e-s);++i,s=r.index+r[0].length}}var O={ecmaVersion:9,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowAwaitOutsideFunction:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1},j=2,V=1|j,D=4,B=8;function F(t,e){return j|(t?D:0)|(e?B:0)}var M=function(e,s,r){this.options=e=function(t){var e={};for(var i in O)e[i]=t&&I(t,i)?t[i]:O[i];if(e.ecmaVersion>=2015&&(e.ecmaVersion-=2009),null==e.allowReserved&&(e.allowReserved=e.ecmaVersion<5),L(e.onToken)){var s=e.onToken;e.onToken=function(t){return s.push(t)}}return L(e.onComment)&&(e.onComment=function(t,e){return function(i,s,r,n,a,o){var p={type:i?"Block":"Line",value:s,start:r,end:n};t.locations&&(p.loc=new T(this,a,o)),t.ranges&&(p.range=[r,n]),e.push(p)}}(e,e.onComment)),e}(e),this.sourceFile=e.sourceFile,this.keywords=N(i[e.ecmaVersion>=6?6:5]);var n="";if(!e.allowReserved){for(var a=e.ecmaVersion;!(n=t[a]);a--);"module"===e.sourceType&&(n+=" await")}this.reservedWords=N(n);var o=(n?n+" ":"")+t.strict;this.reservedWordsStrict=N(o),this.reservedWordsStrictBind=N(o+" "+t.strictBind),this.input=String(s),this.containsEsc=!1,r?(this.pos=r,this.lineStart=this.input.lastIndexOf("\n",r-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(b).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=x.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule="module"===e.sourceType,this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.yieldPos=this.awaitPos=this.awaitIdentPos=0,this.labels=[],this.undefinedExports={},0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2),this.scopeStack=[],this.enterScope(1),this.regexpState=null},U={inFunction:{configurable:!0},inGenerator:{configurable:!0},inAsync:{configurable:!0},allowSuper:{configurable:!0},allowDirectSuper:{configurable:!0},treatFunctionsAsVar:{configurable:!0}};M.prototype.parse=function(){var t=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(t)},U.inFunction.get=function(){return(this.currentVarScope().flags&j)>0},U.inGenerator.get=function(){return(this.currentVarScope().flags&B)>0},U.inAsync.get=function(){return(this.currentVarScope().flags&D)>0},U.allowSuper.get=function(){return(64&this.currentThisScope().flags)>0},U.allowDirectSuper.get=function(){return(128&this.currentThisScope().flags)>0},U.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())},M.prototype.inNonArrowFunction=function(){return(this.currentThisScope().flags&j)>0},M.extend=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];for(var i=this,s=0;s<t.length;s++)i=t[s](i);return i},M.parse=function(t,e){return new this(e,t).parse()},M.parseExpressionAt=function(t,e,i){var s=new this(i,t,e);return s.nextToken(),s.parseExpression()},M.tokenizer=function(t,e){return new this(e,t)},Object.defineProperties(M.prototype,U);var q=M.prototype,X=/^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;function J(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1}q.strictDirective=function(t){for(;;){w.lastIndex=t,t+=w.exec(this.input)[0].length;var e=X.exec(this.input.slice(t));if(!e)return!1;if("use strict"===(e[1]||e[2]))return!0;w.lastIndex=t+=e[0].length,t+=w.exec(this.input)[0].length,";"===this.input[t]&&t++}},q.eat=function(t){return this.type===t&&(this.next(),!0)},q.isContextual=function(t){return this.type===x.name&&this.value===t&&!this.containsEsc},q.eatContextual=function(t){return!!this.isContextual(t)&&(this.next(),!0)},q.expectContextual=function(t){this.eatContextual(t)||this.unexpected()},q.canInsertSemicolon=function(){return this.type===x.eof||this.type===x.braceR||b.test(this.input.slice(this.lastTokEnd,this.start))},q.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},q.semicolon=function(){this.eat(x.semi)||this.insertSemicolon()||this.unexpected()},q.afterTrailingComma=function(t,e){if(this.type===t)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),e||this.next(),!0},q.expect=function(t){this.eat(t)||this.unexpected()},q.unexpected=function(t){this.raise(null!=t?t:this.start,"Unexpected token")},q.checkPatternErrors=function(t,e){if(t){t.trailingComma>-1&&this.raiseRecoverable(t.trailingComma,"Comma is not permitted after the rest element");var i=e?t.parenthesizedAssign:t.parenthesizedBind;i>-1&&this.raiseRecoverable(i,"Parenthesized pattern")}},q.checkExpressionErrors=function(t,e){if(!t)return!1;var i=t.shorthandAssign,s=t.doubleProto;if(!e)return i>=0||s>=0;i>=0&&this.raise(i,"Shorthand property assignments are valid only in destructuring patterns"),s>=0&&this.raiseRecoverable(s,"Redefinition of __proto__ property")},q.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value")},q.isSimpleAssignTarget=function(t){return"ParenthesizedExpression"===t.type?this.isSimpleAssignTarget(t.expression):"Identifier"===t.type||"MemberExpression"===t.type};var W=M.prototype;W.parseTopLevel=function(t){var e={};for(t.body||(t.body=[]);this.type!==x.eof;){var i=this.parseStatement(null,!0,e);t.body.push(i)}if(this.inModule)for(var s=0,r=Object.keys(this.undefinedExports);s<r.length;s+=1){var n=r[s];this.raiseRecoverable(this.undefinedExports[n].start,"Export '"+n+"' is not defined")}return this.adaptDirectivePrologue(t.body),this.next(),this.options.ecmaVersion>=6&&(t.sourceType=this.options.sourceType),this.finishNode(t,"Program")};var z={kind:"loop"},H={kind:"switch"};W.isLet=function(t){if(this.options.ecmaVersion<6||!this.isContextual("let"))return!1;w.lastIndex=this.pos;var e=w.exec(this.input),i=this.pos+e[0].length,r=this.input.charCodeAt(i);if(91===r)return!0;if(t)return!1;if(123===r)return!0;if(l(r,!0)){for(var n=i+1;u(this.input.charCodeAt(n),!0);)++n;var a=this.input.slice(i,n);if(!s.test(a))return!0}return!1},W.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))return!1;w.lastIndex=this.pos;var t=w.exec(this.input),e=this.pos+t[0].length;return!(b.test(this.input.slice(this.pos,e))||"function"!==this.input.slice(e,e+8)||e+8!==this.input.length&&u(this.input.charAt(e+8)))},W.parseStatement=function(t,e,i){var s,r=this.type,n=this.startNode();switch(this.isLet(t)&&(r=x._var,s="let"),r){case x._break:case x._continue:return this.parseBreakContinueStatement(n,r.keyword);case x._debugger:return this.parseDebuggerStatement(n);case x._do:return this.parseDoStatement(n);case x._for:return this.parseForStatement(n);case x._function:return t&&(this.strict||"if"!==t&&"label"!==t)&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(n,!1,!t);case x._class:return t&&this.unexpected(),this.parseClass(n,!0);case x._if:return this.parseIfStatement(n);case x._return:return this.parseReturnStatement(n);case x._switch:return this.parseSwitchStatement(n);case x._throw:return this.parseThrowStatement(n);case x._try:return this.parseTryStatement(n);case x._const:case x._var:return s=s||this.value,t&&"var"!==s&&this.unexpected(),this.parseVarStatement(n,s);case x._while:return this.parseWhileStatement(n);case x._with:return this.parseWithStatement(n);case x.braceL:return this.parseBlock(!0,n);case x.semi:return this.parseEmptyStatement(n);case x._export:case x._import:return this.options.allowImportExportEverywhere||(e||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),r===x._import?this.parseImport(n):this.parseExport(n,i);default:if(this.isAsyncFunction())return t&&this.unexpected(),this.next(),this.parseFunctionStatement(n,!0,!t);var a=this.value,o=this.parseExpression();return r===x.name&&"Identifier"===o.type&&this.eat(x.colon)?this.parseLabeledStatement(n,a,o,t):this.parseExpressionStatement(n,o)}},W.parseBreakContinueStatement=function(t,e){var i="break"===e;this.next(),this.eat(x.semi)||this.insertSemicolon()?t.label=null:this.type!==x.name?this.unexpected():(t.label=this.parseIdent(),this.semicolon());for(var s=0;s<this.labels.length;++s){var r=this.labels[s];if(null==t.label||r.name===t.label.name){if(null!=r.kind&&(i||"loop"===r.kind))break;if(t.label&&i)break}}return s===this.labels.length&&this.raise(t.start,"Unsyntactic "+e),this.finishNode(t,i?"BreakStatement":"ContinueStatement")},W.parseDebuggerStatement=function(t){return this.next(),this.semicolon(),this.finishNode(t,"DebuggerStatement")},W.parseDoStatement=function(t){return this.next(),this.labels.push(z),t.body=this.parseStatement("do"),this.labels.pop(),this.expect(x._while),t.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(x.semi):this.semicolon(),this.finishNode(t,"DoWhileStatement")},W.parseForStatement=function(t){this.next();var e=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;if(this.labels.push(z),this.enterScope(0),this.expect(x.parenL),this.type===x.semi)return e>-1&&this.unexpected(e),this.parseFor(t,null);var i=this.isLet();if(this.type===x._var||this.type===x._const||i){var s=this.startNode(),r=i?"let":this.value;return this.next(),this.parseVar(s,!0,r),this.finishNode(s,"VariableDeclaration"),!(this.type===x._in||this.options.ecmaVersion>=6&&this.isContextual("of"))||1!==s.declarations.length||"var"!==r&&s.declarations[0].init?(e>-1&&this.unexpected(e),this.parseFor(t,s)):(this.options.ecmaVersion>=9&&(this.type===x._in?e>-1&&this.unexpected(e):t.await=e>-1),this.parseForIn(t,s))}var n=new J,a=this.parseExpression(!0,n);return this.type===x._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.options.ecmaVersion>=9&&(this.type===x._in?e>-1&&this.unexpected(e):t.await=e>-1),this.toAssignable(a,!1,n),this.checkLVal(a),this.parseForIn(t,a)):(this.checkExpressionErrors(n,!0),e>-1&&this.unexpected(e),this.parseFor(t,a))},W.parseFunctionStatement=function(t,e,i){return this.next(),this.parseFunction(t,Q|(i?0:K),!1,e)},W.parseIfStatement=function(t){return this.next(),t.test=this.parseParenExpression(),t.consequent=this.parseStatement("if"),t.alternate=this.eat(x._else)?this.parseStatement("if"):null,this.finishNode(t,"IfStatement")},W.parseReturnStatement=function(t){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(x.semi)||this.insertSemicolon()?t.argument=null:(t.argument=this.parseExpression(),this.semicolon()),this.finishNode(t,"ReturnStatement")},W.parseSwitchStatement=function(t){var e;this.next(),t.discriminant=this.parseParenExpression(),t.cases=[],this.expect(x.braceL),this.labels.push(H),this.enterScope(0);for(var i=!1;this.type!==x.braceR;)if(this.type===x._case||this.type===x._default){var s=this.type===x._case;e&&this.finishNode(e,"SwitchCase"),t.cases.push(e=this.startNode()),e.consequent=[],this.next(),s?e.test=this.parseExpression():(i&&this.raiseRecoverable(this.lastTokStart,"Multiple default clauses"),i=!0,e.test=null),this.expect(x.colon)}else e||this.unexpected(),e.consequent.push(this.parseStatement(null));return this.exitScope(),e&&this.finishNode(e,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(t,"SwitchStatement")},W.parseThrowStatement=function(t){return this.next(),b.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),t.argument=this.parseExpression(),this.semicolon(),this.finishNode(t,"ThrowStatement")};var G=[];W.parseTryStatement=function(t){if(this.next(),t.block=this.parseBlock(),t.handler=null,this.type===x._catch){var e=this.startNode();if(this.next(),this.eat(x.parenL)){e.param=this.parseBindingAtom();var i="Identifier"===e.param.type;this.enterScope(i?32:0),this.checkLVal(e.param,i?4:2),this.expect(x.parenR)}else this.options.ecmaVersion<10&&this.unexpected(),e.param=null,this.enterScope(0);e.body=this.parseBlock(!1),this.exitScope(),t.handler=this.finishNode(e,"CatchClause")}return t.finalizer=this.eat(x._finally)?this.parseBlock():null,t.handler||t.finalizer||this.raise(t.start,"Missing catch or finally clause"),this.finishNode(t,"TryStatement")},W.parseVarStatement=function(t,e){return this.next(),this.parseVar(t,!1,e),this.semicolon(),this.finishNode(t,"VariableDeclaration")},W.parseWhileStatement=function(t){return this.next(),t.test=this.parseParenExpression(),this.labels.push(z),t.body=this.parseStatement("while"),this.labels.pop(),this.finishNode(t,"WhileStatement")},W.parseWithStatement=function(t){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),t.object=this.parseParenExpression(),t.body=this.parseStatement("with"),this.finishNode(t,"WithStatement")},W.parseEmptyStatement=function(t){return this.next(),this.finishNode(t,"EmptyStatement")},W.parseLabeledStatement=function(t,e,i,s){for(var r=0,n=this.labels;r<n.length;r+=1)n[r].name===e&&this.raise(i.start,"Label '"+e+"' is already declared");for(var a=this.type.isLoop?"loop":this.type===x._switch?"switch":null,o=this.labels.length-1;o>=0;o--){var p=this.labels[o];if(p.statementStart!==t.start)break;p.statementStart=this.start,p.kind=a}return this.labels.push({name:e,kind:a,statementStart:this.start}),t.body=this.parseStatement(s?-1===s.indexOf("label")?s+"label":s:"label"),this.labels.pop(),t.label=i,this.finishNode(t,"LabeledStatement")},W.parseExpressionStatement=function(t,e){return t.expression=e,this.semicolon(),this.finishNode(t,"ExpressionStatement")},W.parseBlock=function(t,e){for(void 0===t&&(t=!0),void 0===e&&(e=this.startNode()),e.body=[],this.expect(x.braceL),t&&this.enterScope(0);!this.eat(x.braceR);){var i=this.parseStatement(null);e.body.push(i)}return t&&this.exitScope(),this.finishNode(e,"BlockStatement")},W.parseFor=function(t,e){return t.init=e,this.expect(x.semi),t.test=this.type===x.semi?null:this.parseExpression(),this.expect(x.semi),t.update=this.type===x.parenR?null:this.parseExpression(),this.expect(x.parenR),t.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(t,"ForStatement")},W.parseForIn=function(t,e){var i=this.type===x._in?"ForInStatement":"ForOfStatement";return this.next(),"ForInStatement"===i&&("AssignmentPattern"===e.type||"VariableDeclaration"===e.type&&null!=e.declarations[0].init&&(this.strict||"Identifier"!==e.declarations[0].id.type))&&this.raise(e.start,"Invalid assignment in for-in loop head"),t.left=e,t.right="ForInStatement"===i?this.parseExpression():this.parseMaybeAssign(),this.expect(x.parenR),t.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(t,i)},W.parseVar=function(t,e,i){for(t.declarations=[],t.kind=i;;){var s=this.startNode();if(this.parseVarId(s,i),this.eat(x.eq)?s.init=this.parseMaybeAssign(e):"const"!==i||this.type===x._in||this.options.ecmaVersion>=6&&this.isContextual("of")?"Identifier"===s.id.type||e&&(this.type===x._in||this.isContextual("of"))?s.init=null:this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),t.declarations.push(this.finishNode(s,"VariableDeclarator")),!this.eat(x.comma))break}return t},W.parseVarId=function(t,e){"const"!==e&&"let"!==e||!this.isContextual("let")||this.raiseRecoverable(this.start,"let is disallowed as a lexically bound name"),t.id=this.parseBindingAtom(),this.checkLVal(t.id,"var"===e?1:2,!1)};var Q=1,K=2;W.parseFunction=function(t,e,i,s){this.initFunction(t),(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!s)&&(this.type===x.star&&e&K&&this.unexpected(),t.generator=this.eat(x.star)),this.options.ecmaVersion>=8&&(t.async=!!s),e&Q&&(t.id=4&e&&this.type!==x.name?null:this.parseIdent(),!t.id||e&K||this.checkLVal(t.id,this.strict||t.generator||t.async?this.treatFunctionsAsVar?1:2:3));var r=this.yieldPos,n=this.awaitPos,a=this.awaitIdentPos;return this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(F(t.async,t.generator)),e&Q||(t.id=this.type===x.name?this.parseIdent():null),this.parseFunctionParams(t),this.parseFunctionBody(t,i,!1),this.yieldPos=r,this.awaitPos=n,this.awaitIdentPos=a,this.finishNode(t,e&Q?"FunctionDeclaration":"FunctionExpression")},W.parseFunctionParams=function(t){this.expect(x.parenL),t.params=this.parseBindingList(x.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams()},W.parseClass=function(t,e){this.next();var i=this.strict;this.strict=!0,this.parseClassId(t,e),this.parseClassSuper(t);var s=this.startNode(),r=!1;for(s.body=[],this.expect(x.braceL);!this.eat(x.braceR);){var n=this.parseClassElement(null!==t.superClass);n&&(s.body.push(n),"MethodDefinition"===n.type&&"constructor"===n.kind&&(r&&this.raise(n.start,"Duplicate constructor in the same class"),r=!0))}return t.body=this.finishNode(s,"ClassBody"),this.strict=i,this.finishNode(t,e?"ClassDeclaration":"ClassExpression")},W.parseClassElement=function(t){var e=this;if(this.eat(x.semi))return null;var i=this.startNode(),s=function(t,s){void 0===s&&(s=!1);var r=e.start,n=e.startLoc;return!(!e.eatContextual(t)||(e.type===x.parenL||s&&e.canInsertSemicolon())&&(i.key&&e.unexpected(),i.computed=!1,i.key=e.startNodeAt(r,n),i.key.name=t,e.finishNode(i.key,"Identifier"),1))};i.kind="method",i.static=s("static");var r=this.eat(x.star),n=!1;r||(this.options.ecmaVersion>=8&&s("async",!0)?(n=!0,r=this.options.ecmaVersion>=9&&this.eat(x.star)):s("get")?i.kind="get":s("set")&&(i.kind="set")),i.key||this.parsePropertyName(i);var a=i.key,o=!1;return i.computed||i.static||!("Identifier"===a.type&&"constructor"===a.name||"Literal"===a.type&&"constructor"===a.value)?i.static&&"Identifier"===a.type&&"prototype"===a.name&&this.raise(a.start,"Classes may not have a static property named prototype"):("method"!==i.kind&&this.raise(a.start,"Constructor can't have get/set modifier"),r&&this.raise(a.start,"Constructor can't be a generator"),n&&this.raise(a.start,"Constructor can't be an async method"),i.kind="constructor",o=t),this.parseClassMethod(i,r,n,o),"get"===i.kind&&0!==i.value.params.length&&this.raiseRecoverable(i.value.start,"getter should have no params"),"set"===i.kind&&1!==i.value.params.length&&this.raiseRecoverable(i.value.start,"setter should have exactly one param"),"set"===i.kind&&"RestElement"===i.value.params[0].type&&this.raiseRecoverable(i.value.params[0].start,"Setter cannot use rest params"),i},W.parseClassMethod=function(t,e,i,s){return t.value=this.parseMethod(e,i,s),this.finishNode(t,"MethodDefinition")},W.parseClassId=function(t,e){this.type===x.name?(t.id=this.parseIdent(),e&&this.checkLVal(t.id,2,!1)):(!0===e&&this.unexpected(),t.id=null)},W.parseClassSuper=function(t){t.superClass=this.eat(x._extends)?this.parseExprSubscripts():null},W.parseExport=function(t,e){if(this.next(),this.eat(x.star))return this.expectContextual("from"),this.type!==x.string&&this.unexpected(),t.source=this.parseExprAtom(),this.semicolon(),this.finishNode(t,"ExportAllDeclaration");if(this.eat(x._default)){var i;if(this.checkExport(e,"default",this.lastTokStart),this.type===x._function||(i=this.isAsyncFunction())){var s=this.startNode();this.next(),i&&this.next(),t.declaration=this.parseFunction(s,4|Q,!1,i)}else if(this.type===x._class){var r=this.startNode();t.declaration=this.parseClass(r,"nullableID")}else t.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(t,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())t.declaration=this.parseStatement(null),"VariableDeclaration"===t.declaration.type?this.checkVariableExport(e,t.declaration.declarations):this.checkExport(e,t.declaration.id.name,t.declaration.id.start),t.specifiers=[],t.source=null;else{if(t.declaration=null,t.specifiers=this.parseExportSpecifiers(e),this.eatContextual("from"))this.type!==x.string&&this.unexpected(),t.source=this.parseExprAtom();else{for(var n=0,a=t.specifiers;n<a.length;n+=1){var o=a[n];this.checkUnreserved(o.local),this.checkLocalExport(o.local)}t.source=null}this.semicolon()}return this.finishNode(t,"ExportNamedDeclaration")},W.checkExport=function(t,e,i){t&&(I(t,e)&&this.raiseRecoverable(i,"Duplicate export '"+e+"'"),t[e]=!0)},W.checkPatternExport=function(t,e){var i=e.type;if("Identifier"===i)this.checkExport(t,e.name,e.start);else if("ObjectPattern"===i)for(var s=0,r=e.properties;s<r.length;s+=1)this.checkPatternExport(t,r[s]);else if("ArrayPattern"===i)for(var n=0,a=e.elements;n<a.length;n+=1){var o=a[n];o&&this.checkPatternExport(t,o)}else"Property"===i?this.checkPatternExport(t,e.value):"AssignmentPattern"===i?this.checkPatternExport(t,e.left):"RestElement"===i?this.checkPatternExport(t,e.argument):"ParenthesizedExpression"===i&&this.checkPatternExport(t,e.expression)},W.checkVariableExport=function(t,e){if(t)for(var i=0,s=e;i<s.length;i+=1)this.checkPatternExport(t,s[i].id)},W.shouldParseExportStatement=function(){return"var"===this.type.keyword||"const"===this.type.keyword||"class"===this.type.keyword||"function"===this.type.keyword||this.isLet()||this.isAsyncFunction()},W.parseExportSpecifiers=function(t){var e=[],i=!0;for(this.expect(x.braceL);!this.eat(x.braceR);){if(i)i=!1;else if(this.expect(x.comma),this.afterTrailingComma(x.braceR))break;var s=this.startNode();s.local=this.parseIdent(!0),s.exported=this.eatContextual("as")?this.parseIdent(!0):s.local,this.checkExport(t,s.exported.name,s.exported.start),e.push(this.finishNode(s,"ExportSpecifier"))}return e},W.parseImport=function(t){return this.next(),this.type===x.string?(t.specifiers=G,t.source=this.parseExprAtom()):(t.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),t.source=this.type===x.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(t,"ImportDeclaration")},W.parseImportSpecifiers=function(){var t=[],e=!0;if(this.type===x.name){var i=this.startNode();if(i.local=this.parseIdent(),this.checkLVal(i.local,2),t.push(this.finishNode(i,"ImportDefaultSpecifier")),!this.eat(x.comma))return t}if(this.type===x.star){var s=this.startNode();return this.next(),this.expectContextual("as"),s.local=this.parseIdent(),this.checkLVal(s.local,2),t.push(this.finishNode(s,"ImportNamespaceSpecifier")),t}for(this.expect(x.braceL);!this.eat(x.braceR);){if(e)e=!1;else if(this.expect(x.comma),this.afterTrailingComma(x.braceR))break;var r=this.startNode();r.imported=this.parseIdent(!0),this.eatContextual("as")?r.local=this.parseIdent():(this.checkUnreserved(r.imported),r.local=r.imported),this.checkLVal(r.local,2),t.push(this.finishNode(r,"ImportSpecifier"))}return t},W.adaptDirectivePrologue=function(t){for(var e=0;e<t.length&&this.isDirectiveCandidate(t[e]);++e)t[e].directive=t[e].expression.raw.slice(1,-1)},W.isDirectiveCandidate=function(t){return"ExpressionStatement"===t.type&&"Literal"===t.expression.type&&"string"==typeof t.expression.value&&('"'===this.input[t.start]||"'"===this.input[t.start])};var $=M.prototype;$.toAssignable=function(t,e,i){if(this.options.ecmaVersion>=6&&t)switch(t.type){case"Identifier":this.inAsync&&"await"===t.name&&this.raise(t.start,"Cannot use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":case"RestElement":break;case"ObjectExpression":t.type="ObjectPattern",i&&this.checkPatternErrors(i,!0);for(var s=0,r=t.properties;s<r.length;s+=1){var n=r[s];this.toAssignable(n,e),"RestElement"!==n.type||"ArrayPattern"!==n.argument.type&&"ObjectPattern"!==n.argument.type||this.raise(n.argument.start,"Unexpected token")}break;case"Property":"init"!==t.kind&&this.raise(t.key.start,"Object pattern can't contain getter or setter"),this.toAssignable(t.value,e);break;case"ArrayExpression":t.type="ArrayPattern",i&&this.checkPatternErrors(i,!0),this.toAssignableList(t.elements,e);break;case"SpreadElement":t.type="RestElement",this.toAssignable(t.argument,e),"AssignmentPattern"===t.argument.type&&this.raise(t.argument.start,"Rest elements cannot have a default value");break;case"AssignmentExpression":"="!==t.operator&&this.raise(t.left.end,"Only '=' operator can be used for specifying default value."),t.type="AssignmentPattern",delete t.operator,this.toAssignable(t.left,e);case"AssignmentPattern":break;case"ParenthesizedExpression":this.toAssignable(t.expression,e,i);break;case"MemberExpression":if(!e)break;default:this.raise(t.start,"Assigning to rvalue")}else i&&this.checkPatternErrors(i,!0);return t},$.toAssignableList=function(t,e){for(var i=t.length,s=0;s<i;s++){var r=t[s];r&&this.toAssignable(r,e)}if(i){var n=t[i-1];6===this.options.ecmaVersion&&e&&n&&"RestElement"===n.type&&"Identifier"!==n.argument.type&&this.unexpected(n.argument.start)}return t},$.parseSpread=function(t){var e=this.startNode();return this.next(),e.argument=this.parseMaybeAssign(!1,t),this.finishNode(e,"SpreadElement")},$.parseRestBinding=function(){var t=this.startNode();return this.next(),6===this.options.ecmaVersion&&this.type!==x.name&&this.unexpected(),t.argument=this.parseBindingAtom(),this.finishNode(t,"RestElement")},$.parseBindingAtom=function(){if(this.options.ecmaVersion>=6)switch(this.type){case x.bracketL:var t=this.startNode();return this.next(),t.elements=this.parseBindingList(x.bracketR,!0,!0),this.finishNode(t,"ArrayPattern");case x.braceL:return this.parseObj(!0)}return this.parseIdent()},$.parseBindingList=function(t,e,i){for(var s=[],r=!0;!this.eat(t);)if(r?r=!1:this.expect(x.comma),e&&this.type===x.comma)s.push(null);else{if(i&&this.afterTrailingComma(t))break;if(this.type===x.ellipsis){var n=this.parseRestBinding();this.parseBindingListItem(n),s.push(n),this.type===x.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.expect(t);break}var a=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(a),s.push(a)}return s},$.parseBindingListItem=function(t){return t},$.parseMaybeDefault=function(t,e,i){if(i=i||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(x.eq))return i;var s=this.startNodeAt(t,e);return s.left=i,s.right=this.parseMaybeAssign(),this.finishNode(s,"AssignmentPattern")},$.checkLVal=function(t,e,i){switch(void 0===e&&(e=0),t.type){case"Identifier":this.strict&&this.reservedWordsStrictBind.test(t.name)&&this.raiseRecoverable(t.start,(e?"Binding ":"Assigning to ")+t.name+" in strict mode"),i&&(I(i,t.name)&&this.raiseRecoverable(t.start,"Argument name clash"),i[t.name]=!0),0!==e&&5!==e&&this.declareName(t.name,e,t.start);break;case"MemberExpression":e&&this.raiseRecoverable(t.start,"Binding member expression");break;case"ObjectPattern":for(var s=0,r=t.properties;s<r.length;s+=1)this.checkLVal(r[s],e,i);break;case"Property":this.checkLVal(t.value,e,i);break;case"ArrayPattern":for(var n=0,a=t.elements;n<a.length;n+=1){var o=a[n];o&&this.checkLVal(o,e,i)}break;case"AssignmentPattern":this.checkLVal(t.left,e,i);break;case"RestElement":this.checkLVal(t.argument,e,i);break;case"ParenthesizedExpression":this.checkLVal(t.expression,e,i);break;default:this.raise(t.start,(e?"Binding":"Assigning to")+" rvalue")}};var Y=M.prototype;Y.checkPropClash=function(t,e,i){if(!(this.options.ecmaVersion>=9&&"SpreadElement"===t.type||this.options.ecmaVersion>=6&&(t.computed||t.method||t.shorthand))){var s,r=t.key;switch(r.type){case"Identifier":s=r.name;break;case"Literal":s=String(r.value);break;default:return}var n=t.kind;if(this.options.ecmaVersion>=6)"__proto__"===s&&"init"===n&&(e.proto&&(i&&i.doubleProto<0?i.doubleProto=r.start:this.raiseRecoverable(r.start,"Redefinition of __proto__ property")),e.proto=!0);else{var a=e[s="$"+s];a?("init"===n?this.strict&&a.init||a.get||a.set:a.init||a[n])&&this.raiseRecoverable(r.start,"Redefinition of property"):a=e[s]={init:!1,get:!1,set:!1},a[n]=!0}}},Y.parseExpression=function(t,e){var i=this.start,s=this.startLoc,r=this.parseMaybeAssign(t,e);if(this.type===x.comma){var n=this.startNodeAt(i,s);for(n.expressions=[r];this.eat(x.comma);)n.expressions.push(this.parseMaybeAssign(t,e));return this.finishNode(n,"SequenceExpression")}return r},Y.parseMaybeAssign=function(t,e,i){if(this.isContextual("yield")){if(this.inGenerator)return this.parseYield(t);this.exprAllowed=!1}var s=!1,r=-1,n=-1,a=-1;e?(r=e.parenthesizedAssign,n=e.trailingComma,a=e.shorthandAssign,e.parenthesizedAssign=e.trailingComma=e.shorthandAssign=-1):(e=new J,s=!0);var o=this.start,p=this.startLoc;this.type!==x.parenL&&this.type!==x.name||(this.potentialArrowAt=this.start);var h=this.parseMaybeConditional(t,e);if(i&&(h=i.call(this,h,o,p)),this.type.isAssign){var c=this.startNodeAt(o,p);return c.operator=this.value,c.left=this.type===x.eq?this.toAssignable(h,!1,e):h,s||J.call(e),e.shorthandAssign=-1,this.checkLVal(h),this.next(),c.right=this.parseMaybeAssign(t),this.finishNode(c,"AssignmentExpression")}return s&&this.checkExpressionErrors(e,!0),r>-1&&(e.parenthesizedAssign=r),n>-1&&(e.trailingComma=n),a>-1&&(e.shorthandAssign=a),h},Y.parseMaybeConditional=function(t,e){var i=this.start,s=this.startLoc,r=this.parseExprOps(t,e);if(this.checkExpressionErrors(e))return r;if(this.eat(x.question)){var n=this.startNodeAt(i,s);return n.test=r,n.consequent=this.parseMaybeAssign(),this.expect(x.colon),n.alternate=this.parseMaybeAssign(t),this.finishNode(n,"ConditionalExpression")}return r},Y.parseExprOps=function(t,e){var i=this.start,s=this.startLoc,r=this.parseMaybeUnary(e,!1);return this.checkExpressionErrors(e)?r:r.start===i&&"ArrowFunctionExpression"===r.type?r:this.parseExprOp(r,i,s,-1,t)},Y.parseExprOp=function(t,e,i,s,r){var n=this.type.binop;if(null!=n&&(!r||this.type!==x._in)&&n>s){var a=this.type===x.logicalOR||this.type===x.logicalAND,o=this.value;this.next();var p=this.start,h=this.startLoc,c=this.parseExprOp(this.parseMaybeUnary(null,!1),p,h,n,r),l=this.buildBinary(e,i,t,c,o,a);return this.parseExprOp(l,e,i,s,r)}return t},Y.buildBinary=function(t,e,i,s,r,n){var a=this.startNodeAt(t,e);return a.left=i,a.operator=r,a.right=s,this.finishNode(a,n?"LogicalExpression":"BinaryExpression")},Y.parseMaybeUnary=function(t,e){var i,s=this.start,r=this.startLoc;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction))i=this.parseAwait(),e=!0;else if(this.type.prefix){var n=this.startNode(),a=this.type===x.incDec;n.operator=this.value,n.prefix=!0,this.next(),n.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(t,!0),a?this.checkLVal(n.argument):this.strict&&"delete"===n.operator&&"Identifier"===n.argument.type?this.raiseRecoverable(n.start,"Deleting local variable in strict mode"):e=!0,i=this.finishNode(n,a?"UpdateExpression":"UnaryExpression")}else{if(i=this.parseExprSubscripts(t),this.checkExpressionErrors(t))return i;for(;this.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(s,r);o.operator=this.value,o.prefix=!1,o.argument=i,this.checkLVal(i),this.next(),i=this.finishNode(o,"UpdateExpression")}}return!e&&this.eat(x.starstar)?this.buildBinary(s,r,i,this.parseMaybeUnary(null,!1),"**",!1):i},Y.parseExprSubscripts=function(t){var e=this.start,i=this.startLoc,s=this.parseExprAtom(t),r="ArrowFunctionExpression"===s.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd);if(this.checkExpressionErrors(t)||r)return s;var n=this.parseSubscripts(s,e,i);return t&&"MemberExpression"===n.type&&(t.parenthesizedAssign>=n.start&&(t.parenthesizedAssign=-1),t.parenthesizedBind>=n.start&&(t.parenthesizedBind=-1)),n},Y.parseSubscripts=function(t,e,i,s){for(var r=this.options.ecmaVersion>=8&&"Identifier"===t.type&&"async"===t.name&&this.lastTokEnd===t.end&&!this.canInsertSemicolon()&&"async"===this.input.slice(t.start,t.end);;){var n=this.parseSubscript(t,e,i,s,r);if(n===t||"ArrowFunctionExpression"===n.type)return n;t=n}},Y.parseSubscript=function(t,e,i,s,r){var n=this.eat(x.bracketL);if(n||this.eat(x.dot)){var a=this.startNodeAt(e,i);a.object=t,a.property=n?this.parseExpression():this.parseIdent(!0),a.computed=!!n,n&&this.expect(x.bracketR),t=this.finishNode(a,"MemberExpression")}else if(!s&&this.eat(x.parenL)){var o=new J,p=this.yieldPos,h=this.awaitPos,c=this.awaitIdentPos;this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0;var l=this.parseExprList(x.parenR,this.options.ecmaVersion>=8,!1,o);if(r&&!this.canInsertSemicolon()&&this.eat(x.arrow))return this.checkPatternErrors(o,!1),this.checkYieldAwaitInDefaultParams(),this.awaitIdentPos>0&&this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function"),this.yieldPos=p,this.awaitPos=h,this.awaitIdentPos=c,this.parseArrowExpression(this.startNodeAt(e,i),l,!0);this.checkExpressionErrors(o,!0),this.yieldPos=p||this.yieldPos,this.awaitPos=h||this.awaitPos,this.awaitIdentPos=c||this.awaitIdentPos;var u=this.startNodeAt(e,i);u.callee=t,u.arguments=l,t=this.finishNode(u,"CallExpression")}else if(this.type===x.backQuote){var d=this.startNodeAt(e,i);d.tag=t,d.quasi=this.parseTemplate({isTagged:!0}),t=this.finishNode(d,"TaggedTemplateExpression")}return t},Y.parseExprAtom=function(t){this.type===x.slash&&this.readRegexp();var e,i=this.potentialArrowAt===this.start;switch(this.type){case x._super:return this.allowSuper||this.raise(this.start,"'super' keyword outside a method"),e=this.startNode(),this.next(),this.type!==x.parenL||this.allowDirectSuper||this.raise(e.start,"super() call outside constructor of a subclass"),this.type!==x.dot&&this.type!==x.bracketL&&this.type!==x.parenL&&this.unexpected(),this.finishNode(e,"Super");case x._this:return e=this.startNode(),this.next(),this.finishNode(e,"ThisExpression");case x.name:var s=this.start,r=this.startLoc,n=this.containsEsc,a=this.parseIdent(!1);if(this.options.ecmaVersion>=8&&!n&&"async"===a.name&&!this.canInsertSemicolon()&&this.eat(x._function))return this.parseFunction(this.startNodeAt(s,r),0,!1,!0);if(i&&!this.canInsertSemicolon()){if(this.eat(x.arrow))return this.parseArrowExpression(this.startNodeAt(s,r),[a],!1);if(this.options.ecmaVersion>=8&&"async"===a.name&&this.type===x.name&&!n)return a=this.parseIdent(!1),!this.canInsertSemicolon()&&this.eat(x.arrow)||this.unexpected(),this.parseArrowExpression(this.startNodeAt(s,r),[a],!0)}return a;case x.regexp:var o=this.value;return(e=this.parseLiteral(o.value)).regex={pattern:o.pattern,flags:o.flags},e;case x.num:case x.string:return this.parseLiteral(this.value);case x._null:case x._true:case x._false:return(e=this.startNode()).value=this.type===x._null?null:this.type===x._true,e.raw=this.type.keyword,this.next(),this.finishNode(e,"Literal");case x.parenL:var p=this.start,h=this.parseParenAndDistinguishExpression(i);return t&&(t.parenthesizedAssign<0&&!this.isSimpleAssignTarget(h)&&(t.parenthesizedAssign=p),t.parenthesizedBind<0&&(t.parenthesizedBind=p)),h;case x.bracketL:return e=this.startNode(),this.next(),e.elements=this.parseExprList(x.bracketR,!0,!0,t),this.finishNode(e,"ArrayExpression");case x.braceL:return this.parseObj(!1,t);case x._function:return e=this.startNode(),this.next(),this.parseFunction(e,0);case x._class:return this.parseClass(this.startNode(),!1);case x._new:return this.parseNew();case x.backQuote:return this.parseTemplate();default:this.unexpected()}},Y.parseLiteral=function(t){var e=this.startNode();return e.value=t,e.raw=this.input.slice(this.start,this.end),this.next(),this.finishNode(e,"Literal")},Y.parseParenExpression=function(){this.expect(x.parenL);var t=this.parseExpression();return this.expect(x.parenR),t},Y.parseParenAndDistinguishExpression=function(t){var e,i=this.start,s=this.startLoc,r=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var n,a=this.start,o=this.startLoc,p=[],h=!0,c=!1,l=new J,u=this.yieldPos,d=this.awaitPos;for(this.yieldPos=0,this.awaitPos=0;this.type!==x.parenR;){if(h?h=!1:this.expect(x.comma),r&&this.afterTrailingComma(x.parenR,!0)){c=!0;break}if(this.type===x.ellipsis){n=this.start,p.push(this.parseParenItem(this.parseRestBinding())),this.type===x.comma&&this.raise(this.start,"Comma is not permitted after the rest element");break}p.push(this.parseMaybeAssign(!1,l,this.parseParenItem))}var f=this.start,m=this.startLoc;if(this.expect(x.parenR),t&&!this.canInsertSemicolon()&&this.eat(x.arrow))return this.checkPatternErrors(l,!1),this.checkYieldAwaitInDefaultParams(),this.yieldPos=u,this.awaitPos=d,this.parseParenArrowList(i,s,p);p.length&&!c||this.unexpected(this.lastTokStart),n&&this.unexpected(n),this.checkExpressionErrors(l,!0),this.yieldPos=u||this.yieldPos,this.awaitPos=d||this.awaitPos,p.length>1?((e=this.startNodeAt(a,o)).expressions=p,this.finishNodeAt(e,"SequenceExpression",f,m)):e=p[0]}else e=this.parseParenExpression();if(this.options.preserveParens){var g=this.startNodeAt(i,s);return g.expression=e,this.finishNode(g,"ParenthesizedExpression")}return e},Y.parseParenItem=function(t){return t},Y.parseParenArrowList=function(t,e,i){return this.parseArrowExpression(this.startNodeAt(t,e),i)};var Z=[];Y.parseNew=function(){var t=this.startNode(),e=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(x.dot)){t.meta=e;var i=this.containsEsc;return t.property=this.parseIdent(!0),("target"!==t.property.name||i)&&this.raiseRecoverable(t.property.start,"The only valid meta property for new is new.target"),this.inNonArrowFunction()||this.raiseRecoverable(t.start,"new.target can only be used in functions"),this.finishNode(t,"MetaProperty")}var s=this.start,r=this.startLoc;return t.callee=this.parseSubscripts(this.parseExprAtom(),s,r,!0),t.arguments=this.eat(x.parenL)?this.parseExprList(x.parenR,this.options.ecmaVersion>=8,!1):Z,this.finishNode(t,"NewExpression")},Y.parseTemplateElement=function(t){var e=t.isTagged,i=this.startNode();return this.type===x.invalidTemplate?(e||this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal"),i.value={raw:this.value,cooked:null}):i.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),i.tail=this.type===x.backQuote,this.finishNode(i,"TemplateElement")},Y.parseTemplate=function(t){void 0===t&&(t={});var e=t.isTagged;void 0===e&&(e=!1);var i=this.startNode();this.next(),i.expressions=[];var s=this.parseTemplateElement({isTagged:e});for(i.quasis=[s];!s.tail;)this.type===x.eof&&this.raise(this.pos,"Unterminated template literal"),this.expect(x.dollarBraceL),i.expressions.push(this.parseExpression()),this.expect(x.braceR),i.quasis.push(s=this.parseTemplateElement({isTagged:e}));return this.next(),this.finishNode(i,"TemplateLiteral")},Y.isAsyncProp=function(t){return!t.computed&&"Identifier"===t.key.type&&"async"===t.key.name&&(this.type===x.name||this.type===x.num||this.type===x.string||this.type===x.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===x.star)&&!b.test(this.input.slice(this.lastTokEnd,this.start))},Y.parseObj=function(t,e){var i=this.startNode(),s=!0,r={};for(i.properties=[],this.next();!this.eat(x.braceR);){if(s)s=!1;else if(this.expect(x.comma),this.afterTrailingComma(x.braceR))break;var n=this.parseProperty(t,e);t||this.checkPropClash(n,r,e),i.properties.push(n)}return this.finishNode(i,t?"ObjectPattern":"ObjectExpression")},Y.parseProperty=function(t,e){var i,s,r,n,a=this.startNode();if(this.options.ecmaVersion>=9&&this.eat(x.ellipsis))return t?(a.argument=this.parseIdent(!1),this.type===x.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.finishNode(a,"RestElement")):(this.type===x.parenL&&e&&(e.parenthesizedAssign<0&&(e.parenthesizedAssign=this.start),e.parenthesizedBind<0&&(e.parenthesizedBind=this.start)),a.argument=this.parseMaybeAssign(!1,e),this.type===x.comma&&e&&e.trailingComma<0&&(e.trailingComma=this.start),this.finishNode(a,"SpreadElement"));this.options.ecmaVersion>=6&&(a.method=!1,a.shorthand=!1,(t||e)&&(r=this.start,n=this.startLoc),t||(i=this.eat(x.star)));var o=this.containsEsc;return this.parsePropertyName(a),!t&&!o&&this.options.ecmaVersion>=8&&!i&&this.isAsyncProp(a)?(s=!0,i=this.options.ecmaVersion>=9&&this.eat(x.star),this.parsePropertyName(a,e)):s=!1,this.parsePropertyValue(a,t,i,s,r,n,e,o),this.finishNode(a,"Property")},Y.parsePropertyValue=function(t,e,i,s,r,n,a,o){(i||s)&&this.type===x.colon&&this.unexpected(),this.eat(x.colon)?(t.value=e?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,a),t.kind="init"):this.options.ecmaVersion>=6&&this.type===x.parenL?(e&&this.unexpected(),t.kind="init",t.method=!0,t.value=this.parseMethod(i,s)):e||o||!(this.options.ecmaVersion>=5)||t.computed||"Identifier"!==t.key.type||"get"!==t.key.name&&"set"!==t.key.name||this.type===x.comma||this.type===x.braceR?this.options.ecmaVersion>=6&&!t.computed&&"Identifier"===t.key.type?((i||s)&&this.unexpected(),this.checkUnreserved(t.key),"await"!==t.key.name||this.awaitIdentPos||(this.awaitIdentPos=r),t.kind="init",e?t.value=this.parseMaybeDefault(r,n,t.key):this.type===x.eq&&a?(a.shorthandAssign<0&&(a.shorthandAssign=this.start),t.value=this.parseMaybeDefault(r,n,t.key)):t.value=t.key,t.shorthand=!0):this.unexpected():((i||s)&&this.unexpected(),t.kind=t.key.name,this.parsePropertyName(t),t.value=this.parseMethod(!1),t.value.params.length!==("get"===t.kind?0:1)?this.raiseRecoverable(t.value.start,"get"===t.kind?"getter should have no params":"setter should have exactly one param"):"set"===t.kind&&"RestElement"===t.value.params[0].type&&this.raiseRecoverable(t.value.params[0].start,"Setter cannot use rest params"))},Y.parsePropertyName=function(t){if(this.options.ecmaVersion>=6){if(this.eat(x.bracketL))return t.computed=!0,t.key=this.parseMaybeAssign(),this.expect(x.bracketR),t.key;t.computed=!1}return t.key=this.type===x.num||this.type===x.string?this.parseExprAtom():this.parseIdent(!0)},Y.initFunction=function(t){t.id=null,this.options.ecmaVersion>=6&&(t.generator=t.expression=!1),this.options.ecmaVersion>=8&&(t.async=!1)},Y.parseMethod=function(t,e,i){var s=this.startNode(),r=this.yieldPos,n=this.awaitPos,a=this.awaitIdentPos;return this.initFunction(s),this.options.ecmaVersion>=6&&(s.generator=t),this.options.ecmaVersion>=8&&(s.async=!!e),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(64|F(e,s.generator)|(i?128:0)),this.expect(x.parenL),s.params=this.parseBindingList(x.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(s,!1,!0),this.yieldPos=r,this.awaitPos=n,this.awaitIdentPos=a,this.finishNode(s,"FunctionExpression")},Y.parseArrowExpression=function(t,e,i){var s=this.yieldPos,r=this.awaitPos,n=this.awaitIdentPos;return this.enterScope(16|F(i,!1)),this.initFunction(t),this.options.ecmaVersion>=8&&(t.async=!!i),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,t.params=this.toAssignableList(e,!0),this.parseFunctionBody(t,!0,!1),this.yieldPos=s,this.awaitPos=r,this.awaitIdentPos=n,this.finishNode(t,"ArrowFunctionExpression")},Y.parseFunctionBody=function(t,e,i){var s=this.strict,r=!1;if(e&&this.type!==x.braceL)t.body=this.parseMaybeAssign(),t.expression=!0,this.checkParams(t,!1);else{var n=this.options.ecmaVersion>=7&&!this.isSimpleParamList(t.params);s&&!n||(r=this.strictDirective(this.end))&&n&&this.raiseRecoverable(t.start,"Illegal 'use strict' directive in function with non-simple parameter list");var a=this.labels;this.labels=[],r&&(this.strict=!0),this.checkParams(t,!s&&!r&&!e&&!i&&this.isSimpleParamList(t.params)),t.body=this.parseBlock(!1),t.expression=!1,this.adaptDirectivePrologue(t.body.body),this.labels=a}this.exitScope(),this.strict&&t.id&&this.checkLVal(t.id,5),this.strict=s},Y.isSimpleParamList=function(t){for(var e=0,i=t;e<i.length;e+=1)if("Identifier"!==i[e].type)return!1;return!0},Y.checkParams=function(t,e){for(var i={},s=0,r=t.params;s<r.length;s+=1)this.checkLVal(r[s],1,e?null:i)},Y.parseExprList=function(t,e,i,s){for(var r=[],n=!0;!this.eat(t);){if(n)n=!1;else if(this.expect(x.comma),e&&this.afterTrailingComma(t))break;var a=void 0;i&&this.type===x.comma?a=null:this.type===x.ellipsis?(a=this.parseSpread(s),s&&this.type===x.comma&&s.trailingComma<0&&(s.trailingComma=this.start)):a=this.parseMaybeAssign(!1,s),r.push(a)}return r},Y.checkUnreserved=function(t){var e=t.start,i=t.end,s=t.name;this.inGenerator&&"yield"===s&&this.raiseRecoverable(e,"Cannot use 'yield' as identifier inside a generator"),this.inAsync&&"await"===s&&this.raiseRecoverable(e,"Cannot use 'await' as identifier inside an async function"),this.keywords.test(s)&&this.raise(e,"Unexpected keyword '"+s+"'"),this.options.ecmaVersion<6&&-1!==this.input.slice(e,i).indexOf("\\")||(this.strict?this.reservedWordsStrict:this.reservedWords).test(s)&&(this.inAsync||"await"!==s||this.raiseRecoverable(e,"Cannot use keyword 'await' outside an async function"),this.raiseRecoverable(e,"The keyword '"+s+"' is reserved"))},Y.parseIdent=function(t,e){var i=this.startNode();return t&&"never"===this.options.allowReserved&&(t=!1),this.type===x.name?i.name=this.value:this.type.keyword?(i.name=this.type.keyword,"class"!==i.name&&"function"!==i.name||this.lastTokEnd===this.lastTokStart+1&&46===this.input.charCodeAt(this.lastTokStart)||this.context.pop()):this.unexpected(),this.next(),this.finishNode(i,"Identifier"),t||(this.checkUnreserved(i),"await"!==i.name||this.awaitIdentPos||(this.awaitIdentPos=i.start)),i},Y.parseYield=function(t){this.yieldPos||(this.yieldPos=this.start);var e=this.startNode();return this.next(),this.type===x.semi||this.canInsertSemicolon()||this.type!==x.star&&!this.type.startsExpr?(e.delegate=!1,e.argument=null):(e.delegate=this.eat(x.star),e.argument=this.parseMaybeAssign(t)),this.finishNode(e,"YieldExpression")},Y.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var t=this.startNode();return this.next(),t.argument=this.parseMaybeUnary(null,!0),this.finishNode(t,"AwaitExpression")};var tt=M.prototype;tt.raise=function(t,e){var i=R(this.input,t),s=new SyntaxError(e+=" ("+i.line+":"+i.column+")");throw s.pos=t,s.loc=i,s.raisedAt=this.pos,s},tt.raiseRecoverable=tt.raise,tt.curPosition=function(){if(this.options.locations)return new P(this.curLine,this.pos-this.lineStart)};var et=M.prototype,it=function(t){this.flags=t,this.var=[],this.lexical=[],this.functions=[]};et.enterScope=function(t){this.scopeStack.push(new it(t))},et.exitScope=function(){this.scopeStack.pop()},et.treatFunctionsAsVarInScope=function(t){return t.flags&j||!this.inModule&&1&t.flags},et.declareName=function(t,e,i){var s=!1;if(2===e){var r=this.currentScope();s=r.lexical.indexOf(t)>-1||r.functions.indexOf(t)>-1||r.var.indexOf(t)>-1,r.lexical.push(t),this.inModule&&1&r.flags&&delete this.undefinedExports[t]}else if(4===e)this.currentScope().lexical.push(t);else if(3===e){var n=this.currentScope();s=this.treatFunctionsAsVar?n.lexical.indexOf(t)>-1:n.lexical.indexOf(t)>-1||n.var.indexOf(t)>-1,n.functions.push(t)}else for(var a=this.scopeStack.length-1;a>=0;--a){var o=this.scopeStack[a];if(o.lexical.indexOf(t)>-1&&!(32&o.flags&&o.lexical[0]===t)||!this.treatFunctionsAsVarInScope(o)&&o.functions.indexOf(t)>-1){s=!0;break}if(o.var.push(t),this.inModule&&1&o.flags&&delete this.undefinedExports[t],o.flags&V)break}s&&this.raiseRecoverable(i,"Identifier '"+t+"' has already been declared")},et.checkLocalExport=function(t){-1===this.scopeStack[0].lexical.indexOf(t.name)&&-1===this.scopeStack[0].var.indexOf(t.name)&&(this.undefinedExports[t.name]=t)},et.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]},et.currentVarScope=function(){for(var t=this.scopeStack.length-1;;t--){var e=this.scopeStack[t];if(e.flags&V)return e}},et.currentThisScope=function(){for(var t=this.scopeStack.length-1;;t--){var e=this.scopeStack[t];if(e.flags&V&&!(16&e.flags))return e}};var st=function(t,e,i){this.type="",this.start=e,this.end=0,t.options.locations&&(this.loc=new T(t,i)),t.options.directSourceFile&&(this.sourceFile=t.options.directSourceFile),t.options.ranges&&(this.range=[e,0])},rt=M.prototype;function nt(t,e,i,s){return t.type=e,t.end=i,this.options.locations&&(t.loc.end=s),this.options.ranges&&(t.range[1]=i),t}rt.startNode=function(){return new st(this,this.start,this.startLoc)},rt.startNodeAt=function(t,e){return new st(this,t,e)},rt.finishNode=function(t,e){return nt.call(this,t,e,this.lastTokEnd,this.lastTokEndLoc)},rt.finishNodeAt=function(t,e,i,s){return nt.call(this,t,e,i,s)};var at=function(t,e,i,s,r){this.token=t,this.isExpr=!!e,this.preserveSpace=!!i,this.override=s,this.generator=!!r},ot={b_stat:new at("{",!1),b_expr:new at("{",!0),b_tmpl:new at("${",!1),p_stat:new at("(",!1),p_expr:new at("(",!0),q_tmpl:new at("`",!0,!0,function(t){return t.tryReadTemplateToken()}),f_stat:new at("function",!1),f_expr:new at("function",!0),f_expr_gen:new at("function",!0,!1,null,!0),f_gen:new at("function",!1,!1,null,!0)},pt=M.prototype;pt.initialContext=function(){return[ot.b_stat]},pt.braceIsBlock=function(t){var e=this.curContext();return e===ot.f_expr||e===ot.f_stat||(t!==x.colon||e!==ot.b_stat&&e!==ot.b_expr?t===x._return||t===x.name&&this.exprAllowed?b.test(this.input.slice(this.lastTokEnd,this.start)):t===x._else||t===x.semi||t===x.eof||t===x.parenR||t===x.arrow||(t===x.braceL?e===ot.b_stat:t!==x._var&&t!==x._const&&t!==x.name&&!this.exprAllowed):!e.isExpr)},pt.inGeneratorContext=function(){for(var t=this.context.length-1;t>=1;t--){var e=this.context[t];if("function"===e.token)return e.generator}return!1},pt.updateContext=function(t){var e,i=this.type;i.keyword&&t===x.dot?this.exprAllowed=!1:(e=i.updateContext)?e.call(this,t):this.exprAllowed=i.beforeExpr},x.parenR.updateContext=x.braceR.updateContext=function(){if(1!==this.context.length){var t=this.context.pop();t===ot.b_stat&&"function"===this.curContext().token&&(t=this.context.pop()),this.exprAllowed=!t.isExpr}else this.exprAllowed=!0},x.braceL.updateContext=function(t){this.context.push(this.braceIsBlock(t)?ot.b_stat:ot.b_expr),this.exprAllowed=!0},x.dollarBraceL.updateContext=function(){this.context.push(ot.b_tmpl),this.exprAllowed=!0},x.parenL.updateContext=function(t){this.context.push(t===x._if||t===x._for||t===x._with||t===x._while?ot.p_stat:ot.p_expr),this.exprAllowed=!0},x.incDec.updateContext=function(){},x._function.updateContext=x._class.updateContext=function(t){!t.beforeExpr||t===x.semi||t===x._else||t===x._return&&b.test(this.input.slice(this.lastTokEnd,this.start))||(t===x.colon||t===x.braceL)&&this.curContext()===ot.b_stat?this.context.push(ot.f_stat):this.context.push(ot.f_expr),this.exprAllowed=!1},x.backQuote.updateContext=function(){this.curContext()===ot.q_tmpl?this.context.pop():this.context.push(ot.q_tmpl),this.exprAllowed=!1},x.star.updateContext=function(t){if(t===x._function){var e=this.context.length-1;this.context[e]=this.context[e]===ot.f_expr?ot.f_expr_gen:ot.f_gen}this.exprAllowed=!0},x.name.updateContext=function(t){var e=!1;this.options.ecmaVersion>=6&&t!==x.dot&&("of"===this.value&&!this.exprAllowed||"yield"===this.value&&this.inGeneratorContext())&&(e=!0),this.exprAllowed=e};var ht="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",ct={9:ht,10:ht+" Extended_Pictographic"},lt="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",ut="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",dt={9:ut,10:ut+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd"},ft={};function mt(t){var e=ft[t]={binary:N(ct[t]+" "+lt),nonBinary:{General_Category:N(lt),Script:N(dt[t])}};e.nonBinary.Script_Extensions=e.nonBinary.Script,e.nonBinary.gc=e.nonBinary.General_Category,e.nonBinary.sc=e.nonBinary.Script,e.nonBinary.scx=e.nonBinary.Script_Extensions}mt(9),mt(10);var gt=M.prototype,yt=function(t){this.parser=t,this.validFlags="gim"+(t.options.ecmaVersion>=6?"uy":"")+(t.options.ecmaVersion>=9?"s":""),this.unicodeProperties=ft[t.options.ecmaVersion>=10?10:t.options.ecmaVersion],this.source="",this.flags="",this.start=0,this.switchU=!1,this.switchN=!1,this.pos=0,this.lastIntValue=0,this.lastStringValue="",this.lastAssertionIsQuantifiable=!1,this.numCapturingParens=0,this.maxBackReference=0,this.groupNames=[],this.backReferenceNames=[]};function vt(t){return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t)))}function xt(t){return 36===t||t>=40&&t<=43||46===t||63===t||t>=91&&t<=94||t>=123&&t<=125}function bt(t){return t>=65&&t<=90||t>=97&&t<=122}function _t(t){return bt(t)||95===t}function St(t){return _t(t)||kt(t)}function kt(t){return t>=48&&t<=57}function wt(t){return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function Et(t){return t>=65&&t<=70?t-65+10:t>=97&&t<=102?t-97+10:t-48}function Ct(t){return t>=48&&t<=55}yt.prototype.reset=function(t,e,i){var s=-1!==i.indexOf("u");this.start=0|t,this.source=e+"",this.flags=i,this.switchU=s&&this.parser.options.ecmaVersion>=6,this.switchN=s&&this.parser.options.ecmaVersion>=9},yt.prototype.raise=function(t){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+t)},yt.prototype.at=function(t){var e=this.source,i=e.length;if(t>=i)return-1;var s=e.charCodeAt(t);return!this.switchU||s<=55295||s>=57344||t+1>=i?s:(s<<10)+e.charCodeAt(t+1)-56613888},yt.prototype.nextIndex=function(t){var e=this.source,i=e.length;if(t>=i)return i;var s=e.charCodeAt(t);return!this.switchU||s<=55295||s>=57344||t+1>=i?t+1:t+2},yt.prototype.current=function(){return this.at(this.pos)},yt.prototype.lookahead=function(){return this.at(this.nextIndex(this.pos))},yt.prototype.advance=function(){this.pos=this.nextIndex(this.pos)},yt.prototype.eat=function(t){return this.current()===t&&(this.advance(),!0)},gt.validateRegExpFlags=function(t){for(var e=t.validFlags,i=t.flags,s=0;s<i.length;s++){var r=i.charAt(s);-1===e.indexOf(r)&&this.raise(t.start,"Invalid regular expression flag"),i.indexOf(r,s+1)>-1&&this.raise(t.start,"Duplicate regular expression flag")}},gt.validateRegExpPattern=function(t){this.regexp_pattern(t),!t.switchN&&this.options.ecmaVersion>=9&&t.groupNames.length>0&&(t.switchN=!0,this.regexp_pattern(t))},gt.regexp_pattern=function(t){t.pos=0,t.lastIntValue=0,t.lastStringValue="",t.lastAssertionIsQuantifiable=!1,t.numCapturingParens=0,t.maxBackReference=0,t.groupNames.length=0,t.backReferenceNames.length=0,this.regexp_disjunction(t),t.pos!==t.source.length&&(t.eat(41)&&t.raise("Unmatched ')'"),(t.eat(93)||t.eat(125))&&t.raise("Lone quantifier brackets")),t.maxBackReference>t.numCapturingParens&&t.raise("Invalid escape");for(var e=0,i=t.backReferenceNames;e<i.length;e+=1)-1===t.groupNames.indexOf(i[e])&&t.raise("Invalid named capture referenced")},gt.regexp_disjunction=function(t){for(this.regexp_alternative(t);t.eat(124);)this.regexp_alternative(t);this.regexp_eatQuantifier(t,!0)&&t.raise("Nothing to repeat"),t.eat(123)&&t.raise("Lone quantifier brackets")},gt.regexp_alternative=function(t){for(;t.pos<t.source.length&&this.regexp_eatTerm(t););},gt.regexp_eatTerm=function(t){return this.regexp_eatAssertion(t)?(t.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(t)&&t.switchU&&t.raise("Invalid quantifier"),!0):!(t.switchU?!this.regexp_eatAtom(t):!this.regexp_eatExtendedAtom(t))&&(this.regexp_eatQuantifier(t),!0)},gt.regexp_eatAssertion=function(t){var e=t.pos;if(t.lastAssertionIsQuantifiable=!1,t.eat(94)||t.eat(36))return!0;if(t.eat(92)){if(t.eat(66)||t.eat(98))return!0;t.pos=e}if(t.eat(40)&&t.eat(63)){var i=!1;if(this.options.ecmaVersion>=9&&(i=t.eat(60)),t.eat(61)||t.eat(33))return this.regexp_disjunction(t),t.eat(41)||t.raise("Unterminated group"),t.lastAssertionIsQuantifiable=!i,!0}return t.pos=e,!1},gt.regexp_eatQuantifier=function(t,e){return void 0===e&&(e=!1),!!this.regexp_eatQuantifierPrefix(t,e)&&(t.eat(63),!0)},gt.regexp_eatQuantifierPrefix=function(t,e){return t.eat(42)||t.eat(43)||t.eat(63)||this.regexp_eatBracedQuantifier(t,e)},gt.regexp_eatBracedQuantifier=function(t,e){var i=t.pos;if(t.eat(123)){var s=0,r=-1;if(this.regexp_eatDecimalDigits(t)&&(s=t.lastIntValue,t.eat(44)&&this.regexp_eatDecimalDigits(t)&&(r=t.lastIntValue),t.eat(125)))return-1!==r&&r<s&&!e&&t.raise("numbers out of order in {} quantifier"),!0;t.switchU&&!e&&t.raise("Incomplete quantifier"),t.pos=i}return!1},gt.regexp_eatAtom=function(t){return this.regexp_eatPatternCharacters(t)||t.eat(46)||this.regexp_eatReverseSolidusAtomEscape(t)||this.regexp_eatCharacterClass(t)||this.regexp_eatUncapturingGroup(t)||this.regexp_eatCapturingGroup(t)},gt.regexp_eatReverseSolidusAtomEscape=function(t){var e=t.pos;if(t.eat(92)){if(this.regexp_eatAtomEscape(t))return!0;t.pos=e}return!1},gt.regexp_eatUncapturingGroup=function(t){var e=t.pos;if(t.eat(40)){if(t.eat(63)&&t.eat(58)){if(this.regexp_disjunction(t),t.eat(41))return!0;t.raise("Unterminated group")}t.pos=e}return!1},gt.regexp_eatCapturingGroup=function(t){if(t.eat(40)){if(this.options.ecmaVersion>=9?this.regexp_groupSpecifier(t):63===t.current()&&t.raise("Invalid group"),this.regexp_disjunction(t),t.eat(41))return t.numCapturingParens+=1,!0;t.raise("Unterminated group")}return!1},gt.regexp_eatExtendedAtom=function(t){return t.eat(46)||this.regexp_eatReverseSolidusAtomEscape(t)||this.regexp_eatCharacterClass(t)||this.regexp_eatUncapturingGroup(t)||this.regexp_eatCapturingGroup(t)||this.regexp_eatInvalidBracedQuantifier(t)||this.regexp_eatExtendedPatternCharacter(t)},gt.regexp_eatInvalidBracedQuantifier=function(t){return this.regexp_eatBracedQuantifier(t,!0)&&t.raise("Nothing to repeat"),!1},gt.regexp_eatSyntaxCharacter=function(t){var e=t.current();return!!xt(e)&&(t.lastIntValue=e,t.advance(),!0)},gt.regexp_eatPatternCharacters=function(t){for(var e=t.pos,i=0;-1!==(i=t.current())&&!xt(i);)t.advance();return t.pos!==e},gt.regexp_eatExtendedPatternCharacter=function(t){var e=t.current();return!(-1===e||36===e||e>=40&&e<=43||46===e||63===e||91===e||94===e||124===e||(t.advance(),0))},gt.regexp_groupSpecifier=function(t){if(t.eat(63)){if(this.regexp_eatGroupName(t))return-1!==t.groupNames.indexOf(t.lastStringValue)&&t.raise("Duplicate capture group name"),void t.groupNames.push(t.lastStringValue);t.raise("Invalid group")}},gt.regexp_eatGroupName=function(t){if(t.lastStringValue="",t.eat(60)){if(this.regexp_eatRegExpIdentifierName(t)&&t.eat(62))return!0;t.raise("Invalid capture group name")}return!1},gt.regexp_eatRegExpIdentifierName=function(t){if(t.lastStringValue="",this.regexp_eatRegExpIdentifierStart(t)){for(t.lastStringValue+=vt(t.lastIntValue);this.regexp_eatRegExpIdentifierPart(t);)t.lastStringValue+=vt(t.lastIntValue);return!0}return!1},gt.regexp_eatRegExpIdentifierStart=function(t){var e=t.pos,i=t.current();return t.advance(),92===i&&this.regexp_eatRegExpUnicodeEscapeSequence(t)&&(i=t.lastIntValue),function(t){return l(t,!0)||36===t||95===t}(i)?(t.lastIntValue=i,!0):(t.pos=e,!1)},gt.regexp_eatRegExpIdentifierPart=function(t){var e=t.pos,i=t.current();return t.advance(),92===i&&this.regexp_eatRegExpUnicodeEscapeSequence(t)&&(i=t.lastIntValue),function(t){return u(t,!0)||36===t||95===t||8204===t||8205===t}(i)?(t.lastIntValue=i,!0):(t.pos=e,!1)},gt.regexp_eatAtomEscape=function(t){return!!(this.regexp_eatBackReference(t)||this.regexp_eatCharacterClassEscape(t)||this.regexp_eatCharacterEscape(t)||t.switchN&&this.regexp_eatKGroupName(t))||(t.switchU&&(99===t.current()&&t.raise("Invalid unicode escape"),t.raise("Invalid escape")),!1)},gt.regexp_eatBackReference=function(t){var e=t.pos;if(this.regexp_eatDecimalEscape(t)){var i=t.lastIntValue;if(t.switchU)return i>t.maxBackReference&&(t.maxBackReference=i),!0;if(i<=t.numCapturingParens)return!0;t.pos=e}return!1},gt.regexp_eatKGroupName=function(t){if(t.eat(107)){if(this.regexp_eatGroupName(t))return t.backReferenceNames.push(t.lastStringValue),!0;t.raise("Invalid named reference")}return!1},gt.regexp_eatCharacterEscape=function(t){return this.regexp_eatControlEscape(t)||this.regexp_eatCControlLetter(t)||this.regexp_eatZero(t)||this.regexp_eatHexEscapeSequence(t)||this.regexp_eatRegExpUnicodeEscapeSequence(t)||!t.switchU&&this.regexp_eatLegacyOctalEscapeSequence(t)||this.regexp_eatIdentityEscape(t)},gt.regexp_eatCControlLetter=function(t){var e=t.pos;if(t.eat(99)){if(this.regexp_eatControlLetter(t))return!0;t.pos=e}return!1},gt.regexp_eatZero=function(t){return 48===t.current()&&!kt(t.lookahead())&&(t.lastIntValue=0,t.advance(),!0)},gt.regexp_eatControlEscape=function(t){var e=t.current();return 116===e?(t.lastIntValue=9,t.advance(),!0):110===e?(t.lastIntValue=10,t.advance(),!0):118===e?(t.lastIntValue=11,t.advance(),!0):102===e?(t.lastIntValue=12,t.advance(),!0):114===e&&(t.lastIntValue=13,t.advance(),!0)},gt.regexp_eatControlLetter=function(t){var e=t.current();return!!bt(e)&&(t.lastIntValue=e%32,t.advance(),!0)},gt.regexp_eatRegExpUnicodeEscapeSequence=function(t){var e,i=t.pos;if(t.eat(117)){if(this.regexp_eatFixedHexDigits(t,4)){var s=t.lastIntValue;if(t.switchU&&s>=55296&&s<=56319){var r=t.pos;if(t.eat(92)&&t.eat(117)&&this.regexp_eatFixedHexDigits(t,4)){var n=t.lastIntValue;if(n>=56320&&n<=57343)return t.lastIntValue=1024*(s-55296)+(n-56320)+65536,!0}t.pos=r,t.lastIntValue=s}return!0}if(t.switchU&&t.eat(123)&&this.regexp_eatHexDigits(t)&&t.eat(125)&&(e=t.lastIntValue)>=0&&e<=1114111)return!0;t.switchU&&t.raise("Invalid unicode escape"),t.pos=i}return!1},gt.regexp_eatIdentityEscape=function(t){if(t.switchU)return!!this.regexp_eatSyntaxCharacter(t)||!!t.eat(47)&&(t.lastIntValue=47,!0);var e=t.current();return!(99===e||t.switchN&&107===e||(t.lastIntValue=e,t.advance(),0))},gt.regexp_eatDecimalEscape=function(t){t.lastIntValue=0;var e=t.current();if(e>=49&&e<=57){do{t.lastIntValue=10*t.lastIntValue+(e-48),t.advance()}while((e=t.current())>=48&&e<=57);return!0}return!1},gt.regexp_eatCharacterClassEscape=function(t){var e=t.current();if(function(t){return 100===t||68===t||115===t||83===t||119===t||87===t}(e))return t.lastIntValue=-1,t.advance(),!0;if(t.switchU&&this.options.ecmaVersion>=9&&(80===e||112===e)){if(t.lastIntValue=-1,t.advance(),t.eat(123)&&this.regexp_eatUnicodePropertyValueExpression(t)&&t.eat(125))return!0;t.raise("Invalid property name")}return!1},gt.regexp_eatUnicodePropertyValueExpression=function(t){var e=t.pos;if(this.regexp_eatUnicodePropertyName(t)&&t.eat(61)){var i=t.lastStringValue;if(this.regexp_eatUnicodePropertyValue(t))return this.regexp_validateUnicodePropertyNameAndValue(t,i,t.lastStringValue),!0}return t.pos=e,!!this.regexp_eatLoneUnicodePropertyNameOrValue(t)&&(this.regexp_validateUnicodePropertyNameOrValue(t,t.lastStringValue),!0)},gt.regexp_validateUnicodePropertyNameAndValue=function(t,e,i){I(t.unicodeProperties.nonBinary,e)||t.raise("Invalid property name"),t.unicodeProperties.nonBinary[e].test(i)||t.raise("Invalid property value")},gt.regexp_validateUnicodePropertyNameOrValue=function(t,e){t.unicodeProperties.binary.test(e)||t.raise("Invalid property name")},gt.regexp_eatUnicodePropertyName=function(t){var e=0;for(t.lastStringValue="";_t(e=t.current());)t.lastStringValue+=vt(e),t.advance();return""!==t.lastStringValue},gt.regexp_eatUnicodePropertyValue=function(t){var e=0;for(t.lastStringValue="";St(e=t.current());)t.lastStringValue+=vt(e),t.advance();return""!==t.lastStringValue},gt.regexp_eatLoneUnicodePropertyNameOrValue=function(t){return this.regexp_eatUnicodePropertyValue(t)},gt.regexp_eatCharacterClass=function(t){if(t.eat(91)){if(t.eat(94),this.regexp_classRanges(t),t.eat(93))return!0;t.raise("Unterminated character class")}return!1},gt.regexp_classRanges=function(t){for(;this.regexp_eatClassAtom(t);){var e=t.lastIntValue;if(t.eat(45)&&this.regexp_eatClassAtom(t)){var i=t.lastIntValue;!t.switchU||-1!==e&&-1!==i||t.raise("Invalid character class"),-1!==e&&-1!==i&&e>i&&t.raise("Range out of order in character class")}}},gt.regexp_eatClassAtom=function(t){var e=t.pos;if(t.eat(92)){if(this.regexp_eatClassEscape(t))return!0;if(t.switchU){var i=t.current();(99===i||Ct(i))&&t.raise("Invalid class escape"),t.raise("Invalid escape")}t.pos=e}var s=t.current();return 93!==s&&(t.lastIntValue=s,t.advance(),!0)},gt.regexp_eatClassEscape=function(t){var e=t.pos;if(t.eat(98))return t.lastIntValue=8,!0;if(t.switchU&&t.eat(45))return t.lastIntValue=45,!0;if(!t.switchU&&t.eat(99)){if(this.regexp_eatClassControlLetter(t))return!0;t.pos=e}return this.regexp_eatCharacterClassEscape(t)||this.regexp_eatCharacterEscape(t)},gt.regexp_eatClassControlLetter=function(t){var e=t.current();return!(!kt(e)&&95!==e||(t.lastIntValue=e%32,t.advance(),0))},gt.regexp_eatHexEscapeSequence=function(t){var e=t.pos;if(t.eat(120)){if(this.regexp_eatFixedHexDigits(t,2))return!0;t.switchU&&t.raise("Invalid escape"),t.pos=e}return!1},gt.regexp_eatDecimalDigits=function(t){var e=t.pos,i=0;for(t.lastIntValue=0;kt(i=t.current());)t.lastIntValue=10*t.lastIntValue+(i-48),t.advance();return t.pos!==e},gt.regexp_eatHexDigits=function(t){var e=t.pos,i=0;for(t.lastIntValue=0;wt(i=t.current());)t.lastIntValue=16*t.lastIntValue+Et(i),t.advance();return t.pos!==e},gt.regexp_eatLegacyOctalEscapeSequence=function(t){if(this.regexp_eatOctalDigit(t)){var e=t.lastIntValue;if(this.regexp_eatOctalDigit(t)){var i=t.lastIntValue;t.lastIntValue=e<=3&&this.regexp_eatOctalDigit(t)?64*e+8*i+t.lastIntValue:8*e+i}else t.lastIntValue=e;return!0}return!1},gt.regexp_eatOctalDigit=function(t){var e=t.current();return Ct(e)?(t.lastIntValue=e-48,t.advance(),!0):(t.lastIntValue=0,!1)},gt.regexp_eatFixedHexDigits=function(t,e){var i=t.pos;t.lastIntValue=0;for(var s=0;s<e;++s){var r=t.current();if(!wt(r))return t.pos=i,!1;t.lastIntValue=16*t.lastIntValue+Et(r),t.advance()}return!0};var At=function(t){this.type=t.type,this.value=t.value,this.start=t.start,this.end=t.end,t.options.locations&&(this.loc=new T(t,t.startLoc,t.endLoc)),t.options.ranges&&(this.range=[t.start,t.end])},It=M.prototype;function Lt(t){return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t)))}It.next=function(){this.options.onToken&&this.options.onToken(new At(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},It.getToken=function(){return this.next(),new At(this)},"undefined"!=typeof Symbol&&(It[Symbol.iterator]=function(){var t=this;return{next:function(){var e=t.getToken();return{done:e.type===x.eof,value:e}}}}),It.curContext=function(){return this.context[this.context.length-1]},It.nextToken=function(){var t=this.curContext();return t&&t.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(x.eof):t.override?t.override(this):void this.readToken(this.fullCharCodeAtPos())},It.readToken=function(t){return l(t,this.options.ecmaVersion>=6)||92===t?this.readWord():this.getTokenFromCode(t)},It.fullCharCodeAtPos=function(){var t=this.input.charCodeAt(this.pos);return t<=55295||t>=57344?t:(t<<10)+this.input.charCodeAt(this.pos+1)-56613888},It.skipBlockComment=function(){var t,e=this.options.onComment&&this.curPosition(),i=this.pos,s=this.input.indexOf("*/",this.pos+=2);if(-1===s&&this.raise(this.pos-2,"Unterminated comment"),this.pos=s+2,this.options.locations)for(_.lastIndex=i;(t=_.exec(this.input))&&t.index<this.pos;)++this.curLine,this.lineStart=t.index+t[0].length;this.options.onComment&&this.options.onComment(!0,this.input.slice(i+2,s),i,this.pos,e,this.curPosition())},It.skipLineComment=function(t){for(var e=this.pos,i=this.options.onComment&&this.curPosition(),s=this.input.charCodeAt(this.pos+=t);this.pos<this.input.length&&!S(s);)s=this.input.charCodeAt(++this.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(e+t,this.pos),e,this.pos,i,this.curPosition())},It.skipSpace=function(){t:for(;this.pos<this.input.length;){var t=this.input.charCodeAt(this.pos);switch(t){case 32:case 160:++this.pos;break;case 13:10===this.input.charCodeAt(this.pos+1)&&++this.pos;case 10:case 8232:case 8233:++this.pos,this.options.locations&&(++this.curLine,this.lineStart=this.pos);break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break t}break;default:if(!(t>8&&t<14||t>=5760&&k.test(String.fromCharCode(t))))break t;++this.pos}}},It.finishToken=function(t,e){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var i=this.type;this.type=t,this.value=e,this.updateContext(i)},It.readToken_dot=function(){var t=this.input.charCodeAt(this.pos+1);if(t>=48&&t<=57)return this.readNumber(!0);var e=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===t&&46===e?(this.pos+=3,this.finishToken(x.ellipsis)):(++this.pos,this.finishToken(x.dot))},It.readToken_slash=function(){var t=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===t?this.finishOp(x.assign,2):this.finishOp(x.slash,1)},It.readToken_mult_modulo_exp=function(t){var e=this.input.charCodeAt(this.pos+1),i=1,s=42===t?x.star:x.modulo;return this.options.ecmaVersion>=7&&42===t&&42===e&&(++i,s=x.starstar,e=this.input.charCodeAt(this.pos+2)),61===e?this.finishOp(x.assign,i+1):this.finishOp(s,i)},It.readToken_pipe_amp=function(t){var e=this.input.charCodeAt(this.pos+1);return e===t?this.finishOp(124===t?x.logicalOR:x.logicalAND,2):61===e?this.finishOp(x.assign,2):this.finishOp(124===t?x.bitwiseOR:x.bitwiseAND,1)},It.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(x.assign,2):this.finishOp(x.bitwiseXOR,1)},It.readToken_plus_min=function(t){var e=this.input.charCodeAt(this.pos+1);return e===t?45!==e||this.inModule||62!==this.input.charCodeAt(this.pos+2)||0!==this.lastTokEnd&&!b.test(this.input.slice(this.lastTokEnd,this.pos))?this.finishOp(x.incDec,2):(this.skipLineComment(3),this.skipSpace(),this.nextToken()):61===e?this.finishOp(x.assign,2):this.finishOp(x.plusMin,1)},It.readToken_lt_gt=function(t){var e=this.input.charCodeAt(this.pos+1),i=1;return e===t?(i=62===t&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+i)?this.finishOp(x.assign,i+1):this.finishOp(x.bitShift,i)):33!==e||60!==t||this.inModule||45!==this.input.charCodeAt(this.pos+2)||45!==this.input.charCodeAt(this.pos+3)?(61===e&&(i=2),this.finishOp(x.relational,i)):(this.skipLineComment(4),this.skipSpace(),this.nextToken())},It.readToken_eq_excl=function(t){var e=this.input.charCodeAt(this.pos+1);return 61===e?this.finishOp(x.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===t&&62===e&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(x.arrow)):this.finishOp(61===t?x.eq:x.prefix,1)},It.getTokenFromCode=function(t){switch(t){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(x.parenL);case 41:return++this.pos,this.finishToken(x.parenR);case 59:return++this.pos,this.finishToken(x.semi);case 44:return++this.pos,this.finishToken(x.comma);case 91:return++this.pos,this.finishToken(x.bracketL);case 93:return++this.pos,this.finishToken(x.bracketR);case 123:return++this.pos,this.finishToken(x.braceL);case 125:return++this.pos,this.finishToken(x.braceR);case 58:return++this.pos,this.finishToken(x.colon);case 63:return++this.pos,this.finishToken(x.question);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(x.backQuote);case 48:var e=this.input.charCodeAt(this.pos+1);if(120===e||88===e)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===e||79===e)return this.readRadixNumber(8);if(98===e||66===e)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(t);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(t);case 124:case 38:return this.readToken_pipe_amp(t);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(t);case 60:case 62:return this.readToken_lt_gt(t);case 61:case 33:return this.readToken_eq_excl(t);case 126:return this.finishOp(x.prefix,1)}this.raise(this.pos,"Unexpected character '"+Lt(t)+"'")},It.finishOp=function(t,e){var i=this.input.slice(this.pos,this.pos+e);return this.pos+=e,this.finishToken(t,i)},It.readRegexp=function(){for(var t,e,i=this.pos;;){this.pos>=this.input.length&&this.raise(i,"Unterminated regular expression");var s=this.input.charAt(this.pos);if(b.test(s)&&this.raise(i,"Unterminated regular expression"),t)t=!1;else{if("["===s)e=!0;else if("]"===s&&e)e=!1;else if("/"===s&&!e)break;t="\\"===s}++this.pos}var r=this.input.slice(i,this.pos);++this.pos;var n=this.pos,a=this.readWord1();this.containsEsc&&this.unexpected(n);var o=this.regexpState||(this.regexpState=new yt(this));o.reset(i,r,a),this.validateRegExpFlags(o),this.validateRegExpPattern(o);var p=null;try{p=new RegExp(r,a)}catch(t){}return this.finishToken(x.regexp,{pattern:r,flags:a,value:p})},It.readInt=function(t,e){for(var i=this.pos,s=0,r=0,n=null==e?Infinity:e;r<n;++r){var a,o=this.input.charCodeAt(this.pos);if((a=o>=97?o-97+10:o>=65?o-65+10:o>=48&&o<=57?o-48:Infinity)>=t)break;++this.pos,s=s*t+a}return this.pos===i||null!=e&&this.pos-i!==e?null:s},It.readRadixNumber=function(t){this.pos+=2;var e=this.readInt(t);return null==e&&this.raise(this.start+2,"Expected number in radix "+t),l(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(x.num,e)},It.readNumber=function(t){var e=this.pos;t||null!==this.readInt(10)||this.raise(e,"Invalid number");var i=this.pos-e>=2&&48===this.input.charCodeAt(e);i&&this.strict&&this.raise(e,"Invalid number"),i&&/[89]/.test(this.input.slice(e,this.pos))&&(i=!1);var s=this.input.charCodeAt(this.pos);46!==s||i||(++this.pos,this.readInt(10),s=this.input.charCodeAt(this.pos)),69!==s&&101!==s||i||(43!==(s=this.input.charCodeAt(++this.pos))&&45!==s||++this.pos,null===this.readInt(10)&&this.raise(e,"Invalid number")),l(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var r=this.input.slice(e,this.pos),n=i?parseInt(r,8):parseFloat(r);return this.finishToken(x.num,n)},It.readCodePoint=function(){var t;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var e=++this.pos;t=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,t>1114111&&this.invalidStringToken(e,"Code point out of bounds")}else t=this.readHexChar(4);return t},It.readString=function(t){for(var e="",i=++this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");var s=this.input.charCodeAt(this.pos);if(s===t)break;92===s?(e+=this.input.slice(i,this.pos),e+=this.readEscapedChar(!1),i=this.pos):(S(s,this.options.ecmaVersion>=10)&&this.raise(this.start,"Unterminated string constant"),++this.pos)}return e+=this.input.slice(i,this.pos++),this.finishToken(x.string,e)};var Nt={};It.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken()}catch(t){if(t!==Nt)throw t;this.readInvalidTemplateToken()}this.inTemplateElement=!1},It.invalidStringToken=function(t,e){if(this.inTemplateElement&&this.options.ecmaVersion>=9)throw Nt;this.raise(t,e)},It.readTmplToken=function(){for(var t="",e=this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated template");var i=this.input.charCodeAt(this.pos);if(96===i||36===i&&123===this.input.charCodeAt(this.pos+1))return this.pos!==this.start||this.type!==x.template&&this.type!==x.invalidTemplate?(t+=this.input.slice(e,this.pos),this.finishToken(x.template,t)):36===i?(this.pos+=2,this.finishToken(x.dollarBraceL)):(++this.pos,this.finishToken(x.backQuote));if(92===i)t+=this.input.slice(e,this.pos),t+=this.readEscapedChar(!0),e=this.pos;else if(S(i)){switch(t+=this.input.slice(e,this.pos),++this.pos,i){case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(i)}this.options.locations&&(++this.curLine,this.lineStart=this.pos),e=this.pos}else++this.pos}},It.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++)switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if("{"!==this.input[this.pos+1])break;case"`":return this.finishToken(x.invalidTemplate,this.input.slice(this.start,this.pos))}this.raise(this.start,"Unterminated template")},It.readEscapedChar=function(t){var e=this.input.charCodeAt(++this.pos);switch(++this.pos,e){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return Lt(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";default:if(e>=48&&e<=55){var i=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],s=parseInt(i,8);return s>255&&(i=i.slice(0,-1),s=parseInt(i,8)),this.pos+=i.length-1,e=this.input.charCodeAt(this.pos),"0"===i&&56!==e&&57!==e||!this.strict&&!t||this.invalidStringToken(this.pos-1-i.length,t?"Octal literal in template string":"Octal literal in strict mode"),String.fromCharCode(s)}return S(e)?"":String.fromCharCode(e)}},It.readHexChar=function(t){var e=this.pos,i=this.readInt(16,t);return null===i&&this.invalidStringToken(e,"Bad character escape sequence"),i},It.readWord1=function(){this.containsEsc=!1;for(var t="",e=!0,i=this.pos,s=this.options.ecmaVersion>=6;this.pos<this.input.length;){var r=this.fullCharCodeAtPos();if(u(r,s))this.pos+=r<=65535?1:2;else{if(92!==r)break;this.containsEsc=!0,t+=this.input.slice(i,this.pos);var n=this.pos;117!==this.input.charCodeAt(++this.pos)&&this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.pos;var a=this.readCodePoint();(e?l:u)(a,s)||this.invalidStringToken(n,"Invalid Unicode escape"),t+=Lt(a),i=this.pos}e=!1}return t+this.input.slice(i,this.pos)},It.readWord=function(){var t=this.readWord1(),e=x.name;return this.keywords.test(t)&&(this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+t),e=y[t]),this.finishToken(e,t)};var Pt={quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"},Tt={version:"6.1.1",parse:function(t,e){return M.parse(t,e)},parseExpressionAt:function(t,e,i){return M.parseExpressionAt(t,e,i)},tokenizer:function(t,e){return M.tokenizer(t,e)},Parser:M,defaultOptions:O,Position:P,SourceLocation:T,getLineInfo:R,Node:st,TokenType:d,tokTypes:x,keywordTypes:y,TokContext:at,tokContexts:ot,isIdentifierChar:u,isIdentifierStart:l,Token:At,isNewLine:S,lineBreak:b,lineBreakG:_,nonASCIIwhitespace:k};const Rt=/^[\da-fA-F]+$/,Ot=/^\d+$/,jt=Tt.tokTypes,Vt=Tt.TokContext,Dt=Tt.tokContexts,Bt=Tt.TokenType,Ft=Tt.isNewLine,Mt=Tt.isIdentifierStart,Ut=Tt.isIdentifierChar,qt=new Vt("<tag",!1),Xt=new Vt("</tag",!1),Jt=new Vt("<tag>...</tag>",!0,!0),Wt={jsxName:new Bt("jsxName"),jsxText:new Bt("jsxText",{beforeExpr:!0}),jsxTagStart:new Bt("jsxTagStart"),jsxTagEnd:new Bt("jsxTagEnd")};function zt(t){return t?"JSXIdentifier"===t.type?t.name:"JSXNamespacedName"===t.type?t.namespace.name+":"+t.name.name:"JSXMemberExpression"===t.type?zt(t.object)+"."+zt(t.property):void 0:t}Wt.jsxTagStart.updateContext=function(){this.context.push(Jt),this.context.push(qt),this.exprAllowed=!1},Wt.jsxTagEnd.updateContext=function(t){let e=this.context.pop();e===qt&&t===jt.slash||e===Xt?(this.context.pop(),this.exprAllowed=this.curContext()===Jt):this.exprAllowed=!0};var Ht=function(t){return t=t||{},function(e){return function(t,e){return class extends e{jsx_readToken(){let t="",e=this.pos;for(;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated JSX contents");let i=this.input.charCodeAt(this.pos);switch(i){case 60:case 123:return this.pos===this.start?60===i&&this.exprAllowed?(++this.pos,this.finishToken(Wt.jsxTagStart)):this.getTokenFromCode(i):(t+=this.input.slice(e,this.pos),this.finishToken(Wt.jsxText,t));case 38:t+=this.input.slice(e,this.pos),t+=this.jsx_readEntity(),e=this.pos;break;default:Ft(i)?(t+=this.input.slice(e,this.pos),t+=this.jsx_readNewLine(!0),e=this.pos):++this.pos}}}jsx_readNewLine(t){let e,i=this.input.charCodeAt(this.pos);return++this.pos,13===i&&10===this.input.charCodeAt(this.pos)?(++this.pos,e=t?"\n":"\r\n"):e=String.fromCharCode(i),this.options.locations&&(++this.curLine,this.lineStart=this.pos),e}jsx_readString(t){let e="",i=++this.pos;for(;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");let s=this.input.charCodeAt(this.pos);if(s===t)break;38===s?(e+=this.input.slice(i,this.pos),e+=this.jsx_readEntity(),i=this.pos):Ft(s)?(e+=this.input.slice(i,this.pos),e+=this.jsx_readNewLine(!1),i=this.pos):++this.pos}return e+=this.input.slice(i,this.pos++),this.finishToken(jt.string,e)}jsx_readEntity(){let t,e="",i=0,s=this.input[this.pos];"&"!==s&&this.raise(this.pos,"Entity must start with an ampersand");let r=++this.pos;for(;this.pos<this.input.length&&i++<10;){if(";"===(s=this.input[this.pos++])){"#"===e[0]?"x"===e[1]?(e=e.substr(2),Rt.test(e)&&(t=String.fromCharCode(parseInt(e,16)))):(e=e.substr(1),Ot.test(e)&&(t=String.fromCharCode(parseInt(e,10)))):t=Pt[e];break}e+=s}return t||(this.pos=r,"&")}jsx_readWord(){let t,e=this.pos;do{t=this.input.charCodeAt(++this.pos)}while(Ut(t)||45===t);return this.finishToken(Wt.jsxName,this.input.slice(e,this.pos))}jsx_parseIdentifier(){let t=this.startNode();return this.type===Wt.jsxName?t.name=this.value:this.type.keyword?t.name=this.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"JSXIdentifier")}jsx_parseNamespacedName(){let e=this.start,i=this.startLoc,s=this.jsx_parseIdentifier();if(!t.allowNamespaces||!this.eat(jt.colon))return s;var r=this.startNodeAt(e,i);return r.namespace=s,r.name=this.jsx_parseIdentifier(),this.finishNode(r,"JSXNamespacedName")}jsx_parseElementName(){if(this.type===Wt.jsxTagEnd)return"";let e=this.start,i=this.startLoc,s=this.jsx_parseNamespacedName();for(this.type!==jt.dot||"JSXNamespacedName"!==s.type||t.allowNamespacedObjects||this.unexpected();this.eat(jt.dot);){let t=this.startNodeAt(e,i);t.object=s,t.property=this.jsx_parseIdentifier(),s=this.finishNode(t,"JSXMemberExpression")}return s}jsx_parseAttributeValue(){switch(this.type){case jt.braceL:let t=this.jsx_parseExpressionContainer();return"JSXEmptyExpression"===t.expression.type&&this.raise(t.start,"JSX attributes must only be assigned a non-empty expression"),t;case Wt.jsxTagStart:case jt.string:return this.parseExprAtom();default:this.raise(this.start,"JSX value should be either an expression or a quoted JSX text")}}jsx_parseEmptyExpression(){let t=this.startNodeAt(this.lastTokEnd,this.lastTokEndLoc);return this.finishNodeAt(t,"JSXEmptyExpression",this.start,this.startLoc)}jsx_parseExpressionContainer(){let t=this.startNode();return this.next(),t.expression=this.type===jt.braceR?this.jsx_parseEmptyExpression():this.parseExpression(),this.expect(jt.braceR),this.finishNode(t,"JSXExpressionContainer")}jsx_parseAttribute(){let t=this.startNode();return this.eat(jt.braceL)?(this.expect(jt.ellipsis),t.argument=this.parseMaybeAssign(),this.expect(jt.braceR),this.finishNode(t,"JSXSpreadAttribute")):(t.name=this.jsx_parseNamespacedName(),t.value=this.eat(jt.eq)?this.jsx_parseAttributeValue():null,this.finishNode(t,"JSXAttribute"))}jsx_parseOpeningElementAt(t,e){let i=this.startNodeAt(t,e);i.attributes=[];let s=this.jsx_parseElementName();for(s&&(i.name=s);this.type!==jt.slash&&this.type!==Wt.jsxTagEnd;)i.attributes.push(this.jsx_parseAttribute());return i.selfClosing=this.eat(jt.slash),this.expect(Wt.jsxTagEnd),this.finishNode(i,s?"JSXOpeningElement":"JSXOpeningFragment")}jsx_parseClosingElementAt(t,e){let i=this.startNodeAt(t,e),s=this.jsx_parseElementName();return s&&(i.name=s),this.expect(Wt.jsxTagEnd),this.finishNode(i,s?"JSXClosingElement":"JSXClosingFragment")}jsx_parseElementAt(t,e){let i=this.startNodeAt(t,e),s=[],r=this.jsx_parseOpeningElementAt(t,e),n=null;if(!r.selfClosing){t:for(;;)switch(this.type){case Wt.jsxTagStart:if(t=this.start,e=this.startLoc,this.next(),this.eat(jt.slash)){n=this.jsx_parseClosingElementAt(t,e);break t}s.push(this.jsx_parseElementAt(t,e));break;case Wt.jsxText:s.push(this.parseExprAtom());break;case jt.braceL:s.push(this.jsx_parseExpressionContainer());break;default:this.unexpected()}zt(n.name)!==zt(r.name)&&this.raise(n.start,"Expected corresponding JSX closing tag for <"+zt(r.name)+">")}let a=r.name?"Element":"Fragment";return i["opening"+a]=r,i["closing"+a]=n,i.children=s,this.type===jt.relational&&"<"===this.value&&this.raise(this.start,"Adjacent JSX elements must be wrapped in an enclosing tag"),this.finishNode(i,"JSX"+a)}jsx_parseText(t){let e=this.parseLiteral(t);return e.type="JSXText",e}jsx_parseElement(){let t=this.start,e=this.startLoc;return this.next(),this.jsx_parseElementAt(t,e)}parseExprAtom(t){return this.type===Wt.jsxText?this.jsx_parseText(this.value):this.type===Wt.jsxTagStart?this.jsx_parseElement():super.parseExprAtom(t)}readToken(t){let e=this.curContext();if(e===Jt)return this.jsx_readToken();if(e===qt||e===Xt){if(Mt(t))return this.jsx_readWord();if(62==t)return++this.pos,this.finishToken(Wt.jsxTagEnd);if((34===t||39===t)&&e==qt)return this.jsx_readString(t)}return 60===t&&this.exprAllowed&&33!==this.input.charCodeAt(this.pos+1)?(++this.pos,this.finishToken(Wt.jsxTagStart)):super.readToken(t)}updateContext(t){if(this.type==jt.braceL){var e=this.curContext();e==qt?this.context.push(Dt.b_expr):e==Jt?this.context.push(Dt.b_tmpl):super.updateContext(t),this.exprAllowed=!0}else{if(this.type!==jt.slash||t!==Wt.jsxTagStart)return super.updateContext(t);this.context.length-=2,this.context.push(Xt),this.exprAllowed=!1}}}}({allowNamespaces:!1!==t.allowNamespaces,allowNamespacedObjects:!!t.allowNamespacedObjects},e)}};Ht.tokTypes=Wt;var Gt,Qt,Kt=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.DynamicImportKey=void 0;var i=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),s=function t(e,i,s){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,i);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:t(n,i,s)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(s):void 0};e.default=function(t){return function(e){function n(){return function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,t),i(n,[{key:"parseStatement",value:function(t,e,i){return this.type===Tt.tokTypes._import&&function(){return/^(\s|\/\/.*|\/\*[^]*?\*\/)*\(/.test(this.input.slice(this.pos))}.call(this)?this.parseExpressionStatement(this.startNode(),this.parseExpression()):s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"parseStatement",this).call(this,t,e,i)}},{key:"parseExprAtom",value:function(t){return this.type===Tt.tokTypes._import?function(){var t=this.startNode();return this.next(),this.type!==Tt.tokTypes.parenL&&this.unexpected(),this.finishNode(t,r)}.call(this):s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"parseExprAtom",this).call(this,t)}}]),n}()};var r=e.DynamicImportKey="Import";Tt.tokTypes._import.startsExpr=!0}(Gt={exports:{}},Gt.exports),(Qt=Gt.exports)&&Qt.__esModule&&Object.prototype.hasOwnProperty.call(Qt,"default")?Qt.default:Qt);const $t=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,Yt=Tt.tokTypes;function Zt(t){if(this.eat(Yt.eq)){const e=this._inFieldValue;this._inFieldValue=!0,t.value=this.parseExpression(),this._inFieldValue=e}else t.value=null}function te(){const t=this.startNode();return t.name=this.value,this.next(),this.finishNode(t,"PrivateName"),"never"==this.options.allowReserved&&this.checkUnreserved(t),t}const ee=new(0,Tt.TokenType)("privateName");var ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function se(t){var e="";t=t<0?-t<<1|1:t<<1;do{var i=31&t;(t>>=5)>0&&(i|=32),e+=ie[i]}while(t>0);return e}var re=function(t,e,i){this.start=t,this.end=e,this.original=i,this.intro="",this.outro="",this.content=i,this.storeName=!1,this.edited=!1,Object.defineProperties(this,{previous:{writable:!0,value:null},next:{writable:!0,value:null}})};re.prototype.appendLeft=function(t){this.outro+=t},re.prototype.appendRight=function(t){this.intro=this.intro+t},re.prototype.clone=function(){var t=new re(this.start,this.end,this.original);return t.intro=this.intro,t.outro=this.outro,t.content=this.content,t.storeName=this.storeName,t.edited=this.edited,t},re.prototype.contains=function(t){return this.start<t&&t<this.end},re.prototype.eachNext=function(t){for(var e=this;e;)t(e),e=e.next},re.prototype.eachPrevious=function(t){for(var e=this;e;)t(e),e=e.previous},re.prototype.edit=function(t,e,i){return this.content=t,i||(this.intro="",this.outro=""),this.storeName=e,this.edited=!0,this},re.prototype.prependLeft=function(t){this.outro=t+this.outro},re.prototype.prependRight=function(t){this.intro=t+this.intro},re.prototype.split=function(t){var e=t-this.start,i=this.original.slice(0,e),s=this.original.slice(e);this.original=i;var r=new re(t,this.end,s);return r.outro=this.outro,this.outro="",this.end=t,this.edited?(r.edit("",!1),this.content=""):this.content=i,r.next=this.next,r.next&&(r.next.previous=r),r.previous=this,this.next=r,r},re.prototype.toString=function(){return this.intro+this.content+this.outro},re.prototype.trimEnd=function(t){if(this.outro=this.outro.replace(t,""),this.outro.length)return!0;var e=this.content.replace(t,"");return e.length?(e!==this.content&&this.split(this.start+e.length).edit("",void 0,!0),!0):(this.edit("",void 0,!0),this.intro=this.intro.replace(t,""),!!this.intro.length||void 0)},re.prototype.trimStart=function(t){if(this.intro=this.intro.replace(t,""),this.intro.length)return!0;var e=this.content.replace(t,"");return e.length?(e!==this.content&&(this.split(this.end-e.length),this.edit("",void 0,!0)),!0):(this.edit("",void 0,!0),this.outro=this.outro.replace(t,""),!!this.outro.length||void 0)};var ne=function(){throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.")};"undefined"!=typeof window&&"function"==typeof window.btoa?ne=function(t){return window.btoa(unescape(encodeURIComponent(t)))}:"function"==typeof Buffer&&(ne=function(t){return Buffer.from(t,"utf-8").toString("base64")});var ae=function(t){this.version=3,this.file=t.file,this.sources=t.sources,this.sourcesContent=t.sourcesContent,this.names=t.names,this.mappings=function(t){for(var e=0,i=0,s=0,r=0,n="",a=0;a<t.length;a++){var o=t[a];if(a>0&&(n+=";"),0!==o.length){for(var p=0,h=[],c=0,l=o;c<l.length;c++){var u=l[c],d=se(u[0]-p);p=u[0],u.length>1&&(d+=se(u[1]-e)+se(u[2]-i)+se(u[3]-s),e=u[1],i=u[2],s=u[3]),5===u.length&&(d+=se(u[4]-r),r=u[4]),h.push(d)}n+=h.join(",")}}return n}(t.mappings)};function oe(t){var e=t.split("\n"),i=e.filter(function(t){return/^\t+/.test(t)}),s=e.filter(function(t){return/^ {2,}/.test(t)});if(0===i.length&&0===s.length)return null;if(i.length>=s.length)return"\t";var r=s.reduce(function(t,e){var i=/^ +/.exec(e)[0].length;return Math.min(i,t)},Infinity);return new Array(r+1).join(" ")}function pe(t,e){var i=t.split(/[\/\\]/),s=e.split(/[\/\\]/);for(i.pop();i[0]===s[0];)i.shift(),s.shift();if(i.length)for(var r=i.length;r--;)i[r]="..";return i.concat(s).join("/")}ae.prototype.toString=function(){return JSON.stringify(this)},ae.prototype.toUrl=function(){return"data:application/json;charset=utf-8;base64,"+ne(this.toString())};var he=Object.prototype.toString;function ce(t){for(var e=t.split("\n"),i=[],s=0,r=0;s<e.length;s++)i.push(r),r+=e[s].length+1;return function(t){for(var e=0,s=i.length;e<s;){var r=e+s>>1;t<i[r]?s=r:e=r+1}var n=e-1;return{line:n,column:t-i[n]}}}var le=function(t){this.hires=t,this.generatedCodeLine=0,this.generatedCodeColumn=0,this.raw=[],this.rawSegments=this.raw[this.generatedCodeLine]=[],this.pending=null};le.prototype.addEdit=function(t,e,i,s){if(e.length){var r=[this.generatedCodeColumn,t,i.line,i.column];s>=0&&r.push(s),this.rawSegments.push(r)}else this.pending&&this.rawSegments.push(this.pending);this.advance(e),this.pending=null},le.prototype.addUneditedChunk=function(t,e,i,s,r){for(var n=e.start,a=!0;n<e.end;)(this.hires||a||r[n])&&this.rawSegments.push([this.generatedCodeColumn,t,s.line,s.column]),"\n"===i[n]?(s.line+=1,s.column=0,this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0):(s.column+=1,this.generatedCodeColumn+=1),n+=1,a=!1;this.pending=[this.generatedCodeColumn,t,s.line,s.column]},le.prototype.advance=function(t){if(t){var e=t.split("\n");if(e.length>1){for(var i=0;i<e.length-1;i++)this.generatedCodeLine++,this.raw[this.generatedCodeLine]=this.rawSegments=[];this.generatedCodeColumn=0}this.generatedCodeColumn+=e[e.length-1].length}};var ue="\n",de={insertLeft:!1,insertRight:!1,storeName:!1},fe=function(t,e){void 0===e&&(e={});var i=new re(0,t.length,t);Object.defineProperties(this,{original:{writable:!0,value:t},outro:{writable:!0,value:""},intro:{writable:!0,value:""},firstChunk:{writable:!0,value:i},lastChunk:{writable:!0,value:i},lastSearchedChunk:{writable:!0,value:i},byStart:{writable:!0,value:{}},byEnd:{writable:!0,value:{}},filename:{writable:!0,value:e.filename},indentExclusionRanges:{writable:!0,value:e.indentExclusionRanges},sourcemapLocations:{writable:!0,value:{}},storedNames:{writable:!0,value:{}},indentStr:{writable:!0,value:oe(t)}}),this.byStart[0]=i,this.byEnd[t.length]=i};function me(t){var e={};return Object.keys(t).forEach(function(i){"parent"!==i&&"program"!==i&&"keys"!==i&&"__wrapped"!==i&&(e[i]=Array.isArray(t[i])?t[i].map(me):t[i]&&t[i].toJSON?t[i].toJSON():t[i])}),e}fe.prototype.addSourcemapLocation=function(t){this.sourcemapLocations[t]=!0},fe.prototype.append=function(t){if("string"!=typeof t)throw new TypeError("outro content must be a string");return this.outro+=t,this},fe.prototype.appendLeft=function(t,e){if("string"!=typeof e)throw new TypeError("inserted content must be a string");this._split(t);var i=this.byEnd[t];return i?i.appendLeft(e):this.intro+=e,this},fe.prototype.appendRight=function(t,e){if("string"!=typeof e)throw new TypeError("inserted content must be a string");this._split(t);var i=this.byStart[t];return i?i.appendRight(e):this.outro+=e,this},fe.prototype.clone=function(){for(var t=new fe(this.original,{filename:this.filename}),e=this.firstChunk,i=t.firstChunk=t.lastSearchedChunk=e.clone();e;){t.byStart[i.start]=i,t.byEnd[i.end]=i;var s=e.next,r=s&&s.clone();r&&(i.next=r,r.previous=i,i=r),e=s}return t.lastChunk=i,this.indentExclusionRanges&&(t.indentExclusionRanges=this.indentExclusionRanges.slice()),Object.keys(this.sourcemapLocations).forEach(function(e){t.sourcemapLocations[e]=!0}),t},fe.prototype.generateDecodedMap=function(t){var e=this;t=t||{};var i=Object.keys(this.storedNames),s=new le(t.hires),r=ce(this.original);return this.intro&&s.advance(this.intro),this.firstChunk.eachNext(function(t){var n=r(t.start);t.intro.length&&s.advance(t.intro),t.edited?s.addEdit(0,t.content,n,t.storeName?i.indexOf(t.original):-1):s.addUneditedChunk(0,t,e.original,n,e.sourcemapLocations),t.outro.length&&s.advance(t.outro)}),{file:t.file?t.file.split(/[\/\\]/).pop():null,sources:[t.source?pe(t.file||"",t.source):null],sourcesContent:t.includeContent?[this.original]:[null],names:i,mappings:s.raw}},fe.prototype.generateMap=function(t){return new ae(this.generateDecodedMap(t))},fe.prototype.getIndentString=function(){return null===this.indentStr?"\t":this.indentStr},fe.prototype.indent=function(t,e){var i=/^[^\r\n]/gm;if("[object Object]"===he.call(t)&&(e=t,t=void 0),""===(t=void 0!==t?t:this.indentStr||"\t"))return this;var s={};(e=e||{}).exclude&&("number"==typeof e.exclude[0]?[e.exclude]:e.exclude).forEach(function(t){for(var e=t[0];e<t[1];e+=1)s[e]=!0});var r=!1!==e.indentStart,n=function(e){return r?""+t+e:(r=!0,e)};this.intro=this.intro.replace(i,n);for(var a=0,o=this.firstChunk;o;){var p=o.end;if(o.edited)s[a]||(o.content=o.content.replace(i,n),o.content.length&&(r="\n"===o.content[o.content.length-1]));else for(a=o.start;a<p;){if(!s[a]){var h=this.original[a];"\n"===h?r=!0:"\r"!==h&&r&&(r=!1,a===o.start?o.prependRight(t):(this._splitChunk(o,a),(o=o.next).prependRight(t)))}a+=1}a=o.end,o=o.next}return this.outro=this.outro.replace(i,n),this},fe.prototype.insert=function(){throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)")},fe.prototype.insertLeft=function(t,e){return de.insertLeft||(console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"),de.insertLeft=!0),this.appendLeft(t,e)},fe.prototype.insertRight=function(t,e){return de.insertRight||(console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"),de.insertRight=!0),this.prependRight(t,e)},fe.prototype.move=function(t,e,i){if(i>=t&&i<=e)throw new Error("Cannot move a selection inside itself");this._split(t),this._split(e),this._split(i);var s=this.byStart[t],r=this.byEnd[e],n=s.previous,a=r.next,o=this.byStart[i];if(!o&&r===this.lastChunk)return this;var p=o?o.previous:this.lastChunk;return n&&(n.next=a),a&&(a.previous=n),p&&(p.next=s),o&&(o.previous=r),s.previous||(this.firstChunk=r.next),r.next||(this.lastChunk=s.previous,this.lastChunk.next=null),s.previous=p,r.next=o||null,p||(this.firstChunk=s),o||(this.lastChunk=r),this},fe.prototype.overwrite=function(t,e,i,s){if("string"!=typeof i)throw new TypeError("replacement content must be a string");for(;t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;if(e>this.original.length)throw new Error("end is out of bounds");if(t===e)throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");this._split(t),this._split(e),!0===s&&(de.storeName||(console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"),de.storeName=!0),s={storeName:!0});var r=void 0!==s&&s.storeName,n=void 0!==s&&s.contentOnly;if(r){var a=this.original.slice(t,e);this.storedNames[a]=!0}var o=this.byStart[t],p=this.byEnd[e];if(o){if(e>o.end&&o.next!==this.byStart[o.end])throw new Error("Cannot overwrite across a split point");if(o.edit(i,r,n),o!==p){for(var h=o.next;h!==p;)h.edit("",!1),h=h.next;h.edit("",!1)}}else{var c=new re(t,e,"").edit(i,r);p.next=c,c.previous=p}return this},fe.prototype.prepend=function(t){if("string"!=typeof t)throw new TypeError("outro content must be a string");return this.intro=t+this.intro,this},fe.prototype.prependLeft=function(t,e){if("string"!=typeof e)throw new TypeError("inserted content must be a string");this._split(t);var i=this.byEnd[t];return i?i.prependLeft(e):this.intro=e+this.intro,this},fe.prototype.prependRight=function(t,e){if("string"!=typeof e)throw new TypeError("inserted content must be a string");this._split(t);var i=this.byStart[t];return i?i.prependRight(e):this.outro=e+this.outro,this},fe.prototype.remove=function(t,e){for(;t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;if(t===e)return this;if(t<0||e>this.original.length)throw new Error("Character is out of bounds");if(t>e)throw new Error("end must be greater than start");this._split(t),this._split(e);for(var i=this.byStart[t];i;)i.intro="",i.outro="",i.edit(""),i=e>i.end?this.byStart[i.end]:null;return this},fe.prototype.lastChar=function(){if(this.outro.length)return this.outro[this.outro.length-1];var t=this.lastChunk;do{if(t.outro.length)return t.outro[t.outro.length-1];if(t.content.length)return t.content[t.content.length-1];if(t.intro.length)return t.intro[t.intro.length-1]}while(t=t.previous);return this.intro.length?this.intro[this.intro.length-1]:""},fe.prototype.lastLine=function(){var t=this.outro.lastIndexOf(ue);if(-1!==t)return this.outro.substr(t+1);var e=this.outro,i=this.lastChunk;do{if(i.outro.length>0){if(-1!==(t=i.outro.lastIndexOf(ue)))return i.outro.substr(t+1)+e;e=i.outro+e}if(i.content.length>0){if(-1!==(t=i.content.lastIndexOf(ue)))return i.content.substr(t+1)+e;e=i.content+e}if(i.intro.length>0){if(-1!==(t=i.intro.lastIndexOf(ue)))return i.intro.substr(t+1)+e;e=i.intro+e}}while(i=i.previous);return-1!==(t=this.intro.lastIndexOf(ue))?this.intro.substr(t+1)+e:this.intro+e},fe.prototype.slice=function(t,e){for(void 0===t&&(t=0),void 0===e&&(e=this.original.length);t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;for(var i="",s=this.firstChunk;s&&(s.start>t||s.end<=t);){if(s.start<e&&s.end>=e)return i;s=s.next}if(s&&s.edited&&s.start!==t)throw new Error("Cannot use replaced character "+t+" as slice start anchor.");for(var r=s;s;){!s.intro||r===s&&s.start!==t||(i+=s.intro);var n=s.start<e&&s.end>=e;if(n&&s.edited&&s.end!==e)throw new Error("Cannot use replaced character "+e+" as slice end anchor.");if(i+=s.content.slice(r===s?t-s.start:0,n?s.content.length+e-s.end:s.content.length),!s.outro||n&&s.end!==e||(i+=s.outro),n)break;s=s.next}return i},fe.prototype.snip=function(t,e){var i=this.clone();return i.remove(0,t),i.remove(e,i.original.length),i},fe.prototype._split=function(t){if(!this.byStart[t]&&!this.byEnd[t])for(var e=this.lastSearchedChunk,i=t>e.end;e;){if(e.contains(t))return this._splitChunk(e,t);e=i?this.byStart[e.end]:this.byEnd[e.start]}},fe.prototype._splitChunk=function(t,e){if(t.edited&&t.content.length){var i=ce(this.original)(e);throw new Error("Cannot split a chunk that has already been edited ("+i.line+":"+i.column+' – "'+t.original+'")')}var s=t.split(e);return this.byEnd[e]=t,this.byStart[e]=s,this.byEnd[s.end]=s,t===this.lastChunk&&(this.lastChunk=s),this.lastSearchedChunk=t,!0},fe.prototype.toString=function(){for(var t=this.intro,e=this.firstChunk;e;)t+=e.toString(),e=e.next;return t+this.outro},fe.prototype.isEmpty=function(){var t=this.firstChunk;do{if(t.intro.length&&t.intro.trim()||t.content.length&&t.content.trim()||t.outro.length&&t.outro.trim())return!1}while(t=t.next);return!0},fe.prototype.length=function(){var t=this.firstChunk,e=0;do{e+=t.intro.length+t.content.length+t.outro.length}while(t=t.next);return e},fe.prototype.trimLines=function(){return this.trim("[\\r\\n]")},fe.prototype.trim=function(t){return this.trimStart(t).trimEnd(t)},fe.prototype.trimEndAborted=function(t){var e=new RegExp((t||"\\s")+"+$");if(this.outro=this.outro.replace(e,""),this.outro.length)return!0;var i=this.lastChunk;do{var s=i.end,r=i.trimEnd(e);if(i.end!==s&&(this.lastChunk===i&&(this.lastChunk=i.next),this.byEnd[i.end]=i,this.byStart[i.next.start]=i.next,this.byEnd[i.next.end]=i.next),r)return!0;i=i.previous}while(i);return!1},fe.prototype.trimEnd=function(t){return this.trimEndAborted(t),this},fe.prototype.trimStartAborted=function(t){var e=new RegExp("^"+(t||"\\s")+"+");if(this.intro=this.intro.replace(e,""),this.intro.length)return!0;var i=this.firstChunk;do{var s=i.end,r=i.trimStart(e);if(i.end!==s&&(i===this.lastChunk&&(this.lastChunk=i.next),this.byEnd[i.end]=i,this.byStart[i.next.start]=i.next,this.byEnd[i.next.end]=i.next),r)return!0;i=i.next}while(i);return!1},fe.prototype.trimStart=function(t){return this.trimStartAborted(t),this};var ge=function(){};function ye(t){var e=[];return ve[t.type](e,t),e}ge.prototype.ancestor=function(t){for(var e=this;t--;)if(!(e=e.parent))return null;return e},ge.prototype.contains=function(t){for(;t;){if(t===this)return!0;t=t.parent}return!1},ge.prototype.findLexicalBoundary=function(){return this.parent.findLexicalBoundary()},ge.prototype.findNearest=function(t){return"string"==typeof t&&(t=new RegExp("^"+t+"$")),t.test(this.type)?this:this.parent.findNearest(t)},ge.prototype.unparenthesizedParent=function(){for(var t=this.parent;t&&"ParenthesizedExpression"===t.type;)t=t.parent;return t},ge.prototype.unparenthesize=function(){for(var t=this;"ParenthesizedExpression"===t.type;)t=t.expression;return t},ge.prototype.findScope=function(t){return this.parent.findScope(t)},ge.prototype.getIndentation=function(){return this.parent.getIndentation()},ge.prototype.initialise=function(t){for(var e=0,i=this.keys;e<i.length;e+=1){var s=this[i[e]];Array.isArray(s)?s.forEach(function(e){return e&&e.initialise(t)}):s&&"object"==typeof s&&s.initialise(t)}},ge.prototype.toJSON=function(){return me(this)},ge.prototype.toString=function(){return this.program.magicString.original.slice(this.start,this.end)},ge.prototype.transpile=function(t,e){for(var i=0,s=this.keys;i<s.length;i+=1){var r=this[s[i]];Array.isArray(r)?r.forEach(function(i){return i&&i.transpile(t,e)}):r&&"object"==typeof r&&r.transpile(t,e)}};var ve={Identifier:function(t,e){t.push(e)},ObjectPattern:function(t,e){for(var i=0,s=e.properties;i<s.length;i+=1){var r=s[i];ve[r.type](t,r)}},Property:function(t,e){ve[e.value.type](t,e.value)},ArrayPattern:function(t,e){for(var i=0,s=e.elements;i<s.length;i+=1){var r=s[i];r&&ve[r.type](t,r)}},RestElement:function(t,e){ve[e.argument.type](t,e.argument)},AssignmentPattern:function(t,e){ve[e.left.type](t,e.left)}},xe=Object.create(null);function be(t){this.parent=(t=t||{}).parent,this.isBlockScope=!!t.block,this.createDeclarationCallback=t.declare;for(var e=this;e.isBlockScope;)e=e.parent;this.functionScope=e,this.identifiers=[],this.declarations=Object.create(null),this.references=Object.create(null),this.blockScopedDeclarations=this.isBlockScope?null:Object.create(null),this.aliases=Object.create(null)}function _e(t,e){var i,s=t.split("\n"),r=s.length,n=0;for(i=0;i<r;i+=1){var a=n+s[i].length+1;if(a>e)return{line:i+1,column:e-n,char:i};n=a}throw new Error("Could not determine location of character")}function Se(t,e){for(var i="";e--;)i+=t;return i}function ke(t,e,i){void 0===i&&(i=1);var s=Math.max(e.line-5,0),r=e.line,n=String(r).length,a=t.split("\n").slice(s,r),o=a[a.length-1].slice(0,e.column).replace(/\t/g,"  ").length;return a.map(function(t,e){return i=n,(r=String(e+s+1))+Se(" ",i-r.length)+" : "+t.replace(/\t/g,"  ");var i,r}).join("\n")+"\n"+Se(" ",n+3+o)+Se("^",i)}"do if in for let new try var case else enum eval null this true void with await break catch class const false super throw while yield delete export import public return static switch typeof default extends finally package private continue debugger function arguments interface protected implements instanceof".split(" ").forEach(function(t){return xe[t]=!0}),be.prototype={addDeclaration:function(t,e){for(var i=0,s=ye(t);i<s.length;i+=1){var r=s[i],n=r.name,a={name:n,node:r,kind:e,instances:[]};this.declarations[n]=a,this.isBlockScope&&(this.functionScope.blockScopedDeclarations[n]||(this.functionScope.blockScopedDeclarations[n]=[]),this.functionScope.blockScopedDeclarations[n].push(a))}},addReference:function(t){this.consolidated?this.consolidateReference(t):this.identifiers.push(t)},consolidate:function(){for(var t=0;t<this.identifiers.length;t+=1)this.consolidateReference(this.identifiers[t]);this.consolidated=!0},consolidateReference:function(t){var e=this.declarations[t.name];e?e.instances.push(t):(this.references[t.name]=!0,this.parent&&this.parent.addReference(t))},contains:function(t){return this.declarations[t]||!!this.parent&&this.parent.contains(t)},createIdentifier:function(t){"number"==typeof t&&(t=t.toString());for(var e=t=t.replace(/\s/g,"").replace(/\[([^\]]+)\]/g,"_$1").replace(/[^a-zA-Z0-9_$]/g,"_").replace(/_{2,}/,"_"),i=1;this.declarations[e]||this.references[e]||this.aliases[e]||e in xe;)e=t+"$"+i++;return this.aliases[e]=!0,e},createDeclaration:function(t){var e=this.createIdentifier(t);return this.createDeclarationCallback(e),e},findDeclaration:function(t){return this.declarations[t]||this.parent&&this.parent.findDeclaration(t)},resolveName:function(t){var e=this.findDeclaration(t);return e?e.name:t}};var we=function(t){function e(e,i){if(t.call(this,e),this.name="CompileError",i){var s=i.program.magicString.original,r=_e(s,i.start);this.message=e+" ("+r.line+":"+r.column+")",this.stack=(new t).stack.replace(new RegExp(".+new "+this.name+".+\\n","m"),""),this.loc=r,this.snippet=ke(s,r,i.end-i.start)}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+"\n"+this.snippet},e.missingTransform=function(t,i,s,r){throw void 0===r&&(r=null),new e("Transforming "+t+" is not "+(r?"fully supported":"implemented")+". Use `transforms: { "+i+": false }` to skip transformation and disable this error"+(r?", or `transforms: { "+r+": true }` if you know what you're doing":"")+".",s)},e}(Error);function Ee(t,e){for(var i=0;i<t.length;i+=1)if(e(t[i],i))return i;return-1}var Ce={Identifier:Ie,AssignmentPattern:function(t,e,i,s,r,n,a){var o="Identifier"===s.left.type,p=o?s.left.name:r;n||a.push(function(e,i,r){t.prependRight(s.left.end,i+"if ( "+p+" === void 0 ) "+p),t.move(s.left.end,s.right.end,e),t.appendLeft(s.right.end,r)}),o||Ae(t,e,i,s.left,r,n,a)},ArrayPattern:function(t,e,i,s,r,n,a){var o=s.start;s.elements.forEach(function(s,p){s&&("RestElement"===s.type?Ne(t,e,i,o,s.argument,r+".slice("+p+")",n,a):Ne(t,e,i,o,s,r+"["+p+"]",n,a),o=s.end)}),t.remove(o,s.end)},ObjectPattern:Le};function Ae(t,e,i,s,r,n,a){Ce[s.type](t,e,i,s,r,n,a)}function Ie(t,e,i,s,r,n,a){a.push(function(e,a,o){t.overwrite(s.start,s.end,(n?a:a+"var ")+i(s)+" = "+r+o),t.move(s.start,s.end,e)})}function Le(t,e,i,s,r,n,a){var o=this,p=s.start,h=[];s.properties.forEach(function(s){var c,l;if("Property"===s.type)if(l=s.value,s.computed||"Identifier"!==s.key.type)if(s.computed||"Literal"!==s.key.type){var u=t.slice(s.key.start,s.key.end);c=r+"["+u+"]",h.push("String("+u+")")}else c=r+"["+s.key.raw+"]",h.push(JSON.stringify(String(s.key.value)));else c=r+"."+s.key.name,h.push('"'+s.key.name+'"');else{if("RestElement"!==s.type)throw new we(o,"Unexpected node of type "+s.type+" in object pattern");l=s.argument,c=e("rest"),a.push(function(e,i,a){var o=s.program.getObjectWithoutPropertiesHelper(t);t.overwrite(s.start,p=s.argument.start,(n?i:i+"var ")+c+" = "+o+"( "+r+", ["+h.join(", ")+"] )"+a),t.move(s.start,p,e)})}Ne(t,e,i,p,l,c,n,a),p=s.end}),t.remove(p,s.end)}function Ne(t,e,i,s,r,n,a,o){switch(r.type){case"Identifier":t.remove(s,r.start),Ie(t,0,i,r,n,a,o);break;case"MemberExpression":t.remove(s,r.start),function(t,e,i,s,r,n,a){a.push(function(e,i,n){t.prependRight(s.start,i),t.appendLeft(s.end," = "+r+n),t.move(s.start,s.end,e)})}(t,0,0,r,n,0,o);break;case"AssignmentPattern":var p,h="Identifier"===r.left.type;p=h?i(r.left):e(n),o.push(function(e,i,s){a?(t.prependRight(r.right.start,p+" = "+n+", "+p+" = "+p+" === void 0 ? "),t.appendLeft(r.right.end," : "+p+s)):(t.prependRight(r.right.start,i+"var "+p+" = "+n+"; if ( "+p+" === void 0 ) "+p+" = "),t.appendLeft(r.right.end,s)),t.move(r.right.start,r.right.end,e)}),h?t.remove(s,r.right.start):(t.remove(s,r.left.start),t.remove(r.left.end,r.right.start),Ne(t,e,i,s,r.left,p,a,o));break;case"ObjectPattern":t.remove(s,s=r.start);var c=n;r.properties.length>1&&(c=e(n),o.push(function(e,i,o){t.prependRight(r.start,(a?"":i+"var ")+c+" = "),t.overwrite(r.start,s=r.start+1,n),t.appendLeft(s,o),t.overwrite(r.start,s=r.start+1,(a?"":i+"var ")+c+" = "+n+o),t.move(r.start,s,e)})),Le(t,e,i,r,c,a,o);break;case"ArrayPattern":if(t.remove(s,s=r.start),r.elements.filter(Boolean).length>1){var l=e(n);o.push(function(e,i,o){t.prependRight(r.start,(a?"":i+"var ")+l+" = "),t.overwrite(r.start,s=r.start+1,n,{contentOnly:!0}),t.appendLeft(s,o),t.move(r.start,s,e)}),r.elements.forEach(function(r,n){r&&("RestElement"===r.type?Ne(t,e,i,s,r.argument,l+".slice("+n+")",a,o):Ne(t,e,i,s,r,l+"["+n+"]",a,o),s=r.end)})}else{var u=Ee(r.elements,Boolean),d=r.elements[u];"RestElement"===d.type?Ne(t,e,i,s,d.argument,n+".slice("+u+")",a,o):Ne(t,e,i,s,d,n+"["+u+"]",a,o),s=d.end}t.remove(s,r.end);break;default:throw new Error("Unexpected node type in destructuring ("+r.type+")")}}var Pe=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createScope=function(){var t=this;this.parentIsFunction=/Function/.test(this.parent.type),this.isFunctionBlock=this.parentIsFunction||"Root"===this.parent.type,this.scope=new be({block:!this.isFunctionBlock,parent:this.parent.findScope(!1),declare:function(e){return t.createdDeclarations.push(e)}}),this.parentIsFunction&&this.parent.params.forEach(function(e){t.scope.addDeclaration(e,"param")})},e.prototype.initialise=function(t){this.thisAlias=null,this.argumentsAlias=null,this.defaultParameters=[],this.createdDeclarations=[],this.scope||this.createScope(),this.body.forEach(function(e){return e.initialise(t)}),this.scope.consolidate()},e.prototype.findLexicalBoundary=function(){return"Program"===this.type?this:/^Function/.test(this.parent.type)?this:this.parent.findLexicalBoundary()},e.prototype.findScope=function(t){return t&&!this.isFunctionBlock?this.parent.findScope(t):this.scope},e.prototype.getArgumentsAlias=function(){return this.argumentsAlias||(this.argumentsAlias=this.scope.createIdentifier("arguments")),this.argumentsAlias},e.prototype.getArgumentsArrayAlias=function(){return this.argumentsArrayAlias||(this.argumentsArrayAlias=this.scope.createIdentifier("argsArray")),this.argumentsArrayAlias},e.prototype.getThisAlias=function(){return this.thisAlias||(this.thisAlias=this.scope.createIdentifier("this")),this.thisAlias},e.prototype.getIndentation=function(){if(void 0===this.indentation){for(var t=this.program.magicString.original,e=this.synthetic||!this.body.length,i=e?this.start:this.body[0].start;i&&"\n"!==t[i];)i-=1;for(this.indentation="";;){var s=t[i+=1];if(" "!==s&&"\t"!==s)break;this.indentation+=s}for(var r=this.program.magicString.getIndentString(),n=this.parent;n;)"constructor"!==n.kind||n.parent.parent.superClass||(this.indentation=this.indentation.replace(r,"")),n=n.parent;e&&(this.indentation+=r)}return this.indentation},e.prototype.transpile=function(e,i){var s,r,n=this,a=this.getIndentation(),o=[];if(this.argumentsAlias&&o.push(function(t,i,s){e.appendLeft(t,i+"var "+n.argumentsAlias+" = arguments"+s)}),this.thisAlias&&o.push(function(t,i,s){e.appendLeft(t,i+"var "+n.thisAlias+" = this"+s)}),this.argumentsArrayAlias&&o.push(function(t,i,s){var r=n.scope.createIdentifier("i");e.appendLeft(t,i+"var "+r+" = arguments.length, "+n.argumentsArrayAlias+" = Array("+r+");\n"+a+"while ( "+r+"-- ) "+n.argumentsArrayAlias+"["+r+"] = arguments["+r+"]"+s)}),/Function/.test(this.parent.type)?this.transpileParameters(this.parent.params,e,i,a,o):"CatchClause"===this.parent.type&&this.transpileParameters([this.parent.param],e,i,a,o),i.letConst&&this.isFunctionBlock&&this.transpileBlockScopedIdentifiers(e),t.prototype.transpile.call(this,e,i),this.createdDeclarations.length&&o.push(function(t,i,s){var r=i+"var "+n.createdDeclarations.join(", ")+s;e.appendLeft(t,r)}),this.synthetic)if("ArrowFunctionExpression"===this.parent.type){var p=this.body[0];o.length?(e.appendLeft(this.start,"{").prependRight(this.end,this.parent.getIndentation()+"}"),e.prependRight(p.start,"\n"+a+"return "),e.appendLeft(p.end,";\n")):i.arrow&&(e.prependRight(p.start,"{ return "),e.appendLeft(p.end,"; }"))}else o.length&&e.prependRight(this.start,"{").appendLeft(this.end,"}");s=(r=this.body[0])&&"ExpressionStatement"===r.type&&"Literal"===r.expression.type&&"use strict"===r.expression.value?this.body[0].end:this.synthetic||"Root"===this.parent.type?this.start:this.start+1;var h="\n"+a,c=";";o.forEach(function(t,e){e===o.length-1&&(c=";\n"),t(s,h,c)})},e.prototype.transpileParameters=function(t,e,i,s,r){var n=this;t.forEach(function(a){if("AssignmentPattern"===a.type&&"Identifier"===a.left.type)i.defaultParameter&&r.push(function(t,i,s){e.prependRight(a.left.end,i+"if ( "+a.left.name+" === void 0 ) "+a.left.name).move(a.left.end,a.right.end,t).appendLeft(a.right.end,s)});else if("RestElement"===a.type)i.spreadRest&&r.push(function(i,r,o){var p=t[t.length-2];if(p)e.remove(p?p.end:a.start,a.end);else{for(var h=a.start,c=a.end;/\s/.test(e.original[h-1]);)h-=1;for(;/\s/.test(e.original[c]);)c+=1;e.remove(h,c)}var l=a.argument.name,u=n.scope.createIdentifier("len"),d=t.length-1;e.prependRight(i,d?r+"var "+l+" = [], "+u+" = arguments.length - "+d+";\n"+s+"while ( "+u+"-- > 0 ) "+l+"[ "+u+" ] = arguments[ "+u+" + "+d+" ]"+o:r+"var "+l+" = [], "+u+" = arguments.length;\n"+s+"while ( "+u+"-- ) "+l+"[ "+u+" ] = arguments[ "+u+" ]"+o)});else if("Identifier"!==a.type&&i.parameterDestructuring){var o=n.scope.createIdentifier("ref");Ae(e,function(t){return n.scope.createIdentifier(t)},function(t){return n.scope.resolveName(t.name)},a,o,!1,r),e.prependRight(a.start,o)}})},e.prototype.transpileBlockScopedIdentifiers=function(t){var e=this;Object.keys(this.scope.blockScopedDeclarations).forEach(function(i){for(var s=0,r=e.scope.blockScopedDeclarations[i];s<r.length;s+=1){var n=r[s],a=!1;if("for.let"===n.kind){var o=n.node.findNearest("ForStatement");if(o.shouldRewriteAsFunction){var p=e.scope.createIdentifier(i),h=o.reassigned[i]?e.scope.createIdentifier(i):i;n.name=p,t.overwrite(n.node.start,n.node.end,p,{storeName:!0}),o.aliases[i]={outer:p,inner:h};for(var c=0,l=n.instances;c<l.length;c+=1){var u=l[c],d=o.body.contains(u)?h:p;i!==d&&t.overwrite(u.start,u.end,d,{storeName:!0})}a=!0}}if(!a){var f=e.scope.createIdentifier(i);if(i!==f){n.name=f,t.overwrite(n.node.start,n.node.end,f,{storeName:!0});for(var m=0,g=n.instances;m<g.length;m+=1){var y=g[m];y.rewritten=!0,t.overwrite(y.start,y.end,f,{storeName:!0})}}}}})},e}(ge);function Te(t){return"Identifier"===t.type&&"arguments"===t.name}function Re(t,e,i){for(var s=i.length;s--;){var r=i[s];if(r&&"SpreadElement"===r.type){var n=r.argument;if("ArrayExpression"===n.type){var a=n.elements;if(!a.some(function(t){return null===t})){var o=s===i.length-1;0===a.length?t.remove(o&&0!==s?i[s-1].end:r.start,o?e.end-1:i[s+1].start):(t.remove(r.start,a[0].start),t.remove(a[a.length-1].end,o?e.end-1:r.end)),i.splice.apply(i,[s,1].concat(a)),s+=a.length}}}}}function Oe(t){switch(t.type){case"ArrayExpression":case"CallExpression":case"Identifier":case"ParenthesizedExpression":case"ThisExpression":return!1;default:return!0}}function je(t,e,i,s,r){for(var n=e.length,a=-1;n--;){var o=e[n];o&&"SpreadElement"===o.type&&(Te(o.argument)&&t.overwrite(o.argument.start,o.argument.end,s),a=n)}if(-1===a)return!1;if(r){for(n=0;n<e.length;n+=1){var p=e[n];"SpreadElement"===p.type?t.remove(p.start,p.argument.start):(t.prependRight(p.start,"["),t.prependRight(p.end,"]"))}return!0}var h=e[a],c=e[a-1];if(c)t.overwrite(c.end,h.start," ].concat( ");else{var l;if(i!==h.start)(l=Oe(h.argument))?t.overwrite(i,h.start,"( "):t.remove(i,h.start);else{if("CallExpression"!==h.parent.type)throw new we("Unsupported spread construct, please raise an issue at https://github.com/bublejs/buble/issues",h);l=Oe(h.argument)}t.overwrite(h.end,e[1].start,l?" ).concat( ":".concat( ")}for(n=a;n<e.length;n+=1)(h=e[n])&&("SpreadElement"===h.type?t.remove(h.start,h.argument.start):(t.appendLeft(h.start,"["),t.appendLeft(h.end,"]")));return!0}var Ve=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if(e.spreadRest&&this.elements.length)for(var i=this.findLexicalBoundary(),s=this.elements.length;s--;){var r=this.elements[s];r&&"SpreadElement"===r.type&&Te(r.argument)&&(this.argumentsArrayAlias=i.getArgumentsArrayAlias())}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.spreadRest){if(Re(e,this,this.elements),this.elements.length){var s=this.elements[this.elements.length-1];s&&/\s*,/.test(e.original.slice(s.end,this.end))&&e.overwrite(s.end,this.end-1," ")}if(1===this.elements.length){var r=this.elements[0];r&&"SpreadElement"===r.type&&(Te(r.argument)?e.overwrite(this.start,this.end,"[].concat( "+this.argumentsArrayAlias+" )"):(e.overwrite(this.start,r.argument.start,"[].concat( "),e.overwrite(r.end,this.end," )")))}else je(e,this.elements,this.start,this.argumentsArrayAlias)&&e.overwrite(this.end-1,this.end,")")}},e}(ge);function De(t,e){for(;")"!==t.original[e];){if(","===t.original[e])return void t.remove(e,e+1);"/"===t.original[e]&&(e="/"===t.original[e+1]?t.original.indexOf("\n",e):t.original.indexOf("*/",e)+1),e+=1}}var Be=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.async&&e.asyncAwait&&we.missingTransform("async arrow functions","asyncAwait",this),this.body.createScope(),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){for(var s=this.start,r=(this.body||this.params[0]).start-1;"("!==e.original[s]&&s<r;)++s;"("!==e.original[s]&&(s=-1);var n=-1===s;if(i.arrow||this.needsArguments(i)){for(var a=this.body.start;"="!==e.original[a];)a-=1;e.remove(a,this.body.start),t.prototype.transpile.call(this,e,i),n&&(e.prependRight(this.params[0].start,"("),e.appendLeft(this.params[0].end,")"));var o,p=this.parent&&"ExpressionStatement"===this.parent.type,h=p?"!":"";this.async&&(h+="async "),h+="function",p||(h+=" "),(o=n?this.params[0].start:s)>this.start?e.overwrite(this.start,o,h):e.prependRight(this.start,h)}else t.prototype.transpile.call(this,e,i);i.trailingFunctionCommas&&this.params.length&&!n&&De(e,this.params[this.params.length-1].end)},e.prototype.needsArguments=function(t){return t.spreadRest&&this.params.filter(function(t){return"RestElement"===t.type}).length>0},e}(ge);function Fe(t,e){var i=e.findDeclaration(t.name);if(i&&"const"===i.kind)throw new we(t.name+" is read-only",t)}var Me=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if("Identifier"===this.left.type){var i=this.findScope(!1).findDeclaration(this.left.name),s=i&&i.node.ancestor(3);s&&"ForStatement"===s.type&&s.body.contains(this)&&(s.reassigned[this.left.name]=!0)}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){"Identifier"===this.left.type&&Fe(this.left,this.findScope(!1)),"**="===this.operator&&i.exponentiation?this.transpileExponentiation(e,i):/Pattern/.test(this.left.type)&&i.destructuring&&this.transpileDestructuring(e),t.prototype.transpile.call(this,e,i)},e.prototype.transpileDestructuring=function(t){var e=this,i=this.findScope(!0),s=this.findScope(!1),r=i.createDeclaration("assign");t.appendRight(this.left.end,"("+r),t.appendLeft(this.right.end,", ");var n=[];Ae(t,function(t){return i.createDeclaration(t)},function(t){var e=s.resolveName(t.name);return Fe(t,s),e},this.left,r,!0,n);var a=", ";n.forEach(function(t,i){i===n.length-1&&(a=""),t(e.end,"",a)}),"ExpressionStatement"===this.unparenthesizedParent().type?t.prependRight(this.end,")"):t.appendRight(this.end,", "+r+")")},e.prototype.transpileExponentiation=function(t){for(var e,i=this.findScope(!1),s=this.left.end;"*"!==t.original[s];)s+=1;t.remove(s,s+2);var r=this.left.unparenthesize();if("Identifier"===r.type)e=i.resolveName(r.name);else if("MemberExpression"===r.type){var n,a,o=!1,p=!1,h=this.findNearest(/(?:Statement|Declaration)$/),c=h.getIndentation();"Identifier"===r.property.type?a=r.computed?i.resolveName(r.property.name):r.property.name:(a=i.createDeclaration("property"),p=!0),"Identifier"===r.object.type?n=i.resolveName(r.object.name):(n=i.createDeclaration("object"),o=!0),r.start===h.start?o&&p?(t.prependRight(h.start,n+" = "),t.overwrite(r.object.end,r.property.start,";\n"+c+a+" = "),t.overwrite(r.property.end,r.end,";\n"+c+n+"["+a+"]")):o?(t.prependRight(h.start,n+" = "),t.appendLeft(r.object.end,";\n"+c),t.appendLeft(r.object.end,n)):p&&(t.prependRight(r.property.start,a+" = "),t.appendLeft(r.property.end,";\n"+c),t.move(r.property.start,r.property.end,this.start),t.appendLeft(r.object.end,"["+a+"]"),t.remove(r.object.end,r.property.start),t.remove(r.property.end,r.end)):(o&&p?(t.prependRight(r.start,"( "+n+" = "),t.overwrite(r.object.end,r.property.start,", "+a+" = "),t.overwrite(r.property.end,r.end,", "+n+"["+a+"]")):o?(t.prependRight(r.start,"( "+n+" = "),t.appendLeft(r.object.end,", "+n)):p&&(t.prependRight(r.property.start,"( "+a+" = "),t.appendLeft(r.property.end,", "),t.move(r.property.start,r.property.end,r.start),t.overwrite(r.object.end,r.property.start,"["+a+"]"),t.remove(r.property.end,r.end)),p&&t.appendLeft(this.end," )")),e=n+(r.computed||p?"["+a+"]":"."+a)}t.prependRight(this.right.start,"Math.pow( "+e+", "),t.appendLeft(this.right.end," )")},e}(ge),Ue=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.asyncAwait&&we.missingTransform("await","asyncAwait",this),t.prototype.initialise.call(this,e)},e}(ge),qe=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){"**"===this.operator&&i.exponentiation&&(e.prependRight(this.start,"Math.pow( "),e.overwrite(this.left.end,this.right.start,", "),e.appendLeft(this.end," )")),t.prototype.transpile.call(this,e,i)},e}(ge),Xe=/(?:For(?:In|Of)?|While)Statement/,Je=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(){var t=this.findNearest(Xe),e=this.findNearest("SwitchCase");t&&(!e||t.depth>e.depth)&&(t.canBreak=!0,this.loop=t)},e.prototype.transpile=function(t){if(this.loop&&this.loop.shouldRewriteAsFunction){if(this.label)throw new we("Labels are not currently supported in a loop with locally-scoped variables",this);t.overwrite(this.start,this.start+5,"return 'break'")}},e}(ge),We=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if(e.spreadRest&&this.arguments.length>1)for(var i=this.findLexicalBoundary(),s=this.arguments.length;s--;){var r=this.arguments[s];"SpreadElement"===r.type&&Te(r.argument)&&(this.argumentsArrayAlias=i.getArgumentsArrayAlias())}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(i.spreadRest&&this.arguments.length&&Re(e,this,this.arguments),i.spreadRest&&this.arguments.length){var s,r=!1,n=this.arguments[0];if(1===this.arguments.length?"SpreadElement"===n.type&&(e.remove(n.start,n.argument.start),r=!0):r=je(e,this.arguments,n.start,this.argumentsArrayAlias),r){var a=null;if("Super"===this.callee.type?a=this.callee:"MemberExpression"===this.callee.type&&"Super"===this.callee.object.type&&(a=this.callee.object),a||"MemberExpression"!==this.callee.type)s="void 0";else if("Identifier"===this.callee.object.type)s=this.callee.object.name;else{s=this.findScope(!0).createDeclaration("ref");var o=this.callee.object;e.prependRight(o.start,"("+s+" = "),e.appendLeft(o.end,")")}e.appendLeft(this.callee.end,".apply"),a?(a.noCall=!0,this.arguments.length>1&&("SpreadElement"===n.type?Oe(n.argument)&&e.prependRight(n.start,"( "):e.prependRight(n.start,"[ "),e.appendLeft(this.arguments[this.arguments.length-1].end," )"))):1===this.arguments.length?e.prependRight(n.start,s+", "):("SpreadElement"===n.type?Oe(n.argument)?e.appendLeft(n.start,s+", ( "):e.appendLeft(n.start,s+", "):e.appendLeft(n.start,s+", [ "),e.appendLeft(this.arguments[this.arguments.length-1].end," )"))}}i.trailingFunctionCommas&&this.arguments.length&&De(e,this.arguments[this.arguments.length-1].end),t.prototype.transpile.call(this,e,i)},e}(ge),ze=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i,s,r){var n=this;if(i.classes){var a=this.parent.name,o=e.getIndentString(),p=this.getIndentation()+(s?o:""),h=p+o,c=Ee(this.body,function(t){return"constructor"===t.kind}),l=this.body[c],u="",d="";if(this.body.length?(e.remove(this.start,this.body[0].start),e.remove(this.body[this.body.length-1].end,this.end)):e.remove(this.start,this.end),l){l.value.body.isConstructorBody=!0;var f=this.body[c+1];c>0&&(e.remove(this.body[c-1].end,l.start),e.move(l.start,f?f.start:this.end-1,this.body[0].start)),s||e.appendLeft(l.end,";")}var m=[];this.body.forEach(function(t){if("FieldDefinition"===t.type&&(m.push(t.computed?"this"+e.slice(t.start,t.end)+";":"this."+e.slice(t.start,t.end)+";"),e.remove(t.start,t.end),""!==e.byStart[t.end].content)){for(var i=0;i<e.byStart[t.end].content.length&&-1===e.byStart[t.end].content.slice(0,i).indexOf(";");i++);i>0&&e.remove(t.end,t.end+i)}});var g=!1!==this.program.options.namedFunctionExpressions,y=g||this.parent.superClass||"ClassDeclaration"!==this.parent.type;if(this.parent.superClass){var v="if ( "+r+" ) "+a+".__proto__ = "+r+";\n"+p+a+".prototype = Object.create( "+r+" && "+r+".prototype );\n"+p+a+".prototype.constructor = "+a+";";u+=l?"\n\n"+p+v:(v="function "+a+" () {"+(m.length?"\n"+h+m.join("\n"+h)+"\n"+h:"")+(r?"\n"+h+r+".apply(this, arguments);\n"+p+"}":"}")+(s?"":";")+(this.body.length?"\n\n"+p:"")+v)+"\n\n"+p}else if(!l){var x="function "+(y?a+" ":"")+"() {"+(m.length?"\n"+h+m.join("\n"+h)+"\n"+p:"")+"}";"ClassDeclaration"===this.parent.type&&(x+=";"),this.body.length&&(x+="\n\n"+p),u+=x}l&&m.length&&e.appendLeft(l.value.body.start+1,"\n"+h+m.join("\n"+h));var b,_,S=this.findScope(!1),k=[],w=[];if(this.body.forEach(function(t,s){if("get"!==t.kind&&"set"!==t.kind||!i.getterSetter||we.missingTransform("getters and setters","getterSetter",t),"FieldDefinition"!==t.type)if("constructor"!==t.kind){t.static&&e.remove(t.start,t.start+(" "==e.original[t.start+6]?7:6));var r,o="method"!==t.kind,h=t.key.name;(xe[h]||t.value.body.scope.references[h])&&(h=S.createIdentifier(h));var l=!1;if(t.computed||"Literal"!==t.key.type||(l=!0,t.computed=!0),o){if(t.computed)throw new Error("Computed accessor properties are not currently supported");e.remove(t.start,t.key.start),t.static?(~w.indexOf(t.key.name)||w.push(t.key.name),_||(_=S.createIdentifier("staticAccessors")),r=""+_):(~k.indexOf(t.key.name)||k.push(t.key.name),b||(b=S.createIdentifier("prototypeAccessors")),r=""+b)}else r=t.static?""+a:a+".prototype";t.computed||(r+="."),(c>0&&s===c+1||0===s&&c===n.body.length-1)&&(r="\n\n"+p+r);var u=t.key.end;if(t.computed)if(l)e.prependRight(t.key.start,"["),e.appendLeft(t.key.end,"]");else{for(;"]"!==e.original[u];)u+=1;u+=1}var d=(o?"."+t.kind:"")+" = "+(t.value.async?"async ":"")+"function"+(t.value.generator?"* ":" ")+(t.computed||o||!g?"":h+" ");e.remove(u,t.value.start),e.prependRight(t.value.start,d),e.appendLeft(t.end,";"),t.value.generator&&e.remove(t.start,t.key.start);var f=t.key.start;if(t.computed&&!l)for(;"["!=e.original[f];)--f;t.start<f?e.overwrite(t.start,f,r):e.prependRight(t.start,r)}else e.overwrite(t.key.start,t.key.end,"function"+(y?" "+a:""))}),k.length||w.length){var E=[],C=[];k.length&&(E.push("var "+b+" = { "+k.map(function(t){return t+": { configurable: true }"}).join(",")+" };"),C.push("Object.defineProperties( "+a+".prototype, "+b+" );")),w.length&&(E.push("var "+_+" = { "+w.map(function(t){return t+": { configurable: true }"}).join(",")+" };"),C.push("Object.defineProperties( "+a+", "+_+" );")),l&&(u+="\n\n"+p),u+=E.join("\n"+p),l||(u+="\n\n"+p),d+="\n\n"+p+C.join("\n"+p)}l?e.appendLeft(l.end,u):e.prependRight(this.start,u),e.appendLeft(this.end,d)}t.prototype.transpile.call(this,e,i)},e}(ge),He=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.id?(this.name=this.id.name,this.findScope(!0).addDeclaration(this.id,"class")):this.name=this.findScope(!0).createIdentifier("defaultExport"),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(t,e){if(e.classes){this.superClass||function(t,e){var i=t.start,s=t.end,r=e.getIndentString(),n=r.length,a=i-n;t.program.indentExclusions[a]||e.original.slice(a,i)!==r||e.remove(a,i);for(var o,p=new RegExp(r+"\\S","g"),h=e.original.slice(i,s);o=p.exec(h);){var c=i+o.index;t.program.indentExclusions[c]||e.remove(c,c+n)}}(this.body,t);var i=this.superClass&&(this.superClass.name||"superclass"),s=this.getIndentation(),r=s+t.getIndentString(),n="ExportDefaultDeclaration"===this.parent.type;n&&t.remove(this.parent.start,this.start);var a=this.start;this.id?(t.overwrite(a,this.id.start,"var "),a=this.id.end):t.prependLeft(a,"var "+this.name),this.superClass?this.superClass.end===this.body.start?(t.remove(a,this.superClass.start),t.appendLeft(a," = /*@__PURE__*/(function ("+i+") {\n"+r)):(t.overwrite(a,this.superClass.start," = "),t.overwrite(this.superClass.end,this.body.start,"/*@__PURE__*/(function ("+i+") {\n"+r)):a===this.body.start?t.appendLeft(a," = "):t.overwrite(a,this.body.start," = "),this.body.transpile(t,e,!!this.superClass,i);var o=n?"\n\n"+s+"export default "+this.name+";":"";this.superClass?(t.appendLeft(this.end,"\n\n"+r+"return "+this.name+";\n"+s+"}("),t.move(this.superClass.start,this.superClass.end,this.end),t.prependRight(this.end,"));"+o)):o&&t.prependRight(this.end,o)}else this.body.transpile(t,e,!1,null)},e}(ge),Ge=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.name=(this.id?this.id.name:"VariableDeclarator"===this.parent.type?this.parent.id.name:"AssignmentExpression"!==this.parent.type?null:"Identifier"===this.parent.left.type?this.parent.left.name:"MemberExpression"===this.parent.left.type?this.parent.left.property.name:null)||this.findScope(!0).createIdentifier("anonymous"),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(t,e){if(e.classes){var i=this.superClass&&(this.superClass.name||"superclass"),s=this.getIndentation(),r=s+t.getIndentString();this.superClass?(t.remove(this.start,this.superClass.start),t.remove(this.superClass.end,this.body.start),t.appendRight(this.start,"/*@__PURE__*/(function ("+i+") {\n"+r)):t.overwrite(this.start,this.body.start,"/*@__PURE__*/(function () {\n"+r),this.body.transpile(t,e,!0,i);var n="";this.superClass&&(n=t.slice(this.superClass.start,this.superClass.end),t.remove(this.superClass.start,this.superClass.end)),t.appendLeft(this.end,"\n\n"+r+"return "+this.name+";\n"+s+"}("+n+"))")}else this.body.transpile(t,e,!1)},e}(ge),Qe=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(t){if(this.findNearest(Xe).shouldRewriteAsFunction){if(this.label)throw new we("Labels are not currently supported in a loop with locally-scoped variables",this);t.overwrite(this.start,this.start+8,"return")}},e}(ge),Ke=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.moduleExport&&we.missingTransform("export","moduleExport",this),t.prototype.initialise.call(this,e)},e}(ge),$e=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.moduleExport&&we.missingTransform("export","moduleExport",this),t.prototype.initialise.call(this,e)},e}(ge),Ye=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.findScope=function(t){return t||!this.createdScope?this.parent.findScope(t):this.body.scope},e.prototype.initialise=function(e){if(this.body.createScope(),this.createdScope=!0,this.reassigned=Object.create(null),this.aliases=Object.create(null),this.thisRefs=[],t.prototype.initialise.call(this,e),e.letConst)for(var i=Object.keys(this.body.scope.declarations),s=i.length;s--;){for(var r=this.body.scope.declarations[i[s]],n=r.instances.length;n--;){var a=r.instances[n].findNearest(/Function/);if(a&&a.depth>this.depth){this.shouldRewriteAsFunction=!0;for(var o=0,p=this.thisRefs;o<p.length;o+=1){var h=p[o];h.alias=h.alias||h.findLexicalBoundary().getThisAlias()}break}}if(this.shouldRewriteAsFunction)break}},e.prototype.transpile=function(e,i){var s="ForOfStatement"!=this.type&&("BlockStatement"!==this.body.type||"BlockStatement"===this.body.type&&this.body.synthetic);if(this.shouldRewriteAsFunction){var r=this.getIndentation(),n=r+e.getIndentString(),a=this.args?" "+this.args.join(", ")+" ":"",o=this.params?" "+this.params.join(", ")+" ":"",p=this.findScope(!0),h=p.createIdentifier("loop"),c="var "+h+" = function ("+o+") "+(this.body.synthetic?"{\n"+r+e.getIndentString():""),l=(this.body.synthetic?"\n"+r+"}":"")+";\n\n"+r;if(e.prependRight(this.body.start,c),e.appendLeft(this.body.end,l),e.move(this.start,this.body.start,this.body.end),this.canBreak||this.canReturn){var u=p.createIdentifier("returned"),d="{\n"+n+"var "+u+" = "+h+"("+a+");\n";this.canBreak&&(d+="\n"+n+"if ( "+u+" === 'break' ) break;"),this.canReturn&&(d+="\n"+n+"if ( "+u+" ) return "+u+".v;"),e.prependRight(this.body.end,d+="\n"+r+"}")}else{var f=h+"("+a+");";"DoWhileStatement"===this.type?e.overwrite(this.start,this.body.start,"do {\n"+n+f+"\n"+r+"}"):e.prependRight(this.body.end,f)}}else s&&(e.appendLeft(this.body.start,"{ "),e.prependRight(this.body.end," }"));t.prototype.transpile.call(this,e,i)},e}(ge),Ze=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.findScope=function(t){return t||!this.createdScope?this.parent.findScope(t):this.body.scope},e.prototype.transpile=function(e,i){var s=this,r=this.getIndentation()+e.getIndentString();if(this.shouldRewriteAsFunction){var n="VariableDeclaration"===this.init.type?this.init.declarations.map(function(t){return ye(t.id)}):[],a=this.aliases;this.args=n.map(function(t){return t in s.aliases?s.aliases[t].outer:t}),this.params=n.map(function(t){return t in s.aliases?s.aliases[t].inner:t});var o=Object.keys(this.reassigned).map(function(t){return a[t].outer+" = "+a[t].inner+";"});o.length&&(this.body.synthetic?e.appendLeft(this.body.body[0].end,"; "+o.join(" ")):e.appendLeft(this.body.body[this.body.body.length-1].end,"\n\n"+r+o.join("\n"+r)))}t.prototype.transpile.call(this,e,i)},e}(Ye),ti=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.findScope=function(t){return t||!this.createdScope?this.parent.findScope(t):this.body.scope},e.prototype.transpile=function(e,i){var s=this,r="VariableDeclaration"===this.left.type;if(this.shouldRewriteAsFunction){var n=r?this.left.declarations.map(function(t){return ye(t.id)}):[];this.args=n.map(function(t){return t in s.aliases?s.aliases[t].outer:t}),this.params=n.map(function(t){return t in s.aliases?s.aliases[t].inner:t})}t.prototype.transpile.call(this,e,i);var a=r?this.left.declarations[0].id:this.left;"Identifier"!==a.type&&this.destructurePattern(e,a,r)},e.prototype.destructurePattern=function(t,e,i){var s=this.findScope(!0),r=this.getIndentation()+t.getIndentString(),n=s.createIdentifier("ref"),a=this.body.body.length?this.body.body[0].start:this.body.start+1;t.move(e.start,e.end,a),t.prependRight(e.end,i?n:"var "+n);var o=[];Ae(t,function(t){return s.createIdentifier(t)},function(t){return s.resolveName(t.name)},e,n,!1,o);var p=";\n"+r;o.forEach(function(t,e){e===o.length-1&&(p=";\n\n"+r),t(a,"",p)})},e}(Ye),ei=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.forOf&&!e.dangerousForOf&&we.missingTransform("for-of statements","forOf",this,"dangerousForOf"),this.await&&e.asyncAwait&&we.missingTransform("for-await-of statements","asyncAwait",this),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.dangerousForOf)if(this.body.body[0]){var s=this.findScope(!0),r=this.getIndentation(),n=r+e.getIndentString(),a=s.createIdentifier("i"),o=s.createIdentifier("list");this.body.synthetic&&(e.prependRight(this.left.start,"{\n"+n),e.appendLeft(this.body.body[0].end,"\n"+r+"}"));var p=this.body.body[0].start;e.remove(this.left.end,this.right.start),e.move(this.left.start,this.left.end,p),e.prependRight(this.right.start,"var "+a+" = 0, "+o+" = "),e.appendLeft(this.right.end,"; "+a+" < "+o+".length; "+a+" += 1");var h="VariableDeclaration"===this.left.type,c=h?this.left.declarations[0].id:this.left;if("Identifier"!==c.type){var l=[],u=s.createIdentifier("ref");Ae(e,function(t){return s.createIdentifier(t)},function(t){return s.resolveName(t.name)},c,u,!h,l);var d=";\n"+n;l.forEach(function(t,e){e===l.length-1&&(d=";\n\n"+n),t(p,"",d)}),h?(e.appendLeft(this.left.start+this.left.kind.length+1,u),e.appendLeft(this.left.end," = "+o+"["+a+"];\n"+n)):e.appendLeft(this.left.end,"var "+u+" = "+o+"["+a+"];\n"+n)}else e.appendLeft(this.left.end," = "+o+"["+a+"];\n\n"+n)}else"VariableDeclaration"===this.left.type&&"var"===this.left.kind?(e.remove(this.start,this.left.start),e.appendLeft(this.left.end,";"),e.remove(this.left.end,this.end)):e.remove(this.start,this.end)},e}(Ye),ii=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.generator&&e.generator&&we.missingTransform("generators","generator",this),this.async&&e.asyncAwait&&we.missingTransform("async functions","asyncAwait",this),this.body.createScope(),this.id&&this.findScope(!0).addDeclaration(this.id,"function"),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){t.prototype.transpile.call(this,e,i),i.trailingFunctionCommas&&this.params.length&&De(e,this.params[this.params.length-1].end)},e}(ge),si=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.generator&&e.generator&&we.missingTransform("generators","generator",this),this.async&&e.asyncAwait&&we.missingTransform("async functions","asyncAwait",this),this.body.createScope(),this.id&&this.body.scope.addDeclaration(this.id,"function"),t.prototype.initialise.call(this,e);var i,s=this.parent;if(e.conciseMethodProperty&&"Property"===s.type&&"init"===s.kind&&s.method&&"Identifier"===s.key.type?i=s.key.name:e.classes&&"MethodDefinition"===s.type&&"method"===s.kind&&"Identifier"===s.key.type?i=s.key.name:this.id&&"Identifier"===this.id.type&&(i=this.id.alias||this.id.name),i)for(var r=0,n=this.params;r<n.length;r+=1){var a=n[r];if("Identifier"===a.type&&i===a.name){var o=this.body.scope,p=o.declarations[i],h=o.createIdentifier(i);a.alias=h;for(var c=0,l=p.instances;c<l.length;c+=1)l[c].alias=h;break}}},e.prototype.transpile=function(e,i){t.prototype.transpile.call(this,e,i),i.trailingFunctionCommas&&this.params.length&&De(e,this.params[this.params.length-1].end)},e}(ge),ri=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.findScope=function(t){return this.parent.params&&~this.parent.params.indexOf(this)?this.parent.body.scope:"FunctionExpression"===this.parent.type&&this===this.parent.id?this.parent.body.scope:this.parent.findScope(t)},e.prototype.initialise=function(t){if(function t(e,i){return"MemberExpression"===e.type?!e.computed&&t(e.object,e):"Identifier"===e.type?!i||!/(Function|Class)Expression/.test(i.type)&&("VariableDeclarator"===i.type?e===i.init:"MemberExpression"===i.type||"MethodDefinition"===i.type?i.computed||e===i.object:"ArrayPattern"!==i.type&&("Property"===i.type?"ObjectPattern"!==i.parent.type&&(i.computed||e===i.value):"MethodDefinition"!==i.type&&("ExportSpecifier"!==i.type||e===i.local))):void 0}(this,this.parent)){if(t.arrow&&"arguments"===this.name&&!this.findScope(!1).contains(this.name)){var e=this.findLexicalBoundary(),i=this.findNearest("ArrowFunctionExpression"),s=this.findNearest(Xe);i&&i.depth>e.depth&&(this.alias=e.getArgumentsAlias()),s&&s.body.contains(this)&&s.depth>e.depth&&(this.alias=e.getArgumentsAlias())}this.findScope(!1).addReference(this)}},e.prototype.transpile=function(t){this.alias&&t.overwrite(this.start,this.end,this.alias,{storeName:!0,contentOnly:!0})},e}(ge),ni=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){("BlockStatement"!==this.consequent.type||"BlockStatement"===this.consequent.type&&this.consequent.synthetic)&&(e.appendLeft(this.consequent.start,"{ "),e.prependRight(this.consequent.end," }")),this.alternate&&"IfStatement"!==this.alternate.type&&("BlockStatement"!==this.alternate.type||"BlockStatement"===this.alternate.type&&this.alternate.synthetic)&&(e.appendLeft(this.alternate.start,"{ "),e.prependRight(this.alternate.end," }")),t.prototype.transpile.call(this,e,i)},e}(ge),ai=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.moduleImport&&we.missingTransform("dynamic import expressions","moduleImport",this),t.prototype.initialise.call(this,e)},e}(ge),oi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.moduleImport&&we.missingTransform("import","moduleImport",this),t.prototype.initialise.call(this,e)},e}(ge),pi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.findScope(!0).addDeclaration(this.local,"import"),t.prototype.initialise.call(this,e)},e}(ge),hi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.findScope(!0).addDeclaration(this.local,"import"),t.prototype.initialise.call(this,e)},e}(ge),ci=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){var s,r=this.name;e.overwrite(r.start,this.value?this.value.start:this.name.end,(/-/.test(s=r.name)?"'"+s+"'":s)+": "+(this.value?"":"true")),t.prototype.transpile.call(this,e,i)},e}(ge),li=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(t){var e,i=!0,s=this.parent.children[this.parent.children.length-1];(s&&"JSXText"===(e=s).type&&!/\S/.test(e.value)&&/\n/.test(e.value)||this.parent.openingElement.attributes.length)&&(i=!1),t.overwrite(this.start,this.end,i?" )":")")},e}(ge),ui=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(t){var e,i=!0,s=this.parent.children[this.parent.children.length-1];s&&"JSXText"===(e=s).type&&!/\S/.test(e.value)&&/\n/.test(e.value)&&(i=!1),t.overwrite(this.start,this.end,i?" )":")")},e}(ge);function di(t,e){return t=t.replace(/\u00a0/g,"&nbsp;"),e&&/\n/.test(t)&&(t=t.replace(/\s+$/,"")),t=t.replace(/^\n\r?\s+/,"").replace(/\s*\n\r?\s*/gm," "),JSON.stringify(t)}var fi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){t.prototype.transpile.call(this,e,i);var s=this.children.filter(function(t){return"JSXText"!==t.type||/\S/.test(t.raw)||!/\n/.test(t.raw)});if(s.length){var r,n=(this.openingElement||this.openingFragment).end;for(r=0;r<s.length;r+=1){var a=s[r];if("JSXExpressionContainer"===a.type&&"JSXEmptyExpression"===a.expression.type||e.appendLeft(n,","+("\n"===e.original[n]&&"JSXText"!==a.type?"":" ")),"JSXText"===a.type){var o=di(a.value,r===s.length-1);e.overwrite(a.start,a.end,o)}n=a.end}}},e}(ge),mi=/[\u2028-\u2029]/g,gi={ArrayExpression:Ve,ArrowFunctionExpression:Be,AssignmentExpression:Me,AwaitExpression:Ue,BinaryExpression:qe,BreakStatement:Je,CallExpression:We,ClassBody:ze,ClassDeclaration:He,ClassExpression:Ge,ContinueStatement:Qe,DoWhileStatement:Ye,ExportNamedDeclaration:$e,ExportDefaultDeclaration:Ke,ForStatement:Ze,ForInStatement:ti,ForOfStatement:ei,FunctionDeclaration:ii,FunctionExpression:si,Identifier:ri,IfStatement:ni,Import:ai,ImportDeclaration:oi,ImportDefaultSpecifier:pi,ImportSpecifier:hi,JSXAttribute:ci,JSXClosingElement:li,JSXClosingFragment:ui,JSXElement:fi,JSXExpressionContainer:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){e.remove(this.start,this.expression.start),e.remove(this.expression.end,this.end),t.prototype.transpile.call(this,e,i)},e}(ge),JSXFragment:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(fi),JSXOpeningElement:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){t.prototype.transpile.call(this,e,i),e.overwrite(this.start,this.name.start,this.program.jsx+"( ");var s="JSXIdentifier"===this.name.type&&this.name.name[0]===this.name.name[0].toLowerCase();s&&e.prependRight(this.name.start,"'");var r=this.attributes.length,n=this.name.end;if(r){var a,o,p,h=!1;for(a=0;a<r;a+=1)if("JSXSpreadAttribute"===this.attributes[a].type){h=!0;break}for(n=this.attributes[0].end,a=0;a<r;a+=1){var c=this.attributes[a];if(a>0&&(c.start===n?e.prependRight(n,", "):e.overwrite(n,c.start,", ")),h&&"JSXSpreadAttribute"!==c.type){var l=this.attributes[a-1],u=this.attributes[a+1];l&&"JSXSpreadAttribute"!==l.type||e.prependRight(c.start,"{ "),u&&"JSXSpreadAttribute"!==u.type||e.appendLeft(c.end," }")}n=c.end}if(h)if(1===r)p=s?"',":",";else{if(!this.program.options.objectAssign)throw new we("Mixed JSX attributes ending in spread requires specified objectAssign option with 'Object.assign' or polyfill helper.",this);p=s?"', "+this.program.options.objectAssign+"({},":", "+this.program.options.objectAssign+"({},",o=")"}else p=s?"', {":", {",o=" }";e.prependRight(this.name.end,p),o&&e.appendLeft(this.attributes[r-1].end,o)}else e.appendLeft(this.name.end,s?"', null":", null"),n=this.name.end;this.selfClosing?e.overwrite(n,this.end,this.attributes.length?")":" )"):e.remove(n,this.end)},e}(ge),JSXOpeningFragment:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(t){t.overwrite(this.start,this.end,this.program.jsx+"( React.Fragment, null")},e}(ge),JSXSpreadAttribute:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){e.remove(this.start,this.argument.start),e.remove(this.argument.end,this.end),t.prototype.transpile.call(this,e,i)},e}(ge),Literal:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(){"string"==typeof this.value&&this.program.indentExclusionElements.push(this)},e.prototype.transpile=function(t,e){e.numericLiteral&&this.raw.match(/^0[bo]/i)&&t.overwrite(this.start,this.end,String(this.value),{storeName:!0,contentOnly:!0}),"string"==typeof this.value&&this.value.match(mi)&&t.overwrite(this.start,this.end,this.raw.replace(mi,function(t){return"\u2028"==t?"\\u2028":"\\u2029"}),{contentOnly:!0})},e}(ge),MemberExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){i.reservedProperties&&xe[this.property.name]&&(e.overwrite(this.object.end,this.property.start,"['"),e.appendLeft(this.property.end,"']")),t.prototype.transpile.call(this,e,i)},e}(ge),NewExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if(e.spreadRest&&this.arguments.length)for(var i=this.findLexicalBoundary(),s=this.arguments.length;s--;){var r=this.arguments[s];if("SpreadElement"===r.type&&Te(r.argument)){this.argumentsArrayAlias=i.getArgumentsArrayAlias();break}}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.spreadRest&&this.arguments.length&&Re(e,this,this.arguments),i.spreadRest&&this.arguments.length){var s=this.arguments[0];je(e,this.arguments,s.start,this.argumentsArrayAlias,!0)&&(e.prependRight(this.start+"new".length," (Function.prototype.bind.apply("),e.overwrite(this.callee.end,s.start,", [ null ].concat( "),e.appendLeft(this.end," ))"))}this.arguments.length&&De(e,this.arguments[this.arguments.length-1].end)},e}(ge),ObjectExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){var s;t.prototype.transpile.call(this,e,i);for(var r=this.start+1,n=0,a=0,o=null,p=null,h=0;h<this.properties.length;++h){var c=this.properties[h];if("SpreadElement"===c.type){var l=c.argument;"ObjectExpression"===l.type||"Literal"===l.type&&"string"!=typeof l.value?"ObjectExpression"===l.type&&l.properties.length>0?(e.remove(c.start,l.properties[0].start),e.remove(l.properties[l.properties.length-1].end,c.end),(s=this.properties).splice.apply(s,[h,1].concat(l.properties)),h--):(e.remove(c.start,h===this.properties.length-1?c.end:this.properties[h+1].start),this.properties.splice(h,1),h--):(n+=1,null===o&&(o=h))}else c.computed&&i.computedProperty&&(a+=1,null===p&&(p=h))}if(!n||i.objectRestSpread||a&&i.computedProperty){if(n){if(!this.program.options.objectAssign)throw new we("Object spread operator requires specified objectAssign option with 'Object.assign' or polyfill helper.",this);for(var u=this.properties.length;u--;){var d=this.properties[u];if("Property"===d.type&&!a){var f=this.properties[u-1],m=this.properties[u+1];f&&"Property"===f.type||e.prependRight(d.start,"{"),m&&"Property"===m.type||e.appendLeft(d.end,"}")}"SpreadElement"===d.type&&(e.remove(d.start,d.argument.start),e.remove(d.argument.end,d.end))}r=this.properties[0].start,a?"SpreadElement"===this.properties[0].type?(e.overwrite(this.start,r,this.program.options.objectAssign+"({}, "),e.remove(this.end-1,this.end),e.appendRight(this.end,")")):(e.prependLeft(this.start,this.program.options.objectAssign+"("),e.appendRight(this.end,")")):(e.overwrite(this.start,r,this.program.options.objectAssign+"({}, "),e.overwrite(this.properties[this.properties.length-1].end,this.end,")"))}}else n=0,o=null;if(a&&i.computedProperty){var g,y,v=this.getIndentation();"VariableDeclarator"===this.parent.type&&1===this.parent.parent.declarations.length&&"Identifier"===this.parent.id.type?(g=!0,y=this.parent.id.alias||this.parent.id.name):"AssignmentExpression"===this.parent.type&&"ExpressionStatement"===this.parent.parent.type&&"Identifier"===this.parent.left.type?(g=!0,y=this.parent.left.alias||this.parent.left.name):"AssignmentPattern"===this.parent.type&&"Identifier"===this.parent.left.type&&(g=!0,y=this.parent.left.alias||this.parent.left.name),n&&(g=!1),y=this.findScope(!1).resolveName(y);var x=r,b=this.end;g||(null===o||p<o?(y=this.findScope(!0).createDeclaration("obj"),e.prependRight(this.start,"( "+y+" = ")):y=null);for(var _,S=this.properties.length,k=!1,w=!0,E=0;E<S;E+=1){var C=this.properties[E],A=E>0?this.properties[E-1].end:x;if("Property"===C.type&&(C.computed||_&&!n)){if(0===E&&(A=this.start+1),_=C,y){var I=(g?";\n"+v+y:", "+y)+("Literal"===C.key.type||C.computed?"":".");A<C.start?e.overwrite(A,C.start,I):e.prependRight(C.start,I)}else y=this.findScope(!0).createDeclaration("obj"),e.appendRight(C.start,"( "+y+" = {}, "+y+(C.computed?"":"."));var L=C.key.end;if(C.computed){for(;"]"!==e.original[L];)L+=1;L+=1}"Literal"!==C.key.type||C.computed?C.shorthand||C.method&&!C.computed&&i.conciseMethodProperty?e.overwrite(C.key.start,C.key.end,e.slice(C.key.start,C.key.end).replace(/:/," =")):(C.value.start>L&&e.remove(L,C.value.start),e.prependLeft(L," = ")):e.overwrite(C.start,C.key.end+1,"["+e.slice(C.start,C.key.end)+"] = "),!C.method||!C.computed&&i.conciseMethodProperty||(C.value.generator&&e.remove(C.start,C.key.start),e.prependRight(C.value.start,"function"+(C.value.generator?"*":"")+" "))}else"SpreadElement"===C.type?y&&E>0&&(_||(_=this.properties[E-1]),e.appendLeft(_.end,", "+y+" )"),_=null,y=null):(!w&&n&&(e.prependRight(C.start,"{"),e.appendLeft(C.end,"}")),k=!0);if(w&&("SpreadElement"===C.type||C.computed)){var N=k?this.properties[this.properties.length-1].end:this.end-1;","==e.original[N]&&++N;var P=e.slice(N,b);e.prependLeft(A,P),e.remove(N,b),w=!1}var T=C.end;if(E<S-1&&!k)for(;","!==e.original[T];)T+=1;else E==S-1&&(T=this.end);C.end!=T&&e.overwrite(C.end,T,"",{contentOnly:!0})}!g&&y&&e.appendLeft(_.end,", "+y+" )")}},e}(ge),Property:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){"get"!==this.kind&&"set"!==this.kind||!e.getterSetter||we.missingTransform("getters and setters","getterSetter",this),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.conciseMethodProperty&&!this.computed&&"ObjectPattern"!==this.parent.type)if(this.shorthand)e.prependRight(this.start,this.key.name+": ");else if(this.method){var s="";!1!==this.program.options.namedFunctionExpressions&&(s=" "+(s="Literal"===this.key.type&&"number"==typeof this.key.value?"":"Identifier"===this.key.type?xe[this.key.name]||!/^[a-z_$][a-z0-9_$]*$/i.test(this.key.name)||this.value.body.scope.references[this.key.name]?this.findScope(!0).createIdentifier(this.key.name):this.key.name:this.findScope(!0).createIdentifier(this.key.value))),this.start<this.key.start&&e.remove(this.start,this.key.start),e.appendLeft(this.key.end,": "+(this.value.async?"async ":"")+"function"+(this.value.generator?"*":"")+s)}i.reservedProperties&&xe[this.key.name]&&(e.prependRight(this.key.start,"'"),e.appendLeft(this.key.end,"'"))},e}(ge),ReturnStatement:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(t){this.loop=this.findNearest(Xe),this.nearestFunction=this.findNearest(/Function/),this.loop&&(!this.nearestFunction||this.loop.depth>this.nearestFunction.depth)&&(this.loop.canReturn=!0,this.shouldWrap=!0),this.argument&&this.argument.initialise(t)},e.prototype.transpile=function(t,e){var i=this.shouldWrap&&this.loop&&this.loop.shouldRewriteAsFunction;this.argument?(i&&t.prependRight(this.argument.start,"{ v: "),this.argument.transpile(t,e),i&&t.appendLeft(this.argument.end," }")):i&&t.appendLeft(this.start+6," {}")},e}(ge),Super:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(t){if(t.classes){if(this.method=this.findNearest("MethodDefinition"),!this.method)throw new we("use of super outside class method",this);var e=this.findNearest("ClassBody").parent;if(this.superClassName=e.superClass&&(e.superClass.name||"superclass"),!this.superClassName)throw new we("super used in base class",this);if(this.isCalled="CallExpression"===this.parent.type&&this===this.parent.callee,"constructor"!==this.method.kind&&this.isCalled)throw new we("super() not allowed outside class constructor",this);if(this.isMember="MemberExpression"===this.parent.type,!this.isCalled&&!this.isMember)throw new we("Unexpected use of `super` (expected `super(...)` or `super.*`)",this)}if(t.arrow){var i=this.findLexicalBoundary(),s=this.findNearest("ArrowFunctionExpression"),r=this.findNearest(Xe);s&&s.depth>i.depth&&(this.thisAlias=i.getThisAlias()),r&&r.body.contains(this)&&r.depth>i.depth&&(this.thisAlias=i.getThisAlias())}},e.prototype.transpile=function(t,e){if(e.classes){t.overwrite(this.start,this.end,this.isCalled||this.method.static?this.superClassName:this.superClassName+".prototype",{storeName:!0,contentOnly:!0});var i=this.isCalled?this.parent:this.parent.parent;if(i&&"CallExpression"===i.type){this.noCall||t.appendLeft(i.callee.end,".call");var s=this.thisAlias||"this";i.arguments.length?t.appendLeft(i.arguments[0].start,s+", "):t.appendLeft(i.end-1,""+s)}}},e}(ge),TaggedTemplateExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.templateString&&!e.dangerousTaggedTemplateString&&we.missingTransform("tagged template strings","templateString",this,"dangerousTaggedTemplateString"),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(i.templateString&&i.dangerousTaggedTemplateString){var s=this.quasi.expressions.concat(this.quasi.quasis).sort(function(t,e){return t.start-e.start}),r=this.program.body.scope,n=this.quasi.quasis.map(function(t){return JSON.stringify(t.value.cooked)}).join(", "),a=this.program.templateLiteralQuasis[n];a||(a=r.createIdentifier("templateObject"),e.prependLeft(this.program.prependAt,"var "+a+" = Object.freeze(["+n+"]);\n"),this.program.templateLiteralQuasis[n]=a),e.overwrite(this.tag.end,s[0].start,"("+a);var o=s[0].start;s.forEach(function(t){"TemplateElement"===t.type?e.remove(o,t.end):e.overwrite(o,t.start,", "),o=t.end}),e.overwrite(o,this.end,")")}t.prototype.transpile.call(this,e,i)},e}(ge),TemplateElement:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(){this.program.indentExclusionElements.push(this)},e}(ge),TemplateLiteral:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.templateString&&"TaggedTemplateExpression"!==this.parent.type){var s=this.expressions.concat(this.quasis).sort(function(t,e){return t.start-e.start||t.end-e.end}).filter(function(t,e){return"TemplateElement"!==t.type||!!t.value.raw||!e});if(s.length>=3){var r=s[0];"TemplateElement"===r.type&&""===r.value.raw&&"TemplateElement"===s[2].type&&s.shift()}var n=!(1===this.quasis.length&&0===this.expressions.length||"TemplateLiteral"===this.parent.type||"AssignmentExpression"===this.parent.type||"AssignmentPattern"===this.parent.type||"VariableDeclarator"===this.parent.type||"BinaryExpression"===this.parent.type&&"+"===this.parent.operator);n&&e.appendRight(this.start,"(");var a=this.start;s.forEach(function(t,i){var s=0===i?n?"(":"":" + ";if("TemplateElement"===t.type)e.overwrite(a,t.end,s+JSON.stringify(t.value.cooked));else{var r="Identifier"!==t.type;r&&(s+="("),e.remove(a,t.start),s&&e.prependRight(t.start,s),r&&e.appendLeft(t.end,")")}a=t.end}),n&&e.appendLeft(a,")"),e.overwrite(a,this.end,"",{contentOnly:!0})}},e}(ge),ThisExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(t){var e=this.findLexicalBoundary();if(t.letConst)for(var i=this.findNearest(Xe);i&&i.depth>e.depth;)i.thisRefs.push(this),i=i.parent.findNearest(Xe);if(t.arrow){var s=this.findNearest("ArrowFunctionExpression");s&&s.depth>e.depth&&(this.alias=e.getThisAlias())}},e.prototype.transpile=function(t){this.alias&&t.overwrite(this.start,this.end,this.alias,{storeName:!0,contentOnly:!0})},e}(ge),UpdateExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if("Identifier"===this.argument.type){var i=this.findScope(!1).findDeclaration(this.argument.name),s=i&&i.node.ancestor(3);s&&"ForStatement"===s.type&&s.body.contains(this)&&(s.reassigned[this.argument.name]=!0)}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){"Identifier"===this.argument.type&&Fe(this.argument,this.findScope(!1)),t.prototype.transpile.call(this,e,i)},e}(ge),VariableDeclaration:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(t){this.scope=this.findScope("var"===this.kind),this.declarations.forEach(function(e){return e.initialise(t)})},e.prototype.transpile=function(t,e){var i=this,s=this.getIndentation(),r=this.kind;if(e.letConst&&"var"!==r&&t.overwrite(this.start,this.start+this.kind.length,r="var",{contentOnly:!0,storeName:!0}),e.destructuring&&"ForOfStatement"!==this.parent.type&&"ForInStatement"!==this.parent.type){var n,a=this.start;this.declarations.forEach(function(r,o){if(r.transpile(t,e),"Identifier"===r.id.type)o>0&&"Identifier"!==i.declarations[o-1].id.type&&t.overwrite(a,r.id.start,"var ");else{var p=Xe.test(i.parent.type);0===o?t.remove(a,r.id.start):t.overwrite(a,r.id.start,";\n"+s);var h="Identifier"===r.init.type&&!r.init.rewritten,c=h?r.init.alias||r.init.name:r.findScope(!0).createIdentifier("ref");a=r.start;var l=[];h?t.remove(r.id.end,r.end):l.push(function(e,i,s){t.prependRight(r.id.end,"var "+c),t.appendLeft(r.init.end,""+s),t.move(r.id.end,r.end,e)});var u=r.findScope(!1);Ae(t,function(t){return u.createIdentifier(t)},function(t){return u.resolveName(t.name)},r.id,c,p,l);var d=p?"var ":"",f=p?", ":";\n"+s;l.forEach(function(t,e){o===i.declarations.length-1&&e===l.length-1&&(f=p?"":";"),t(r.start,0===e?d:"",f)})}a=r.end,n="Identifier"!==r.id.type}),n&&this.end>a&&t.overwrite(a,this.end,"",{contentOnly:!0})}else this.declarations.forEach(function(i){i.transpile(t,e)})},e}(ge),VariableDeclarator:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){var i=this.parent.kind;"let"===i&&"ForStatement"===this.parent.parent.type&&(i="for.let"),this.parent.scope.addDeclaration(this.id,i),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(t,e){if(!this.init&&e.letConst&&"var"!==this.parent.kind){var i=this.findNearest(/Function|^For(In|Of)?Statement|^(?:Do)?WhileStatement/);!i||/Function/.test(i.type)||this.isLeftDeclaratorOfLoop()||t.appendLeft(this.id.end," = (void 0)")}this.id&&this.id.transpile(t,e),this.init&&this.init.transpile(t,e)},e.prototype.isLeftDeclaratorOfLoop=function(){return this.parent&&"VariableDeclaration"===this.parent.type&&this.parent.parent&&("ForInStatement"===this.parent.parent.type||"ForOfStatement"===this.parent.parent.type)&&this.parent.parent.left&&this.parent.parent.left.declarations[0]===this},e}(ge),WhileStatement:Ye},yi={Program:["body"],Literal:[]},vi={IfStatement:"consequent",ForStatement:"body",ForInStatement:"body",ForOfStatement:"body",WhileStatement:"body",DoWhileStatement:"body",ArrowFunctionExpression:"body"};function xi(t,e,i,s){this.type="Root",this.jsx=s.jsx||"React.createElement",this.options=s,this.source=t,this.magicString=new fe(t),this.ast=e,this.depth=0,function t(e,i){if(e)if("length"in e)for(var s=e.length;s--;)t(e[s],i);else if(!e.__wrapped){e.__wrapped=!0,yi[e.type]||(yi[e.type]=Object.keys(e).filter(function(t){return"object"==typeof e[t]}));var r=vi[e.type];if(r&&"BlockStatement"!==e[r].type){var n=e[r];e[r]={start:n.start,end:n.end,type:"BlockStatement",body:[n],synthetic:!0}}e.parent=i,e.program=i.program||i,e.depth=i.depth+1,e.keys=yi[e.type],e.indentation=void 0;for(var a=0,o=yi[e.type];a<o.length;a+=1)t(e[o[a]],e);e.program.magicString.addSourcemapLocation(e.start),e.program.magicString.addSourcemapLocation(e.end),e.__proto__=(("BlockStatement"===e.type?Pe:gi[e.type])||ge).prototype}}(this.body=e,this),this.body.__proto__=Pe.prototype,this.templateLiteralQuasis=Object.create(null);for(var r=0;r<this.body.body.length;++r)if(!this.body.body[r].directive){this.prependAt=this.body.body[r].start;break}this.objectWithoutPropertiesHelper=null,this.indentExclusionElements=[],this.body.initialise(i),this.indentExclusions=Object.create(null);for(var n=0,a=this.indentExclusionElements;n<a.length;n+=1)for(var o=a[n],p=o.start;p<o.end;p+=1)this.indentExclusions[p]=!0;this.body.transpile(this.magicString,i)}xi.prototype={export:function(t){return void 0===t&&(t={}),{code:this.magicString.toString(),map:this.magicString.generateMap({file:t.file,source:t.source,includeContent:!1!==t.includeContent})}},findNearest:function(){return null},findScope:function(){return null},getObjectWithoutPropertiesHelper:function(t){return this.objectWithoutPropertiesHelper||(this.objectWithoutPropertiesHelper=this.body.scope.createIdentifier("objectWithoutProperties"),t.prependLeft(this.prependAt,"function "+this.objectWithoutPropertiesHelper+" (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }\n")),this.objectWithoutPropertiesHelper}};var bi=M.extend(Kt,Ht(),function(t){return class extends t{getTokenFromCode(t){if(35===t){++this.pos;const t=this.readWord1();return this.finishToken(ee,t)}return super.getTokenFromCode(t)}parseClass(t,e){this._privateBoundNamesStack=this._privateBoundNamesStack||[];const i=Object.create(this._privateBoundNamesStack[this._privateBoundNamesStack.length-1]||null);this._privateBoundNamesStack.push(i),this._unresolvedPrivateNamesStack=this._unresolvedPrivateNamesStack||[];const s=Object.create(null);this._unresolvedPrivateNamesStack.push(s);const r=super.parseClass(t,e);if(this._privateBoundNamesStack.pop(),this._unresolvedPrivateNamesStack.pop(),this._unresolvedPrivateNamesStack.length)Object.assign(this._unresolvedPrivateNamesStack[this._unresolvedPrivateNamesStack.length-1],s);else{const t=Object.keys(s);t.length&&(t.sort((t,e)=>s[t]-s[e]),this.raise(s[t[0]],"Usage of undeclared private name"))}return r}parseClassElement(t){if(this.eat(Yt.semi))return null;const e=this.startNode();if(!(this.options.ecmaVersion>=8)||this.type!=ee){if(this.isContextual("async")){$t.lastIndex=this.pos;let t=$t.exec(this.input),i=this.input.charAt(this.pos+t[0].length);if(";"===i||"="===i)return e.key=this.parseIdent(!0),e.computed=!1,Zt.call(this,e),this.finishNode(e,"FieldDefinition"),this.semicolon(),e}return super.parseClassElement.apply(this,arguments)}return e.key=te.call(this),e.computed=!1,"constructor"==e.key.name&&this.raise(e.start,"Classes may not have a field named constructor"),Object.prototype.hasOwnProperty.call(this._privateBoundNamesStack[this._privateBoundNamesStack.length-1],e.key.name)&&this.raise(e.start,"Duplicate private element"),this._privateBoundNamesStack[this._privateBoundNamesStack.length-1][e.key.name]=!0,delete this._unresolvedPrivateNamesStack[this._unresolvedPrivateNamesStack.length-1][e.key.name],Zt.call(this,e),this.finishNode(e,"FieldDefinition"),this.semicolon(),e}parseClassMethod(t,e,i,s){return e||i||"method"!=t.kind||t.static||this.options.ecmaVersion<8||this.type==Yt.parenL?super.parseClassMethod.apply(this,arguments):(Zt.call(this,t),delete t.kind,delete t.static,t=this.finishNode(t,"FieldDefinition"),this.semicolon(),t)}parseSubscripts(t,e,i,s){for(let r;;){if(!(r=this.eat(Yt.bracketL))&&!this.eat(Yt.dot))return super.parseSubscripts(t,e,i,s);{let s=this.startNodeAt(e,i);s.object=t,r?s.property=this.parseExpression():this.type==ee?(s.property=te.call(this),this._privateBoundNamesStack.length&&this._privateBoundNamesStack[this._privateBoundNamesStack.length-1][s.property.name]||(this._unresolvedPrivateNamesStack[this._unresolvedPrivateNamesStack.length-1][s.property.name]=s.property.start)):s.property=this.parseIdent(!0),s.computed=Boolean(r),r&&this.expect(Yt.bracketR),t=this.finishNode(s,"MemberExpression")}}}parseMaybeUnary(t,e){const i=super.parseMaybeUnary(t,e);return"delete"==i.operator&&"MemberExpression"==i.argument.type&&"PrivateName"==i.argument.property.type&&this.raise(i.start,"Private elements may not be deleted"),i}parseIdent(t,e){const i=super.parseIdent(t,e);return this._inFieldValue&&"arguments"==i.name&&this.raise(i.start,"A class field initializer may not contain arguments"),i}parseExprAtom(t){const e=super.parseExprAtom(t);return this._inFieldValue&&"Super"==e.type&&this.raise(e.start,"A class field initializer may not contain super"),e}}}),_i=["getterSetter","arrow","classes","computedProperty","conciseMethodProperty","defaultParameter","destructuring","forOf","generator","letConst","moduleExport","moduleImport","numericLiteral","parameterDestructuring","spreadRest","stickyRegExp","templateString","exponentiation","reservedProperties","trailingFunctionCommas","asyncAwait","objectRestSpread"],Si=["dangerousTaggedTemplateString","dangerousForOf"];function ki(t,e){var i;void 0===e&&(e={});var s=null;try{i=bi.parse(t,{ecmaVersion:10,preserveParens:!0,sourceType:"module",allowAwaitOutsideFunction:!0,allowReturnOutsideFunction:!0,allowHashBang:!0,onComment:function(t,e){if(!s){var i=/@jsx\s+([^\s]+)/.exec(e);i&&(s=i[1])}}}),e.jsx=s||e.jsx}catch(e){throw e.snippet=ke(t,e.loc),e.toString=function(){return e.name+": "+e.message+"\n"+e.snippet},e}var r=Object.create(null);return _i.forEach(function(t){r[t]=!0}),Si.forEach(function(t){r[t]=!0}),Object.keys(e.transforms||{}).forEach(function(t){if("modules"===t)return"moduleImport"in e.transforms||(r.moduleImport=e.transforms.modules),void("moduleExport"in e.transforms||(r.moduleExport=e.transforms.modules));if(!(t in r))throw new Error("Unknown transform '"+t+"'");r[t]=e.transforms[t]}),!0===e.objectAssign&&(e.objectAssign="Object.assign"),new xi(t,i,r,e).export(e)}
//# sourceMappingURL=buble.es.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(164).Buffer))

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(165)
var ieee754 = __webpack_require__(166)
var isArray = __webpack_require__(167)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)))

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 166 */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 167 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);
module.exports = __webpack_require__(109).Object.assign;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(170);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(182) });


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(108);
var core = __webpack_require__(109);
var hide = __webpack_require__(134);
var redefine = __webpack_require__(177);
var ctx = __webpack_require__(180);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(172);
var IE8_DOM_DEFINE = __webpack_require__(173);
var toPrimitive = __webpack_require__(175);
var dP = Object.defineProperty;

exports.f = __webpack_require__(110) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(117);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(110) && !__webpack_require__(118)(function () {
  return Object.defineProperty(__webpack_require__(174)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(117);
var document = __webpack_require__(108).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(117);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(108);
var hide = __webpack_require__(134);
var has = __webpack_require__(135);
var SRC = __webpack_require__(136)('src');
var $toString = __webpack_require__(178);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(109).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137)('native-function-to-string', Function.toString);


/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(181);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(110);
var getKeys = __webpack_require__(183);
var gOPS = __webpack_require__(191);
var pIE = __webpack_require__(192);
var toObject = __webpack_require__(193);
var IObject = __webpack_require__(139);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(118)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(184);
var enumBugKeys = __webpack_require__(190);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(135);
var toIObject = __webpack_require__(138);
var arrayIndexOf = __webpack_require__(186)(false);
var IE_PROTO = __webpack_require__(189)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 185 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(138);
var toLength = __webpack_require__(187);
var toAbsoluteIndex = __webpack_require__(188);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(141);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(141);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(137)('keys');
var uid = __webpack_require__(136);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 190 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 191 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 192 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(140);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports.default = parsePart;
module.exports = parsePart;


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ observer; });

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/staticRendering.js
var globalIsUsingStaticRendering = false;
function enableStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}
//# sourceMappingURL=staticRendering.js.map
// EXTERNAL MODULE: ../node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(119);

// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/printDebugValue.js

function printDebugValue(v) {
    return Object(mobx_esm["b" /* getDependencyTree */])(v);
}
//# sourceMappingURL=printDebugValue.js.map
// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/FinalizationRegistryWrapper.js
var FinalizationRegistryLocal = typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry;

//# sourceMappingURL=FinalizationRegistryWrapper.js.map
// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js
function createTrackingData(reaction) {
    var trackingData = {
        reaction: reaction,
        mounted: false,
        changedBeforeMount: false,
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
//# sourceMappingURL=reactionCleanupTrackingCommon.js.map
// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/createReactionCleanupTrackingUsingFinalizationRegister.js

/**
 * FinalizationRegistry-based uncommitted reaction cleanup
 */
function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry) {
    var cleanupTokenToReactionTrackingMap = new Map();
    var globalCleanupTokensCounter = 1;
    var registry = new FinalizationRegistry(function cleanupFunction(token) {
        var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
        if (trackedReaction) {
            trackedReaction.reaction.dispose();
            cleanupTokenToReactionTrackingMap.delete(token);
        }
    });
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
            var token = globalCleanupTokensCounter++;
            registry.register(objectRetainedByReact, token, reactionTrackingRef);
            reactionTrackingRef.current = createTrackingData(reaction);
            reactionTrackingRef.current.finalizationRegistryCleanupToken = token;
            cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: function (reactionRef) {
            registry.unregister(reactionRef);
            if (reactionRef.current && reactionRef.current.finalizationRegistryCleanupToken) {
                cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
            }
        },
        forceCleanupTimerToRunNowForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        },
        resetCleanupScheduleForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        }
    };
}
//# sourceMappingURL=createReactionCleanupTrackingUsingFinalizationRegister.js.map
// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/createTimerBasedReactionCleanupTracking.js
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

/**
 * timers, gc-style, uncommitted reaction cleanup
 */
function createTimerBasedReactionCleanupTracking() {
    /**
     * Reactions created by components that have yet to be fully mounted.
     */
    var uncommittedReactionRefs = new Set();
    /**
     * Latest 'uncommitted reactions' cleanup timer handle.
     */
    var reactionCleanupHandle;
    /* istanbul ignore next */
    /**
     * Only to be used by test functions; do not export outside of mobx-react-lite
     */
    function forceCleanupTimerToRunNowForTests() {
        // This allows us to control the execution of the cleanup timer
        // to force it to run at awkward times in unit tests.
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            cleanUncommittedReactions();
        }
    }
    /* istanbul ignore next */
    function resetCleanupScheduleForTests() {
        var e_1, _a;
        if (uncommittedReactionRefs.size > 0) {
            try {
                for (var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs), uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next(); !uncommittedReactionRefs_1_1.done; uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()) {
                    var ref = uncommittedReactionRefs_1_1.value;
                    var tracking = ref.current;
                    if (tracking) {
                        tracking.reaction.dispose();
                        ref.current = null;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (uncommittedReactionRefs_1_1 && !uncommittedReactionRefs_1_1.done && (_a = uncommittedReactionRefs_1.return)) _a.call(uncommittedReactionRefs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            uncommittedReactionRefs.clear();
        }
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            reactionCleanupHandle = undefined;
        }
    }
    function ensureCleanupTimerRunning() {
        if (reactionCleanupHandle === undefined) {
            reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
        }
    }
    function scheduleCleanupOfReactionIfLeaked(ref) {
        uncommittedReactionRefs.add(ref);
        ensureCleanupTimerRunning();
    }
    function recordReactionAsCommitted(reactionRef) {
        uncommittedReactionRefs.delete(reactionRef);
    }
    /**
     * Run by the cleanup timer to dispose any outstanding reactions
     */
    function cleanUncommittedReactions() {
        reactionCleanupHandle = undefined;
        // Loop through all the candidate leaked reactions; those older
        // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
        var now = Date.now();
        uncommittedReactionRefs.forEach(function (ref) {
            var tracking = ref.current;
            if (tracking) {
                if (now >= tracking.cleanAt) {
                    // It's time to tidy up this leaked reaction.
                    tracking.reaction.dispose();
                    ref.current = null;
                    uncommittedReactionRefs.delete(ref);
                }
            }
        });
        if (uncommittedReactionRefs.size > 0) {
            // We've just finished a round of cleanups but there are still
            // some leak candidates outstanding.
            ensureCleanupTimerRunning();
        }
    }
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, 
        /**
         * On timer based implementation we don't really need this object,
         * but we keep the same api
         */
        objectRetainedByReact) {
            reactionTrackingRef.current = createTrackingData(reaction);
            scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: recordReactionAsCommitted,
        forceCleanupTimerToRunNowForTests: forceCleanupTimerToRunNowForTests,
        resetCleanupScheduleForTests: resetCleanupScheduleForTests
    };
}
//# sourceMappingURL=createTimerBasedReactionCleanupTracking.js.map
// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js



var reactionCleanupTracking_a = FinalizationRegistryLocal
    ? createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistryLocal)
    : createTimerBasedReactionCleanupTracking(), addReactionToTrack = reactionCleanupTracking_a.addReactionToTrack, reactionCleanupTracking_recordReactionAsCommitted = reactionCleanupTracking_a.recordReactionAsCommitted, reactionCleanupTracking_resetCleanupScheduleForTests = reactionCleanupTracking_a.resetCleanupScheduleForTests, reactionCleanupTracking_forceCleanupTimerToRunNowForTests = reactionCleanupTracking_a.forceCleanupTimerToRunNowForTests;

//# sourceMappingURL=reactionCleanupTracking.js.map
// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/utils.js
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useForceUpdate() {
    var _a = __read(Object(react["useState"])(0), 2), setTick = _a[1];
    var update = Object(react["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, EMPTY_ARRAY);
    return update;
}
var deprecatedMessages = [];
function useDeprecated(msg) {
    if (!deprecatedMessages.includes(msg)) {
        deprecatedMessages.push(msg);
        console.warn(msg);
    }
}
//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/useObserver.js
var useObserver_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var _a = useObserver_read(react_default.a.useState(new ObjectToBeRetainedByReact()), 1), objectRetainedByReact = _a[0];
    var forceUpdate = useForceUpdate();
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react_default.a.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction = new mobx_esm["a" /* Reaction */](observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                trackingData_1.changedBeforeMount = true;
            }
        });
        var trackingData_1 = addReactionToTrack(reactionTrackingRef, newReaction, objectRetainedByReact);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react_default.a.useDebugValue(reaction, printDebugValue);
    react_default.a.useEffect(function () {
        // Called on first mount only
        reactionCleanupTracking_recordReactionAsCommitted(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
            // Got a change before first mount, force an update
            if (reactionTrackingRef.current.changedBeforeMount) {
                reactionTrackingRef.current.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx_esm["a" /* Reaction */](observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    forceUpdate();
                }),
                mounted: true,
                changedBeforeMount: false,
                cleanAt: Infinity
            };
            forceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}
//# sourceMappingURL=useObserver.js.map
// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/observer.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return useObserver(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react["memo"])(Object(react["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}
//# sourceMappingURL=observer.js.map

/***/ })
])]);