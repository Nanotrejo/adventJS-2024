function getCompleted(timeWorked: string, totalTime: string): string {
  const [hoursWorked, minutesWorked, secondsWorked] = timeWorked
    .split(':')
    .map(Number);
  const [hoursTotal, minutesTotal, secondsTotal] = totalTime
    .split(':')
    .map(Number);

  const totalSecondsWorked =
    hoursWorked * 3600 + minutesWorked * 60 + secondsWorked;
  const totalSecondsTotal =
    hoursTotal * 3600 + minutesTotal * 60 + secondsTotal;

  return `${Math.round((totalSecondsWorked / totalSecondsTotal) * 100)}%`;
}

console.log(getCompleted('01:00:00', '03:00:00')); // 33%
console.log(getCompleted('02:00:00', '04:00:00')); // 50%
console.log(getCompleted('01:00:00', '01:00:00')); // 100%
console.log(getCompleted('00:10:00', '01:00:00')); // 17%
console.log(getCompleted('01:10:10', '03:30:30')); // 33%
console.log(getCompleted('03:30:30', '05:50:50')); // 60%
