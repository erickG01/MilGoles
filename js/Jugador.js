export default class Jugador{
    nombre ='';
    golesEnSeleccion;
    golesEnLiga;
    golesEnBundesLiga;
    golesEnPremierLeague;
    golesEnSerieA;
    golesEnChampions;
    golesEnLigueOne ;

    constructor(nombre,golesEnLiga,golesEnChampions,golesEnLigueOne,golesEnSerieA,golesEnBundesLiga,golesEnPremierLeague,golesEnSeleccion ){
        this.nombre=nombre;
        this.golesEnSeleccion=golesEnSeleccion;
        this.golesEnLiga=golesEnLiga;
        this.golesEnBundesLiga=golesEnBundesLiga;
        this.golesEnPremierLeague=golesEnPremierLeague;
        this.golesEnSerieA=golesEnSerieA;
        this.golesEnChampions=golesEnChampions;
        this.golesEnLigueOne=golesEnLigueOne;
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getNombre(){
        return this.nombre;
    }

    set setgolesEnSeleccion(golesEnSeleccion){
        this.golesEnSeleccion=golesEnSeleccion;
    }
    get getgolesEnSeleccion(){
        return this.golesEnSeleccion;
    }

    set setgolesEnLiga(golesEnLiga){
        this.golesEnLiga=golesEnLiga;
    }
    get getgolesEnLiga(){
        return this.golesEnLiga;
    }

    set setgolesEnBundesiga(golesEnBundesiga){
        this.golesEnBundesiga=golesEnBundesiga;
    }
    get getgolesEnBundesiga(){
        return this.golesEnBundesiga;
    }

    set setgolesEnPremierLeague(golesEnPremierLeague){
        this.golesEnPremierLeague=golesEnPremierLeague;
    }
    get getgolesEnPremierLeague(){
        return this.golesEnPremierLeague;
    }
    
    set setgolesEnSerieA(golesEnSerieA){
        this.golesEnSerieA=golesEnSerieA;
    }
    get getgolesEnSerieA(){
        return this.golesEnSerieA;
    }
    set setgolesEnChampions(golesEnChampions){
        this.golesEnChampions=golesEnChampions;
    }
    get getgolesEnChampions(){
        return this.golesEnChampions;
    }
    set golesEnLigueOne(golesEnLigueOne){
        this.golesEnLigueOne=golesEnLigueOne;
    }
    get getgolesEnLigueOne(){
        return this.golesEnLigueOne;
    }

}
