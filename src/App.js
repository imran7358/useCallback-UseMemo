
import './App.css';
import React, {useCallback,useMemo,useState} from 'react';
import randomColor from 'randomcolor';
import randomLetter from "random-letter";
import Color from './Color';
import Letter from './Letter';
function App(props) {
  const [color, setColor] = useState("#fff")
  const [letter, setLetter] = useState("a")
  const callbackColorChange = useCallback(()=> setColor(randomColor()), [])
  const callbackLetterChange = useCallback (()=> setLetter(randomLetter()),[])

  const memoColor = useMemo(()=>
     <Color handlechange = {callbackColorChange} color ={color}/>,
    [color, callbackColorChange])

  const memoLetter = useMemo(()=>
    <Letter handlechange = {callbackLetterChange} letter = {letter}/>,
    [letter, callbackLetterChange]
)
  return (
    <div className="App">
    {memoColor}
    {memoLetter}
    <hr/>
    <h1 style={{ color }}>{letter}</h1>
    </div>
  );
}

export default App;
