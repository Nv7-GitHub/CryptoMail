/* Bootstrap */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Bootstrap */

/* gRPC */
import { CryptoMailClient } from '../pb/cryptomail_pb_service';
/* gRPC */

import { main } from './main';
import { makePages } from './pages';

export let client = new CryptoMailClient("http://localhost:8080");

makePages();
//main();