const columnDefs = [
    { field: "DealDate", checkboxSelection: true},
    { field: "FinanceManager" },
    { field: "SalesManager" },
    { headerName: 'Eligible / Not Eligible', field: "Eligibility" },
    { field: "DealReferenceNumber" },
    { field: "NetSalePrice" },
];

const eGridDiv = document.querySelector('#myGrid');

const dataUrl = 'https://60effab6f587af00179d3bc8.mockapi.io/Deals';

const gridOptions = {
    defaultColDef: {
        resizable: true,
        filter: true,
        sortable: true
    },
    columnDefs: columnDefs,
    pagination: true,
    paginationPageSize:15
    // paginationAutoPageSize:true
};
new agGrid.Grid(eGridDiv, gridOptions);
if (window.innerWidth > 1200) {
    gridOptions.api.sizeColumnsToFit();

}

agGrid.simpleHttpRequest({ url: dataUrl })
    .then(data => {
        gridOptions.api.setRowData(data);
    });

function filter(name,value) {
    // get filter instance
    const filterInstance = gridOptions.api.getFilterInstance(value);

    // get filter model
    const model = filterInstance.getModel();

    if(model !== null && model.filter == name){
        filterInstance.setModel({
            type: 'equals',
            filter: null,
        });
    }
    else{
    // set filter model and update
    filterInstance.setModel({
        type: 'equals',
        filter: name,
    });
}

    // refresh rows based on the filter (not automatic to allow for batching multiple filters)
    gridOptions.api.onFilterChanged();
}

function resetFilters() {
    gridOptions.api.setFilterModel(null);
    $('#filter-check .form-check-input').prop('checked',false);
}

function showHide(option) {
    // console.log($(`.sidepanel-active`).attr('id'));
    if(option !== $(`.sidepanel-active`).attr('id')){
    $(`.sidepanel-active`).hide();
    $(`.sidepanel-active`).removeClass('sidepanel-active');
    $(`.button-active`).removeClass(`active button-active`);
    $(`#${option}`).show();
    $(`#${option}`).addClass('sidepanel-active');
    $(`.${option}`).addClass('active button-active');
    }
    else{
    $(`#${option}`).hide();
    $(`#${option}`).removeClass('sidepanel-active');
    $(`.button-active`).removeClass(`active button-active`);
    }
    
}

function exportCSV() {
    gridOptions.api.exportDataAsCsv({fileName:'sales-log'});
  }

  function onPageSizeChanged() {
    var value = document.getElementById('page-size').value;
    gridOptions.api.paginationSetPageSize(Number(value));
  }