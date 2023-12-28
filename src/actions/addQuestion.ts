"use server"
import { revalidatePath } from "next/cache"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const addQuestion = async (formData: FormData) => {
  const question = formData.get('content')
  await prisma.questions.create({
    data: {
      question: question as string
    }
  })
  revalidatePath('/dashboard')
}
