import React from 'react'
import Form from './../../components/forms/form'
import './../../css/views/view.css'

const Edit = (props) => (
  <Form 
    heading="Edit Something" 
    body="This is standing in to edit things."
    formboxes={[
      { label: "test edit 1", type: "text", placeholder: "write something here" },
      { label: "test edit 2", type: "textarea", placeholder: "And more here." }, 
      { label: "test edit 3", type: "text", placeholder: "And finally here." }
    ]}
  />
)

export default Edit