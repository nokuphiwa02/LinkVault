import "./AddLinkForm.module.css";
import React, { useState } from "react";
import { Input } from "../Input/Input";
import styles from "./AddLinkForm.module.css";
import type { RowProps } from "../types/types";

type AddLinkFormProps = {
  onSave: (link: RowProps) => void;
  onEdit: (link: RowProps) => void;
  editingLink?: RowProps | null;
};

export const AddLinkForm: React.FC<AddLinkFormProps> = ({
  onSave,
  onEdit,
  editingLink,
}) => {
  const [title, setTitle] = useState(editingLink?.title ?? "");

  const [url, setUrl] = useState(editingLink?.url ?? "");

  const [description, setDescription] = useState(
    editingLink?.description ?? "",
  );

  const [tags, setTags] = useState(editingLink?.tags ?? "");

  const handleSave = () => {
   if (!title.trim() || !url.trim()) return;
   
     if (editingLink) {
      const updatedLink: RowProps = {
     id: editingLink.id, 
      title,
      url,
      description,
      tags,
    };
      onEdit(updatedLink);
  }
      else{
    const newLink: RowProps = {
      id: Date.now(),
      title,
      url,
      description,
      tags,
    };
     onSave(newLink);
  }

 
    setTitle("");
    setUrl("");
    setDescription("");
    setTags("");
  };

  const handleInputChange_title = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTitle(event.target.value);
  };

  const handleInputChange_url = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUrl(event.target.value);
  };

  const handleInputChange_description = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription(event.target.value);
  };
  const handleInputChange_tags = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTags(event.target.value);
  };

  return (
    <div>
      <div className={styles.addLink}>
        <Input
          label="title:"
          value={title}
          placeholder="write your tittle"
          onChange={handleInputChange_title}
        />

        <Input
          type="url"
          error="Please enter a valid URL"
          label="url:"
          value={url}
          placeholder="type/paste your link"
          onChange={handleInputChange_url}
        />

        <Input
          label="description:"
          value={description}
          placeholder="write your description"
          onChange={handleInputChange_description}
        />

        <Input
          label="tags:"
          value={tags}
          placeholder="write your tag"
          onChange={handleInputChange_tags}
        />

        <button onClick={handleSave} className={styles.btnAdd}>
         {editingLink ? "Update Link" : "Add Link"}
        </button>
      </div>
    </div>
  );
};
export default AddLinkForm;
