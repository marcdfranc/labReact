import { useState } from 'react';

export const useTimeMessage = (duration = 3000) => {
  const [message, setMessage] = useState({
    text: '',
    type: null,
    visible: false,
  });

  const showMessage = (text, type = 'info') => {
    setMessage({ text, type, visible: true });

    setTimeout(() => {
      setMessage((prev) => ({ ...prev, visible: false }));
    }, duration);
  };

  return { message, showMessage };
};
