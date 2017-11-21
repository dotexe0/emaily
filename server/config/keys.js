import prodKeys from './prod';
// keys for prod -- figure out credentials

let keys;

if (process.env.NODE_ENV === 'production') {
   // we are in production -- return the prod set of keys
  keys = prodKeys;
} else {
  import devKeys from "./dev";
  // we are in development -- return dev set of keys
  keys = devKeys;
}

export default keys;
