import React, { Component } from 'react';
// import styles from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
            <button
              type="button"
              onClick={() => this.props.onDeleteContact(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
