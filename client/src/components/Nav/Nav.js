import React from 'react'

const Nav = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Google Books</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Saved</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav
