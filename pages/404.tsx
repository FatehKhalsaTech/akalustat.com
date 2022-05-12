import { NextPage } from "next";
import { NormalPage } from "../app/components/PageContainer";

import OopsStyles from '../styles/pages/404.module.css'

const Oops: NextPage = () => (
  <NormalPage>

  <div className={OopsStyles.text_container}>

  </div>
  <div className={OopsStyles.img_container}>
    <img className={OopsStyles.image} src="/images/404.svg"/>
    </div>
    
  </NormalPage>
)

export default Oops