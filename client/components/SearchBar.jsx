import React, { Component } from 'react'

export class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)
  }
  render () {
    return (
      <div className='segment'>
        <form onSubmit={this.onFormSubmit} className='form'>
          <div className='feild'>
            <label>Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
