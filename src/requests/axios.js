import axios from 'axios'

const url = 'https://deploy-node-lildrikks.vercel.app'


export const signInPut = async (email, password) => {
  const body = { email: email, password: password }
  try {
    const res = await axios.put(`${url}/user`, body)
    return res.data
  } catch (err) {
    return err.response.data
  }
}

export const signUpPost = async (email, password) => {
  const body = { email: email, password: password, approved: false }
  try {
    const res = await axios.post(`${url}/user`, body)
    return res.data
  } catch (err) {
    return err.response.data.err
  }
}
