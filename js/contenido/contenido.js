let contenido_DOM = document.querySelector(".contenido");

let contenido = `
    <div class="caja-img">
        <h3>Bus y transporte pesado<h3>
        <span>🚌</span>
    </div>
    <form class="form-entrada">
        <span>Información del veículo</span>
        <input type="num" class="placa" value="C- ">
        <input type="time" class="tiempo-entrada">
        <textarea class="comentario-entrada" placeholder="Iregualariadad en el carro"></textarea>
        <button>Ingresar</button>
    </form>
`;

contenido_DOM.innerHTML = contenido;