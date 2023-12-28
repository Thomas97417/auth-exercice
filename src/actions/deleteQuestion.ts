"use server"
import { revalidatePath } from "next/cache"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const deleteQuestion = async (id: number) => {
  await prisma.questions.delete({
    where: {
      id: id,
    }
  })
  revalidatePath('/admin')
}