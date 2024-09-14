import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from './Component/Components'
import { Todos } from './Component/Todos'
import { RecoilRoot } from 'recoil'
function App() {

  return (
   <div>
     <RecoilRoot>
     <Component></Component>
     <Todos ></Todos>
     </RecoilRoot>
   
   </div>
  )
}

export default App
