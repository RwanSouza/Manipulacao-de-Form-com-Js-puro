class NegociacaoController {

    constructor(){

      this._inputData = document.querySelector('#data');
      this._inputQuantidade = document.querySelector('#quantidade');
      this._inputValor = document.querySelector('#valor');
      this._listaNegociacoes = new ListaNegociacoes();
      this._negociacoesView= new NegociacoesView(document.querySelector('#negociacoesView'));


      this._negociacoesView.update();
    }

    adiciona(event){
      
      event.preventDefault();
      
      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._limpaFormulario();
      console.log(this._listaNegociacoes.negociacoes)
    }

    _criaNegociacao() {

      return new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
      )  
    }

    _limpaFormulario(){

      this._inputData.value="";
      this._inputQuantidade.value= 1;
      this._inputValor.value= 0.0;
      this._inputData.focus();
    }
}