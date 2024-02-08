import Jugador from './Jugador.js';
//ARREGLO DE JUGADORES
/*let JugadoresArray=['Andrea Pirlo','Andres Iniesta','Bastian Schweinsteiger','Carles Puyol','Carlos Tevez',
                    'Cesc Fabregas','Cristiano Ronaldo','Dani Alves','Daniele DeRossi','David Beckham','David Villa','Deco',
                    'DiMaria','Edison Cavani','Fabio Cannavaro','Fernando Torres','Frank Lampard','Gerad Pique',
                    'GRossi','Harry Kane','Higuain','Javier Pastore','Kaka','Kun Agüero','Lavezzi','Luis Figo',
                    'Luis Suarez','Marcos Reus','Marcos Rojo','Mario Gotze','Mascherano','Messi','Mesut Özil',
                    'Neymar','Otamendi','Paolo Maldini','Pele','Ricardo Carvalho','Ronaldinho','Ronaldo Nazario',
                    'Sergio Ramos','Steven Gerrard','Thierry Henry','Tomas Muller','Toni Kroos','Xavi Alonso',
                    'Xavi Hernandez','Zabaleta','Zidane','Zlatan Ibrahimovic'];*/

//REFERENCIAS DEL HTML
let btnJugar=document.querySelector('.btnJugar');
let nombreJugador=document.querySelector('.nombreJugador');
let golesLiga=document.querySelector('.golesLiga'); 
let golesPremier=document.querySelector('.golesPremier');
let golesBundesLiga=document.querySelector('.golesBundesLiga');                 
let golesLegue1=document.querySelector('.golesLegue1');
let golesSerieA=document.querySelector('.golesSerieA');
let golesChampions=document.querySelector('.golesChampions');
let golesSeleccion=document.querySelector('.golesSeleccion');    

 let j1=new Jugador('Messi',474,129,22,0,0,0,106),
     j2=new Jugador('CristianoRonaldo',311,140,0,81,0,103,129),
     j3=new Jugador('Ricardo Carvalho',3,3,2,0,0,7,6),
     j4=new Jugador('Deco',11,13,0,0,0,5,5),
     j5=new Jugador('Luis Figo',68,24,0,9,0,0,32),
     j6=new Jugador('Neymar',68,43,82,0,0,0,79),
     j7=new Jugador('Dani Alves',26,12,2,0,0,0,8),
     j8=new Jugador('Kaka',23,30,0,77,0,0,29),
     j9=new Jugador('Ronaldinho',70,18,17,79,0,0,33),
     j10=new Jugador('Ronaldo Nazario',153,36,0,79,0,0,62),
     j11=new Jugador('Kun Agüero',75,41,0,0,0,184,41),
     j12=new Jugador('Higuain',107,24,0,125,0,0,31),
     j13=new Jugador('DiMaria',21,23,57,0,0,0,29),
     j14=new Jugador('Tomas Muller',0,53,0,0,145,0,45),
     j15=new Jugador('Marcos Reus',0,23,0,0,153,0,15),
     j16=new Jugador('Mesut Özil',19,11,0,0,13,33,23),
     j17=new Jugador('Bastian Schweinsteiger',0,12,0,0,45,0,24),
     j18=new Jugador('Toni Kroos',22,11,0,0,23,0,17),
     j19=new Jugador('Mario Gotze',0,12,0,0,60,0,17),
     j20=new Jugador('Luis Suarez',178,27,0,0,0,69,66),
     j21=new Jugador('Edison Cavani',5,35,138,112,0,12,56),
     j22=new Jugador('Sergio Ramos',75,18,4,0,0,0,0),
     j23=new Jugador('Carles Puyol',13,2,0,0,0,0,3),
     j24=new Jugador('Xavi Hernandez',58,11,0,0,0,0,12),
     j25=new Jugador('Thierry Henry',35,50,20,0,0,176,51),
     j26=new Jugador('Zidane',37,14,34,24,0,0,31),
     j27=new Jugador('Mascherano',1,0,0,0,0,1,3),
     j28=new Jugador('Otamendi',6,1,0,0,0,8,6),
     j29=new Jugador('Lavezzi',0,9,22,38,0,0,9),
     j30=new Jugador('Carlos Tevez',0,13,0,39,0,85,13),
     j31=new Jugador('Zabaleta',3,0,0,0,0,9,0),
     j32=new Jugador('Javier Pastore',0,4,29,17,0,0,2),
     j33=new Jugador('Marcos Rojo',0,0,0,0,0,1,3),
     j34=new Jugador('Gerad Pique',32,16,0,0,0,0,5),
     j35=new Jugador('Fernando Torres',103,20,0,0,0,85,38),
     j36=new Jugador('David Villa',185,14,0,0,0,0,59),
     j37=new Jugador('Cesc Fabregas',28,20,3,0,0,50,15),
     j38=new Jugador('Andres Iniesta',35,11,0,0,0,0,14),
     j39=new Jugador('Andrea Pirlo',0,8,0,58,0,0,13),
     j40=new Jugador('GRossi',64,0,0,26,0,0,7),
     j41=new Jugador('Daniele DeRossi',0,12,0,0,45,0,24),
     j42=new Jugador('Fabio Cannavaro',0,2,0,14,0,0,2),
     j43=new Jugador('Paolo Maldini',0,2,0,29,0,0,7),
     j44=new Jugador('Pele',0,0,0,0,0,0,77),
     j45=new Jugador('Zlatan Ibrahimovic',0,48,113,156,0,0,62),
     j46=new Jugador('Harry Kane',0,25,0,0,30,213,62),
     j47=new Jugador('Daavid Beckham',13,16,0,2,0,62,17),
     j48=new Jugador('Steven Gerrard',0,21,0,0,0,120,21),
     j49=new Jugador('Frank Lampard',0,23,0,0,0,176,29),
     j50=new Jugador('Xavi Alonso',13,8,0,0,5,14,16);

     let jugadores=[j1,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11,j12,j13,j14,j15,j16,j17,j18,j19,j20,
        j21,j22,j23,j24,j25,j26,j27,j28,j29,j30,j31,j32,j33,j34,j35,j36,j37,j38,j39,j40,
        j41,j42,j43,j44,j45,j46,j47,j48,j49,j50] 

const barajar=(Jugadores)=>{
    return _.shuffle(Jugadores);
}
const solicitarJugador=(Jugadores)=>{
    return Jugadores.pop();
}

btnJugar.addEventListener('click',()=>{
    let jugador=solicitarJugador(jugadores);
    nombreJugador.innerHTML="Nombre: "+jugador.nombre;
    golesLiga.innerHTML="La Liga: "+jugador.golesEnLiga;
    golesPremier.innerHTML="Premier League: "+jugador.golesEnPremierLeague;
});

console.log(barajar(jugadores));
console.log(solicitarJugador(jugadores));


