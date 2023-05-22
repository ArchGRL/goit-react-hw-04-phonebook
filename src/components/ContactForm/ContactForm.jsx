import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };
    this.props.onAddContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <Form action="" onSubmit={this.handleSubmit}>
          <Label>
            Name
            <br />
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label>
            Number
            <br />
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};


export default ContactForm;
