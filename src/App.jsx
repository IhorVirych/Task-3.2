import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <main>
      <div className="timer"> </div>
        <div>
        Number of component renders: {count}
        </div>
      </main>
  )
}

export default App
