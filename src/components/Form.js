import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  id: '',
  name: '',
  number: '',
};

export class Form extends Component {
  state = { ...INITIAL_STATE };

  inputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // this.setState({ id: nanoid() }); // здесь работает на каждый символ
  };

  handleSubmit = event => {
    // this.state.setState({ id: nanoid() }); // здесь не работает
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <div className="App">
        <h1>goit-react-hw-02-phonebook</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor={this.inputId}>
            <h2>Name</h2>
            <input
              id={this.inputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
            <h2>Number</h2>
            <input
              id={this.inputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

// export default Form;
