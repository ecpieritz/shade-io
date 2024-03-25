import Image from "next/image";

export default function PersonTestimonial(props) {
  return (
    <div className="col-md-4 mt-5 text-center">
      <Image
        className="mb-3"
        src={props.imgUrl}
        alt=""
        width={60}
        height={60}
      />
      <p style={{ fontSize: "32px" }}>"{props.testimonial}"</p>
      <p>
        <strong>{props.name}</strong> | {props.profission}
      </p>
    </div>
  );
}
