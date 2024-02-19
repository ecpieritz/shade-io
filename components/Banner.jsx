import style from '@/styles/Banner.module.css'

export default function Banner(props) {
  return (
    <section className={style.shBanner}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{props.title}</h1>
            <p>{props.description}</p>

            <a href="" className='shPurpleBtn'>{props.btnDesc}</a>
          </div>
          <div className="col-md-6">
            <img src={props.imgUrl} alt="teste" />
          </div>
        </div>
      </div>
    </section>
  );
}