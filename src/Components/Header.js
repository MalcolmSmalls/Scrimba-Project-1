import React, { Component } from "react"

function Header() {
    return (
        <header className = "top-header">
            <nav className = "navigation">
                <div className = 'left-side'>
                        <img src="./react-logo.png"  className = "nav-logo" />
                        <h2 className = "nav-title">ReactFacts</h2>
                </div>
               <div className = 'right-side'>
                    <span className = "nav-right">React Course - Project 1</span>
               </div>
            </nav>
        </header>
    )

}

export default Header