import React, { useEffect, useState } from "react";

import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import Title from '../Title';

 const films = [
    { id: 1, image: "https://logg.api.cygnus.market/static/logg/Global/Placa%20de%20Video%20ASUS%20NVIDIA%20GeForce%20RTX%203060%20Ti%20Dual%20V2%20OC%208GB%20GDDR6%20PCIe%204.0%20LHR/bf1b2543d5094ba9b0b073e924459564.webp", title:"RTX3060" },
    { id: 2, image: "https://uranostream.com/wp-content/uploads/2022/07/descarga.png", title:"RTX3070" },
    { id: 3, image: "https://www.comeros.com.ar/wp-content/uploads/2022/10/Comeros-AORUS-GV-N308TAORUSM-12GD-9.webp", title:"RTX3080" },
]; 

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        getData.then(res => setData(res));


    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={3} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;