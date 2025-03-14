import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'


// token

import jwt from 'jsonwebtoken'

//

import db from '@/database/users.json'


//

const secretKey = process.env.SECRET_KEY || 'hui'

//


export const POST = async (req: NextRequest, res: any) => {
  try {

    const data = await req.json()
    console.log(data)

    const user = db.users.filter((value, index) => {
      return value.email === data.email && value.password === data.password
    })

    if (user.length > 0) {
      const token = jwt.sign({email: data.email}, secretKey, {expiresIn: '1h'})
      const cookiesStore = await cookies()
      cookiesStore.set('token', token, {expires: new Date(Date.now() + 3600000)})
      return NextResponse.json(
        { message: 'access', user: user[0].name },
        { status: 200 })

    } else {

      return NextResponse.json(
        { message: 'invalid' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.log(error)
  }

}


export const GET = async (req: NextRequest, res: any) => {
  try {

    const cookiesStore = await cookies()
    const token = cookiesStore.get('token')?.value

    if(!token) {
      return NextResponse.json({ message: 'access denied' }, { status: 401 })
    }

    return NextResponse.json(db)
  } catch (error) {
    console.log(error)
  }
}