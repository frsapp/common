import { DateTime } from 'luxon';

export class DateFormatter {

  private static farasDateFromat = 'dd/MM/yyyy';

  static farasStringToDate(date: string): Date {
    return DateTime.fromFormat(date, DateFormatter.farasDateFromat).toJSDate();
  }

  static dateToFarasString(date: Date): string {
    return DateTime.fromJSDate(date).toFormat(DateFormatter.farasDateFromat);
  }

  static dateToFormatString(date: Date, format: string): string {
    return DateTime.fromJSDate(date).toFormat(format);
  }

  static isoToFarasString(date: string): string {
    return DateTime.fromISO(date).toFormat(DateFormatter.farasDateFromat);
  }

  static isoToFormatString(date: string, format: string): string {
    return DateTime.fromISO(date).toFormat(format);
  }
}