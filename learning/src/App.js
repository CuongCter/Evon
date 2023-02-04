
import './App.css';
import Button from './components/button/Button';
import Card from './components/card/Card';
import CardList from './components/card/CardList';
import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors:{
    blue: "#ff6bcb"
  },
  orange: "#ffa408"
}

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      {/* <Button>Primary</Button> */}
      {/* <Button className='button--secondary'>Secondary</Button> */}
      {/* <Button secondary>Secondary</Button> */}
      {/* <Card></Card> */}
      <GlobalStyles></GlobalStyles>
      <CardList>
        
      </CardList>
    </ThemeProvider>
  );
}

export default App;
