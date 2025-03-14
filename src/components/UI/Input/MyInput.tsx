import { FC } from 'react'

// css

import styles from '@/components/UI/Input/MyInput.module.css'

//

interface MyInputProps {
  name: string | undefined,
  type: string,
  placeholder: string
}


const MyInput: FC<MyInputProps> = ({ type, name, placeholder }) => {
  return (

    <input className={styles.input} name={name} type={type} placeholder={placeholder} autoComplete="off"/>

  )
}

export default MyInput
