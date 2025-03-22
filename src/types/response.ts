type errorSources = {
  path: string
  message: string
}
export interface TResponse {
  success: boolean
  message: string
  errorSources?: errorSources[]
  err?: any
  data?: any
}

interface ITeacher {
  bio: string
  profileImage?: string
  subjects: string[]
  gradeLevel: string
  hourlyRate: number
  availability: string
  address: string
  tutionType: 'Online' | 'Offline' | 'Both'
  bankAccout: string
  socialLinks?: {
    facebook: string
    linkedin: string
    twitter: string
    youtub: string
  }
  vedioResume?: string
}

export type TUser = {
  name: string
  email: string
  password: string
  role: 'student' | 'teacher' | 'admin'
  isDeleted: boolean
  accountStatus: 'active' | 'block'
  referencedModel: 'teacher' | 'student'
  referencedUser?: ITeacher
  createdAt: string
  updatedAt: string
}
