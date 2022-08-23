import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";

import { HomeContainer, Header, TotalCars, HeaderContent, CarList } from "./styles";

export function Home() {
  const carDatai1 = {
    brand: "audi",
    name: "RS 5 Coupe",
    rent: {
      period: "ao dia",
      price: 120
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png"
  };

  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carDatai1} />}
      />
    </HomeContainer>
  );
}
