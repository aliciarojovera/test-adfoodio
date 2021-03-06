import axios from 'axios'



const apiHandler = axios.create({
    baseURL: 'http://localhost:4848/',
    withCredentials: true
})



export const newUser = (credentials: Object) => {
    apiHandler.post('/newUser', credentials)
}




export const getUser = async(props: any) => {
  const response = await apiHandler.post('/getUser', props)
  return response

}



