import { createContext } from 'react';

export interface IState {
  minutes: number,
  seconds: number
  setMinutes(min: number): void,
  setSeconds(sec: number): void,
  minutesIncrease(): void,
  minutesDecrease(): void,
  secondsIncrease(): void,
  secondsDecrease(): void,
  navigate(path: string): void,
}

const State: IState = {
  minutes: 0,
  seconds: 0,
  setMinutes: (min: number) => { },
  setSeconds: (sec: number) => { },
  minutesIncrease: () => { },
  minutesDecrease: () => { },
  secondsIncrease: () => { },
  secondsDecrease: () => { },
  navigate: (path: string) => { },
}

const Ctx = createContext(State);

export {
  Ctx,
  State,
}
