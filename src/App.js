import React, { Component } from 'react'
import { Input } from 'antd'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <div>
          <Input placeholder='Patient ID' />
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Doctor' />
          <Input placeholder='Insurance' />
          <Input placeholder='Amount Owed' />
        </div>
      </div>
    )
  }
}

export default App
