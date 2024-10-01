import React from "react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = ({ pageContext }) => {
  const { text, mdx } = pageContext

  return (
    <Layout>
      <h1>Tina markdown test</h1>
      <p>The content below is rendering using the TinaMarkdown component:</p>

      <TinaMarkdown content={mdx} />
    </Layout>
  )
}

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG
