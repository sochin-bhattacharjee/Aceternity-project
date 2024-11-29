import './App.css'
import { ThreeDCardDemo } from './test'
import { AnimatedPinDemo } from './components/test2';
import { FloatingDockDemo } from './components/float-nav';
import { CardHoverEffectDemo } from './components/hoverCard';
import { AuroraBackgroundDemo } from './components/auroraBg';



function App() {

  return (
    <div>
      <h1 className='text-4xl'>Hello</h1>
      <ThreeDCardDemo />
      <FloatingDockDemo/>
      <AnimatedPinDemo />
      <CardHoverEffectDemo/>
      <AuroraBackgroundDemo/>
    </div>
  )
}

export default App
