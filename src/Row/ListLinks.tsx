import React from 'react'
import {type RowProps } from '../types/types'
import { Row } from './Row'

type ListLinksProps= {
    links: RowProps[]
}

export const ListLinks:React.FC<ListLinksProps> = ({links}) => {
  return (
   <table>
    <thead>
     <th>
     Title
     </th>
      <th>
    url
     </th>
      <th>
     description
     </th>
      <th>
     tags
     </th>
     <th>
        Buttons
     </th>
    </thead>
    <tbody>
        {links.map((link) => (<Row key={link.id} {...link}/>))}
    </tbody>

    
   </table>
  )
}
