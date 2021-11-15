import React from "react";
import {quotes} from "../quotes";

function Header(){

    let randomNumber = Math.floor(Math.random() * quotes.length)
    const quoteToUse = quotes[randomNumber];

    return (
        <div class="header">
          <h1>My To Do List</h1>
          <p>{quoteToUse} </p>
        </div>
    )
}

export default Header;