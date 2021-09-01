//Install express server
import express, { static } from 'express';

const app = express();

// Serve only the static files form the dist directory
app.use(static('./dist/TPSIM/'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/TPSIM/'}),
);

// Start the app by listening on the default Heroku port
// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 8080);