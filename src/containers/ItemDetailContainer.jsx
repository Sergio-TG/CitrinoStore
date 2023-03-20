import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
      const db = getFirestore();
      const cristalesCollection = docs(db, "cristales", id);
      getDocs(cristalesCollection).then((querySnapshot) =>{
        const cristales = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
      }));
      setData(cristales);
      });
    }, []);
  
    return (
      <div>
        {loading ? <Loading /> : <ItemDetail cristales={data} />}
      </div>
    );
  };
  
export default ItemDetailContainer;