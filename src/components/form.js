import React, { Component } from 'react'
import './../styles/form.css'
import FormBox from './formBox'
import Button from './button'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = { submitted: false, values: [] }
    
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleInputChange (eventObj) {
    let valuesArray = this.state.values.filter((value) => value.label !== eventObj.label )
    valuesArray.push({ label: eventObj.label, value: eventObj.value })
    this.setState({ submitted: false, values: valuesArray })
  }
      
  handleSubmit () {
    this.setState({ submitted: true })
    this.props.submit(this.state.values)
  }
    
  render (props) {
    let formboxes = this.props.formboxes.map((formbox) => (
      <FormBox label={formbox.label} type={formbox.type} placeholder={formbox.placeholder} key={formbox.label} onChange={this.handleInputChange} />
    ))
    
    let returnFormData = this.state.values.map((obj) => (
      <div>{obj.label}: {obj.value}</div>
    ))
    let returnForm = this.state.submitted ? returnFormData : ''

    return (
      <div className='form'>
        <div className='heading'>{this.props.heading}</div>
        <div className='body'>{this.props.body}</div>
        <div className='formboxes'>
          {formboxes}
        </div>
        <Button cssLabel="submit" label="Submit" onClick={this.handleSubmit} />
        <div className='return-form'>{returnForm}</div>
      </div>
    )
  }
}

export default Form