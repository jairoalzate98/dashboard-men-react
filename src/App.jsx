import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import FirstQuestion from './pages/FirstQuestion'
import SecondQuestion from './pages/SecondQuestion'
import ThridQuestion from './pages/ThridQuestion'



const App = () => {
  return (
    <div>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='first-question' exact Component={FirstQuestion} />
            <Route path='second-question' exact Component={SecondQuestion} />
            <Route path='third-question' exact Component={ThridQuestion} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App

