function graphqlFetch ({ query, vars = {}, operationName = '' }, userOpts = {}) {
  const body = {
    query: query,
    variables: vars
  }

  if (operationName) {
    body.operationName = operationName
  }

  // default opts
  const opts = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    ...userOpts
  }

  return fetch('https://localhost:3001/graphql', opts)
    .then((res) => res.json())
}

export const api = graphqlFetch

export default api
