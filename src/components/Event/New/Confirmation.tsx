import React, { useMemo } from "react";
import {
  AIRecommendation,
  PlaceResponse,
} from "@/services/EventCreationService/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface AIRecommendationProps {
  aiResponse: AIRecommendation[];
  placesInfo: PlaceResponse[];
  handleCreateClick: (index: number) => void;
}

export default function Confirmation({
  aiResponse,
  placesInfo,
  handleCreateClick,
}: AIRecommendationProps) {
  const aiRecommendations = useMemo(
    () =>
      aiResponse.reduce((acc, curr) => {
        acc[curr.index] = curr.reason;
        return acc;
      }, {} as Record<string, string>),
    [aiResponse]
  );

  return (
    <div className="flex flex-col gap-2">
      {placesInfo.map(({ index, displayName, rating, formattedAddress }) => {
        const recommended = aiRecommendations[index] !== undefined;
        return (
          <div
            className={`flex flex-col border border-black rounded-md p-2 justify-between cursor-pointer transition-all
              ${
                recommended
                  ? "border-2 border-green-800 bg-green-100 hover:bg-green-200"
                  : "hover:bg-green-100"
              }`}
            key={`ai-${index}`}
            onClick={() => {
              handleCreateClick(index);
            }}
          >
            <div className="flex justify-between">
              <div className="text-2xl gap-2 flex">
                {displayName?.text}
                {recommended && (
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="self-center w-4 text-green-600 px-2 peer"
                    />
                    <div className="opacity-0 peer-hover:opacity-100 absolute w-1/2 transition-all duration-300">
                      <div className="border absolute ml-6 -mt-6 h-4 w-4 bg-white rotate-45"></div>
                      <div className="absolute ml-8 p-4 -mt-10 bg-white border">
                        {aiRecommendations[index] ?? ""}
                      </div>
                    </div>
                    <span className="text-green-600">recommended by AI</span>
                  </div>
                )}
              </div>
              <div className="bg-amber-200 text-black border rounded-md p-1">
                {rating}
              </div>
            </div>

            <p>{formattedAddress}</p>
          </div>
        );
      })}
    </div>
  );
}
