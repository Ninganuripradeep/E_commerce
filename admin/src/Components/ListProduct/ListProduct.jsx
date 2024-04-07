// import React, { useEffect, useState } from "react";

// const ListProduct=()=>{
//   const[allproducts,setAllProducts]=useState([]);
//   const fetchInfo=async()=>{
//     await fetch('http://localhost:8000/allproducts')
//     .then((res)=>res.json())
//     .then((data)=>{
//       setAllProducts(data)
//     });
//   }
//   useEffect(()=>{
//     fetchInfo();
//   },[])
//   const remove_product=async(id)=>{
//     await fetch('http://localhost:8000/removeproduct',{
//       method:'POST',
//       headers:{
//         Accept:'Application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({id:id})

//     })
//     console.log("successfully removed");
//     await fetchInfo()
//   }
//   return(
//     <div className="list-product">
//    <h1>Al product list</h1>
//    <div className="listprodut-format-main">
//     <p>products</p>
//     <p>title</p>
//     <p>old price</p>
//     <p>new price</p>
//     <p> category</p>
//     <p>remove</p>
//    </div>
//    <div className="listprodut-allproducts">
//     <hr/>
// {allproducts.map((product,index)=>{
//   return <><div   key={index} className="listproduct-format-main listproduct-format">
//   <img src={product.image} alt=""/>
//    <p>{product.id}</p>
//     <p>{product.name}</p>
//     <p>${product.old_price}</p>
//     <p>${product.new_price}</p>
//     <p>{product.category}</p>
//     <button onClick={()=>{remove_product(product.id)}}>remove</button>

//   </div>
//   <hr/>
//   </>
// })}
//    </div>
//     </div>

//   )
// }
// export default ListProduct

import React, { useEffect, useState } from 'react';
import EditProduct from '../EditProduct/EditProduct';
import './ListProduct.css'
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const fetchInfo = async () => {
    await fetch('http://localhost:8000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch('http://localhost:8000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });
    console.log('successfully removed');
    await fetchInfo();
  };

  const edit_product = (id) => {
    const productToEdit = allproducts.find((product) => product.id === id);
    setEditProduct(productToEdit);
    
  };

  const updateProduct = async (updatedProduct) => {
    await fetch(`http://localhost:8000/updateproduct/${updatedProduct.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.success ? alert('Product updated') : alert('Update failed');
      });
    await fetchInfo();
    setEditProduct(null);
  };

  return (
    <div className="list-product">
      <h1>All product list</h1>
      <div className="listprodut-format-main">
        <p>products</p>
        <p>title</p>
        <p>old price</p>
        <p>new price</p>
        <p> category</p>
        <p>remove</p>
        <p>edit</p>
      </div>
      <div className="listprodut-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" />
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <button onClick={() => remove_product(product.id)}>remove</button>
            <button onClick={() => edit_product(product.id)}>edit</button>
          </div>
        ))}
      </div>
      {editProduct && (
        <EditProduct key={editProduct.id} product={editProduct} updateProduct={updateProduct} />
      )}
    </div>
  );
};

export default ListProduct;
