import React from 'react'

export default function Navbar() {
  return (
<nav className="navbar" style={{ backgroundColor: '#6fe87f'}}>
  <div className="container-fluid">
  <span className="navbar-brand mb-0 h1">WorkoutWizard</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Video Library</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Enter
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Daily Intake</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Daily Workout</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Goals</a></li>
          </ul>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Track
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Intake</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Workout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
