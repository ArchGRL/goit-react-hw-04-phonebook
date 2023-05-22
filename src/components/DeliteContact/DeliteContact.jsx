import React from 'react';
import { Button } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

export const DeliteContact = ({ id, onDeleteContact }) => {

  return (
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delite
      </Button>
  );
};

DeliteContact.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
  }