import  "./AddLinkForm.module.css";
import React, { useState } from 'react'
import { Input } from '../Input/Input'
import styles from './AddLinkForm.module.css'
import type { RowProps } from "../types/types";

type AddLinkFormProps ={
  onSave: (link:RowProps ) =>void

}
 
export const AddLinkForm:React.FC<AddLinkFormProps>  = ({onSave}) => {
  const [title, setTitle] = useState('');
  
  const [url, setUrl] = useState('');
  
  const [description, setDescription] = useState('');
  
  const [tags, setTags] = useState(''); 

  const handleSave = () =>  {
    const newLink:RowProps= {
      id: Date.now(),
      title,
      url,
      description ,
      tags, 
    }
    onSave(newLink)
    setTitle('');
    setUrl('');
    setDescription('');
    setTags('');
  }
  
  const handleInputChange_title=(event: React.ChangeEvent<HTMLInputElement> ) =>{
  setTitle (event.target.value);
  }
  
  const handleInputChange_url=(event: React.ChangeEvent<HTMLInputElement> ) =>{
  setUrl (event.target.value);
  }
  
  const handleInputChange_description=(event: React.ChangeEvent<HTMLInputElement> ) =>{
  setDescription (event.target.value);
  }
  const handleInputChange_tags=(event: React.ChangeEvent<HTMLInputElement> ) =>{
  setTags (event.target.value);
  }
  
  // const handleSubmit = () => {
  //   onSave (title ,url , description, tags)
  // }
  

  
return(<div >
   <div className={styles.addLink}>
    < Input 
      label='title:'
      value={title}
      placeholder='write your tittle'
    onChange= { handleInputChange_title }/> 

    < Input 
     label= 'url:'
      value={url}
      placeholder='write your tittle'
      onChange= { handleInputChange_url }/>


      < Input 
      label= 'description:'
      value={description}
      placeholder='write your tittle'
      onChange= { handleInputChange_description}/>

      < Input 
      label= 'tags:'
      value={tags}
      placeholder='write your tittle'
      onChange= { handleInputChange_tags}/>                              

      <button onClick={handleSave}
        className= {styles.btnAdd} >
        Add Link
      </button>
      </div>
       


</div>);

}
export default AddLinkForm;
