import React from 'react'

export default function ContactCard({ contact, onDelete,onEdit }) { 
  // Export the ContactCard component as the default export
  // Destructure the 'contact' and 'onDelete' props
  // 'contact' contains the name and email to display
  // 'onDelete' is a function to handle deleting the contact

  return (
    <div className="contact-item">
      {/* Container for each contact item */}
      <img src="./assets/user.png" alt="Avatar" className="avatar" />
      {/* Display an avatar image for the contact */}
      <div className="contact-info">
        {/* Container for contact information */}
        <p className="name">{contact.name}</p>
        {/* Display the contact's name */}
        <p className="email">{contact.email}</p>
        {/* Display the contact's email */}
      </div>
      <button className="delete-button" onClick={onDelete}>
        🗑️
      </button>
            {/* Button to delete the contact, triggers the 'onDelete' function */}

      <button className='"editBtn' onClick={onEdit}>✏️</button>
    </div>
  );
}
