import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { SectionTitle } from 'components/Section';

export const Notification = ({ message }) => (
  <Box as="section">
    <SectionTitle>{message}</SectionTitle>
  </Box>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
