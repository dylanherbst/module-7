import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from '../HOOKS/Clock'
import ClockDisplay from '../HOOKS/Display CLock'
import ActivityFinder from '../HOOKS/useEffect API'
import BitcoinRates from '../BITCOIN Exercise/Bitcoin rates'
import RefCounter from '../HOOKS/useRef Counter'
import VideoPlayer from '../HOOKS/useRef video'
import StatefulCounter from '../Exercises/stateful counter'
import ToDoList from '../Exercises/Dynamic ToDo list'
import SyncInputs from '../Exercises/synced inputs'
import RefForm from '../Exercises/Ref form'
import PostListReducer from '../REDUCER/reducer API'

function App() {


  return (
    <>
{/* <ClockDisplay/>
<ActivityFinder></ActivityFinder> */}
{/* <RefCounter></RefCounter> */}
<BitcoinRates></BitcoinRates>
{/* <VideoPlayer></VideoPlayer> */}
{/* <StatefulCounter></StatefulCounter>
<ToDoList></ToDoList>
<br></br>
<SyncInputs></SyncInputs>
<br></br>
<RefForm></RefForm> */}
  {/* <PostListReducer></PostListReducer> */}
    </>
  )
}

export default App
