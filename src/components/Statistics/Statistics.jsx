import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatValue, StatName } from './Statistics.styled';

export const Statistics = stats => {
  const statsKeys = Object.keys(stats);
  return (
    <Box as="ul">
      {statsKeys.map(key => (
        <Box as="li" mb={0} key={key}>
          <StatName>
            {key === 'positivePercentage'
              ? 'positive feedback  : '
              : `${key.toLowerCase()}: `}
          </StatName>
          <StatValue>{stats[key]}</StatValue>
        </Box>
      ))}
    </Box>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  }),
};
