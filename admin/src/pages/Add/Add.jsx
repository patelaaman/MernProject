import React, { useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'

const Add = () => {

const [image, setImage] = useState(false)

  return (
    <div className='add'>
        <form className='flex-col'>
          <div className="add-image-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor='image'>
                <img src={assets.uploadArea}></img>
            </label>
         <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required></input>
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input type='text' name="name" placeholder='type here'></input>
          </div>
          <div className="add-product-description flex-col">
            <p>Product description</p>
            <textarea name="description" rows="6" placeholder='write content here'></textarea>
          </div>
          <div className='add-category-price'>
            <div className="add-category">
                <p>Product category</p>
                <select name='category'>
                    <option value="Wine">Wine</option>
                    <option value="New Arrival">New Arrival</option>
                    <option value="Cigar&Cig">Cigar&Cig</option>
                    <option value="Spirits">Spirits</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Prouduct Price</p>
                <input type="Number" name="price" placeholder='$20'></input>
            </div>
          </div >
          <button type="submit" className='add-btn'>ADD</button>
        </form>
      
    </div>
  )
}

export default Add
