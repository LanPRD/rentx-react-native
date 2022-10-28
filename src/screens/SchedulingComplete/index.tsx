import { StatusBar, useWindowDimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ConfirmButton } from "../../components/ConfirmButton";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { SchedulingCompleteContainer, Content, Title, Message, Footer } from "./styles";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleGoToHomeScreen() {
    navigation.navigate("Home");
  }

  return (
    <SchedulingCompleteContainer>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}até a concessionária da RENTX {"\n"}pegar seu automóvel.
        </Message>

        <Footer>
          <ConfirmButton title="OK" onPress={handleGoToHomeScreen} />
        </Footer>
      </Content>
    </SchedulingCompleteContainer>
  );
}
