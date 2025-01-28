import LocationMarker from '@components/LocationMarker';
import Button from '@components/ui/Button';
import IconInput from '@components/ui/Input';
import {
  faBackward,
  faDollar,
  faPeopleGroup,
  faT,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LatLng } from 'leaflet';
import { ChangeEvent, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router';
import { validateNewEvent } from './utils';
import { addEvent } from '@/firebase/utils.ts/addEvent';
import { useSelector } from 'react-redux';
import { selectAuth } from '@redux/slices/authSlice';
import { generateUUID } from '@/utils/uuid';

export default function New() {
  const [type, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState(0);
  const [range, setRange] = useState<number>(1);
  const [errors, setErrors] = useState<string[]>([]);
  const [date, setDate] = useState('2025-01-01T12:00');
  const { userInfo } = useSelector(selectAuth);
  const navigate = useNavigate();
  const [position, setPosition] = useState<LatLng>(
    new LatLng(50.4472, 30.4541)
  );
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log({ latitude, longitude }, description, budget);
        setPosition(new LatLng(latitude, longitude));
      });
    }
  }, []);
  const handleCreateClick = () => {
    const tempErrors = validateNewEvent(type, description, budget, position);
    if (tempErrors.length) {
      setErrors(tempErrors);
    } else {
      if (userInfo?.uid) {
        addEvent(userInfo?.uid, {
          budget,
          date,
          type,
          description,
          invitees: [],
          location: { name: location, coords: { ...position } },
          id: generateUUID(),
        })
          .then(() => {
            console.log('success');
            navigate('/events');
          })
          .catch((err) => {
            setErrors([err]);
          });
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
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
  return (
    <div className="flex flex-col justify-center items-center gap-9">
      <div className="w-full flex justify-between">
        <FontAwesomeIcon
          icon={faBackward}
          className="self-center w-4 cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        />
        <span className="text-lg">Створення події</span>
        <div></div>
      </div>
      <div className="flex gap-11">
        <div className="flex flex-col gap-9">
          <IconInput
            icon={faWandMagicSparkles}
            inputElem={
              <input
                placeholder="Локація"
                onChange={({ target }) => setLocation(target.value)}
              ></input>
            }
          />
          <MapContainer
            className="w-full h-full"
            center={{ lat: 50.4472, lng: 30.4541 }}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} setPosition={setPosition} />
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
            icon={faPeopleGroup}
            inputElem={<input placeholder="Запрошення" />}
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
      {errors && (
        <div>
          {errors.map((err, i) => (
            <div key={`err-${i}`} className="text-red-400">
              {err}
            </div>
          ))}
        </div>
      )}
      <Button onClick={handleCreateClick}>Створити</Button>
    </div>
  );
}
