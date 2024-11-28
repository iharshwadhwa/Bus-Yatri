import React, { useEffect, useState } from 'react';
import './BusList.css'; // Import the CSS file for styles

const BusList = () => {
    const [buses, setBuses] = useState([]);
    const [hoveredBus, setHoveredBus] = useState(null); // State for tracking hovered bus

    // Fetch buses data
    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const response = await fetch('http://localhost:3000/buses');
                const data = await response.json();
                setBuses(data);
            } catch (error) {
                console.error('Error fetching buses:', error);
            }
        };
        fetchBuses();
    }, []);

    const handleMouseEnter = (busId) => {
        setHoveredBus(busId);
    };

    const handleMouseLeave = () => {
        setHoveredBus(null);
    };

    const handleBookNow = () => {
        alert('Booking successful!');
    };

    return (
        <div className="bus-list-container">
            <h1 className="title">Bus List</h1>
            <div className="bus-list">
                {buses.map((bus) => (
                    <div
                        key={bus.id}
                        className="bus-item"
                        onMouseEnter={() => handleMouseEnter(bus.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p><strong>Bus Name:</strong> {bus.busName}</p>
                        <p><strong>Departure:</strong> {bus.departure}</p>
                        <p><strong>Arrival:</strong> {bus.arrival}</p>
                        <p><strong>Duration:</strong> {bus.duration}</p>
                        {hoveredBus === bus.id && (
                            <button onClick={handleBookNow} className="book-now-button">
                                Book Now
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusList;
