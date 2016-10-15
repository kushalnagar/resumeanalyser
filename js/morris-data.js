$(function() {

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Masters',
            a: 92
        }, {
            y: 'Batchelors',
            a: 80
        }, {
            y: 'HSC',
            a: 90
        }, {
            y: 'SSC',
            a: 93
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Percentage'],
        hideHover: 'auto',
        resize: true
    });
	
	 Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "IOT and Mobile applications",
            value: 50
        }, {
            label: "Dot Com Info way",
            value: 20
        }, {
            label: "Business Scheduler",
            value: 20
        }, {
            label: "Workflow On Web",
            value: 10
        }],
        resize: true,
    });
	
});
