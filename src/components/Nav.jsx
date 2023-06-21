import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
axios.defaults.withCredentials = true

const render_url = process.env.REACT_APP_RENDER_URL
const local_url = process.env.REACT_APP_LOCAL_URL

export default function Nav() {
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false)

  // check if user is logged in
  const checkLogin = async () => {
    let user = await axios.get(`${local_url}/profile`)
    if (user.data.name) {
      console.log(user.data.name)
      setLoggedIn(true)
    } else {
      console.log(user.data.name)
      setLoggedIn(false)
    }
  }

  const requestLogout = async (e) => {
    e.preventDefault()
    let userToLogout = await axios.get('https://abb-api.onrender.com/logout')
    console.log(userToLogout.data)
    navigate('/login')
  }

  useEffect(() => {
    console.log(loggedIn)
    checkLogin()
  }, [])

  return (
    <>
      {/* nav bar */}
      <nav className="logo-bar container">
        <div className="row align-items-center">
          <div className="col text-start p-3">
            <Link to="/">
              <img src="/images/logo-airbnb.png" alt="logo" className="w-25" />
            </Link>
          </div>
          <div className="col text-end">
            <Link to="/profile">
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{ alignItems: 'center' }}
              >
                <img
                  src="/images/randomuser1.png"
                  alt="user"
                  className="rounded-circle w-25"
                  style={{ height: 30 }}
                />
                User Name
              </button>
            </Link>
            {/* check if user is logged in and change button accordingly */}
            {loggedIn ? (
              <a
                onClick={(e) => requestLogout(e)}
                type="submit"
                className="btn btn-outline-secondary"
                style={{ height: 44, marginLeft: 5 }}
              >
                Logout
              </a>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline-secondary"
                style={{ height: 44, marginLeft: 5 }}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
