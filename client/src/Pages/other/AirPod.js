import { Link } from "react-router-dom";
import img1 from "../../images/home/airpods max.jpg";

function Music() {
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold p">AirPods</div>

              <div className="row pages">
                <div className="col-sm-12 col-md-6 my-auto">
                <div className="product-title">AirPods Max</div>
                <div className="product-brief">2nd generation</div>

                <div className="monthly-price">From $549</div>
                <div className="links-wrapper">
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to="/">Learn more</Link>
                      </li>
                    </ul>
                  </div>
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
export default Music;
