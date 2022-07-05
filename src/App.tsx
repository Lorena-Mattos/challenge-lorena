import './styles/global.css';

import './styles/app.css';

function App() {
  return (
    <div className="container-fluid p-0 container-sm d-flex justify-content-center">

      <div className="card text-center shadow-lg" style={{ width: "26rem;" }}>
  
        <div className="card-header bg-white text-dark font-weight-bold">
          TEMPO E TEMPERATURA
        </div>
  
        <div className="card-body">
          <div className="city">Cidade Exemplo, BR</div>
          <div className="date">Terça, 1 Dezembro 2020</div>
          <div className="container-img">
            <img src="./icons/unknown.png" />
          </div>
          <div className="container-temp mx-4 my-3">
            <div>22</div>
            <span>°c</span>
          </div>
          <div className="weather py-2">Nublado</div>
          <div className="low-high">22°c / 23°c</div>
        </div>
  
        <div className="card-footer bg-white">
          <div className="input-group ">
            <input type="text" className="form-control bg-light" placeholder="digite o nome da cidade" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-warning text-dark" type="button" id="button-addon2">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default App
