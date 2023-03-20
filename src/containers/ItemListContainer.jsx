import React from "react";
import ItemList from "../components/ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "../components/Loading";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import "../index.css"

const ItemListContainer = ({ greeting }) => {

  const { categoriaid } = useParams();
  const [loading, setLoading] = useState(true);
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
      setLoading(true);

      const db = getFirestore();
      const itemsCollection = categoriaid ? query(collection(db, "cristales"), where("categoria", "==", categoriaid)) : collection(db, "cristales");
      getDocs(itemsCollection)
          .then((snapshot) => {
              setListaProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
  }, [categoriaid]);

  return (
      <>
          <h1 className="Cristales del Mundo">{greeting}</h1>
          {loading ? <Loading /> : <ItemList product={listaProductos} />}
      </>
  );
};

export default ItemListContainer;