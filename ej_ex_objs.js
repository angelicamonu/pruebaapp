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
  console.log(empleado1)
  const empleado2 = createEmpleado('Pepe', 'Contabilidad')
  console.log(empleado2)
  
  const director1 = createDirector('Javier', undefined, ['informe prueb1', 'informe prueb2'])
  console.log(director1)
  const director2 = createDirector('Manuel', 'Almacén')
  console.log(director2)
  
  const tecnico1 = createTecnico('Jesús')
  console.log(tecnico1)
  const tecnico2 = createTecnico('Pedro', 'Almacén', ['proyecto prueba1', 'proyecto prueba2'])
  console.log(tecnico2)
  
  const ingeniero1 = createIngeniero('Rocío')
  console.log(ingeniero1)
  const ingeniero2 = createIngeniero('Lucía', ['proyecto prueba1', 'proyecto prueba2'], 'calibrador')
  console.log(ingeniero2)
  