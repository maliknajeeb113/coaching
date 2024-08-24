import './App.css'
import { Contact } from './components/Contact'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <div className='flex flex-col justify-center items-center'>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Testimonial/>
    <Contact/>
      
    </div>
  )
}

export default App
