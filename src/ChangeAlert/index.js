import React from 'react';
// Styles
import './ChangeAlert.css'
// HOOK
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ synchronize }) {
  const { toggleShow, show } = useStorageListener(synchronize);

  return show ? (
    <div className={`ChangeAlert__container`}>
      <button
        className='ChangeAlert__button'
        onClick={() => toggleShow()}
      >
        Recargar
      </button>
    </div>
  ) : null
};

export { ChangeAlert };
