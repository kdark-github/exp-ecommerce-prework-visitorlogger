import React from 'react';
import PropTypes from 'prop-types';

import { Grid, TextField, MenuItem, Paper, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
// pick a date util library
import LuxonUtils from '@date-io/luxon';

import './add-visitor.style.css';
import { addVisitorToList } from '../../redux/visitors/visitor.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'



const visitTypeList = [
    { type: "Meeting" },
    { type: "Delivery" },
    { type: "Personal" }
]

const initial_state = {
    visitor_name: "",
    email: "",
    selfie: undefined,
    visit_type: "",
    person_to_visit: "",
    date_of_entry: new Date().toLocaleDateString(),
    entry_time: new Date(),
    exit_time: new Date()
}

const AddVisitor = ({ logVisit, ...props }) => {

    const [visitDetails, setVisitDetails] = React.useState(initial_state);

    const [alerts, setAlerts] = React.useState({
        selfie: "",
        time: ""
    })

    const handleInputChanges = event => {

        const { name, value } = event.target;

        setVisitDetails(prev_state => ({
            ...prev_state,
            [name]: value
        }))


    }

    const handleTimers = (name, time) => {

        setVisitDetails(prev_state => ({
            ...prev_state,
            [name]: time
        }))

    }


    const addLog = e => {
        e.preventDefault();
        // console.table(visitDetails);

        let { visitor_name,
            email, selfie,
            visit_type
            , date_of_entry,
            person_to_visit,
            entry_time,
            exit_time } = visitDetails;

        let data_to_save = {
            visitor_name,
            email, selfie,
            visit_type,
            date_of_entry,
            person_to_visit,
            entry_time: entry_time.toLocaleTimeString(),
            exit_time: exit_time.toLocaleTimeString()
        }

        console.log({ entry_time, exit_time });

        setAlerts({
            time: entry_time === exit_time ? "Entry time & exit time can't be same." : "",
            selfie: Boolean(selfie) ? "" : "Photo required.",
        })
        if (!!!Boolean(selfie) && entry_time === exit_time) return

        logVisit(data_to_save);
        setVisitDetails(initial_state)

    }
    return (
        <Paper className="visitor-add-paper">
            <form onSubmit={addLog}>
                <Grid container justify="center">

                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <TextField
                            className="visitor-tf"
                            required
                            name="visitor_name"
                            label="Visitor's fullname"
                            value={visitDetails.visitor_name}
                            onChange={handleInputChanges}
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <TextField
                            className="visitor-tf"
                            required
                            type="email"
                            name="email"
                            label="Visitor's Email"
                            value={visitDetails.email}
                            onChange={handleInputChanges}
                        />
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <TextField
                            className="visitor-tf"
                            required
                            name="visit_type"
                            label="Visit type"
                            value={visitDetails.visit_type}
                            onChange={handleInputChanges}
                            select
                        >
                            {visitTypeList
                                .map(visit => <MenuItem key={visit.type} value={visit.type}>
                                    {visit.type}
                                </MenuItem>
                                )
                            }
                        </TextField>
                    </Grid>


                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <TextField
                            className="visitor-tf"
                            required
                            name="person_to_visit"
                            label="Visiting person's fullname"
                            value={visitDetails.person_to_visit}
                            onChange={handleInputChanges}
                        />
                    </Grid>


                    <Grid item lg={4} md={4} sm={6} xs={12}>

                        <MuiPickersUtilsProvider utils={LuxonUtils}>
                            <TimePicker required className="visitor-tf" autoOk label="Entry Time" name="entry_time" value={visitDetails.entry_time} onChange={time => handleTimers("entry_time", time)} />

                        </MuiPickersUtilsProvider>

                    </Grid>


                    <Grid item lg={4} md={4} sm={6} xs={12}>

                        <MuiPickersUtilsProvider utils={LuxonUtils}>
                            <TimePicker required className="visitor-tf" autoOk label="Exit Time" name="exit_time" value={visitDetails.exit_time} onChange={time => handleTimers("entry_time", time)} />

                        </MuiPickersUtilsProvider>

                    </Grid>


                    <div style={{ color: 'red', padding: 10 }}>{alerts.time}</div>
                    <div >
                        <Button style={{ marginRight: '13px' }} onClick={e => setVisitDetails(initial_state)} color="primary" variant="contained">Clear</Button>
                        <Button type="submit" color="primary" variant="contained">Log</Button>


                    </div>
                </Grid>
            </form>
        </Paper >
    );
};

AddVisitor.propTypes = {

};


const dispatchStateToProps = dispatch => ({
    logVisit: (item) => dispatch(addVisitorToList(item))
})

export default connect(null, dispatchStateToProps)(AddVisitor);

