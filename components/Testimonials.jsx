import PersonTestimonial from "./PersonTestimonial";

export default function Testimonials() {
  return (
    <section className="shTestimonials" id='sh-testimonials'>
      <div className="container m-10">
        <h1 className="text-center">What people say about us</h1>
        <p className="mx-auto my-4 w-50 text-center ">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>

        <div className="row">
          <PersonTestimonial 
            imgUrl='./images/sh-testimonial__01.png'
            testimonial='You made it so simple. My new site is so much faster and easier to work with than my old site.'
            name='Isabella Chavez'
            profission='Graphic Designer'
          />
          <PersonTestimonial 
            imgUrl='./images/sh-testimonial__02.png'
            testimonial='Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.'
            name='Curtis Rhodes'
            profission='Digital Marketing'
          />
          <PersonTestimonial 
            imgUrl='./images/sh-testimonial__03.png'
            testimonial='Must have book for all, who want to be Product Designer or Interaction Designer.'
            name='Lucas Mann'
            profission='CEO/Founder'
          />
        </div>
      </div>
    </section>
  );
}
