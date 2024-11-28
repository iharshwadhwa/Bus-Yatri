import React, { useEffect, useState } from 'react';
import './BusList.css'; // Import the CSS file for styles

const AddBusList = ({ onEdit, onDelete }) => {
    const [buses, setBuses] = useState([]);
    const [newBus, setNewBus] = useState({ busName: '', departure: '', arrival: '', duration: '' });

    // Fetch buses data
   

    // Add a new bus
    const handleAddBus = async () => {
        try {
            const response = await fetch('http://localhost:3000/buses/addBus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBus),
            });
            const addedBus = await response.json();
            setBuses([...buses, addedBus]);
            setNewBus({ busName: '', departure: '', arrival: '', duration: '' }); // Reset form
        } catch (error) {
            console.error('Error adding bus:', error);
        }
    };

    return (
        <div className="bus-list-container">
            <h2 className="add-bus-title">Add New Bus</h2>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Bus Name"
                    value={newBus.busName}
                    onChange={(e) => setNewBus({ ...newBus, busName: e.target.value })}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Departure"
                    value={newBus.departure}
                    onChange={(e) => setNewBus({ ...newBus, departure: e.target.value })}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Arrival"
                    value={newBus.arrival}
                    onChange={(e) => setNewBus({ ...newBus, arrival: e.target.value })}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Duration"
                    value={newBus.duration}
                    onChange={(e) => setNewBus({ ...newBus, duration: e.target.value })}
                    className="input-field"
                />
                <button onClick={handleAddBus} className="add-bus-button">Add Bus</button>
            </div>
        </div>
    );
};

export default AddBusList;
