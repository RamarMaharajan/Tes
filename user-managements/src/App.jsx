import {TeamProvider, creatThem} from '@mui/'
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <div className="App">

    </div>
  )
}

export default App
