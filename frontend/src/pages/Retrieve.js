import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NextPage.css';

function NextPage() {
  return (
      <div className="next-page-container">
      <div className="left-background"></div>
      <div className="content-container">
        <Link to="/query1">
          <h1><button className="role-button">Total_amt</button></h1>
        </Link>
        <Link to="/query2">
          <h1><button className="role-button">vehicle_Count</button></h1>
        </Link>
        <Link to="/query3">
        <h1><button className="role-button">passing_cnt</button></h1>
        </Link>
        {/* <Link to="/query3">
          <h1><button className="role-button">Query3</button></h1>
        </Link> */}
        
      </div>
    </div>
  );
}

export default NextPage;
