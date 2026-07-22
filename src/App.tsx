import { Navbar} from './Navbar/Navbar'
import  { AddLinkForm } from './addLinkForm/AddLinkForm'
import './App.css'
import { type RowProps } from './types/types'
import { useState } from 'react'



function App(){

  const [links, setLinks] =useState <RowProps[]>([])

  const add= (newLink: RowProps) =>{ 
    setLinks([...links, newLink])
  }

  return (
    <>
      <Navbar/>
      <AddLinkForm onSave={add}/>
      
    </>
  )
}

export default App
