import React from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import NavDropdownExample from '../Component/NavBar';
import '../Styles/Quizpaage.css'


function Quizpage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const startQuiz = () => {
     navigate(`/quiz/${id}`);
    };

  return (
 
    <div>
<NavDropdownExample />
   
 
    <Card id='Quizpage'>
      <Card.Body>
        <Card.Title>BroadBase{id} QUIZ</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        The Quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz.
         
        </Card.Text>
        <Card.Text>
        The total score for the quiz is based on your responses to all. However, your quiz will not be graded, if you skip a question or exit before responding to all the questions.
         
        </Card.Text>
        <Card.Title>Questions</Card.Title>
        <Card.Link variant="success" size="lg" outline="primary"  href="#"><button onClick={startQuiz}>Start Quiz</button></Card.Link>
        
        
      </Card.Body>
    </Card>
    
    </div>
  );   
}

export default Quizpage
