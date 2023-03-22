import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = doc(db, "cristales", id);
    getDoc(itemsCollection)
    .then((snapshot) =>{
      setDetalleProducto({id: snapshot.id, ...snapshot.data() })
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? <Loading /> : <ItemDetail detalleProducto={detalleProducto} />}
    </div>
  );
};

export default ItemDetailContainer;