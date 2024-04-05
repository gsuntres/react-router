import * as React from 'react'
import { RouterContext } from './context.mjs'

export const useRouter = () =>  React.useContext(RouterContext)

export const useRouterStore = (name, defaultValue) => {

  if(!name) throw new Error('route store requires a name')

  const { setItem, getItem } = React.useContext(RouterContext)

  const [item, setItemInner] = React.useState(getItem(name, defaultValue))

  const setValue = React.useCallback((v) => {
    setItem(name, v)
    setItemInner(v)
  }, [setItem])

  return [item, setValue]
}
