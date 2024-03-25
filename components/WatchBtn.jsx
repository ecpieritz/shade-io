import Link from "next/link";
import Image from "next/image";

export default function WatchBtn(props) {
  return (
    <div className="shWatchBtn">
      <Image
            src="/images/sh-icon__play-white-bg.png"
            alt="right arrow"
            width={30}
            height={25}
          />
      <p>{props.text}</p>
      <Link href={props.link}>{props.linkText}</Link>
    </div>
  );
}