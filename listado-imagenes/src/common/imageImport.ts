interface ImageData {
  default: string;
}

const catImageContext = import.meta.glob("../assets/images/cats/*.jpg", {
  eager: true,
});

export const catImages: Record<string, string> = {};

for (const key in catImageContext) {
  if (Object.prototype.hasOwnProperty.call(catImageContext, key)) {
    const imageName = key.replace("../assets/images/cats/", "");
    catImages[imageName] = (catImageContext[key] as ImageData).default;
  }
}

const dogImageContext = import.meta.glob("../assets/images/dogs/*.jpg", {
  eager: true,
});

export const dogImages: Record<string, string> = {};

for (const key in dogImageContext) {
  if (Object.prototype.hasOwnProperty.call(dogImageContext, key)) {
    const imageName = key.replace("../assets/images/dogs/", "");
    dogImages[imageName] = (dogImageContext[key] as ImageData).default;
  }
}
