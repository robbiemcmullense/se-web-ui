import React, { Component } from 'react';

import {
  SeContainer,
  SeBlock,
  SeCarousel,
  SeCarouselItem,
  SeBlockContent,
  SeBlockHeader,
} from '@se/web-ui-react';

const items = [
  {
    orderNumber: '81083501',
    poNumber: '18762',
    releaseDate: '16-Feb-2019',
    reqDelyDate: '25-Feb-2019',
    shipTo: 'Indianapolis, IN',
    delyService: 'Express',
  },
  {
    orderNumber: '81083502',
    poNumber: '21762',
    releaseDate: '16-Feb-2019',
    reqDelyDate: '25-Feb-2019',
    shipTo: 'Indianapolis, IN',
    delyService: 'Express',
  },
  {
    orderNumber: '81083503',
    poNumber: '225762',
    releaseDate: '16-Feb-2019',
    reqDelyDate: '25-Feb-2019',
    shipTo: 'Indianapolis, IN',
    delyService: 'Express',
  },
  {
    orderNumber: '81083504',
    poNumber: '24762',
    releaseDate: '16-Feb-2019',
    reqDelyDate: '25-Feb-2019',
    shipTo: 'Indianapolis, IN',
    delyService: 'Express',
  },
  {
    orderNumber: '81083505',
    poNumber: '26762',
    releaseDate: '16-Feb-2019',
    reqDelyDate: '25-Feb-2019',
    shipTo: 'Indianapolis, IN',
    delyService: 'Express',
  },
  {
    orderNumber: '81083506',
    poNumber: '26762',
    releaseDate: '17-Feb-2019',
    reqDelyDate: '27-Feb-2019',
    shipTo: 'Indianapolis, IN',
    delyService: 'Express',
  },
  {
    orderNumber: '81083507',
    poNumber: '26762',
    releaseDate: '16-Feb-2019',
    reqDelyDate: '25-Feb-2019',
    shipTo: 'Indianapolis, IN',
    delyService: 'Express',
  },
  {
    orderNumber: '81083508',
    poNumber: '26762',
    releaseDate: '17-Feb-2019',
    reqDelyDate: '27-Feb-2019',
    shipTo: 'Indianapolis, IN',
    delyService: 'Express',
  },
];

export default class Carousel extends Component {
  render() {
    return (
      <SeContainer>
        <SeBlock margin="medium" outline>
          <h2>Carousel Demo</h2>
          <SeCarousel item-min-width="300">
            {items.map((item, idx) => (
              <SeCarouselItem key={idx}>
                <SeBlock option="card-old">
                  <SeBlockHeader>
                    {idx + 1}::{item.orderNumber}
                  </SeBlockHeader>
                  <SeBlockContent>
                    <div>P.O. # {item.poNumber}</div>
                    <div>Rel.Date: {item.releaseDate}</div>
                    <div>Req.Date: {item.reqDelyDate}</div>
                    <div>Ship To: {item.shipTo}</div>
                    <div>Dely Svc: {item.delyService}</div>
                  </SeBlockContent>
                </SeBlock>
              </SeCarouselItem>
            ))}
          </SeCarousel>
        </SeBlock>
      </SeContainer>
    );
  }
}
