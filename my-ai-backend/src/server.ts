import express from 'express';
import bodyParser from 'body-parser';
import { runModel } from './model';

// Removed duplicate declaration of app
const port = process.env.PORT || 3000;

// API endpoint for AI processing
import { Request, Response } from 'express';

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/api/ai', async (req: Request, res: Response): Promise<void> => {
  try {
    const { input } = req.body;
    if (!input) {
      res.status(400).json({ error: 'Input is required' });
    }

    // Call your AI model processing function
    const output = await runModel(input);
    res.json({ output });
  } catch (error: any) {
    console.error('Error processing AI model:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
