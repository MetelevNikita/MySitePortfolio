"use client"

import { FC, useEffect, useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'

// css

import styles from '@/app/main/styles.module.css'

//

import { Container, Row, Col } from 'react-bootstrap'

// components

import Column from '@/components/Column/Column'

// type

import { postType } from '@/types/postType'
import { DragEndEvent } from '@dnd-kit/core'


interface ColumnProps {
  id: string,
  title: string,
}


const Main: FC = () => {


  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    allPosts()
  }, [])

  const columns: ColumnProps[] = [
    {
      id: 'received',
      title: 'Входящие',
    },

    {
      id: 'work',
      title: 'В работе',
    },

    {
      id: 'complete',
      title: 'Готово',
    },

    {
      id: 'archive',
      title: 'Архив',
    }
  ]

  const allPosts = async () => {
    try {

      const user = sessionStorage.getItem('user')
      console.log(user)

      const responce = await fetch('http://localhost:3000/api/posts')
      const data = await responce.json()

      const actualList = data.posts.filter((item: postType) => {return item.author === user})
      setPosts(actualList)

    } catch (error) {
      console.log(error);
    }
  }


  const handleDragEnd = (e: DragEndEvent) => {

    const { active, over } = e

    if(!over) return

    const taskId = active.id as string
    const newStatus = over.id

    setPosts(() => posts.map((item: any) => (item.id === taskId ? {...item, status: newStatus} : item)))

  }



  return (
    <Container>
      <Row>


          <DndContext onDragEnd={handleDragEnd}>

              {columns.map((column: ColumnProps, index: number): React.ReactNode => {
                return (
                  <Col key={column.id} md={3}><Column column={column} list={posts.filter((item: postType) => {return item.status === column.id})}></Column></Col>
                )
              })}

          </DndContext>

      </Row>
    </Container>
  )
}

export default Main
