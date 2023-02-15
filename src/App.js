import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PlayerHome from './layouts/PlayerHome'
import Display from './layouts/Display'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerHome />} />
          <Route path="/display" element={<Display />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
