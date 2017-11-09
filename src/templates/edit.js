import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../styles/main.css'

class Edit extends Component {
  render () {
    let content = <Form 
      heading="Edit Something" 
      body="This is standing in to edit things."
      formboxes={[
        { label: "test edit 1", type: "text", placeholder: "write something here" },
        { label: "test edit 2", type: "textarea", placeholder: "And more here." }, 
        { label: "test edit 3", type: "text", placeholder: "And finally here." }
      ]}
    />
    
    return (
      <Container title="Edit" content={content} cssLabel="edit" {...this.props} />
    )
  }
}

export default Edit