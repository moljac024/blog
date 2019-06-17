import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const links = [
  { href: "https://cv.moljac024.com", label: "CV" },
  { href: "https://github.com/moljac024", label: "Github" },
  { href: "https://twitter.com/moljac024", label: "Twitter" },
]

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main style={{ flexGrow: 1 }}>{children}</main>
        <footer>
          <div>
            {links.map(({ href, label }, i) => {
              const isLast = i === links.length - 1
              return (
                <>
                  <a href={href}>{label}</a>
                  {!isLast && <span> &bull; </span>}
                </>
              )
            })}
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
