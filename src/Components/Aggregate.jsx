
    
    import "./Aggregate.css";

import React, { useState } from "react";
import { Button,  Form } from 'react-bootstrap';

function Aggregate() {
  const [fscMarks, setFscMarks] = useState(0);
  const [testMarks, setTestMarks] = useState(0);
  const [aggregate, setAggregate] = useState(0);

  const calculateAggregate = () => {
    const obtainedMarks = (fscMarks * 0.5) + (testMarks * 0.5);
    setAggregate(obtainedMarks);
  }

  return (

    

    <div className="aggregate-calculator s">
      <label htmlFor="fsc-marks " className="f">Obtained marks in Fsc in Percentage:</label><br/>
   
      <Form.Control size="lg"  placeholder="Obtained marks in Fsc in Percentage"  type="number" id="fsc-marks" className="input-field" value={fscMarks} onChange={(e) => setFscMarks(e.target.value)}/>
      <br/><br/>


      <label htmlFor="test-marks" className="f">Obtained marks in test:</label><br/>
      


      <Form.Control size="lg"  placeholder="Obtained marks in test"  type="number" id="test-marks" className="input-field" value={testMarks} onChange={(e) => setTestMarks(e.target.value)}/><br/><br/>






      <Button className="button" variant="warning" size="lg" onClick={calculateAggregate}>Calculate Aggregate
      
      </Button><br/>

      <h4 className="h">Aggregate: {aggregate}</h4>
    </div>
  );
}

export default Aggregate;














