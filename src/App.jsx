import './App.css'
import Contact from './components/Contact'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <div className='flex flex-col justify-center items-center gap-y-32'>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App
