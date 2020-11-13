import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const client = new ApolloClient({
      uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql`
          {
            allPosts {
              id
              title
              description
            }
          }
        `,
      })
      .then((result) => setPosts(result.data.allPosts));
  }, []);

  return (
    <>
      <p>{posts.length > 0 ? JSON.stringify(posts) : 'Loading...'}</p>
    </>
  );
};

export default App;
