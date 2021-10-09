import './App.css';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



import RealtimeTodo from "./component/todorealtime";

function App() {
  let history = useHistory();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography onClick={() => { history.push("/") }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Firestore | Bootstrap | Formik
            </Typography>
            <Button color="inherit" variant="text" onClick={() => { history.push("/realtime") }}>Click Me Todo_App</Button>

          </Toolbar>
        </AppBar>

        <Switch>
        
          <Route path="/realtime">
            <RealtimeTodo />
          </Route>
        </Switch>
      </Box>
    </>
  )
}
export default App;