
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Description from './Description'
import Price from './Price'
import Img from './Img';

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}> 
      <Card.Body>
        <Img/>
        <Card.Title><Name/></Card.Title>
        <Card.Text><Description/></Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
    <p>Hello,There!</p>
    </div>
  );
}

export default App;
