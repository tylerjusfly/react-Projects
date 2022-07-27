import React from 'react'
import emptyStar from '../assets/images/empty-star.svg'
import filledStar from '../assets/images/filled-star.svg'

export const Star = (props) => {

    /**
       * @desc changing state for favorite question
       * @returns {Image} - A marked star icon or not marked 
       */
      let SetImage = props.isFilled ? filledStar : emptyStar

  return (
    <img src={SetImage} alt="Star Icon" className='Q-image' onClick={props.onClick} />
  )
}
