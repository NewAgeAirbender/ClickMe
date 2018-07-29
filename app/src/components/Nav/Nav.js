import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item"><a className="nav-link" href="/">Bowie Album Art Game </a></li>
            <li className="nav-item">
                {props.message}
            </li>
            <li className="nav-item"> Score: <span style={{color: "rgb(255, 60, 0)"}}>{props.score}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Nav;