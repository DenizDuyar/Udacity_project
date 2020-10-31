// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

  // Your code goes here!

    const table = document.getElementById("pixelCanvas");
    let window = "";

    for (var x = 0; x < height; x++) {
        window += '<tr class="row-' + x + '">';

        for (var y = 0; y < width; y++) {
            window += '<td class="cell" id="row-' + x + '_cell-' + y + '"></td>';
                                        }
        window += '</tr>';
                                    }
    table.innerHTML = window;

    addClickEventToCells();
                              }

function Getdata() {

  event.preventDefault();
  const height = document.getElementById('inputHeight').value;
  const  width= document.getElementById('inputWidth').value;
  makeGrid(height, width);
                  }

function addClickEventToCells() {

    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');

    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            var clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
                                                            });
                                          }
                                }

document.getElementById('sizePicker').onsubmit = function () {
  Getdata();
                                                              };
