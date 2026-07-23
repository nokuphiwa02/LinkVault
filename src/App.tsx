import { Navbar} from './Navbar/Navbar'
import  { AddLinkForm } from './addLinkForm/AddLinkForm'
import './App.css'
import { type RowProps } from './types/types'
import { useState } from 'react'
import { ListLinks } from './Row/ListLinks'
// import styles from './App.css'



function App(){

  const [links, setLinks] =useState <RowProps[]>([])

  const add= (newLink: RowProps) =>{ 
    setLinks([...links, newLink])
  }

  

  return (
    <>
    <div className='container'>
      <Navbar/>
      <AddLinkForm onSave={add}/>
      <ListLinks links={links} />
      </div>
    </>
  )
}

export default App
