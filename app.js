const FAKE_DATA = [
    { id: 'bitcoin', value: 10, region: 'USA'},
    { id: 'etherum', value: 9, region: 'Brazil'},
    { id: 'litecoin', value: 8, region: 'Eggs'},
    { id: 'tether', value: 10, region: 'Boom'},
    { id: 'egg', value: 10, region: 'USA'},
    { id: 'fdfd', value: 9, region: 'Brazil'},
    { id: 'fdg', value: 8, region: 'Eggs'},
    { id: 'tetdddher', value: 10, region: 'Boom'},
];

// same width for all bars; uniform distrubution 
//range shows what space is available
const xScale = d3
    .scaleBand()
    .domain(FAKE_DATA.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container = d3.select('svg')
    .classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(FAKE_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));
    // cool things to know
    // you cant use justifiy content or background use fill
    // you dont use div you use svg