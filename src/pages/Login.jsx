export default function Login() {
  // functions
  function login(e) {
    e.preventDefault()

    let obj = {}
    obj.email = e.target.email.value
    obj.password = e.target.password.value
    console.log(obj)
  }

  // return
  return (
    <>
      <div className="card">
        <img src="images/thailand.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay container" style={{ width: 800 }}>
          <div className="card align-items-center position-absolute top-50 start-50 translate-middle w-50 h-auto p-3">
            <img
              src="images/logo-airbnb.png"
              alt="logo"
              className="w-25 py-5"
            />

            <div className="card-body container">
              <form onSubmit={(e) => login(e)}>
                <label>Email</label>
                <input
                  type="email"
                  className="border rounded form-control"
                  name="email"
                />
                <label>Password</label>
                <input
                  type="password"
                  className="border rounded form-control"
                  name="password"
                />
                <button type="submit" className="btn btn-success mt-3">
                  Login
                </button>
              </form>
            </div>

            <div>
              <span>
                New to Airbnb? <a href="">Signup</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
