import axios from 'axios'

export const signInPut = async (email, password) => {
  const body = { email: email, password: password }
  try {
    const res = await axios.put(`http://localhost:4000/user`, body)
    return res.data
  } catch (err) {
    return err.response.data
  }
}

export const signUpPost = async (email, password) => {
  const body = { email: email, password: password, approved: false }
  try {
    const res = await axios.post('http://localhost:4000/user', body)
    return res.data
  } catch (err) {
    return err.response.data.err
  }
}
