import React, { useState } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import theme from 'styles/theme'
import { useSubjectIdQuery } from '@/hooks/query/search/useSubjectQuery'
import { useBookIdQuery } from '@/hooks/query/search/useBookQuery'

const Detail = () => {
  const router = useRouter()
  const { query: detail } = router
  const [bookType, setMainClicked] = useState('main')
  const { data, isLoading } = useSubjectIdQuery({ id: detail.id as any })
  const [bookmark, setBookmark] = useState(false)

  const handleMainBook = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setMainClicked('main')
  }

  const handleRefBook = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setMainClicked('ref')
  }

  const handleBookmark = () => {
    setBookmark(!bookmark)
  }

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.back()
  }

  return (
    <Main>
      <TopIcon>
        <BackIcon
          className="material-symbols-outlined md-20"
          onClick={handleBack}
        >
          arrow_back_ios
        </BackIcon>
        <SubjectTitle>{`${data?.subjectName} / ${data?.professorName}`}</SubjectTitle>  
      </TopIcon>
      <Item>
        <Subject>{data?.subjectName}</Subject>
        <Professor>{data?.professorName}</Professor>
        <Description>
          <span>{data?.subjectType}</span>
          <Department>{data?.departmentName}</Department>
        </Description>
      </Item>
      <SubTitle>
        <span>주교재 및 참고서적</span>
        <MainBook onClick={handleMainBook}>주교재</MainBook>
        <RefBook onClick={handleRefBook}>참고서적</RefBook>
      </SubTitle>
      <Details>
        {isLoading ? (
          <>로딩중</>
        ) : (
          data?.books?.map((book) => {
            return (
              <BookInfo>
                <InfoHeader>
                  <Title>{book?.title}</Title>
                  {bookmark ? (
                    <BookMark
                      className="material-icons"
                      onClick={handleBookmark}
                    >
                      bookmark
                    </BookMark>
                  ) : (
                    <BookMark
                      className="material-icons"
                      onClick={handleBookmark}
                    >
                      bookmark_border
                    </BookMark>
                  )}
                </InfoHeader>
                <Image
                  priority={true}
                  src="/images/uiuxDesign.png"
                  alt="banner"
                  width="120"
                  height="187"
                  style={{
                    margin: '1.4rem 0',
                  }}
                />
                <DetailInfo>
                  <DetailLeft>저자</DetailLeft>
                  <span>{book?.author}</span>
                </DetailInfo>
                <DetailInfo>
                  <DetailLeft>출판사</DetailLeft>
                  <span>{book?.publisher}</span>
                </DetailInfo>
                <DetailInfo>
                  <DetailLeft>출판년도</DetailLeft>
                  <span>{book?.year}</span>
                </DetailInfo>
                <DetailInfo>
                  <DetailLeft>자료유형</DetailLeft>
                  <span>{book?.type}</span>
                </DetailInfo>
                <DetailInfo>
                  <DetailLeft>소장정보</DetailLeft>
                  <span>
                    <GoLink href="https://lib.inu.ac.kr/">
                      학산도서관 바로가기
                    </GoLink>
                  </span>
                </DetailInfo>
              </BookInfo>
            )
          })
        )}
      </Details>
    </Main>
  )
}

export default Detail

const Title = styled.div`
  font-size: ${theme.fontSize.sm};
`

const BookMark = styled.button`
  color: ${theme.primary.iris};
`

const BackIcon = styled.button`
  color: ${theme.primary.grey400};
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${theme.primary.grey300};
  }
`

const BookInfo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.2rem;
`

const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${theme.primary.grey300};
  padding: 0.6rem;
  font-size: ${theme.fontSize.sm};
  &:last-child {
    border-bottom: 1px solid ${theme.primary.grey300};
  }
`

const DetailLeft = styled.span`
  padding: 0 0.2rem;
  color: ${theme.primary.grey400};
  width: 4rem;
`

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Details = styled.ul`
  margin-top: 0.6rem;
  border: 2px solid ${theme.primary.white};
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`

const TopIcon = styled.div`
  display: flex;
  align-items: center;
`

const MainBook = styled.button`
  margin-left: auto;
  margin-right: 0.6rem;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${theme.primary.grey300};
  }
`

const RefBook = styled.button`
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${theme.primary.grey300};
  }
`

const SubTitle = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: ${theme.fontSize.sm};
`

const SubjectTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: ${theme.fontSize.sm};
`

const Main = styled.main`
  background-color: ${theme.primary.white};
  padding: 0 1rem;
  margin: 2rem auto;
  flex-grow: 1;
  max-width: 22.5rem;
  width: 360px;
`

const Item = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: all 0.15s ease-in-out;
  border: 2px solid ${theme.primary.blue100};
  border-radius: 5px;
  margin-top: 1rem;
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

const GoLink = styled.a`
  color: ${theme.primary.grey400};
  text-decoration: underline;
`
