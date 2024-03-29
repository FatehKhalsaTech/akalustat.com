import type { NextPage, GetStaticProps } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { api } from '../app/data/api'

import {Text, PunjabiCaligraphyTitle, Punjabi, Center} from '../app/components/Text'
import {TextStyle} from '../app/components/Styles'
import {CHHAND_TITLES} from '../app/constants/chhand-splits'


export const getStaticProps: GetStaticProps = async () => {
  const { chhands } = await api.get()

  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    await api.cache.set(chhands)
  }

  return {
    props: {
      chhands,
    },
  }
}

import styles from '../styles/pages/Home.module.css'
import { Chhand } from '../app/lib/types'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.headers}>
          <Center>
            <PunjabiCaligraphyTitle >
              <Text style={styles} styleClassNames={["superheader"]} >
                {"gur br Akwl ] dyZ qyZ &qih ] ^wlsy dI hr mYdwn &qih ]"}
              </Text>
              <Text style={styles} styleClassNames={["fateh"]}>
                {"< sRI vwihgurU jI kI &qih ]"}
              </Text>
            </PunjabiCaligraphyTitle>
            <Punjabi>
              <Text style={styles} styleClassNames={["subheader"]}>
                {"dSmyS ipqw jI dI pwvn bwxI iv`coN"}
              </Text>
            </Punjabi>
            <PunjabiCaligraphyTitle>
              <Text style={styles} styleClassNames={["title"]}>
                {"sRI Akwl ausqq swihb"}
              </Text>
            </PunjabiCaligraphyTitle>
          </Center>
        </div>
        <div className="Center">
          <Punjabi>
            <TextStyle classNames={["text_center"]} >
            <Text style={styles} styleClassNames={["subtitle"]}>
              {"qqkrw"}
            </Text>
            </TextStyle>
          </Punjabi>
        </div>
        <div className={styles.chhands}>
        {CHHAND_TITLES.map((title,indx) => (
          <Link key={indx} href={`/viewer/${encodeURI((indx + 1).toString())}`}>
          <div className={styles.chhand}>
            <Punjabi>
              <Text>
                {`${indx + 1}) ${title}`}
              </Text>
            </Punjabi>
          </div>
          </Link>
        ) )}
       
        </div>
      </div>
    </div>
  )
}

export default Home
