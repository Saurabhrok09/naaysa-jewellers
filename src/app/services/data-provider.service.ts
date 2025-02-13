import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() { }
  goldSizeRates:{fromRatio:number,toRatio:number,rate:number}[] = [
    {
      fromRatio:100,
      toRatio:92,
      rate:0.94,
    },
    {
      fromRatio:100,
      toRatio:76,
      rate:0.83,
    },
    {
      fromRatio:100,
      toRatio:60,
      rate:0.72,
    },
    {
      fromRatio:100,
      toRatio:100,
      rate:1,
    },
    {
      fromRatio:92,
      toRatio:100,
      rate:1.08,
    },
    {
      fromRatio:92,
      toRatio:76,
      rate:0.861111,
    },
    {
      fromRatio:92,
      toRatio:60,
      rate:0.732861,
    },
    {
      fromRatio:92,
      toRatio:92,
      rate:1,
    },
    {
      fromRatio:76,
      toRatio:100,
      rate:1.25,
    },
    {
      fromRatio:76,
      toRatio:92,
      rate:1.15,
    },
    {
      fromRatio:76,
      toRatio:60,
      rate:0.851064,
    },
    {
      fromRatio:76,
      toRatio:76,
      rate:1,
    },
    {
      fromRatio:60,
      toRatio:100,
      rate:1.40,
    },
    {
      fromRatio:60,
      toRatio:92,
      rate:1.29,
    },
    {
      fromRatio:60,
      toRatio:76,
      rate:1.14,
    },
    {
      fromRatio:60,
      toRatio:60,
      rate:1,
    },
  ]
  
}
