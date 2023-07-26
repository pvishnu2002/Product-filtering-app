import React from 'react'
import './Category.css'
import Input from '../../components/Input'

const Category = ({ setSelectedCategory }) => {
  const handleRadioButton = (e) => {
    setSelectedCategory(e.target.value);
  }
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div>
        <label className='sidebar-label'>
          <input onChange={handleRadioButton} type='radio' value='' name='test' />
          <span className='checkmark'></span>All
        </label>

        <Input
          handleChange={handleRadioButton}
          value='sneakers'
          title='Sneakers'
          name='test'
        />
        <Input
          handleChange={handleRadioButton}
          value='flats'
          title='Flats'
          name='test'
        />
        <Input
          handleChange={handleRadioButton}
          value='sandals'
          title='Sandals'
          name='test'
        />
        <Input
          handleChange={handleRadioButton}
          value='heels'
          title='Heels'
          name='test'
        />

      </div>
    </div>
  )
}

export default Category