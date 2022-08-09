import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import "./index.css";

const App = () => {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  const inp = () => {}
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div className='quantity'>
          <a className='quantity__minus' title='Decrement' onClick={() => { dispatch(decNumber()) }}><span> - </span></a>
          <input name='quantity' type="text" value={mystate} className='quantity__input' onChange={inp}/>
          <a className='quantity__plus' title='Increment' onClick={() => { dispatch(incNumber(5)) }}><span> + </span></a>
        </div>
      </div>
    </>
  )
}

export default App;     
