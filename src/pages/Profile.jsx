import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// api urls from env
const render_url = process.env.REACT_APP_RENDER_URL
const local_url = process.env.REACT_APP_LOCAL_URL

export default function Profile() {
  // create state variable for user
  const [user, setUser] = useState({})

  // define houses
  const [houses, setHouses] = useState([])

  // navigate
  const navigate = useNavigate()

  const getHouses = async () => {
    try {
      let response = await axios.get(
        `https://abb-api.onrender.com/houses?host=${user._id}`
      )
      console.log(response.data)
      // set the houses state variable to the response data
      setHouses(response.data)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  // function that runs when page loads and performs GET request to /profile
  const getProfile = async () => {
    try {
      let userProfile = await axios.get(`${render_url}/profile`, {
        withCredentials: true,
      })
      console.log(userProfile.data)

      setUser(userProfile.data)
      return userProfile
    } catch (err) {
      console.log(err)
    }
  }

  // function that runs when form is submitted and sends PATCH request to /profile
  const submitProfile = async (e) => {
    e.preventDefault()
    try {
      // check that the form fields are not empty before sending PATCH request
      if (e.target.name.value === '') {
        alert('Please enter your name')
        return
      }
      if (e.target.email.value === '') {
        alert('Please enter your email')
        return
      }
      if (e.target.avatar.value === '') {
        alert('Please enter your avatar')
        return
      }
      // send PATCH request to /profile
      let response = await axios.patch(`${render_url}/profile`, {
        name: e.target.name.value,
        email: e.target.email.value,
        avatar: e.target.avatar.value,
      })
      // refresh page
      window
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // perform GET request to /profile
    getProfile()

    // perform GET request to /houses as soon as page loads
    // getHouses()
  }, [])

  return (
    <>
      <div>
        name: {user.name}
        email: {user.email}
        avatar: {user.avatar}
      </div>
      {/* nav bar */}
      <Nav />
      {/* main container */}
      <div className="container">
        {/* single row for page */}
        <div className="row g-5">
          {/* column for profile setup */}
          <div className="col-4 me-5 pe-5">
            <h2 className="border-bottom pb-3">Profile</h2>
            <form onSubmit={(e) => submitProfile(e)}>
              <div className="text-start">Name</div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={user.name}
                />
              </div>
              <div className="text-start">Email</div>
              <div className="">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={user.email}
                />
              </div>
              <div className="text-start py-2">Profile Picture</div>
              <div className="">
                <img
                  src="images/randomuser1.png"
                  alt=""
                  className="rounded-circle w-25"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="avatar"
                  placeholder={user.avatar}
                  className="my-3 form-control"
                />
              </div>
              <div className="">
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
          {/* column for listings */}
          <div className="col">
            <h2 className="border-bottom pb-3">My Listings</h2>
            <Link to="/house-create">
              <button className="btn btn-success my-3">List a House</button>
            </Link>
            <div className="row g-0">
              <div className="col md-8">
                {houses.map((house, index) => (
                  <div key={index} className="card mb-3 p-0">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <img
                            src={house.photos[0]}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col">
                          <div className="card-body">
                            <h5 className="card-title">{house.title}</h5>
                            <span className="text-muted">
                              {house.rooms} rooms - ${house.price}/night
                            </span>
                            <p className="card-text">{house.description}</p>
                            <Link to="/house-edit">
                              <button className="btn btn-outline-secondary">
                                Edit
                              </button>
                            </Link>
                            <Link to="/house">
                              <button className="btn btn-outline-success">
                                View
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
