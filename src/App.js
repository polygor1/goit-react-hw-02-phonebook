import './App.css';

import { Component } from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import Filter from './components/Filter';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    data.id = nanoid();
    const contact = { ...data };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visbleContact = this.getVisibleContact();
    return (
      <div className="App">
        <h1>goit-react-hw-02-phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2> Contacts </h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList props={visbleContact} />
      </div>
    );
  }
}

export default App;
