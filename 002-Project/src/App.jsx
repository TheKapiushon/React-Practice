import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RanNum from './components/RanNum'
import RanImg from './components/RanImg'
import RanColor from './components/RanColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RanNum/>
      <RanImg/>
      <div className="main-boxes--container">
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
        <RanColor/>
      </div>
    </>
  )
}

export default App
