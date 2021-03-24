/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUSERS = /* GraphQL */ `
  mutation CreateUSERS(
    $input: CreateUSERSInput!
    $condition: ModelUSERSConditionInput
  ) {
    createUSERS(input: $input, condition: $condition) {
      id
      family_name
      email
      phone_number
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUSERS = /* GraphQL */ `
  mutation UpdateUSERS(
    $input: UpdateUSERSInput!
    $condition: ModelUSERSConditionInput
  ) {
    updateUSERS(input: $input, condition: $condition) {
      id
      family_name
      email
      phone_number
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUSERS = /* GraphQL */ `
  mutation DeleteUSERS(
    $input: DeleteUSERSInput!
    $condition: ModelUSERSConditionInput
  ) {
    deleteUSERS(input: $input, condition: $condition) {
      id
      family_name
      email
      phone_number
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
