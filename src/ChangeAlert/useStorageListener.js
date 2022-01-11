import React from 'react';

function useStorageListener(synchronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    const onStorageChange = (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('¡Ha habido un cambio!')
        setStorageChange(true);
      };
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    }
  }, [])

  const toggleShow = () => {
    synchronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  }
};

export { useStorageListener };