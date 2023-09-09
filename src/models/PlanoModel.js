class PlanoModel {
    /**
    * Construtor do objeto modelo para usuários
    * @param {string} titulo 
    * @param {string} descricao  
    * @param {number} preco 
    */

    constructor(titulo, descricao, preco) {
        this.titulo = titulo
        this.descricao = descricao
        this.preco = preco
    }
}
export default PlanoModel;