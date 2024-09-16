import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = 1245;

// Use the defined routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
