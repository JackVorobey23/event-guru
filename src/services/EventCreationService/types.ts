export interface PlaceResponse {
  index: number;
  displayName?: { text?: string; languageCode?: string };
  formattedAddress?: string;
  types?: string[];
  businessStatus?: string;
  rating?: number;
  userRatingCount?: number;
  priceLevel?: string;
  location?: {
    latitude?: number;
    longitude?: number;
  };
  primaryType?: string;
  accessibilityOptions?: Record<string, boolean>;
  regularOpeningHours?: { weekdayDescriptions?: string[] };
  reviews: { rating: number; text: string }[];
}

export type AIRecommendation = {
  reason: string;
  index: number;
};
