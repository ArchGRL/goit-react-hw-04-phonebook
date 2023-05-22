import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App/App.styled';
import { ContactsWrapper } from 'components/App/App.styled';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleAddContact = newContact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    existingContact
      ? alert(`${existingContact.name} is already in the phone book.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
      filter: '',
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <ContactsWrapper>
          <Filter filter={filter} onFilter={this.handleFilterChange} />
          <ContactList
            filteredContacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </ContactsWrapper>
      </Container>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default App;