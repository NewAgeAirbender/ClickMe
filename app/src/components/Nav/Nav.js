import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item"><a className="nav-link" href="/">Bowie Clicky Game </a></li>
            <li className="nav-item">
                {props.message}
            </li>
            <li className="nav-item"> Score: <span style={{color: "yellow"}}>{props.score}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Nav;