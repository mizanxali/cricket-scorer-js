import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'
import Alert from '@material-ui/lab/Alert'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: '#424242',
    color: '#808080'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#424242',
    color: '#fff'
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: '#424242'
  },
}))(MuiDialogActions)

export default function HowToUse() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button startIcon={<HelpRoundedIcon />} variant='contained' color="primary" onClick={handleClickOpen}>
        HOW TO USE
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          HOW TO USE THIS APP
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Enter the starting info on this page and click on START MATCH to start a new match with the entered details. You will be redirect to the match page.
          </Typography>
          <Typography gutterBottom>
            Enter outcome of each ball of the match by clicking on the appropriate buttons.
          </Typography>
          <Typography gutterBottom>
            Click on SCORECARD to view the detailed batting and bowling scorecards, updated in real time after every ball.
          </Typography>
          <br />
          <Alert severity='warning'>
            Do not refresh the website during the match! Doing so will lead to loss of your data.
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            GOT IT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
