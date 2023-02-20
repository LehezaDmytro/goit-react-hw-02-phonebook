import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, deleteItem }) => {
  return (
    <ul>
      {filteredContacts().map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => deleteItem(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
