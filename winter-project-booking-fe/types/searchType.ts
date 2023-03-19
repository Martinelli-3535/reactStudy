/**
 * /subjects/{subjectId} 에서 사용되는 타입
 */
export type SubjectIdType = {
  id: number
  subjectName: string
  professorName: string
  subjectType: string
  url: string
  departmentName: string
  books: {
    id: number
    author: string
    title: string
    year: number
    publisher: string
    type: string
  }[]
}

/**
 * /subjects 에서 사용되는 타입
 */
export type SubjectListType = {
  id: number
  departmentName: string
  professorName: string
  subjectName: string
  subjectType: string
}
