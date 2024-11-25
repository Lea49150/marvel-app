import { useEffect } from "react";
import * as d3 from "d3";
import { prepareData } from './chart-utils';

// Définir le diamètre du graphique
const diameter = 150;

// Définir les marges
const margin = {
    top: 10, right: 10, bottom: 10, left: 10,
};

// Définir la largeur et la hauteur en utilisant les conventions de marge
const width = 2 * diameter + margin.left + margin.right;
const height = 2 * diameter + margin.top + margin.bottom;

// Définir le rayon
const radius = Math.min(width, height) / 2;

const drawChart = (data) => {
    // Supprimer l'ancien svg s'il existe (en développement)
    d3.select('#pie-container')
        .select('svg')
        .remove();

    // Créer l'échelle de couleurs
    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.schemeCategory10);

    // Créer le graphique en donut
    const pie = d3.pie()
        .value(d => d.value)
        .sort(null);

    // Créer les arcs
    const arc = d3.arc()
        .innerRadius(radius * 0.5)
        .outerRadius(radius * 0.8);

    const outerArc = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);

    // Créer le conteneur SVG avec les bonnes dimensions
    const svg = d3.select('#pie-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    // Dessiner le donut
    svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.name))
        .attr('stroke', 'white')
        .style('stroke-width', '2px');

    // // Ajouter des étiquettes sur le donut
    // svg.selectAll('text')
    //     .data(pie(data))
    //     .enter()
    //     .append('text')
    //     .text(d => `${d.data.name}: ${d.data.value}`)
    //     .attr('transform', d => `translate(${outerArc.centroid(d)})`)
    //     .style('text-anchor', 'middle')
    //     .style('font-size', '12px');
    svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
    .selectAll()
    .data(pie(data))
    .join("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .call(text => text.append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text(d => d.data.value.toLocaleString("en-US")));
};

export default function D3PieChart({
    data,
}) {
    // useEffect est un hook qui exécute le code à l'intérieur une seule fois lorsque les données sont chargées
    useEffect(() => {
        // Transformer les données
        const preparedData = prepareData(data);

        // Dessiner le graphique
        drawChart(preparedData);
    }, [data]);

    return (
        // Retourner la div qui contiendra le graphique
        <div id="pie-container" />
    );
}