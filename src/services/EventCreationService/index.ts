import { AIRecommendation, PlaceResponse } from "./types";
import { GoogleGenerativeAI } from "@google/generative-ai";

export class EventCreationService {
  constructor() {}

  static async getPlacesInfo(
    latitude: number,
    longitude: number,
    radius: number,
    includedTypes: string[] = []
  ) {
    const endpoint = "https://places.googleapis.com/v1/places:searchNearby";

    const requestBody = {
      includedTypes: includedTypes,
      locationRestriction: {
        circle: {
          center: {
            latitude: latitude,
            longitude: longitude,
          },
          radius: radius,
        },
      },
    };

    console.log("###getPlacesInfo request", requestBody);

    const headers = {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
      "X-Goog-FieldMask":
        "places.displayName,places.formattedAddress,places.types,places.businessStatus,places.rating,places.userRatingCount,places.priceLevel,places.location,places.primaryType,places.accessibilityOptions,places.regularOpeningHours,places.reviews", // Specify the fields you need.  Add more as required.
    };
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      console.log("###getPlacesInfo response data", data);

      const places: PlaceResponse[] = (data.places as PlaceResponse[]).map(
        (d, i) => ({
          ...d,
          index: i,
          regularOpeningHours: {
            weekdayDescriptions: d.regularOpeningHours?.weekdayDescriptions,
          },
          reviews: d.reviews.map((r) => ({ text: r.text, rating: r.rating })),
        })
      );
      if (places) {
        return places as PlaceResponse[];
      } else {
        console.error(
          "Places API Error:",
          data && data.error ? data.error.message : "Unknown error"
        );
        return null;
      }
    } catch (error) {
      console.error("Error fetching places:", error);
      return null;
    }
  }

  static async getAIRecommendations(
    places: PlaceResponse[],
    eventInfo: unknown
  ) {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: { responseMimeType: "application/json" },
    });

    const prompt = `You are an expert event planner. You are given a list of [PLACES] with their details
  
  Your task is to analyze these places and pick the TOP 3 [PLACES] that are most suitable for a variety of events (birthdays, weddings, corporate events, volunteer events, educational events, etc.).
  
  Consider factors such as:
  - Versatility (can it accommodate different event types?)
  - Rating (positive feedback suggests a good experience)
  - Accessibility
  - Price level (consider out budget)
  - Opening hours (are they flexible for our date and time?)
  - Types (some types are naturally more suited to events)
  - Location
  
  From all these factors, pick only TOP 3 [PLACES] and respond with a JSON array containing the "index" of the place (already provided) and a brief "reason" for picking that place. The reason should be concise and highlight the key factors that make it a good choice.
  
  [EXAMPLE] of RESPONSE (in the example, chosen event is wedding):
  
  [
    {
      "index": "1",
      "reason": "Versatile venue restaurant with high ratings, wheelchair accessibility, and flexible evening/weekend hours. Good for weddings."
    },
    {
      "index": "5",
      "reason": "Beautiful garden setting ideal for outdoor weddings, with excellent ratings and ample space. Slightly higher price range may is justified, should fit in our budget."
    },
    {
      "index": "12",
      "reason": "Banquet hall with high user ratings and the option of customizing space for a wedding. Centralized location within the city makes transportation simple."
    }
  ]
  
  "reason" field should be in SAME LANGUAGE that [INFORMATION] PROVIDED ABOUT EVENT
  
  Here is our [INFORMATION] about event:
  
  ${JSON.stringify(eventInfo)}
  
  Here is the list of [PLACES] that you should analyze:
  
  ${JSON.stringify(places)}
  
  RESPONSE SHOULD ONLY CONTAIN JSON
  `;

    try {
      const result = await model.generateContent(prompt);
      const responseText = result.response.text();

      try {
        const jsonResponse = JSON.parse(responseText) as AIRecommendation[];

        console.log("###getAIRecommendations response", jsonResponse);

        return jsonResponse;
      } catch (jsonError) {
        console.error("Error parsing Gemini's JSON response:", jsonError);
        console.error("Raw response from Gemini:", responseText); // Print the raw response for debugging
        return null; //Or handle the error in a way you want.
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return null;
    }
  }
}
