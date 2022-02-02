import React from 'react'
import PageHeader from './pageHeader'
import { Logout as LogoutIcon } from '@mui/icons-material';

export default function Logout() {
  return (
    <section>
      <PageHeader title='Logout' icon={LogoutIcon} />
    </section>
  )
}
