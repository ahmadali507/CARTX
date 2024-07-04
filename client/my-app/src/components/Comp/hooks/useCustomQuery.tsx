
import Axios  from 'axios';
import React from 'react'
import { useQuery } from 'react-query'

const useCustomQuery = (category: string) => {
  return useQuery(['items'], async ()=>{
        const requestURL = `http://localhost:8000/api/additem/${category}`; 
        const response = await Axios.get(requestURL);
        return response.data; 
  })
}

export default useCustomQuery
