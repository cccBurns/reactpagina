import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
    
const Nvidias = [ 
{ id: 1, price: 150000, image: "https://logg.api.cygnus.market/static/logg/Global/Placa%20de%20Video%20ASUS%20NVIDIA%20GeForce%20RTX%203060%20Ti%20Dual%20V2%20OC%208GB%20GDDR6%20PCIe%204.0%20LHR/bf1b2543d5094ba9b0b073e924459564.webp", category: 'Nvidias', title:"RTX 3060" },
{ id: 2, price: 200000, image: "https://uranostream.com/wp-content/uploads/2022/07/descarga.png", category: 'Nvidias', title:"RTX 3070" },
{ id: 3, price: 300000, image: "https://www.comeros.com.ar/wp-content/uploads/2022/10/Comeros-AORUS-GV-N308TAORUSM-12GD-9.webp", category: 'Nvidias', title:"RTX 3080" },
{ id: 4, price: 125000, image: "https://http2.mlstatic.com/D_NQ_NP_722816-MLA49663782340_042022-O.webp", category: 'Amd', title:"AMD RX 6600XT" },
{ id: 6, price: 175000, image: "https://www.topcomputacion.com.ar/wp-content/uploads/2022/04/sapphire_radeon_rx_6700_xt_pulse_12gb_gddr61.jpg", category: 'Amd', title:"AMD RX 6700XT" },
{ id: 5, price: 250000, image: "https://front.dev.malditohard.com.ar/img/migration/PLACA-DE-VIDEO-RX-6800-XT-SAPPHIRE-NITRORADEON-16-GB.webp", category: 'Amd', title:"AMD RX 6800XT" },

];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Nvidias);
            }, 2000);
        });

        getData.then(res => setData(res.find(Nvidia => Nvidia.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;