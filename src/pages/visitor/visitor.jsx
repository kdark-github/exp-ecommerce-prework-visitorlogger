import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddVisitor from '../../component/add-visitor/add-visitor.component';
import VisitorsList from '../../component/visitors-list/visitors-list.component';
import './visitor.css';
class VisitorPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);

    }

    render() {
        return (
            <div>
                <AddVisitor />

                <h2 className="vl-lbl">Visitor's list</h2>
                <VisitorsList />
            </div>
        );
    }
}

VisitorPage.propTypes = {

};

export default VisitorPage;