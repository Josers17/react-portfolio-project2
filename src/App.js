import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';

function App() {

  const handleClick = () => {
    console.log('Clic');
  }

  const restartCounter = () => {
    console.log('Restart');
  } 


  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo of freeCodeCamp'/>
      </div>
      <div className='main-container'>
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
