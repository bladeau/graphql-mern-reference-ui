import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useState, useEffect } from 'react'

// import provider components
import Home from './pages/Home'
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </>
  )
}

export default App
