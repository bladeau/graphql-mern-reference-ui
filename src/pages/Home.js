import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const GET_ALL_POSTS = gql`
  {
    allPosts {
      id
      title
      description
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS)
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS)

  // access context
  const { state, dispatch } = useContext(AuthContext)

  const updateUserName = () => {
    dispatch({
      type: 'LOGGED_IN_USER',
      payload: 'Al',
    })
  }

  if (loading) return <p className='p-5'>Loading...</p>
  if (error) return <p className='p-5'>Error :(</p>
  return (
    <div className='container p-5'>
      <div className='row p-5'>
        {data.allPosts.map((p) => (
          <div className='col-md-4' key={p.id}>
            <div className='card'>
              <div className='card-body'>
                <div className='card-title'>
                  <h4>{p.title}</h4>
                  <p className='card-text'>{p.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='row p-5'>
        <button
          onClick={() => fetchPosts()}
          className='btn btn-raised btn-primary'
        >
          Fetch Posts
        </button>
      </div>

      {JSON.stringify(posts)}
      <hr />
      {JSON.stringify(state.user)}

      <hr />
      <button className='btn btn-primary' onClick={updateUserName}>
        Change User name
      </button>
    </div>
  )
}

export default Home
