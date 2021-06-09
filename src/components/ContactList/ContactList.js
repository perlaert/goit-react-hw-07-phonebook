import { Component } from 'react';
import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

class ContactList extends Component {
  static propsTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { items, onDeleteContact } = this.props;
    return (
      <section>
        <ul className={style.contactsList}>
          {items.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
              <div className={style.contactInfo}>
                <p className={style.contactName}>{name}:</p>
                <p>{number}</p>
              </div>
              <button
                className={style.btn}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

const mapDispatchtoProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
