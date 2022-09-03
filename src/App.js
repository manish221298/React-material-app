import React from "react"
import Container from '@material-ui/core/Container';
import { Box, ButtonGroup, Button, Typography, Table, TableBody,
  TableCell, TableHead, TableRow
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "./style.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(14),
      width: theme.spacing(33),
      height: theme.spacing(42),
    },
  },
  bullet: {
    display: 'inline-block',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
    marginLeft: 23,
    marginTop: 15
  },
  paperbg: {
    backgroundColor: "#e3faea",
    '&:hover': {
      background: "#1c803a",
      height: theme.spacing(43),
      opacity: 0.8,
      boxShadow:" 10px 5px 5px 5px #c8dbcd"
   },
  },
  table: {
    minWidth: 1050,
  },
  textCenter: {
    textAlign: "center",
    // marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5
  }
}));

const paper1 = [
  "content-1",
  "content-1",
  "content-1",
  "content-1"
]

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein};
}

const rows = [
  createData('Content-1', "yes", "yes", "yes", ""),
  createData('Content-2', "", "yes", "yes", ""),
  createData('Content-3', "yes", "", "yes", "yes"),
  createData('Content-4', "yes", "yes", "", "yes"),
];

function App() {
  const classes = useStyles();

  return (
    <div className="App">
        {/* <h1>Material UI</h1> */}
        <div   maxWidth="xl">
            <Container maxWidth="xl" style={{ backgroundColor: "#72b383"}}>
            <Box  display="flex" width={1450} height={150} >
              <Box m="auto">
              <h2 className={classes.textCenter} >  Simple, Transparent pricing</h2>
              <p className={classes.textCenter} >  Choose the plan that right for you</p>
              <div className={classes.textCenter}>
              <ButtonGroup  disableElevation variant="contained" color="primary">
                <Button>One</Button>
                <Button>Two</Button>
              </ButtonGroup>
              </div>
              </Box><br />
            </Box>
            </Container>

            <Container maxWidth="xl" style={{ backgroundColor: "#ffffff"}} className={classes.root}>
              <Paper className={classes.paperbg}  elevation={3} >
                    <Typography variant="h5" className={classes.pos}  >
                       <b>$56/mo</b>
                    </Typography>
                    <Typography className={classes.pos} >
                        belent
                    </Typography>
                    <Typography variant="h5" className={classes.pos}  >
                        <b>adjective</b>
                    </Typography>
                    <Button variant="contained" className={classes.pos} color="primary">
                      Secondary
                    </Button>
                    <Typography variant="body2" className={classes.title} component="p">
                      <ul>
                      {
                        paper1.map(ele => {
                          return (
                            <li>{ele}</li>
                          )
                        })
                      }
                      </ul>
                    </Typography>
              </Paper>

              <Paper className={classes.paperbg} elevation={3} >
              <Typography variant="h5" className={classes.pos}  >
                       <b>$56/mo  </b>
                    </Typography>
                    <Typography className={classes.pos} >
                        belent
                    </Typography>
                    <Typography variant="h5" className={classes.pos}  >
                        <b>adjective</b>
                    </Typography>
                    <Button variant="contained" className={classes.pos} color="primary">
                      Secondary
                    </Button>
                    <Typography variant="body2" className={classes.title} component="p">
                      <ul>
                      {
                        paper1.map(ele => {
                          return (
                            <li>{ele}</li>
                          )
                        })
                      }
                      </ul>
                    </Typography>
              </Paper>

              <Paper className={classes.paperbg} elevation={3} >
              <Typography variant="h5" className={classes.pos}  >
                       <b>+91 9128400410</b>
                    </Typography>
                    <Typography className={classes.pos} >
                        belent
                    </Typography>
                    <Typography variant="h5" className={classes.pos}  >
                        <b>adjective</b>
                    </Typography>
                    <Button variant="contained" className={classes.pos} color="primary">
                      Secondary
                    </Button>
                    <Typography variant="body2" className={classes.title} component="p">
                      <ul>
                      {
                        paper1.map(ele => {
                          return (
                            <li>{ele}</li>
                          )
                        })
                      }
                      </ul>
                    </Typography>
              </Paper>
            </Container>

            <Container style={{ backgroundColor: "#ffffff"}} >
              {/* <h1 className={classes.textCenter}>All</h1> */}
            <Typography className={classes.textCenter} variant="h5" >All the features you need</Typography>
            <Table className={classes.table} size="lg" >
        <TableHead>
          <TableRow>
            <TableCell>Features</TableCell>
            <TableCell align="right">Basic</TableCell>
            <TableCell align="right">Mean</TableCell>
            <TableCell align="right">Medium</TableCell>
            <TableCell align="right">Advance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
            </Container>
        </div>
       
    </div>
  );
}

export default App;
