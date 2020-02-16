import React from 'react'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <ul>
          {
            this.props.list.map(item => {
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
