import React from 'react'
import  {type RowProps } from '../types/types'



export const Row:React.FC<RowProps> = ({title ,url,description, tags}) => {
  return (
    <div>
    <table>
        <tr>
            <td>
                {title}
            </td>
             <td>
                {url}
            </td>
             <td>
                {description}
            </td>
             <td>
                 {tags}
            </td>
            <td>
                <button>
                    view
                </button>
            </td>
            <td>
                <button>
                    edit
                </button>
            </td>
            <td>
                <button>
                    delete
                </button>
            </td>
        </tr>
    </table>
    </div>
  )
}
