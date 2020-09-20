import { graphql, useStaticQuery, Link } from "gatsby"
import React, { useState } from "react"

function Header() {
  const [ isExpanded ] = useState( false )
  const { site } = useStaticQuery( graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  ` )

  return (
    <header className="bg-akaliBlue">
      <div className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:p-2">
        <Link to="/">
          <h1 className="flex font-appPrimary items-center text-fatehYellow no-underline">
            <span className="text-2xl tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <div className="flex">
          <h2 className="flex font-gurbani text-fatehYellow no-underline">
            {`<> sRI vwihgurU jI kI Pqih`}
            </h2>
          </div>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Read`,
            },
          //  {
            //  route: `/history`,
             // title: `History`,
            // },
          ].map( ( link ) => (
            <Link
              className="block mt-4 text-fatehYellow no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ) )}
        </nav>
      </div>
    </header>
  )
}

export default Header
