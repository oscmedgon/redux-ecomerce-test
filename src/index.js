import fetch from 'isomorphic-fetch'
const baseURL = 'https://ecomerce-api-a4661.herokuapp.com/api'

const API = {
  products: {
    async hetAll () {
      const response = await fetch(`${baseURL}/products`)
      const data = await response.json()
      return data
    },
    async getSingle (id) {
      const response = await fetch(`${baseURL}/products/${id}`)
      const data = await response.json()
      return data
    },
    async save (item) {
      const response = await fetch(`${baseURL}/products`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }),
        body: JSON.stringify(item)
      })
      const data = await response.json()
      return data
    }
  }
}
