export function formatDate(dateInput: string | Date): string {
  const inputDate = new Date(dateInput);
  const currentDate = new Date();

  // Calculate the difference in days
  const differenceInTime = currentDate.getTime() - inputDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  if (differenceInDays <= 7) {
    // Get the long name of the day
    return inputDate.toLocaleDateString('en-US', { weekday: 'long' });
  } else {
    // Format the date as MM/DD/YY
    return inputDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
  }
}