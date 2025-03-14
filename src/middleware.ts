import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



const protectRoutes = ['/main', '/']
const publicRoutes = ['/login']



export const middleware = (request: NextRequest) => {


  const path = request.nextUrl.pathname
  const isProtected = protectRoutes.includes(path)
  const isPublic = publicRoutes.includes(path)
  const token = request.cookies.get('token')?.value || ''

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if(isPublic && token) {
    return NextResponse.redirect(new URL('/main', request.url))
  }

  return NextResponse.next()

}

export const config = {
  matchers: '/'
}