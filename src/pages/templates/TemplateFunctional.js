import PropTypes from 'prop-types';

function TemplateFunc() {
    return (
      <div>
          hello
      </div>
    );
  }
  
//   TemplateFunc.propTypes = {
//     // You can declare that a prop is a specific JS primitive. By default, these
//     // are all optional.
//     optionalArray: PropTypes.array,
//     optionalBigInt: PropTypes.bigint,
//     optionalBool: PropTypes.bool,
//     optionalFunc: PropTypes.func,
//     optionalNumber: PropTypes.number,
//     optionalObject: PropTypes.object,
//     optionalString: PropTypes.string,
//     optionalSymbol: PropTypes.symbol,
  
//     // Anything that can be rendered: numbers, strings, elements or an array
//     // (or fragment) containing these types.
//     // see https://reactjs.org/docs/rendering-elements.html for more info
//     optionalNode: PropTypes.node,
  
//     // A React element (ie. <MyComponent />).
//     optionalElement: PropTypes.element,
  
//     // A React element type (eg. MyComponent).
//     // a function, string, or "element-like" object (eg. React.Fragment, Suspense, etc.)
//     // see https://github.com/facebook/react/blob/HEAD/packages/shared/isValidElementType.js
//     optionalElementType: PropTypes.elementType,
  
//     // You can also declare that a prop is an instance of a class. This uses
//     // JS's instanceof operator.
//     optionalMessage: PropTypes.instanceOf(Message),
  
//     // You can ensure that your prop is limited to specific values by treating
//     // it as an enum.
//     optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  
//     // An object that could be one of many types
//     optionalUnion: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.number,
//       PropTypes.instanceOf(Message)
//     ]),
  
//     // An array of a certain type
//     optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  
//     // An object with property values of a certain type
//     optionalObjectOf: PropTypes.objectOf(PropTypes.number),
  
//     // You can chain any of the above with `isRequired` to make sure a warning
//     // is shown if the prop isn't provided.
  
//     // An object taking on a particular shape
//     optionalObjectWithShape: PropTypes.shape({
//       optionalProperty: PropTypes.string,
//       requiredProperty: PropTypes.number.isRequired
//     }),
  
//     // An object with warnings on extra properties
//     optionalObjectWithStrictShape: PropTypes.exact({
//       optionalProperty: PropTypes.string,
//       requiredProperty: PropTypes.number.isRequired
//     }),
  
//     requiredFunc: PropTypes.func.isRequired,
  
//     // A value of any data type
//     requiredAny: PropTypes.any.isRequired,
  
//     // You can also specify a custom validator. It should return an Error
//     // object if the validation fails. Don't `console.warn` or throw, as this
//     // won't work inside `oneOfType`.
//     customProp: function(props, propName, componentName) {
//       if (!/matchme/.test(props[propName])) {
//         return new Error(
//           'Invalid prop `' + propName + '` supplied to' +
//           ' `' + componentName + '`. Validation failed.'
//         );
//       }
//     },
//   }
  
  export default TemplateFunc;
  