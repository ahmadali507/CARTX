
import Axios  from 'axios';
import { useQuery } from 'react-query'

const useCustomQuery = (category: string) => {
  return useQuery(['items'], async ()=>{
        const requestURL = `https://cartx-api.vercel.app/api/additem/${category}`; 
        const response = await Axios.get(requestURL);
        return response.data; 
  })
}

export default useCustomQuery
