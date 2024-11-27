import { useState } from 'react'
import './App.css'
import Avinash from './Avinash'
import Card from './Card'
import BgChanger from './BgChanger'
import Passwordgenerator from "./Passwordgenerator"


function App() {

  return (
    <>
    {/* <Avinash/> */}
    {/* <h1 className='bg-success w-25 mt-5 text-center fs-3 '>Tailwind Css And Props</h1>
    <Card name={"User1"} email={"User1@gmail.com"} />
    <Card name={"User2"} email={"User2@gmail.com"} />
    <Card name={"User3"} /> */}
    {/* <BgChanger/> */}
    <Passwordgenerator/>
    </>
  )
}

export default App
