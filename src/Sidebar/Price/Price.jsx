import React from 'react'
import './Price.css';
import Input from '../../components/Input';

const Price = ({ setSelectedCategory }) => {
  const handlePrice = (e) => {
    setSelectedCategory(e.target.value);
  }
  return (
    <div className='ml'>
      <h2 className='price-title'>Price</h2>
      <label className='sidebar-label'>
        <input onChange={handlePrice} type='radio' value='' name='test2' />
        <span className='checkmark'></span>All
      </label>

      <Input
        handleChange={handlePrice}
        value={50}
        title='$0-$50'
        name='test2'
      />

      <Input
        handleChange={handlePrice}
        value={100}
        title='$50-$100'
        name='test2'
      />

      <Input
        handleChange={handlePrice}
        value={150}
        title='$100-$150'
        name='test2'
      />

      <Input
        handleChange={handlePrice}
        value={200}
        title='Over $150'
        name='test2'
      />
    </div>
  )
}

export default Price