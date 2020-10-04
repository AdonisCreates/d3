const FAKE_DATA = [
    { id: 'bitcoin', value: 1},
    { id: 'etherum', value: 2},
    { id: 'litecoin', value: 3},
    { id: 'tether', value: 4},
    { id: 'bitcoin cash', value: 5},
    { id: 'xrp', value: 1},
    { id: 'wrapped bitcoin', value: 7},
    { id: 'polkadot', value: 8},
    { id: 'chainlin', value: 9},

];


const container = d3.select('div')
    .classed('container', true)
    .style('border', '1px solid red');

const bars = container
    .selectAll('.bar')
    .data(FAKE_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data => (data.value * 15) + 'px');