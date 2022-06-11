import React from 'react';
import { MdStar, MdStarBorder } from "react-icons/md";
import { RateStarsProps } from './RateStars.types';

export const RateStars: React.FC<RateStarsProps> = (props) => {
  const { rate } = props;

  const maxRate = 5;
  const filledStarsColor = "#FCAF17";

  function renderRateStars(numberOfStars: number, icon: React.ReactElement) {
    return Array(numberOfStars).fill(null).map((_, index) => (
      <React.Fragment key={index}>
        {icon}
      </React.Fragment>
    ))
  }

  return (
    <>
      {renderRateStars(rate, <MdStar color={filledStarsColor} />)}
      {rate !== maxRate && (
        renderRateStars(maxRate - rate, <MdStarBorder />)
      )}
    </>
  );
}