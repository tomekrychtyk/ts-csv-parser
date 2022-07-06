export function stringToDate(dateString: string): Date {
  // dd/mm/yyyy
  const dateParts = dateString.split('/').map((value: string) => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}