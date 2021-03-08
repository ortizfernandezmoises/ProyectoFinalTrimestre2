//Mostrar el nombre y apellido concatenado del alumno, la fecha de matriculación si se han matriculado en Mayo y las asignaturas a las que está apuntado ordenados alfabéticamente por el nombre
db.alumnos.aggregate([
    {
        $lookup: {
            from: "matriculas",
            localField:"Num_matricula",
            foreignField: "id",
            as: "matrics"
        }
    },
    {
        $project:{
            _id: 0,
            Nombre: {$concat: ["$Nombre"," ","$Apellido"]},
            "matrics.Detalles.Asignatura": 1,
            "matrics.Fecha_matriculacion": 1
        }
    },
    {
        $match:{$expr: {$eq: [{$month: {$arrayElemAt: ["$matrics.Fecha_matriculacion",0]}},5]}}
    },
    {
        $sort: {"Nombre":1}
    }  
]).pretty()
/*Mostrar el nombre y apellido concatenado del alumno y la nota media de las asignaturas, también se indicará si está aprobado o suspenso a partir de la nota media 
*junto a las asignaturas que le correspondan
*/
db.alumnos.aggregate([
    {
        $lookup: {
            from: "matriculas",
            localField:"Num_matricula",
            foreignField: "id",
            as: "matrics"
        }
    },
    {
        $set: {
            Notamedia: {
                $avg: {$arrayElemAt: ["$matrics.Detalles.Nota",0]}
            }
        }
    },
    {
        $project:{
            Nombre: {$concat: ["$Nombre"," ","$Apellido"]},
            "Notamedia": 1,
            Estado: {$cond: [{$gte: ['$Notamedia',5]},'Aprobado', 'Suspenso']},
            "matrics.Detalles.Asignatura": 1
        }
    }
   
]).pretty()

//Mostrar el nombre, apellido y número de telefono agrupados del alumno y sus notas medias
db.alumnos.aggregate([
    {
        $lookup: {
            from: "matriculas",
            localField:"Num_matricula",
            foreignField: "id",
            as: "matrics"
        }
    },
    {
        $set: {
            Notamedia: {
                $avg: {$arrayElemAt: ["$matrics.Detalles.Nota",0]}
            }
        }
    },
    {
        $match: {$expr:{$gte: ["$Notamedia",5]}}
    },
    {
        $group: {
            _id: {
                _id: "$_id",
                Nombre: "$Nombre",
                Apellido: "$Apellido",
                Num_telefono: "$Telefono",
                Nota_media: "$Notamedia"
            }, 
        }
    },
    {
        $project:{
            _id: 0,
            Nombre: {$concat: ["$_id.Nombre"," ","$_id.Apellido"]},
            Num_Telefono: "$_id.Num_telefono",
            Nota_media:  "$_id.Nota_media"
        }
    }
]).pretty()
//Mostrar el nombre y apellido concatenado del alumno, su nota media y las horas restantes de curso que le quedan si le quedan más de 100, en el caso que le queden menos se mostarará Null
db.alumnos.aggregate([
    {
        $lookup: {
            from: "matriculas",
            localField:"Num_matricula",
            foreignField: "id",
            as: "matrics"
        }
    },
    {
        $set: {
            Notamedia: {
                $avg: {$arrayElemAt: ["$matrics.Detalles.Nota",0]}
            },
            Horasrestantes: {
                $subtract: [
                    {$arrayElemAt: ["$matrics.Horas_curso",0]},"$Horas_cursadas"
                ]  
            }
        }
    },
    {
        $project:{
            Nombre: {$concat: ["$Nombre"," ","$Apellido"]},
            "Notamedia": 1,
            Horas: {$cond: [{$gte: ['$Horasrestantes',100]},'$Horasrestantes', null]},
            "matrics.Detalles.Asignatura": 1
        },
        
    }
]).pretty()
/*Mostrar el nombre y apellido concatenado del alumno, la fecha de matriculación, la nota media junto a una valoración y las horas restantes, también se mostrará su curso en forma de string
*Esta consulta se mostrará en un fichero de hoja de cálculo, indicando en un gráfico las notas.
*/
db.alumnos.aggregate([
    {
        $lookup: {
            from: "matriculas",
            localField:"Num_matricula",
            foreignField: "id",
            as: "matrics"
        }
    },
    {
        $set: {
            Notamedia: {
                $avg: {$arrayElemAt: ["$matrics.Detalles.Nota",0]}
            },
            Horasrestantes: {
                $subtract: [
                    {$arrayElemAt: ["$matrics.Horas_curso",0]},"$Horas_cursadas"
                ]  
            }
        }
    },
    {
        $project:{
            Nombre: {$concat: ["$Nombre"," ","$Apellido"]},
            "Horasrestantes": 1,
            "matrics.Fecha_matriculacion": 1,
            "Notamedia": 1,
            Valoracion: {
                $switch:{
                branches: [
                    {
                        case: {$lte: ["$Notamedia",4]},
                        then: "Insuficiente"
                    },
                    {
                        case: {$and: [{$gte: ["$Notamedia",5]},{$lte:["$Notamedia",6]}]},
                        then: "Suficiente"
                    },
                    {
                        case: {$and: [{$gte: ["$Notamedia",7]},{$lte:["$Notamedia",8]}]},
                        then: "Notable"  
                    },
                    {
                        case: {$and: [{$gte: ["$Notamedia",9]},{$lte:["$Notamedia",10]}]},
                        then: "Sobresaliente" 
                    }
                ],
                default: "Sin calificar"
            }
        },
            Curso: {$switch:{
                branches: [
                    {
                        case: {$eq: ["$Curso",3]},
                        then: "3º ESO"
                    },
                    {
                        case: {$eq: ["$Curso",4]},
                        then: "4º ESO"
                    }
                ],
                default: "Sin especificar"
            }
        }  
        }
    },
    {
        $merge: "Informacion"
    }
   
]).pretty()
