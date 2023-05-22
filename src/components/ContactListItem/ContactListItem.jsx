import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
