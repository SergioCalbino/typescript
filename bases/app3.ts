
(() => {


// Objetos

type Car = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void
}

const batimovil : Car = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: Car = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados

type Villan = {
  nombre: string,
  edad?: number,
  mutante: boolean
 
}

let villanos: Villan[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Hero = {
  poder?: string,
  estatura?: number,
 
}

type Enemy = {
  lider?: boolean,
  miembros?: string[],
}
 console.log('por aqui')
const charles: Hero = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: Enemy = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

console.log(apocalipsis)

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)

let mystique: Hero | Enemy


mystique = charles;
mystique = apocalipsis;

})()