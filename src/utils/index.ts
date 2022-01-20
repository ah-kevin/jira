import { useEffect, useState } from "react";

export const isFlask = (value: any) => (value === 0 ? false : !value);
export const cleanObject = (object: any) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // 0
    const value = result[key];
    if (isFlask(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack();
  }, []);
};

// export const debounce = (func: Function, delay: number) => {
//   let timeout: NodeJS.Timeout;
//   // @ts-ignore
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function() {
//       func(...param);
//     }, delay);
//   };
// };

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    // 每次在value变化一会，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后在运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
