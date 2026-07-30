import { Navbar } from "./Navbar/Navbar";
import { AddLinkForm } from "./addLinkForm/AddLinkForm";
import "./App.css";
import { type RowProps } from "./types/types";
import { useState } from "react";
import { ListLinks } from "./Row/ListLinks";
// import styles from './App.css'

function App() {
  const [links, setLinks] = useState<RowProps[]>(() => {
    try {
      const savedLinks = localStorage.getItem("links");
      return savedLinks ? JSON.parse(savedLinks) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const add = (newLink: RowProps) => {
    setLinks((prevLinks) => {
      const currentArray = Array.isArray(prevLinks) ? prevLinks : [];
      const updatedArray = [...currentArray, newLink];
      localStorage.setItem("links", JSON.stringify(updatedArray));
      return updatedArray;
    });
  };

  const Delete = (id: number) =>
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.filter((link) => link.id !== id);
      localStorage.setItem("links", JSON.stringify(updatedLinks));
      return updatedLinks;
    });
  const [editingLink, setEditingLink] = useState<RowProps | null>(null);

  const editLink = (id: number) => {
    const link = links.find((link) => link.id === id);
    if (link) {
      setEditingLink(link);
    }

  };

  const updatedLink = (updatedLink: RowProps) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map((link) => (link.id === updatedLink.id ? updatedLink : link));
      localStorage.setItem("links", JSON.stringify(updatedLinks));
      return updatedLinks;
    });
  };

   const [ searchQ, setSearch] =useState('')
   const filteredLinks= links.filter(link=>
    link.title.toLowerCase().includes(searchQ.toLowerCase())|| 
     link.url.toLowerCase().includes(searchQ.toLowerCase())|| 
      link.description.toLowerCase().includes(searchQ.toLowerCase())|| 
       link.tags.toLowerCase().includes(searchQ.toLowerCase())
   );


  return (
    <>
      <div className="container">
        <Navbar onSearch= {setSearch}/>
        <AddLinkForm
          onSave={add}
          key={editingLink?.id ?? "add-link-form"}
            editingLink={editingLink} 
          onEdit={updatedLink}
        />
        <ListLinks links={ filteredLinks} onDelete={Delete} onEdit={editLink} />
      </div>
    </>
  );
}

export default App;
