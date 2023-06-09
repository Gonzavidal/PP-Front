

export default function Contacto() {
  return (
    <div className="text-center mb-4 text-black">
      <h1 className="display-3">Contacto</h1>
      <br></br>
      <hr className="hr" />
      <span>Seleccione tipo de servicio</span>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" for="flexRadioDefault1">
          Noticia
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
        <label className="form-check-label" for="flexRadioDefault2">
          Evento
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" for="flexRadioDefault1">
          Mensaje
        </label>
      </div>
      <div>
        <span className="input-group-text" id="inputGroup">Titulo Evento/Noticia/Mensaje</span>
        <input type="text" className="form-control" aria-label="searchInput" aria-describedby="inputGroup" />
        <span className="input-group-text" id="inputGroup">Email Redactor</span>
        <input type="text" className="form-control" aria-label="searchInput" aria-describedby="inputGroup" />
      </div>
      <div className="input-group">
        <span className="input-group-text">Descripción</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
      <span>Destinatario Evento</span>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" for="flexRadioDefault1">
          Ciclista
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
        <label className="form-check-label" for="flexRadioDefault2">
          Mecánico
        </label>
      </div>
      <span>Adjuntar archivo</span>
      <div className="input-group">
        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
      </div>
      <button
        type="submit"
        className="btn btn-danger btn-send  pt-2 btn-block"
      >
        Enviar
      </button>

    </div>

  );
}
