export const tagTypes = {
  user: "user",
  instructor: "instructor",
  admin: "admin",
  course: "course",
  testimonial: "testimonial",
  note: "note",
} as const;

// Create a type alias for the tag types
export type TagType = (typeof tagTypes)[keyof typeof tagTypes];

// Create a list of tag types using Object.values
export const tagTypesList = Object.values(tagTypes);
