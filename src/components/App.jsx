import PropTypes from 'prop-types';
export const App = ({ children }) => <>{children}</>;

App.prototype = {
  children: PropTypes.node,
};
