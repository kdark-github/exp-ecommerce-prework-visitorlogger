import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import './visitors-list.styles.css';
import { createStructuredSelector } from 'reselect';
import { visitorsList } from '../../redux/visitors/visitor.selectors';
import { connect } from 'react-redux';
const VisitorsList = ({ visitorsList = [], ...props }) => {
    return (
        <>
            {
                visitorsList.map(visitor => <Paper className="visitors-list-item-paper">
                    <div>
                        <img src="" alt="" />
                    </div>

                    <div>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                Visitors name :<b> {visitor.visitor_name}</b>                            </Grid>

                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                Visitors Email :<b> {visitor.email}</b>                            </Grid>

                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                Date :<b> {visitor.date_of_entry}</b>
                            </Grid>

                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                Visit type :<b> {visitor.visit_type}</b>
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                Visiting Person :<b> {visitor.person_to_visit}</b>                            </Grid>


                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                Visiting Timmings :<b> {visitor.entry_time + " - " + visitor.exit_time}</b>                            </Grid>


                        </Grid>
                    </div>
                </Paper>)
            }
        </>
    );
};

VisitorsList.propTypes = {

};


const mapStateToProps = createStructuredSelector({
    visitorsList
})


export default connect(mapStateToProps)(VisitorsList);