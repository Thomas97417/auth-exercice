import AdminQuestions from '@/components/AdminQuestions'
import { PrismaClient } from '@prisma/client'


const page = async () => {
  const prisma = new PrismaClient()
  const questions = await prisma.questions.findMany()
  console.table(questions)
  return (
    <div className='flex flex-1 flex-col justify-center items-center bg-slate-300 p-4'>
      <h1 className='text-4xl font-bold mb-10'>Admin Area</h1>
      {/* Questions */}
      <AdminQuestions questions={questions} />
    </div>
  )
}

export default page