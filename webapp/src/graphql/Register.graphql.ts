import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
