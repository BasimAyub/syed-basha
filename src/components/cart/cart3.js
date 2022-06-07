import greet from "../../assets/greet1.svg";

export default function Cart3() {
  return (
    <div>
      <form className="greetMessageMain shadow">
        <div className="row">
          <img src={greet} alt="card_image" className="col-md-5" />
          <div className="col-md-7">
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <textarea
                className="form-control sec10-input"
                id="inputAddress"
                placeholder="1234 Main St"
                rows={5}
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control sec10-input"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-5">
                <div className="d-flex justify-content-between">
                  <p>B</p>
                  <p>i</p>
                  <p>U</p>
                  <p>=</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
