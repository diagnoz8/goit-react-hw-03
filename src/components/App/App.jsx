import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import defaultContacts from '../../defaultContacts.json'
import './App.css'


function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
  return savedContacts ? JSON.parse(savedContacts) : defaultContacts;
  });
  const  [filter, setFilter] = useState('')
 
  const addContact = (newContact) => {
    setContacts(currContacts => {
      return [...currContacts, newContact]
    })
  }
  const removeContact = (contactId) => {
    setContacts(currContacts => {
      return currContacts.filter(contact => contact.id !== contactId)
    })
    
  }
 useEffect(() => {
 window.localStorage.setItem("contacts", JSON.stringify(contacts))
   }, [contacts]
  )
  const shownContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
  <div className='phonebook'>
  <h1>Phonebook</h1>
  <ContactForm  onAdd = {addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={shownContacts} onRemove={removeContact } />
</div>

  )
}

export default App
