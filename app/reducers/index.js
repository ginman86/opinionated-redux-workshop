import { FETCH_CREATOR_POST_FEED_START, FETCH_CREATOR_POST_FEED_SUCCESS } from 'actions/creator-post-feed'

const initialState = {
  posts: [],
  isLoading: false
}
const postFeed = (state = initialState, action) => {
  console.log('actions', action)
  switch (action.type) {
    case FETCH_CREATOR_POST_FEED_START:
      return { isLoading: true, ...state }
    case FETCH_CREATOR_POST_FEED_SUCCESS: 
      return { isLoading: false, posts: action.result.data }
    default:
     return state
  }
}

export default postFeed
