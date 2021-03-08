//Las colecciones tienen una relación 1:1, un alumno solo puede tener una matrícula asociada y una matrícula solo puede estar asociada a un alumno

db.alumnos.drop()
db.alumnos.insertMany([{
        id: 01,
        Nombre: "Aurelio ",
        Apellido: "Guerrero",
        Edad: 16,
        Telefono: 139083901,
        Num_matricula: 1,
        Curso: 3,
        Horas_cursadas: 98
    },
    {
        id: 02,
        Nombre: "Noe",
        Apellido: "Felipe",
        Edad: 17,
        Telefono: 13904543501,
        Num_matricula: 2,
        Curso: 4,
        Horas_cursadas: 500
    },
    {
        id: 03,
        Nombre: "Blas",
        Apellido: "Chavez",
        Edad: 16,
        Telefono: 23424234252,
        Num_matricula: 3,
        Curso: 3
    },
    {
        id: 04,
        Nombre: "Paulino",
        Apellido: "Coca",
        Edad: 17,
        Telefono: 23525235329,
        Num_matricula: 4,
        Curso: 4,
        Horas_cursadas: 458
    },
    {
        id: 05,
        Nombre: "Alberto",
        Apellido: "Seoane",
        Edad: 16,
        Telefono: 4535353453,
        Num_matricula: 5,
        Curso: 3,
        Horas_cursadas: 978
    },
    {
        id: 06,
        Nombre: "David",
        Apellido: "Sarmiento",
        Edad: 17,
        Telefono: 7745745746,
        Num_matricula: 6,
        Curso: 4,
        Horas_cursadas: 983
    },
    {
        id: 07,
        Nombre: "Julio",
        Apellido: "Espino",
        Edad: 18,
        Telefono: 456565464,
        Num_matricula: 7,
        Curso: 4,
        Horas_cursadas: 194
    },
    {
        id: 08,
        Nombre: "German",
        Apellido: "Baez",
        Edad: 18,
        Telefono: 76445664564,
        Num_matricula: 8,
        Curso: 3,
        Horas_cursadas: 634
    },
    {
        id: 09,
        Nombre: "Sebastiana",
        Apellido: "Barbero",
        Edad: 17,
        Telefono: 23423423423423,
        Num_matricula: 9,
        Curso: 4,
        Horas_cursadas: 572
    },
    {
        id: 10,
        Nombre: "Nahia",
        Apellido: "Navas",
        Edad: 18,
        Telefono: 34535345345,
        Num_matricula: 10,
        Curso: 4,
        Horas_cursadas: 974
    },
    {
        id: 11,
        Nombre: "Emilia",
        Apellido: "Tovar",
        Edad: 19,
        Telefono: 3456226634,
        Num_matricula: 11,
        Curso: 4,
        Horas_cursadas: 130
    },
    {
        id: 12,
        Nombre: "Eusebio",
        Apellido: "Acosta",
        Edad: 17,
        Telefono: 23432423423,
        Num_matricula: 12,
        Curso: 3,
        Horas_cursadas: 232
    },
    {
        id: 13,
        Nombre: "Maria Soledad",
        Apellido: "Rodrigues",
        Edad: 16,
        Telefono: 2235325325,
        Num_matricula: 13,
        Curso: 3,
        Horas_cursadas: 424
    },
    {
        id: 14,
        Nombre: "Aroa",
        Apellido: "Barreiro",
        Edad: 18,
        Telefono: 34534543534,
        Num_matricula: 14,
        Curso: 4,
        Horas_cursadas: 934
    },
    {
        id: 15,
        Nombre: "Gonzalo",
        Apellido: "Nuñez",
        Edad: 17,
        Telefono: 34535345345,
        Num_matricula: 15,
        Curso: 3,
        Horas_cursadas: 14
    },
])

db.matriculas.drop()
db.matriculas.insertMany([{
        id: 1,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 6
            },
            {
                Asignatura: "Matematicas",
                Nota: 3
            },
            {
                Asignatura: "Historia",
                Nota: 8
            },
            {
                Asignatura: "TIC",
                Nota: 5
            },
            {
                Asignatura: "Dibujo",
                Nota: 2
            }
        ],
        Fecha_matriculacion: ISODate("2019-06-15"),
        Horas_curso: 1000
    }, {
        id: 2,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 5
            },
            {
                Asignatura: "Matematicas",
                Nota: 2
            },
            {
                Asignatura: "Historia",
                Nota: 4
            },
            {
                Asignatura: "TIC",
                Nota: 1
            },
            {
                Asignatura: "Dibujo",
                Nota: 5
            }
        ],
        Fecha_matriculacion: ISODate("2019-05-14"),
        Horas_curso: 1000
    },
    {
        id: 3,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 9
            },
            {
                Asignatura: "Matematicas",
                Nota: 8
            },
            {
                Asignatura: "Historia",
                Nota: 9
            },
            {
                Asignatura: "TIC",
                Nota: 8
            },
            {
                Asignatura: "Dibujo",
                Nota: 9
            }
        ],
        Fecha_matriculacion: ISODate("2019-05-28"),
        Horas_curso: 1000
    },
    {
        id: 4,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 6
            },
            {
                Asignatura: "Matematicas",
                Nota: 5
            },
            {
                Asignatura: "Historia",
                Nota: 5
            }
        ],
        Fecha_matriculacion: ISODate("2019-06-29"),
        Horas_curso: 1000
    },
    {
        id: 5,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 8
            },
            {
                Asignatura: "Matematicas",
                Nota: 2
            },
            {
                Asignatura: "Historia",
                Nota: 7
            },
            {
                Asignatura: "TIC",
                Nota: 4
            },
            {
                Asignatura: "Dibujo",
                Nota: 5
            }
        ],
        Fecha_matriculacion: ISODate("2019-07-23"),
        Horas_curso: 1000
    },
    {
        id: 6,
        Detalles: [{
                Asignatura: "Matematicas",
                Nota: 8
            },
            {
                Asignatura: "TIC",
                Nota: 8
            }
        ],
        Fecha_matriculacion: ISODate("2019-06-14"),
        Horas_curso: 1000
    },
    {
        id: 7,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 3
            },
            {
                Asignatura: "Matematicas",
                Nota: 8
            },
            {
                Asignatura: "Historia",
                Nota: 5
            },
            {
                Asignatura: "TIC",
                Nota: 1
            },
            {
                Asignatura: "Dibujo",
                Nota: 8
            }
        ],
        Fecha_matriculacion: ISODate("2019-05-10"),
        Horas_curso: 1000
    },
    {
        id: 8,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 4
            },
            {
                Asignatura: "Matematicas",
                Nota: 6
            },
            {
                Asignatura: "Historia",
                Nota: 5
            },
            {
                Asignatura: "TIC",
                Nota: 9
            },
            {
                Asignatura: "Dibujo",
                Nota: 1
            }
        ],
        Fecha_matriculacion: ISODate("2019-05-28"),
        Horas_curso: 1000
    },
    {
        id: 9,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 5
            },
            {
                Asignatura: "Matematicas",
                Nota: 4
            },
            {
                Asignatura: "Historia",
                Nota: 8
            },
            {
                Asignatura: "TIC",
                Nota: 1
            },
            {
                Asignatura: "Dibujo",
                Nota: 7
            }
        ],
        Fecha_matriculacion: ISODate("2019-06-19"),
        Horas_curso: 1000
    },
    {
        id: 10,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 7
            },
            {
                Asignatura: "Matematicas",
                Nota: 8
            },
            {
                Asignatura: "Historia",
                Nota: 6
            },
            {
                Asignatura: "TIC",
                Nota: 9
            },
            {
                Asignatura: "Dibujo",
                Nota: 5
            }
        ],
        Fecha_matriculacion: ISODate("2019-07-18"),
        Horas_curso: 1000
    },
    {
        id: 11,
        Detalles: [{
                Asignatura: "TIC",
                Nota: 3
            },
            {
                Asignatura: "Dibujo",
                Nota: 2
            }
        ],
        Fecha_matriculacion: ISODate("2019-05-23"),
        Horas_curso: 1000
    },
    {
        id: 12,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 7
            },
            {
                Asignatura: "Matematicas",
                Nota: 5
            }
        ],
        Fecha_matriculacion: ISODate("2019-06-22"),
        Horas_curso: 1000
    },
    {
        id: 13,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 3
            },
            {
                Asignatura: "Matematicas",
                Nota: 3
            },
            {
                Asignatura: "Historia",
                Nota: 5
            },
            {
                Asignatura: "TIC",
                Nota: 5
            },
            {
                Asignatura: "Dibujo",
                Nota: 7
            }
        ],
        Fecha_matriculacion: ISODate("2019-07-12"),
        Horas_curso: 1000
    },
    {
        id: 14,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 6
            },
            {
                Asignatura: "Matematicas",
                Nota: 3
            },
            {
                Asignatura: "Historia",
                Nota: 8
            },
            {
                Asignatura: "TIC",
                Nota: 5
            }
        ],
        Fecha_matriculacion: ISODate("2019-05-10"),
        Horas_curso: 1000
    },
    {
        id: 15,
        Detalles: [{
                Asignatura: "Lengua",
                Nota: 9
            },
            {
                Asignatura: "Matematicas",
                Nota: 2
            },
            {
                Asignatura: "Historia",
                Nota: 6
            },
            {
                Asignatura: "TIC",
                Nota: 3
            },
            {
                Asignatura: "Dibujo",
                Nota: 5
            }
        ],
        Fecha_matriculacion: ISODate("2019-06-09"),
        Horas_curso: 1000
    },
])