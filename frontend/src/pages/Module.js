import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NextPage.css';

function NextPage() {
  return (
    <div className="next-page-container">
      <div className="left-background"></div>
      <div className="content-container">
        <Link to="/register">
          <h1><button className="role-button">Insert</button></h1>
        </Link>
        <Link to="/retrieve">
        <h1><button className="role-button">Analytics Query</button></h1>
        </Link>
      </div>
     
    </div>
  );
}

export default NextPage;
