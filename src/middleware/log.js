export default function log({ next, to }) {
    console.log(to.name); // eslint-disable-line no-console
    return next();
  }