import React, { useEffect, useState } from "react";

import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import Title from '../Title';
import { useParams } from "react-router-dom";

 const Nvidia = [
    { id: 1, image: "https://logg.api.cygnus.market/static/logg/Global/Placa%20de%20Video%20ASUS%20NVIDIA%20GeForce%20RTX%203060%20Ti%20Dual%20V2%20OC%208GB%20GDDR6%20PCIe%204.0%20LHR/bf1b2543d5094ba9b0b073e924459564.webp", category: 'Nvidia', title:"RTX3060" },
    { id: 2, image: "https://uranostream.com/wp-content/uploads/2022/07/descarga.png", category: 'Nvidia', title:"RTX3070" },
    { id: 3, image: "https://www.comeros.com.ar/wp-content/uploads/2022/10/Comeros-AORUS-GV-N308TAORUSM-12GD-9.webp", category: 'Nvidia', title:"RTX3080" },
    { id: 4, image: "https://http2.mlstatic.com/D_NQ_NP_722816-MLA49663782340_042022-O.webp", category: 'Amd', title:"AMDRX6600XT" },
    { id: 6, image: "https://www.topcomputacion.com.ar/wp-content/uploads/2022/04/sapphire_radeon_rx_6700_xt_pulse_12gb_gddr61.jpg", category: 'Amd', title:"AMDRX6700XT" },
    { id: 5, image: "https://front.dev.malditohard.com.ar/img/migration/PLACA-DE-VIDEO-RX-6800-XT-SAPPHIRE-NITRORADEON-16-GB.webp", category: 'Amd', title:"AMDRX6800XT" },
]; 

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Nvidia);
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(Nvidia => Nvidia.category === categoriaId)));
        } else {
            getData.then(res => setData(res));            
        }

    }, [categoriaId])

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

