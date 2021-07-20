const columnItems = [
    {
        id: 'column-1',
        name: 'Deal Date'
    },
    {
        id: 'column-2',
        name: 'Finance Manager'
    },
    {
        id: 'column-3',
        name: 'Sales Manager'
    },
    {
        id: 'column-4',
        name: 'Eligible/Not Eligible'
    },
    {
        id: 'column-5',
        name: 'Deal Reference Number'
    },
    {
        id: 'column-6',
        name: 'Net Sale Price'
    }
]

const ColumnPanel = `<div id="sidepanel-columns" class="sidepanel">
<div class="d-flex align-items-center justify-content-between border-bottom p-3">
<div id="columns-header" class="d-flex align-items-center"><h2 class="m-0">Columns</h2></div>
<button class="btn btn-sm btn-outline-primary" onclick="resetCols()">Reset</button>
</div>
<div id="column-checks" class="p-3"></div>
<div class="button-section border">
    <button class="btn btn-outline-primary" onclick="showHide('sidepanel-columns')">Close</button>
    <!-- <button class="btn btn-primary">Apply</button> -->
</div>
</div>`;

const columnCheckBoxes = (data) => {
    return `<div class="form-check">
    <input id="${data.id}" class="form-check-input" type="checkbox" checked>
    <label class="form-check-label">
     ${data.name}
    </label>
  </div>`
}

$('#mainView').append(ColumnPanel);
columnItems.forEach((item) => {
    $('#column-checks').append(columnCheckBoxes(item));
});

if (window.innerWidth < 1200) {
    $('#columns-header').prepend(`<div class="me-3" onclick="showHide('sidepanel-columns')"><img src="img/close.svg"></div>`)
}

// function hideCol() {
//     gridOptions.columnApi.applyColumnState({
//         state: [
//             { colId: 'DealReferenceNumber', hide: true },
//             { colId: 'NetSalePrice', hide: true },
//         ],
//     });
// }
function resetCols() {
    gridOptions.columnApi.resetColumnState();
    $('#column-checks .form-check-input').prop('checked', true);
}

$('#column-checks .form-check-input').click(function () {
    // alert(this.id);
    console.log(this.checked);
    // console.log(gridOptions.columnApi.getColumnState());
    let currentColState = gridOptions.columnApi.getColumnState();
    let columnPosition = Number(this.id.slice(this.id.length - 1, this.id.length));
    // console.log(columnPosition);
    if (this.checked == false) {
        currentColState[columnPosition - 1].hide = true;
        gridOptions.columnApi.applyColumnState({ state: currentColState });
    }
    else {
        currentColState[columnPosition - 1].hide = false;
        gridOptions.columnApi.applyColumnState({ state: currentColState });
    }

});