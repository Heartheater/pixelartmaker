$(document).ready(function () {

    let gridWidth = $('#inputWidth').val();
    let gridHeight = $('#inputHeight').val();
    let color = 'black';
    let submit = $('#submitInput');
    const canvas = $('#pixelCanvas');

    //change the size of the grid to match inputs
    $('#submitInput').click(function () {
        gridWidth = $('#inputWidth').val();
        return gridWidth;
    });

    $('#submitInput').click(function () {
        gridHeight = $('#inputHeight').val();
        return gridHeight;
    });

    $('#submitInput').click(
        function makeGrid() {
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

    //update inputted color
    $('#submitColor').change(function () {
        color = $('#submitColor').val();
    });

    function draw() {
        $('.pixel').click(function changeColor(e) {
            $(this).attr('style', `background-color: ${color}`);
            //console.log($(this));
        });
    }

});