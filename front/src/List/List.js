import { h } from 'preact'

export const LoadingList = ({ loaded, name, items, loadItems, callback }) => {
  if (!loaded) {
    loadItems()
    return (<div>Loading {name}...</div>)
  }
  return (<div>{items.map(callback)}</div>)
}

export default LoadingList
