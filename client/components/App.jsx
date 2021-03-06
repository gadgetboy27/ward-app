import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] }

   onSearchSubmit = async term => {
     const response = await unsplash.get('/search/photos', {
       params: { query: term }
     })

     this.setState({ images: response.data.results })
   }

   render () {
     return (
       <div className='container' style={{ marginTop: '10px' }}>
         <h1><SearchBar onSubmit={() => this.onSearchSubmit}/></h1>
        Found:{this.state.images.length} images
       </div>
     )
   }
}

export default App
