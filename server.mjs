import {createServer} from 'node:http'
import {handler} from './.output/server/index.mjs'
import cluster from 'node:cluster'

if (cluster.isPrimary) {
  const numberOfWorkers = Number.parseInt(process.env.NITRO_CLUSTER_WORKERS) || (os.cpus().length > 0 ? os.cpus().length : 1);
  for (let i = 0; i < numberOfWorkers; i++) {
    cluster.fork();
  }

  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  createServer(handler).listen(3000)
}

