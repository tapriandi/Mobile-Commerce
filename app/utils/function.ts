export const discoutPrice = (price: number, discount: number) => {
  const result = (price + (price * discount) / 100).toFixed(2);
  return result;
};
