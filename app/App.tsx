'use client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import MainPage from "@/app/MainPage"
import Navbar from "@/app/NavBar"
import NavbarMobile from "@/app/NavBarMobile"

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div>{/*
      <Router>
        <Navbar toggle={toggle}/>
        <NavbarMobile isOpen={isOpen} toggle={toggle}/>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router> */}   
    </div>    
  )
}

export default App


/*
import RotatingSphere from "@/src/components/RotatingSphere";
import Image from "next/image";

import { useState } from 'react'

export default function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <RotatingSphere />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Olá, sou o dev desta página,{" "}
            <a
              href="https://www.linkedin.com/in/elvis-silva-dev/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Elvis Silva
            </a>{" "}
            e já já as coisas estarão legais por aqui. 🚀🚀
          </h1>
        </div>
      </main>
    </div>
  );
}
*/