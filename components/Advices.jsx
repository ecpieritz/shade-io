import Section3Cols from "./Section3Cols";
import Link from "next/link";
const adviceCol1 = (
  <>
    <h3>Experienced experts are giving advices.</h3>
    <p className="mt-4 mb-5">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
    <Link href="" className='shPurpleBtn'>Learn how we work</Link>
  </>
);

const adviceCol2 = (
  <>
    <img src="./images/sh-advice__img.png" alt="Men with computer" />
  </>
);

const adviceCol3 = (
  <>
    <h3>1M+</h3>
    <p className="mb-4">Customers visit Albino every month to get their service done.</p>
    <h3>92%</h3>
    <p className="mb-4">Satisfaction rate comes from our awesome customers.</p>
    <h3>4.9/5.0</h3>
    <p>Average customer ratings we have got all over internet.</p>
  </>
);
export default function Advice(props) {
  return (
    <section className="shAdvice">
      <div className="container m-10">
        <Section3Cols col1={adviceCol1} col2={adviceCol2} col3={adviceCol3} />
      </div>
    </section>
  );
}
