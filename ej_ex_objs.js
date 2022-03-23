//Patrón factoria para crear los diferentes objetos

function createEmpleado (nombre = '', departamento = 'General') {
    const objReg = new Object();
      objReg.nombre = nombre;
      objReg.depart = departamento;
      return objReg;
  }
  
  function createDirector (nombre, departamento, informes = []) {
    const objReg = createEmpleado(nombre, departamento);
    objReg.informe =  informes;
    return objReg;
  }
  
  function createTecnico (nombre, departamento, proyectos = []) {
    const objReg = createEmpleado(nombre, departamento);
    objReg.proyecto =  proyectos;
    return objReg;
  }
  
  function createIngeniero (nombre, proyectos, maquina = '') {
    const objReg = createTecnico(nombre, undefined, proyectos);
    objReg.departamento = 'Ingeniería';
    objReg.maquina = maquina; 
    return objReg;
  }
  
  const empleado1 = createEmpleado('Federico')
  const empleado2 = createEmpleado('Pepe', 'Contabilidad')
  console.log(empleado1, empleado2)
  
  const director1 = createDirector('Javier', undefined, ['informe prueba1', 'informe prueba2'])
  const director2 = createDirector('Manuel', 'Almacén')
  console.log(director1, director2)
  
  const tecnico1 = createTecnico('Jesús')
  const tecnico2 = createTecnico('Pedro', 'Almacén', ['proyecto prueba1', 'proyecto prueba2'])
  console.log(tecnico1, tecnico2)
  
  const ingeniero1 = createIngeniero('Rocío')
  const ingeniero2 = createIngeniero('Lucía', ['proyecto prueba1', 'proyecto prueba2'], 'calibrador')
  console.log(ingeniero1, ingeniero2)
  