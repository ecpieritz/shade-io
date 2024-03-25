import Link from "next/link";
import Image from "next/image";

export default function Grow() {
  return (
    <section className="shGrow">
      <Image
            className="shGrow-bg"
            src="/images/sh-help-grow__img.png"
            alt="right arrow"
            width={1200}
            height={600}
          />
      <div className="container p-25 text-center">
        <Link href="" target="blank">
          <Image
            src="/images/sh-icon__play-white-bg.png"
            alt="right arrow"
            width={60}
            height={60}
          />
        </Link>
        <h1 className="mt-5 mb-3">How do we help you to grow?</h1>
        <p className="w-50 m-auto">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
    </section>
  );
}
