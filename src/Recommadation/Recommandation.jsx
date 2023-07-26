import React from 'react'
import './Recommandation.css'
import Buttons from '../components/Buttons'

const Recommandation = ({ handleClick }) => {
  return (
    <div>
      <h2 className='rec-title'>Recommended</h2>
      <div className='rec-flex'>
        <Buttons onClickHandler={handleClick} value="" title="All Products" />
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />       
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />

      </div>
    </div>
  )
}

export default Recommandation