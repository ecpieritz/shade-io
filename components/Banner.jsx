import Link from "next/link";
import Image from "next/image";

export default function Banner(props) {
  return (
    <section className="shBanner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{props.title}</h1>
            <p>{props.description}</p>

            <Link href="" className="shPurpleBtn">
              {props.btnDesc}
            </Link>
          </div>
          <div className="col-md-6">
            <Image src={props.imgUrl} alt="banner" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
