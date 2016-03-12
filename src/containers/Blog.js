import React, { PropTypes } from "react"

import Header from "./../components/Header"
import Footer from "./../components/Footer"

const Blog = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

Blog.propTypes = {
  children: PropTypes.node
}

export default Blog
