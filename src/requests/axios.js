import axios from 'axios'

export const requestAPI = async (email, senha) => {
  const body = { email: email, senha: senha }
  try {
    const res = await axios.put(`http://localhost:4000`, body)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const signInPost = async (email, senha) => {
  const body = { email: email, senha: senha }
  try {
    const res = await axios.post('http://localhost:4000/signup', body)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
