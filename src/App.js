import React,{Component} from 'react';
import './App.css';

// componente de clase con herencia
export class App extends Component{

  constructor(props){//obj almacena atributos
    super(props); 

    this.state = {
      //personas: [],
      personas: [
        {
          nombre: 'Leonard',
          apellido: 'Taipe Villalba',
          edad: 29
        },
        {
          nombre: 'Maria',
          apellido: 'Guzman Mayta',
          edad: 19
        },
        {
          nombre: 'Esteban',
          apellido: 'Castro Linares',
          edad: 21
        },
        {
          nombre: 'Jose',
          apellido: 'Tito Mayta',
          edad: 25
        },
        {
          nombre: 'Miriam',
          apellido: 'Condori Sucapuca',
          edad: 17
        },
        {
          nombre: 'Roxana',
          apellido: 'Capo Choque',
          edad: 32
        }
        ]
    }
  }

  estilo = {
    width: '50%',
    fontSize: 14,
    backgroundColor:'#36b3db',
    padding: 8,
    borderRadius: 12,
    color: 'white'
  }

  render(){
    //BASIC con nombre:alias
    let persona = {nombre: 'Harold Coila',saludo:'le saluda cordialmente'};//objeto
    const {nombre:n,saludo:s} = persona;//no puede ser modificado //extraction  

    let colores = ['rojo','verde','azul'];
    const [r,...rest] = colores;
    console.log('Colores: '+r+' & '+rest);

    // ARROW FUNCTION
    let miFun = function(){ return 'Hola'; }
    let miArr = (nombre) => `como estas ${nombre}`;//usando ` envez de '
    console.log('Function: '+miFun())
    console.log('Arrow: '+miArr('Usuario'))

    return(
      <div className="container">
        <h1 style={{color:'#0094c1'}}>App ReactJS</h1>
        <h2 style={ this.estilo }>Demostraci&oacute;n: CSS como objeto, Bootstrap, ArrowFunction & Map</h2>

        <p className='text-info'>Mg. Sc. {n} {s}</p>
        <p className={this.getCS()}>En el registro se encontraron {this.state.personas.length} personas cuyos datos son:</p>

        <ul className='list-group' style={{width:'50%'}}>
          {
            this.state.personas.map((pe,index)=>{
              return(<li className='list-group-item' key={`it-${index}`}>{index+1}: {pe.apellido}, {pe.nombre} con {pe.edad} a&ntilde;os.</li>)
            })
          }
        </ul>
      </div>
      );
  }

  getCS(){//basado en condicion
    return this.state.personas.length > 0 ? 'text-success':'text-danger';
  }

}

export default App;//necesario para hacer visible
