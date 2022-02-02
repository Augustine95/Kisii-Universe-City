import React from 'react'
import PageHeader from './pageHeader'
import { AppRegistration } from '@mui/icons-material'

export default function Register() {
  return (
    <section>
      <PageHeader title='Register' icon={AppRegistration} />
    </section>
  )
}
