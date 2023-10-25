import { clientInfo } from "../data-Mock";

export const fetchingDataClient = () => {
  const inputOrderNumber = document.getElementById(
    "inputOrderNumber"
  ) as HTMLInputElement;
  if (inputOrderNumber) inputOrderNumber.value = clientInfo.orderNumber;

  const inputClient = document.getElementById(
    "inputClient"
  ) as HTMLInputElement;
  if (inputClient) inputClient.value = clientInfo.clientName;

  const inputDate = document.getElementById("inputDate") as HTMLInputElement;
  if (inputDate) inputDate.value = clientInfo.orderDate;
};
