import { Calendar as CustomCalendar, LocaleConfig, CalendarProps, DateData } from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { generateInterval } from "./generateInterval";
import { ptBR } from "./localeConfig";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather size={24} color={theme.colors.shape} name={direction === "left" ? "chevron-left" : "chevron-right"} />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 12,
        marginBottom: 12
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_500,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: { marginHorizontal: -14 }
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, DateData, MarkedDates, generateInterval };
