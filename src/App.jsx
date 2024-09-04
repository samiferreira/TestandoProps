import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/input'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Input title ="Email" placeholder ="insira seu Email" type ="Email"/>
        <Input title ="Nome" placeholder ="insira seu Nome" type ="text"/>
        <Input title ="Senha" placeholder ="insira sua senha" type ="password"/>
        <Button title ="cadastar"/>
      </main>
    </>
  )
}

export default App
