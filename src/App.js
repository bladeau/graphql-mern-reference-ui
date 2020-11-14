import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Nav } from './components/Nav'

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
        <Nav />
        <Home />
      </ApolloProvider>
    </>
  )
}

export default App
