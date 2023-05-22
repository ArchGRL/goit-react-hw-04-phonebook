import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { DeliteContact } from 'components/DeliteContact/DeliteContact';
import { Contact, ContactItem } from './ContactList.stiled';
import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <div>
      <Contact>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactListItem contact={contact} />
            <DeliteContact id={contact.id} onDeleteContact={onDeleteContact} />
          </ContactItem>
        ))}
      </Contact>
    </div>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
