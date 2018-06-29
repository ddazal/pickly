import gql from 'graphql-tag';

const getPics = gql`
  query {
    pics {
      id
      name
      family
    }
  }
`;

export{
  getPics
}
