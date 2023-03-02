
import React from 'react';
import './App.css';

function App() {

  function showPopup(){
    document.querySelector('.full-screen').classList.remove('hidden');
  }
  
  function closePopup(){
    document.querySelector('.full-screen').classList.add('hidden');
  }
  

  return (
    <div>
      <h3>Let me tell you a bit about popups</h3>
      <button onClick={showPopup}>Show Popup</button>

      <div className="full-screen hidden flex-container-center">
        <h2 >Let me tell you about this thing!!</h2>
        <button onClick={closePopup}>Close Popup!</button>
      </div>
    </div>
  );

}

export default App;
