import { h } from 'preact'

export const LoadingList = ({
  loaded, loading, name, sortBy = 'id',
  items, loadItems, callback
}) => {
  if (!loaded && !loading) {
    loadItems()
    return (<div>Loading {name}...</div>)
  }
  return (<div>{
    [...Object.values(items)]
      .sort((a, b) => {
        if (a[sortBy] < b[sortBy]) { return -1 }
        if (a[sortBy] > b[sortBy]) { return 1 }
        return 0
      })
      .map(callback)
  }</div>)
}

export default LoadingList
