import React from 'react';
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const { categoria } = useParams();
  console.log(categoria);

  const [productList, setProductList] = useState([]);
  console.log(productList);
  const productos = [
    {
      id: 1,
      nombre: "Amatista",
      precio: 3900,
      stock: 8,
      imagen: "/imagenes/amethyst.jpg",
      categoria: "Cristales"
    },
    {
      id: 2,
      nombre: "Berilo",
      precio: 2700,
      stock: 6,
      imagen: "/imagenes/berile.jpg",
      categoria: "Cristales"
    },
    {
      id: 3,
      nombre: "Cuarzo",
      precio: 3400,
      stock: 7,
      imagen: "/imagenes/crystal.jpg",
      categoria: "Cristales"
    },
    {
      id: 4,
      nombre: "Citrino",
      precio: 2500,
      stock: 8,
      imagen: "/imagenes/citrine.jpg",
      categoria: "Gemas"
    },
    {
      id: 5,
      nombre: "Jade",
      precio: 2500,
      stock: 9,
      imagen: "/imagenes/jade.jpg",
      categoria: "Gemas"
    },
    {
      id: 6,
      nombre: "Malaquita",
      precio: 5200,
      stock: 5,
      imagen: "/imagenes/malaquite.jpg",
      categoria: "Gemas"
    },
    {
      id: 7,
      nombre: "Labradorita",
      precio: 3600,
      stock: 4,
      imagen: "/imagenes/labradorite.jpg",
      categoria: "Piedras"
    },
    {
      id: 8,
      nombre: "Tanzanita",
      precio: 6600,
      stock: 5,
      imagen: "/imagenes/tanzanite.jpg",
      categoria: "Piedras"
    },
    {
      id: 9,
      nombre: "Turmalina",
      precio: 4300,
      stock: 3,
      imagen: "/imagenes/tourmaline.jpg",
      categoria: "Piedras"
    },
  ];

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      if (productos.length === 0) {
        reject(new Error("No hay productos para mostrar"))
      }
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  };

  useEffect(() => {
    getProductos().then((res) => {
      if (categoria){
        setProductList(res.filter((productos)=>productos.categoria === categoria))
      }else{
        setProductList(res)
      }
    });
  }, [categoria]);


  return (
    <div>
      <div className="greeting">
        <h2 className="animate__animated animate__zoomIn">{greeting}</h2>
      </div>
      {  <ItemList productList={productList} />}
    </div>
  );
};


export default ItemListContainer;