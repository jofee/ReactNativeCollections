/*
 *@description: React Hook 下的计时器
 *@author: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *@date: 2020-05-21 15:02:23
 */
import {useEffect, useRef} from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && delay !== undefined) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
