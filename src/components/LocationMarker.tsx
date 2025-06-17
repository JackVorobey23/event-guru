import { LatLng } from "leaflet";
import { useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

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
      setPosition(e.latlng);
    },
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
    }
  }, [position]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
