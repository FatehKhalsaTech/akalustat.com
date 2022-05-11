import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Text, PunjabiCaligraphy, Punjabi} from '../app/components/Text'
import {TextStyle} from '../app/components/Styles'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.headers}>
          <PunjabiCaligraphy >
            <TextStyle classNames={["text_center"]} >
            <Text style={styles} styleClassNames={["superheader"]} >
              {"gur br Akwl ] dyZ qyZ &qih ] ^wlsy dI hr mYdwn &qih ]"}
            </Text>
            </TextStyle>
          </PunjabiCaligraphy>
          <PunjabiCaligraphy >
            <TextStyle classNames={["text_center"]} >
            <Text style={styles} styleClassNames={["fateh"]}>
              {"< sRI vwihgurU jI kI &qih ]"}
            </Text>
            </TextStyle>
          </PunjabiCaligraphy>
          <Punjabi>
            <TextStyle classNames={["text_center"]} >
            <Text style={styles} styleClassNames={["subheader"]}>
              {"dSmyS ipqw jI dI pwvn bwxI iv`coN"}
            </Text>
            </TextStyle>
          </Punjabi>
          <PunjabiCaligraphy>
            <TextStyle classNames={["text_center"]} >
            <Text style={styles} styleClassNames={["title"]}>
              {"sRI Akwl ausqq swihb"}
            </Text>
            </TextStyle>
          </PunjabiCaligraphy>
        </div>
        <div className={styles.index_tables}>
        </div>
      </div>
    </div>
  )
}

export default Home
