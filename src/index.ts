import * as dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

import server from './server';

const { PORT } = process.env;

server.listen(PORT || 5555, () => {
  console.info(`🚀 Server started on port ${PORT || 5555}!`);
});
