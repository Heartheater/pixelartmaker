$(document).ready(function () {

    let gridWidth = $('#inputWidth').val();
    let gridHeight = $('#inputHeight').val();
    let color = $('#submitColor').val();
    let submit = $('#submitInput');
    const canvas = $('#pixelCanvas');

    submit.click(function (e) {
        e.preventDefault();
    });

    //update input color
    $('#submitColor').change(function () {
        color = $('#submitColor').val();
    });

    submit.click(
        function makeGrid() {
            gridHeight = $('#inputHeight').val();
            gridWidth = $('#inputWidth').val();
            let grid;
            let width = [];
            for (let w = 0; w < gridWidth; w++) {
                width.push("<td class = 'pixel'> </td>");
            }
            for (let i = 0; i < gridHeight; i++) {
                grid += "<tr class = 'row'>" + (width) + "</tr>";
            }
            canvas.html(grid);
            draw();
        });


    function draw() {
        $('.pixel').click(function changeColor() {
           $(this).css(`background-color`, `${color}`);
        });

        $('.pixel').dblclick(function changeColor() {
            $(this).css(`background-color`, ``);
        });
    }



});