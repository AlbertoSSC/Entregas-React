import { dogImages } from "@/common";
import { DogApiMockInfo } from ".";

export const toggleAdoptDog = (dogId: string, toBeAdopted: boolean) => {
  const dog = dogMockInfo.find((dog) => dog.id === dogId);
  if (dog) {
    dog.toBeAdopted = toBeAdopted;
    return dog;
  }
  return null;
};

export const dogMockInfo: DogApiMockInfo[] = [
  {
    id: "10",
    picUrl: dogImages["01.jpg"],
    title: "Dog 1",
    toBeAdopted: true,
  },
  {
    id: "20",
    picUrl: dogImages["02.jpg"],
    title: "Dog 2",
    toBeAdopted: true,
  },
  {
    id: "30",
    picUrl: dogImages["03.jpg"],
    title: "Dog 3",
    toBeAdopted: true,
  },
  {
    id: "40",
    picUrl: dogImages["04.jpg"],
    title: "Dog 4",
    toBeAdopted: true,
  },

  {
    id: "50",
    picUrl: dogImages["05.jpg"],
    title: "Dog 5",
    toBeAdopted: true,
  },
  {
    id: "60",
    picUrl: dogImages["06.jpg"],
    title: "Dog 6",
    toBeAdopted: true,
  },
  {
    id: "70",
    picUrl: dogImages["07.jpg"],
    title: "Dog 7",
    toBeAdopted: true,
  },
  {
    id: "80",
    picUrl: dogImages["08.jpg"],
    title: "Dog 8",
    toBeAdopted: true,
  },
];
