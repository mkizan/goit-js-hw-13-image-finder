import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

function onFetchError() {
  error({
    title: 'Sorry, enter correct query',
    delay: 2000,
  });
}

export { onFetchError };
