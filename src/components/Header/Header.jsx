import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 36rem;
  margin: 0;
  margin-bottom: ${rhythm(2.5)};
`

const Logo = styled.h3`
  display: inline;
  text-shadow: none;
  background-image: none;
`

const List = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`

const StyledLink = styled.li`
  margin-bottom: 0;
  margin-left: ${rhythm(1)};
`

class Header extends React.Component {
  render() {
    const { location } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const aboutPath = `${rootPath}o-blogu`

    return (
      <StyledHeader>
        <Link to="/">
          <Logo>RW</Logo>
        </Link>
        <nav>
          <List>
            {location.pathname !== rootPath && (
              <StyledLink>
                <Link to={rootPath}>Start</Link>
              </StyledLink>
            )}
            {location.pathname !== aboutPath && (
              <StyledLink>
                <Link to={aboutPath}>O blogu</Link>
              </StyledLink>
            )}
          </List>
        </nav>
      </StyledHeader>
    )
  }
}

export default Header
