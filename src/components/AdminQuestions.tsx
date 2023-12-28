"use client"
import { deleteQuestion } from "@/actions/deleteQuestion"
import { Questions } from "@prisma/client"

type Question = {
  questions: Questions[]
}
const AdminQuestions: React.FC<Question> = ({ questions}) => {
  return (
    <div className='border mt-16 p-8'>
      {questions.map((question) => (
        <div key={question.id} className='flex flex-row justify-between w-full gap-8'>
          <p>{question.question}</p>
          <span onClick={() => deleteQuestion(question.id)} className='cursor-pointer'>❌</span>
        </div>
      ))}
    </div>
  )
}

export default AdminQuestions