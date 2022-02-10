import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdditionsettingsService {

  levels = [
    {
      level: 1,
      multiplier: 10,
      answerLimiter: 20,
      choicesMultiplier: 100,
    },
    {
      level:2,
      multiplier: 100,
      answerLimiter: 200,
      choicesMultiplier: 1000,
    },
    {
      level:3,
      multiplier: 1000,
      answerLimiter: 2000,
      choicesMultiplier: 10000,
    }

  ]

  constructor() { }
}
