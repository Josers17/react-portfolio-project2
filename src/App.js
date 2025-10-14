import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo of freeCodeCamp'/>
      </div>
      <div className='main-container'>
        <Counter 
          numClicks={numClicks}
        />
        <Button
          isButtonClick={true}
          text='Click'
          handleClick={handleClick}>
        </Button>
        <Button
          isButtonClick={false}
          text='Restart'
          handleClick={restartCounter}>
        </Button>
      </div>
    </div>
  );
}

export default App;
