import React from 'react'
import  {type RowProps } from '../types/types'
import './Row.module.css'




export const Row:React.FC<RowProps> = ({title ,url ,description, tags}) => {
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
             <button>
            Delete
            </button>
        </td>
      </tr>
   </>
  )
}
