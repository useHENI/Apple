import React from "react";

import Fsection from "./Fsection/Fsection";
import appletv from "../../images/icons/apple-tv-logo.png";
import series5 from "../../images/icons/watch-series5-logo.png";
import banker from "../../images/home/banker.png";
import arcade from "../../images/icons/arcade.png";

function Fosection() {
  return (
    <>
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <Fsection
              container="left-side-wrapper col-sm-12 col-md-6"
              sidedev="left-side-container"
              tcolor="title-wraper"
              title="iPhone 11"
              descrip="Just the right amount of everything."
              price="From $18.70/mo. or $499 with trade‑in."
              linkc="links-wrapper"
              flink="Learn more"
              slink="Apply now"
            />
            <Fsection
              container="right-side-wrapper col-sm-12 col-md-6"
              sidedev="right-side-container"
              tcolor="title-wraper white"
              title="Get the latest CDC response to COVID-19."
              linkc="links-wrapper white"
              flink="Watch the PSA"
            />
          </div>
        </div>
      </section>

      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <Fsection
              container="left-side-wrapper col-sm-12 col-md-6"
              sidedev="left-side-container"
              icons={appletv}
              banker={banker}
              appleTV="Watch now on the Apple TV App"
            />

            <Fsection
              container="right-side-wrapper col-sm-12 col-md-6"
              sidedev="right-side-container"
              icons={series5}
              descrip="With the Always-On Retina display."
              descriptwo="You’ve never seen a watch like this."
              linkc="links-wrapper"
              flink="Learn more"
              slink="Buy"
            />
          </div>
        </div>
      </section>

      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <Fsection
              container="left-side-wrapper col-sm-12 col-md-6"
              sidedev="left-side-container"
              icons={arcade}
              descripWhite="Agent 8 is a small hero on a big mission."
              linkc="links-wrapper"
              flink="Play now"
              suplink="2"
              slink="Learn about Apple Arcade"
            />

            <Fsection
              container="right-side-wrapper col-sm-12 col-md-6"
              sidedev="right-side-container"
              tcolor="title-wraper"
              title="Apple Card Monthly Installments"
              descrip="Pay for your next iPhone over time, interest-free with Apple Card."
              linkc="links-wrapper"
              flink="Learn more"
              slink="Apply now"
            />
            {/* <section class="youtubeVideosWrapper top-100">
            </section> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Fosection;
