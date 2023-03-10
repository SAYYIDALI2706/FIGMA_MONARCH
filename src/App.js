
import { Box } from '@mui/material';
import './App.css';
import Content from './Components/Content/Content';
import End from './Components/End/End';
import Font from './Components/FONt/Font';
import Info from './Components/Info/Info';
import Monarch from './Components/Monarch/Monarch';
import Nav from './Components/Nav/Nav';
import News from './Components/News/News';
import Our from './Components/Our/Our';
import Personaj from './Components/Personaj/Personaj';
import Service from './Components/Service/Service';

function App() {
  return (
    <Box>
      <Nav/>
      <Font/>
      <Our/>
      <Service/>
      <Content/>
      <Personaj/>
      <Info/>
      <News/>
      <Monarch/>
      <End/>
    </Box>
  );
}

export default App;
