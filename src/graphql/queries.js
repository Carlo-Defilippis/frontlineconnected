/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUSERS = /* GraphQL */ `
  query GetUSERS($id: ID!) {
    getUSERS(id: $id) {
      id
      username
      email
      phone_number
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUSERSs = /* GraphQL */ `
  query ListUSERSs(
    $filter: ModelUSERSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUSERSs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone_number
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUSERS = /* GraphQL */ `
  query SyncUSERS(
    $filter: ModelUSERSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUSERS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        phone_number
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;