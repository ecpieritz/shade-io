import Link from "next/link";

export default function Grow() {
  return (
    <section className="shGrow">
      <div className="container p-25 text-center">
        <Link href="" target="blank"><img src="./images/sh-icon__play-white-bg.png" alt="" /></Link>
        <h1 className="mt-5 mb-3">How do we help you to grow?</h1>
        <p className="w-50 m-auto">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
      </div>
    </section>
  );
}