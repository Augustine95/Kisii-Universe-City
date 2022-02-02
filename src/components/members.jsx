import React from 'react'
import PageHeader from './pageHeader'
import { PeopleAltRounded } from '@mui/icons-material';

export default function Members() {
  return (
    <section>
      <PageHeader title='Members' icon={PeopleAltRounded} />
    </section>
  )
}
