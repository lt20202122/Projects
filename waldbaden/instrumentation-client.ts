import { initBotId } from 'botid/client/core';

initBotId({
  protect: [
    { path: '/api/send', method: 'POST' },
  ],
});