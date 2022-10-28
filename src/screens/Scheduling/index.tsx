import { useState } from "react";
import { StatusBar } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import { useTheme } from "styled-components";

import ArrowSvg from "../../assets/arrow.svg";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, DateData, MarkedDates, generateInterval } from "../../components/Calendar";

import { getPlatformDate } from "../../utils/getPlatformDate";

import { RootStackParamList } from "../../@types/navigation";

import {
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  SchedulingContainer,
  Title
} from "./styles";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

type SchedulingScreenNavigationProp = StackNavigationProp<RootStackParamList, "Scheduling">;
type SchedulingScreenRouteProp = RouteProp<RootStackParamList, "Scheduling">;

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData>({} as DateData);
  const [markedDates, setMarkedDates] = useState<MarkedDates>({} as MarkedDates);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const theme = useTheme();
  const navigation = useNavigation<SchedulingScreenNavigationProp>();
  const route = useRoute<SchedulingScreenRouteProp>();
  const { car } = route.params;

  function handleGoToSchedulingDetailsScreen() {
    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates)
    });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DateData) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), "yyyy/MM/dd"),
      endFormatted: format(getPlatformDate(new Date(endDate)), "yyyy/MM/dd")
    });
  }

  return (
    <SchedulingContainer>
      <Header>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <BackButton onPress={handleGoBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>
          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleGoToSchedulingDetailsScreen} enabled={!!rentalPeriod.startFormatted} />
      </Footer>
    </SchedulingContainer>
  );
}
