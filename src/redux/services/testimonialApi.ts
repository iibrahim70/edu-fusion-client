import { tagTypes } from "../tagTypes";
import baseApi from "./baseApi";

const TESTIMONIAL_URL = "/testimonials";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: () => ({
        url: `${TESTIMONIAL_URL}/create-testimonial`,
        method: "POST",
      }),
      invalidatesTags: [tagTypes.testimonial],
    }),

    getTestimonials: builder.query({
      query: () => ({
        url: TESTIMONIAL_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.testimonial],
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetTestimonialsQuery } =
  testimonialApi;
