import { useState } from 'react'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import defaultContacts from './defaultContacts.json'
import './App.css'

function App() {
  const [contacts, setContacts] = useState(defaultContacts);
const addContact = (newContact) =>{}
  return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList contacts = {contacts} />
</div>

  )
}

export default App
