import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectActiveUser} from '../actions/index'
// import TextInput from '../components/text-input'

class UserList extends Component {

    /****** LIFE CYCLE METHODS ******/

    constructor(props){
        super(props);
    }

    /****** RENDER METHODS******/

    renderList() {
        return this.props.users.map((user) => {

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
                <button
                    className='btn btn-link'
                    style={{marginBottom:15}}>
                    Add User
                </button>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }

}

/****** REDUX FUNCTIONS ******/

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectActiveUser: selectActiveUser,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
