import React, { useState } from 'react'
import style from "./Quiz.module.css"
import Question from './QuizData'
import QuizResult from './QuizResult'

export default function Quiz() {
    const[currentQues,setCurrentQues]=useState(0)
    const[score,setScore]=useState(0)
    const [correctAns,setCorrectAns]=useState()
    const[showResult,setShowResult]=useState(false)
    function handleNext(){
        const nextQues=currentQues+1
        if(nextQues<Question.length){
            setCurrentQues(nextQues)
        }else{
           setShowResult(true)
        }
       
    }
    function handleAns(isCorrect){
        if(isCorrect){
            setScore(score+2)
            setCorrectAns(correctAns+1)
        }

    }
  return (
    <>
    <div className={style.app}>
        {showResult?(<QuizResult/>):(   <>
    <div className={style.Quiz}>
        
        <div className={style.question}>
        <h5> score:{score}</h5>
        </div> 
        <div className={style.questionCount}>
            <span>{currentQues+1} of 5</span>
        </div>
        <div className={style.questionText}>
           {Question[currentQues].questionText}
        </div>
        
        <div className={style.answer}>
            {Question[currentQues].answerOptions.map((ans,i)=>{
                return <button key={i} onClick={()=>handleAns(ans.isCorrect)}>{ans.answertext}</button>
            })}
            
            <div className={style.actions}>
            <button>Quit</button>
            <button onClick={handleNext}>Next</button>
        </div>
       
            {/* <QuizResult/> */}

        </div>
      
    </div>
    </>
    )}
     
    </div>
    </>
  )
}
