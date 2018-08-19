import React from 'react';
import './nav.css';
export class Navbar extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="./navbar.css" />
                <nav id="nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="right-sidebar.html">Resume</a></li>
                        <li><a href="no-sidebar.html">Contact</a></li>
                    </ul>
                </nav>                
            </div>
        );
    }
}