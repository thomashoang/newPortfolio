import React from 'react';

export class navbar extends React.Component {
    render() {
        return (
            <nav id="nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="right-sidebar.html">Resume</a></li>
                    <li><a href="no-sidebar.html">Contact</a></li>
                </ul>
            </nav>
        );
    }
}