import { useEffect, useState } from "react";
import { NewForm } from "./NewForm";
import { EventCreationStatus, FormNewEventData } from "./types";
import Confirmation from "./Confirmation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { EventCreationService } from "@/services/EventCreationService";
import {
  AIRecommendation,
  PlaceResponse,
} from "@/services/EventCreationService/types";
import { useSelector } from "react-redux";
import { selectAuth } from "@redux/slices/authSlice";
import { Event } from "../types";
import { addEvent } from "@/firebase/utils.ts/addEvent";

export default function New() {
  const [creationStatus, setCreationStatus] =
    useState<EventCreationStatus>("form");
  const [eventData, setEventData] = useState<FormNewEventData | null>(null);
  const navigate = useNavigate();
  const [aiResponse, setAIResponse] = useState<AIRecommendation[]>([]);
  const [placesInfo, setPlacesInfo] = useState<PlaceResponse[]>();
  const [errors, setErrors] = useState<string[]>([]);

  const { userInfo } = useSelector(selectAuth);

  useEffect(() => {
    if (eventData) {
      fetchPlacesInfoAndAIReccomendations(eventData);
    }
  }, [eventData]);

  const fetchPlacesInfoAndAIReccomendations = async (
    eventData: FormNewEventData
  ) => {
    const pi = await EventCreationService.getPlacesInfo(
      eventData.position.lat,
      eventData.position.lng,
      eventData.range * 1000,
      eventData.locations.map((l) => l.value)
    );
    if (pi) {
      setPlacesInfo(pi);
      const response = await EventCreationService.getAIRecommendations(
        pi,
        eventData
      );
      setCreationStatus("confirmation");
      if (response) {
        setAIResponse(response);
      }
    }
  };

  const handleCreateClick = (index: number) => {
    const { type, description, budget, position, date, inviteesAmount } = {
      ...eventData,
    };
    const pickedPlace = placesInfo?.find((pi) => pi.index === index);
    if (userInfo?.uid) {
      if (
        !budget ||
        !type ||
        !description ||
        inviteesAmount === undefined ||
        isNaN(inviteesAmount) ||
        !position ||
        !date ||
        !pickedPlace
      ) {
        console.log(budget, type, description, inviteesAmount, position, date);
        return;
      }
      const { latitude, longitude } = { ...pickedPlace.location };
      const text = pickedPlace.displayName?.text;
      const eventToAdd: Event = {
        id: crypto.randomUUID(),
        budget: budget,
        date: date,
        description: description,
        inviteesAmount: inviteesAmount,
        location: {
          coords: { lat: latitude!, lng: longitude! },
          name: text!,
        },
        type,
      };
      addEvent(userInfo?.uid, eventToAdd)
        .then(() => {
          setCreationStatus("success");
        })
        .catch((err: unknown) => {
          setErrors([String(err)]);
        });
    }
  };

  if (creationStatus === "pending") {
    return <span>Loading...</span>;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-9 px-8">
      <div className="w-full flex justify-between">
        <FontAwesomeIcon
          icon={faBackward}
          className="self-center w-4 cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        />
        <span className="text-lg">Створення події</span>
      </div>
      {creationStatus === "form" && (
        <NewForm {...{ setCreationStatus, setEventData }} />
      )}
      {creationStatus === "confirmation" && aiResponse && placesInfo && (
        <Confirmation
          aiResponse={aiResponse}
          placesInfo={placesInfo}
          handleCreateClick={handleCreateClick}
        />
      )}
      {creationStatus === "success" &&
        (errors.length ? (
          <div>
            {errors.map((e) => (
              <div>{e}</div>
            ))}
          </div>
        ) : (
          <div>Івент успішно створено!</div>
        ))}
    </div>
  );
}
