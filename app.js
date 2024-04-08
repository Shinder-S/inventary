// Objeto para simular la gestión de activos de TI
const ITAM = {
    activos: [],
    perfilesRoles: {},
    usuarios: [],

    // Método para configurar activos
    configurarActivos: function (activos) {
        this.activos = activos;
        console.log("Configuración de activos completada:", this.activos);
    },

    // Método para configurar perfiles y roles
    configurarPerfilesRoles: function (perfilesRoles) {
        this.perfilesRoles = perfilesRoles;
        console.log("Configuración de perfiles y roles completada:", this.perfilesRoles);
    },

    // Método para configurar usuarios
    configurarUsuarios: function (usuarios) {
        this.usuarios = usuarios;
        console.log("Configuración de usuarios completada:", this.usuarios);
    },

    // Método para implementar en ZTrust
    implementarEnZTrust: function () {
        console.log("Implementación en ZTrust completada");
        console.log("Activos disponibles en ZTrust:", this.activos);
        console.log("Perfiles y roles asignados:", this.perfilesRoles);
        console.log("Usuarios registrados en ZTrust:", this.usuarios);
    }
};

// Datos de ejemplo para configurar
const activos = ["Servidores", "Computadoras", "Impresoras", "Licencias de Software"];
const perfilesRoles = {
    "Administrador de TI": ["Gestión completa de activos", "Acceso total a la plataforma"],
    "Usuario Final": ["Acceso limitado a activos asignados"]
};
const usuarios = [
    { nombre: "Juan", perfil: "Administrador de TI" },
    { nombre: "María", perfil: "Usuario Final" }
];

// Configurar activos, perfiles, roles y usuarios
ITAM.configurarActivos(activos);
ITAM.configurarPerfilesRoles(perfilesRoles);
ITAM.configurarUsuarios(usuarios);

// Implementar en ZTrust
ITAM.implementarEnZTrust();
// Función para agregar un usuario a la lista
function addUser(username, email) {
    const userList = document.getElementById('userList');
    const li = document.createElement('li');
    li.textContent = `Nombre de usuario: ${username}, Correo electrónico: ${email}`;
    userList.appendChild(li);
}

// Manejador de eventos para el envío del formulario
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que se recargue la página
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    addUser(username, email);
    // Limpiar el formulario después de agregar un usuario
    document.getElementById('userForm').reset();
});  