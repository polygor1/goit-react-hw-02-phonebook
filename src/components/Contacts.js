// import styles from './Statistics.module.css';
import React from 'react';

// import PropTypes from 'prop-types';

export default function Contacts({ props }) {
  console.log(props);
  return (
    <div>
      <h2> Contacts </h2>
      <ul>
        {props.map(item => (
          <li key={item.id}>
            {item.name} {item.namber}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
