import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
};

const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

export { placeholderImages as PlaceHolderImages };
