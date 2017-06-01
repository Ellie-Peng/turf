const load = require('load-json-file');
const Benchmark = require('benchmark');
const idw = require('./');

const points = load.sync(path.join(__dirname, 'test', 'in', 'data.geojson'));

/**
 * Benchmark Results
 *
 */
const suite = new Benchmark.Suite('turf-idw');
suite
    .add('points', () => idw(points, 'value' , 0.5 , 1))
    .on('cycle', e => console.log(String(e.target)))
    .on('complete', () => {})
    .run();
