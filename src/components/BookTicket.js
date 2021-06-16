import React from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';  
import TextField from '@material-ui/core/TextField';

const seats = [ '1','2','3','4','5','6'];
const rooms = ['1','2','3'];
const dates = [ '20/4/11 9:00 Pm','20/4/11 3:00 Pm','20/4/11 6:00 Pm'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button:{
        margin:theme.spacing.unit
    },
    selector: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
    formControl: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const TicketForm =(props)=>{
  const [open,setOpen]=React.useState(true);
  const [adultseats,setAdultSeats]=React.useState([]);
  const [kidseats,setKidSeats]=React.useState([]);
  const [elderseats,setElderSeats]=React.useState([]);
  const [studentseats,setStudentSeats]=React.useState([]);
  const [room,setRoom]=React.useState(null);
  const [date,setDate]=React.useState(null);
  const [creditCard,setCard]=React.useState('');
  const [price,setPrice]= React.useState(0);
  const { classes } = props;
  const theme = useTheme();


  const handleAdultChange = event => {
    if(!kidseats.some(item=>event.target.value.includes(item)) &&!elderseats.some(item=>event.target.value.includes(item))&&!studentseats.some(item=>event.target.value.includes(item))){
    setAdultSeats(event.target.value);
    setPrice(event.target.value.length*15+kidseats.length*8+elderseats.length*10+studentseats.length*5);
  }
  };
  const handleKidChange = event => {
    if(!adultseats.some(item=>event.target.value.includes(item)) &&!elderseats.some(item=>event.target.value.includes(item))&&!studentseats.some(item=>event.target.value.includes(item))){
      setKidSeats(event.target.value);
      setPrice(adultseats.length*15+event.target.value.length*8+elderseats.length*10+studentseats.length*5);}
  };
  const handleElderChange = event => {
    if(!kidseats.some(item=>event.target.value.includes(item)) &&!adultseats.some(item=>event.target.value.includes(item))&&!studentseats.some(item=>event.target.value.includes(item))){
      setElderSeats(event.target.value);
      setPrice(adultseats.length*15+kidseats.length*8+event.target.value.length*10+studentseats.length*5);}
  };
  const handleStudentChange = event => {
    if(!kidseats.some(item=>event.target.value.includes(item)) &&!elderseats.some(item=>event.target.value.includes(item))&&!adultseats.some(item=>event.target.value.includes(item))){
      setStudentSeats(event.target.value);
      setPrice(adultseats.length*15+kidseats.length*8+elderseats.length*10+event.target.value.length*5);}
  };
  const handleRoomChange = event =>{
    setRoom(event.target.value);
  }
  const handleDateChange = event =>{
    setDate(event.target.value);
  }
  const handleCCard = event =>{
    setCard(event.target.value);
  }
  const handleCreate = (event)=>{
    event.preventDefault();
    const aseats = adultseats.map(s =>{
      return {
        room:room,
        date:date,
        seat:s,
        discount:'none'
      }
    });
    const kseats = kidseats.map(s =>{
      return {
        room:room,
        date:date,
        seat:s,
        discount:'kid'
      }
    });
    const eseats = elderseats.map(s =>{
      return {
        room:room,
        date:date,
        seat:s,
        discount:'elder'

      }
    });
    const sseats = studentseats.map(s =>{
      return {
        room:room,
        date:date,
        seat:s,
        discount:'student'
      }
    });
    let reservation ={tickets:[],creditCard:''};
    aseats.forEach(element => {
      reservation.tickets.push(element);
    });
    kseats.forEach(element => {
      reservation.tickets.push(element);
    });
    eseats.forEach(element => {
      reservation.tickets.push(element);
    });
    sseats.forEach(element => {
      reservation.tickets.push(element);
    });
    reservation.creditCard = creditCard;
    setOpen(false);
    // window.location = ('/confirm_reservation');
  }

  const handleClose = () => {
    setOpen(false );
  };
    
 
    return (
      <div>
        <Dialog
        maxWidth='md'
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{props.id}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
          <form className={classes.container}>
            <FormControl>
            <InputLabel id="demo-simple-select-room-label">Room</InputLabel>
            <Select className={classes.textField}
          labelId="room-chip-label"
          id="room-chip"
          value={room}
          onChange={handleRoomChange}
          input={<OutlinedInput id="select-single-room-chip" label="Chip" />}
          MenuProps={MenuProps}
        >
          {rooms.map((name) => (
            <MenuItem
              key={name}
              value={name}
              //style={getStyles(name, seat, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl>
            <InputLabel id="date-simple-select-date-label">Date</InputLabel>
        <Select className={classes.textField}
          labelId="date-chip-label"
          id="date-chip"
          value={date}
          onChange={handleDateChange}
          input={<OutlinedInput id="select-date-chip" label="Chip" />}
          
          MenuProps={MenuProps}
        >
          {dates.map((name) => (
            <MenuItem
              key={name}
              value={name}
              //style={getStyles(name, seat, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl>
            <InputLabel id="adult-simple-select-date-label">Adult Seats</InputLabel>
            <Select className={classes.textField}
          labelId="adult-multiple-chip-label"
          id="adult-multiple-chip"
          multiple
          value={adultseats}
          onChange={handleAdultChange}
          input={<OutlinedInput id="select-adult-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ m: '2px' }} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {seats.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, adultseats, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl>
            <InputLabel id="kid-simple-select-date-label">Kid Seats</InputLabel>
        <Select className={classes.textField}
          labelId="kid-multiple-chip-label"
          id="kid-multiple-chip"
          multiple
          value={kidseats}
          onChange={handleKidChange}
          input={<OutlinedInput id="select-kid-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ m: '2px' }} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {seats.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, kidseats, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl>
            <InputLabel id="elder-simple-select-date-label">Elder Seats</InputLabel>
        <Select className={classes.textField}
          labelId="elder-multiple-chip-label"
          id="elder-multiple-chip"
          multiple
          value={elderseats}
          onChange={handleElderChange}
          input={<OutlinedInput id="select-elder-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ m: '2px' }} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {seats.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, elderseats, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl>
            <InputLabel id="student-simple-select-date-label">Student Seats</InputLabel>
        <Select className={classes.textField}
          labelId="student-multiple-chip-label"
          id="student-multiple-chip"
          multiple
          value={studentseats}
          onChange={handleStudentChange}
          input={<OutlinedInput id="select-student-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ m: '2px' }} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {seats.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, studentseats, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <TextField
        className={classes.textField}
            autoFocus
            margin="dense"
            id="name"
            label="Credit Card"
            required
            variant="outlined"
            value={creditCard}
            onChange={handleCCard}
          />
            <p style={{marginLeft:30,marginTop:20}}>Price:{price}</p>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button disabled={
              !date || !room || (adultseats.length===0&&kidseats.length===0&&elderseats.length===0&&studentseats.length===0)
            }onClick={handleCreate} color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
TicketForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TicketForm)