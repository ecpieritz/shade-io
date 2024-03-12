import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shFooter">
      <div className="container p-10">
        <div className="row">
          <div className="col-md-3">
            <h2>Shade.io</h2>
            <p className="my-3">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>

            <div className="socials">
              <Link href="">
                <img src="./images/sh-icon__facebook.svg" alt="facebook" />
              </Link>
              <Link href="">
                <img src="./images/sh-icon__instagram.svg" alt="instagram" />
              </Link>
              <Link href="">
                <img src="./images/sh-icon__linkedin.svg" alt="linkedin" />
              </Link>
            </div>
          </div>

          <div className="col-md-2 d-flex flex-column text-center">
            <h4 className="mb-3">Company</h4>
            <Link href="">About Us</Link>
            <Link href="">Contact Us</Link>
            <Link href="">Careers</Link>
            <Link href="">Press</Link>
          </div>

          <div className="col-md-2 d-flex flex-column text-center">
            <h4 className="mb-3">Product</h4>
            <Link href="">Features</Link>
            <Link href="">Pricing</Link>
            <Link href="">News</Link>
            <Link href="">Help desk</Link>
            <Link href="">Support</Link>
          </div>

          <div className="col-md-2 d-flex flex-column text-center">
            <h4 className="mb-3">Services</h4>
            <Link href="">Digital Marketing</Link>
            <Link href="">Content Writing</Link>
            <Link href="">UI/UX Design</Link>
            <Link href="">Website/App creation</Link>
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