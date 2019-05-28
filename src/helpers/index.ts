export const addLeadingZero = (number: number): string => {
  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
}


export const convertSecondsToString = (totalSeconds: string = '60') => {
  const sec_num = parseInt(totalSeconds, 10);
  let hours: number = Math.floor(sec_num / 3600);
  let minutes: number = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds: number = sec_num - (hours * 3600) - (minutes * 60);

  return {
    min: `${minutes < 10 ? '0' + minutes : minutes}`,
    sec: `${seconds < 10 ? '0' + seconds : seconds}`
  };
}