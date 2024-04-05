import * as React from 'react'
import { useRouter } from './hooks.mjs'

export const Link = ({
  to,
  children,
  disabled = false,
  markActive = false,
  loose
}) => {

  const { navigate, checkActive } = useRouter()

  return (
    <a
      disabled={disabled}
      className={`${(markActive && checkActive(to, loose)) && 'link-active' }`}
      onClick={() => { navigate(to) }}
    >
      { children }
    </a>
  )
}

export const Route = ({
    on,
    loose = false,
    redirectFrom,
    element
  }) => {

  const {
    registerRoute,
    checkActive
  } = useRouter()

  React.useEffect(() => {
    registerRoute({
      target: on,
      redirectFrom
    })
  }, [])

  return checkActive(on, loose) && element
}

