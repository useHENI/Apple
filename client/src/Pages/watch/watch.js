import { Link } from "react-router-dom";

import img1 from "../../images/home/watchpage.avif";

function Watch() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold p">Watch Page</div>
              <div className="row pages">
                <div className="col-sm-12 col-md-6 my-auto ">
                  <div className="product-title">Apple Watch</div>
                  <div className="product-brief">
                    The most rugged and capable.
                  </div>

                  <div className="monthly-price">$799</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to="/">Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6">
                  <div className="prodict-image">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Watch;
