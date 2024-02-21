export default function Contact() {
  return (
    <section className="shContact">
      <div className="container p-10">
        <h2 className="text-center">Ready to get started?</h2>

        <form className="w-75 mx-auto mt-5">
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              id="inputNome"
              placeholder="Name"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
          <div className="form-group mt-3">
            <select id="inputSelect" className="form-control">
              <option selected>Choose 1 option</option>
              <option>Website</option>
              <option>App</option>
              <option>Offline Marketing</option>
              <option>Rebrand</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              id="inputMensagem"
              rows="3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="form-group mt-3 form-check">
            <input type="checkbox" className="form-check-input" id="checkTermos" />
            <label className="form-check-label" for="checkTermos">
              Acept the terms
            </label>
          </div>
          <button type="submit" className="shPurpleBtn mt-3 w-100 py-3" style={{fontSize:'22px', fontWeight: '700'}}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
