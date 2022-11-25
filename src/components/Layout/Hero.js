import bannerStyle from "./hero.module.css"

const Hero = () => {

return (
    <header className={bannerStyle.bgImg}>
    <div className="container px-5">
      <div className="row gx-5 align-items-center">
        <div className={"col-lg-12"} >
          <div className={"mb-5 mb-lg-0 text-center text-lg-start"}>
            <h1 className="display-1">
              FOOD IS READY
            </h1>
            <p className="lead fw-normal text-muted mb-5">
              Launch your mobile app landing page faster with this free.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
);
}

export default Hero;