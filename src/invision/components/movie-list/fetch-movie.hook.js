import { useEffect } from 'react';

export default function useFetchMovie(cb) {
  useEffect(() => {
    cb();
  }, []);
}
