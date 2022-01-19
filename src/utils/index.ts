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
