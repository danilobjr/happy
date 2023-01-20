import { icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { env } from '@env'
import 'leaflet/dist/leaflet.css'

export function Map() {
  // TODO memoize this
  const markerIcon = icon({ iconUrl: '/marker.png', iconAnchor: [24, 54] })

  return (
    <MapContainer
      className="absolute h-full w-full"
      center={[51.505, -0.09]}
      zoom={13}
      zoomControl={false}
    >
      <TileLayer
        url={env.mapboxTileServerUrl}
        attribution={
          '&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a>, &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        }
      />
      <Marker position={[51.505, -0.09]} icon={markerIcon}>
        {/* <Popup>This is a popup</Popup> */}
      </Marker>
    </MapContainer>
  )
}
