import logo from './logo.svg';
import './App.css';
import MainAppBar from './MainAppBar';
import HomePage from './HomePage';
import Posts from './Posts';
import { GoogleOAuthProvider } from '@react-oauth/google';
const GOOGLE_ID = "1059202553892-1uqf8lddnp1jefmetq5cirq1ba934ntc.apps.googleusercontent.com";
function App() {
  return (
    <div style={{backgroundColor: 'lightgray', height: '1000px',flex: 1}}>
    <MainAppBar />
    </div>
  );
}

export default App;
