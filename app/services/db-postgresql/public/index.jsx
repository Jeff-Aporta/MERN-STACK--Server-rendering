function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid rgba(128, 128, 128, 0.5)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="atentionBlue"
          href="/"
          startIcon={<i className="fa fa-home" />}
        >
          Salir de API-DB-DOC
        </Button>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <img
            src="api-db/public/src/img/logo512-nobg.png"
            width={50}
            height={50}
          />
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            API-DB REST-FULL JSON
          </span>
        </div>
      </div>
      <br />
      <Paper className="container" elevation={0}>
        <Typography variant="h2">
          /api-db
          <span className="secondary"> | DOCUMENTACIÓN</span>
        </Typography>
        <br />
        <hr />
        <br />
        <br />
        <Paper className="app container">
          <img
            src="api-db/public/src/img/logo512-nobg.png"
            width={350}
            align="right"
          />
          <Typography variant="h3">
            <small className="enfasis-1">GET:</small> /api-db/
          </Typography>
          <Typography variant="h5" className="secondary">
            (GUI DOC)
          </Typography>
          <br />
          <Paper className="explain container" elevation={3}>
            <Typography variant="h4">
              Rutas de la API con interfaz gráfica
            </Typography>
            <br />
            <Typography>
              Esta es la única ruta en la API del servidor que tiene interfaz
              gráfica. Permite a los usuarios interactuar con el sistema de
              manera visual.
            </Typography>
            <br />
            <Typography>
              A continuación, se detallan las rutas disponibles y su
              funcionalidad:
            </Typography>
            <br />
            <Paper className="explain container" elevation={4}>
              <Typography variant="h4">
                <small className="enfasis-1">GET:</small> /api-db/public/*
              </Typography>
              <br />
              <Typography>
                Se obtienen los recursos públicos del servidor. Estos recursos
                pueden incluir imágenes, estilos CSS, scripts JavaScript, y
                otros archivos que no requieren autenticación para ser
                accedidos.
              </Typography>
            </Paper>
          </Paper>
          <br />
          <hr />
          <br />
          <Typography variant="h3">
            <small className="enfasis-1">GET:</small> /api-db/:json-cmd-exec
          </Typography>
          <Typography variant="h5" className="secondary">
            (Comandos para ejecución)
          </Typography>
          <br />
          <Paper className="explain container" elevation={3}>
            <Typography>
              Esta ruta permite la ejecución de comandos en el servidor mediante
              el envío de un objeto JSON en la URL, denominado
              <strong> Comando de ejecución JSON</strong> (:json-cmd-exec). Los
              comandos pueden realizar diversas acciones, como consultas a la
              base de datos, operaciones de lectura/escritura, entre otras.
            </Typography>
            <br />
            <Paper className="container" elevation={4}>
              <Typography>
                <big>
                  <strong>Esquema de uso:</strong>
                </big>{" "}
                <br />
                <br />
                <code className="tachar">
                  <span className="enfasis-1">GET:</span>{" "}
                  {"api-db/{'comando': 'ejecutar', 'parametros': {...}}"}
                </code>
                <br />
                <br />
                Debe pasarse con caracteres de escape de URL, así:
                <br />
                <br />
                <code>
                  <span className="enfasis-1">GET:</span>{" "}
                  {escape(
                    "api-db/{'comando': 'ejecutar', 'parametros': {...}}"
                  )}
                </code>
              </Typography>
            </Paper>
            <br />
            <Typography>
              Es importante asegurarse de que los comandos sean seguros y no
              comprometan la integridad del sistema.
            </Typography>
          </Paper>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("body"));
