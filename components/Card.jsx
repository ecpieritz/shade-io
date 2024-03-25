import Link from "next/link";
import Image from "next/image";

export default function Card(props) {
  return (
    <>
      <h4>{props.cardTitle}</h4>
      <div class="card border-0" style={{ width: "100%" }}>
        <Image src={props.imgUrl} alt="banner" width={400} height={200} />
        <div class="card-body px-0">
          <p class="card-text">{props.cardText}</p>
          <Link href="#" class="btn shPurpleOutlineBtn">
            Learn more
            <Image
              src="/images/sh-icon__right-arrow.png"
              alt="right arrow"
              width={15}
              height={12}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
