import React from "react"
import { Link } from "gatsby"
import image from "../images/who.jpg"
import Posts from "../components/posts"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts
      time="11/11/2020"
      image={image}
      title="Day la tieu de bai viet"
      content="chemex This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the Illinois Institute of Technology said that the…"
    />
    <Posts
      time="11/11/2020"
      image={image}
      title="Day la tieu de bai viet"
      content="chemex This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the Illinois Institute of Technology said that the…"
    />
    <Posts
      time="11/11/2020"
      image={image}
      title="Day la tieu de bai viet"
      content="chemex This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the Illinois Institute of Technology said that the…"
    />
  </Layout>
)

export default IndexPage
