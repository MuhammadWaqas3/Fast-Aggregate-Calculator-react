
import React, { useState } from 'react';
import './Agg.css';
import { Button, Form } from 'react-bootstrap';


function Agg() {

const [attemptedmathsMcq,setAttemptedMathsMcq] = useState('');
const [attemptedtiqMcq,setAttemptedIqMcq] = useState('');
const [attemptedbasicMathsMcq,setAttemptedbasicMathsMcq] = useState('');
const [attemptedenglishMcq,setAttemptedenglishMcq] = useState('');



const [correctmathsMcq,setCorrectMathsMcq] = useState('');
const [correctiqMcq,setCorrectIqMcq] = useState('');
const [correctbasicMathsMcq,setCorrectbasicMathsMcq] = useState('');
const [correctenglishMcq,setCorrectenglishMcq] = useState('');

const [result,setResult] = useState('');




function handleCalculate () {
const mathsScore = (correctmathsMcq * 50)/50 ;
const iqScore = (correctiqMcq * 20) /20;
const basicMathsScore = (correctbasicMathsMcq * 20)/20;
const english = (correctenglishMcq*0.3333);

console.log(english + " from english");
const totalCorrect= (attemptedmathsMcq-correctmathsMcq) + (attemptedtiqMcq - correctiqMcq) + (attemptedbasicMathsMcq - correctbasicMathsMcq)  ;


const engNeg = ( attemptedenglishMcq-correctenglishMcq) * 0.0825;

console.log(engNeg + " total negative mcqs");



    const negativeMarks= (totalCorrect * 0.25);

const testScore =
           ( mathsScore  + iqScore+  basicMathsScore + english) - (engNeg + negativeMarks);

        setResult(testScore.toFixed(0));
    } 

return (
        <div className='subject'>
            <h1>Test Score Calculator</h1><br/><br/>
      



            {/* ********************Maths*******/}
            <div>

                <label htmlFor="Maths attempted"> Maths Attempted Mcqs</label><br /><br/>


              
          



                <Form.Control size="lg"  placeholder="Maths Attempted Mcqs" type="number"  value={attemptedmathsMcq} onChange={(e) => setAttemptedMathsMcq(e.target.value)}/><br/><br/>

            </div>


            <div>
                <label htmlFor="Maths attempted"> Maths Correct Mcqs</label><br /><br/>




                <Form.Control size="lg"  placeholder="Maths Correct Mcqs"type="number" value={correctmathsMcq} onChange={(e) => setCorrectMathsMcq(e.target.value)}/><br/><br/>

            </div>
{/* 
            {/* ********************IQ**********************/}

            <div>
                <label htmlFor="Maths attempted"> IQ Attempted Mcqs</label><br /><br/>



              <br />


<Form.Control size="lg"  placeholder="IQ Attempted Mcqs "type="number" value={attemptedtiqMcq} onChange={(e) => setAttemptedIqMcq(e.target.value)}/>      <br />
             
            </div>


            <div>  <label htmlFor="Maths attempted"> IQ Correct Mcqs</label><br />      <br /></div>

            <Form.Control size="lg"  placeholder="IQ Correct Mcqs"type="number" className='a' value={correctiqMcq} onChange={(e) =>setCorrectIqMcq(e.target.value)}/>
             

          
            
            
            <br /><br />
            {/* ********************Basic Maths**********************/}

            <div>  <label htmlFor="Maths attempted"> Basic Math Attempted Mcqs</label><br /><br/>



            <Form.Control size="lg"  placeholder=" Basic Math Attempted Mcqs"type="number"  value={attemptedbasicMathsMcq} onChange={(e) => setAttemptedbasicMathsMcq(e.target.value)}/>
             




            
            <br /><br /> 
            </div>

            <div><label htmlFor="Maths attempted"> Basic Math Correct Mcqs</label><br /><br/>
            
         
            
            <Form.Control size="lg"  placeholder=" Basic Math Correct Mcqs"type="number" id="mathsMarks" value={correctbasicMathsMcq} onChange={(e) => setCorrectbasicMathsMcq(e.target.value)}/>
             


            
            <br /><br />
            </div>
            {/* ********************English**********************/}

            <div><label htmlFor="Maths attempted"> English Attempted Mcqs</label><br /><br/>
            
         
            
            
            
            
            <Form.Control size="lg"  placeholder="English Attempted Mcqs"type="number" id="mathsMarks" value={attemptedenglishMcq} onChange={(e) => setAttemptedenglishMcq(e.target.value)}/>
             
 
            
            
            
            
            <br /><br />
            </div>

            <div><label htmlFor="Maths attempted"> English Correct Mcqs</label><br /><br/>
            
            

            <Form.Control size="lg"  placeholder="English Correct Mcqs" type="number" id="mathsMarks" value={correctenglishMcq} onChange={(e) => setCorrectenglishMcq(e.target.value)}/>
             
 
            
            
            <br /><br />
            </div>


  



 
 <Button className="buttone" variant="warning" size="lg" onClick={handleCalculate}>Calculate
      
      </Button>
 <br />
            <div>
                <label htmlFor="result">Total Score in Test:</label><br />
                
                
                
            <Form.Control size="lg"  placeholder="Result" type="number" id="result" value={result} readOnly/>
             
 
            
                
            <br/><br />
            </div>



        </div>
    )
}


export default Agg;