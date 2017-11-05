function graphqlFetch (query, vars = {}, opName = "", userOpts = {}) {
  const body = {
    query: query,
    variables: vars
  }

  if (opName) {
    body.operationName = opName
  }

  // default opts
  const opts = Object.assign({
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }, userOpts)

  return fetch('https://localhost:3001/graphql', opts)
    .then((res) =>res.json())
}

export const api = graphqlFetch

export default api
