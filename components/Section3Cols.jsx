export default function Section3Cols(props) {
  return (
    <div className="row align-items-center">
      <div className="col-md-4">{props.col1}</div>
      <div className="col-md-4">{props.col2}</div>
      <div className="col-md-4">{props.col3}</div>
    </div>
  );
}
