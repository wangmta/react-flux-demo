import { Dispatcher } from 'flux';

// dispather is singleton, there is only one dispatcher per application
const dispatcher = new Dispatcher();
export default dispatcher;
