class Graph{
    #chart = 0;
    constructor(){
        this.buildGraph();
    }
    buildGraph(){
        if (this.#chart) this.#chart.destroy();
        const input = this.getInput();
        const data = this.getGraphData(input);
        const options = {
            responsive: true,
            maintainAspectRatio: false,
        }
        const config = {
            type: 'line',
            data: data,
            options: options
          };  
        this.#chart = new Chart("calculator-graph", config);
    }
    getInput(){
        //Need to validate
        const investCount = document.getElementById("invest-count");
        const investInitial = document.getElementById("invest-initial");
        this.validate([investCount, investInitial]);
    
        //Selects or range don't need to validate
        const investPeriod = document.getElementById("invest-period")
        const investPeriodicity = document.getElementById("invest-periodicity");
        const investPolicy = document.getElementById("invest-policy");
    
        return {"investCount": Number(investCount.value), "investInitial": Number(investInitial.value), 
                    "investPeriod": Number(investPeriod.value), "investPeriodicity": Number (investPeriodicity.value),"investPolicy": Number(investPolicy.value)};
    }
    getGraphData(inputData){
        const data = {labels:[], datasets: [
            {
                label: "Investment size",
                data:[],
                borderColor: '#b67d37',
                backgroundColor: '#b67d37'
            },
            {
                label: "invest growth",
                data:[],
                borderColor: '#ebab17',
                backgroundColor: '#ebab17'
            }]};
        const labelObj = this.getLabel(inputData.investPeriod);
        const DATA_COUNT = labelObj.dataCount;
        data.labels = labelObj.labels;
        var investSize = [];
        var investGrowth = [];
        
        for (let i = 0; i < DATA_COUNT; i++){
            let investedPerYear = inputData.investCount * inputData.investPeriodicity;
            investSize[i] = Math.round (inputData.investInitial + investedPerYear * i);
            if (i != 0) investGrowth[i] = Math.round(investGrowth[i - 1] + investedPerYear + (investGrowth[i - 1] + investedPerYear) * inputData.investPolicy);
            else investGrowth[i] = investSize[i];
        }
        data.datasets[0].data = investSize;
        data.datasets[1].data = investGrowth;
        return data;
    }
    getLabel(investPeriod){
        const labels = {"dataCount": 0,"labels":[]};
        for (let i = 2024; i <= investPeriod + 2024; i++){
            labels.labels.push(i);
            labels.dataCount++;
        }
        return labels;
    }
    validate(elemList){
        for (let elem of elemList){
            if (elem.min > Number (elem.value)) {
                elem.value = elem.min;
                alert("Investment in each period and An initial fee cannot be negative. Value has been changed")
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', (e) =>{
    const myGraph = new Graph;
    const button = document.getElementById("calculator-options-button");
    button.addEventListener("click", () => myGraph.buildGraph())
});
