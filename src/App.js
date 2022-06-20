import React from 'react';
import gql from "graphql-tag";
import { Query } from 'react-apollo';

const categoriesNameRequest = () => gql`
  query {
    category {
      name
    }
    categories {
      name
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <Query query={categoriesNameRequest()}>
          {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;
          return (
            <div>{console.log(data)}</div>
          );
        }}
      </Query>
    )
  }
}

export default App;
