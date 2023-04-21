export default function SignUp() {
  // functions

  // function to save signup form into object
  function signUp(e) {
    e.preventDefault()

    let obj = {}
    obj.name = e.target.fullName.value
    obj.profilePicture = e.target.profilePicture.value
    obj.email = e.target.email.value
    obj.password = e.target.password.value
    console.log(obj)
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
            <form onSubmit={(e) => signUp(e)}>
              <div className="row text-start">Your Full Name</div>
              <div className="row">
                <input type="text" name="fullName" className="border rounded" />
              </div>
              <div className="row text-start">Profile Picture</div>
              <div className="row">
                <input
                  type="url"
                  name="profilePicture"
                  className="border rounded"
                />
              </div>
              <div className="row text-start">Email</div>
              <div className="row">
                <input type="email" name="email" className="border rounded" />
              </div>
              <div className="row text-start">Password</div>
              <div className="row">
                <input
                  type="password"
                  name="password"
                  className="border rounded"
                />
              </div>
              <button type="submit" className="btn btn-success row mt-3">
                Sign Up
              </button>
              <div className="row"></div>
            </form>
            <span>
              Already have an account? <a href="">Login</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
