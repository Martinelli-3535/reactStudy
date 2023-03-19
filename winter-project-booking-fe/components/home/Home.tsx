import React, { useState } from 'react'
import styled from '@emotion/styled'
import { SelectChangeEvent } from '@mui/material'
import Image from 'next/image'

import theme from 'styles/theme'
import { useDebounce } from '@/hooks/useDebounce'
import DropDown from 'components/common/drop-down'
import SearchItem from 'components/search-item'
import { useSubjectQuery } from '@/hooks/query/search/useSubjectQuery'
import { SubjectListType } from '@/types/searchType'

const Home = () => {
  const [option, setOption] = useState<'professor' | 'department' | 'name'>(
    'professor'
  )
  const [searchInput, setSearchInput] = useState({
    value: '',
    isFocus: false,
  })

  const debouncedValue = useDebounce(searchInput.value, 500)

  const { data, isLoading } = useSubjectQuery({
    type: option,
    value: debouncedValue,
  })

  const handleChangeOption = (event: SelectChangeEvent) => {
    setOption(event.target.value as 'professor' | 'department' | 'name')
  }

  const handleChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault()
    setSearchInput({ ...searchInput, value: event.target.value })
  }

  const handleBlurSearchInput = () => {
    setSearchInput({ ...searchInput, isFocus: false })
  }

  const handleFocusSearchInput = () => {
    setSearchInput({ ...searchInput, isFocus: true })
  }

  const handleClickClearButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    setSearchInput({ ...searchInput, value: '' })
  }

  return (
    <Container>
      <Main>
        <Banner>
          책 정보?
          <br />
          여기에서 찾아보자
          <Description>내가 듣는 수업의 책 정보를 쉽고 빠르게</Description>
          <Image
            priority={true}
            src="/images/banner.png"
            alt="banner"
            width="180"
            height="180"
            style={{
              position: 'absolute',
              right: '-1rem',
              bottom: '-1rem',
            }}
          />
        </Banner>
        <SearchContainer>
          <DropDown
            value={option}
            handleChange={handleChangeOption}
            items={[
              { key: '교수명', name: '교수명', value: 'professor' },
              { key: '과목명', name: '과목명', value: 'name' },
              { key: '학과명', name: '학과명', value: 'department' },
            ]}
          />
          <InputContainer isFocus={searchInput.isFocus}>
            <SearchInput
              value={searchInput.value}
              onChange={handleChangeSearchInput}
              onBlur={handleBlurSearchInput}
              onFocus={handleFocusSearchInput}
              placeholder="검색어를 입력하세요"
            />
            {!!searchInput.value ? (
              <Button
                className="material-symbols-outlined md-20"
                type="button"
                onClick={handleClickClearButton}
              >
                close
              </Button>
            ) : (
              <Button className="material-symbols-outlined md-20">
                search
              </Button>
            )}
          </InputContainer>
        </SearchContainer>
        {isLoading ? (
          !!data ? (
            <LoadingContainer />
          ) : (
            <></>
          )
        ) : !!data?.length ? (
          <SearchList>
            {data?.map((item: SubjectListType) => (
              <SearchItem data={item} key={item.id} />
            ))}
          </SearchList>
        ) : (
          <Empty>
            <EmptyDescription>검색 결과가 없습니다.</EmptyDescription>
          </Empty>
        )}
      </Main>
    </Container>
  )
}

export default Home

const LoadingContainer = styled.div`
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.primary.grey100};
  margin-top: 1.5rem;
`

const Container = styled.div`
  flex-grow: 1;
`

const Main = styled.main`
  max-width: 22.5rem;
  padding: 0 1rem;
  margin: 2rem auto;
`

const Banner = styled.div`
  position: relative;
  height: 11rem;
  background-color: ${theme.primary.blue80};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${theme.text.white};
  padding: 2.25rem 6.4rem 1rem 1rem;
  border-radius: 0.3rem;
  font-size: ${theme.fontSize.xl};
  font-weight: 600;
  line-height: 1.4;
  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    font-size: ${theme.fontSize.md};
    padding: 2rem 7rem 1rem 1rem;
  }
`

const Description = styled.p`
  font-size: ${theme.fontSize.xs};
  font-weight: 400;
  margin-top: 0.5rem;
  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    font-size: ${theme.fontSize.xxs};
    margin-top: 0.3rem;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    gap: 0.4rem;
  }
`

const InputContainer = styled.div<{ isFocus: boolean }>`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.primary.grey100};
  border-radius: 0.3rem;
  padding: 0.375rem 0.4rem 0.375rem 0.8rem;
  flex-grow: 1;
  box-sizing: border-box;

  ${({ isFocus }) =>
    isFocus &&
    `border: 2px solid ${theme.primary.blue80}; 
    padding: 0.375rem 0.3rem 0.375rem 0.7rem;`}
`

const SearchInput = styled.input`
  height: 100%;
  font-size: ${theme.fontSize.sm};
  padding: 0 0.1rem;
  color: ${theme.text.darkGrey};
  background-color: ${theme.primary.grey100};
  width: 100%;
`

const Button = styled.button`
  color: ${theme.text.darkGrey};
`

const SearchList = styled.ul`
  border: 1px solid ${theme.primary.grey300};
  border-radius: 5px;
  margin-top: 1.5rem;
`

const Empty = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  gap: 0.4rem;
  background-color: ${theme.primary.grey300};
  border-radius: 1px;
  font-size: ${theme.fontSize.md};
  color: ${theme.text.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.25rem;
`

const EmptyDescription = styled.p``
