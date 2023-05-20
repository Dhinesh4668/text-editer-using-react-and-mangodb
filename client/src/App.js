import React from 'react'
import {BrowserRouter as Router,Route, Routes,redirect as Redirect} from "react-router-dom"
import Editer from './Components/Editer'
// import uuid package
import {v4 as uuidv4} from 'uuid'

// acces the uuid
uuidv4();
const App = () => {
 
  return (
  <Router>
    <Routes>
      <Route path={`/`} element={<Editer />} />
    </Routes>
  </Router>
  )
}

export default App