import React from 'react';
import "../Kanban_Board/Board.css";

import inProgressIcon from '../../Assets/in-progress.svg'
import addIcon from "../../Assets/add.svg"
import dotMenuIcon from "../../Assets/3 dot menu.svg"
// import backlogIcon from '../../Assets/Backlog.svg'
// import todoIcon from '../../Assets/To-do.svg'
// import doneIcon from '../../Assets/Done.svg'
// import cancelledIcon from '../../Assets/Cancelled.svg'
import noPriorityIcon from '../../Assets/No-priority.svg'
// import lowPriorityIcon from '../../Assets/Img - Low Priority.svg'
// import medPriorityIcon from '../../Assets/Img - Medium Priority.svg'
// import highPriorityIcon from '../../Assets/Img - High Priority.svg'
// import urgentPriorityIcon from '../../Assets/SVG - Urgent Priority colour.svg'

const Board = ({ groupBy, tickets, users }) => {
  const groupTickets = (tickets, groupBy) => {
    const grouped = {};

    
    const userMap = users.reduce((acc, user) => {
      acc[user.id] = user.name;
      return acc;
    }, {});

    tickets.forEach(ticket => {
      let key;
      if (groupBy === 'user') {
        key = userMap[ticket.userId] || "Unknown User";
      } else if (groupBy === 'priority') {
        key = ticket.priority;
      } else {
        key = ticket.status;
      }

      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(ticket);
    });

    return grouped;
  };

  const groupedTickets = groupTickets(tickets, groupBy);


  return (
    
    <div className="board-container">
      <div className="board-container-body">
        {Object.keys(groupedTickets).map((group, index) => (
          <div key={index} className="board-column">
            <div className='heading-board-filter-header'>
              <div className="board-filter-header-icon board-filter-header"><img src={noPriorityIcon} alt="" /></div>
              <div className="board-filter-header-title board-filter-header">{group}</div>
              <div className="board-filter-header-add-card board-filter-header"><img src={addIcon} alt="" srcset="" /></div>
              <div className="board-filter-header-options board-filter-header"><img src={dotMenuIcon} alt="" /></div>
            </div>
            {groupedTickets[group].map((ticket, idx) => (
              <div key={idx} className="board-ticket-body">
                <div className="board-ticket-id-user">
                  <div className="board-ticket-id">CAM-{ticket.id}</div>
                </div>
                <div className="board-ticket-title-and-status">
                  <div className="board-ticket-title-icon">
                  
                    <img src={inProgressIcon} alt="" srcset="" />
                  </div>
                  <div className="board-ticket-title">{ticket.title}</div>
                </div>
                <div className="board-feature-request-priority-body">
                  <div className="board-ticket-priority feature-request-priority-body">{ticket.priority}</div>
                  <div className="board-ticket-tag feature-request-priority-body">{ticket.tag}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
