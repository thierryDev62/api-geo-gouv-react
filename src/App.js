import Form from './components/Form';

function App() {

  return (
    <div className="container bg-light border-dark shadow-lg min-vh-100">
      <div className="row">
        <div className="col text-center">
          <h1>Get cities with zipcode from geo.api.gouv.fr (France)</h1>
          <h2>Made with React ❤️</h2>
        </div>
      </div>
      <div className="row p-5 mt-5 justify-content-center px-0">
        <div className="col-md-6 bg-warning border border-dark shadow-lg px-0 px-md-5 py-5">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
