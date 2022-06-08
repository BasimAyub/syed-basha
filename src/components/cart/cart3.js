import greet from "../../assets/greet1.svg";

export default function Cart3(props) {
  return (
    <div>
      <form className="greetMessageMain shadow">
        <div className="row">
          <img src={greet} alt="card_image" className="col-md-5" />
          <div className="col-md-7" style={{ marginTop: "10px" }}>
            <div className="form-group">
              <label htmlFor="inputAddress">
                Greeting card message<span className="requireStart">*</span>
              </label>
              <textarea
                className="form-control sec10-input"
                id="inputAddress"
                placeholder="Write your personal Tagline here..."
                rows={5}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Your signature</label>
              <input
                type="text"
                className="form-control sec10-input"
                id="inputAddress2"
                placeholder="Enter your name htmlFor the recipient if you want"
              />
            </div>
            <div className="form-row fontOptionsCart">
              <div className="form-group col-md-4">
                <select id="inputState" className="form-control">
                  <option defaultValue>Helvetica</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <select id="inputState" className="form-control">
                  <option defaultValue>15</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <p>
                    <i className="fa-solid fa-bold"></i>
                  </p>
                  <p>
                    <i className="fa-solid fa-italic"></i>
                  </p>
                  <p>
                    <i className="fa-solid fa-underline"></i>
                  </p>
                  <p>
                    <i className="fa-solid fa-align-left"></i>
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
            className="btn greetAhead cartButtonActive"
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
