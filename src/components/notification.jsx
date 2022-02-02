import React from 'react'
import { NotificationImportant } from '@mui/icons-material'
import PageHeader from './pageHeader'

export default function Notification() {
  return (
    <section>
      <PageHeader title="Notification" icon={NotificationImportant} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fugiat
        ipsum sed nam consequuntur totam culpa doloremque harum, dicta
        voluptates. Dolorem esse libero quibusdam? Repudiandae, expedita iste
        quos rem fugiat culpa, illum harum amet, accusantium odit perferendis
        eveniet distinctio eius sit officia exercitationem vero vitae adipisci
        et porro consectetur quis.
      </p>
    </section>
  )
}
