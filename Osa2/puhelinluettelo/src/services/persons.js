import axios from 'axios'
const baseUrl = '/api/persons'
//const baseUrl = 'https://hidden-wave-38698.herokuapp.com/'

const getAll = () => {

  // Fake contact for debugging and testing purposes
  const fakeContact = {
    id: 99999,
    name: 'Fake Contact',
    number: '1234567'
  }

  const request = axios.get(baseUrl)
  return request.then(response => response.data)
  // Concat Fake contact for debuggin purposes
  //return request.then(response => response.data.concat(fakeContact))

}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

const personService = {getAll, create, update, remove}
export default personService
