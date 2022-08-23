import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { BackButtonContainer } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color }: BackButtonProps) {
  const theme = useTheme();

  return (
    <BackButtonContainer>
      <MaterialIcons name="chevron-left" size={24} color={color ? color : theme.colors.text} />
    </BackButtonContainer>
  );
}
