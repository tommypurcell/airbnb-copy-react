import Nav from '../components/Nav'

export default function HouseEdit() {
  // data
  let houseListings = []

  // function to save form into object
  function saveListing(e) {
    e.preventDefault()
    let obj = {}
    let photoArr = []

    // check if photo url is added
    // if photo exists add to photoArr
    if (e.target.photo1.value) {
      photoArr.push(e.target.photo1.value)
    }
    if (e.target.photo2.value) {
      photoArr.push(e.target.photo2.value)
    }
    if (e.target.photo3.value) {
      photoArr.push(e.target.photo3.value)
    }
    if (e.target.photo4.value) {
      photoArr.push(e.target.photo4.value)
    }
    if (e.target.photo5.value) {
      photoArr.push(e.target.photo5.value)
    }
    if (e.target.photo6.value) {
      photoArr.push(e.target.photo6.value)
    }
    if (e.target.photo7.value) {
      photoArr.push(e.target.photo7.value)
    }
    if (e.target.photo8.value) {
      photoArr.push(e.target.photo8.value)
    }
    if (e.target.photo9.value) {
      photoArr.push(e.target.photo9.value)
    }

    // save data in obj
    obj.title = e.target.title.value
    obj.description = e.target.description.value
    obj.numberOfRooms = e.target.numberOfRooms.value
    obj.location = e.target.location.value
    obj.price = e.target.price.value
    obj.photos = photoArr

    // lastly add obj to houseListings array of house listing objects
    houseListings.push(obj)
  }

  // return
  return (
    <>
      <Nav /> {/* nav bar */}
      <form onSubmit={(e) => saveListing(e)}>
        <div className="container p-5">
          <h2>List a House</h2>
          <div className="mt-3">
            <span>Short Title</span>
            <input type="text" className="form-control" name="title" />
          </div>
          <div className="mt-3">
            <span>Description</span>
            <div className="form-floating">
              <textarea
                className="form-control"
                style={{ height: 150 }}
                defaultValue={''}
                name="description"
              />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
          </div>
          <div className="mt-3">
            <span>Number of Rooms</span>
            <input
              type="number"
              className="form-control"
              name="numberOfRooms"
            />
          </div>
          <div className="mt-3">
            <span>Location</span>
            <select
              className="form-select"
              aria-label="Default select example"
              name="location"
            >
              <option value="Bangkok">Bangkok</option>
              <option value="Koh Samui">Koh Samui</option>
              <option value="Phuket">Phuket</option>
              <option value="Pattaya">Pattaya</option>
            </select>
          </div>
          <div className="mt-3">
            <span>Price (per night)</span>
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-solid fa-dollar-sign" />
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                name="price"
              />
            </div>
          </div>
          <div className="mt-3">
            <span>Add Photos (up to 9)</span>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo1"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo2"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo3"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo4"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo5"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo6"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo7"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo8"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="https://..."
              name="photo9"
            />
            <div></div>
            <button type="submit" className="saveEdits btn btn-success mt-3">
              Save Changes
            </button>
          </div>
          <div>
            <button type="submit" className="deleteEdits btn btn-danger mt-3">
              Delete
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
