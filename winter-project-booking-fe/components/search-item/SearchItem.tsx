import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import theme from 'styles/theme'
import { SubjectListType } from '@/types/searchType'

interface SearchItemProps {
  data: SubjectListType
}

const SearchItem = (props: SearchItemProps) => {
  const { data } = props
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    router.push(
      {
        pathname: `/book/${data.id}`,
        query: data,
      },
      `/book/${data.id}`
    )
  }

  return (
    <Container onClick={handleClick}>
      <Subject>{data.subjectName}</Subject>
      <Professor>{data.professorName}</Professor>
      <Description>
        <span>{data.subjectType}</span>
        <Department>{data.departmentName}</Department>
      </Description>
    </Container>
  )
}

export default SearchItem

const Container = styled.li`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: all 0.15s ease-in-out;
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.primary.grey300};
  }
  &:hover {
    background-color: ${theme.primary.grey200};
  }
`

const Subject = styled.span`
  font-size: ${theme.fontSize.sm};
  font-weight: 500;
`

const Professor = styled.span`
  color: ${theme.primary.grey400};
  font-size: ${theme.fontSize.xs};
`

const Description = styled.div`
  color: ${theme.primary.grey400};
  font-size: ${theme.fontSize.xs};
`

const Department = styled.span`
  margin-left: 0.3rem;
`
