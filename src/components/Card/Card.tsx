import { FC } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

// css

import styles from '@/components/Card/Card.module.css'

interface CardProps {
  id: string
  title: string
  body: string
  status: string

}





const Card: FC<CardProps> = ({ id, title, body, status}) => {


  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id
  })

  const style = transform ? {
    transform: CSS.Translate.toString(transform),
  } : undefined


  return (
    <div {...attributes} {...listeners} ref={setNodeRef} style={style} className={styles.card_container}>
      <div className={styles.card_id}>{id}</div>
      <div className={styles.card_title}>{title}</div>
      <div className={styles.card_body}>{body}</div>
    </div>
  )
}

export default Card
