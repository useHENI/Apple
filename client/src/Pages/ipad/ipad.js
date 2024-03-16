import { Link } from "react-router-dom";

import img1 from "../../images/home/new ipad.jpg";


function Ipad() {
    return (
      <div>
        <section className="internal-page-wrapper top-100 bottom-100">
          <div className="container">
            <div className="h-100 align-items-center justify-content-center text-center">
              <div className="col-12">
                <div className="title-wraper bold p">Ipad Page</div>

                <div className="row pages">

                <div className="col-sm-12 col-md-6 my-auto ">
                  <div className="product-title">iPad</div>
                  <div className="product-brief">Lovable. Drawable. Magical.</div>
                  <div className="monthly-price">From $449</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to='/'>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6" >
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
export default Ipad;