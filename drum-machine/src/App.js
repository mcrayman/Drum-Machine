import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const drumpad = [
    {
      key: 1,
      text: 'Q',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      style: 'red',
      string: 'Heater 1'
    },
    {
      key: 2,
      text: 'W',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      style: 'yellow',
      string: 'Heater 2'
    },
    {
      key: 3,
      text: 'E',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      style: 'blue',
      string: 'Heater 3'
    },
    {
      key: 4,
      text: 'A',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      style: 'green',
      string: 'Heater 4'
    },
    {
      key: 5,
      text: 'S',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      style: 'orange',
      string: 'Clap'
    },
    {
      key: 6,
      text: 'D',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      style: 'turquoise',
      string: 'Open-HH'
    },
    {
      key: 7,
      text: 'Z',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      style: 'purple',
      string: 'Kick-n\'-Hat'
    },
    {
      key: 8,
      text: 'X',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      style: 'white',
      string: 'Kick'
    },
    {
      key: 9,
      text: 'C',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      style: 'pink',
      string: 'Closed-HH'
    },  
  ]

  const [name, setName] = useState('');
  const [hoveredDrum, setHoveredDrum] = useState(null);

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    })
  
  }, [])

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.load();
    audio.play();
  }

  return (
    <div className="App d-flex justify-content-center align-items-center vh-100" id="drum-machine">
      <div id="display">{name}</div>
        <div className='drum-pads'>
          {drumpad.map((drum) => (
          <button 
          style={{ backgroundColor: hoveredDrum === drum.src ? drum.style : '' }} 
          key={drum.src} 
          onClick={() => {playSound(drum.text)}} 
          onMouseEnter={() => setHoveredDrum(drum.src)}
          onMouseLeave={() => setHoveredDrum(null)}
          className='drum-pad' id={drum.src}>{drum.text} 
          <audio className="clip" id={drum.text} src={drum.src}></audio>
          </button>))}
        </div>   
    </div>
  );
}

export default App;

// const handleClick = (sound) => {
//   let audio = new Audio(sound);
//   audio.load();
//   audio.play();
// }

// onClick={handleClick(drum.src)}