import Link from "next/link";

export default function Banner(props) {
  return (
    <section className="shBanner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{props.title}</h1>
            <p>{props.description}</p>

            <Link href="" className='shPurpleBtn'>{props.btnDesc}</Link>
          </div>
          <div className="col-md-6">
            <img src={props.imgUrl} alt="teste" />
          </div>
        </div>
      </div>
    </section>
  );
}