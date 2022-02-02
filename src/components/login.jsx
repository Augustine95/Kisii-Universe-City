import React from 'react'
import { Login as LoginIcon } from '@mui/icons-material';
import PageHeader from './pageHeader';

export default function Login() {
  return (
    <section>
      <PageHeader title='Login' icon={LoginIcon} />
    </section>
  )
}
