import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { javascript } from "../Data.js/javascriptData";
import { generalKnowledge } from "../Data.js/GeneralknowledgeData";
import Card from 'react-bootstrap/Card';
import '../Styles/Startquizpage.css'
import NavDropdownExample from '../Component/NavBar';

const StartQuizpage = () => {
    const navigate = useNavigate();

    const beforeNavigate = (name) => {
        if (name === "js" || name === "gn"){
            navigate(`/quizstart/${name}`);
        }
    };
  return (
    <div >
      <NavDropdownExample />
      <Card id="StartPage">
      <Card.Img src="./Component/Quiz pics/quiz???.jpeg" alt="Quiz pics" />
      <Card.ImgOverlay>
        <Card.Title >
            
            <button onClick={ ()=> beforeNavigate("js")}>
                    <Link t0="#">Javascript</Link>
                </button>
                </Card.Title>
        <Card.Text>
        <Card.Subtitle className="mb-2 text-light">Total Question: {javascript.totalQuestions}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-light">Total Time: {javascript.totalTime}</Card.Subtitle> 
          
        </Card.Text>
        
        <Card.Title> <button onClick={ ()=> beforeNavigate("gn")}>
                    <Link t0="#">General Knowledge</Link>
                </button></Card.Title>
        <Card.Text>
        <Card.Subtitle className="mb-2 text-light">Total Question: {generalKnowledge.totalQuestions}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-light">Total Time: {generalKnowledge.totalTime}</Card.Subtitle>
         
          
        </Card.Text>
        
      </Card.ImgOverlay>
      
    </Card>
    </div>
  )
}

export default StartQuizpage


