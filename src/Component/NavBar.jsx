import "../Styles/Navbar.css";
import BroadPics from '../Pictures/Quizpics/broadbasequizz.jpg';



function NavDropdownExample() {

  return (
    <nav class="navbar sticky-top navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img 
            src={BroadPics} 
            alt="Broadbase Quiz" 
            style={{ width: "50px", marginRight: "40px", borderRadius: "50%" }} 
          />
  Broadbase Quiz</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
        <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Options
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Sign In</a></li>
    <li><a class="dropdown-item" href="#">Register</a></li>
    <li><a class="dropdown-item" href="#"> Highest Point Earner Board</a></li>
  </ul>
</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavDropdownExample;
