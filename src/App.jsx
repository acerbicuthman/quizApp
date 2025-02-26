import React from "react";
import Home from "./Component/Home";
import StartQuizpage from "./Component/StartQuizpage";
import Quizpage from "./Component/Quizpage";
import Javascript from "./Component/Javascript";
import About from "./Component/About";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import GeneralKnowledge from "./Component/GeneralKnowledge";

const App = () => {
  return (
    <div>
      <>
      

      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<StartQuizpage />}></Route>
        <Route path="/quizstart/:id" element={<Quizpage />} > </Route>
        <Route path="/quiz/js" element={<Javascript />}></Route>
        <Route path="quiz/gn" element={<GeneralKnowledge />} />
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      
      </>
    </div>
  );
};

export default App;
