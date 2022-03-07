/* eslint no-console: "off" */
const server = require('./server');

const PORT =  3000 || process.env.PORT ;

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
