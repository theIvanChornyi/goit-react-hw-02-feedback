import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <Box as="section" width="360px" ml="auto" mr="auto" mb={3}>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
