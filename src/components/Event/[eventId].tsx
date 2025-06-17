import Button from "@components/ui/Button";
import IconInput from "@components/ui/Input";
import {
  faBackwardStep,
  faDollar,
  faLocationPin,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router";
import { Event } from "./types";
import { MapContainer, TileLayer } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateEventForUser } from "@/firebase/utils.ts/updateEvent";
import { useSelector } from "react-redux";
import { selectAuth } from "@redux/slices/authSlice";
import { useState } from "react";
import { LatLng } from "leaflet";
import LocationMarker from "@components/LocationMarker";
import { deleteEvent } from "@/firebase/utils.ts/deleteEvent";

// interface LocationState {
//   event: Pick<Event, 'id'> & Partial<Event>;
// }

export default function EventPage() {
  const event = useLocation().state as Event;
  const { lat = 0, lng = 0 } = { ...event.location?.coords };
  const { userInfo } = useSelector(selectAuth);
  const navigate = useNavigate();
  const [position, setPosition] = useState<LatLng>(new LatLng(lat, lng));

  const [newEvent, setNewEvent] = useState<Event>(event);

  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement> | Pick<LatLng, "lat" | "lng">
  ) => {
    const newLocation = event.location;
    if ("lat" in e) {
      newLocation.coords = e;
    } else {
      newLocation.name = e.target.value;
    }
    setNewEvent((prev) => ({ ...prev, location: newLocation }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Event
  ) => setNewEvent((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSave = () => {
    newEvent.location.coords = position;
    updateEventForUser(userInfo!.uid, {
      ...newEvent,
    });
  };
  if (!userInfo) {
    return <></>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    if (window.confirm("Ви впевнені, що хочете видалити подію?")) {
      deleteEvent(userInfo.uid, event.id);
      navigate(-1);
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center bg-white bg-opacity-30 p-12 gap-3">
      <div className="flex justify-evenly w-full">
        <Button onClick={handleBack}>
          <FontAwesomeIcon icon={faBackwardStep} />
        </Button>
        <div className="text-4xl font-bold">Редагування події</div>
        <Button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
      <div className="text-xl">{event.description}</div>
      <div className="flex max-lg:flex-col gap-10 min-h-72">
        <div className="flex-1 flex flex-col">
          <IconInput
            inputElem={
              <div className="flex flex-col">
                <input
                  className="flex-1 bg-transparent outline-none"
                  defaultValue={event.location?.name ?? ""}
                  onChange={handleLocationChange}
                />
              </div>
            }
            icon={faLocationPin}
          />

          <MapContainer
            className="w-full h-full flex-1 min-h-24"
            center={{ lat: lat, lng: lng }}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} setPosition={setPosition} />
          </MapContainer>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <IconInput
            inputElem={
              <input
                type="datetime-local"
                defaultValue={(event.date ?? "").split("Z")[0]}
                onChange={(e) => handleChange(e, "date")}
              />
            }
          />
          <IconInput
            inputElem={
              <input
                defaultValue={event.budget}
                onChange={(e) => handleChange(e, "budget")}
              ></input>
            }
            icon={faDollar}
          />
        </div>
      </div>
      <Button onClick={handleSave}>Зберегти</Button>
    </div>
  );
}
