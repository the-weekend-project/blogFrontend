const post = (state, action) => {
  switch (action.type) {
    case "TOGGLE_POST":
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        expanded: !state.expanded
      })

    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch (action.type) {
    case "TOGGLE_POST":
      return state.map(p =>
        post(p, action)
      )
    default:
      return state
  }
}

export default posts
