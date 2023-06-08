import { useState } from 'react';

const useApi = () => {
  const [loading, setLoading] = useState(false);

  const makeRequest = async (url, method, successCallback) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/${url}`, {
        method,
      });
      const data = await res.json();
      if (res.ok) {
        successCallback(data);
      }
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    makeRequest,
  };
};

export default useApi;
