import React from 'react';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/core/Rating';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);
  const [rating, setRating] = React.useState(2);  
  const handleClose = () => {
    window.location=('/')
  };
  const handleRate=()=>{      
      setOpen(false)
      window.location=('/')
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.id} Rating</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please give us feedback to improve the quality of the movies we display on the site
          </DialogContentText>
        </DialogContent>
        <DialogActions>
             <Box textAlign= 'left'> 
             <Rating
        name="simple-controlled"
        value={rating}
        precision={0.5}
        onChange={(event, newValue) => {
          setRating(newValue);
          
        }}
      />
             </Box> 
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRate} color="primary">
            Rate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
