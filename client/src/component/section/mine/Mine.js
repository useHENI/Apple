import React from "react";

function Mine(props) {
    return (
      <section className={props.img}>
        <div className="container">
          {props.alert && (
            <div className="new-alert">{props.alert}</div>
          )}
          <div className={props.color}>{props.title}</div>

          {props.description && (
            <div className={props.dcolor}>{props.description}</div>
          )}

          {props.price && (
            <div className={props.pcolor}>{props.price}</div>
          )}

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">{props.link}</a>
              </li>
            </ul>
          </div>

          {props.textf && (
            <div className="ipod-caption row">
              <div className="col-sm-12 col-md-6 text-md-right">
                {props.textf}
              </div>
              <div className="col-sm-12 col-md-6 text-md-left">
                {props.textl}
              </div>
            </div>
          )}
        </div>
      </section>
    );
}

export default Mine;
