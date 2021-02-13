import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddVisitor from '../../component/add-visitor/add-visitor.component';
import VisitorsList from '../../component/visitors-list/visitors-list.component';

class VisitorPage extends Component {
    render() {
        return (
            <div>
                <AddVisitor />

                <VisitorsList/>
            </div>
        );
    }
}

VisitorPage.propTypes = {

};

export default VisitorPage;