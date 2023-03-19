import { useQuery } from '@tanstack/react-query'

import { getAsync } from '@/api/index'
import { SubjectIdType } from '@/types/searchType'

interface FetchSubjectListType {
  type: 'department' | 'name' | 'professor'
  value?: string
}

interface FetchSubjectType {
  id: number
}

export const useSubjectQuery = ({ type, value }: FetchSubjectListType) => {
  return useQuery(
    ['subject', 'list', type, value],
    () =>
      getAsync<[]>(`/subjects`, {
        params: {
          [type]: value,
        },
      }),
    {
      enabled: !!value,
    }
  )
}

export const useSubjectIdQuery = ({ id }: FetchSubjectType) => {
  return useQuery(
    ['subject', 'id', id],
    () => getAsync<SubjectIdType>(`/subjects/${id}`),
    {
      enabled: !!id,
    }
  )
}
