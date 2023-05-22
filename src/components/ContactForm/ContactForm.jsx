import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

export default function ContactForm({onAddContact}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleInputNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

    return (
      <div>
        <Form action="" onSubmit={handleSubmit}>
          <Label>
            Name
            <br />
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleInputNameChange}
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
              onChange={handleInputNumberChange}
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

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};