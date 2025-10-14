import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo of freeCodeCamp'/>
      </div>
      <div className='main-container'>

      </div>
    </div>
  );
}

export default App;
