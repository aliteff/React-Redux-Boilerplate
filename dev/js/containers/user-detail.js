import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserInfo} from '../actions/index';
import TextInput from '../components/text-input';
import Immutable, {Map} from 'immutable';



class UserDetail extends Component {

    /****** LIFE CYCLE METHODS ******/

    constructor(props){
        super(props);
        this.onEditInfo = this.onEditInfo.bind(this);
        this.toggleEditImage = this.toggleEditImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user:null,
            showImgInput: false
        };
    }

    componentWillMount() {
        console.log("UserDetail#componentWillMount()");
        this.props.userList.filter((user) => {
            if( user.id === parseInt(this.props.routeParams.userID)) {
                this.setState({'user': user});
            }
        });
    }

    componentWillReceiveProps(nextProps){

        console.log("UserDetail#componentWillReceiveProps()");
        nextProps.userList.filter((user) => {
            if( user.id === parseInt(this.props.routeParams.userID)) {
                this.setState({'user': user});
            }
        });
    }

    /****** EVENT METHODS ******/

    toggleEditImage(){
        const isShow = !this.state.showImgInput;
        this.setState({showImgInput: isShow});
    }

    onEditInfo(event) {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        const newState = Object.assign({},this.state.user,{[targetName]:targetValue});
        this.setState(newState);
        return this.props.editUserInfo(newState, targetName, targetValue);
    }

    handleSubmit(event){
        event.preventDefault();
        const targetName = 'thumbnail';
        const targetValue = event.target.elements[0].value;
        const newState = Object.assign({},this.state.user,{[targetName]:targetValue});
        this.setState(newState);
        this.toggleEditImage();
        return this.props.editUserInfo(newState, targetName, targetValue);
    }

    /****** RENDER METHODS******/

    renderImageBlock(){

        const {thumbnail} = this.state.user;
        let btnText = 'Edit Image';

        if(this.state.showImgInput){
            btnText = 'Cancel';
        }

        return (
            <div className='text-center'>
                <div
                    style={{
                        display: 'inline-block',
                        position: 'relative'
                    }} >
                    <button
                        className="btn btn-primary"
                        style={{
                            position:'absolute',
                            top: 10,
                            right: 10
                        }}
                        onClick={this.toggleEditImage} >
                        {btnText}
                    </button>
                    <img
                        style={{cursor:'pointer'}}
                        src={thumbnail}
                        className='img-responsive thumbnail center-block' />
                </div>
            </div>
        );
    }

    renderImageInput(){

        const {thumbnail} = this.state.user;

        if(this.state.showImgInput){
            return (
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className='col-xs-10'>
                            <TextInput
                                name='thumbnail'
                                defaultValue={thumbnail} />
                        </div>
                        <div className='col-xs-2'>
                            <button
                                type='submit'
                                className="btn btn-primary">
                                Done
                            </button>
                        </div>
                        <div className='col-xs-12'>
                            <hr/>
                        </div>
                    </form>
                </div>
            );
        }

        return;
    }

    render() {

        const {thumbnail,first,last,age,description} = this.state.user;;

        return (
            <div>
                <h2 className="text-primary">User Detail</h2>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className='panel-title'>{first} {last}</h3>
                    </div>
                    <div className="panel-body">

                        {this.renderImageBlock()}
                        {this.renderImageInput()}

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

/****** REDUX METHODS ******/

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
