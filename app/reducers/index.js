import { FETCH_CREATOR_POST_FEED } from 'actions/creator-post-feed'

const initialState = {
  posts: [],
  isLoading: false
}
const postFeed = (state = initialState, { payload, type }) => {
  switch (type) {
    case `${FETCH_CREATOR_POST_FEED}_START`:
      return { isLoading: true, ...state }
    case `${FETCH_CREATOR_POST_FEED}_SUCCESS`:
      return { isLoading: false, posts: payload.data }
    case `${FETCH_CREATOR_POST_FEED}_ERROR`:
      return { isLoading: false, ...state }
    default:
     return state
  }
}

export default postFeed
