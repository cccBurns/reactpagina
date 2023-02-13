import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";
    
const film = { id: 1, image: "https://logg.api.cygnus.market/static/logg/Global/Placa%20de%20Video%20ASUS%20NVIDIA%20GeForce%20RTX%203060%20Ti%20Dual%20V2%20OC%208GB%20GDDR6%20PCIe%204.0%20LHR/bf1b2543d5094ba9b0b073e924459564.webp", title:"RTX3060" };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;