import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [synchronizedItem, setSynchronizedItem] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        setSynchronizedItem(true);
      }, 1000);
    } catch (error) {
      setError(error)
    }
  }, [synchronizedItem]);

  const synchronizeItem = () => {
    setLoading(true);
    setSynchronizedItem(false);
  }

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error)
    }
  };

  return {
    loading,
    error,
    item,
    saveItem,
    synchronizeItem,
  };
}

export { useLocalStorage };