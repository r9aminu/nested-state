import React, { useState } from 'react';

function UserProfile() {
  // State for user profile data
  const [userProfile, setUserProfile] = useState({
    name: 'Aminu Abubakar',
    email: 'john@example.com',
    address: {
      street: '123 Main St',
      city: 'Seattle',
      country: 'USA'
    }
  });

  // Function to update address
  const updateAddress = (street, city, country) => {
    setUserProfile(prev => ({
      ...prev,
      address: {
        street,
        city,
        country
      }
    }));
  };

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { street, city, country } = event.target.elements;
    updateAddress(street.value, city.value, country.value);
  };

  // Form for updating address
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <input type="text" name="street" placeholder="Street" defaultValue={userProfile.address.street} />
        <input type="text" name="city" placeholder="City" defaultValue={userProfile.address.city} />
        <input type="text" name="country" placeholder="Country" defaultValue={userProfile.address.country} />
        <button type="submit">Update Address</button>
      </form>

      {/* Display user profile */}
      <div>
        <h2>User Profile</h2>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Address:</p>
        <ul>
          <li>Street: {userProfile.address.street}</li>
          <li>City: {userProfile.address.city}</li>
          <li>Country: {userProfile.address.country}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
