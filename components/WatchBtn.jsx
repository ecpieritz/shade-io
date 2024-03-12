import Link from "next/link";

export default function WatchBtn(props) {
  return (
    <div className="shWatchBtn">
      <img src="/images/sh-icon__play-white.png" alt="" />
      <p>{props.text}</p>
      <Link href={props.link}>{props.linkText}</Link>
    </div>
  );
}