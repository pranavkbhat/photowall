import Main from './Main'
// import Land from './Landing'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router-dom'
// import Main from './Main'

function mapStateToProps(state){
    return{
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App