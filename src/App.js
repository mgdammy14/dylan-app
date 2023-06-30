import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import axios from "axios";
import dataCompleta from "./Data";
import { colors } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  table: {
    minWidth: 650,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15px",
  },
}));

function App() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [data, setData] = React.useState([
    {
      id: 1,
      nombresCompletos: "Daniel Alberto Cardenas Perez",
      rifas: 1,
      },
      {
      id: 2,
      nombresCompletos: "Candy Loriet Zegarra Castillo",
      rifas: 1,
      },
      {
      id: 3,
      nombresCompletos: "George Antony Garcia Congona",
      rifas: 1,
      },
      {
      id: 4,
      nombresCompletos: "Yovana Milagros Montesinos Ortega",
      rifas: 1,
      },
      {
      id: 5,
      nombresCompletos: "Adrian Nicolas Melendez",
      rifas: 1,
      },
      {
      id: 6,
      nombresCompletos: "Martina Chinchay Ticliahuanca",
      rifas: 1,
      },
      {
      id: 7,
      nombresCompletos: "Itamar Solano Huertas",
      rifas: 1,
      },
      {
      id: 8,
      nombresCompletos: "Naomi Vasquez Aquino",
      rifas: 1,
      },
      {
      id: 9,
      nombresCompletos: "Juan Francisco Taipe Rojas",
      rifas: 1,
      },
      {
      id: 10,
      nombresCompletos: "Ercida Rosa Roncal Segura",
      rifas: 1,
      },
      {
      id: 11,
      nombresCompletos: "Ercida Rosa Roncal Segura",
      rifas: 1,
      },
      {
        id: 12,
        nombresCompletos: "Edwin Roberto Guerrero Merino",
        rifas: 1
        },
        {
        id: 13,
        nombresCompletos: "Edwin Roberto Guerrero Merino",
        rifas: 1
        },
        {
        id: 14,
        nombresCompletos: "Edwin Roberto Guerrero Merino",
        rifas: 1
        },
        {
        id: 15,
        nombresCompletos: "Edwin Roberto Guerrero Merino",
        rifas: 1
        },
        {
        id: 16,
        nombresCompletos: "Edwin Roberto Guerrero Merino",
        rifas: 1
        },
        {
        id: 17,
        nombresCompletos: "Karla Calderon Retamozo",
        rifas: 1
        },
        {
        id: 18,
        nombresCompletos: "Jovita Ysidora Gutierrez Barreto",
        rifas: 1
        },
        {
        id: 19,
        nombresCompletos: "Bertha Maritza Rojas Mostacero",
        rifas: 1
        },
        {
        id: 20,
        nombresCompletos: "(Cesar) Edmundo Calderon Perez",
        rifas: 1
        },
        {
        id: 21,
        nombresCompletos: "(Cesar) Edmundo Calderon Perez",
        rifas: 1
        },
        {
        id: 22,
        nombresCompletos: "(Cesar) Edmundo Calderon Perez",
        rifas: 1
        },
        {
        id: 23,
        nombresCompletos: "(Cesar) Edmundo Calderon Perez",
        rifas: 1
        },
        {
        id: 24,
        nombresCompletos: "(Cesar) Edmundo Calderon Perez",
        rifas: 1
        },
        {
        id: 25,
        nombresCompletos: "Hector Armando Enciso Vera",
        rifas: 1
        },
        {
        id: 26,
        nombresCompletos: "Raffo Gomez Falcon",
        rifas: 1
        },
        {
        id: 27,
        nombresCompletos: "Mariel Barreros M*",
        rifas: 1
        },
        {
        id: 28,
        nombresCompletos: "Danitza Alexandra Bedoya Ferrer*",
        rifas: 1
        },
        {
        id: 29,
        nombresCompletos: "Abel Garay Torres ",
        rifas: 1
        },
        {
        id: 30,
        nombresCompletos: "Mayra Azucena Mattos",
        rifas: 1
        },
        {
        id: 31,
        nombresCompletos: "Adderly Limber Alejos Ñivin*",
        rifas: 1
        },
        {
        id: 32,
        nombresCompletos: "Adderly Limber Alejos Ñivin*",
        rifas: 1
        },
        {
        id: 33,
        nombresCompletos: "Rosa Elena Marquez Fajardo*",
        rifas: 1
        },
        {
        id: 34,
        nombresCompletos: "Anthony Carlos Vera*",
        rifas: 1
        },
        {
        id: 35,
        nombresCompletos: "Anthony Carlos Vera*",
        rifas: 1
        },
        {
        id: 36,
        nombresCompletos: "Anthony Carlos Vera*",
        rifas: 1
        },
        {
        id: 37,
        nombresCompletos: "Marivel Mejia Campos*",
        rifas: 1
        },
        {
        id: 38,
        nombresCompletos: "Marivel Mejia Campos*",
        rifas: 1
        },
        {
        id: 39,
        nombresCompletos: "Martha Vasquez Miñano*",
        rifas: 1
        },
        {
        id: 40,
        nombresCompletos: "Shadia Abushaibe Thride*",
        rifas: 1
        },
        {
        id: 41,
        nombresCompletos: "Shadia Abushaibe Thride*",
        rifas: 1
        },
        {
        id: 42,
        nombresCompletos: "Irma Ninaquispe Terrones*",
        rifas: 1
        },
        {
        id: 43,
        nombresCompletos: "Ruben Dario Romero Meza*",
        rifas: 1
        },
        {
        id: 44,
        nombresCompletos: "Ruben Dario Romero Meza*",
        rifas: 1
        },
        {
          id: 45,
          nombresCompletos: "Ruben Dario Romero Meza*",
          rifas: 1
          },
          {
          id: 46,
          nombresCompletos: "Ruben Dario Romero Meza*",
          rifas: 1
          },
          {
          id: 47,
          nombresCompletos: "Henry Salas*",
          rifas: 1
          },
          {
          id: 48,
          nombresCompletos: "Henry Salas*",
          rifas: 1
          },
          {
          id: 49,
          nombresCompletos: "Jazzmin Cabrera Acosta*",
          rifas: 1
          },
          {
          id: 50,
          nombresCompletos: "Jazzmin Cabrera Acosta*",
          rifas: 1
          },
          {
          id: 51,
          nombresCompletos: "Jazzmin Cabrera Acosta*",
          rifas: 1
          },
          {
          id: 52,
          nombresCompletos: "Sonia Garcia*",
          rifas: 1
          },
          {
          id: 53,
          nombresCompletos: "Genesis Dubraska Serrano*",
          rifas: 1
          },
          {
          id: 54,
          nombresCompletos: "Victor Martinez*",
          rifas: 1
          },
          {
          id: 55,
          nombresCompletos: "Nancy Garay Torres",
          rifas: 1
          },
          {
          id: 56,
          nombresCompletos: "Jennifer Yahuarcani Ahuanari",
          rifas: 1
          },
          {
          id: 57,
          nombresCompletos: "Veronica Pozo Palacios",
          rifas: 1
          },
          {
          id: 58,
          nombresCompletos: "William Llacsa Romero",
          rifas: 1
          },
          {
          id: 59,
          nombresCompletos: "Isaac Caballero Casanova",
          rifas: 1
          },
          {
          id: 60,
          nombresCompletos: "Isaac Caballero Casanova",
          rifas: 1
          },
          {
          id: 61,
          nombresCompletos: "Lidia Garay Garay",
          rifas: 1
          },
          {
          id: 62,
          nombresCompletos: "Cesar Augusto Ramirez Estre",
          rifas: 1
          },
          {
          id: 63,
          nombresCompletos: "Estefania Lizeth Jauregui Contreras",
          rifas: 1
          },
          {
          id: 64,
          nombresCompletos: "Josue Alexander Fenco Bazan",
          rifas: 1
          },
          {
          id: 65,
          nombresCompletos: "Stephania Briceño Marin",
          rifas: 1
          },
          {
          id: 66,
          nombresCompletos: "Stephania Briceño Marin",
          rifas: 1
          },
          {
          id: 67,
          nombresCompletos: "Jose Adalberto Guerrero Romero",
          rifas: 1
          },
          {
          id: 68,
          nombresCompletos: "Marieta Luisa De La Cruz Jamanca",
          rifas: 1
          },
          {
          id: 69,
          nombresCompletos: "Vannesa De Jesus Rodriguez Guerra",
          rifas: 1
          },
          {
          id: 70,
          nombresCompletos: "Deny Manuel Ramirez Torre",
          rifas: 1
          },
          {
          id: 71,
          nombresCompletos: "Deny Manuel Ramirez Torre",
          rifas: 1
          },
          {
          id: 72,
          nombresCompletos: "Fiorella Amparo Lopez Zuñiga",
          rifas: 1
          },
          {
          id: 73,
          nombresCompletos: "Frank Jesus Romero Olortegui",
          rifas: 1
          },
          {
          id: 74,
          nombresCompletos: "Frank Jesus Romero Olortegui",
          rifas: 1
          },
          {
          id: 75,
          nombresCompletos: "Marlith Romero Olortegui",
          rifas: 1
          },
          {
          id: 76,
          nombresCompletos: "Marlith Romero Olortegui",
          rifas: 1
          },
          {
          id: 77,
          nombresCompletos: "Lidia Olortegui Chiriboga",
          rifas: 1
          },
          {
          id: 78,
          nombresCompletos: "Elida Chacon Barroz",
          rifas: 1
          },
          {
            id: 79,
            nombresCompletos: "Noemi Saavedra Lopez",
            rifas: 1
            },
            {
            id: 80,
            nombresCompletos: "Emma Quispe Quiroz",
            rifas: 1
            },
            {
            id: 81,
            nombresCompletos: "Fernando Guerrero Quispe",
            rifas: 1
            },
            {
            id: 82,
            nombresCompletos: "Abigail Guerrero Quispe",
            rifas: 1
            },
            {
            id: 83,
            nombresCompletos: "Jhon Elvis Vela Casternoque",
            rifas: 1
            },
            {
            id: 84,
            nombresCompletos: "Santos Alexander Abad Paredes",
            rifas: 1
            },
            {
            id: 85,
            nombresCompletos: "Heraldo Yamiro Yanac Salazar",
            rifas: 1
            },
            {
            id: 86,
            nombresCompletos: "Edgardo Luis Peña Camargo",
            rifas: 1
            },
            {
            id: 87,
            nombresCompletos: "Edgardo Luis Peña Camargo",
            rifas: 1
            },
            {
            id: 88,
            nombresCompletos: "Heraldo Yamiro Yanac Salazar",
            rifas: 1
            },
            {
            id: 89,
            nombresCompletos: "Heraldo Yamiro Yanac Salazar",
            rifas: 1
            },
            {
            id: 90,
            nombresCompletos: "Olga Eulogia Garro Figueroa",
            rifas: 1
            },
            {
            id: 91,
            nombresCompletos: "Shirley Deysi Norabuena Garro",
            rifas: 1
            },
            {
            id: 92,
            nombresCompletos: "Elsa Cecilia Ramos Munante",
            rifas: 1
            },
            {
            id: 93,
            nombresCompletos: "Nancy Lodris Perez Villa",
            rifas: 1
            },
            {
            id: 94,
            nombresCompletos: "Nancy Lodris Perez Villa",
            rifas: 1
            },
            {
            id: 95,
            nombresCompletos: "Nancy Lodris Perez Villa",
            rifas: 1
            },
            {
            id: 96,
            nombresCompletos: "Nancy Lodris Perez Villa",
            rifas: 1
            },
            {
            id: 97,
            nombresCompletos: "Nancy Lodris Perez Villa",
            rifas: 1
            },
            {
            id: 98,
            nombresCompletos: "Celeste Guerrero Angaspilco",
            rifas: 1
            },
            {
            id: 99,
            nombresCompletos: "Owen Guerrero Angaspilco",
            rifas: 1
            },
            {
            id: 100,
            nombresCompletos: "Carmen Angaspilco Terrones",
            rifas: 1
            },
            {
            id: 101,
            nombresCompletos: "Celeste Guerrero Angaspilco",
            rifas: 1
            },
            {
            id: 102,
            nombresCompletos: "Owen Guerrero Angaspilco",
            rifas: 1
            },
            {
            id: 103,
            nombresCompletos: "Jennifer Guerrero De La Cruz",
            rifas: 1
            },
            {
            id: 104,
            nombresCompletos: "Angelina Guerrero De La Cruz",
            rifas: 1
            },
            {
            id: 105,
            nombresCompletos: "Edgar Vallejo Victorio",
            rifas: 1
            },
            {
            id: 106,
            nombresCompletos: "Brighied Dabne Granados Mejia",
            rifas: 1
            },
            {
            id: 107,
            nombresCompletos: "Brighied Dabne Granados Mejia",
            rifas: 1
            },
            {
            id: 108,
            nombresCompletos: "Shirly Shanned Mujica Torres",
            rifas: 1
            },
            {
            id: 109,
            nombresCompletos: "Carla Salazar Muzayon",
            rifas: 1
            },
            {
            id: 110,
            nombresCompletos: "Massimo Romero Salazar",
            rifas: 1
            },
            {
            id: 111,
            nombresCompletos: "Carla Salazar Muzayon",
            rifas: 1
            },
            {
            id: 112,
            nombresCompletos: "Carla Salazar Muzayon",
            rifas: 1
            },
            {
            id: 113,
            nombresCompletos: "Jorge Romero Meza",
            rifas: 1
            },
            {
            id: 114,
            nombresCompletos: "Jorge Romero Meza",
            rifas: 1
            },
            {
            id: 115,
            nombresCompletos: "Massimo Romero Salazar",
            rifas: 1
            },
            {
            id: 116,
            nombresCompletos: "Jorge Romero Meza",
            rifas: 1
            },
            {
            id: 117,
            nombresCompletos: "Jorge Romero Meza",
            rifas: 1
            },
            {
            id: 118,
            nombresCompletos: "Jorge Romero Meza",
            rifas: 1
            },
            {
            id: 119,
            nombresCompletos: "Jorge Romero Meza",
            rifas: 1
            },
            {
            id: 120,
            nombresCompletos: "Jorge Romero Meza",
            rifas: 1
            },
            {
            id: 121,
            nombresCompletos: "Jorge Romero Meza",
            rifas: 1
            },
            {
            id: 122,
            nombresCompletos: "Massimo Romero Salazar",
            rifas: 1
            },
            {
            id: 123,
            nombresCompletos: "Carla Salazar Muzayon",
            rifas: 1
            },
            {
            id: 124,
            nombresCompletos: "Carla Salazar Muzayon",
            rifas: 1
            },
            {
            id: 125,
            nombresCompletos: "Massimo Romero Salazar",
            rifas: 1
            },
            {
            id: 126,
            nombresCompletos: "Carla Salazar Muzayon",
            rifas: 1
            },
            {
            id: 127,
            nombresCompletos: "Carla Salazar Muzayon",
            rifas: 1
            },
            {
            id: 128,
            nombresCompletos: "Carla Salazar Muzayon",
            rifas: 1
            },
            {
            id: 129,
            nombresCompletos: "Xiomara Esmit Perez Vasquez",
            rifas: 1
            },
            {
            id: 130,
            nombresCompletos: "Xiomara Esmit Perez Vasquez",
            rifas: 1
            },
            {
            id: 131,
            nombresCompletos: "Xiomara Esmit Perez Vasquez",
            rifas: 1
            },
            {
            id: 132,
            nombresCompletos: "Xiomara Esmit Perez Vasquez",
            rifas: 1
            },
            {
            id: 133,
            nombresCompletos: "Xiomara Esmit Perez Vasquez",
            rifas: 1
            },
            {
            id: 134,
            nombresCompletos: "Jaime Johon Quiroz Rodriguez",
            rifas: 1
            },
            {
            id: 135,
            nombresCompletos: "Jaime Johon Quiroz Rodriguez",
            rifas: 1
            },
            {
            id: 136,
            nombresCompletos: "Paty Sandoval Mamani",
            rifas: 1
            },
            {
            id: 137,
            nombresCompletos: "Elisabeth Marina Leon Ortega",
            rifas: 1
            },
            {
            id: 138,
            nombresCompletos: "Jhon Ronald Huamani Leon",
            rifas: 1
            },
            {
            id: 139,
            nombresCompletos: "Maria Isabel Caldas Anco",
            rifas: 1
            },
            {
            id: 140,
            nombresCompletos: "Yolanda Gloria Galindo Hinostroza",
            rifas: 1
            },
            {
            id: 141,
            nombresCompletos: "Guisela Magaly Granados Mejia",
            rifas: 1
            },
            {
            id: 142,
            nombresCompletos: "Edgar Jeanpierre Vallejos Granados",
            rifas: 1
            },
            {
            id: 143,
            nombresCompletos: "Elizabeth Martha Granados Mejia",
            rifas: 1
            },
            {
            id: 144,
            nombresCompletos: "Charo Chocos Camargo",
            rifas: 1
            },
            {
            id: 145,
            nombresCompletos: "Marisa Romero Zambrano",
            rifas: 1
            },
            {
            id: 146,
            nombresCompletos: "Maximiliana Sotelo Pahuara",
            rifas: 1
            },
            {
            id: 147,
            nombresCompletos: "Marilu Roxani Arroyo Alata",
            rifas: 1
            },
            {
            id: 148,
            nombresCompletos: "Rony Carhuancho Guzman",
            rifas: 1
            },
            {
            id: 149,
            nombresCompletos: "Wendy Garcia Noel",
            rifas: 1
            },
            {
            id: 150,
            nombresCompletos: "Raul Carhuas Berrocal",
            rifas: 1
            },
            {
            id: 151,
            nombresCompletos: "Jose Gerardo Jacinto Vargas",
            rifas: 1
            },
            {
            id: 152,
            nombresCompletos: "Juan Luis Jacinto Vargas",
            rifas: 1
            },
            {
            id: 153,
            nombresCompletos: "Jose Anthony Caceres Real",
            rifas: 1
            },
            {
            id: 154,
            nombresCompletos: "Juana Rosa Saldaña Saavedra",
            rifas: 1
            },
            {
            id: 155,
            nombresCompletos: "Eddy Marco Benito Villega",
            rifas: 1
            },
            {
            id: 156,
            nombresCompletos: "Sara Pérez Valdivia De Trujillo",
            rifas: 1
            },
            {
            id: 157,
            nombresCompletos: "Luciana Trujillo Perez",
            rifas: 1
            },
            {
            id: 158,
            nombresCompletos: "Ariana Danitza Palomino Ibañez",
            rifas: 1
            },
            {
            id: 159,
            nombresCompletos: "Mercedes Nancy Telles Salas",
            rifas: 1
            },
            {
            id: 160,
            nombresCompletos: "Lizardo Juan Trujillo Jurado",
            rifas: 1
            },
            {
            id: 161,
            nombresCompletos: "Emilith Perez Chufandama",
            rifas: 1
            },
            {
            id: 162,
            nombresCompletos: "Luis Alberto Yabar Vargas",
            rifas: 1
            },
            {
            id: 163,
            nombresCompletos: "Lurdes Garay Torres",
            rifas: 1
            },
            {
            id: 164,
            nombresCompletos: "Jeremi Maycelo Davila Palomino",
            rifas: 1
            },
            {
            id: 165,
            nombresCompletos: "Margarita Silva Litano",
            rifas: 1
            },
            {
            id: 166,
            nombresCompletos: "Margarita Silva Litano",
            rifas: 1
            },
            {
            id: 167,
            nombresCompletos: "Rosa Milagros Acosta Enciso",
            rifas: 1
            },
            {
            id: 168,
            nombresCompletos: "Iker Gael Taboada Intride",
            rifas: 1
            },
            {
            id: 169,
            nombresCompletos: "Julio Guillermo Joaquin Matt",
            rifas: 1
            },
            {
            id: 170,
            nombresCompletos: "Gary Drivis Labrador",
            rifas: 1
            },
            {
            id: 171,
            nombresCompletos: "Neyser Antonio Obando Tinoco",
            rifas: 1
            },
            {
            id: 172,
            nombresCompletos: "Sheila Karina Chavez Gutierrez",
            rifas: 1
            },
            {
            id: 173,
            nombresCompletos: "Sheila Karina Chavez Gutierrez",
            rifas: 1
            },
            {
            id: 174,
            nombresCompletos: "Diana Bustinza Farfan",
            rifas: 1
            },
            {
            id: 175,
            nombresCompletos: "Jenny Goicochea Perales",
            rifas: 1
            },
            {
            id: 176,
            nombresCompletos: "Damaris Cunya Gomez",
            rifas: 1
            },
            {
            id: 177,
            nombresCompletos: "Sarita Fernandez Dominguez",
            rifas: 1
            },
            {
            id: 178,
            nombresCompletos: "Samuel Valera Bardales",
            rifas: 1
            },
            {
              id: 179,
              nombresCompletos: "Margarita Guerra P.",
              rifas: 1
              },
              {
              id: 180,
              nombresCompletos: "Florencio Huacabilla Yanayaco",
              rifas: 1
              },
              {
              id: 181,
              nombresCompletos: "Baruc Joaquin Garcia",
              rifas: 1
              },
              {
              id: 182,
              nombresCompletos: "Roberto Tomas Mego Zevallos",
              rifas: 1
              },
              {
              id: 183,
              nombresCompletos: "Alessandra Mego Rodriguez",
              rifas: 1
              },
              {
              id: 184,
              nombresCompletos: "Fernando Isaias Mego Hizo",
              rifas: 1
              },
              {
              id: 185,
              nombresCompletos: "Jose Mario Mego Zevallos",
              rifas: 1
              },
              {
              id: 186,
              nombresCompletos: "Lenin Cabanillas Suarez",
              rifas: 1
              },
              {
              id: 187,
              nombresCompletos: "Cristopher Omar Peña Camargo",
              rifas: 1
              },
              {
              id: 188,
              nombresCompletos: "Maciel Maciel Manrique Olivares",
              rifas: 1
              },
              {
              id: 189,
              nombresCompletos: "Jorge Briceño Vidaurre",
              rifas: 1
              },
              {
              id: 190,
              nombresCompletos: "Dina Rodriguez Vasquez",
              rifas: 1
              },
              {
              id: 191,
              nombresCompletos: "Maria Elena Zapata De Abarca",
              rifas: 1
              },
              {
              id: 192,
              nombresCompletos: "Violeta Garay Torres",
              rifas: 1
              },
              {
              id: 193,
              nombresCompletos: "Jose Eduardo Mejia Laos",
              rifas: 1
              },
              {
              id: 194,
              nombresCompletos: "Jair Esteban Aquije Leon",
              rifas: 1
              },
              {
              id: 195,
              nombresCompletos: "Wilmer Lucano Rojas",
              rifas: 1
              },
              {
              id: 196,
              nombresCompletos: "Dela Salcedo Salazar",
              rifas: 1
              },
              {
              id: 197,
              nombresCompletos: "Susana Valera Bardales",
              rifas: 1
              },
              {
              id: 198,
              nombresCompletos: "Wilder Augusto Navarro Dioses",
              rifas: 1
              },
              {
              id: 199,
              nombresCompletos: "Brighied Dabne Granados Mejia",
              rifas: 1
              },
              {
              id: 200,
              nombresCompletos: "Luis Angel Saavedra Mejia",
              rifas: 1
              },
              {
              id: 201,
              nombresCompletos: "Horacio Cachay Huaman",
              rifas: 1
              },
              {
              id: 202,
              nombresCompletos: "Max Jhonatan Navarro Alvarado",
              rifas: 1
              },
              {
              id: 203,
              nombresCompletos: "Geivy Margot Grandes Gomez",
              rifas: 1
              },
              {
              id: 204,
              nombresCompletos: "Jesus Hernandez Linares",
              rifas: 1
              },
              {
              id: 205,
              nombresCompletos: "Isamar Rivera Montalban",
              rifas: 1
              },
              {
              id: 206,
              nombresCompletos: "Cubillas Candela Delia Dina",
              rifas: 1
              },
              {
              id: 207,
              nombresCompletos: "Candela Campos Katherine",
              rifas: 1
              },
              {
              id: 208,
              nombresCompletos: "Jhon Roberth Vasquez Candela",
              rifas: 1
              },
              {
              id: 209,
              nombresCompletos: "Lorena Maldonado Candela",
              rifas: 1
              },
              {
              id: 210,
              nombresCompletos: "Flora Candela Cubillas",
              rifas: 1
              },
              {
              id: 211,
              nombresCompletos: "Alonso Candela Maldonado",
              rifas: 1
              },
              {
              id: 212,
              nombresCompletos: "Luz Candela Cubillas",
              rifas: 1
              },
              {
              id: 213,
              nombresCompletos: "Fernando Candela Maldonado",
              rifas: 1
              },
              {
              id: 214,
              nombresCompletos: "Felicia Campos Vda. De Candela",
              rifas: 1
              },
              {
              id: 215,
              nombresCompletos: "Victoria Candela Cubillas",
              rifas: 1
              },
              {
              id: 216,
              nombresCompletos: "Clorinda Candela Cubillas",
              rifas: 1
              },
              {
              id: 217,
              nombresCompletos: "Jorge Candela Cubillas",
              rifas: 1
              },
              {
              id: 218,
              nombresCompletos: "Jhosep Candela Sanchez",
              rifas: 1
              },
              {
              id: 219,
              nombresCompletos: "Francisco Calixto Terrones",
              rifas: 1
              },
              {
              id: 220,
              nombresCompletos: "Madeleine Condor Maguiña",
              rifas: 1
              },
              {
              id: 221,
              nombresCompletos: "Alex Estares Aliaga",
              rifas: 1
              },
              {
              id: 222,
              nombresCompletos: "Aida Valderrama Ykeda",
              rifas: 1
              },
              {
              id: 223,
              nombresCompletos: "Erika Zamora De La Cruz",
              rifas: 1
              },
              {
              id: 224,
              nombresCompletos: "Mery Candela Campos",
              rifas: 1
              },
              {
              id: 225,
              nombresCompletos: "Lucero Piminchumo",
              rifas: 1
              },
              {
              id: 226,
              nombresCompletos: "Rodrigo Reyna",
              rifas: 1
              },
              {
              id: 227,
              nombresCompletos: "Luan Keylor Altamirano",
              rifas: 1
              }
    ]);

  const handleSearch = () => {
    try {
      const filteredData = data.filter((row) =>
        row.nombresCompletos.includes(searchTerm)
      );
      Swal.fire(
        "Felicidades",
        filteredData[0].nombresCompletos +
          " estas participando del sorteo. Con " +
          filteredData[0].rifas +
          " rifa(s).",
        "success"
      );

      setData(filteredData);
    } catch {}
  };

  const handleSearch2 = () => {
    setData(dataCompleta);
    setSearchTerm("");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} sx={{ height: "800px" }}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ height: "800px", overflow: "hidden" }}>
            <img
              src={process.env.PUBLIC_URL + "/DylanFlyer2.png"}
              alt="Placeholder"
              className={classes.image}
            />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <Paper sx={{ height: "100%", overflow: "auto" }}>
            <div className={classes.inputContainer}>
              <TextField
                label="Escribe tu DNI"
                variant="outlined"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{
                  marginLeft: "25px",
                  backgroundColor: "blue", // Cambia el color de fondo a azul
                  "&:hover": {
                    backgroundColor: "darkblue", // Cambia el color de fondo al pasar el cursor sobre el botón
                  },
                }}
              >
                Buscar
              </Button>
              <Button
                variant="contained"
                onClick={handleSearch2}
                sx={{
                  marginLeft: "25px",
                  backgroundColor: "red", // Cambia el color de fondo a rojo
                  "&:hover": {
                    backgroundColor: "darkred", // Cambia el color de fondo al pasar el cursor sobre el botón
                  },
                }}
              >
                Limpiar
              </Button>
            </div>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre completo</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Cantidad de rifas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.nombresCompletos}</TableCell>
                      <TableCell>Participando</TableCell>
                      <TableCell>{row.rifas}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
