"use client"
import Link from "next/link";
import { JSX, useState } from "react"

function NavBar(): JSX.Element {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <strong>MyApp</strong>
            </Link>
            <button
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded={isActive}
              onClick={() => setIsActive(!isActive)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
    
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
              <Link className="navbar-item" href="/dashboard">Dashboard</Link>
              <Link className="navbar-item" href="/tasks">Tasks</Link>
            </div>
    
            <div className="navbar-end">
              <Link className="navbar-item" href="/profile">Profile</Link>
              <Link className="navbar-item" href="/logout">Logout</Link>
            </div>
          </div>
        </nav>
      );
}

export default NavBar;