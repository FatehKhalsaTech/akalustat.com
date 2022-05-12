import type { NextPage, GetStaticProps } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { api } from '../app/data/api'

import {Text, PunjabiCaligraphy, Punjabi, Center} from '../app/components/Text'
import {TextStyle} from '../app/components/Styles'
import {CHHAND_TITLES} from '../app/constants/chhand-splits'

import styles from '../styles/pages/Home.module.css'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.headers}>
          <Center>
            <PunjabiCaligraphy >
              <Text style={styles} styleClassNames={["superheader"]} >
                {"gur br Akwl ] dyZ qyZ &qih ] ^wlsy dI hr mYdwn &qih ]"}
              </Text>
              <Text style={styles} styleClassNames={["fateh"]}>
                {"< sRI vwihgurU jI kI &qih ]"}
              </Text>
            </PunjabiCaligraphy>
            <Punjabi>
              <Text style={styles} styleClassNames={["subheader"]}>
                {"dSmyS ipqw jI dI pwvn bwxI iv`coN"}
              </Text>
            </Punjabi>
            <PunjabiCaligraphy>
              <Text style={styles} styleClassNames={["title"]}>
                {"sRI Akwl ausqq swihb"}
              </Text>
            </PunjabiCaligraphy>
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
          <div className={styles.chhand} key={indx}>
            <Punjabi>
              <Text>
                {`${indx + 1}) ${title}`}
              </Text>
            </Punjabi>
          </div>
        ) )}
       
        </div>
      </div>
    </div>
  )
}

export default Home
