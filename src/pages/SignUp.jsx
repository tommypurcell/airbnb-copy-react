import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
axios.defaults.withCredentials = true

export default function SignUp() {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')

  // access api
  const makeAccount = async (e) => {
    e.preventDefault()
    let newAccount = await axios.post('https://abb-api.onrender.com/signup', {
      name: e.target.fullName.value,
      avatar: e.target.profilePic.value,
      email: e.target.email.value,
      password: e.target.password.value,
    })

    if (newAccount.data != 'User with this email already exists') {
      navigate('/')
    } else {
      setErrorMsg(newAccount.data)
    }
    console.log(newAccount)
  }

  return (
    <div className="card">
      <img src="images/thailand.jpg" className="card-img" alt="..." />
      <div className="card-img-overlay container">
        <div className="card align-items-center position-absolute top-50 start-50 translate-middle w-50 h-auto">
          <img
            src="images/logo-airbnb.png"
            alt="logo"
            className="d-block w-25 pt-5 pb-5"
          />
          <div className="card-body container border">
            <form onSubmit={(e) => makeAccount(e)}>
              <div className="row text-start">Your Full Name</div>
              <div className="row">
                <input
                  name="fullName"
                  type="text"
                  className="border rounded"
                  required
                />
              </div>
              <div className="row text-start">Profile Picture</div>
              <div className="row">
                <input
                  name="profilePic"
                  type="text"
                  className="border rounded"
                  required
                />
              </div>
              <div className="row text-start">Email</div>
              <div className="row">
                <input
                  name="email"
                  type="email"
                  className="border rounded"
                  required
                />
              </div>
              <div className="row text-start">Password</div>
              <div className="row">
                <input
                  name="password"
                  type="password"
                  className="border rounded"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success row mt-3">
                Sign Up
              </button>
              <div className="row">
                <span>
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </div>
            </form>
            <h4 className="text-danger">{errorMsg}</h4>
          </div>
        </div>
      </div>
    </div>
  )

  // keep the server open
  app.listen(4000, () => {
    console.log('Server is Listening.')
  })
}
