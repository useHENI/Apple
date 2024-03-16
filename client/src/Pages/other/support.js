import React from "react";

import img2 from "../../images/home/apple-support.JPG";


function Spport() {
    return (
      <div>
        <section className="internal-page-wrapper top-100 bottom-100">
          <div className="container">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-12">
                <div className="title-wraper bold p">Support Page</div>
                <img className="img page" src={img2} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  
}
export default Spport;