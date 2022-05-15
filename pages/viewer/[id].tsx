import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { BorderPage } from "../../app/components/PageContainer"
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { api } from "../../app/data/api"
import { Chhand } from "../../app/lib/types"
import { Punjabi } from "../../app/components/Text"
import { LineBlock } from "../../app/components/LineBlock"

export const getStaticPaths: GetStaticPaths<{id: string}> = async () => {
const { chhands } = await api.get()

  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    await api.cache.set(chhands)
  }

  return {
    paths: chhands.map(chhand => ({
      params: {
        id: chhand.chhandNo.toString(),
      },
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  let chhand = await api.cache.get(parseInt(params?.id as string));

    if (!chhand) {
      chhand = await api.fetch(parseInt(params?.id as string))
    }

    if (!chhand) {
      return {
        notFound: true
      }
    }

    return {
      props: {
       chhand
      }
    }
}

type Props = {
  chhand: Chhand
}

const ViewerPage: NextPage<Props> = ({chhand}: Props) => {
  return (
    <BorderPage>
      <Punjabi>
      <div>
        {chhand.paragraphs.map(para => para.verses.map(v => <LineBlock key={`chhand${chhand.chhandNo}-para${para.paragraphNo}-line${v.verseID}`} line={v}/>))}
        </div>
</Punjabi>
    </BorderPage>
  )
}


export default ViewerPage