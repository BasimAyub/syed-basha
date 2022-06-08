import greet from "../../assets/greet1.svg";

export default function Cart3(props) {
  return (
    <div>
      <form className="greetMessageMain shadow">
        <div className="row">
          <img src={greet} alt="card_image" className="col-md-5" />
          <div className="col-md-7" style={{ marginTop: "10px" }}>
            <div className="form-group">
              <label for="inputAddress">Greeting card message*</label>
              <textarea
                className="form-control sec10-input"
                id="inputAddress"
                placeholder="Write your personal Tagline here..."
                rows={5}
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Your signature</label>
              <input
                type="text"
                className="form-control sec10-input"
                id="inputAddress2"
                placeholder="Enter your name for the recipient if you want"
              />
            </div>
            <div className="form-row fontOptionsCart">
              <div className="form-group col-md-4">
                <select id="inputState" className="form-control">
                  <option selected>Helvetica</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <select id="inputState" className="form-control">
                  <option selected>15</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <p>
                    <i class="fa-solid fa-bold"></i>
                  </p>
                  <p>
                    <i class="fa-solid fa-italic"></i>
                  </p>
                  <p>
                    <i class="fa-solid fa-underline"></i>
                  </p>
                  <p>
                    <i class="fa-solid fa-align-left"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="greetFormBtn row justify-content-center">
          <button
            className="btn greetBack"
            onClick={(e) => {
              e.preventDefault();
              props.stepBack();
            }}
          >
            Föregående
          </button>
          <button
            type="submit"
            class="btn greetAhead cartButtonActive"
            onClick={(e) => {
              e.preventDefault();
              props.stepNext();
            }}
          >
            Nästa
          </button>
        </div>
      </form>
    </div>
  );
}
