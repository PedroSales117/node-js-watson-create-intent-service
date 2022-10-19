import fs from 'fs';
import { join } from 'path';
import { __dirname } from '../intents/index.js'
import { router } from '../config/express.config.js';

export const createIntentRouter = router

createIntentRouter.post('/', (request, response) => {
  const { examples, name } = request.body.intent
  const intentData = examples.toString().replace(', ', ',').split(',').map(example => example.trim() + ',' + name.trim()).join('\n')

  fs.writeFile(__dirname + `/${name}.csv`, intentData, () => {
    console.log(`${name}.csv criada!`);
    return response.status(200).sendFile(join(__dirname + `/${name}.csv`))
  });
})
