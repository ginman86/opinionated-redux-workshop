import { connect } from 'react-redux';
import PostFeed from 'components/PostFeed';
import { fetchCreatorPostFeed } from 'actions/creator-post-feed';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return { ...state.default }
}

const mapDispatchToProps = (dispatch) => {
    console.log('Dispatch', dispatch)
    return {
        onMount: (creatorId) => {
          fetchCreatorPostFeed(creatorId, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)
