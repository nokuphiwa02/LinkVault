import React from "react";
import { type RowProps } from "../types/types";
import styles from "./Row.module.css";

type RowPropsWithDelete = RowProps & {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};
export const Row: React.FC<RowPropsWithDelete> = ({
  id,
  title,
  url,
  description,
  tags,
  onDelete,
  onEdit,
}) => {
  return (
    <>
    
      <tr>
        <td>{title}</td>
        <td>{url}</td>
        <td>{description}</td>
        <td>{tags}</td>
        <td className={styles.buttons}>
          <button className={styles.editBtn} onClick={() => onEdit(id)}>
            Edit
          </button>
          <button className={styles.deleteBtn} onClick={() => onDelete(id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
