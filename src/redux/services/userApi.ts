import { tagTypes } from "../tagTypes";
import baseApi from "./baseApi";

const USER_URL = "/users";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: () => ({
        url: `${USER_URL}/create-user`,
        method: "POST",
      }),
      invalidatesTags: [tagTypes.user],
    }),

    getUsers: builder.query({
      query: (arg) => ({
        url: USER_URL,
        method: "GET",
        params: {
          ...arg,
          limit: 10,
        },
      }),
      providesTags: [tagTypes.user],
    }),

    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `${USER_URL}/update-role/${userId}`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUsersQuery,
  useUpdateUserRoleMutation,
} = userApi;
