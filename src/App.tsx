
import './App.css';
import { MantineProvider, Slider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <MantineProvider >
      <HomePage/>
    </MantineProvider>
  );
}

export default App;
