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


const container = d3.select('svg')
    .classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(FAKE_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', 50)
    .attr('height', data => (data.value * 15));

    // cool things to know
    // you cant use justifiy content or background use fill
    // you dont use div you use svg