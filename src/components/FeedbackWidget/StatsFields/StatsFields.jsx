import PropTypes from 'prop-types';
export const StatsFields = ({ fieldsName, statsAmount = 0 }) => {
  return fieldsName.map(field => (
    <li key={field}>
      <div name={field}>
        {field} <span>{statsAmount[field]}</span>
      </div>
    </li>
  ));
};

StatsFields.propTypes = {
  fieldsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  statsAmount: PropTypes.objectOf(PropTypes.number),
};
