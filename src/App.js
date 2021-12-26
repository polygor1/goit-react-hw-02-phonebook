import './App.css';

import { Component } from 'react';
import { Form } from './components/Form';
import Contacts from './components/Contacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    data.id = nanoid();
    this.state.contacts.push(data);
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts props={this.state.contacts} />
      </div>
    );
  }
}

export default App;
