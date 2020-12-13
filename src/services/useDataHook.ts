import { useEffect, useState } from 'react';

function useDataHook<T>(request?: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (!request) return;
    setIsLoading(true);
    setHasError(false);

    request()
      .then(response => {
        setData(response);
        setHasError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setData(null);
        setHasError(true);
        setIsLoading(false);
      });
  }, [request]);

  return {
    data,
    isLoading,
    hasError,
  };
}

export default useDataHook;
