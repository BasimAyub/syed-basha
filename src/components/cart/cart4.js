export default function Cart4(props) {
  return (
    <div>
      <form className="greetMessageMain shadow">
        <h4>Shipping Detail</h4>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">
              First Name<span className="requireStart">*</span>
            </label>
            <input
              type="text"
              className="form-control sec10-input"
              id="inputAddress2"
              placeholder=""
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">
              Last Name<span className="requireStart">*</span>
            </label>
            <input
              type="text"
              className="form-control sec10-input"
              id="inputAddress2"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">
            Street address<span className="requireStart">*</span>
          </label>
          <input
            type="text"
            className="form-control sec10-input"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">
            House number <span className="requireStart">*</span>
          </label>
          <input
            type="text"
            className="form-control sec10-input"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">
            Postcode / ZIP <span className="requireStart">*</span>
          </label>
          <input
            type="text"
            className="form-control sec10-input"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">
            Town / City <span className="requireStart">*</span>
          </label>
          <input
            type="text"
            className="form-control sec10-input"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Order notes (optional)</label>
          <input
            type="text"
            className="form-control sec10-input"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">
            Delivery date <span className="requireStart">*</span>
          </label>
          <input
            type="text"
            className="form-control sec10-input"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <p>
            Hey! <br /> Your flowers will arrive the next day if the order was
            placed before 12:00 because we deliver flowers every day of the week
            except weekends and holidays. Your flowers are always sent via
            PostNord before the desired delivery date. We make sure that the
            flowers arrive in your mailbox at the time you have specified, but
            the exact delivery depends on PostNord htmlFor any questions about
            shipping or about your order, please contact us:
            kundservice@postablomster.se Thanks
          </p>
        </div>
        <h4>Billing Detail</h4>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">
              First Name<span className="requireStart">*</span>
            </label>
            <input
              type="text"
              className="form-control sec10-input"
              id="inputAddress2"
              placeholder=""
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">
              Last Name<span className="requireStart">*</span>
            </label>
            <input
              type="text"
              className="form-control sec10-input"
              id="inputAddress2"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">
            Mobile number <span className="requireStart">*</span>
          </label>
          <input
            type="text"
            className="form-control sec10-input"
            id="inputAddress2"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">
            E-mail<span className="requireStart">*</span>
          </label>
          <input
            type="text"
            className="form-control sec10-input"
            id="inputAddress2"
            placeholder=""
          />
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
              props.stepFinal();
            }}
          >
            Nästa
          </button>
        </div>
      </form>
    </div>
  );
}
