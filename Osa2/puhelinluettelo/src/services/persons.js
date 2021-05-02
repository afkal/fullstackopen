import axios from 'axios'
//const baseUrl = 'http://localhost:3001/persons'
const baseUrl = 'http://localhost:8888/trailway_new/twbe/public/index.php/persons/'

const getAll = () => {

  // Fake contact for debugging and testing purposes
  const fakeContact = {
    id: 99999,
    name: 'Fake Contact',
    number: '1234567'
  }

  const request = axios.get(baseUrl)
  //return request.then(response => response.data)
  return request.then(response => response.data.concat(fakeContact))

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
