'use server'

import { TResponse, TUser } from '@/types'
import { cookies } from 'next/headers'
import { FieldValues } from 'react-hook-form'
import { jwtDecode } from 'jwt-decode'
import { revalidateTag } from 'next/cache'
// login a user
export const loginUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  const result = (await res.json()) as TResponse
  if (result.success) {
    ;(await cookies()).set('accessToken', result.data.accessToken)
    revalidateTag('logedUser')
  }
  return result
}

// register new user
export const registerUser = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/create-account`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
  return (await res.json()) as TResponse
}

export const getLogedUser = async () => {
  const res = (await cookies()).get('accessToken')?.value
  let decoded = null
  if (res) {
    decoded = await jwtDecode(res)
    const user = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/teacher/${decoded.userEmail}`,
      { next: { tags: ['logedUser'] } }
    )
    const result = await user.json()
    return result?.data as TUser
  } else {
    return null
  }
}

export const logOutUser = async () => {
  try {
    ;(await cookies()).delete('accessToken')
    revalidateTag('logedUser')
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
