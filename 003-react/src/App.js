import './App.css';
import Components from './components/001-components/Components';

const name = "Samet";
export const surName = "Polat";

function App() {
  return (
    <>
      <h1>Hello World! {`I'm ${name}`} {surName}.</h1>
      <Components/>{/* import ettiğimiz component içinde children bir öğemiz yoksa bu şekilde bırakabiliriz. */}
    </>
  )
}

export default App;