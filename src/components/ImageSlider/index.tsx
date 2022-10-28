import { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { CarImage, CarImageWrapper, ImageIndex, ImageIndexes, ImageSliderContainer } from "./styles";

interface ImageSliderProps {
  imagesUrl: string[];
}

interface ChangeImagesProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const indexChanged = useRef((info: ChangeImagesProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <ImageSliderContainer>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        data={imagesUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </ImageSliderContainer>
  );
}
