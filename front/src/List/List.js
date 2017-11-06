import { h } from 'preact'

export const LoadingList = ({ loaded, loading, name, items, loadItems, callback }) => {
  if (!loaded && !loading) {
    loadItems()
    return (<div>Loading {name}...</div>)
  }
  return (<div>{items.map(callback)}</div>)
}

export default LoadingList
