// import styles from './ContactList.module.css';
import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.props.map(item => (
            <li key={item.id}>
              {item.name}: {item.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
