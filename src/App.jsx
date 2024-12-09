import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from "./components/Hero"
import Footer from './components/Footer'
import Bottles from './components/Bottles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar/>
      <Hero/>
      <Bottles/>
      <Footer/>
    </main>
  )
}

export default App
