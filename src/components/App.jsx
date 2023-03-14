import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

class App extends Component {
  state = { 
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
    // name: "",
    // number: "",
  } 

  // handleChange = evt => {
  //   const { name, number, value } = evt.target;
  //   this.setState({ [name]: value, [number]: value });
  // };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   const { contacts, name, number } = this.state;
  //   const id = nanoid();
  //   const newContact = {id, name, number}
  //   const updateContact = [newContact, ...contacts];
  //   this.setState({contacts:updateContact, name: "", number: ""})
  // };

  addContact = (newContact) => {
    const { contacts } = this.state;
    const updateContact = [newContact, ...contacts];
    this.setState({contacts:updateContact})
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChangeFilter = evt => {
    this.setState({filter: evt.target.value})
  };


  getFilteredContacts = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    const { contacts, filter} = this.state;
    const filteredContact = this.getFilteredContacts();
    return (
      <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact}/>
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChangeFilter}/>
        <ContactList contacts={filteredContact} deleteContact={this.deleteContact}/>
      </div>
      </>
    );
  }
}
 
export default App;