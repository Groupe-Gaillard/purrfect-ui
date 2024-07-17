const addAlpha = (color: string, alpha: number) => {
  const convertedAlpha = Math.trunc((alpha * 255) / 100);
  return `${color}${convertedAlpha.toString(16)};
  }`;
};

export { addAlpha };

/**
 * alpha | 100
 * XXXXX | 255
 *
 * alpha * 255 / 100
 */
