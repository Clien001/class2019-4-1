import React, { Component } from 'react';
import * as actions from '../store/action';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store/setmapstateprops';
import './admin.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    create = () => {
        this.props.create();
    }

    loginFn = () => {
        let {login} = this.props;
        let {user,pw} = this.refs;
        login(user.value,pw.value);
    }
    componentDidMount() {
        this.props.getcookie();
        let {loginonOff,history} = this.props;
        if(loginonOff){
            history.push('/home');
        }
    }
    componentDidUpdate() {
        let {loginonOff,history} = this.props;
        console.log('数据改变',loginonOff)
        if(loginonOff){
            history.push('/home');
        }
       
    }
    render() { 
        
        return (  
            <div className="login-bg">
                <div className="login">
                    <div className="message">管理员登录</div>
                    <div className="dark"></div>
                    <div className="layui-form">
                        <input 
                            type="text" 
                            id="t1" 
                            className="username" 
                            placeholder="用户名" 
                            ref="user"
                        />
                        <hr className="hr15"/>
                        <input 
                            type="text" 
                            id="t2" 
                            className="password" 
                            placeholder="密码" 
                            ref="pw"
                        />
                        <hr className="hr15"/>
                        <input 
                            type="button" id="btn" 
                            className="record" 
                            value="登录" 
                            onClick={this.loginFn}
                        />
                        <hr className="hr15"/>
                    </div>
                
                </div>
            </div>
        );
    }
}
 
export default connect(mapStateToProps,actions)(Login);
