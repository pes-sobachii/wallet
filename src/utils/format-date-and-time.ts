export function formatDateAndTime(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit"
  }) + ", " + new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h23"
  });
}