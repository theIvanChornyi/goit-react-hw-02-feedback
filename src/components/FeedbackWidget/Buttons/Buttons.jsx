import PropTypes from 'prop-types';

export const Buttons = ({ buttonsName, onClick }) => {
  return buttonsName.map(button => (
    <li key={button}>
      <button type="button" onClick={() => onClick(button)} btnname={button}>
        {button}
      </button>
    </li>
  ));
};

Buttons.propTypes = {
  buttonsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
