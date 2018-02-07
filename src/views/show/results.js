import React, { Component } from 'react'
import Title from './../../components/atoms/title'
import AttributeList from './../../components/atoms/attributeList'
import Attribute from './../../components/atoms/attribute'
import './../../css/views/view.css'

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

    return (
      <div className='show'>
        <Title title={title} />
        <Attribute label='Race' content={this.state.race} link='/race' long={false} />
        <AttributeList header='Results' items={resultsList} />
        <Attribute label='' content='Back to Team' link='/team' long={false} />
      </div>
    )
  }
}

// no props passed at present

export default Results