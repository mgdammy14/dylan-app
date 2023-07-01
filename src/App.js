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
    { id: 1, nombresCompletos: "Anyu Francesca Alejandria Solari", rifas: 1 },
    { id: 2, nombresCompletos: "Daniel Alberto Cardenas Perez", rifas: 1 },
    { id: 3, nombresCompletos: "Candy Loriet Zegarra Castillo", rifas: 1 },
    { id: 4, nombresCompletos: "George Antony Garcia Congona", rifas: 1 },
    { id: 5, nombresCompletos: "Yovana Milagros Montesinos Ortega", rifas: 1 },
    { id: 6, nombresCompletos: "Adrian Nicolas Melendez", rifas: 1 },
    { id: 7, nombresCompletos: "Martina Chinchay Ticliahuanca", rifas: 1 },
    { id: 8, nombresCompletos: "Itamar Solano Huertas", rifas: 1 },
    { id: 9, nombresCompletos: "Naomi Vasquez Aquino", rifas: 1 },
    { id: 10, nombresCompletos: "Juan Francisco Taipe Rojas", rifas: 1 },
    { id: 11, nombresCompletos: "Ercida Rosa Roncal Segura", rifas: 1 },
    { id: 12, nombresCompletos: "Ercida Rosa Roncal Segura", rifas: 1 },
    { id: 13, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
    { id: 14, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
    { id: 15, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
    { id: 16, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
    { id: 17, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
    { id: 18, nombresCompletos: "Karla Calderon Retamozo", rifas: 1 },
    { id: 19, nombresCompletos: "Jovita Ysidora Gutierrez Barreto", rifas: 1 },
    { id: 20, nombresCompletos: "Bertha Maritza Rojas Mostacero", rifas: 1 },
    { id: 21, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
    { id: 22, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
    { id: 23, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
    { id: 24, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
    { id: 25, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
    { id: 26, nombresCompletos: "Hector Armando Enciso Vera", rifas: 1 },
    { id: 27, nombresCompletos: "Raffo Gomez Falcon", rifas: 1 },
    { id: 28, nombresCompletos: "Mariel Barreros M*", rifas: 1 },
    { id: 29, nombresCompletos: "Danitza Alexandra Bedoya Ferrer*", rifas: 1 },
    { id: 30, nombresCompletos: "Abel Garay Torres *", rifas: 1 },
    { id: 31, nombresCompletos: "Mayra Azucena Mattos*", rifas: 1 },
    { id: 32, nombresCompletos: "Adderly Limber Alejos Ñivin*", rifas: 1 },
    { id: 33, nombresCompletos: "Adderly Limber Alejos Ñivin*", rifas: 1 },
    { id: 34, nombresCompletos: "Rosa Elena Marquez Fajardo*", rifas: 1 },
    { id: 35, nombresCompletos: "Anthony Carlos Vera*", rifas: 1 },
    { id: 36, nombresCompletos: "Anthony Carlos Vera*", rifas: 1 },
    { id: 37, nombresCompletos: "Anthony Carlos Vera*", rifas: 1 },
    { id: 38, nombresCompletos: "Marivel Mejia Campos*", rifas: 1 },
    { id: 39, nombresCompletos: "Marivel Mejia Campos*", rifas: 1 },
    { id: 40, nombresCompletos: "Martha Vasquez Miñano*", rifas: 1 },
    { id: 41, nombresCompletos: "Shadia Abushaibe Thride*", rifas: 1 },
    { id: 42, nombresCompletos: "Shadia Abushaibe Thride*", rifas: 1 },
    { id: 43, nombresCompletos: "Irma Ninaquispe Terrones*", rifas: 1 },
    { id: 44, nombresCompletos: "Ruben Dario Romero Meza*", rifas: 1 },
    { id: 45, nombresCompletos: "Ruben Dario Romero Meza*", rifas: 1 },
    { id: 46, nombresCompletos: "Ruben Dario Romero Meza*", rifas: 1 },
    { id: 47, nombresCompletos: "Ruben Dario Romero Meza*", rifas: 1 },
    { id: 48, nombresCompletos: "Henry Salas*", rifas: 1 },
    { id: 49, nombresCompletos: "Henry Salas*", rifas: 1 },
    { id: 50, nombresCompletos: "Jazzmin Cabrera Acosta*", rifas: 1 },
    { id: 51, nombresCompletos: "Jazzmin Cabrera Acosta*", rifas: 1 },
    { id: 52, nombresCompletos: "Jazzmin Cabrera Acosta*", rifas: 1 },
    { id: 53, nombresCompletos: "Sonia Garcia *", rifas: 1 },
    { id: 54, nombresCompletos: "Genesis Dubraska Serrano*", rifas: 1 },
    { id: 55, nombresCompletos: "Victor Martinez*", rifas: 1 },
    { id: 56, nombresCompletos: "Nancy Garay Torres", rifas: 1 },
    { id: 57, nombresCompletos: "Jennifer Yahuarcani Ahuanari", rifas: 1 },
    { id: 58, nombresCompletos: "Veronica Pozo Palacios", rifas: 1 },
    { id: 59, nombresCompletos: "William Llacsa Romero", rifas: 1 },
    { id: 60, nombresCompletos: "Isaac Caballero Casanova", rifas: 1 },
    { id: 61, nombresCompletos: "Isaac Caballero Casanova", rifas: 1 },
    { id: 62, nombresCompletos: "Lidia Garay Garay", rifas: 1 },
    { id: 63, nombresCompletos: "Cesar Augusto Ramirez Estre", rifas: 1 },
    {
      id: 64,
      nombresCompletos: "Estefania Lizeth Jauregui Contreras",
      rifas: 1,
    },
    { id: 65, nombresCompletos: "Josue Alexander Fenco Bazan", rifas: 1 },
    { id: 66, nombresCompletos: "Stephania Briceño Marin", rifas: 1 },
    { id: 67, nombresCompletos: "Stephania Briceño Marin", rifas: 1 },
    { id: 68, nombresCompletos: "Jose Adalberto Guerrero Romero", rifas: 1 },
    { id: 69, nombresCompletos: "Marieta Luisa De La Cruz Jamanca", rifas: 1 },
    { id: 70, nombresCompletos: "Vannesa De Jesus Rodriguez Guerra", rifas: 1 },
    { id: 71, nombresCompletos: "Deny Manuel Ramirez Torre", rifas: 1 },
    { id: 72, nombresCompletos: "Deny Manuel Ramirez Torre", rifas: 1 },
    { id: 73, nombresCompletos: "Fiorella Amparo Lopez Zuñiga", rifas: 1 },
    { id: 74, nombresCompletos: "Frank Jesus Romero Olortegui", rifas: 1 },
    { id: 75, nombresCompletos: "Frank Jesus Romero Olortegui", rifas: 1 },
    { id: 76, nombresCompletos: "Marlith Romero Olortegui", rifas: 1 },
    { id: 77, nombresCompletos: "Marlith Romero Olortegui", rifas: 1 },
    { id: 78, nombresCompletos: "Lidia Olortegui Chiriboga", rifas: 1 },
    { id: 79, nombresCompletos: "Elida Chacon Barroz", rifas: 1 },
    { id: 80, nombresCompletos: "Noemi Saavedra Lopez", rifas: 1 },
    { id: 81, nombresCompletos: "Emma Quispe Quiroz", rifas: 1 },
    { id: 82, nombresCompletos: "Fernando Guerrero Quispe", rifas: 1 },
    { id: 83, nombresCompletos: "Abigail Guerrero Quispe", rifas: 1 },
    { id: 84, nombresCompletos: "Jhon Elvis Vela Casternoque", rifas: 1 },
    { id: 85, nombresCompletos: "Santos Alexander Abad Paredes", rifas: 1 },
    { id: 86, nombresCompletos: "Heraldo Yamiro Yanac Salazar", rifas: 1 },
    { id: 87, nombresCompletos: "Edgardo Luis Peña Camargo", rifas: 1 },
    { id: 88, nombresCompletos: "Edgardo Luis Peña Camargo", rifas: 1 },
    { id: 89, nombresCompletos: "Heraldo Yamiro Yanac Salazar", rifas: 1 },
    { id: 90, nombresCompletos: "Heraldo Yamiro Yanac Salazar", rifas: 1 },
    { id: 91, nombresCompletos: "Olga Eulogia Garro Figueroa", rifas: 1 },
    { id: 92, nombresCompletos: "Shirley Deysi Norabuena Garro", rifas: 1 },
    { id: 93, nombresCompletos: "Elsa Cecilia Ramos Munante", rifas: 1 },
    { id: 94, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
    { id: 95, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
    { id: 96, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
    { id: 97, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
    { id: 98, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
    { id: 99, nombresCompletos: "Celeste Guerrero Angaspilco", rifas: 1 },
    { id: 100, nombresCompletos: "Owen Guerrero Angaspilco", rifas: 1 },
    { id: 101, nombresCompletos: "Carmen Angaspilco Terrones", rifas: 1 },
    { id: 102, nombresCompletos: "Celeste Guerrero Angaspilco", rifas: 1 },
    { id: 103, nombresCompletos: "Owen Guerrero Angaspilco", rifas: 1 },
    { id: 104, nombresCompletos: "Jennifer Guerrero De La Cruz", rifas: 1 },
    { id: 105, nombresCompletos: "Angelina Guerrero De La Cruz", rifas: 1 },
    { id: 106, nombresCompletos: "Edgar Vallejo Victorio", rifas: 1 },
    { id: 107, nombresCompletos: "Brighied Dabne Granados Mejia", rifas: 1 },
    { id: 108, nombresCompletos: "Brighied Dabne Granados Mejia", rifas: 1 },
    { id: 109, nombresCompletos: "Shirly Shanned Mujica Torres", rifas: 1 },
    { id: 110, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
    { id: 111, nombresCompletos: "Massimo Romero Salazar", rifas: 1 },
    { id: 112, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
    { id: 113, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
    { id: 114, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
    { id: 115, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
    { id: 116, nombresCompletos: "Massimo Romero Salazar", rifas: 1 },
    { id: 117, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
    { id: 118, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
    { id: 119, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
    { id: 120, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
    { id: 121, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
    { id: 122, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
    { id: 123, nombresCompletos: "Massimo Romero Salazar", rifas: 1 },
    { id: 124, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
    { id: 125, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
    { id: 126, nombresCompletos: "Massimo Romero Salazar", rifas: 1 },
    { id: 127, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
    { id: 128, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
    { id: 129, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
    { id: 130, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
    { id: 131, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
    { id: 132, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
    { id: 133, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
    { id: 134, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
    { id: 135, nombresCompletos: "Jaime Johon Quiroz Rodriguez", rifas: 1 },
    { id: 136, nombresCompletos: "Jaime Johon Quiroz Rodriguez", rifas: 1 },
    { id: 137, nombresCompletos: "Paty Sandoval Mamani", rifas: 1 },
    { id: 138, nombresCompletos: "Elisabeth Marina Leon Ortega", rifas: 1 },
    { id: 139, nombresCompletos: "Jhon Ronald Huamani Leon", rifas: 1 },
    { id: 140, nombresCompletos: "Maria Isabel Caldas Anco", rifas: 1 },
    {
      id: 141,
      nombresCompletos: "Yolanda Gloria Galindo Hinostroza",
      rifas: 1,
    },
    { id: 142, nombresCompletos: "Guisela Magaly Granados Mejia", rifas: 1 },
    {
      id: 143,
      nombresCompletos: "Edgar Jeanpierre Vallejos Granados",
      rifas: 1,
    },
    { id: 144, nombresCompletos: "Elizabeth Martha Granados Mejia", rifas: 1 },
    { id: 145, nombresCompletos: "Charo Chocos Camargo", rifas: 1 },
    { id: 146, nombresCompletos: "Marisa Romero Zambrano", rifas: 1 },
    { id: 147, nombresCompletos: "Maximiliana Sotelo Pahuara", rifas: 1 },
    { id: 148, nombresCompletos: "Marilu Roxani Arroyo Alata", rifas: 1 },
    { id: 149, nombresCompletos: "Rony Carhuancho Guzman", rifas: 1 },
    { id: 150, nombresCompletos: "Wendy Garcia Noel", rifas: 1 },
    { id: 151, nombresCompletos: "Raul Carhuas Berrocal", rifas: 1 },
    { id: 152, nombresCompletos: "Jose Gerardo Jacinto Vargas", rifas: 1 },
    { id: 153, nombresCompletos: "Juan Luis Jacinto Vargas", rifas: 1 },
    { id: 154, nombresCompletos: "Jose Anthony Caceres Real", rifas: 1 },
    { id: 155, nombresCompletos: "Juana Rosa Saldaña Saavedra", rifas: 1 },
    { id: 156, nombresCompletos: "Eddy Marco Benito Villega", rifas: 1 },
    { id: 157, nombresCompletos: "Sara Pérez Valdivia De Trujillo", rifas: 1 },
    { id: 158, nombresCompletos: "Luciana Trujillo Perez", rifas: 1 },
    { id: 159, nombresCompletos: "Ariana Danitza Palomino Ibañez", rifas: 1 },
    { id: 160, nombresCompletos: "Mercedes Nancy Telles Salas", rifas: 1 },
    { id: 161, nombresCompletos: "Lizardo Juan Trujillo Jurado", rifas: 1 },
    { id: 162, nombresCompletos: "Emilith Perez Chufandama", rifas: 1 },
    { id: 163, nombresCompletos: "Luis Alberto Yabar Vargas", rifas: 1 },
    { id: 164, nombresCompletos: "Lurdes Garay Torres", rifas: 1 },
    { id: 165, nombresCompletos: "Jeremi Maycelo Davila Palomino", rifas: 1 },
    { id: 166, nombresCompletos: "Margarita Silva Litano", rifas: 1 },
    { id: 167, nombresCompletos: "Margarita Silva Litano", rifas: 1 },
    { id: 168, nombresCompletos: "Rosa Milagros Acosta Enciso", rifas: 1 },
    { id: 169, nombresCompletos: "Iker Gael Taboada Intride", rifas: 1 },
    { id: 170, nombresCompletos: "Julio Guillermo Joaquin Matt", rifas: 1 },
    { id: 171, nombresCompletos: "Gary Drivis Labrador", rifas: 1 },
    { id: 172, nombresCompletos: "Neyser Antonio Obando Tinoco", rifas: 1 },
    { id: 173, nombresCompletos: "Sheila Karina Chavez Gutierrez", rifas: 1 },
    { id: 174, nombresCompletos: "Sheila Karina Chavez Gutierrez", rifas: 1 },
    { id: 175, nombresCompletos: "Diana Bustinza Farfan", rifas: 1 },
    { id: 176, nombresCompletos: "Jenny Goicochea Perales", rifas: 1 },
    { id: 177, nombresCompletos: "Damaris Cunya Gomez", rifas: 1 },
    { id: 178, nombresCompletos: "Sarita Fernandez Dominguez", rifas: 1 },
    { id: 179, nombresCompletos: "Samuel Valera Bardales", rifas: 1 },
    { id: 180, nombresCompletos: "Margarita Guerra P.", rifas: 1 },
    { id: 181, nombresCompletos: "Florencio Huacabilla Yanayaco", rifas: 1 },
    { id: 182, nombresCompletos: "Baruc Joaquin Garcia", rifas: 1 },
    { id: 183, nombresCompletos: "Roberto Tomas Mego Zevallos", rifas: 1 },
    { id: 184, nombresCompletos: "Alessandra Mego Rodriguez", rifas: 1 },
    { id: 185, nombresCompletos: "Fernando Isaias Mego Hizo", rifas: 1 },
    { id: 186, nombresCompletos: "Jose Mario Mego Zevallos", rifas: 1 },
    { id: 187, nombresCompletos: "Lenin Cabanillas Suarez", rifas: 1 },
    { id: 188, nombresCompletos: "Cristopher Omar Peña Camargo", rifas: 1 },
    { id: 189, nombresCompletos: "Maciel Maciel Manrique Olivares", rifas: 1 },
    { id: 190, nombresCompletos: "Jorge Briceño Vidaurre", rifas: 1 },
    { id: 191, nombresCompletos: "Dina Rodriguez Vasquez", rifas: 1 },
    { id: 192, nombresCompletos: "Maria Elena Zapata De Abarca", rifas: 1 },
    { id: 193, nombresCompletos: "Violeta Garay Torres", rifas: 1 },
    { id: 194, nombresCompletos: "Jose Eduardo Mejia Laos", rifas: 1 },
    { id: 195, nombresCompletos: "Jair Esteban Aquije Leon", rifas: 1 },
    { id: 196, nombresCompletos: "Wilmer Lucano Rojas", rifas: 1 },
    { id: 197, nombresCompletos: "Dela Salcedo Salazar", rifas: 1 },
    { id: 198, nombresCompletos: "Susana Valera Bardales", rifas: 1 },
    { id: 199, nombresCompletos: "Wilder Augusto Navarro Dioses", rifas: 1 },
    { id: 200, nombresCompletos: "Brighied Dabne Granados Mejia", rifas: 1 },
    {
      id: 201,
      nombreCompleto: "Luis Angel Saavedra Mejia",
      rifas: 1,
    },
    {
      id: 202,
      nombreCompleto: "Horacio Cachay Huaman",
      rifas: 1,
    },
    {
      id: 203,
      nombreCompleto: "Max Jhonatan Navarro Alvarado",
      rifas: 1,
    },
    {
      id: 204,
      nombreCompleto: "Geivy Margot Grandes Gomez",
      rifas: 1,
    },
    {
      id: 205,
      nombreCompleto: "Jesus Hernandez Linares",
      rifas: 1,
    },
    {
      id: 206,
      nombreCompleto: "Isamar Rivera Montalban",
      rifas: 1,
    },
    {
      id: 207,
      nombreCompleto: "Cubillas Candela Delia Dina",
      rifas: 1,
    },
    {
      id: 208,
      nombreCompleto: "Candela Campos Katherine",
      rifas: 1,
    },
    {
      id: 209,
      nombreCompleto: "Jhon Roberth Vasquez Candela",
      rifas: 1,
    },
    {
      id: 210,
      nombreCompleto: "Lorena Maldonado Candela",
      rifas: 1,
    },
    {
      id: 211,
      nombreCompleto: "Flora Candela Cubillas",
      rifas: 1,
    },
    {
      id: 212,
      nombreCompleto: "Alonso Candela Maldonado",
      rifas: 1,
    },
    {
      id: 213,
      nombreCompleto: "Luz Candela Cubillas",
      rifas: 1,
    },
    {
      id: 214,
      nombreCompleto: "Fernando Candela Maldonado",
      rifas: 1,
    },
    {
      id: 215,
      nombreCompleto: "Felicia Campos Vda. De Candela",
      rifas: 1,
    },
    {
      id: 216,
      nombreCompleto: "Felicia Campos Vda. De Candela",
      rifas: 1,
    },
    {
      id: 217,
      nombreCompleto: "Victoria Candela Cubillas",
      rifas: 1,
    },
    {
      id: 218,
      nombreCompleto: "Clorinda Candela Cubillas",
      rifas: 1,
    },
    {
      id: 219,
      nombreCompleto: "Jorge Candela Cubillas",
      rifas: 1,
    },
    {
      id: 220,
      nombreCompleto: "Jhosep Candela Sanchez",
      rifas: 1,
    },
    {
      id: 221,
      nombreCompleto: "Francisco Calixto Terrones",
      rifas: 1,
    },
    {
      id: 222,
      nombreCompleto: "Madeleine Condor Maguiña",
      rifas: 1,
    },
    {
      id: 223,
      nombreCompleto: "Alex Estares Aliaga",
      rifas: 1,
    },
    {
      id: 224,
      nombreCompleto: "Aida Valderrama Ykeda",
      rifas: 1,
    },
    {
      id: 225,
      nombreCompleto: "Erika Zamora De La Cruz",
      rifas: 1,
    },
    {
      id: 226,
      nombreCompleto: "Mery Candela Campos",
      rifas: 1,
    },
    {
      id: 227,
      nombreCompleto: "Lucero Piminchumo",
      rifas: 1,
    },
    {
      id: 228,
      nombreCompleto: "Rodrigo Reyna",
      rifas: 1,
    },
    {
      id: 229,
      nombreCompleto: "Luan Keylor Altamirano",
      rifas: 1,
    },
    {
      id: 230,
      nombreCompleto: "Zhoemy Montenegro Candela",
      rifas: 1,
    },
    {
      id: 231,
      nombreCompleto: "Nayla Montenegro Candela",
      rifas: 1,
    },
    {
      id: 232,
      nombreCompleto: "Zhoemy Montenegro Candela",
      rifas: 1,
    },
    {
      id: 233,
      nombreCompleto: "Nayla Montenegro Candela",
      rifas: 1,
    },
    {
      id: 234,
      nombreCompleto: "Zhoemy Montenegro Candela",
      rifas: 1,
    },
    {
      id: 235,
      nombreCompleto: "Nayla Montenegro Candela",
      rifas: 1,
    },
    {
      id: 236,
      nombreCompleto: "Zhoemy Montenegro Candela",
      rifas: 1,
    },
    {
      id: 237,
      nombreCompleto: "Nayla Montenegro Candela",
      rifas: 1,
    },
    {
      id: 238,
      nombreCompleto: "Zhoemy Montenegro Candela",
      rifas: 1,
    },
    {
      id: 239,
      nombreCompleto: "Nayla Montenegro Candela",
      rifas: 1,
    },
    {
      id: 240,
      nombreCompleto: "Eliana Guzman",
      rifas: 1,
    },
    {
      id: 241,
      nombreCompleto: "James Candela Sanchez",
      rifas: 1,
    },
    {
      id: 242,
      nombreCompleto: "Akemy Vasquez Guzman",
      rifas: 1,
    },
    {
      id: 243,
      nombreCompleto: "Karin Pumarica",
      rifas: 1,
    },
    {
      id: 244,
      nombreCompleto: "Nayla Montenegro Candela",
      rifas: 1,
    },
    {
      id: 245,
      nombreCompleto: "Fany Quisae Nieto",
      rifas: 1,
    },
    {
      id: 246,
      nombreCompleto: "Eliana Guzman",
      rifas: 1,
    },
    {
      id: 247,
      nombreCompleto: "Rosa Condori Enriquez",
      rifas: 1,
    },
    {
      id: 248,
      nombreCompleto: "Jimena Candela Sanchez",
      rifas: 1,
    },
    {
      id: 249,
      nombreCompleto: "Valeria Calixto Suarez",
      rifas: 1,
    },
    {
      id: 250,
      nombreCompleto: "Ana Maria Rojas Tejeira",
      rifas: 1,
    },
    {
      id: 251,
      nombreCompleto: "Leonor Guerrero Meza",
      rifas: 1,
    },
    {
      id: 252,
      nombreCompleto: "Elizabeth Zea Luna",
      rifas: 1,
    },
    {
      id: 253,
      nombreCompleto: "Fabio Garay Torres",
      rifas: 1,
    },
    {
      id: 254,
      nombreCompleto: "Fabio Garay Torres",
      rifas: 1,
    },
    {
      id: 255,
      nombreCompleto: "Kaoru Mendoza Huamani",
      rifas: 1,
    },
    {
      id: 256,
      nombreCompleto: "Elias Garay Torres",
      rifas: 1,
    },
    {
      id: 257,
      nombreCompleto: "Yolanda Valverde Vara",
      rifas: 1,
    },
    {
      id: 258,
      nombreCompleto: "Miguel Duran Vasquez",
      rifas: 1,
    },
    {
      id: 259,
      nombreCompleto: "Yolanda Luz Camargo Concha",
      rifas: 1,
    },
    {
      id: 260,
      nombreCompleto: "Merlyng Ortiz-",
      rifas: 1,
    },
    {
      id: 261,
      nombreCompleto: "Jose Castro-",
      rifas: 1,
    },
    {
      id: 262,
      nombreCompleto: "Jose Camacho-",
      rifas: 1,
    },
    {
      id: 263,
      nombreCompleto: "Junior Viera Chambergo-",
      rifas: 1,
    },
    {
      id: 264,
      nombreCompleto: "Leoncio Alarcon Machuca-",
      rifas: 1,
    },
    {
      id: 265,
      nombreCompleto: "Alex Corzo Bocanegra-",
      rifas: 1,
    },
    {
      id: 266,
      nombreCompleto: "Kevin Javier R. Jaspe",
      rifas: 1,
    },
    {
      id: 267,
      nombreCompleto: "Liam Alarcon Corzo-",
      rifas: 1,
    },
    {
      id: 268,
      nombreCompleto: "Cesar Muñoz Damian-",
      rifas: 1,
    },
    {
      id: 269,
      nombreCompleto: "Victor Vicenth Gomez-",
      rifas: 1,
    },
    {
      id: 270,
      nombreCompleto: "Angelina Collado Rojas-",
      rifas: 1,
    },
    {
      id: 271,
      nombreCompleto: "Jhony Lopez-",
      rifas: 1,
    },
    {
      id: 272,
      nombreCompleto: "Teofilo Sanchez Duran-",
      rifas: 1,
    },
    {
      id: 273,
      nombreCompleto: "Pedro Calongo-",
      rifas: 1,
    },
    {
      id: 274,
      nombreCompleto: "Miguel Angel Fernandez Sarra-",
      rifas: 1,
    },
    {
      id: 275,
      nombreCompleto: "Jaime Fernandez Malque-",
      rifas: 1,
    },
    {
      id: 276,
      nombreCompleto: "Mario Melendez",
      rifas: 1,
    },
    {
      id: 277,
      nombreCompleto: "Sergio Palacios Pajuelo-",
      rifas: 1,
    },
    {
      id: 278,
      nombreCompleto: "Wetty Contreras Fabian-",
      rifas: 1,
    },
    {
      id: 279,
      nombreCompleto: "Manuel Eduardo Bazalar-",
      rifas: 1,
    },
    {
      id: 280,
      nombreCompleto: "Jhon Juarez-",
      rifas: 1,
    },
    {
      id: 281,
      nombreCompleto: "Rosa Enrique Vidal-",
      rifas: 1,
    },
    {
      id: 282,
      nombreCompleto: "Johan Pizarro Enrique-",
      rifas: 1,
    },
    {
      id: 283,
      nombreCompleto: "Edde Davila Enrique-",
      rifas: 1,
    },
    {
      id: 284,
      nombreCompleto: "Pedro Paredes-",
      rifas: 1,
    },
    {
      id: 285,
      nombreCompleto: "Hector Perez Albarran",
      rifas: 1,
    },
    {
      id: 286,
      nombreCompleto: "Andres Leon Albitres",
      rifas: 1,
    },
    {
      id: 287,
      nombreCompleto: "Synthya Aracelly Linares Condor",
      rifas: 1,
    },
    {
      id: 288,
      nombreCompleto: "Jair Cabanillas Tejada",
      rifas: 1,
    },
    {
      id: 289,
      nombreCompleto: "Felix Manuel Cabanillas Linares",
      rifas: 1,
    },
    {
      id: 290,
      nombreCompleto: "Cesar Leonardo Villegas Linares",
      rifas: 1,
    },
    {
      id: 291,
      nombreCompleto: "Richard Arturo Torres Rios",
      rifas: 1,
    },
    {
      id: 292,
      nombreCompleto: "Richard Arturo Torres Rios",
      rifas: 1,
    },
    {
      id: 293,
      nombreCompleto: "Richard Arturo Torres Rios",
      rifas: 1,
    },
    {
      id: 294,
      nombreCompleto: "Richard Arturo Torres Rios",
      rifas: 1,
    },
    {
      id: 295,
      nombreCompleto: "Richard Arturo Torres Rios",
      rifas: 1,
    },
    {
      id: 296,
      nombreCompleto: "Richard Ivan Torres Rios",
      rifas: 1,
    },
    {
      id: 297,
      nombreCompleto: "Richard Ivan Torres Rios",
      rifas: 1,
    },
    {
      id: 298,
      nombreCompleto: "Richard Ivan Torres Rios",
      rifas: 1,
    },
    {
      id: 299,
      nombreCompleto: "Richard Ivan Torres Rios",
      rifas: 1,
    },
    {
      id: 300,
      nombreCompleto: "Richard Ivan Torres Rios",
      rifas: 1,
    },
    {
      id: 351,
      nombreCompleto: "Gustavo Vertiz Ramos",
      rifas: 1,
    },
    {
      id: 352,
      nombreCompleto: "Percy Llonto Cajusol",
      rifas: 1,
    },
    {
      id: 353,
      nombreCompleto: "Jair Vertiz Ramos",
      rifas: 1,
    },
    {
      id: 354,
      nombreCompleto: "Angel Sotero Paico",
      rifas: 1,
    },
    {
      id: 355,
      nombreCompleto: "Juan Carlos Quintanilla Flores",
      rifas: 1,
    },
    {
      id: 356,
      nombreCompleto: "Roberto Muñoz",
      rifas: 1,
    },
    {
      id: 357,
      nombreCompleto: "Matias Yerez",
      rifas: 1,
    },
    {
      id: 358,
      nombreCompleto: "Manel Santos Cerquen Cotrina",
      rifas: 1,
    },
    {
      id: 359,
      nombreCompleto: "Antonio Sanchez Tello",
      rifas: 1,
    },
    {
      id: 360,
      nombreCompleto: "Briella Luciana Vasquez Alvarez",
      rifas: 1,
    },
    {
      id: 361,
      nombreCompleto: "Laila Ayelen Vasquez Rojas",
      rifas: 1,
    },
    {
      id: 362,
      nombreCompleto: "Erick Matesa Quillate",
      rifas: 1,
    },
    {
      id: 363,
      nombreCompleto: "Briella Luciana Vasquez Alvarez",
      rifas: 1,
    },
    {
      id: 364,
      nombreCompleto: "Isabel Jackeline Romero Quillate",
      rifas: 1,
    },
    {
      id: 365,
      nombreCompleto: "Cecilia Leon Davalos",
      rifas: 1,
    },
    {
      id: 366,
      nombreCompleto: "Juan Pepe Ipanaque",
      rifas: 1,
    },
    {
      id: 367,
      nombreCompleto: "Francisco Cortez Rabanal",
      rifas: 1,
    },
    {
      id: 368,
      nombreCompleto: "Valeria Panduro",
      rifas: 1,
    },
    {
      id: 369,
      nombreCompleto: "Edwin Reyes Gonzales",
      rifas: 1,
    },
    {
      id: 370,
      nombreCompleto: "C Guzman y Conver Guzman",
      rifas: 1,
    },
    {
      id: 371,
      nombreCompleto: "Victor Manuel Araujo",
      rifas: 1,
    },
    {
      id: 372,
      nombreCompleto: "William Alberto Gonzales",
      rifas: 1,
    },
    {
      id: 373,
      nombreCompleto: "Doris Noemi Carbonel Yactayo",
      rifas: 1,
    },
    {
      id: 374,
      nombreCompleto: "Edwin Reyes Gonzales",
      rifas: 1,
    },
    {
      id: 375,
      nombreCompleto: "Luis Ramos Acuña",
      rifas: 1,
    },
    {
      id: 376,
      nombreCompleto: "Pepe Yaita Sanchez",
      rifas: 1,
    },
    {
      id: 377,
      nombreCompleto: "Pepe Yaita Sanchez",
      rifas: 1,
    },
    {
      id: 378,
      nombreCompleto: "Claudia Ubillus",
      rifas: 1,
    },
    {
      id: 379,
      nombreCompleto: "Pepe Yaita Sanchez",
      rifas: 1,
    },
    {
      id: 380,
      nombreCompleto: "Anacleto Carrillo Quezada",
      rifas: 1,
    },
    {
      id: 381,
      nombreCompleto: "Vanessa Gutierrez Alvarado",
      rifas: 1,
    },
    {
      id: 382,
      nombreCompleto: "Pepe Yaita Sanchez",
      rifas: 1,
    },
    {
      id: 383,
      nombreCompleto: "Abigail Pacompia",
      rifas: 1,
    },
    {
      id: 384,
      nombreCompleto: "Vanessa Alma Mauricio",
      rifas: 1,
    },
    {
      id: 385,
      nombreCompleto: "Emilse Alejandra Rivera Bazan",
      rifas: 1,
    },
    {
      id: 386,
      nombreCompleto: "Yudit Vasquez Delgado",
      rifas: 1,
    },
    {
      id: 387,
      nombreCompleto: "Magaly Vasquez Delgado",
      rifas: 1,
    },
    {
      id: 388,
      nombreCompleto: "Magdalena Serquen Fernandez",
      rifas: 1,
    },
    {
      id: 389,
      nombreCompleto: "Gonzalo Muñoz Tapia",
      rifas: 1,
    },
    {
      id: 390,
      nombreCompleto: "Esther Roman Paredes",
      rifas: 1,
    },
    {
      id: 391,
      nombreCompleto: "Elena Sabalor Rodriguez",
      rifas: 1,
    },
    {
      id: 392,
      nombreCompleto: "Dora Helda Lamus Quiedo",
      rifas: 1,
    },
    {
      id: 393,
      nombreCompleto: "Maria Del Rosario Zapata",
      rifas: 1,
    },
    {
      id: 394,
      nombreCompleto: "Maria Del Rosario Zapata",
      rifas: 1,
    },
    {
      id: 395,
      nombreCompleto: "Martha Vasquez",
      rifas: 1,
    },
    {
      id: 396,
      nombreCompleto: "Maria Del Rosario Zapata",
      rifas: 1,
    },
    {
      id: 397,
      nombreCompleto: "Martha Vasquez",
      rifas: 1,
    },
    {
      id: 398,
      nombreCompleto: "Joel Paz Anacleto",
      rifas: 1,
    },
    {
      id: 399,
      nombreCompleto: "Jose Raul Canchez Lozano",
      rifas: 1,
    },
    {
      id: 400,
      nombreCompleto: "Carmen Rodriguez Angeles",
      rifas: 1,
    },
    {
      id: 401,
      nombreCompleto: "Carlos Flores Fernandez",
      rifas: 1,
    },
    {
      id: 402,
      nombreCompleto: "Oswaldo",
      rifas: 1,
    },
    {
      id: 403,
      nombreCompleto: "Oscar Santamaria Barcos",
      rifas: 1,
    },
    {
      id: 404,
      nombreCompleto: "Luis Reaño",
      rifas: 1,
    },
    {
      id: 405,
      nombreCompleto: "Meche Palomino",
      rifas: 1,
    },
    {
      id: 406,
      nombreCompleto: "Walter Reque",
      rifas: 1,
    },
    {
      id: 407,
      nombreCompleto: "Emilio Ancon",
      rifas: 1,
    },
    {
      id: 408,
      nombreCompleto: "Segundo Muñoz",
      rifas: 1,
    },
    {
      id: 409,
      nombreCompleto: "Rafael Huandoy",
      rifas: 1,
    },
    {
      id: 410,
      nombreCompleto: "Silvia Herrera",
      rifas: 1,
    },
    {
      id: 411,
      nombreCompleto: "Ttito Campanita",
      rifas: 1,
    },
    {
      id: 412,
      nombreCompleto: "Arturo Rosas",
      rifas: 1,
    },
    {
      id: 413,
      nombreCompleto: "Arturo Rosas",
      rifas: 1,
    },
    {
      id: 414,
      nombreCompleto: "Alex Herrera",
      rifas: 1,
    },
    {
      id: 415,
      nombreCompleto: "Wilfredo Sangay Chavarri",
      rifas: 1,
    },
    {
      id: 416,
      nombreCompleto: "Norma Herrera",
      rifas: 1,
    },
    {
      id: 417,
      nombreCompleto: "Leonela Leon",
      rifas: 1,
    },
    {
      id: 418,
      nombreCompleto: "Oscar Palomino",
      rifas: 1,
    },
    {
      id: 419,
      nombreCompleto: "Brenda Palomino",
      rifas: 1,
    },
    {
      id: 420,
      nombreCompleto: "Saul Herrera Robles",
      rifas: 1,
    },
    {
      id: 421,
      nombreCompleto: "Victor ArturoGomez Tuero",
      rifas: 1,
    },
    {
      id: 422,
      nombreCompleto: "Victor ArturoGomez Tuero",
      rifas: 1,
    },
    {
      id: 423,
      nombreCompleto: "Melva Leon",
      rifas: 1,
    },
    {
      id: 424,
      nombreCompleto: "Victor ArturoGomez Tuero",
      rifas: 1,
    },
    {
      id: 425,
      nombreCompleto: "Victor ArturoGomez Tuero",
      rifas: 1,
    },
    {
      id: 426,
      nombreCompleto: "Victor ArturoGomez Tuero",
      rifas: 1,
    },
    {
      id: 427,
      nombreCompleto: "Piero Leon Castillo",
      rifas: 1,
    },
    {
      id: 428,
      nombreCompleto: "Piero Leon Castillo",
      rifas: 1,
    },
    {
      id: 429,
      nombreCompleto: "Dennys Yuly Morales Asencios",
      rifas: 1,
    },
    {
      id: 430,
      nombreCompleto: "Piero Leon Castillo",
      rifas: 1,
    },
    {
      id: 431,
      nombreCompleto: "Flor Rojas Perez",
      rifas: 1,
    },
    {
      id: 432,
      nombreCompleto: "Axel Aredondo",
      rifas: 1,
    },
    {
      id: 433,
      nombreCompleto: "Cesar Peña Pomahuacre",
      rifas: 1,
    },
    {
      id: 434,
      nombreCompleto: "Roy Oroya Ramos",
      rifas: 1,
    },
    {
      id: 435,
      nombreCompleto: "Milton Sirlupu Leon",
      rifas: 1,
    },
    {
      id: 436,
      nombreCompleto: "Wendy Vizcardo Vallejos",
      rifas: 1,
    },
    {
      id: 437,
      nombreCompleto: "Rosa Medina Palma",
      rifas: 1,
    },
    {
      id: 438,
      nombreCompleto: "Luis Carrasco Castro",
      rifas: 1,
    },
    {
      id: 439,
      nombreCompleto: "Nicoll Silva Bailon",
      rifas: 1,
    },
    {
      id: 440,
      nombreCompleto: "Villanueva",
      rifas: 1,
    },
    {
      id: 441,
      nombreCompleto: "Segundo Lino Muñoz",
      rifas: 1,
    },
    {
      id: 442,
      nombreCompleto: "Oscar Sanchez",
      rifas: 1,
    },
    {
      id: 443,
      nombreCompleto: "David Ruiz",
      rifas: 1,
    },
    {
      id: 444,
      nombreCompleto: "Roger Sanchez",
      rifas: 1,
    },
    {
      id: 445,
      nombreCompleto: "Ivan Sanches",
      rifas: 1,
    },
    {
      id: 446,
      nombreCompleto: "Julio Huaman",
      rifas: 1,
    },
    {
      id: 447,
      nombreCompleto: "Julio Gallo",
      rifas: 1,
    },
    {
      id: 448,
      nombreCompleto: "Paolo Ladera Rivas",
      rifas: 1,
    },
    {
      id: 449,
      nombreCompleto: "Adelina",
      rifas: 1,
    },
    {
      id: 450,
      nombreCompleto: "Betty Castillo Paredes",
      rifas: 1,
    },
    {
      id: 451,
      nombreCompleto: "Roberto Rodriguez Lopez",
      rifas: 1,
    },
    {
      id: 452,
      nombreCompleto: "Harumi Carera Significacion",
      rifas: 1,
    },
    {
      id: 453,
      nombreCompleto: "Enrique Delgado",
      rifas: 1,
    },
    {
      id: 454,
      nombreCompleto: "Mixi Olivares Cabanillas",
      rifas: 1,
    },
    {
      id: 455,
      nombreCompleto: "Dina Oblitas Urrutia",
      rifas: 1,
    },
    {
      id: 456,
      nombreCompleto: "Jackeline Quispe Rios",
      rifas: 1,
    },
    {
      id: 457,
      nombreCompleto: "Fabio Caballero Zumaeta",
      rifas: 1,
    },
    {
      id: 458,
      nombreCompleto: "Jarol Cotrina Ordones",
      rifas: 1,
    },
    {
      id: 459,
      nombreCompleto: "Ydalia Olivares Cabanillas",
      rifas: 1,
    },
    {
      id: 460,
      nombreCompleto: "Erick Sirlupu Leon",
      rifas: 1,
    },
    {
      id: 461,
      nombreCompleto: "Roxana Sirlupu Acuña",
      rifas: 1,
    },
    {
      id: 462,
      nombreCompleto: "Vilma Vasques Ilatoma",
      rifas: 1,
    },
    {
      id: 463,
      nombreCompleto: "Roxana Leon Albitres",
      rifas: 1,
    },
    {
      id: 464,
      nombreCompleto: "Yesdely Huaman",
      rifas: 1,
    },
    {
      id: 465,
      nombreCompleto: "Liliana Ramos Cisneros",
      rifas: 1,
    },
    {
      id: 466,
      nombreCompleto: "Liseth Alcida Cruces Salas",
      rifas: 1,
    },
    {
      id: 467,
      nombreCompleto: "Samuel Marquez Flores",
      rifas: 1,
    },
    {
      id: 468,
      nombreCompleto: "Daniela Ruiz Cienfuegos",
      rifas: 1,
    },
    {
      id: 469,
      nombreCompleto: "Camila Palomino Deza",
      rifas: 1,
    },
    {
      id: 470,
      nombreCompleto: "Arleth Principe Trejo",
      rifas: 1,
    },
    {
      id: 471,
      nombreCompleto: "Pamela Alejandra Rivas Chilet",
      rifas: 1,
    },
    {
      id: 472,
      nombreCompleto: "Alexia Trejo Leon",
      rifas: 1,
    },
    {
      id: 473,
      nombreCompleto: "Jhon Kenedi Ortiz Amado",
      rifas: 1,
    },
    {
      id: 474,
      nombreCompleto: "Carlos Giraldo",
      rifas: 1,
    },
    {
      id: 475,
      nombreCompleto: "Jorge Luis Guerreros",
      rifas: 1,
    },
    {
      id: 476,
      nombreCompleto: "Ares Nieto Blas",
      rifas: 1,
    },
    {
      id: 477,
      nombreCompleto: "Alessandro Trejo Leon",
      rifas: 1,
    },
    {
      id: 478,
      nombreCompleto: "Abel Trejo Colmenares",
      rifas: 1,
    },
    {
      id: 479,
      nombreCompleto: "Maria Veronica Gallardo Gratero",
      rifas: 1,
    },
    {
      id: 480,
      nombreCompleto: "Alex Firel Sanchez",
      rifas: 1,
    },
    {
      id: 481,
      nombreCompleto: "Alexander Kevin Ramirez Trejo",
      rifas: 1,
    },
    {
      id: 482,
      nombreCompleto: "Jose Andres Roca Martinez",
      rifas: 1,
    },
    {
      id: 483,
      nombreCompleto: "Renato Espinoza Carlos",
      rifas: 1,
    },
    {
      id: 484,
      nombreCompleto: "Junior Rios Francisco",
      rifas: 1,
    },
    {
      id: 485,
      nombreCompleto: "Fleming Ramirez Trejo",
      rifas: 1,
    },
    {
      id: 486,
      nombreCompleto: "Fleming Ramirez Trejo",
      rifas: 1,
    },
    {
      id: 487,
      nombreCompleto: "Milton Calderon Retamozo",
      rifas: 1,
    },
    {
      id: 488,
      nombreCompleto: "Milagros Ramos",
      rifas: 1,
    },
    {
      id: 489,
      nombreCompleto: "Eduar Soiesura",
      rifas: 1,
    },
    {
      id: 490,
      nombreCompleto: "Faustino Estrada",
      rifas: 1,
    },
    {
      id: 491,
      nombreCompleto: "Lito Pinehi Chota",
      rifas: 1,
    },
    {
      id: 492,
      nombreCompleto: "Luis Silva Sanchez",
      rifas: 1,
    },
    {
      id: 493,
      nombreCompleto: "Jaime Ramos Aquino",
      rifas: 1,
    },
    {
      id: 494,
      nombreCompleto: "Julio Olivera",
      rifas: 1,
    },
    {
      id: 495,
      nombreCompleto: "Eliz TanTalean",
      rifas: 1,
    },
    {
      id: 496,
      nombreCompleto: "Alison Yuleysy Castillo Mayta",
      rifas: 1,
    },
    {
      id: 497,
      nombreCompleto: "Enrique Salvatierra",
      rifas: 1,
    },
    {
      id: 498,
      nombreCompleto: "Maria Fernanda Wong Romero",
      rifas: 1,
    },
    {
      id: 499,
      nombreCompleto: "Christian Lopez Peralta",
      rifas: 1,
    },
    {
      id: 500,
      nombreCompleto: "Christian Lopez Peralta",
      rifas: 1,
    },
    {
      id: 501,
      nombreCompleto: "Deysi Caceres",
      rifas: 1,
    },
    {
      id: 502,
      nombreCompleto: "Juan Carlos",
      rifas: 1,
    },
    {
      id: 503,
      nombreCompleto: "Angeles Ramos",
      rifas: 1,
    },
    {
      id: 504,
      nombreCompleto: "Alejandro Martin Ñunez Fajardo",
      rifas: 1,
    },
    {
      id: 505,
      nombreCompleto: "Elizabeth Estefania Lopez Chavez",
      rifas: 1,
    },
    {
      id: 506,
      nombreCompleto: "Elizabeth Estefania Lopez Chavez",
      rifas: 1,
    },
    {
      id: 507,
      nombreCompleto: "Elizabeth Estefania Lopez Chavez",
      rifas: 1,
    },
    {
      id: 508,
      nombreCompleto: "Elizabeth Estefania Lopez Chavez",
      rifas: 1,
    },
    {
      id: 509,
      nombreCompleto: "Elizabeth Estefania Lopez Chavez",
      rifas: 1,
    },
    {
      id: 510,
      nombreCompleto: "Felix Yarasca",
      rifas: 1,
    },
    {
      id: 511,
      nombreCompleto: "Felix Yarasca",
      rifas: 1,
    },
    {
      id: 512,
      nombreCompleto: "Felix Yarasca",
      rifas: 1,
    },
    {
      id: 513,
      nombreCompleto: "Carmen Rosa Yarleque Chero",
      rifas: 1,
    },
    {
      id: 514,
      nombreCompleto: "Carmen Rosa Yarleque Chero",
      rifas: 1,
    },
    {
      id: 515,
      nombreCompleto: "Elizabeth Merari Castillo Haro",
      rifas: 1,
    },
    {
      id: 516,
      nombreCompleto: "Elizabeth Merari Castillo Haro",
      rifas: 1,
    },
    {
      id: 517,
      nombreCompleto: "Luz Zena Salazar",
      rifas: 1,
    },
    {
      id: 518,
      nombreCompleto: "Miguel Garro Salazar",
      rifas: 1,
    },
    {
      id: 519,
      nombreCompleto: "Judith Chinchayhuara Ruiz",
      rifas: 1,
    },
    {
      id: 520,
      nombreCompleto: "Pablo Lopez Chavez",
      rifas: 1,
    },
    {
      id: 521,
      nombreCompleto: "Lucas Alejandro Correa Quiroz",
      rifas: 1,
    },
    {
      id: 522,
      nombreCompleto: "Rosa Elena Marquez Fajardo*",
      rifas: 1,
    },
    {
      id: 523,
      nombreCompleto: "Emestina Toledo de Alamo",
      rifas: 1,
    },
    {
      id: 524,
      nombreCompleto: "Adriano Valladares",
      rifas: 1,
    },
    {
      id: 525,
      nombreCompleto: "Emilith Valladares",
      rifas: 1,
    },
    {
      id: 526,
      nombreCompleto: "Francisco Tomas Guevara Gamez",
      rifas: 1,
    },
    {
      id: 527,
      nombreCompleto: "Jose Alejandro Palacios Mesa",
      rifas: 1,
    },
    {
      id: 528,
      nombreCompleto: "Jose Alejandro Palacios Mesa",
      rifas: 1,
    },
    {
      id: 529,
      nombreCompleto: "Marco Alejandro Ramos",
      rifas: 1,
    },
    {
      id: 530,
      nombreCompleto: "Flores Chavez",
      rifas: 1,
    },
    {
      id: 531,
      nombreCompleto: "Niley Revilla",
      rifas: 1,
    },
    {
      id: 532,
      nombreCompleto: "Yimi",
      rifas: 1,
    },
    {
      id: 533,
      nombreCompleto: "Tamara Moore Ramos",
      rifas: 1,
    },
    {
      id: 534,
      nombreCompleto: "Adriano Mendoza",
      rifas: 1,
    },
    {
      id: 535,
      nombreCompleto: "Lionel Tapia",
      rifas: 1,
    },
    {
      id: 536,
      nombreCompleto: "Aura",
      rifas: 1,
    },
    {
      id: 537,
      nombreCompleto: "Nasielk Palicios",
      rifas: 1,
    },
    {
      id: 538,
      nombreCompleto: "Milan Llorente",
      rifas: 1,
    },
    {
      id: 539,
      nombreCompleto: "Reyth Robert Palacios",
      rifas: 1,
    },
    {
      id: 540,
      nombreCompleto: "Solgne Llorante",
      rifas: 1,
    },
    {
      id: 541,
      nombreCompleto: "Ivan Llorente",
      rifas: 1,
    },
    {
      id: 542,
      nombreCompleto: "Masielk Palacios",
      rifas: 1,
    },
    {
      id: 543,
      nombreCompleto: "Flor Angela Ryes Fabian",
      rifas: 1,
    },
    {
      id: 544,
      nombreCompleto: "Marco Llorente",
      rifas: 1,
    },
    {
      id: 545,
      nombreCompleto: "Felicita Muñoz",
      rifas: 1,
    },
    {
      id: 546,
      nombreCompleto: "Kevin Rojas Apaza",
      rifas: 1,
    },
    {
      id: 547,
      nombreCompleto: "Jose Walter Chapoñan Albarran",
      rifas: 1,
    },
    {
      id: 548,
      nombreCompleto: "Jorge Chicoma Bravo",
      rifas: 1,
    },
    {
      id: 549,
      nombreCompleto: "Pascual Arellano Osorio",
      rifas: 1,
    },
    {
      id: 550,
      nombreCompleto: "Pascual Arellano Osorio",
      rifas: 1,
    },
    {
      id: 551,
      nombreCompleto: "Arnaldo Soplapuco Esteia",
      rifas: 1,
    },
    {
      id: 552,
      nombreCompleto: "Lena Garcia",
      rifas: 1,
    },
    {
      id: 553,
      nombreCompleto: "Lena Garcia",
      rifas: 1,
    },
    {
      id: 554,
      nombreCompleto: "Wilmer Soplapuco Sosa",
      rifas: 1,
    },
    {
      id: 555,
      nombreCompleto: "Denis Alarcon",
      rifas: 1,
    },
    {
      id: 556,
      nombreCompleto: "Melva Sanchez",
      rifas: 1,
    },
    {
      id: 557,
      nombreCompleto: "Melva Sanchez",
      rifas: 1,
    },
    {
      id: 558,
      nombreCompleto: "Gilmer Oscanoa Coronado",
      rifas: 1,
    },
    {
      id: 559,
      nombreCompleto: "Diego Sanchez",
      rifas: 1,
    },
    {
      id: 560,
      nombreCompleto: "Carlos Miguel Aquino Valverde",
      rifas: 1,
    },
    {
      id: 561,
      nombreCompleto: "Rosmeri Tuero Torres",
      rifas: 1,
    },
    {
      id: 562,
      nombreCompleto: "Jessica Gomez Tuero",
      rifas: 1,
    },
    {
      id: 563,
      nombreCompleto: "Valentina Collazos",
      rifas: 1,
    },
    {
      id: 564,
      nombreCompleto: "Cecilio Barreto",
      rifas: 1,
    },
    {
      id: 565,
      nombreCompleto: "Victoria Rivas Insapillo",
      rifas: 1,
    },
    {
      id: 566,
      nombreCompleto: "Daniel Rios Perez",
      rifas: 1,
    },
    {
      id: 567,
      nombreCompleto: "Juan Trujillo Jurado",
      rifas: 1,
    },
    {
      id: 568,
      nombreCompleto: "Emilyth Perez Chufandama",
      rifas: 1,
    },
    {
      id: 569,
      nombreCompleto: "Esther Rios Perez",
      rifas: 1,
    },
    {
      id: 570,
      nombreCompleto: "Luciana Trujillo Perez",
      rifas: 1,
    },
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
    setData([
      { id: 1, nombresCompletos: "Anyu Francesca Alejandria Solari", rifas: 1 },
      { id: 2, nombresCompletos: "Daniel Alberto Cardenas Perez", rifas: 1 },
      { id: 3, nombresCompletos: "Candy Loriet Zegarra Castillo", rifas: 1 },
      { id: 4, nombresCompletos: "George Antony Garcia Congona", rifas: 1 },
      {
        id: 5,
        nombresCompletos: "Yovana Milagros Montesinos Ortega",
        rifas: 1,
      },
      { id: 6, nombresCompletos: "Adrian Nicolas Melendez", rifas: 1 },
      { id: 7, nombresCompletos: "Martina Chinchay Ticliahuanca", rifas: 1 },
      { id: 8, nombresCompletos: "Itamar Solano Huertas", rifas: 1 },
      { id: 9, nombresCompletos: "Naomi Vasquez Aquino", rifas: 1 },
      { id: 10, nombresCompletos: "Juan Francisco Taipe Rojas", rifas: 1 },
      { id: 11, nombresCompletos: "Ercida Rosa Roncal Segura", rifas: 1 },
      { id: 12, nombresCompletos: "Ercida Rosa Roncal Segura", rifas: 1 },
      { id: 13, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
      { id: 14, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
      { id: 15, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
      { id: 16, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
      { id: 17, nombresCompletos: "Edwin Roberto Guerrero Merino", rifas: 1 },
      { id: 18, nombresCompletos: "Karla Calderon Retamozo", rifas: 1 },
      {
        id: 19,
        nombresCompletos: "Jovita Ysidora Gutierrez Barreto",
        rifas: 1,
      },
      { id: 20, nombresCompletos: "Bertha Maritza Rojas Mostacero", rifas: 1 },
      { id: 21, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
      { id: 22, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
      { id: 23, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
      { id: 24, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
      { id: 25, nombresCompletos: "(Cesar) Edmundo Calderon Perez", rifas: 1 },
      { id: 26, nombresCompletos: "Hector Armando Enciso Vera", rifas: 1 },
      { id: 27, nombresCompletos: "Raffo Gomez Falcon", rifas: 1 },
      { id: 28, nombresCompletos: "Mariel Barreros M*", rifas: 1 },
      {
        id: 29,
        nombresCompletos: "Danitza Alexandra Bedoya Ferrer*",
        rifas: 1,
      },
      { id: 30, nombresCompletos: "Abel Garay Torres *", rifas: 1 },
      { id: 31, nombresCompletos: "Mayra Azucena Mattos*", rifas: 1 },
      { id: 32, nombresCompletos: "Adderly Limber Alejos Ñivin*", rifas: 1 },
      { id: 33, nombresCompletos: "Adderly Limber Alejos Ñivin*", rifas: 1 },
      { id: 34, nombresCompletos: "Rosa Elena Marquez Fajardo*", rifas: 1 },
      { id: 35, nombresCompletos: "Anthony Carlos Vera*", rifas: 1 },
      { id: 36, nombresCompletos: "Anthony Carlos Vera*", rifas: 1 },
      { id: 37, nombresCompletos: "Anthony Carlos Vera*", rifas: 1 },
      { id: 38, nombresCompletos: "Marivel Mejia Campos*", rifas: 1 },
      { id: 39, nombresCompletos: "Marivel Mejia Campos*", rifas: 1 },
      { id: 40, nombresCompletos: "Martha Vasquez Miñano*", rifas: 1 },
      { id: 41, nombresCompletos: "Shadia Abushaibe Thride*", rifas: 1 },
      { id: 42, nombresCompletos: "Shadia Abushaibe Thride*", rifas: 1 },
      { id: 43, nombresCompletos: "Irma Ninaquispe Terrones*", rifas: 1 },
      { id: 44, nombresCompletos: "Ruben Dario Romero Meza*", rifas: 1 },
      { id: 45, nombresCompletos: "Ruben Dario Romero Meza*", rifas: 1 },
      { id: 46, nombresCompletos: "Ruben Dario Romero Meza*", rifas: 1 },
      { id: 47, nombresCompletos: "Ruben Dario Romero Meza*", rifas: 1 },
      { id: 48, nombresCompletos: "Henry Salas*", rifas: 1 },
      { id: 49, nombresCompletos: "Henry Salas*", rifas: 1 },
      { id: 50, nombresCompletos: "Jazzmin Cabrera Acosta*", rifas: 1 },
      { id: 51, nombresCompletos: "Jazzmin Cabrera Acosta*", rifas: 1 },
      { id: 52, nombresCompletos: "Jazzmin Cabrera Acosta*", rifas: 1 },
      { id: 53, nombresCompletos: "Sonia Garcia *", rifas: 1 },
      { id: 54, nombresCompletos: "Genesis Dubraska Serrano*", rifas: 1 },
      { id: 55, nombresCompletos: "Victor Martinez*", rifas: 1 },
      { id: 56, nombresCompletos: "Nancy Garay Torres", rifas: 1 },
      { id: 57, nombresCompletos: "Jennifer Yahuarcani Ahuanari", rifas: 1 },
      { id: 58, nombresCompletos: "Veronica Pozo Palacios", rifas: 1 },
      { id: 59, nombresCompletos: "William Llacsa Romero", rifas: 1 },
      { id: 60, nombresCompletos: "Isaac Caballero Casanova", rifas: 1 },
      { id: 61, nombresCompletos: "Isaac Caballero Casanova", rifas: 1 },
      { id: 62, nombresCompletos: "Lidia Garay Garay", rifas: 1 },
      { id: 63, nombresCompletos: "Cesar Augusto Ramirez Estre", rifas: 1 },
      {
        id: 64,
        nombresCompletos: "Estefania Lizeth Jauregui Contreras",
        rifas: 1,
      },
      { id: 65, nombresCompletos: "Josue Alexander Fenco Bazan", rifas: 1 },
      { id: 66, nombresCompletos: "Stephania Briceño Marin", rifas: 1 },
      { id: 67, nombresCompletos: "Stephania Briceño Marin", rifas: 1 },
      { id: 68, nombresCompletos: "Jose Adalberto Guerrero Romero", rifas: 1 },
      {
        id: 69,
        nombresCompletos: "Marieta Luisa De La Cruz Jamanca",
        rifas: 1,
      },
      {
        id: 70,
        nombresCompletos: "Vannesa De Jesus Rodriguez Guerra",
        rifas: 1,
      },
      { id: 71, nombresCompletos: "Deny Manuel Ramirez Torre", rifas: 1 },
      { id: 72, nombresCompletos: "Deny Manuel Ramirez Torre", rifas: 1 },
      { id: 73, nombresCompletos: "Fiorella Amparo Lopez Zuñiga", rifas: 1 },
      { id: 74, nombresCompletos: "Frank Jesus Romero Olortegui", rifas: 1 },
      { id: 75, nombresCompletos: "Frank Jesus Romero Olortegui", rifas: 1 },
      { id: 76, nombresCompletos: "Marlith Romero Olortegui", rifas: 1 },
      { id: 77, nombresCompletos: "Marlith Romero Olortegui", rifas: 1 },
      { id: 78, nombresCompletos: "Lidia Olortegui Chiriboga", rifas: 1 },
      { id: 79, nombresCompletos: "Elida Chacon Barroz", rifas: 1 },
      { id: 80, nombresCompletos: "Noemi Saavedra Lopez", rifas: 1 },
      { id: 81, nombresCompletos: "Emma Quispe Quiroz", rifas: 1 },
      { id: 82, nombresCompletos: "Fernando Guerrero Quispe", rifas: 1 },
      { id: 83, nombresCompletos: "Abigail Guerrero Quispe", rifas: 1 },
      { id: 84, nombresCompletos: "Jhon Elvis Vela Casternoque", rifas: 1 },
      { id: 85, nombresCompletos: "Santos Alexander Abad Paredes", rifas: 1 },
      { id: 86, nombresCompletos: "Heraldo Yamiro Yanac Salazar", rifas: 1 },
      { id: 87, nombresCompletos: "Edgardo Luis Peña Camargo", rifas: 1 },
      { id: 88, nombresCompletos: "Edgardo Luis Peña Camargo", rifas: 1 },
      { id: 89, nombresCompletos: "Heraldo Yamiro Yanac Salazar", rifas: 1 },
      { id: 90, nombresCompletos: "Heraldo Yamiro Yanac Salazar", rifas: 1 },
      { id: 91, nombresCompletos: "Olga Eulogia Garro Figueroa", rifas: 1 },
      { id: 92, nombresCompletos: "Shirley Deysi Norabuena Garro", rifas: 1 },
      { id: 93, nombresCompletos: "Elsa Cecilia Ramos Munante", rifas: 1 },
      { id: 94, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
      { id: 95, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
      { id: 96, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
      { id: 97, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
      { id: 98, nombresCompletos: "Nancy Lodris Perez Villa", rifas: 1 },
      { id: 99, nombresCompletos: "Celeste Guerrero Angaspilco", rifas: 1 },
      { id: 100, nombresCompletos: "Owen Guerrero Angaspilco", rifas: 1 },
      { id: 101, nombresCompletos: "Carmen Angaspilco Terrones", rifas: 1 },
      { id: 102, nombresCompletos: "Celeste Guerrero Angaspilco", rifas: 1 },
      { id: 103, nombresCompletos: "Owen Guerrero Angaspilco", rifas: 1 },
      { id: 104, nombresCompletos: "Jennifer Guerrero De La Cruz", rifas: 1 },
      { id: 105, nombresCompletos: "Angelina Guerrero De La Cruz", rifas: 1 },
      { id: 106, nombresCompletos: "Edgar Vallejo Victorio", rifas: 1 },
      { id: 107, nombresCompletos: "Brighied Dabne Granados Mejia", rifas: 1 },
      { id: 108, nombresCompletos: "Brighied Dabne Granados Mejia", rifas: 1 },
      { id: 109, nombresCompletos: "Shirly Shanned Mujica Torres", rifas: 1 },
      { id: 110, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
      { id: 111, nombresCompletos: "Massimo Romero Salazar", rifas: 1 },
      { id: 112, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
      { id: 113, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
      { id: 114, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
      { id: 115, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
      { id: 116, nombresCompletos: "Massimo Romero Salazar", rifas: 1 },
      { id: 117, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
      { id: 118, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
      { id: 119, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
      { id: 120, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
      { id: 121, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
      { id: 122, nombresCompletos: "Jorge Romero Meza", rifas: 1 },
      { id: 123, nombresCompletos: "Massimo Romero Salazar", rifas: 1 },
      { id: 124, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
      { id: 125, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
      { id: 126, nombresCompletos: "Massimo Romero Salazar", rifas: 1 },
      { id: 127, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
      { id: 128, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
      { id: 129, nombresCompletos: "Carla Salazar Muzayon", rifas: 1 },
      { id: 130, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
      { id: 131, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
      { id: 132, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
      { id: 133, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
      { id: 134, nombresCompletos: "Xiomara Esmit Perez Vasquez", rifas: 1 },
      { id: 135, nombresCompletos: "Jaime Johon Quiroz Rodriguez", rifas: 1 },
      { id: 136, nombresCompletos: "Jaime Johon Quiroz Rodriguez", rifas: 1 },
      { id: 137, nombresCompletos: "Paty Sandoval Mamani", rifas: 1 },
      { id: 138, nombresCompletos: "Elisabeth Marina Leon Ortega", rifas: 1 },
      { id: 139, nombresCompletos: "Jhon Ronald Huamani Leon", rifas: 1 },
      { id: 140, nombresCompletos: "Maria Isabel Caldas Anco", rifas: 1 },
      {
        id: 141,
        nombresCompletos: "Yolanda Gloria Galindo Hinostroza",
        rifas: 1,
      },
      { id: 142, nombresCompletos: "Guisela Magaly Granados Mejia", rifas: 1 },
      {
        id: 143,
        nombresCompletos: "Edgar Jeanpierre Vallejos Granados",
        rifas: 1,
      },
      {
        id: 144,
        nombresCompletos: "Elizabeth Martha Granados Mejia",
        rifas: 1,
      },
      { id: 145, nombresCompletos: "Charo Chocos Camargo", rifas: 1 },
      { id: 146, nombresCompletos: "Marisa Romero Zambrano", rifas: 1 },
      { id: 147, nombresCompletos: "Maximiliana Sotelo Pahuara", rifas: 1 },
      { id: 148, nombresCompletos: "Marilu Roxani Arroyo Alata", rifas: 1 },
      { id: 149, nombresCompletos: "Rony Carhuancho Guzman", rifas: 1 },
      { id: 150, nombresCompletos: "Wendy Garcia Noel", rifas: 1 },
      { id: 151, nombresCompletos: "Raul Carhuas Berrocal", rifas: 1 },
      { id: 152, nombresCompletos: "Jose Gerardo Jacinto Vargas", rifas: 1 },
      { id: 153, nombresCompletos: "Juan Luis Jacinto Vargas", rifas: 1 },
      { id: 154, nombresCompletos: "Jose Anthony Caceres Real", rifas: 1 },
      { id: 155, nombresCompletos: "Juana Rosa Saldaña Saavedra", rifas: 1 },
      { id: 156, nombresCompletos: "Eddy Marco Benito Villega", rifas: 1 },
      {
        id: 157,
        nombresCompletos: "Sara Pérez Valdivia De Trujillo",
        rifas: 1,
      },
      { id: 158, nombresCompletos: "Luciana Trujillo Perez", rifas: 1 },
      { id: 159, nombresCompletos: "Ariana Danitza Palomino Ibañez", rifas: 1 },
      { id: 160, nombresCompletos: "Mercedes Nancy Telles Salas", rifas: 1 },
      { id: 161, nombresCompletos: "Lizardo Juan Trujillo Jurado", rifas: 1 },
      { id: 162, nombresCompletos: "Emilith Perez Chufandama", rifas: 1 },
      { id: 163, nombresCompletos: "Luis Alberto Yabar Vargas", rifas: 1 },
      { id: 164, nombresCompletos: "Lurdes Garay Torres", rifas: 1 },
      { id: 165, nombresCompletos: "Jeremi Maycelo Davila Palomino", rifas: 1 },
      { id: 166, nombresCompletos: "Margarita Silva Litano", rifas: 1 },
      { id: 167, nombresCompletos: "Margarita Silva Litano", rifas: 1 },
      { id: 168, nombresCompletos: "Rosa Milagros Acosta Enciso", rifas: 1 },
      { id: 169, nombresCompletos: "Iker Gael Taboada Intride", rifas: 1 },
      { id: 170, nombresCompletos: "Julio Guillermo Joaquin Matt", rifas: 1 },
      { id: 171, nombresCompletos: "Gary Drivis Labrador", rifas: 1 },
      { id: 172, nombresCompletos: "Neyser Antonio Obando Tinoco", rifas: 1 },
      { id: 173, nombresCompletos: "Sheila Karina Chavez Gutierrez", rifas: 1 },
      { id: 174, nombresCompletos: "Sheila Karina Chavez Gutierrez", rifas: 1 },
      { id: 175, nombresCompletos: "Diana Bustinza Farfan", rifas: 1 },
      { id: 176, nombresCompletos: "Jenny Goicochea Perales", rifas: 1 },
      { id: 177, nombresCompletos: "Damaris Cunya Gomez", rifas: 1 },
      { id: 178, nombresCompletos: "Sarita Fernandez Dominguez", rifas: 1 },
      { id: 179, nombresCompletos: "Samuel Valera Bardales", rifas: 1 },
      { id: 180, nombresCompletos: "Margarita Guerra P.", rifas: 1 },
      { id: 181, nombresCompletos: "Florencio Huacabilla Yanayaco", rifas: 1 },
      { id: 182, nombresCompletos: "Baruc Joaquin Garcia", rifas: 1 },
      { id: 183, nombresCompletos: "Roberto Tomas Mego Zevallos", rifas: 1 },
      { id: 184, nombresCompletos: "Alessandra Mego Rodriguez", rifas: 1 },
      { id: 185, nombresCompletos: "Fernando Isaias Mego Hizo", rifas: 1 },
      { id: 186, nombresCompletos: "Jose Mario Mego Zevallos", rifas: 1 },
      { id: 187, nombresCompletos: "Lenin Cabanillas Suarez", rifas: 1 },
      { id: 188, nombresCompletos: "Cristopher Omar Peña Camargo", rifas: 1 },
      {
        id: 189,
        nombresCompletos: "Maciel Maciel Manrique Olivares",
        rifas: 1,
      },
      { id: 190, nombresCompletos: "Jorge Briceño Vidaurre", rifas: 1 },
      { id: 191, nombresCompletos: "Dina Rodriguez Vasquez", rifas: 1 },
      { id: 192, nombresCompletos: "Maria Elena Zapata De Abarca", rifas: 1 },
      { id: 193, nombresCompletos: "Violeta Garay Torres", rifas: 1 },
      { id: 194, nombresCompletos: "Jose Eduardo Mejia Laos", rifas: 1 },
      { id: 195, nombresCompletos: "Jair Esteban Aquije Leon", rifas: 1 },
      { id: 196, nombresCompletos: "Wilmer Lucano Rojas", rifas: 1 },
      { id: 197, nombresCompletos: "Dela Salcedo Salazar", rifas: 1 },
      { id: 198, nombresCompletos: "Susana Valera Bardales", rifas: 1 },
      { id: 199, nombresCompletos: "Wilder Augusto Navarro Dioses", rifas: 1 },
      { id: 200, nombresCompletos: "Brighied Dabne Granados Mejia", rifas: 1 },
      {
        id: 201,
        nombreCompleto: "Luis Angel Saavedra Mejia",
        rifas: 1,
      },
      {
        id: 202,
        nombreCompleto: "Horacio Cachay Huaman",
        rifas: 1,
      },
      {
        id: 203,
        nombreCompleto: "Max Jhonatan Navarro Alvarado",
        rifas: 1,
      },
      {
        id: 204,
        nombreCompleto: "Geivy Margot Grandes Gomez",
        rifas: 1,
      },
      {
        id: 205,
        nombreCompleto: "Jesus Hernandez Linares",
        rifas: 1,
      },
      {
        id: 206,
        nombreCompleto: "Isamar Rivera Montalban",
        rifas: 1,
      },
      {
        id: 207,
        nombreCompleto: "Cubillas Candela Delia Dina",
        rifas: 1,
      },
      {
        id: 208,
        nombreCompleto: "Candela Campos Katherine",
        rifas: 1,
      },
      {
        id: 209,
        nombreCompleto: "Jhon Roberth Vasquez Candela",
        rifas: 1,
      },
      {
        id: 210,
        nombreCompleto: "Lorena Maldonado Candela",
        rifas: 1,
      },
      {
        id: 211,
        nombreCompleto: "Flora Candela Cubillas",
        rifas: 1,
      },
      {
        id: 212,
        nombreCompleto: "Alonso Candela Maldonado",
        rifas: 1,
      },
      {
        id: 213,
        nombreCompleto: "Luz Candela Cubillas",
        rifas: 1,
      },
      {
        id: 214,
        nombreCompleto: "Fernando Candela Maldonado",
        rifas: 1,
      },
      {
        id: 215,
        nombreCompleto: "Felicia Campos Vda. De Candela",
        rifas: 1,
      },
      {
        id: 216,
        nombreCompleto: "Felicia Campos Vda. De Candela",
        rifas: 1,
      },
      {
        id: 217,
        nombreCompleto: "Victoria Candela Cubillas",
        rifas: 1,
      },
      {
        id: 218,
        nombreCompleto: "Clorinda Candela Cubillas",
        rifas: 1,
      },
      {
        id: 219,
        nombreCompleto: "Jorge Candela Cubillas",
        rifas: 1,
      },
      {
        id: 220,
        nombreCompleto: "Jhosep Candela Sanchez",
        rifas: 1,
      },
      {
        id: 221,
        nombreCompleto: "Francisco Calixto Terrones",
        rifas: 1,
      },
      {
        id: 222,
        nombreCompleto: "Madeleine Condor Maguiña",
        rifas: 1,
      },
      {
        id: 223,
        nombreCompleto: "Alex Estares Aliaga",
        rifas: 1,
      },
      {
        id: 224,
        nombreCompleto: "Aida Valderrama Ykeda",
        rifas: 1,
      },
      {
        id: 225,
        nombreCompleto: "Erika Zamora De La Cruz",
        rifas: 1,
      },
      {
        id: 226,
        nombreCompleto: "Mery Candela Campos",
        rifas: 1,
      },
      {
        id: 227,
        nombreCompleto: "Lucero Piminchumo",
        rifas: 1,
      },
      {
        id: 228,
        nombreCompleto: "Rodrigo Reyna",
        rifas: 1,
      },
      {
        id: 229,
        nombreCompleto: "Luan Keylor Altamirano",
        rifas: 1,
      },
      {
        id: 230,
        nombreCompleto: "Zhoemy Montenegro Candela",
        rifas: 1,
      },
      {
        id: 231,
        nombreCompleto: "Nayla Montenegro Candela",
        rifas: 1,
      },
      {
        id: 232,
        nombreCompleto: "Zhoemy Montenegro Candela",
        rifas: 1,
      },
      {
        id: 233,
        nombreCompleto: "Nayla Montenegro Candela",
        rifas: 1,
      },
      {
        id: 234,
        nombreCompleto: "Zhoemy Montenegro Candela",
        rifas: 1,
      },
      {
        id: 235,
        nombreCompleto: "Nayla Montenegro Candela",
        rifas: 1,
      },
      {
        id: 236,
        nombreCompleto: "Zhoemy Montenegro Candela",
        rifas: 1,
      },
      {
        id: 237,
        nombreCompleto: "Nayla Montenegro Candela",
        rifas: 1,
      },
      {
        id: 238,
        nombreCompleto: "Zhoemy Montenegro Candela",
        rifas: 1,
      },
      {
        id: 239,
        nombreCompleto: "Nayla Montenegro Candela",
        rifas: 1,
      },
      {
        id: 240,
        nombreCompleto: "Eliana Guzman",
        rifas: 1,
      },
      {
        id: 241,
        nombreCompleto: "James Candela Sanchez",
        rifas: 1,
      },
      {
        id: 242,
        nombreCompleto: "Akemy Vasquez Guzman",
        rifas: 1,
      },
      {
        id: 243,
        nombreCompleto: "Karin Pumarica",
        rifas: 1,
      },
      {
        id: 244,
        nombreCompleto: "Nayla Montenegro Candela",
        rifas: 1,
      },
      {
        id: 245,
        nombreCompleto: "Fany Quisae Nieto",
        rifas: 1,
      },
      {
        id: 246,
        nombreCompleto: "Eliana Guzman",
        rifas: 1,
      },
      {
        id: 247,
        nombreCompleto: "Rosa Condori Enriquez",
        rifas: 1,
      },
      {
        id: 248,
        nombreCompleto: "Jimena Candela Sanchez",
        rifas: 1,
      },
      {
        id: 249,
        nombreCompleto: "Valeria Calixto Suarez",
        rifas: 1,
      },
      {
        id: 250,
        nombreCompleto: "Ana Maria Rojas Tejeira",
        rifas: 1,
      },
      {
        id: 251,
        nombreCompleto: "Leonor Guerrero Meza",
        rifas: 1,
      },
      {
        id: 252,
        nombreCompleto: "Elizabeth Zea Luna",
        rifas: 1,
      },
      {
        id: 253,
        nombreCompleto: "Fabio Garay Torres",
        rifas: 1,
      },
      {
        id: 254,
        nombreCompleto: "Fabio Garay Torres",
        rifas: 1,
      },
      {
        id: 255,
        nombreCompleto: "Kaoru Mendoza Huamani",
        rifas: 1,
      },
      {
        id: 256,
        nombreCompleto: "Elias Garay Torres",
        rifas: 1,
      },
      {
        id: 257,
        nombreCompleto: "Yolanda Valverde Vara",
        rifas: 1,
      },
      {
        id: 258,
        nombreCompleto: "Miguel Duran Vasquez",
        rifas: 1,
      },
      {
        id: 259,
        nombreCompleto: "Yolanda Luz Camargo Concha",
        rifas: 1,
      },
      {
        id: 260,
        nombreCompleto: "Merlyng Ortiz-",
        rifas: 1,
      },
      {
        id: 261,
        nombreCompleto: "Jose Castro-",
        rifas: 1,
      },
      {
        id: 262,
        nombreCompleto: "Jose Camacho-",
        rifas: 1,
      },
      {
        id: 263,
        nombreCompleto: "Junior Viera Chambergo-",
        rifas: 1,
      },
      {
        id: 264,
        nombreCompleto: "Leoncio Alarcon Machuca-",
        rifas: 1,
      },
      {
        id: 265,
        nombreCompleto: "Alex Corzo Bocanegra-",
        rifas: 1,
      },
      {
        id: 266,
        nombreCompleto: "Kevin Javier R. Jaspe",
        rifas: 1,
      },
      {
        id: 267,
        nombreCompleto: "Liam Alarcon Corzo-",
        rifas: 1,
      },
      {
        id: 268,
        nombreCompleto: "Cesar Muñoz Damian-",
        rifas: 1,
      },
      {
        id: 269,
        nombreCompleto: "Victor Vicenth Gomez-",
        rifas: 1,
      },
      {
        id: 270,
        nombreCompleto: "Angelina Collado Rojas-",
        rifas: 1,
      },
      {
        id: 271,
        nombreCompleto: "Jhony Lopez-",
        rifas: 1,
      },
      {
        id: 272,
        nombreCompleto: "Teofilo Sanchez Duran-",
        rifas: 1,
      },
      {
        id: 273,
        nombreCompleto: "Pedro Calongo-",
        rifas: 1,
      },
      {
        id: 274,
        nombreCompleto: "Miguel Angel Fernandez Sarra-",
        rifas: 1,
      },
      {
        id: 275,
        nombreCompleto: "Jaime Fernandez Malque-",
        rifas: 1,
      },
      {
        id: 276,
        nombreCompleto: "Mario Melendez",
        rifas: 1,
      },
      {
        id: 277,
        nombreCompleto: "Sergio Palacios Pajuelo-",
        rifas: 1,
      },
      {
        id: 278,
        nombreCompleto: "Wetty Contreras Fabian-",
        rifas: 1,
      },
      {
        id: 279,
        nombreCompleto: "Manuel Eduardo Bazalar-",
        rifas: 1,
      },
      {
        id: 280,
        nombreCompleto: "Jhon Juarez-",
        rifas: 1,
      },
      {
        id: 281,
        nombreCompleto: "Rosa Enrique Vidal-",
        rifas: 1,
      },
      {
        id: 282,
        nombreCompleto: "Johan Pizarro Enrique-",
        rifas: 1,
      },
      {
        id: 283,
        nombreCompleto: "Edde Davila Enrique-",
        rifas: 1,
      },
      {
        id: 284,
        nombreCompleto: "Pedro Paredes-",
        rifas: 1,
      },
      {
        id: 285,
        nombreCompleto: "Hector Perez Albarran",
        rifas: 1,
      },
      {
        id: 286,
        nombreCompleto: "Andres Leon Albitres",
        rifas: 1,
      },
      {
        id: 287,
        nombreCompleto: "Synthya Aracelly Linares Condor",
        rifas: 1,
      },
      {
        id: 288,
        nombreCompleto: "Jair Cabanillas Tejada",
        rifas: 1,
      },
      {
        id: 289,
        nombreCompleto: "Felix Manuel Cabanillas Linares",
        rifas: 1,
      },
      {
        id: 290,
        nombreCompleto: "Cesar Leonardo Villegas Linares",
        rifas: 1,
      },
      {
        id: 291,
        nombreCompleto: "Richard Arturo Torres Rios",
        rifas: 1,
      },
      {
        id: 292,
        nombreCompleto: "Richard Arturo Torres Rios",
        rifas: 1,
      },
      {
        id: 293,
        nombreCompleto: "Richard Arturo Torres Rios",
        rifas: 1,
      },
      {
        id: 294,
        nombreCompleto: "Richard Arturo Torres Rios",
        rifas: 1,
      },
      {
        id: 295,
        nombreCompleto: "Richard Arturo Torres Rios",
        rifas: 1,
      },
      {
        id: 296,
        nombreCompleto: "Richard Ivan Torres Rios",
        rifas: 1,
      },
      {
        id: 297,
        nombreCompleto: "Richard Ivan Torres Rios",
        rifas: 1,
      },
      {
        id: 298,
        nombreCompleto: "Richard Ivan Torres Rios",
        rifas: 1,
      },
      {
        id: 299,
        nombreCompleto: "Richard Ivan Torres Rios",
        rifas: 1,
      },
      {
        id: 300,
        nombreCompleto: "Richard Ivan Torres Rios",
        rifas: 1,
      },
      {
        id: 351,
        nombreCompleto: "Gustavo Vertiz Ramos",
        rifas: 1,
      },
      {
        id: 352,
        nombreCompleto: "Percy Llonto Cajusol",
        rifas: 1,
      },
      {
        id: 353,
        nombreCompleto: "Jair Vertiz Ramos",
        rifas: 1,
      },
      {
        id: 354,
        nombreCompleto: "Angel Sotero Paico",
        rifas: 1,
      },
      {
        id: 355,
        nombreCompleto: "Juan Carlos Quintanilla Flores",
        rifas: 1,
      },
      {
        id: 356,
        nombreCompleto: "Roberto Muñoz",
        rifas: 1,
      },
      {
        id: 357,
        nombreCompleto: "Matias Yerez",
        rifas: 1,
      },
      {
        id: 358,
        nombreCompleto: "Manel Santos Cerquen Cotrina",
        rifas: 1,
      },
      {
        id: 359,
        nombreCompleto: "Antonio Sanchez Tello",
        rifas: 1,
      },
      {
        id: 360,
        nombreCompleto: "Briella Luciana Vasquez Alvarez",
        rifas: 1,
      },
      {
        id: 361,
        nombreCompleto: "Laila Ayelen Vasquez Rojas",
        rifas: 1,
      },
      {
        id: 362,
        nombreCompleto: "Erick Matesa Quillate",
        rifas: 1,
      },
      {
        id: 363,
        nombreCompleto: "Briella Luciana Vasquez Alvarez",
        rifas: 1,
      },
      {
        id: 364,
        nombreCompleto: "Isabel Jackeline Romero Quillate",
        rifas: 1,
      },
      {
        id: 365,
        nombreCompleto: "Cecilia Leon Davalos",
        rifas: 1,
      },
      {
        id: 366,
        nombreCompleto: "Juan Pepe Ipanaque",
        rifas: 1,
      },
      {
        id: 367,
        nombreCompleto: "Francisco Cortez Rabanal",
        rifas: 1,
      },
      {
        id: 368,
        nombreCompleto: "Valeria Panduro",
        rifas: 1,
      },
      {
        id: 369,
        nombreCompleto: "Edwin Reyes Gonzales",
        rifas: 1,
      },
      {
        id: 370,
        nombreCompleto: "C Guzman y Conver Guzman",
        rifas: 1,
      },
      {
        id: 371,
        nombreCompleto: "Victor Manuel Araujo",
        rifas: 1,
      },
      {
        id: 372,
        nombreCompleto: "William Alberto Gonzales",
        rifas: 1,
      },
      {
        id: 373,
        nombreCompleto: "Doris Noemi Carbonel Yactayo",
        rifas: 1,
      },
      {
        id: 374,
        nombreCompleto: "Edwin Reyes Gonzales",
        rifas: 1,
      },
      {
        id: 375,
        nombreCompleto: "Luis Ramos Acuña",
        rifas: 1,
      },
      {
        id: 376,
        nombreCompleto: "Pepe Yaita Sanchez",
        rifas: 1,
      },
      {
        id: 377,
        nombreCompleto: "Pepe Yaita Sanchez",
        rifas: 1,
      },
      {
        id: 378,
        nombreCompleto: "Claudia Ubillus",
        rifas: 1,
      },
      {
        id: 379,
        nombreCompleto: "Pepe Yaita Sanchez",
        rifas: 1,
      },
      {
        id: 380,
        nombreCompleto: "Anacleto Carrillo Quezada",
        rifas: 1,
      },
      {
        id: 381,
        nombreCompleto: "Vanessa Gutierrez Alvarado",
        rifas: 1,
      },
      {
        id: 382,
        nombreCompleto: "Pepe Yaita Sanchez",
        rifas: 1,
      },
      {
        id: 383,
        nombreCompleto: "Abigail Pacompia",
        rifas: 1,
      },
      {
        id: 384,
        nombreCompleto: "Vanessa Alma Mauricio",
        rifas: 1,
      },
      {
        id: 385,
        nombreCompleto: "Emilse Alejandra Rivera Bazan",
        rifas: 1,
      },
      {
        id: 386,
        nombreCompleto: "Yudit Vasquez Delgado",
        rifas: 1,
      },
      {
        id: 387,
        nombreCompleto: "Magaly Vasquez Delgado",
        rifas: 1,
      },
      {
        id: 388,
        nombreCompleto: "Magdalena Serquen Fernandez",
        rifas: 1,
      },
      {
        id: 389,
        nombreCompleto: "Gonzalo Muñoz Tapia",
        rifas: 1,
      },
      {
        id: 390,
        nombreCompleto: "Esther Roman Paredes",
        rifas: 1,
      },
      {
        id: 391,
        nombreCompleto: "Elena Sabalor Rodriguez",
        rifas: 1,
      },
      {
        id: 392,
        nombreCompleto: "Dora Helda Lamus Quiedo",
        rifas: 1,
      },
      {
        id: 393,
        nombreCompleto: "Maria Del Rosario Zapata",
        rifas: 1,
      },
      {
        id: 394,
        nombreCompleto: "Maria Del Rosario Zapata",
        rifas: 1,
      },
      {
        id: 395,
        nombreCompleto: "Martha Vasquez",
        rifas: 1,
      },
      {
        id: 396,
        nombreCompleto: "Maria Del Rosario Zapata",
        rifas: 1,
      },
      {
        id: 397,
        nombreCompleto: "Martha Vasquez",
        rifas: 1,
      },
      {
        id: 398,
        nombreCompleto: "Joel Paz Anacleto",
        rifas: 1,
      },
      {
        id: 399,
        nombreCompleto: "Jose Raul Canchez Lozano",
        rifas: 1,
      },
      {
        id: 400,
        nombreCompleto: "Carmen Rodriguez Angeles",
        rifas: 1,
      },
      {
        id: 401,
        nombreCompleto: "Carlos Flores Fernandez",
        rifas: 1,
      },
      {
        id: 402,
        nombreCompleto: "Oswaldo",
        rifas: 1,
      },
      {
        id: 403,
        nombreCompleto: "Oscar Santamaria Barcos",
        rifas: 1,
      },
      {
        id: 404,
        nombreCompleto: "Luis Reaño",
        rifas: 1,
      },
      {
        id: 405,
        nombreCompleto: "Meche Palomino",
        rifas: 1,
      },
      {
        id: 406,
        nombreCompleto: "Walter Reque",
        rifas: 1,
      },
      {
        id: 407,
        nombreCompleto: "Emilio Ancon",
        rifas: 1,
      },
      {
        id: 408,
        nombreCompleto: "Segundo Muñoz",
        rifas: 1,
      },
      {
        id: 409,
        nombreCompleto: "Rafael Huandoy",
        rifas: 1,
      },
      {
        id: 410,
        nombreCompleto: "Silvia Herrera",
        rifas: 1,
      },
      {
        id: 411,
        nombreCompleto: "Ttito Campanita",
        rifas: 1,
      },
      {
        id: 412,
        nombreCompleto: "Arturo Rosas",
        rifas: 1,
      },
      {
        id: 413,
        nombreCompleto: "Arturo Rosas",
        rifas: 1,
      },
      {
        id: 414,
        nombreCompleto: "Alex Herrera",
        rifas: 1,
      },
      {
        id: 415,
        nombreCompleto: "Wilfredo Sangay Chavarri",
        rifas: 1,
      },
      {
        id: 416,
        nombreCompleto: "Norma Herrera",
        rifas: 1,
      },
      {
        id: 417,
        nombreCompleto: "Leonela Leon",
        rifas: 1,
      },
      {
        id: 418,
        nombreCompleto: "Oscar Palomino",
        rifas: 1,
      },
      {
        id: 419,
        nombreCompleto: "Brenda Palomino",
        rifas: 1,
      },
      {
        id: 420,
        nombreCompleto: "Saul Herrera Robles",
        rifas: 1,
      },
      {
        id: 421,
        nombreCompleto: "Victor ArturoGomez Tuero",
        rifas: 1,
      },
      {
        id: 422,
        nombreCompleto: "Victor ArturoGomez Tuero",
        rifas: 1,
      },
      {
        id: 423,
        nombreCompleto: "Melva Leon",
        rifas: 1,
      },
      {
        id: 424,
        nombreCompleto: "Victor ArturoGomez Tuero",
        rifas: 1,
      },
      {
        id: 425,
        nombreCompleto: "Victor ArturoGomez Tuero",
        rifas: 1,
      },
      {
        id: 426,
        nombreCompleto: "Victor ArturoGomez Tuero",
        rifas: 1,
      },
      {
        id: 427,
        nombreCompleto: "Piero Leon Castillo",
        rifas: 1,
      },
      {
        id: 428,
        nombreCompleto: "Piero Leon Castillo",
        rifas: 1,
      },
      {
        id: 429,
        nombreCompleto: "Dennys Yuly Morales Asencios",
        rifas: 1,
      },
      {
        id: 430,
        nombreCompleto: "Piero Leon Castillo",
        rifas: 1,
      },
      {
        id: 431,
        nombreCompleto: "Flor Rojas Perez",
        rifas: 1,
      },
      {
        id: 432,
        nombreCompleto: "Axel Aredondo",
        rifas: 1,
      },
      {
        id: 433,
        nombreCompleto: "Cesar Peña Pomahuacre",
        rifas: 1,
      },
      {
        id: 434,
        nombreCompleto: "Roy Oroya Ramos",
        rifas: 1,
      },
      {
        id: 435,
        nombreCompleto: "Milton Sirlupu Leon",
        rifas: 1,
      },
      {
        id: 436,
        nombreCompleto: "Wendy Vizcardo Vallejos",
        rifas: 1,
      },
      {
        id: 437,
        nombreCompleto: "Rosa Medina Palma",
        rifas: 1,
      },
      {
        id: 438,
        nombreCompleto: "Luis Carrasco Castro",
        rifas: 1,
      },
      {
        id: 439,
        nombreCompleto: "Nicoll Silva Bailon",
        rifas: 1,
      },
      {
        id: 440,
        nombreCompleto: "Villanueva",
        rifas: 1,
      },
      {
        id: 441,
        nombreCompleto: "Segundo Lino Muñoz",
        rifas: 1,
      },
      {
        id: 442,
        nombreCompleto: "Oscar Sanchez",
        rifas: 1,
      },
      {
        id: 443,
        nombreCompleto: "David Ruiz",
        rifas: 1,
      },
      {
        id: 444,
        nombreCompleto: "Roger Sanchez",
        rifas: 1,
      },
      {
        id: 445,
        nombreCompleto: "Ivan Sanches",
        rifas: 1,
      },
      {
        id: 446,
        nombreCompleto: "Julio Huaman",
        rifas: 1,
      },
      {
        id: 447,
        nombreCompleto: "Julio Gallo",
        rifas: 1,
      },
      {
        id: 448,
        nombreCompleto: "Paolo Ladera Rivas",
        rifas: 1,
      },
      {
        id: 449,
        nombreCompleto: "Adelina",
        rifas: 1,
      },
      {
        id: 450,
        nombreCompleto: "Betty Castillo Paredes",
        rifas: 1,
      },
      {
        id: 451,
        nombreCompleto: "Roberto Rodriguez Lopez",
        rifas: 1,
      },
      {
        id: 452,
        nombreCompleto: "Harumi Carera Significacion",
        rifas: 1,
      },
      {
        id: 453,
        nombreCompleto: "Enrique Delgado",
        rifas: 1,
      },
      {
        id: 454,
        nombreCompleto: "Mixi Olivares Cabanillas",
        rifas: 1,
      },
      {
        id: 455,
        nombreCompleto: "Dina Oblitas Urrutia",
        rifas: 1,
      },
      {
        id: 456,
        nombreCompleto: "Jackeline Quispe Rios",
        rifas: 1,
      },
      {
        id: 457,
        nombreCompleto: "Fabio Caballero Zumaeta",
        rifas: 1,
      },
      {
        id: 458,
        nombreCompleto: "Jarol Cotrina Ordones",
        rifas: 1,
      },
      {
        id: 459,
        nombreCompleto: "Ydalia Olivares Cabanillas",
        rifas: 1,
      },
      {
        id: 460,
        nombreCompleto: "Erick Sirlupu Leon",
        rifas: 1,
      },
      {
        id: 461,
        nombreCompleto: "Roxana Sirlupu Acuña",
        rifas: 1,
      },
      {
        id: 462,
        nombreCompleto: "Vilma Vasques Ilatoma",
        rifas: 1,
      },
      {
        id: 463,
        nombreCompleto: "Roxana Leon Albitres",
        rifas: 1,
      },
      {
        id: 464,
        nombreCompleto: "Yesdely Huaman",
        rifas: 1,
      },
      {
        id: 465,
        nombreCompleto: "Liliana Ramos Cisneros",
        rifas: 1,
      },
      {
        id: 466,
        nombreCompleto: "Liseth Alcida Cruces Salas",
        rifas: 1,
      },
      {
        id: 467,
        nombreCompleto: "Samuel Marquez Flores",
        rifas: 1,
      },
      {
        id: 468,
        nombreCompleto: "Daniela Ruiz Cienfuegos",
        rifas: 1,
      },
      {
        id: 469,
        nombreCompleto: "Camila Palomino Deza",
        rifas: 1,
      },
      {
        id: 470,
        nombreCompleto: "Arleth Principe Trejo",
        rifas: 1,
      },
      {
        id: 471,
        nombreCompleto: "Pamela Alejandra Rivas Chilet",
        rifas: 1,
      },
      {
        id: 472,
        nombreCompleto: "Alexia Trejo Leon",
        rifas: 1,
      },
      {
        id: 473,
        nombreCompleto: "Jhon Kenedi Ortiz Amado",
        rifas: 1,
      },
      {
        id: 474,
        nombreCompleto: "Carlos Giraldo",
        rifas: 1,
      },
      {
        id: 475,
        nombreCompleto: "Jorge Luis Guerreros",
        rifas: 1,
      },
      {
        id: 476,
        nombreCompleto: "Ares Nieto Blas",
        rifas: 1,
      },
      {
        id: 477,
        nombreCompleto: "Alessandro Trejo Leon",
        rifas: 1,
      },
      {
        id: 478,
        nombreCompleto: "Abel Trejo Colmenares",
        rifas: 1,
      },
      {
        id: 479,
        nombreCompleto: "Maria Veronica Gallardo Gratero",
        rifas: 1,
      },
      {
        id: 480,
        nombreCompleto: "Alex Firel Sanchez",
        rifas: 1,
      },
      {
        id: 481,
        nombreCompleto: "Alexander Kevin Ramirez Trejo",
        rifas: 1,
      },
      {
        id: 482,
        nombreCompleto: "Jose Andres Roca Martinez",
        rifas: 1,
      },
      {
        id: 483,
        nombreCompleto: "Renato Espinoza Carlos",
        rifas: 1,
      },
      {
        id: 484,
        nombreCompleto: "Junior Rios Francisco",
        rifas: 1,
      },
      {
        id: 485,
        nombreCompleto: "Fleming Ramirez Trejo",
        rifas: 1,
      },
      {
        id: 486,
        nombreCompleto: "Fleming Ramirez Trejo",
        rifas: 1,
      },
      {
        id: 487,
        nombreCompleto: "Milton Calderon Retamozo",
        rifas: 1,
      },
      {
        id: 488,
        nombreCompleto: "Milagros Ramos",
        rifas: 1,
      },
      {
        id: 489,
        nombreCompleto: "Eduar Soiesura",
        rifas: 1,
      },
      {
        id: 490,
        nombreCompleto: "Faustino Estrada",
        rifas: 1,
      },
      {
        id: 491,
        nombreCompleto: "Lito Pinehi Chota",
        rifas: 1,
      },
      {
        id: 492,
        nombreCompleto: "Luis Silva Sanchez",
        rifas: 1,
      },
      {
        id: 493,
        nombreCompleto: "Jaime Ramos Aquino",
        rifas: 1,
      },
      {
        id: 494,
        nombreCompleto: "Julio Olivera",
        rifas: 1,
      },
      {
        id: 495,
        nombreCompleto: "Eliz TanTalean",
        rifas: 1,
      },
      {
        id: 496,
        nombreCompleto: "Alison Yuleysy Castillo Mayta",
        rifas: 1,
      },
      {
        id: 497,
        nombreCompleto: "Enrique Salvatierra",
        rifas: 1,
      },
      {
        id: 498,
        nombreCompleto: "Maria Fernanda Wong Romero",
        rifas: 1,
      },
      {
        id: 499,
        nombreCompleto: "Christian Lopez Peralta",
        rifas: 1,
      },
      {
        id: 500,
        nombreCompleto: "Christian Lopez Peralta",
        rifas: 1,
      },
      {
        id: 501,
        nombreCompleto: "Deysi Caceres",
        rifas: 1,
      },
      {
        id: 502,
        nombreCompleto: "Juan Carlos",
        rifas: 1,
      },
      {
        id: 503,
        nombreCompleto: "Angeles Ramos",
        rifas: 1,
      },
      {
        id: 504,
        nombreCompleto: "Alejandro Martin Ñunez Fajardo",
        rifas: 1,
      },
      {
        id: 505,
        nombreCompleto: "Elizabeth Estefania Lopez Chavez",
        rifas: 1,
      },
      {
        id: 506,
        nombreCompleto: "Elizabeth Estefania Lopez Chavez",
        rifas: 1,
      },
      {
        id: 507,
        nombreCompleto: "Elizabeth Estefania Lopez Chavez",
        rifas: 1,
      },
      {
        id: 508,
        nombreCompleto: "Elizabeth Estefania Lopez Chavez",
        rifas: 1,
      },
      {
        id: 509,
        nombreCompleto: "Elizabeth Estefania Lopez Chavez",
        rifas: 1,
      },
      {
        id: 510,
        nombreCompleto: "Felix Yarasca",
        rifas: 1,
      },
      {
        id: 511,
        nombreCompleto: "Felix Yarasca",
        rifas: 1,
      },
      {
        id: 512,
        nombreCompleto: "Felix Yarasca",
        rifas: 1,
      },
      {
        id: 513,
        nombreCompleto: "Carmen Rosa Yarleque Chero",
        rifas: 1,
      },
      {
        id: 514,
        nombreCompleto: "Carmen Rosa Yarleque Chero",
        rifas: 1,
      },
      {
        id: 515,
        nombreCompleto: "Elizabeth Merari Castillo Haro",
        rifas: 1,
      },
      {
        id: 516,
        nombreCompleto: "Elizabeth Merari Castillo Haro",
        rifas: 1,
      },
      {
        id: 517,
        nombreCompleto: "Luz Zena Salazar",
        rifas: 1,
      },
      {
        id: 518,
        nombreCompleto: "Miguel Garro Salazar",
        rifas: 1,
      },
      {
        id: 519,
        nombreCompleto: "Judith Chinchayhuara Ruiz",
        rifas: 1,
      },
      {
        id: 520,
        nombreCompleto: "Pablo Lopez Chavez",
        rifas: 1,
      },
      {
        id: 521,
        nombreCompleto: "Lucas Alejandro Correa Quiroz",
        rifas: 1,
      },
      {
        id: 522,
        nombreCompleto: "Rosa Elena Marquez Fajardo*",
        rifas: 1,
      },
      {
        id: 523,
        nombreCompleto: "Emestina Toledo de Alamo",
        rifas: 1,
      },
      {
        id: 524,
        nombreCompleto: "Adriano Valladares",
        rifas: 1,
      },
      {
        id: 525,
        nombreCompleto: "Emilith Valladares",
        rifas: 1,
      },
      {
        id: 526,
        nombreCompleto: "Francisco Tomas Guevara Gamez",
        rifas: 1,
      },
      {
        id: 527,
        nombreCompleto: "Jose Alejandro Palacios Mesa",
        rifas: 1,
      },
      {
        id: 528,
        nombreCompleto: "Jose Alejandro Palacios Mesa",
        rifas: 1,
      },
      {
        id: 529,
        nombreCompleto: "Marco Alejandro Ramos",
        rifas: 1,
      },
      {
        id: 530,
        nombreCompleto: "Flores Chavez",
        rifas: 1,
      },
      {
        id: 531,
        nombreCompleto: "Niley Revilla",
        rifas: 1,
      },
      {
        id: 532,
        nombreCompleto: "Yimi",
        rifas: 1,
      },
      {
        id: 533,
        nombreCompleto: "Tamara Moore Ramos",
        rifas: 1,
      },
      {
        id: 534,
        nombreCompleto: "Adriano Mendoza",
        rifas: 1,
      },
      {
        id: 535,
        nombreCompleto: "Lionel Tapia",
        rifas: 1,
      },
      {
        id: 536,
        nombreCompleto: "Aura",
        rifas: 1,
      },
      {
        id: 537,
        nombreCompleto: "Nasielk Palicios",
        rifas: 1,
      },
      {
        id: 538,
        nombreCompleto: "Milan Llorente",
        rifas: 1,
      },
      {
        id: 539,
        nombreCompleto: "Reyth Robert Palacios",
        rifas: 1,
      },
      {
        id: 540,
        nombreCompleto: "Solgne Llorante",
        rifas: 1,
      },
      {
        id: 541,
        nombreCompleto: "Ivan Llorente",
        rifas: 1,
      },
      {
        id: 542,
        nombreCompleto: "Masielk Palacios",
        rifas: 1,
      },
      {
        id: 543,
        nombreCompleto: "Flor Angela Ryes Fabian",
        rifas: 1,
      },
      {
        id: 544,
        nombreCompleto: "Marco Llorente",
        rifas: 1,
      },
      {
        id: 545,
        nombreCompleto: "Felicita Muñoz",
        rifas: 1,
      },
      {
        id: 546,
        nombreCompleto: "Kevin Rojas Apaza",
        rifas: 1,
      },
      {
        id: 547,
        nombreCompleto: "Jose Walter Chapoñan Albarran",
        rifas: 1,
      },
      {
        id: 548,
        nombreCompleto: "Jorge Chicoma Bravo",
        rifas: 1,
      },
      {
        id: 549,
        nombreCompleto: "Pascual Arellano Osorio",
        rifas: 1,
      },
      {
        id: 550,
        nombreCompleto: "Pascual Arellano Osorio",
        rifas: 1,
      },
      {
        id: 551,
        nombreCompleto: "Arnaldo Soplapuco Esteia",
        rifas: 1,
      },
      {
        id: 552,
        nombreCompleto: "Lena Garcia",
        rifas: 1,
      },
      {
        id: 553,
        nombreCompleto: "Lena Garcia",
        rifas: 1,
      },
      {
        id: 554,
        nombreCompleto: "Wilmer Soplapuco Sosa",
        rifas: 1,
      },
      {
        id: 555,
        nombreCompleto: "Denis Alarcon",
        rifas: 1,
      },
      {
        id: 556,
        nombreCompleto: "Melva Sanchez",
        rifas: 1,
      },
      {
        id: 557,
        nombreCompleto: "Melva Sanchez",
        rifas: 1,
      },
      {
        id: 558,
        nombreCompleto: "Gilmer Oscanoa Coronado",
        rifas: 1,
      },
      {
        id: 559,
        nombreCompleto: "Diego Sanchez",
        rifas: 1,
      },
      {
        id: 560,
        nombreCompleto: "Carlos Miguel Aquino Valverde",
        rifas: 1,
      },
      {
        id: 561,
        nombreCompleto: "Rosmeri Tuero Torres",
        rifas: 1,
      },
      {
        id: 562,
        nombreCompleto: "Jessica Gomez Tuero",
        rifas: 1,
      },
      {
        id: 563,
        nombreCompleto: "Valentina Collazos",
        rifas: 1,
      },
      {
        id: 564,
        nombreCompleto: "Cecilio Barreto",
        rifas: 1,
      },
      {
        id: 565,
        nombreCompleto: "Victoria Rivas Insapillo",
        rifas: 1,
      },
      {
        id: 566,
        nombreCompleto: "Daniel Rios Perez",
        rifas: 1,
      },
      {
        id: 567,
        nombreCompleto: "Juan Trujillo Jurado",
        rifas: 1,
      },
      {
        id: 568,
        nombreCompleto: "Emilyth Perez Chufandama",
        rifas: 1,
      },
      {
        id: 569,
        nombreCompleto: "Esther Rios Perez",
        rifas: 1,
      },
      {
        id: 570,
        nombreCompleto: "Luciana Trujillo Perez",
        rifas: 1,
      },
    ]);
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
                label="Escribe tu nombre"
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
