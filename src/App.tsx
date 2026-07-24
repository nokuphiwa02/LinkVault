import { Navbar} from './Navbar/Navbar'
import  { AddLinkForm } from './addLinkForm/AddLinkForm'
import './App.css'
import { type RowProps } from './types/types'
import { useState } from 'react'
import { ListLinks } from './Row/ListLinks'
// import styles from './App.css'



function App(){

  const [links, setLinks] =useState<RowProps[]>(()=>{
    try {
      const savedLinks = localStorage.getItem('links')
      return savedLinks ? JSON.parse(savedLinks) : []
    } catch (error) {
      console.log(error)
      return []
    }
  })

  const add= (newLink: RowProps) =>{ 
    setLinks((prevLinks)=>{
      const currentArray = Array.isArray(prevLinks) ? prevLinks: []
      const updatedArray = [...currentArray, newLink]
      localStorage.setItem('links',JSON.stringify( updatedArray))
      return updatedArray
    })
  }

   const Delete= (id: number)=>
   setLinks((links.filter(link=> link.id !==id))
       
   )

  

  return (
    <>
    <div className='container'>
      <Navbar/>
      <AddLinkForm onSave={add} />
    <ListLinks links={links} onDelete ={Delete}/>
      </div>
    </>
  )
}

export default App
