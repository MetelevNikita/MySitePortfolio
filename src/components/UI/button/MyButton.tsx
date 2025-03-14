import { FC } from 'react'

// css

import styles from '@/components/UI/button/MyButton.module.css'

interface MyButtonProps {
  type: "button" | "submit" | "reset" | undefined
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
  text: string

}

const MyButton: FC<MyButtonProps> = ({ type, onClick, disabled, text}) => {
  return (
    <button type={type} onClick={onClick} className={styles.button} disabled={disabled}>{text}</button>
  )
}

export default MyButton
