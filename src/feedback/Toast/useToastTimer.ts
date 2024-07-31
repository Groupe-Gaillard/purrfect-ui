import { useEffect, useState } from "react";

export const useToastTimer = (duration?: number) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!duration) {
      return;
    }

    const timer = setTimeout(() => setVisible(false), duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return visible;
};
