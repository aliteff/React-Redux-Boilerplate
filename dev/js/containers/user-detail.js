import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserInfo} from '../actions/index';
import TextInput from '../components/text-input';
import Immutable, {Map} from 'immutable';



class UserDetail extends Component {

    constructor(props){
        super(props);
        this.onEditInfo = this.onEditInfo.bind(this);
        this.state = {user:null};
    }

    setStateUser(){
        this.props.userList.filter((user) => {
            if( user.id === parseInt(this.props.routeParams.userID)) {
                this.setState({'user': user});
            }
        });
    }

    componentWillMount() {
        console.log("UserDetail#componentWillMount()");
        this.setStateUser();
    }

    onEditInfo(event) {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        const newState = Object.assign({},this.state.user,{[targetName]:targetValue});
        this.setState(newState);
        return this.props.editUserInfo(newState, targetName, targetValue);
    }

    render() {
        const userDetail = this.props.userList.filter( (user) => {
            if( user.id === parseInt( this.props.routeParams.userID ) ){
                return user;
            }
        });

        const {thumbnail,first,last,age,description} =  userDetail[0]; //this.state.user;//this.props.user;

        return (
            <div>
                <h2 className="text-primary">User Detail</h2>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className='panel-title'>{first} {last}</h3>
                    </div>
                    <div className="panel-body">
                        <img
                            src={thumbnail}
                            className='img-responsive thumbnail center-block' />

                        <TextInput
                            label='First Name'
                            name='first'
                            value={first}
                            onChange={this.onEditInfo} />

                        <TextInput
                            label='Last Name'
                            name='last'
                            value={last}
                            onChange={this.onEditInfo} />

                        <TextInput
                            label='Age'
                            name='age'
                            value={age}
                            type='number'
                            onChange={this.onEditInfo} />

                        <TextInput
                            label='Description'
                            name='description'
                            value={description}
                            onChange={this.onEditInfo} />

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userList: state.users,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        editUserInfo: editUserInfo,
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
