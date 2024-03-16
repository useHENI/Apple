import React from "react";

function Fsection(props) {
  return (
    <div className={props.container}>
      <div className={props.sidedev}>
        <div className={props.tcolor}>{props.title}</div>

        {props.icons && (
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={props.icons} />
            </div>
          </div>
        )}

        {props.descrip && (
          <div className="description-wraper">
            {props.descrip}
            {props.descriptwo && <div>{props.descriptwo}</div>}
          </div>
        )}

        {props.descripWhite && (
          <div className="description-wraper white">
            {props.descripWhite}
          </div>
        )}

        {props.banker && (
          <div className="tvshow-logo-wraper">
            <img src={props.banker} />
          </div>
        )}

        {props.appleTV && (
          <div className="watch-more-wrapper">
            <a href="#">{props.appleTV}</a>
          </div>
        )}

        {props.price && (
          <div className="price-wrapper">
            {props.price}
            <sup>1</sup>
          </div>
        )}

        <div className={props.linkc}>
          {props.flink && (<ul>
            <li>
              <a href="">
                {props.flink}
                {props.suplink && <sup>{props.suplink}</sup>}
              </a>
            </li>
            {props.slink && (
              <li>
                <a href="">{props.slink}</a>
              </li>
            )}
          </ul>)}
        </div>
      </div>
    </div>
  );
}

export default Fsection;
