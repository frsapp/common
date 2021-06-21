export class ExpiryDate {

  static getDateInSec(secFromNow: number): Date {
    return new Date(Date.now() + (secFromNow * 1000));
  }

  static getDateInMin(minFromNow: number): Date {
    return new Date(Date.now() + (minFromNow * 1000 * 60));
  }

  static getDateInHour(hourFromNow: number): Date {
    return new Date(Date.now() + (hourFromNow * 1000 * 60 * 60));
  }

  static getDateInDay(dayFromNow: number): Date {
    return new Date(Date.now() + (dayFromNow * 1000 * 60 * 60 * 24));
  }

}