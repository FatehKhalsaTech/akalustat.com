import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {LineBlock} from "../components/lineblock"
import {Viewer} from "../components/viewer"

function IndexPage( {data} ) {
  const { banidb: { bani: { verses } } } = data
  return (
    <Layout>
      <SEO
        keywords={[ `AkalUstat`, `akalustat`, `dasam bani`, `dasam granth` ]}
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

