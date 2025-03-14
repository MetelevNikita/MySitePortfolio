'use client'

import { FC, useState, useActionState } from 'react'
import { redirect } from 'next/navigation'

// css

import styles from '@/components/Form/Form.module.css'

// components

import MyInput from '@/components/UI/Input/MyInput'
import MyButton from '@/components/UI/button/MyButton'

//


const login = async (formData: any) => {

  const loginText = formData.get('login')
  const passwordText = formData.get('password')

  console.log('loginText: ', loginText)
  console.log('passwordText: ', passwordText)

  const responce = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({email: loginText, password: passwordText})
  })

  const data = await responce.json()
  console.log('data: ', data)

  if (data.message === 'access') {
    sessionStorage.setItem('user', data.user)
    return redirect('/main')
  } else {
    alert('Не правильный логин или пароль!')
    return redirect('/')
  }




}



//

const Form: FC = () => {
  return (

      <form className={styles.form_container} action={login}>

      <div className={styles.form_title}>Войдите в учетную запись</div>

      <MyInput name={'login'} placeholder={'Email'} type={'text'} />
      <MyInput name={'password'} placeholder={'Ваш пароль'} type={'password'}/>

      <div className={styles.form_btns}>

        <MyButton type={'submit'} disabled={false} text={'Войти'} onClick={() => {console.log('click')}}/>
        <MyButton type={'submit'} disabled={false} text={'Войти'} onClick={() => {console.log('click')}}/>

      </div>

      </form>

  )
}

export default Form
