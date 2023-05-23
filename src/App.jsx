import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<button className="btn btn-active">Button</button>
<button className="btn btn-active btn-primary">Button</button>
<button className="btn btn-active btn-secondary">Button</button>
<button className="btn btn-active btn-accent">Button</button>
<button className="btn btn-active btn-ghost">Button</button>
<button className="btn btn-active btn-link">Button</button>
    </>
  )
}

export default App
