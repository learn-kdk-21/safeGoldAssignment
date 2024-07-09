import React from 'react';
import advertiseShield from '../../assets/advertiseShield.png';
import zeroNegative from '../../assets/zeroNegative.png';
import freeInsurance from '../../assets/freeInsurance.png';
import qualityCertified from '../../assets/qualityCertified.png';
import orderTracking from '../../assets/orderTracking.png';
import './index.scss';

const advertiseData = [
  { id: 1, img: qualityCertified, title: '24K Guaranteed Quality Certified' },
  { id: 2, img: freeInsurance, title: 'Free Insurance on Delivery' },
  { id: 3, img: zeroNegative, title: 'Zero negative weight tolerance' },
  { id: 4, img: orderTracking, title: 'Order Tracking & Support' },
];
export const Advertisement = () => {
  return (
    <div className="advertisementWrap">
      <div className="safeGoldWrap">
        <img src={advertiseShield} alt="advertiseShield" />
        <div>SafeGold Guarantee</div>
      </div>
      {advertiseData &&
        advertiseData.map((item, index) => (
          <div key={index} className="advertisementContentWrap">
            <img src={item.img} alt="img" />
            <div className="contentTitleWrap">{item.title}</div>
          </div>
        ))}
    </div>
  );
};
