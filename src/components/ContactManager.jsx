import React, {useState} from 'react';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
function ContactManager() {
    // Initialize the state 'contacts' as an empty array
    const [contacts, setContacts] = useState([]);
  
    // Function to add a new contact to the 'contacts' state
    const addContact = (contact) => {
      // Add the new contact to the existing contacts array
      setContacts([...contacts, contact]);
    };
  
    // Function to delete a contact from the 'contacts' state by index
    const deleteContact = (index) => {
        // Create a copy of the contacts array
        const updatedContacts = [...contacts];
      
        // Remove the contact at the specified index
        updatedContacts.splice(index, 1);
      
        // Update the state with the new contacts array
        setContacts(updatedContacts);
      };
      
  
    return (
      <div className="container container-Form">
        <h1>Contact Manager</h1>
        <div className="contacts-list">
          <h2>Contacts List</h2>
          {/* Render the AddContact component and pass the addContact function as a prop */}
          <AddContact onAddContact={addContact} />
          {/* Map over the contacts array to render a ContactCard for each contact */}
          {contacts.map((contact, index) => (
            <ContactCard
              key={index} // Assign a unique key based on the index
              contact={contact} // Pass the contact data as a prop
              onDelete={() => deleteContact(index)} // Pass the deleteContact function with the current index
            />
          ))}
        </div>
      </div>
    );
  }
  
  
  export default ContactManager;