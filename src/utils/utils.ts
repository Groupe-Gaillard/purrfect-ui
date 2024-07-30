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
 * Sizing
 * Function to convert a pixel value to a rem value.
 * |   PX   |    Rem    |
 * |--------|-----------|
 * | 1px    | 0,0625rem |
 * | 2px    | 0,125rem  |
 * | 3px    | 0,1875rem |
 * | 4px    | 0,25rem   |
 * | 5px    | 0,3125rem |
 * | 6px    | 0,375rem  |
 * | 7px    | 0,4375rem |
 * | 8px    | 0,5rem    |
 * | 10px   | 0,625rem  |
 * | 12px   | 0,75rem   |
 * | 14px   | 0,875rem  |
 * | 16px   | 1rem      |
 * | 24px   | 1,5rem    |
 * | 32px   | 2rem      |
 * | 40px   | 2,5rem    |
 * | 60px   | 3,75rem   |
 * | 80px   | 5rem      |
 * | 100px  | 6,25rem   |
 */
export const sizing = (...values: Array<number>): string => {
  const valuesInREM = values.map((oneValue) => {
    return `${oneValue / 16}rem`;
  });

  return valuesInREM.join(" ");
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

/**
 * Function to generate a unique id with a prefix.
 */
export const GenerateIdWithPrefix = (prefix: string) => {
  return `${prefix}-${Math.random()
    .toString(36)
    .substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
};
