import React from 'react'

export default function AddContact({ onAddContact, editForm, name, setName, email, setEmail, showForm, setShowForm  }) { 
  // 'onAddContact' prop, which is a function to add a contact


  const handleSubmit = (e) => { 
    e.preventDefault(); // Prevent the default form submission behavior
    onAddContact({ name, email }); // Call the 'onAddContact' function passed as a prop, with the current name and email values
    setName(''); // Reset the 'name' state to an empty string after submission
    setEmail(''); // Reset the 'email' state to an empty string after submission
    setShowForm(false); // Hide the form after the contact is added
    
  };

  return (
    <div>
      {/* Button to toggle the visibility of the form */}
      <button className="add-contact" onClick={() => setShowForm(!showForm)
      }>
        {editForm === null  ?  'Add Form' : 'Edit Contact'}
      </button>
      {/* Conditional rendering: If 'showForm' is true, display the form */}
      {showForm && (
        <div className="contact-form">
          <h2>{editForm !== null ? 'Edit Form' : 'Add Contact'}</h2>
          {/* Form to capture the contact's name and email */}
          <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name} // Bind the input value to the 'name' state
              onChange={(e) => setName(e.target.value)} // Update the 'name' state when the input changes
              required // Make this input required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email} // Bind the input value to the 'email' state
              onChange={(e) => setEmail(e.target.value)} // Update the 'email' state when the input changes
              required // Make this input required
            />
            <button type="submit">{editForm !== null ? 'Update' : 's'}</button> 
            {/* Submit button to add the contact */}
          </form>
        </div>
      )}
    </div>
  );
}
