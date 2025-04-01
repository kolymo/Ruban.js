function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

function $(object) {
  var DOMElement = /*#__PURE__*/function () {
    function DOMElement(object) {
      _classCallCheck(this, DOMElement);
      if (object[0] === "#") {
        this.element = document.getElementById(object.slice(1));
      } else {
        this.element = document.querySelector(object);
      }
      if (!this.element) {
        throw new Error("Element not found: ".concat(object));
      }
    }

    // Method to get the inner text of the element
    return _createClass(DOMElement, [{
      key: "getText",
      value: function getText() {
        return this.element.innerText;
      }

      // Method to get the label text of the element
    }, {
      key: "getLabelText",
      value: function getLabelText() {
        var _this$element$closest, _this$element$closest2;
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var inputName = this.element.name || ((_this$element$closest = this.element.closest('form')) === null || _this$element$closest === void 0 ? void 0 : _this$element$closest.querySelectorAll("input, select, textarea")[index].name);
        if (!inputName) return null;
        var label = (_this$element$closest2 = this.element.closest("form")) === null || _this$element$closest2 === void 0 ? void 0 : _this$element$closest2.querySelector("label[for=\"".concat(inputName, "\"]"));
        return label ? label.innerText : null;
      }

      // Method to set the inner text of the element
    }, {
      key: "setText",
      value: function setText(text) {
        this.element.innerText = text;
      }

      // Method to get the element's value (for inputs, etc.)
    }, {
      key: "getValue",
      value: function getValue() {
        return this.element.value;
      }

      // Method to set the element's value (for inputs, etc.)
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.element.value = value;
      }

      // Method to add a class to the element
    }, {
      key: "addClass",
      value: function addClass(className) {
        this.element.classList.add(className);
      }

      // Method to remove a class from the element
    }, {
      key: "removeClass",
      value: function removeClass(className) {
        this.element.classList.remove(className);
      }

      // Method to add an event listener to the element
    }, {
      key: "on",
      value: function on(event, callback) {
        this.element.addEventListener(event, callback);
      }
    }]);
  }();
  return new DOMElement(object);
}

var NetworkError = /*#__PURE__*/function (_Error) {
  function NetworkError(message) {
    var _this;
    _classCallCheck(this, NetworkError);
    _this = _callSuper(this, NetworkError, [message]);
    _this.name = "NetworkError";
    return _this;
  }
  _inherits(NetworkError, _Error);
  return _createClass(NetworkError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var TimeoutError = /*#__PURE__*/function (_Error2) {
  function TimeoutError(message) {
    var _this2;
    _classCallCheck(this, TimeoutError);
    _this2 = _callSuper(this, TimeoutError, [message]);
    _this2.name = "TimeoutError";
    return _this2;
  }
  _inherits(TimeoutError, _Error2);
  return _createClass(TimeoutError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var ValidationError = /*#__PURE__*/function (_Error3) {
  function ValidationError(message) {
    var _this3;
    _classCallCheck(this, ValidationError);
    _this3 = _callSuper(this, ValidationError, [message]);
    _this3.name = "ValidationError";
    return _this3;
  }
  _inherits(ValidationError, _Error3);
  return _createClass(ValidationError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

// Sanitize Input String (Letters and Numbers Only)
function sanis(inputString) {
  return inputString.replace(/[^a-zA-Z0-9]/g, "");
}

// Sanitize Input Letters Only
function sanil(inputString) {
  return inputString.replace(/[^a-zA-Z]/g, "");
}

// Sanitize Input Numbers Only
function sanin(inputString) {
  return inputString.replace(/[^0-9]/g, "");
}

// Extend String prototype with the custom sanitization methods
String.prototype.sanis = function () {
  return this.replace(/[^a-zA-Z0-9]/g, "");
};
String.prototype.sanil = function () {
  return this.replace(/[^a-zA-Z]/g, "");
};
String.prototype.sanin = function () {
  return this.replace(/[^0-9]/g, "");
};

function form(object) {
  var FormElement = /*#__PURE__*/function () {
    function FormElement(object) {
      _classCallCheck(this, FormElement);
      this.element = document.getElementById(object);
      if (!this.element) {
        throw new Error("Element not found: ".concat(object));
      }
      if (this.element.tagName !== "FORM") {
        throw new Error("Element is not a form.");
      }
      if (window.RubanConfig.debug) {
        console.log('Constructor', this.element);
      }
      this.element.addEventListener('submit', function (event) {
        event.preventDefault();
        window.RubanConfig.debug ? console.log('Constructor Form Submission Prevented') : null;
      });
    }
    return _createClass(FormElement, [{
      key: "getLabelText",
      value: function getLabelText() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var inputs = this.element.querySelectorAll("input, select, textarea");
        if (index >= inputs.length) return null;
        var inputName = inputs[index].name;
        if (!inputName) return null;
        var label = this.element.querySelector("label[for=\"".concat(inputName, "\"]"));
        return label ? label.innerText : null;
      }
    }, {
      key: "post",
      value: function () {
        var _post = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _document$querySelect, _document$querySelect2;
          var _ref,
            _ref$data,
            data,
            _ref$options,
            options,
            _ref$url,
            url,
            csrfToken,
            headers,
            response,
            responseData,
            _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref$data = _ref.data, data = _ref$data === void 0 ? {} : _ref$data, _ref$options = _ref.options, options = _ref$options === void 0 ? {
                  csrf: true,
                  textOnly: false
                } : _ref$options, _ref$url = _ref.url, url = _ref$url === void 0 ? window.location.href : _ref$url;
                // Convert form data into an object if not passed
                if (Object.keys(data).length === 0) {
                  data = new FormData(this.element);
                  // Iterate over FormData entries and convert to object
                  //data = Object.fromEntries(data.entries());
                  // Sanitize each input value
                  data = Object.fromEntries(Array.from(data.entries()).map(function (_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2),
                      key = _ref3[0],
                      value = _ref3[1];
                    return [key, options.textOnly ? sanis(value) : value];
                  }));
                }

                // TODO: Check if there was already one in the formData
                // Check for CSRF token
                csrfToken = ((_document$querySelect = document.querySelector('meta[name="csrf-token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content) || ((_document$querySelect2 = document.querySelector('input[name*="csrf"]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value);
                if (!(!csrfToken && options.csrf)) {
                  _context.next = 5;
                  break;
                }
                throw new Error("CSRF token not found.");
              case 5:
                // Headers
                headers = _objectSpread2({
                  "Content-Type": "application/json"
                }, options.csrf && csrfToken ? {
                  "X-CSRF-Token": csrfToken
                } : {});
                _context.prev = 6;
                _context.next = 9;
                return fetch(url, {
                  method: "POST",
                  headers: headers,
                  body: JSON.stringify(data),
                  credentials: "include"
                });
              case 9:
                response = _context.sent;
                if (response.ok) {
                  _context.next = 12;
                  break;
                }
                throw new Error("Request failed with status: ".concat(response.status));
              case 12:
                _context.next = 14;
                return response.json();
              case 14:
                responseData = _context.sent;
                return _context.abrupt("return", responseData);
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](6);
                console.error("Error during form submission:", _context.t0);
                return _context.abrupt("return", {
                  error: _context.t0.message
                });
              case 22:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[6, 18]]);
        }));
        function post() {
          return _post.apply(this, arguments);
        }
        return post;
      }()
    }, {
      key: "populateForm",
      value: function populateForm(data) {
        for (var key in data) {
          var field = this.element.querySelector("[name=\"".concat(key, "\"]"));
          field ? field.value = data[key] : null;
        }
      }
    }]);
  }();
  return new FormElement(object);
}

function get(_x) {
  return _get.apply(this, arguments);
}
function _get() {
  _get = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var options,
      _options$timeout,
      timeout,
      secretKey,
      controller,
      timeoutId,
      _options$headers,
      headers,
      _options$queryParams,
      queryParams,
      _options$includeCrede,
      includeCredentials,
      urlWithParams,
      response,
      responseData,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _options$timeout = options.timeout, timeout = _options$timeout === void 0 ? 7500 : _options$timeout, secretKey = options.secretKey;
          controller = new AbortController();
          timeoutId = setTimeout(function () {
            return controller.abort();
          }, timeout);
          _options$headers = options.headers, headers = _options$headers === void 0 ? {} : _options$headers, _options$queryParams = options.queryParams, queryParams = _options$queryParams === void 0 ? {} : _options$queryParams, _options$includeCrede = options.includeCredentials, includeCredentials = _options$includeCrede === void 0 ? false : _options$includeCrede;
          _context.prev = 5;
          if (!(!url || typeof url !== "string")) {
            _context.next = 8;
            break;
          }
          throw new Error("Invalid URL provided.");
        case 8:
          // Append query parameters to the URL
          urlWithParams = new URL(url);
          Object.entries(queryParams).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            urlWithParams.searchParams.append(key, value);
          });

          // Add secret key to headers if provided
          if (secretKey) {
            headers["Authorization"] = "Bearer ".concat(secretKey);
          }

          // Make the request
          _context.next = 13;
          return fetch(urlWithParams.toString(), {
            method: "GET",
            headers: _objectSpread2({
              "Content-Type": "application/json"
            }, headers),
            credentials: includeCredentials ? "include" : "omit",
            signal: controller.signal
          });
        case 13:
          response = _context.sent;
          // Clear the timeout
          clearTimeout(timeoutId);

          // Check for HTTP errors
          if (response.ok) {
            _context.next = 17;
            break;
          }
          throw new NetworkError("Request failed with status: ".concat(response.status));
        case 17:
          _context.next = 19;
          return response.json();
        case 19:
          responseData = _context.sent;
          return _context.abrupt("return", responseData);
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](5);
          if (_context.t0 instanceof NetworkError) {
            console.error("Network error:", _context.t0.message);
          } else if (_context.t0 instanceof TimeoutError) {
            console.error("Timeout error:", _context.t0.message);
          } else {
            console.error("Unknown error:", _context.t0);
          }
          throw _context.t0;
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 23]]);
  }));
  return _get.apply(this, arguments);
}

function getFormData(formElement) {
  var formData = new FormData(formElement);
  var formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });
  return formObject;
}
function secureForm(form) {
  // Setup legit version of form
  var originalForm = getFormData(form);
  console.log('Original form:', originalForm);

  // Listen for form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formObject = getFormData(form);
    console.log('Form object:', formObject);

    // Compare all keys/name(inputs)
    var isFormSecure = Object.keys(formObject).every(function (key) {
      return key in originalForm;
    });
    if (isFormSecure) {
      form.submit();
    } else {
      throw new ValidationError('Form is not secure or has been modified!');
    }
  });
}

function wait(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NetworkError: NetworkError,
  TimeoutError: TimeoutError,
  ValidationError: ValidationError,
  form: form,
  get: get,
  sanis: sanis,
  sanil: sanil,
  sanin: sanin,
  secureForm: secureForm,
  wait: wait
});

var Ruban = _objectSpread2({
  $: $
}, utils);
if (typeof window !== "undefined") {
  window.Ruban = window.Ruban || Ruban;
  //window.$ = $; // Conflicts too often
}
(function (global) {
  // Default configuration
  var defaultConfig = {
    debug: false,
    forms: {
      secure: false
    }
  };

  // Ensure global config object exists
  global.RubanConfig = global.RubanConfig || {};

  // Check if RubanConfig manual object was correctly loaded
  var isManualConfigLoaded = Object.keys(global.RubanConfig).length > 0;

  // Check if `ruban.config.js` was loaded
  // TODO:

  // Merge config with priority
  var mergeConfigs = function mergeConfigs(defaultConfig, userConfig) {
    var result = _objectSpread2({}, defaultConfig);
    Object.keys(userConfig).forEach(function (key) {
      if (userConfig[key] !== undefined) {
        result[key] = userConfig[key];
      }
    });
    return result;
  };
  var finalConfig = mergeConfigs(defaultConfig, global.RubanConfig);
  global.RubanConfig = finalConfig;

  // Check if config is valid
  var hasValidConfig = Object.values(global.RubanConfig).some(function (val) {
    return val !== undefined;
  });
  if (!isManualConfigLoaded && !hasValidConfig) {
    console.warn("[Ruban Warning]: No valid configuration found. Using default settings.");
  }
  //console.log("Ruban before extension:", global.Ruban);

  if (finalConfig.debug) {
    // Extend global Ruban object
    Object.assign(global.Ruban, {
      getConfig: function getConfig() {
        return finalConfig;
      },
      setConfig: function setConfig(newConfig) {
        Object.assign(finalConfig, newConfig);
        //global.manualRubanConfigSet = true;
      },
      log: function log(message) {
        return console.log("[Ruban Debug]: ".concat(message));
      }
    });
  }

  //console.log("Ruban after extension:", global.Ruban);

  if (!global.Ruban.__DOMContentLoaded) {
    global.Ruban.__DOMContentLoaded = true;
    document.addEventListener("DOMContentLoaded", function () {
      var forms = document.querySelectorAll('form[data-ruban-form-secure]');
      if (forms.length) {
        if (finalConfig.forms.secure) ; else {
          if (forms.length && finalConfig.debug) {
            console.warn("[Ruban Warning]: Forms were found to secure but the global variable to secure forms is set to false.");
          }
        }

        // Only dispatch event if forms exist
        //document.dispatchEvent(new Event("Ruban-Forms-Secured"));
      } else {
        if (finalConfig.debug) {
          if (finalConfig.forms.secure) {
            console.warn("[Ruban Warning]: No forms were found to secure.");
          }
        }
      }
    });
  }
  console.log("Ruban is ready!");
})(window);

// Protect Ruban from being overwritten
Object.defineProperty(window, 'Ruban', {
  value: window.Ruban,
  writable: false,
  configurable: false
});

export { Ruban as default };
//# sourceMappingURL=ruban.esm.js.map
