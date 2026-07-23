import React from 'react'
import  {type RowProps } from '../types/types'




export const Row:React.FC<RowProps> = ({title }) => {
  return (
   <>
      <tr>
        <td >
            {title}
        </td>
        <td>
            <button>
            View
            </button>
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
