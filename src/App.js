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
      nombresCompletos: "Anyu Francesca Alejandria Solari",
      rifas: 1,
    },
    {
      id: 2,
      nombresCompletos: "Daniel Alberto Cardenas Pérez",
      rifas: 1,
    },
    {
      id: 3,
      nombresCompletos: "Candy Loriet Zegarra Castillo",
      rifas: 1,
    },
    {
      id: 4,
      nombresCompletos: "George Antony García Congona",
      rifas: 1,
    },
    {
      id: 5,
      nombresCompletos: "Adrian Nicolás Meléndez",
      rifas: 1,
    },
    {
      id: 6,
      nombresCompletos: "Nilda Beatríz Herrera Peña",
      rifas: 1,
    },
    {
      id: 7,
      nombresCompletos: "Martina Chinchay Ticliahuanca",
      rifas: 1,
    },
    {
      id: 8,
      nombresCompletos: "Itamar Solano Huertas",
      rifas: 1,
    },
    {
      id: 9,
      nombresCompletos: "Naomí Vasquez Aquino",
      rifas: 1,
    },
    {
      id: 10,
      nombresCompletos: "Juan Francisco Taipe Rojas",
      rifas: 1,
    },
    {
      id: 11,
      nombresCompletos: "Ercida Rosa Roncal Segura",
      rifas: 2,
    },
    {
      id: 12,
      nombresCompletos: "Edwin Roberto Guerrero Merino",
      rifas: 5,
    },
    {
      id: 13,
      nombresCompletos: "Karla Calderón Retamozo",
      rifas: 1,
    },
    {
      id: 14,
      nombresCompletos: "Jovita Ysidora Gutiérrez Barreto",
      rifas: 1,
    },
    {
      id: 15,
      nombresCompletos: "Bertha Maritza Rojas Moztacero",
      rifas: 1,
    },
    {
      id: 16,
      nombresCompletos: "Edmundo Calderón Pérez (César)",
      rifas: 5,
    },
    {
      id: 17,
      nombresCompletos: "Héctor Armando Enciso Vera",
      rifas: 1,
    },
    {
      id: 18,
      nombresCompletos: "Raffo Gómez Falcón",
      rifas: 1,
    },
    {
      id: 19,
      nombresCompletos: "Nancy Garay Torres",
      rifas: 1,
    },
    {
      id: 20,
      nombresCompletos: "Jennifer Yahuarcani Ahuanari",
      rifas: 1,
    },
    {
      id: 21,
      nombresCompletos: "Mariel Barreros M.",
      rifas: 1,
    },
    {
      id: 22,
      nombresCompletos: "Danitza Alejandra",
      rifas: 1,
    },
    {
      id: 23,
      nombresCompletos: "Abel Garay Torres",
      rifas: 1,
    },
    {
      id: 24,
      nombresCompletos: "Mayra Azucena Matos",
      rifas: 1,
    },
    {
      id: 25,
      nombresCompletos: "Adderly Limber Alejos Ivin",
      rifas: 2,
    },
    {
      id: 26,
      nombresCompletos: "Rosa Elena Márquez Fajardo",
      rifas: 1,
    },
    {
      id: 27,
      nombresCompletos: "Anthony Carlos Vera",
      rifas: 3,
    },
    {
      id: 28,
      nombresCompletos: "Maribel Mejia Campos",
      rifas: 2,
    },
    {
      id: 29,
      nombresCompletos: "Martha Vásquez Miñano",
      rifas: 1,
    },
    {
      id: 30,
      nombresCompletos: "Shadia Abushaibe Thride",
      rifas: 2,
    },
    {
      id: 31,
      nombresCompletos: "Irma Ninaquispe Terrones",
      rifas: 1,
    },
    {
      id: 32,
      nombresCompletos: "Ruben Darío Romero Meza",
      rifas: 4,
    },
  ]);

  const handleSearch = () => {
    const filteredData = data.filter((row) =>
      row.documentNumber.includes(searchTerm)
    );
    Swal.fire(
      "Felicidades",
      filteredData[0].name +
        " estas participando del sorteo. Con " +
        filteredData[0].rifas +
        " rifa(s).",
      "success"
    );

    setData(filteredData);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ height: "100%", overflow: "hidden" }}>
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
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{ marginLeft: "25px" }}
              >
                Buscar
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
