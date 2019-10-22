import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit (term) {
    console.log(term)
  }
  
  render () {
    return (
      <div className='container' style={{ marginTop: '10px' }}>
        <h1><SearchBar onSubmit={this.onSearchSubmit}/></h1>
      </div>
    )
  }
}

export default App
