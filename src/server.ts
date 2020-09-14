/**
 * Sample server app
 */
import * as rxjs from 'rxjs';

const ticker = rxjs.interval(100);
ticker.subscribe((cnt: number) => {
  console.log(cnt);
});
