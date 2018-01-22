import React, { Component } from 'react'
import Container from './../components/container'
import AttributeList from './../components/attributeList'
import Attribute from './../components/attribute'
import './../css/main.css'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      team: "One",
      race: "2018",
      results: [
        { runner: "Kai", time: "20 seconds" },
        { runner: "Jane", time: "30 seconds" },
        { runner: "Sai", time: "40 seconds" }
      ]
    }
  }
  
  render () {
    let title = 'Results for Team ' + this.state.team
    let resultsList = this.state.results.map((result) => ({ content: (result.runner + ': ' + result.time), link: "/result", long: false }))

    let content = (
      <div className='show'>
        <Attribute label='Race' content={this.state.race} link='/race' long={false} />
        <AttributeList header='Results' items={resultsList} />
        <Attribute label='' content='Back to Team' link='/team' long={false} />
      </div>
    )

    return (
      <Container title={title} content={content} cssLabel="results" {...this.props} />
    )
  }
}

export default Results