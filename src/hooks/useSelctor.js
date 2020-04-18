import { shallowEqual, useSelector as defaultSelector } from 'react-redux'

const useSelector = (selector) => defaultSelector(selector, shallowEqual);

export default useSelector;
