import { LatLng } from "leaflet";

export const validateNewEvent = (
  type?: string,
  title?: string,
  budget?: number,
  position?: Partial<LatLng> | null
): string[] => {
  const errors: string[] = [];

  if (!type || type.length === 0) {
    errors.push("Тип івенту не може бути порожнім!");
  }
  if (!title || title.length === 0) {
    errors.push("Назва івенту не може бути порожня!");
  }
  if (!budget || budget < 0) {
    errors.push("Бюджет повинен бути додатнім числом!");
  }
  if (!!position || !position) {
    errors.push(
      "Будь ласка, оберіть приблизне місце на карті, де планується проводити івент!"
    );
  }
  return errors;
};
