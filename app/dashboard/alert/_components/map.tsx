// 'use client';

// import React from 'react';
// import dynamic from 'next/dynamic';
// import 'leaflet/dist/leaflet.css';
// import type { LatLngExpression, LatLngBoundsExpression } from 'leaflet';

// // ⚠️ Carregamos o MapContainer dinamicamente
// // porque o Leaflet não funciona no lado do servidor (Next.js faz SSR)
// const MapContainer = dynamic(
//   () => import('react-leaflet').then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import('react-leaflet').then((mod) => mod.TileLayer),
//   { ssr: false }
// );

// // 🗺️ Centro e limites de Angola
// const center: LatLngExpression = [-11.2027, 17.8739];
// const bounds: LatLngBoundsExpression = [
//   [-18.0386, 11.4600], // sudoeste
//   [-4.3768, 24.0821],  // nordeste
// ];

// export default function Map() {
//   return (
//     <div style={{ width: '100%', height: '500px' }}>
//       <MapContainer
//         center={center}
//         zoom={6}
//         style={{ height: '100%', width: '100%' }}
//         maxBounds={bounds}
//         maxBoundsViscosity={1.0}
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           // ✅ Use aspas simples e texto direto
//           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//       </MapContainer>
//     </div>
//   );
// }
