import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { http } from '@google-cloud/functions-framework';

const here = dirname(fileURLToPath(import.meta.url));
const page = readFileSync(join(here, 'index.html'));

http('landing', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(page);
});
