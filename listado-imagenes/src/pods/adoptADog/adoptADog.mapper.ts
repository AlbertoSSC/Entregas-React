import { DogVMInfo, DogApiMockInfo } from "@/pods";

export const dogInfoToVM = (dogInfo: DogApiMockInfo): DogVMInfo => {
  return {
    ...dogInfo,
    selected: false,
  };
};
