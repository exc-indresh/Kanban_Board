import React, { useState} from 'react';
import downIcon from "../../Assets/down.svg";
import toDoIcon from "../../Assets/Display.svg";
import "../Navbar/Navbar.css";

const Navbar = ({ groupBy, setGroupBy }) => {
  const [displayFilterToggle, setDisplayFilterToggle] = useState(false);
  const handleGroupByChange = (e) => {
    const newValue = e.target.value;
    setGroupBy(newValue);
    localStorage.setItem('groupBy', newValue);  
  };

  const handfilterToggle = () => {
    setDisplayFilterToggle(!displayFilterToggle);
  };

  return (
    <div className='nav-container'>
      <div className="nav-display" onClick={handfilterToggle}>
        <div className='nav-display-btn'>
          <div className="nav-adjust-icon">
            <img src={toDoIcon} alt="" />
          </div>
          <div>Display</div>
          <div className="nav-chevron-down-icon">
            <img src={downIcon} alt="" />
          </div>
        </div>
      </div>

      <div className={displayFilterToggle ? "" : "toggle-nav-display-filter-hide"}>
        <div className="nav-display-filter">

          <div className="nav-display-filter-group">
            <div>Group By:</div>
            <div className="nav-display-filter-group-options">
              <select name="group-by" value={groupBy} onChange={handleGroupByChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>

          <div className="nav-display-filter-order">
            <div>Order By:</div>
            <div className="nav-display-filter-order-options">
              <select name="order-by" id="">
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
