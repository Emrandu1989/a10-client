import logo1 from "../../assets/logo/images (1).jpg";
import logo2 from "../../assets/logo/images (2).jpg";
import logo3 from "../../assets/logo/images.jpg";
import logo4 from "../../assets/logo/natural-materials-jute-thread-burlap-260nw-2139153667.webp";
import logo5 from "../../assets/logo/wood-industries-company-logo-with-the-concept-of-saws-and-carpentry-and-classic-and-modern-style-vector.jpg";

const Vision = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-4 ">
      <div className="card lg:lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo1} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Made Your Goods</h2>
          <p>You Should Use jute for sustainable and pollution free world </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo2} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Wooden World</h2>
          <p>Wooden furniture makes your life more comfortable</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo3} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Jute Craft</h2>
          <p>Jute craft makes your home decoration unique</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo4} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Decorate Your Home</h2>
          <p>You can decorate your Home by jute products.</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo5} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Wooden Craft</h2>
          <p>Decorate your home by creating wooden furniture</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Vision;
