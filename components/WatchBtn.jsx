
export default function WatchBtn(props) {
  return (
    <div className="shWatchBtn">
      <img src="/images/sh-icon__play-white.png" alt="" />
      <p>{props.text}</p>
      <a href={props.link}>{props.linkText}</a>
    </div>
  );
}