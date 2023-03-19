import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import BaseLayout from 'components/common/base-layout'
import DetailContainer from 'components/detail'
import { useSubjectIdQuery } from '@/hooks/query/search/useSubjectQuery'
import { useBookIdQuery } from '@/hooks/query/search/useBookQuery'

export default function Detail() {
  return (
    <BaseLayout>
      <DetailContainer />
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  return { props: query }
}
