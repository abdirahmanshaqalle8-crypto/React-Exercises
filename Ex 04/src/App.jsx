import { useState} from 'react'

function App() {

  const [isOn, setIsOn] = useState(false);

  const toggle = ()=> {
    setIsOn(!isOn);
  }

  return (
    <>
      <p>The Button is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>{isOn ? 'Turn OFF' : 'Turn ON'}</button>
    </>
  )
}



export default App

