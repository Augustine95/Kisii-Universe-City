import React from 'react'
import PageHeader from './pageHeader'
import { PersonRounded } from '@mui/icons-material';

export default function Profile() {
  return (
    <section>
      <PageHeader title='Profile' icon={PersonRounded} />
    </section>
  )
}
