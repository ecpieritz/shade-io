export default function Section2Cols(props) {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">{props.col1}</div>
      <div className="col-md-6">{props.col2}</div>
    </div>
  );
}
