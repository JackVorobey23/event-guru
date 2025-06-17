import LocationMarker from "@components/LocationMarker";
import Button from "@components/ui/Button";
import IconInput from "@components/ui/Input";
import {
  faDollar,
  faFile,
  faT,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { LatLng } from "leaflet";
import { ChangeEvent, useEffect, useState } from "react";
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import Select from "react-select/base";
import { PlaceTypesUkrainian } from "@/types/places";
import makeAnimated from "react-select/animated";
import { EventCreationStatus, FormNewEventData } from "./types";
import { parseCSV } from "@/utils/parseCSV";

const PLACES_OPTIONS = Object.entries(PlaceTypesUkrainian).map(
  ([value, label]) => ({ value, label })
);
const animatedComponents = makeAnimated();

interface NewFormProps {
  setEventData: React.Dispatch<React.SetStateAction<FormNewEventData | null>>;
  setCreationStatus: React.Dispatch<React.SetStateAction<EventCreationStatus>>;
}

export function NewForm({ setEventData, setCreationStatus }: NewFormProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [type, setEventType] = useState("");
  const [description, setDescription] = useState("");
  const [inviteesAmount, setInviteesAmount] = useState(0);
  console.log(setInviteesAmount);
  const [budget, setBudget] = useState(0);
  const [range, setRange] = useState(1);
  const [date, setDate] = useState("2025-01-01T12:00");
  const [position, setPosition] = useState<LatLng>(
    new LatLng(50.4472, 30.4541)
  );
  const [locations, setLocations] = useState<
    readonly { label: string; value: string }[]
  >([]);
  const [selectInputValue, setSelectInputValue] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition(new LatLng(latitude, longitude));
      });
    }
  }, []);

  const handleCreateClick = () => {
    setEventData({
      type,
      range,
      description,
      budget,
      date,
      locations,
      inviteesAmount,
      position,
    });
    setCreationStatus("pending");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setRange(0);
      return;
    }
    const newRange = Number(e.target.value);

    if (isNaN(newRange)) {
      return;
    }
    if (newRange > 0 && newRange <= 15) {
      setRange(newRange);
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        const { data } = parseCSV(reader.result?.toString() || "");
        console.log(data);
      };
      reader.readAsText(file);
    }
  };

  const onMenuClose = () => setMenuIsOpen(false);
  const onMenuOpen = () => setMenuIsOpen(true);

  return (
    <div className="flex flex-col">
      <Select
        styles={{
          container: () => ({ width: "50rem" }),
          menu: () => ({
            width: "50rem",
            position: "absolute",
            zIndex: 1,
            backgroundColor: "#fff",
          }),
        }}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        menuIsOpen={menuIsOpen}
        onMenuClose={onMenuClose}
        onMenuOpen={onMenuOpen}
        options={PLACES_OPTIONS}
        onInputChange={(input) => setSelectInputValue(input)}
        value={locations}
        inputValue={selectInputValue}
        onChange={(c) => setLocations(c)}
        placeholder="Бажані локації"
      />
      <div className="flex gap-11 justify-evenly py-10">
        <div className="flex flex-col gap-9 flex-1">
          <MapContainer
            className="w-full h-full"
            center={{ lat: 50.4472, lng: 30.4541 }}
            zoom={13}
            scrollWheelZoom={true}
            style={{ zIndex: 0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} setPosition={setPosition} />
            <Circle center={position} radius={range * 1000} />
          </MapContainer>
          <div>
            <div className="text-lg">
              <span>Шукати місце у радіусі: </span>
              <input
                value={range}
                onChange={handleInputChange}
                className="w-12 bg-green-200 text-center rounded-md"
              />
              <span> km</span>
            </div>
            <input
              type="range"
              value={range * 1000}
              max={15000}
              min={1000}
              onChange={({ target }) => {
                const newValue = (Number(target.value) / 1000).toFixed(2);
                setRange(Number(newValue));
              }}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-green-300 text-green-200"
            ></input>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <IconInput
            icon={faT}
            inputElem={
              <input
                placeholder="Назва"
                onChange={({ target }) => {
                  setDescription(target.value);
                }}
              />
            }
          />
          <IconInput
            icon={faWandMagicSparkles}
            inputElem={
              <input
                placeholder="Тип (весілля, похорони...)"
                defaultValue={type}
                onChange={({ target }) => setEventType(target.value)}
              ></input>
            }
          />
          <IconInput
            inputElem={
              <input
                placeholder="Дата та час"
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            }
          />
          <IconInput
            icon={faFile}
            inputElem={
              <div className="flex flex-col justify-center">
                <label htmlFor="file-upload">
                  <span>Завантажити запрошення</span>
                </label>
                <input
                  type="file"
                  accept=".csv"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            }
          />
          <IconInput
            icon={faDollar}
            inputElem={
              <input
                placeholder="Бюджет"
                onChange={({ target }) => {
                  const budg = Number(target.value);
                  if (isNaN(budg) || budg < 0) {
                    return;
                  }
                  setBudget(budg);
                }}
              />
            }
          />
        </div>
      </div>
      <Button onClick={handleCreateClick}>Далі</Button>
    </div>
  );
}
