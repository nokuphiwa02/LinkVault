import React, { useState } from 'react'



export const LinkList = () => {

const [title, setTitle] = useState('');

const [url, setUrl] = useState('');

const [description, setDescription] = useState('');

const [tags, setTags] = useState(''); 


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




return(<div >
    <input type="text" 
      alt="Tittle"
      value={title}
      placeholder='write your tittle'
    onChange= { handleInputChange_title }/> 

    <input type="text" 
      alt="Tittle"
      value={url}
      placeholder='write your tittle'
      onChange= { handleInputChange_url }/>


      <input type="text" 
      alt="Tittle"
      value={description}
      placeholder='write your tittle'
      onChange= { handleInputChange_description}/>

      <input type="text" 
      alt="Tittle"
      value={tags}
      placeholder='write your tittle'
      onChange= { handleInputChange_tags}/>                              

</div>);

}
export default LinkList