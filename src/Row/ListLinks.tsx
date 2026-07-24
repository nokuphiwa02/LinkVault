import React from 'react'
import {type RowProps } from '../types/types'
import { Row } from './Row'
import styles from './Row.module.css'


type ListLinksProps= {
    links: RowProps[],
    onDelete:(id: number) => void
}

export const ListLinks:React.FC<ListLinksProps> = ({links ,onDelete}) => {
  return (
   <table >
    <thead>
     <th className={styles.link1}>
     Title
     </th>

      <th className={styles.link2}>
    url
     </th>
      <th className={styles.link3}>
     description
     </th>

      <th className={styles.link4}>
     tags
     </th>

     <th className={styles.btn}>
     Actions
     </th>
    </thead>
    <tbody>
        {links.map((link) => (<Row key={link.id} {...link} onDelete={onDelete} />))}
    </tbody>

    
   </table>
  )
}
