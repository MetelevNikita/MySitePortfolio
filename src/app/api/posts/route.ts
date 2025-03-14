import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

// db

import postDb from '@/database/posts.json'

//


export const GET = async () => {
  try {

    const cookiesStore = await cookies()
    const token = cookiesStore.get('token')?.value


    if(!token) {
      return NextResponse.json([], {status: 401})
    }


    if (!postDb) {
      console.log("No Posts Found");
      return NextResponse.json([])
    }

    return NextResponse.json(postDb)

  } catch (error) {
    console.log(error);
    return NextResponse.json([])
  }
}