import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { runModel } from './model';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/ai', async (req: Request, res: Response): Promise<void> => {
  try {
    const { input } = req.body;
    if (!input) {
      res.status(400).json({ error: 'Input is required' });
      return;
    }

    const output = await runModel(input);
    res.json({ output });
  } catch (error: any) {
    console.error('Error processing AI model:', error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Wildcard route for frontend routing
app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
