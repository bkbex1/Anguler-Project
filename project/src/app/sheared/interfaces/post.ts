import { IPic } from "./picture";

export interface IPost{
    "userId": number,
    "id": number,
    "title": String,
    "body": String,
    "picture":IPic,
  }