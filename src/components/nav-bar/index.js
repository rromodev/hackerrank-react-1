import React, { useState }  from "react";
import "./index.css";
import Page from "../page"

export default function NavBar() {
  const [content, setContent] = useState()

  const handleClick = (e) => {
    setContent(e.target.textContent)
  }

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <a onClick={handleClick}>Home</a>
          <a onClick={handleClick}>News</a>
          <a onClick={handleClick}>Contact</a>
          <a onClick={handleClick}>About</a>
          
      </div>

      <Page title={content}/>
    </div>
  );
}