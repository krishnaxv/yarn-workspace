import React from 'react'

/**
 * List component
 * @param {Object} props
 */
const List = props => (
  <ul>{props.list.map((item, index) => <li key={index}>{index}</li>)}</ul>
)

export default List
