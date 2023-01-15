import { gql } from "graphql-request";

export const EXECUTE_PAY = gql`
  type TypePayInfo {
    id: String!;
    amount: Int!;
  }

  type TypePayInfos {
    payinfo: TypePayInfo[];
  }

  mutation EXECUTE_PAY($info: TypePayInfos) {
    payInfo(info: $info)
  }
`;