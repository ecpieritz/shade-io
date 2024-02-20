import Section2Cols from "./Section2Cols";
export default function Choose() {
  const chooseCol1 = <img src="./images/sh-choose__img.png" alt="Man" />
  const chooseCol2 = <>
    <h2 className="w-75 mb-4">Reasons you should choose us to grow today.</h2>
    <p className="w-75">We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>

    <div className="row">
      <div className="col-6">
        <img src="./images/sh-icon__check.png" alt="check" />
        <p><strong>Fully Responsive</strong></p>
      </div>
      <div className="col-6">
        <img src="./images/sh-icon__check.png" alt="check" />
        <p><strong>Beautiful Layouts</strong></p>
      </div>
      <div className="col-6">
        <img src="./images/sh-icon__check.png" alt="check" />
        <p><strong>Easy to Edit</strong></p>
      </div>
      <div className="col-6">
        <img src="./images/sh-icon__check.png" alt="check" />
        <p><strong>Google Font Included</strong></p>
      </div>
    </div>
  </>

  return (
    <section className="shChoose">
      <div className="container">
        <Section2Cols col1={chooseCol1} col2={chooseCol2} />
      </div>
    </section>
  );
}