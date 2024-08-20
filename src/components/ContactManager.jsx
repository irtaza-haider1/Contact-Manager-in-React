import React, {useState} from 'react';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
function ContactManager() {
    // Initialize the state 'contacts' as an empty array
    const [contacts, setContacts] = useState([]);
    const [editForm, setEditForm] = useState(null);

    const [name, setName] = useState(''); // Initialize 'name' state as an empty string
    const [email, setEmail] = useState(''); // Initialize 'email' state as an empty string
    const [showForm, setShowForm] = useState(false); // Initialize 'showForm' state as false to control form visibility


    const addContact = (contact) => {
      if(editForm !== null){

        const updatedContacts = [...contacts]

        updatedContacts[editForm]= contact;

        setContacts (updatedContacts)

        setEditForm(null);
      }
     else {
      // Add the new contact to the existing contacts array
      setContacts([...contacts, contact]);
     }
    };
  const edittingForm = (index,contact) => {
    setEditForm(index);
    
    setShowForm(true);
    setName(contact?.name);
    setEmail(contact?.email)
  }
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
          <AddContact onAddContact={addContact} editForm={editForm}  name={name} setName={setName} email={email} setEmail={setEmail} showForm={showForm} setShowForm={setShowForm} />
          {/* Map over the contacts array to render a ContactCard for each contact */}
          {contacts.map((contact, index) => (
            <ContactCard
              key={index} // Assign a unique key based on the index
              contact={contact} // Pass the contact data as a prop
              onDelete={() => deleteContact(index)}
              onEdit={()=> edittingForm(index,contact)} // Pass the deleteContact function with the current index
            />
          ))}
        </div>
        {contacts.length===0 &&
        <h4 className='noContact'>No contacts added</h4>}
      </div>
    );
  }
  
  
  export default ContactManager;