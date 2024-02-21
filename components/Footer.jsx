
export default function Footer() {
  return (
    <footer className="shFooter">
      <div className="container p-10">
        <div className="row">
          <div className="col-md-3">
            <h2>Shade.io</h2>
            <p className="my-3">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>

            <div className="socials">
              <a href="">
                <img src="./images/sh-icon__facebook.svg" alt="facebook" />
              </a>
              <a href="">
                <img src="./images/sh-icon__instagram.svg" alt="instagram" />
              </a>
              <a href="">
                <img src="./images/sh-icon__linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </div>

          <div className="col-md-2 d-flex flex-column text-center">
            <h4 className="mb-3">Company</h4>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Careers</a>
            <a href="">Press</a>
          </div>

          <div className="col-md-2 d-flex flex-column text-center">
            <h4 className="mb-3">Product</h4>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">News</a>
            <a href="">Help desk</a>
            <a href="">Support</a>
          </div>

          <div className="col-md-2 d-flex flex-column text-center">
            <h4 className="mb-3">Services</h4>
            <a href="">Digital Marketing</a>
            <a href="">Content Writing</a>
            <a href="">UI/UX Design</a>
            <a href="">Website/App creation</a>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-end">
              <h4 className="mb-3">Address</h4>
              <p>5th street, Maguari district</p>
              <p>Ananindeua - Pará</p>
              <p>Brazil</p>
              <p>+55 91 98765-4321</p>
          </div>
        </div>
      </div>
    </footer>
  );
}