import React from 'react';
import {Link} from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import { FiPlus } from "react-icons/fi";
import mapMarkerImg from '../../images/map-marker.svg';

import './OrphanagesMap.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
     <aside>
       <header>
         <img src={mapMarkerImg} alt="Happy"/>

         <h2>Escolha um orfanato no mapa</h2>
         <p>Muitas crianças estão esperando a sua visita :)</p>
       </header>

       <footer>
         <strong>Pilar</strong>
         <span>Alagoas</span>
       </footer>
     </aside>

     <Map 
      center={[-9.5920162,-35.954258]}
      zoom={15}
      style={{ width: '25%', height: '25%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
        {/* <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}
     </Map>

     <Link to="" className="create-orphanage"> 
      <FiPlus size={32} color="#FFF" />
     </Link>
    </div>
  );
}

export default OrphanagesMap;