import { useQuery } from '@tanstack/react-query'
import { getAsync } from '@api/index'

interface FetchBookListType {
  type: 'publisher' | 'title' | 'type' | 'author'
  value?: string
}

interface FetchBookListType {
  id: number
}

type BookIdType = {
  author: string
  id: number
  isSaved: boolean
  publisher: string
  title: string
  type: string
  year: number
  books: {
    id: number
    author: string
    type: string
  }[]
}

export const useBook = ({ type, value }: FetchBookListType) => {
  return useQuery(
    ['book', 'list', type, value],
    () =>
      getAsync<[]>(`/books`, {
        params: {
          [type] : value,
        },
      }),
    {
      enabled: !!value,
    }
  )
}

export const useBookIdQuery = ({ id } : FetchBookListType) => {
  return useQuery(
    ['book', 'id', id],
    () => getAsync<BookIdType>(`/books/${id}`),
    {
      enabled: !!id,
    }
  )
}
