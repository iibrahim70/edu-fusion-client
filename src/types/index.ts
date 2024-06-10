export * from "./navigationAndLayout.interface";
export * from "./testimonial.interface";
export * from "./user.interface";

export interface IInstructor {
  address: string;
  email: string;
  gender: string;
  name: string;
  phoneNumber: string;
  picture: string;
  role: string;
  _id: string;
}

export interface ICourse {
  availableSeats: number;
  className: string;
  enrollStudent: number;
  feedback: string;
  imageUrl: string;
  instructorEmail: string;
  instructorName: string;
  price: number;
  status: string;
  _id: string;
}
