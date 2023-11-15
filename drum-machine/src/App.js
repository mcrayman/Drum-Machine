import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const drumpad = [
    {
      key: 1,
      text: 'Q',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      key: 2,
      text: 'W',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      key: 3,
      text: 'E',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      key: 4,
      text: 'A',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      key: 5,
      text: 'S',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      key: 6,
      text: 'D',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: 7,
      text: 'Z',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      key: 8,
      text: 'X',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      key: 9,
      text: 'C',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ]

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ border: '2px solid red' }} id="drum-machine">
      <div id="display"></div>
        <div className='drum-pads'>
          {drumpad.map((drum) => <button className='drum-pad' id={drum.text}>{drum.text}</button>)}
        </div>    
      </div>
  );
}

export default App;
