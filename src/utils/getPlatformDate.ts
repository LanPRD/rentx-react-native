import { addDays } from "date-fns";

export function getPlatformDate(date: Date): Date {
  return addDays(date, 1);
}
