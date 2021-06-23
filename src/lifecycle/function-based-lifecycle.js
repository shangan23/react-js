import React, { useState, useEffect } from 'react'

export function FunctionBasedLifecycle() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowWidth, setWindowWidth] = useState(0)

  //console.log(resourceType)

  const handleWindowWidth = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    console.log('onMount')
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowWidth)
  }, [])

  useEffect(() => {
    console.log('onUpdate')
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
    return () => {
      console.log('onUnMount')
    }
  }, [resourceType, windowWidth])

  return (
    <div>
      <p>Window Width: {windowWidth}</p>
      <hr />
      <button type="button" onClick={() => setResourceType('posts')}>
        Posts
      </button>
      <button type="button" onClick={() => setResourceType('users')}>
        Users
      </button>
      <button type="button" onClick={() => setResourceType('comments')}>
        Comments
      </button>
      <p>Resources by {resourceType}</p>
      {items.map((item, i) => (
        <li key={i}>{JSON.stringify(item)}</li>
      ))}
    </div>
  )
}
