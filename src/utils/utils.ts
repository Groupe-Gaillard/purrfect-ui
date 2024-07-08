import { v4 as uuidv4 } from "uuid";

export type HexColor = {
  light?: string;
  dark?: string;
  white?: string;
};
/**
 * Function to determine the contrast of a color.
 * It uses the YIQ method to determine whether the color is light or dark.
 */
export const getContrastYIQ = (hexColor: string | HexColor) => {
  let colorString: string | undefined;
  if (typeof hexColor === "string") {
    colorString = hexColor;
  } else {
    colorString = hexColor.light || hexColor.dark || hexColor.white;

    if (!colorString) {
      console.error("getContrastYIQ: No valid color property found in object.");
      throw new Error("getContrastYIQ: colorString is undefined.");
    }
  }

  const r = parseInt(colorString.substring(1, 3), 16);
  const g = parseInt(colorString.substring(3, 5), 16);
  const b = parseInt(colorString.substring(5, 7), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "dark" : "white";
};

/**
 * Function to convert a pixel value to a rem value.
 * */
export const sizing = (value: number): string => {
  return `${value / 16}rem`;
};

/**
 * Function to truncate a text to a length value and keep its extension
 * */
export const truncateFileNameWithExtension = (
  fileName: string,
  maxLength: number,
): string => {
  const extension = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2); // Extraire l'extension
  const baseName = fileName.slice(
    0,
    fileName.lastIndexOf(".") - extension.length,
  );
  if (baseName.length > maxLength) {
    return `${baseName.substring(0, maxLength)}...${extension ? `.${extension}` : ""}`; // Tronquer en conservant l'extension
  }
  return fileName;
};

/**
 * Function to generate a unique id.
 */
export const generateUniqueId = (): string => {
  return uuidv4();
};
