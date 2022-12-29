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


export const data = [
  {bloco: "A", aptos: [
    {apto: 11, moradores:['a','b','c']},
    {apto: 12, moradores:['c','d']},
    {apto: 13, moradores:['a','b']},
    {apto: 14, moradores:['luana','bruno']},
    {apto: 21, moradores:['a','b']},
    {apto: 22, moradores:['a','b']},
    {apto: 23, moradores:['a','b']},
    {apto: 24, moradores:['a','b']},
    {apto: 31, moradores:['a','b']},
    {apto: 32, moradores:['a','b']},
    {apto: 33, moradores:['a','b']},
    {apto: 34, moradores:['a','b']},
    {apto: 41, moradores:['Alan','Aline']},
    {apto: 42, moradores:['a','b']},
    {apto: 43, moradores:['a','b']},
    {apto: 44, moradores:['a','b']},
    {apto: 51, moradores:['a','b']},
    {apto: 52, moradores:['a','b']},
    {apto: 53, moradores:['a','b']},
    {apto: 54, moradores:['a','b']},
    {apto: 61, moradores:['a','b']},
    {apto: 62, moradores:['a','b']},
    {apto: 63, moradores:['a','b']},
    {apto: 64, moradores:['a','b']},
    {apto: 71, moradores:['Vitor','Taiz']},
    {apto: 72, moradores:['a','b']},
    {apto: 73, moradores:['a','b']},
    {apto: 84, moradores:['a','b']},
    {apto: 81, moradores:['a','b']},
    {apto: 82, moradores:['a','b']},
    {apto: 83, moradores:['a','b']},
    {apto: 84, moradores:['a','b']},
  ]},
  {bloco: "B", aptos: [
    {apto: 11, moradores:['a','b']},
    {apto: 12, moradores:['a','b']},
    {apto: 13, moradores:['a','b']},
    {apto: 14, moradores:['Fabio','b']},
    {apto: 21, moradores:['a','b']},
    {apto: 22, moradores:['Felipe','Ana Carolina']},
    {apto: 23, moradores:['a','b']},
    {apto: 24, moradores:['a','b']},
    {apto: 31, moradores:['a','b']},
    {apto: 32, moradores:['a','b']},
    {apto: 33, moradores:['a','b']},
    {apto: 34, moradores:['a','b']},
    {apto: 41, moradores:['a','b']},
    {apto: 42, moradores:['a','b']},
    {apto: 43, moradores:['a','b']},
    {apto: 44, moradores:['a','b']},
    {apto: 51, moradores:['a','b']},
    {apto: 52, moradores:['a','b']},
    {apto: 53, moradores:['a','b']},
    {apto: 54, moradores:['a','b']},
    {apto: 61, moradores:['a','b']},
    {apto: 62, moradores:['a','b']},
    {apto: 63, moradores:['a','b']},
    {apto: 64, moradores:['a','b']},
    {apto: 71, moradores:['a','b']},
    {apto: 72, moradores:['a','b']},
    {apto: 73, moradores:['a','b']},
    {apto: 84, moradores:['a','b']},
    {apto: 81, moradores:['a','b']},
    {apto: 82, moradores:['a','b']},
    {apto: 83, moradores:['a','b']},
    {apto: 84, moradores:['a','b']},
  ]}
]