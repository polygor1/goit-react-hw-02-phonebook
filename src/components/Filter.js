import styles from './Filter.module.css';
import React from 'react';

const Filter = ({ value, onChange }) => (
  <label className={styles.filter}>
    <h3 className={styles.title}> Find contact by name</h3>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
