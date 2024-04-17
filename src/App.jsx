import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Profile from './components/profile/Profile'
import Task from './components/task/Task'


function App() {

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      {/* <Home /> */}
      <Profile />
      {/* <Task /> */}
    </div>
  )
}

export default App