const FAKE_DATA = [
    { id: 'bitcoin', value: 10021},
    { id: 'etherum', value: 499},
    { id: 'litecoin', value: 40},
    { id: 'tether', value: 1},
    { id: 'bitcoin cash', value: 200},
    { id: 'xrp', value: 1},
    { id: 'wrapped bitcoin', value: 100241},
    { id: 'polkadot', value: 4499},
    { id: 'chainlin', value: 9},

];


const container = d3.select('div')
    .classed('container', true)
    .style('border', '10px solid red');

container
    .selectAll('.bar')
    .data(FAKE_DATA)
    .enter()
    .append('div')
    .classed('bar', true);