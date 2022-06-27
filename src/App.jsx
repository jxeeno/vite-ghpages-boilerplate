import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
        <button onClick={() => setCounter(counter+1)}>Clicked {counter} times</button>
    </div>
  )
}

export default App
