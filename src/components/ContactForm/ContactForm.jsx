import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onHendleSubmit(this.state);
    this.resetForm();
  };

  changeInputValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.submitForm}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          onChange={this.changeInputValue}
          id="name"
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor="tel">
          Number
        </label>
        <input
          className={css.input}
          onChange={this.changeInputValue}
          id="tel"
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onHendleSubmit: PropTypes.func.isRequired,
};
