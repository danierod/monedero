import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
