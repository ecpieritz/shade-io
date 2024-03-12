import Link from "next/link";

export default function Card(props) {
  return (
    <>
    <h4>{props.cardTitle}</h4>
    <div class="card border-0" style={{width: '100%'}}>
      <img src={props.imgUrl} class="card-img-top" alt="..." />
      <div class="card-body px-0">
        <p class="card-text">
          {props.cardText}
        </p>
        <Link href="#" class="btn shPurpleOutlineBtn">
          Learn more <img src="./images/sh-icon__right-arrow.png" alt="right arrow" />
        </Link>
      </div>
    </div>
    </>
  );
}
