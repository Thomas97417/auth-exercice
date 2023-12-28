import { addQuestion } from '@/actions/addQuestion'
import React from 'react'

import { PrismaClient } from '@prisma/client'

const page = async () => {
  const prisma = new PrismaClient()
  const questions = await prisma.questions.findMany()
  console.table(questions)
  return (
    <div className='flex flex-1 flex-col justify-center items-center bg-slate-300 p-4'>
      <h1 className='text-4xl font-bold mb-10'>Dashboard</h1>
      <form action={addQuestion} className='w-4/5'>
        <textarea name="content" className='w-full h-[150px] p-2' placeholder='Ask your question'/>
        <button className='w-full text-white bg-black rounded py-3'>Submit Question</button>
      </form>
      {/* Questions */}
      <div className='border mt-16 p-8'>
        {questions.map((question) => (
          <p key={question.id}>{question.question}</p>
        ))}
      </div>
    </div>
  )
}

export default page