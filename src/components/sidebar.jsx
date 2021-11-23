import React, { Component } from 'react'

class SideBar extends Component {
    state = {};

    render () {
        return (
            <div>
                <div className="jumbotron">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;