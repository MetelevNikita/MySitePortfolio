import { FC } from "react"
import { useDroppable } from '@dnd-kit/core'

// css

import styles from './Column.module.css'

// components

import Card from "@/components/Card/Card"

// types

import { postType } from "@/types/postType"

interface ColumnProps {
  column: any,
  list: postType[]
}


const Column: FC<ColumnProps> = ({ column, list}) => {
  const { setNodeRef } = useDroppable({
    id: column.id
  })


  return (
    <div className={styles.columns_container}>

      <div className={styles.columns_title}>{column.title}</div>

      {/* TODO: add tasks */}


      <div className={styles.columns_box} ref={setNodeRef}>

      {list.map((item) => {
        return <Card key={item.id} id={item.id} title={item.title} body={item.body} status={item.status}></Card>
      })}

      </div>

    </div>
  )
}

export default Column
