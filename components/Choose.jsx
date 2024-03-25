import Section2Cols from "./Section2Cols";
import Image from "next/image";

export default function Choose() {
  const chooseCol1 = <Image src="/images/sh-choose__img.png" alt="right arrow" width={500} height={600} />
  const chooseCol2 = <>
    <h2 className="w-75 mb-4">Reasons you should choose us to grow today.</h2>
    <p className="w-75">We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>

    <div className="row">
      <div className="col-6">
        <Image
          src="/images/sh-icon__check.png"
          alt="right arrow"
          width={15}
          height={15}
        />
        <p><strong>Fully Responsive</strong></p>
      </div>
      <div className="col-6">
        <Image
          src="/images/sh-icon__check.png"
          alt="right arrow"
          width={15}
          height={15}
        />
        <p><strong>Beautiful Layouts</strong></p>
      </div>
      <div className="col-6">
        <Image
          src="/images/sh-icon__check.png"
          alt="right arrow"
          width={15}
          height={15}
        />
        <p><strong>Easy to Edit</strong></p>
      </div>
      <div className="col-6">
        <Image
          src="/images/sh-icon__check.png"
          alt="right arrow"
          width={15}
          height={15}
        />
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