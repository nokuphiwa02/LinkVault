import React from 'react'
import  {type RowProps } from '../types/types'
import './Row.module.css'


type RowPropsWithDelete = RowProps & {
    onDelete: (id: number) => void;
  };
export const Row:React.FC<RowPropsWithDelete> = ({id, title ,url ,description, tags, onDelete}) => {
  return (
   <>
      <tr>
        <td >
            {title}
        </td>
        <td >
            {url}
        </td>
        <td >
            {description}
        </td>
        <td >
            {tags}
        </td>
        <td  >
             <button>
             Edit
            </button>
             <button onClick={() => onDelete(id)}>
              Delete
            </button >
        </td>
      </tr>
   </>
  )
}
