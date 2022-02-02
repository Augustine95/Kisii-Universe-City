import React from 'react'
import PageHeader from './pageHeader'
import { BusinessCenterRounded } from '@mui/icons-material'

export default function Business() {
  return (
    <section>
      <PageHeader title='Business' icon={BusinessCenterRounded} />
    </section>
  )
}
