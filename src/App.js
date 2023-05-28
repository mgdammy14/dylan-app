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
  const [data, setData] = React.useState(dataCompleta);

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
