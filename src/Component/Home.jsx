import React from "react";
import NavDropdownExample from "./NavBar";
import { Link } from "react-router-dom";
import '../Styles/Home.css';
import Quizpagepic from '../Pictures/Quizpics/quizzpageimage.png';

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <div className="nav-container">
        <NavDropdownExample />
      </div>

      {/* Main Content */}
      <div className="main-container text-center text-light">
        <div className="row">
          <div className="col-8 sm-4">
            <div className="position-absolute m-5">
              <p className="fs-1">BroadBase Quiz – The Ultimate Quiz Experience!</p>
              <h2>Challenge your mind, explore new knowledge, and rise to the top of the leaderboard!</h2>
              <h3>Welcome to one of the greatest social quiz games in the galaxy.</h3>
              <button className="lg mt-5 text-light">
                <Link to="/quiz" className="StrtQuiz">
                  Start Quiz
                </Link>
              </button>
              <button className="lg m-5 ">
                <Link to="/LogIn" className="StrtQuiz">
                  Log In
                </Link>
              </button>
            </div>
            
          </div>
         
        </div>
        {/* <div className="col-8">
        <img
              className="img-fluid imag"
              src={Quizpagepic}
              style={{ width: "50%", height: "auto" }}
              alt="Quizpage"
            />
        </div> */}
       
      </div>
      <nav class="navbar fixed-bottom bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sign Up now to partake in the Quiz</a>
  </div>
</nav>
    </>
  );
};

export default Home;
