import { formatNumber } from "@/utils/format-number.ts";

export function calculatePointsForDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const dayOfSeason = getDayOfSeason(date);
  return calculatePoints(dayOfSeason);
}

function getDayOfSeason(date: Date): number {
  const year = date.getFullYear();
  const seasons = {
    winter: new Date(year, 11, 1), // December 1
    spring: new Date(year, 2, 1), // March 1
    summer: new Date(year, 5, 1), // June 1
    autumn: new Date(year, 8, 1), // September 1
  };

  // Determine the season
  let seasonStart: Date;

  if (date >= seasons.winter || date < seasons.spring) {
    seasonStart = seasons.winter;
  } else if (date >= seasons.spring && date < seasons.summer) {
    seasonStart = seasons.spring;
  } else if (date >= seasons.summer && date < seasons.autumn) {
    seasonStart = seasons.summer;
  } else {
    seasonStart = seasons.autumn;
  }

  // Calculate the day of the season
  const diffInTime = date.getTime() - seasonStart.getTime();
  const dayOfSeason = Math.floor(diffInTime / (1000 * 60 * 60 * 24)) + 1;

  return dayOfSeason;
}

function calculatePoints(dayOfSeason: number): string {
  if (dayOfSeason < 1) {
    throw new Error("Day of the season must be 1 or greater.");
  }

  let points = dayOfSeason + 1;

  if (dayOfSeason > 2) {
    // Points calculation for the third and subsequent days
    let pointsTwoDaysAgo = 2; // Starting points for day 1
    let pointsOneDayAgo = 3;  // Starting points for day 2

    for (let currentDay = 3; currentDay <= dayOfSeason; currentDay++) {
      points = Math.round(pointsTwoDaysAgo + 0.6 * pointsOneDayAgo);
      pointsTwoDaysAgo = pointsOneDayAgo;
      pointsOneDayAgo = points;
    }
  }

  console.log(`Day ${dayOfSeason}: ${points} points`);

  // Format points if they exceed 1000
  return points > 1000 ? `${formatNumber(points)}` : points.toString();
}
