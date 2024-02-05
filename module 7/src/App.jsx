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
import ChangeStyle from '../Exercises/useEffectStyle'
import { UserProvider } from '../CONTEXT/userContext'
import LoginForm from '../Exercises/login form'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './App Routes/AppRoutes'
import NavBar from './App Routes/pages/NavBar'
import EmojiChanger from '../Emoji Context/emoji'
import { EmojiProvider } from '../Emoji Context/emoji'
import MUIForm from '../MUI STYLING/MUI form'
import BasicGrid from '../MUI STYLING/MUI grid'
import CustomCard from '../MUI STYLING/MUI card'
import RecipeReviewCard from '../MUI STYLING/MUI Complex card'
import SignIn from '../MUI STYLING/Sign In temp'
// import TealTheme from '../MUI STYLING/theme'
import { TealTheme } from '../MUI STYLING/theme'
import { ThemeProvider } from '@emotion/react'



function App() {


  return (
    <>
    <ThemeProvider theme={TealTheme}>

    <BasicGrid>
    </BasicGrid>
    </ThemeProvider>

    {/* <SignIn></SignIn> */}
          {/* <RecipeReviewCard></RecipeReviewCard> */}

{/* <CustomCard></CustomCard>
    <MUIForm></MUIForm> */}
    {/* <EmojiProvider>
<EmojiChanger></EmojiChanger>
<UserProvider>

    <LoginForm></LoginForm>
  </UserProvider> */}

{/* </EmojiProvider> */}




  <UserProvider>
    {/* <NavBar></NavBar>

<AppRoutes /> */}

</UserProvider>


{/* <ClockDisplay/>
<ActivityFinder></ActivityFinder> */}
{/* <RefCounter></RefCounter> */}

{/* <VideoPlayer></VideoPlayer> */}
{/* <StatefulCounter></StatefulCounter>
<ToDoList></ToDoList> */}
{/* <br></br>
<SyncInputs></SyncInputs>
<br></br>
<RefForm></RefForm> */}
  {/* <PostListReducer></PostListReducer> */}
  {/* <ChangeStyle></ChangeStyle> */}




  

  {/* <BitcoinRates></BitcoinRates> */}


    </>
  )
}

export default App
