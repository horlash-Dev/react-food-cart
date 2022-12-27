import bannerStyle from "./hero.module.css"

const Hero = () => {

return (
    <header className={bannerStyle.bgImg}>
    <div className={bannerStyle.overlay} ></div>
    <div className="container px-5 text-white ">
      <div className="row gx-5 align-items-center">
        <div className={"col-lg-12"} >
          <div className={"mb-5 mb-lg-0 text-center"}>
            <h1 className={bannerStyle.h1}>
              FOOD IS READY
            </h1>
            <p className="lead fw-normal mb-5 text-white">
              React food app ('built with cart module, context-api, react hooks')
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
);
}

export default Hero;