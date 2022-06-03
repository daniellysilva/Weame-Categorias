import './Reparo.css';

function Reparo() {
  return (
    <><div className="titulo">
          <h2> Reformas e Reparo</h2>
      </div><div className="card mb-3" style="max-width: 775px;" id="cartao">
              <div className="row g-0">
                  <div className="col-md-4">
                      <img src="img/imagemprofissional.jpg" className="img-fluid " alt="Imagem Profissional do Autônomo" title="Jorge dos Santos" id="imagem" />
                      <div id="avaliacao">
                          <ul className="nav col-12" id="estrelas">
                              <li id="nota">4.5</li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star-half-stroke"></i></li>
                          </ul>
                          <p className="card-text" id="profissao"><small class="text-muted">Avaliação Profissional </small></p>
                      </div>
                  </div>
                  <div className="col-md-8">
                      <div class="card-body" id="texto">
                          <h5 class="card-title" id="nome">Jorge dos Santos</h5>
                          <p class="card-text" id="profissao"><small class="text-muted">Especialista em Pinturas e Consertos Residenciais.</small></p>
                          <div class="icones">
                              <ul class="nav col-12" id="informacoes">
                                  <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                                  <li> <i class="fa-solid fa-hammer"></i>  17 Serviços</li>
                                  <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                              </ul>
                          </div>
                          <div id="texto">
                              <p class="card-text">Sou prestativo, educado, competente e procuro atender ao máximo as expectativas dos meus clientes e das empresas.Trocas de luminárias, armários, instalações de antenas, pinturas em domicílios e comércios.</p>
                          </div>
                      </div>
                      <button id="botao">
                          <a href="#">Visitar Perfil</a>
                      </button>
                  </div>
              </div>
          </div><div class="card mb-3" style="max-width: 775px;" id="cartao">
              <div class="row g-0">
                  <div class="col-md-4">
                      <img src="img/imagemprofissional2.jpg" class="img-fluid " alt="Imagem Profissional do Autônomo" title="Bárbara Martins" id="imagem">
                          <div id="avaliacao">
                              <ul class="nav col-12" id="estrelas">
                                  <li id="nota">4.0</li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                              </ul>
                              <p class="card-text" id="profissao"><small class="text-muted">Avaliação Profissional </small></p>
                          </div>
                      </></div>
                  <div class="col-md-8">
                      <div class="card-body" id="texto">
                          <h5 class="card-title" id="nome">Bárbara Martins</h5>
                          <p class="card-text" id="profissao"><small class="text-muted">Auxiliar de Manutenção Mecânica</small></p>
                          <div class="icones">
                              <ul class="nav col-12" id="informacoes">
                                  <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                                  <li> <i class="fa-solid fa-hammer"></i>  7 Serviços</li>
                                  <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                              </ul>
                          </div>
                          <div id="texto">
                              <p class="card-text">Olá eu sou a Bárbara, acabei de concluir o curso de Auxiliar Mecânico de Manutenção no SENAI.Eu tenho boas referências dos meu professores e muita motivação em ajudar o meu cliente.Tenho preferência em atender na cidade de Osasco.</p>
                          </div>
                      </div>
                      <button id="botao">
                          <a href="#">Visitar Perfil</a>
                      </button>
                  </div>
              </div>
          </div><div class="card mb-3" style="max-width: 775px;" id="cartao">
              <div class="row g-0">
                  <div class="col-md-4">
                      <img src="img/imagemprofissional3.jpg" class="img-fluid " alt="Imagem Profissional do Autônomo" title="Pedro Lacerda Junior" id="imagem">
                          <div id="avaliacao">
                              <ul class="nav col-12" id="estrelas">
                                  <li id="nota">5.0</li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                              </ul>
                              <p class="card-text" id="profissao"><small class="text-muted">Avaliação Profissional </small></p>
                          </div>
                      </></div>
                  <div class="col-md-8">
                      <div class="card-body" id="texto">
                          <h5 class="card-title" id="nome">Pedro Lacerda Junior</h5>
                          <p class="card-text" id="profissao"><small class="text-muted">Empreiteiro </small></p>
                          <div class="icones">
                              <ul class="nav col-12" id="informacoes">
                                  <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                                  <li> <i class="fa-solid fa-hammer"></i>  25 Serviços</li>
                                  <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                              </ul>
                          </div>
                          <div id="texto">
                              <p class="card-text">Tenho bastante disposição e habilidade.Atualmente possuo mais de 10 anos de experiência e boas referências, o que comprova a qualidade do meu trabalho.Possuo curso técnico, garantindo um serviço de qualidade por um ótimo preço!Venha fazer um orçamento! </p>
                          </div>
                      </div>
                      <button id="botao">
                          <a href="#">Visitar Perfil</a>
                      </button>
                  </div>
              </div>
          </div></>
</div>

    <><div class="card" style="width: 18rem;" id="cartao1">
        <div class="card-body">
            <h5 class="card-title" id="titulocartao">Avaliação</h5>
            <input type="range" class="form-range" id="customRange1" min="0" max="5">
                <label for="customRange1" class="form-label">012345</label>
            </></div>
    </div><div class="card" style="width: 18rem;" id="cartao1">
            <div class="card-body">
                <h5 class="card-title" id="titulocartao">Distância</h5>
                <input type="range" class="form-range" id="customRange1" min="0" max="5">
                    <label for="customRange1" class="form-label">012345</label>
                </></div>
        </div></>
  );
}

export default Reparo;
