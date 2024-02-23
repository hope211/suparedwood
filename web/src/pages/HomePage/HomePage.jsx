import { useAuth } from 'web/src/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import Account from 'src/components/Account'
import Auth from 'src/components/Auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Metadata title="Home" description="Home page" />
      {!isAuthenticated ? <Auth /> : <Account />}

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
