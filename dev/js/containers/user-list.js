import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectActiveUser} from '../actions/index'
// import TextInput from '../components/text-input'

class UserList extends Component {

    constructor(props){
        super(props);
        // this.onNameChange = this.onNameChange.bind(this);
    }


    renderList() {
        return this.props.users.map((user) => {

            // const onFirstNameChange = (event) => {
            //     console.log('eventTarget: ', event);
            //     console.log('eventTarget: ', event.target);
            //     return this.props.editUserFirstName(user, event.target.value);
            // };

            // const onLastNameChange = (event) => {
            //     return this.props.editUserLastName(user, event.target.value);
            // };

            const onSelectActiveUser = () => {
                const {router,location} = this.props;
                router.push(location.pathname+'/'+user.id);
            };


            return (
                <div
                    key={user.id}
                    className="panel panel-primary">

                    <div className="panel-heading">
                        <h3
                            className='panel-title'
                            style={{display:'inline-block'}} >
                            {user.first} {user.last}
                        </h3>
                        <button
                            className='btn btn-default pull-right btn-xs'
                            onClick={onSelectActiveUser}>
                            Edit
                        </button>
                    </div>

                    <div className="panel-body">

                        <div className="col-sm-3 col-xs-12">
                            <img className='img-responsive thumbnail' src={user.thumbnail} />
                        </div>

                        <div className="col-sm-9 col-xs-12">

                            <form className="form-horizontal">

                                <div className="form-group">
                                    <label className="col-sm-2 control-label" htmlFor="first-name-readonly">First Name</label>
                                    <div className="col-sm-10">
                                        <input
                                            id="first-name-readonly"
                                            type="text"
                                            className="form-control"
                                            readOnly={true}
                                            value={user.first} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-2 control-label" htmlFor="last-name-readonly">Last Name</label>
                                    <div className="col-sm-10">
                                        <input
                                            id="last-name-readonly"
                                            type="text"
                                            className="form-control"
                                            readOnly={true}
                                            value={user.last} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-2 control-label" htmlFor="age-readonly">Age</label>
                                    <div className="col-sm-10">
                                        <input
                                            id="age-readonly"
                                            type="text"
                                            className="form-control"
                                            readOnly={true}
                                            value={user.age} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-sm-2 control-label" htmlFor="description-readonly">Description</label>
                                    <div className="col-sm-10">
                                        <input
                                            id="description-readonly"
                                            type="text"
                                            className="form-control"
                                            readOnly={true}
                                            value={user.description} />
                                    </div>
                                </div>

                            </form>

                            {/*
                            <NameInput
                                label='First Name'
                                userName={user.first}
                                onNameChange={onFirstNameChange} />

                            <NameInput
                                label='Last Name'
                                userName={user.last}
                                onNameChange={onLastNameChange} />

                            */}
                        </div>

                    </div>

                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-primary">User Selecter</h2>
                <div>
                    {this.renderList()}
                </div>
                {this.props.children}
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectActiveUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectActiveUser: selectActiveUser,
        // editUserFirstName: editUserFirstName,
        // editUserLastName: editUserLastName,
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
