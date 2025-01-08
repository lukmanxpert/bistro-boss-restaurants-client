import React from 'react';
import OurMenuBanner from './OurMenuBanner';
import SectionTitle from '../../components/shared/SectionTitle'
const OurMenu = () => {
    return (
        <div>
            <OurMenuBanner></OurMenuBanner>
            <SectionTitle title={"Today's Offer"} subTitle={"---Don't Miss---"}></SectionTitle>
        </div>
    );
};

export default OurMenu;