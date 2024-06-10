import baseApi from "./baseApi";

const TESTIMONIAL_URL = "/testimonials";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => ({
        url: `${TESTIMONIAL_URL}`,
        method: "GET",
      }),
    }),

    createTestimonial: builder.mutation({
      query: () => ({
        url: `${TESTIMONIAL_URL}/create-testimonial`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetTestimonialsQuery, useCreateTestimonialMutation } =
  testimonialApi;
