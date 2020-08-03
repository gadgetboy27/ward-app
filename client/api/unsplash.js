import axios from 'axios'

export default axios.create({
  baseUrl: 'https://api.unsplash.com/',
  headers: {
    Authorization:
          'Client-ID ca1f4d3f75517854364ec3e1c5b1acee4489ca9c41b0d477a3d7e14320353c06'
  }
})
