import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
const [things , setThings] = React.useState( ["Thing1" ,"Thing2","Thing3"] )

const arrElements = things.map(thing => <p >{thing}</p> ) 

function addItem() {
const newText = `Thing ${things.length+1}`
 setThings(prevState => [...prevState,newText])
  
}

  return(
    <div>
      <button  darkMode = {true}  onClick = {addItem}>Add item</button>
      {arrElements}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
