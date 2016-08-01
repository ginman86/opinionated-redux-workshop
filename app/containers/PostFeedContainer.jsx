import { connect } from 'react-redux'
import PostFeed from 'components/PostFeed'
import { FETCH_CREATOR_POST_FEED_START, FETCH_CREATOR_POST_FEED_SUCCESS, fetchCreatorPostFeed } from 'actions/creator-post-feed'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return { ...state.default }
}

const mapDispatchToProps = (dispatch) => {
  console.log('Dispatch', dispatch)
    return {
        onMount: (creatorId) => {
          fetchCreatorPostFeed(creatorId).then((result) => {
            console.log(result)
            return dispatch({
              type: FETCH_CREATOR_POST_FEED_SUCCESS, result })
          })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)
