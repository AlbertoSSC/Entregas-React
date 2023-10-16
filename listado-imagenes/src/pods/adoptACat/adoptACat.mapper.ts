import { CatVMInfo, CatApiMockInfo } from "@/pods";

export const catInfoToVM = (catInfo: CatApiMockInfo): CatVMInfo => {
  return {
    ...catInfo,
    selected: false,
  };
};
