import React from 'react';
import {connect} from '../react-redux/index';
import * as actions from './actions';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props);
        return (
            <div>
                <p>父组件{this.props.num}</p>
                <button onClick={()=>{
                    // this.props.dispatch({type:'ADD'})
                    this.props.add();
                }}>{this.props.num}</button>
            </div>
        );
    }
}
//返回什么数据，this.props就有什么数据
export default connect(state=>{
    console.log(state)
    return state;//{num:10}
},actions)(App)