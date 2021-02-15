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
                visitorsList.map((visitor, idx) => <Paper key={idx} className="visitors-list-item-paper">
                    <div className="visitor-image" style={{ backgroundImage: `url(${visitor.selfie})` }}>
                    </div>

                    <div>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                Visitors name :<span className="visitor-det-lbl" > {visitor.visitor_name}</span >
                            </Grid>

                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                Visitors Email :<span className="visitor-det-lbl" > {visitor.email}</span >
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                Date :<span className="visitor-det-lbl" > {visitor.date_of_entry}</span >
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                Visit type :<span className="visitor-det-lbl" > {visitor.visit_type}</span >
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                Visiting Person :<span className="visitor-det-lbl" > {visitor.person_to_visit}</span >
                            </Grid>


                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                Visiting Timmings :<span className="visitor-det-lbl" > {visitor.entry_time + " - " + visitor.exit_time}</span >
                            </Grid>


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