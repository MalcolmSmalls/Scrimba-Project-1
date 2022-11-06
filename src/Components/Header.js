import React, { Component } from "react"

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png"  className = "nav-logo" />
                <h2 className = "nav-title">ReactFacts</h2>
                <span className = "nav-right">React Course - Project 1</span>
            </nav>
        </header>
    )

}

export default Header