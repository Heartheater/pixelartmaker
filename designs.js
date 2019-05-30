$(document).ready(function () {
    let color = $('#submitColor').val();
    const submit = $('#submitInput');
    const canvas = $('#pixelCanvas');
    submit.click((e) => e.preventDefault());
    
    $('#toggleControlPanel').click(() =>$('#controlPanel').toggleClass("closed"))
    //update input color
    $('#submitColor').change(() => color = $('#submitColor').val());

    //update pixel size
    $('#inputPixelSize').change(() => {
        let pixelSize = $('#inputPixelSize').val();
        if(pixelSize > 1 && pixelSize <= 15){
            $('.pixel').css('padding', pixelSize);
        }
    });

    function makeGrid() {
        let gridHeight = $('#inputHeight').val();
        let gridWidth = $('#inputWidth').val();
        let grid = [];
        let width = [];
        for (let w = 0; w < gridWidth; w++) {
            width.push("<td class='pixel'> </td>");
        }
        for (let i = 0; i < gridHeight; i++) {
            grid.push(`<tr class='row'> ${(width)} </tr>`);
        }
        canvas.html(grid);
        draw();
    }
    makeGrid();

    submit.click( () =>{
        let cont = confirm("This will erase the canvas. Are you sure?");
        if(cont){
            makeGrid();
        }
    });
    $('#fillCanvas').click(()=> {
        let cont = confirm("This will erase the canvas. Are you sure?");
        if(cont){
            $('.pixel').css(`background-color`, `${color}`);
        }
    });
    $('#clearCanvas').click(()=> {
        let cont = confirm("This will erase the canvas. Are you sure?");
        if(cont){
            $('.pixel').css(`background-color`, ``);
        }
        
    });


    function draw() {
        let allPixels = $('.pixel');
        let mouseDown = false;

        allPixels.mousedown(function() {
            $(this).css(`background-color`, `${color}`);
            return mouseDown = true;   
        });

        allPixels.mouseover(function() {
            if(mouseDown) {
                $(this).css(`background-color`, `${color}`);
            }
        });

        allPixels.mouseup(() => {
            return mouseDown = false;
        });

        allPixels.dblclick(function() {
            mouseDown = false;
            $(this).css(`background-color`, ``);
        });
    }
});