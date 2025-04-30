import { useQuery } from '@tanstack/react-query'
import { fetchMyData } from '@/utils/services'
import { fetchWhaleData } from '@/utils/services'

export const useSolscanTokenData = () => {
  return useQuery({
    queryKey: ['my-data'],
    queryFn: fetchMyData,
    staleTime: Infinity, // data is always fresh
    retry: 1, // only retry once on error
    refetchOnWindowFocus: false,
  })
}

export const useSolscanWhaleData = () => {
  return useQuery({
    queryKey: ['whale-data'],
    queryFn: fetchWhaleData,
    staleTime: Infinity,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
