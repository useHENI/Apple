import React from 'react';
import Mine from './mine/Mine.js';
import Rating from './Rating.js';

function Section() {
  
    return (
        <>
      
        <Mine img="first-hightlight-wrapper" alert="New" color="title-wraper bold black" title="iPad Pro" link="Order" textf="iPad Pro available starting 3.25" textl="Magic Keyboard coming in May"/>
        <Mine img="second-hightlight-wrapper" alert="New" color="title-wraper bold black" title="MacBook Air" description="Twice the speed. Twice the storage." dcolor="description-wrapper black" price="From $999." pcolor="price-wrapper grey" link="Buy"/>
        <Rating />
        <Mine img="third-hightlight-wrapper" color="title-wraper bold" title="iPhone 11 Pro" dcolor="description-wrapper" description="Pro cameras. Pro display. Pro performance." price="From $24.95/mo. or $599 with trade‑in." pcolor="price-wrapper" link="Buy"/>
      
        </>
    )

}

export default Section;   