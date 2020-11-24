import React, { useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var getCalendarMonthArray = (selectedDate => {
  let currentDate = selectedDate ? moment(selectedDate) : moment();
  let calendar = [];
  const startDay = currentDate.clone().startOf('month').startOf('week');
  const endDay = currentDate.clone().endOf('month').endOf('week');
  let date = startDay.clone().subtract(1, 'day');

  while (date.isBefore(endDay, 'day')) {
    calendar.push({
      days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
    });
  }

  return calendar;
});

var monthStyles = {"monthView":"_month_style-module__monthView__3XGYO","event":"_month_style-module__event__39Rn3"};

const DayEvents = props => {
  const {
    dayEvents,
    onSelectEvent
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: 15,
      position: 'absolute'
    }
  }, dayEvents && dayEvents.map((item, index) => {
    if (index < 5) return /*#__PURE__*/React.createElement("div", {
      title: `${item.title}: ${moment(item.start).format('hh:mm A')} -- ${moment(item.end).format('hh:mm A')}`,
      key: index,
      className: monthStyles.event,
      style: item.background ? {
        background: item.background
      } : {},
      onClick: e => {
        e.stopPropagation();
        onSelectEvent(item);
      }
    }, item.avatarText);
  }), dayEvents && dayEvents.length > 5 && /*#__PURE__*/React.createElement("div", {
    className: monthStyles.event
  }, dayEvents.length - 5, "+"));
};

DayEvents.propTypes = {
  dayEvents: propTypes.array,
  onSelectEvent: propTypes.func
};

const WeekRow = props => {
  let {
    days,
    monthEvents,
    onSelectEvent,
    onSelectSlot
  } = props;

  const selectSlot = slot => {
    let slotInfo = {
      start: slot.format('YYYY-MM-DD HH:mm'),
      end: slot.format('YYYY-MM-DD HH:mm')
    };
    onSelectSlot(slotInfo);
  };

  return /*#__PURE__*/React.createElement("tr", null, days && days.map((item, index) => {
    let dayEvents = monthEvents[item.format('YYYY-MM-DD')];
    return /*#__PURE__*/React.createElement("td", {
      onClick: e => selectSlot(item),
      style: {
        position: 'relative'
      },
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, item.format('DD')), /*#__PURE__*/React.createElement(DayEvents, {
      dayEvents,
      onSelectEvent
    }));
  }));
};

WeekRow.propTypes = {
  days: propTypes.array,
  monthEvents: propTypes.object,
  onSelectEvent: propTypes.func,
  onSelectSlot: propTypes.func
};

var getMonthEvents = (events => {
  let monthEvents = {};
  events.forEach(item => {
    let startDate = moment(item.start).format('YYYY-MM-DD');
    if (monthEvents[startDate]) monthEvents[startDate].push(item);else monthEvents[startDate] = [item];
  });
  return monthEvents;
});

const fixedHeaderStyle = {
  position: 'sticky',
  top: 0,
  background: '#495668',
  zIndex: 1
};

const WeekHeader = props => {
  const {
    fixedHeader
  } = props;
  const weeks = moment.weekdaysShort();
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, weeks && weeks.map((item, index) => /*#__PURE__*/React.createElement("th", {
    style: fixedHeader ? fixedHeaderStyle : {},
    key: index
  }, item))));
};

WeekHeader.propTypes = {
  fixedHeader: propTypes.bool
};

const Month = props => {
  const {
    date,
    monthRootClassName,
    events,
    fixedHeader,
    onSelectEvent,
    onSelectSlot
  } = props;
  let range = getCalendarMonthArray(date);
  let monthEvents = getMonthEvents(events);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(monthStyles.monthView, monthRootClassName)
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement(WeekHeader, {
    fixedHeader
  }), /*#__PURE__*/React.createElement("tbody", null, range && range.map((item, index) => /*#__PURE__*/React.createElement(WeekRow, Object.assign({}, {
    monthEvents,
    onSelectEvent,
    onSelectSlot
  }, {
    key: index,
    days: item.days
  }))))));
};

Month.propTypes = {
  date: propTypes.string,
  events: propTypes.array,
  monthRootClassName: propTypes.string,
  fixedHeader: propTypes.bool,
  onSelectEvent: propTypes.func,
  onSelectSlot: propTypes.func
};

var getCalendarDayTimeArray = ((min, max) => {
  const hours = Array.from({
    length: 48
  }, (_, hour) => moment({
    hour: Math.floor(hour / 2),
    minutes: hour % 2 === 0 ? 0 : 30
  }).format('HH:mm'));
  let timeArray = hours;

  if (min && max) {
    timeArray = hours.filter(el => el >= min && el <= max);
  }

  return timeArray;
});

var dayViewStyle = {"dayView":"_day_style-module__dayView__3emB6","time":"_day_style-module__time__1bULH","event":"_day_style-module__event__2rGJH"};

const SINGLE_EVENT_HEIGHT = 50;
const EVENT_PADDING = 20;
var getEventSpecs = (event => {
  let diff = moment(event.end).diff(moment(event.start), 'hour', true);
  let minute = moment(event.start).format('mm');
  minute = parseInt(minute);
  let offset_minute;

  if (minute > 0 && minute < 30) {
    offset_minute = minute;
  } else offset_minute = minute - 30;

  let offset = SINGLE_EVENT_HEIGHT / 30 * offset_minute;
  let event_height = SINGLE_EVENT_HEIGHT * diff * 2 - EVENT_PADDING;
  return {
    height: event_height,
    offset
  };
});

const Events = props => {
  let {
    time,
    resource,
    dayEvents,
    selectedDate,
    resourceIdAccessor,
    onSelectEvent
  } = props;
  let dateTime = selectedDate.format('YYYY-MM-DD') + ` ${time}`;
  let events = dayEvents[dateTime];
  return /*#__PURE__*/React.createElement("div", null, events && events.map((item, index) => {
    let {
      height,
      offset
    } = getEventSpecs(item);
    if (resource && resource[resourceIdAccessor] === item[resourceIdAccessor] || !resource) return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: dayViewStyle.event,
      style: {
        height,
        top: offset
      },
      onClick: () => onSelectEvent(item)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '75%'
      }
    }, moment(item.start).format('hh:mm A'), " - ", moment(item.end).format('hh:mm A')), /*#__PURE__*/React.createElement("br", null), item.title);
  }));
};

Events.propTypes = {
  time: propTypes.string,
  resource: propTypes.object,
  dayEvents: propTypes.object,
  selectedDate: propTypes.object,
  resourceIdAccessor: propTypes.string,
  onSelectEvent: propTypes.func
};

const DayRow = props => {
  let {
    time,
    resources,
    dayEvents,
    selectedDate,
    resourceIdAccessor,
    onSelectEvent,
    onSelectSlot
  } = props;

  const selectSlot = () => {
    let date = selectedDate.format('YYYY-MM-DD');
    let start = date + ` ${time}`;
    let end = date + ` ${moment(time, 'HH:mm').add(30, 'minute').format('HH:mm')}`;
    let slotInfo = {
      start,
      end
    };
    onSelectSlot(slotInfo);
  };

  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: dayViewStyle.time
  }, time), resources ? resources.map((item, index) => {
    return /*#__PURE__*/React.createElement("td", {
      onClick: selectSlot,
      style: {
        position: 'relative'
      },
      key: index
    }, /*#__PURE__*/React.createElement(Events, Object.assign({
      resource: item
    }, {
      dayEvents,
      selectedDate,
      time,
      resourceIdAccessor,
      onSelectEvent
    })));
  }) : /*#__PURE__*/React.createElement("td", {
    onClick: selectSlot,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Events, {
    dayEvents,
    selectedDate,
    time,
    resourceIdAccessor,
    onSelectEvent
  })));
};

DayRow.propTypes = {
  time: propTypes.string,
  resources: propTypes.array,
  dayEvents: propTypes.object,
  selectedDate: propTypes.object,
  resourceIdAccessor: propTypes.string,
  onSelectEvent: propTypes.func,
  onSelectSlot: propTypes.func
};

const Resources = props => {
  const {
    resources,
    resourceTitleAccessor,
    fixedHeader
  } = props;
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      background: '#fff'
    }
  }), resources && resources.map((item, index) => {
    return /*#__PURE__*/React.createElement("th", {
      style: fixedHeader ? fixedHeaderStyle : {},
      key: index
    }, item[resourceTitleAccessor]);
  })));
};

Resources.propTypes = {
  resources: propTypes.array,
  resourceTitleAccessor: propTypes.string,
  fixedHeader: propTypes.bool
};

var getDayEvents = ((events, selectedDate) => {
  let dayEvents = {};
  events.forEach(item => {
    let startDate = moment(item.start).format('YYYY-MM-DD');
    let hour = moment(item.start).format('HH');
    let minute = moment(item.start).format('mm');

    if (parseInt(minute) < 30) {
      let full_hour_data = dayEvents[`${startDate} ${hour}:00`];
      if (full_hour_data) dayEvents[`${startDate} ${hour}:00`].push(item);else dayEvents[`${startDate} ${hour}:00`] = [item];
    } else {
      let half_hour_data = dayEvents[`${startDate} ${hour}:30`];
      if (half_hour_data) dayEvents[`${startDate} ${hour}:30`].push(item);else dayEvents[`${startDate} ${hour}:30`] = [item];
    }
  });
  return dayEvents;
});

const Day = props => {
  const {
    date,
    min,
    max,
    resources,
    resourceTitleAccessor,
    resourceIdAccessor,
    dayRootClassName,
    events,
    fixedHeader,
    onSelectEvent,
    onSelectSlot
  } = props;
  let selectedDate = date ? moment(date) : moment();
  let timeArray = getCalendarDayTimeArray(min, max);
  let dayEvents = getDayEvents(events);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(dayViewStyle.dayView, dayRootClassName)
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: 60
    }
  })), /*#__PURE__*/React.createElement(Resources, {
    resources,
    resourceTitleAccessor,
    fixedHeader
  }), /*#__PURE__*/React.createElement("tbody", null, timeArray && timeArray.map((item, index) => /*#__PURE__*/React.createElement(DayRow, Object.assign({
    key: index,
    time: item
  }, {
    resources,
    dayEvents,
    selectedDate,
    resourceIdAccessor,
    onSelectEvent,
    onSelectSlot
  }))))));
};

Day.propTypes = {
  date: propTypes.string,
  min: propTypes.string,
  max: propTypes.string,
  resources: propTypes.array,
  resourceTitleAccessor: propTypes.string,
  resourceIdAccessor: propTypes.string,
  dayRootClassName: propTypes.string,
  events: propTypes.array,
  fixedHeader: propTypes.bool,
  onSelectEvent: propTypes.func,
  onSelectSlot: propTypes.func
};

const ToolBar = props => {
  const {
    onViewChange
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => onViewChange('day')
  }, "day"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onViewChange('week')
  }, "week"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onViewChange('month')
  }, "month"));
};

ToolBar.propTypes = {};

var getCalendarWeekArray = (selectedDate => {
  let currentDate = selectedDate ? moment(selectedDate) : moment();
  let calendar = [];
  const startDay = currentDate.clone().startOf('week');
  const endDay = currentDate.clone().endOf('week');
  let date = startDay.clone().subtract(1, 'day');

  while (date.isBefore(endDay, 'day')) {
    calendar.push(date.add(1, 'day').clone());
  }

  return calendar;
});

const WeekTitleRow = props => {
  const {
    weekArray,
    fixedHeader
  } = props;
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      background: '#fff'
    }
  }), weekArray && weekArray.map((item, index) => {
    return /*#__PURE__*/React.createElement("th", {
      style: fixedHeader ? fixedHeaderStyle : {},
      key: index
    }, moment(item).format('DD ddd'));
  })));
};

WeekTitleRow.propTypes = {
  weekArray: propTypes.array,
  fixedHeader: propTypes.bool
};

var styles = {"weekView":"_week_style-module__weekView__2lP0W","time":"_week_style-module__time__2D6wS","event":"_week_style-module__event__8k6qD"};

const WeekEvents = props => {
  const {
    weekDay,
    weekEvents,
    time,
    onSelectEvent
  } = props;
  let dateTime = weekDay.format('YYYY-MM-DD') + ` ${time}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      position: 'absolute',
      top: 0
    }
  }, weekEvents[dateTime] && weekEvents[dateTime].map((item, index) => {
    if (index < 5) return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      title: `${item.title}: ${moment(item.start).format('hh:mm A')} - ${moment(item.end).format('hh:mm A')}`,
      key: index,
      className: styles.event,
      style: item.background ? {
        background: item.background
      } : {},
      onClick: e => {
        e.stopPropagation();
        onSelectEvent(item);
      }
    }, item.avatarText));
  }), weekEvents[dateTime] && weekEvents[dateTime].length > 5 && /*#__PURE__*/React.createElement("div", {
    className: styles.event
  }, weekEvents[dateTime].length - 5, "+"));
};

WeekEvents.propTypes = {
  weekDay: propTypes.object,
  weekEvents: propTypes.object,
  time: propTypes.string,
  onSelectEvent: propTypes.func
};

const TimeRow = props => {
  const {
    time,
    weekArray,
    weekEvents,
    onSelectEvent,
    onSelectSlot
  } = props;

  const selectSlot = slot => {
    let date = slot.format('YYYY-MM-DD');
    let start = date + ` ${time}`;
    let end = date + ` ${moment(time, 'HH:mm').add(30, 'minute').format('HH:mm')}`;
    let slotInfo = {
      start,
      end
    };
    onSelectSlot(slotInfo);
  };

  return /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: styles.time
  }, time), weekArray ? weekArray.map((item, index) => {
    return /*#__PURE__*/React.createElement("td", {
      onClick: () => selectSlot(item),
      style: {
        position: 'relative'
      },
      key: index
    }, /*#__PURE__*/React.createElement(WeekEvents, Object.assign({}, {
      weekEvents,
      onSelectEvent
    }, {
      weekDay: item,
      time: time
    })));
  }) : /*#__PURE__*/React.createElement("td", null)));
};

TimeRow.propTypes = {
  time: propTypes.string,
  weekArray: propTypes.array,
  weekEvents: propTypes.object,
  onSelectEvent: propTypes.func,
  onSelectSlot: propTypes.func
};

var getWeekEvents = (events => {
  let weekEvents = {};
  events.forEach(item => {
    let startDate = moment(item.start).format('YYYY-MM-DD');
    let hour = moment(item.start).format('HH');
    let minute = moment(item.start).format('mm');

    if (parseInt(minute) < 30) {
      let full_hour_data = weekEvents[`${startDate} ${hour}:00`];
      if (full_hour_data) weekEvents[`${startDate} ${hour}:00`].push(item);else weekEvents[`${startDate} ${hour}:00`] = [item];
    } else {
      let half_hour_data = weekEvents[`${startDate} ${hour}:30`];
      if (half_hour_data) weekEvents[`${startDate} ${hour}:30`].push(item);else weekEvents[`${startDate} ${hour}:30`] = [item];
    }
  });
  return weekEvents;
});

const Week = props => {
  const {
    min,
    max,
    weekRootClassName,
    events,
    date,
    fixedHeader,
    onSelectEvent,
    onSelectSlot
  } = props;
  let timeArray = getCalendarDayTimeArray(min, max);
  let weekArray = getCalendarWeekArray(date);
  let weekEvents = getWeekEvents(events);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles.weekView, weekRootClassName)
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: '5%'
    }
  })), /*#__PURE__*/React.createElement(WeekTitleRow, {
    weekArray,
    fixedHeader
  }), timeArray && timeArray.map((item, index) => /*#__PURE__*/React.createElement(TimeRow, Object.assign({
    key: index,
    time: item
  }, {
    weekArray,
    weekEvents,
    onSelectEvent,
    onSelectSlot
  })))));
};

Week.propTypes = {
  min: propTypes.string,
  max: propTypes.string,
  weekRootClassName: propTypes.string,
  events: propTypes.array,
  date: propTypes.string,
  fixedHeader: propTypes.bool,
  onSelectEvent: propTypes.func,
  onSelectSlot: propTypes.func
};

var style = {"root":"_style-module__root__hQD01","calendar":"_style-module__calendar__mNSVf"};

const ReactCalendarSchedule = props => {
  const {
    rootClassName,
    components
  } = props;
  const [view, onViewChange] = useState(props.view);
  const [date, onNavigate] = useState(props.date);
  const CustomToolbar = components.Toolbar;

  const getView = () => {
    switch (view) {
      case 'month':
        return /*#__PURE__*/React.createElement(Month, Object.assign({}, props, {
          date
        }));

      case 'day':
        return /*#__PURE__*/React.createElement(Day, Object.assign({}, props, {
          date
        }));

      case 'week':
        return /*#__PURE__*/React.createElement(Week, Object.assign({}, props, {
          date
        }));

      default:
        return /*#__PURE__*/React.createElement(Month, Object.assign({}, props, {
          date
        }));
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(style.root, rootClassName)
  }, CustomToolbar ? /*#__PURE__*/React.createElement(CustomToolbar, {
    onViewChange,
    onNavigate
  }) : /*#__PURE__*/React.createElement(ToolBar, {
    onViewChange,
    onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    className: style.calendar
  }, getView()));
};

ReactCalendarSchedule.propTypes = {
  view: propTypes.string,
  date: propTypes.string,
  events: propTypes.array,
  resources: propTypes.array,
  resourceTitleAccessor: propTypes.string,
  resourceIdAccessor: propTypes.string,
  fixedHeader: propTypes.bool,
  onSelectEvent: propTypes.func,
  onSelectSlot: propTypes.func,
  rootClassName: propTypes.string,
  monthRootClassName: propTypes.string,
  weekRootClassName: propTypes.string,
  dayRootClassName: propTypes.string,
  components: propTypes.object
};

export default ReactCalendarSchedule;
//# sourceMappingURL=index.modern.js.map
