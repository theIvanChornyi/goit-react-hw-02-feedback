import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FeedbackBtn, FeedbackItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" display="flex" alignItems="center" justifyContent="center">
      {options.map(button => (
        <FeedbackItem key={button}>
          <FeedbackBtn
            type="button"
            onClick={() => onLeaveFeedback(button)}
            btnname={button}
          >
            {button}
          </FeedbackBtn>
        </FeedbackItem>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
