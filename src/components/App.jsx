import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onHendleSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const findContact = this.state.contacts.find(
      contact => contact.name === name
    );
    if (findContact) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return { contacts: [newContact, ...prevState.contacts] };
      });
    }
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteItem = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onHendleSubmit={this.onHendleSubmit} />
        <h2>Contacts</h2>
        <Filter
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}
        />
        <ContactList
          filteredContacts={this.filteredContacts}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
