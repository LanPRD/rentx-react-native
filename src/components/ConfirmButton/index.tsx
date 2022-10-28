import { RectButtonProps } from "react-native-gesture-handler";
import { ConfirmButtonContainer, Title } from "./styles";

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
}

export function ConfirmButton({ title, ...rest }: ConfirmButtonProps) {
  return (
    <ConfirmButtonContainer {...rest}>
      <Title>{title}</Title>
    </ConfirmButtonContainer>
  );
}
