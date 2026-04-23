import { app } from './app';

const port = Number(process.env.PORT ?? 3000);

if (Number.isNaN(port)) {
  throw new Error('PORT must be a number');
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
