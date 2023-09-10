class AulaModel {
    /**
    * Construtor do objeto modelo para aulas
    * @param {number} duracao 
    * @param {number} periodicidade  
    * @param {string} fk_plano 
    * @param {string} fk_cachorro
    * @param {string} fk_adestrador
    */

    constructor(duracao, periodicidade, fk_plano, fk_cachorro, fk_adestrador) {
        this.duracao = duracao
        this.periodicidade = periodicidade
        this.fk_plano = fk_plano
        this.fk_cachorro = fk_cachorro
        this.fk_adestrador = fk_adestrador
    }
}
export default AulaModel;