import { LatLng } from 'leaflet';
import { useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

interface LocationMarkerProps {
  setPosition: React.Dispatch<React.SetStateAction<LatLng>>;
  position: LatLng | null;
}

export default function LocationMarker({
  position,
  setPosition,
}: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      console.log(e);
      setPosition(e.latlng);
    },
    locationfound(e) {
      console.log('FOUND!');

      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
      console.log('damdam');
    }
  }, [position]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
