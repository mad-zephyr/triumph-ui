export const formatNumberWithDots = (input: unknown): string => {
  const num = Number(input);

  if (isNaN(num)) {
    return String(input); // возвращаем исходное значение как строку
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
