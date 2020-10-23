import {graphql} from 'gatsby'
import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Viewer} from "../components/viewer"

const IndexPage = ( {data} ) => {
  const { banidb: { bani: { verses } } } = data
  return (
    <Layout>
      <SEO
        keywords={[ `AkalUstat`, `akalustat`, `dasam bani`, `dasam granth`, 'sri dasam granth sahib', 'dasam sri guru granth sahib' ]}
        description="Sri Akal Ustat bani from Sri Dasam Guru Granth Sahib"
        title="AkalUstat"
      />

      <section className="text-center items-stretch">
        <Viewer data={verses} />
      </section>
    </Layout>
  )
}

export default IndexPage
export const query =     graphql`
    query AkalUstat {
  banidb {
    bani(id: "29") {
      verses {
        verse {
          verse {
            gurmukhi
          }
          verseId
          visraam {
            sttm {
              p
              t
            }
          }
          translation {
            en {
              bdb
            }
            pu {
              bdb {
                gurmukhi
              }
            }
          }
          transliteration {
            en
          }
        }
      }
    }
  }
}

`

