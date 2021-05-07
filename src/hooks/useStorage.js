import { useState, useEffect } from 'react';
import { storage } from '../config/firebase';

const useStorage = (file, path) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(path + '/' + file.name);
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let perentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(perentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
