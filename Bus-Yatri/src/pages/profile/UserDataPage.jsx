import React from 'react';

const UserDataPage = () => {
  // Retrieve data from local storage
  const email = localStorage.getItem('email');
  const username = localStorage.getItem('username');

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#f8f9fa',
  };

  const cardStyle = {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    backgroundColor: '#ffffff',
    width: '300px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#343a40',
    textAlign: 'center',
  };

  const textStyle = {
    fontSize: '1rem',
    color: '#495057',
    textAlign: 'left',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h5 style={titleStyle}>User Information</h5>
        <p style={textStyle}><strong>Email:</strong> {email || "No email available"}</p>
        <p style={textStyle}><strong>Username:</strong> {username || "No username available"}</p>
      </div>
    </div>
  );
};

export default UserDataPage;
