import React from 'react'
import PageHeader from './pageHeader'
import { QuestionAnswerRounded } from '@mui/icons-material'

export default function QuestionAnswer() {
  return (
    <section>
      <PageHeader title='Question - Answer' icon={QuestionAnswerRounded} />
    </section>
  )
}
