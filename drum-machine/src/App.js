import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const drumPad = [
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

  const [name, setName] = useState('Kick-\'n-hat');
  const [hoveredDrum, setHoveredDrum] = useState(null);
  const [activeDrum, setActiveDrum] = useState(null);
  const [volume, setVolume] = useState(25); // Initial volume set to 50
  const [padEnabled, setPadEnabled] = useState(true); // State to control the pad's functionality

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!padEnabled) return; // Do not process key events if pad is disabled
      const pressedKeyCode = event.key.toUpperCase();
      playSound(pressedKeyCode);
      setActiveDrum(pressedKeyCode);
      setName(drumPad.find((drum) => drum.text === pressedKeyCode)?.string || '----');
      setTimeout(() => {
        setActiveDrum(null);
      }, 250);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [padEnabled]);

  useEffect(() => {
    const audioElements = document.querySelectorAll('.clip');
    audioElements.forEach((audio) => {
      audio.volume = volume / 100;
    });
  }, [volume]);

  function playSound(selector) {
    const audio = document.getElementById(selector);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  return (
    <div className="App d-flex justify-content-center align-items-center vh-100" id="drum-machine">
      <div className="grid-container">
        <div id="display" class="justify-content-center align-items-center vstack gap-5">
          <div id="name">{name}</div>
          <label className='switch'>
            {' '}
            <input
              type="checkbox"
              checked={padEnabled}
              onChange={() => setPadEnabled(!padEnabled)}
            />
            <span class="slider round"></span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            style={{ width: '80%' }}
          />
        </div>
        <div className="grid-item drum-pads">
          {drumPad.map((drum) => (
            <button
              style={{
                backgroundColor: hoveredDrum === drum.src || activeDrum === drum.text ? drum.style : '',
                color: drum.style
              }}
              key={drum.src}
              onClick={() => {
                if (padEnabled) {
                  playSound(drum.text);
                  setName(drum.string);
                }
              }}
              onMouseEnter={() => setHoveredDrum(drum.src)}
              onMouseLeave={() => setHoveredDrum(null)}
              className="drum-pad"
              id={drum.src}
              disabled={!padEnabled}
            >
              {drum.text}
              <audio className="clip" id={drum.text} src={drum.src}></audio>
            </button>
          ))}
        </div>
      </div>
      <div id='signature'>Matthew McMeans</div>
    </div>
  );
}


export default App;
