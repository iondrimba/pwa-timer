export const addLeadingZero = (number: number) => {
  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
}

const secondsToHours = (seconds: number): number => {
  const hours = Math.floor(seconds / 3600);

  return hours;
}

export const secondsToMinutes = (seconds: number): number => {
  const minutes = Math.floor((seconds - (secondsToHours(seconds) * 3600)) / 60);

  return minutes;
}

export const convertSecondsToString = (totalSeconds: string = '60') => {
  const sec_num = parseInt(totalSeconds, 10);

  let hours = secondsToHours(sec_num);
  let minutes = secondsToMinutes(sec_num);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  return {
    min: `${minutes < 10 ? '0' + minutes : minutes}`,
    sec: `${seconds < 10 ? '0' + seconds : seconds}`
  };
}
