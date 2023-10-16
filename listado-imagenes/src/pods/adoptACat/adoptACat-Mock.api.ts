import { catImages } from "@/common";
import { CatApiMockInfo } from ".";

export const toggleAdoptCat = (catId: string, toBeAdopted: boolean) => {
  const cat = catMockInfo.find((cat) => cat.id === catId);
  if (cat) {
    cat.toBeAdopted = toBeAdopted;
    return cat;
  }
  return null;
};

export const catMockInfo: CatApiMockInfo[] = [
  {
    id: "1",
    picUrl: catImages["01.jpg"],
    title: "Cat 1",
    toBeAdopted: true,
  },
  {
    id: "2",
    picUrl: catImages["02.jpg"],
    title: "Cat 2",
    toBeAdopted: true,
  },
  {
    id: "3",
    picUrl: catImages["03.jpg"],
    title: "Cat 3",
    toBeAdopted: true,
  },
  {
    id: "4",
    picUrl: catImages["04.jpg"],
    title: "Cat 4",
    toBeAdopted: true,
  },

  {
    id: "5",
    picUrl: catImages["05.jpg"],
    title: "Cat 5",
    toBeAdopted: true,
  },
  {
    id: "6",
    picUrl: catImages["06.jpg"],
    title: "Cat 6",
    toBeAdopted: true,
  },
  {
    id: "7",
    picUrl: catImages["07.jpg"],
    title: "Cat 7",
    toBeAdopted: true,
  },
  {
    id: "8",
    picUrl: catImages["08.jpg"],
    title: "Cat 8",
    toBeAdopted: true,
  },
];
