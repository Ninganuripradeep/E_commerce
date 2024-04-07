
import React, { useState } from 'react';
import './EditProduct.css'
const EditProduct = ({ product, updateProduct }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [newImage, setNewImage] = useState(null);

  const handleChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = () => {
  
    updateProduct(editedProduct, newImage);
  };

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <div className="editproduct-itemfield">
        <p>ID</p>
        <input type="text" value={editedProduct.id} readOnly />
        <p>Product Title</p>
        <input type="text" value={editedProduct.name} onChange={handleChange} name="name" />
        <p>Anime Type</p>
        <input type="text" value={editedProduct.animeType} onChange={handleChange} name="animeType" />
        <p>Model</p>
        <input type="text" value={editedProduct.model} onChange={handleChange} name="model" />
      </div>
      <div className="editproduct-price">
        <div className="editproduct-itemfield">
          <p>Price</p>
          <input type="text" value={editedProduct.old_price} onChange={handleChange} name="old_price" />
        </div>
        <div className="editproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" value={editedProduct.new_price} onChange={handleChange} name="new_price" />
        </div>
      </div>
      <p>Sell Type</p>
      <select value={editedProduct.sellType} onChange={handleChange} name="sellType">
        <option value="new arrival">New Arrival</option>
        <option value="popular">Popular</option>
      </select>
      <p>Product Category</p>
      <select value={editedProduct.category} onChange={handleChange} name="category">
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kids">Kids</option>
      </select>
      <label htmlFor="new-image">New Image</label>
      <input type="file" id="new-image" name="newImage" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default EditProduct;
