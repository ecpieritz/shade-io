import Card from "./Card";
import Section3Cols from "./Section3Cols";

export default function Services(props) {
  const servicesCol1 = <Card 
    cardTitle="Digital Marketing" 
    imgUrl="/images/sh-services__card-01.png" 
    cardText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
  />;

  const servicesCol2 = <Card 
    cardTitle="Business Growth" 
    imgUrl="/images/sh-services__card-02.png" 
    cardText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page." 
  />;

  const servicesCol3 = <Card 
    cardTitle="Content Marketing" 
    imgUrl="/images/sh-services__card-03.png" 
    cardText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page." 
  />;

  return (
    <section className="shServices" id='sh-services'>
      <div className="container m-10">
        <div className="text-center mb-5">
          <h2>Services we offer for you</h2>
          <p className="w-50 mx-auto mt-3">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        <Section3Cols
          col1={servicesCol1}
          col2={servicesCol2}
          col3={servicesCol3}
        />
      </div>
    </section>
  );
}
