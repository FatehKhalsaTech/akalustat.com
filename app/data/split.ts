import { CHHAND_SPLITS } from "../constants/chhand-splits";
import { BaniChhands, BaniParagraphs, Chhand, Paragraph, RemappedBani } from "../lib/types";

//banidb returns paragraphs based on the group of pangtees together, not jsut the subheaders
export const sortParagraphs = (data: RemappedBani): BaniParagraphs => {
  return {
    paragraphs: data.verses.reduce((paragraphs, vurse, indx) => {
    const prevParagraphs = paragraphs.slice(0, paragraphs.length - 1)
    const currentPara = paragraphs[paragraphs.length - 1]
    if (!paragraphs.length) return [{paragraphNo: 1, verses: [vurse] }]

    if(currentPara.paragraphNo === vurse.paragraph) return [...prevParagraphs, {...currentPara, verses:     [...currentPara.verses, vurse]}]
    
    return [...prevParagraphs, currentPara, {paragraphNo: currentPara.paragraphNo + 1, verses:[vurse]}]
  }, [] as Paragraph[])
  }
}


export const sortChhands = (data: RemappedBani): BaniChhands => {
  const paras = sortParagraphs(data)

  return {
    baniInfo: data.baniInfo,
    chhands: paras.paragraphs.reduce((subheaders, paragraph, indx) => {
    const isIndexed = CHHAND_SPLITS.includes(indx)
    const prevHeaders = subheaders.slice(0, subheaders.length - 1)
    const currentHeader = subheaders[subheaders.length -1]

    if(!subheaders.length) return [{subheaderNo: 1, paragraphs: [ paragraph ] }]
    if(isIndexed) return [...prevHeaders, currentHeader, {subheaderNo: currentHeader.subheaderNo + 1, paragraphs: [paragraph]}]

    else return [...prevHeaders, {...currentHeader, paragraphs: [...currentHeader.paragraphs, paragraph] } ]

  }, [] as Chhand[])
  }
}