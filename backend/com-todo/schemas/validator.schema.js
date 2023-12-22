export const GetProductValidatorSchema = {
    type: "object",
    properties: {
      page: {type: "string"},
      limit: {type: "string"},
    },
    required: ["page", "limit"],
    additionalProperties: true,
  }
