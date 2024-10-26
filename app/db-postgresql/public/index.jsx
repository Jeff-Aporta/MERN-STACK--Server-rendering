function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <br />
      <br />
      <Paper className="container" elevation={0}>
        <Typography variant="h2">API-DB | DOCUMENTACIÓN</Typography>
        <hr />
        <br />
        <Paper className="app container">
          <Typography variant="h3">
            <small>GET:</small> api-db/
          </Typography>
          <Typography variant="h5" className="secondary">
            (GUI DOC)
          </Typography>
          <br />
          <Paper className="explain container" elevation={3}>
            Esta es la única ruta en la API del servidor que tiene interfaz
            gráfica.
            <br />
            <Paper className="explain container" elevation={4}>
              <Typography variant="h4">
                <small>GET:</small> api-db/public/*
              </Typography>
              <br />
              Se obtienen los recursos publicos del servidor.
            </Paper>
          </Paper>
          <br />
          <hr />
          <br />
          <Typography variant="h3">
            <small>GET:</small> api-db/:json-cmd-exec
          </Typography>
          <Typography variant="h5" className="secondary">
            (Comandos para ejecución)
          </Typography>
          <br />
          <Paper className="explain container" elevation={3}>
            Recibe un objeton JSON en la URL denominado{" "}
            <strong>Comando de ejecución JSON</strong> (:json-cmd-exec)
          </Paper>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("body"));
