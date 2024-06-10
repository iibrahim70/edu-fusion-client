import { IUser } from "./user.interface";

export interface ITestimonial {
  _id: string;
  userId: IUser;
  review: string;
  rating: number;
}
