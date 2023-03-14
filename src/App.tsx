import './App.css'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './home/Create'
import BlogDetails from './home/BlogDetails'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs'>
              <Route path=':id' element={<BlogDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
