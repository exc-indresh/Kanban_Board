import React, { useState, useEffect } from 'react';
import Board from "./Components/Kanban_Board/Board";
import Navbar from "./Components/Navbar/Navbar";

// I need a little bit more time to complete this project ,, 

function App() {
  const [groupBy, setGroupBy] = useState('status'); 
  const [tickets, setTickets] = useState([]); 
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    if (savedGroupBy) {
      setGroupBy(savedGroupBy);
    }
    Promise.all([
      fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then(response => response.json())
    ])
    .then(([data]) => {
      if (Array.isArray(data.tickets)) {
        setTickets(data.tickets);
      } else {
        console.error("Expected tickets to be an array");
      }

      if (Array.isArray(data.users)) {
        setUsers(data.users); 
      } else {
        console.error("Expected users to be an array");
      }
    })
    .catch(error => console.log("Error fetching data: ", error));
  }, []); 

  return (
    <>
      <Navbar groupBy={groupBy} setGroupBy={setGroupBy} />
      <Board groupBy={groupBy} tickets={tickets} users={users} />  
    </>
  );
}

export default App;
