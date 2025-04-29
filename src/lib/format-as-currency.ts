export const formatAsCurrency = (value: string | number) => {
  const numericValue = value.toString().replace(/[^0-9.]/g, "");

  const parts = numericValue.split(".");
  const formatedValue = `${parts[0]}${parts.length > 1 ? `.${parts[1]?.slice(0, 2)}` : ""}`;

  if (!formatedValue) {
    return "";
  }

  const numberValue = Number.parseFloat(formatedValue);
  if (Number.isNaN(numberValue)) {
    return "";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(numberValue);
};
