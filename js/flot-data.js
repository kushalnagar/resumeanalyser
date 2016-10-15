//Flot Pie Chart
$(function() {

    var data = [{
        label: "Java",
        data: 40
    }, {
        label: "Bootstrap",
        data: 15
    }, {
        label: "Javascript",
        data: 30
    }, {
        label: "CSS",
        data: 10
    }, {
        label: "HTML",
        data: 10
    }, {
        label: "Ajax",
        data: 10
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});