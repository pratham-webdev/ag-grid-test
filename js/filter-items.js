const filterItems = [
    // {
    //     id:'filter-1',
    //     filterCategory:'RecentlyUsed',
    //     FilterName:'Recently Used',
    //     filters:[
    //         {
    //             category:'FinanceManager',
    //             name:'Finance Manager',
    //             filterOptions:['Jackson Pollock',"Bruce Willis","Hannibal Lecter"]
    //         },
    //         {
    //             category:'SalesManager',
    //             name:'Sales Manager',
    //             filterOptions:['Amy Bauer',"Francisca Millet","Abby Finch"]
    //         }
    //     ]
    // },
    {
        id: 'filter-1',
        FilterCategory: 'Eligibility',
        FilterName: 'Eligible/Not Eligible',
        filters: ['Eligible', 'Not Eligible']
    },
    {
        id: 'filter-2',
        FilterCategory: 'FinanceManager',
        FilterName: 'Finance Manager',
        filters: ['Jackson Pollock', "Bruce Willis", "Hannibal Lecter"]
    },
    {
        id: 'filter-3',
        FilterCategory: 'SalesManager',
        FilterName: 'Sales Manager',
        filters: ['Amy Bauer', "Francisca Millet", "Abby Finch"]
    },
    {
        id: 'filter-4',
        FilterCategory: 'New/Used',
        FilterName: 'New',
        filters: ['New', 'Used']
    },
    {
        id: 'filter-5',
        FilterCategory: 'Model',
        FilterName: 'Model',
        filters: ['Whitehawk', 'Jayflight']
    },
    {
        id: 'filter-6',
        FilterCategory: 'Class',
        FilterName: 'Class',
        filters: ['Jayco', 'PPTD']
    }
]

const FilterPanel = `<div id="sidepanel-filter" class="sidepanel">
<div class="d-flex align-items-center justify-content-between border-bottom p-3">
<div id="filter-header" class="d-flex align-items-center"><h2 class="m-0">Filters</h2></div>
<button class="btn btn-sm btn-outline-primary" onclick="resetFilters()">Clear All</button>
</div>
<div class="button-section border">
    <button class="btn btn-outline-primary" onclick="showHide('sidepanel-filter')">Close</button>
    <!-- <button class="btn btn-primary">Apply</button> -->
</div>
</div>`;

const FilterMain = () => {
    return `<div class="row h-100 px-3">
<div id="filter-tabs" class="col-5 border-end h-100">
</div>
<div id="filter-check" class="col-7 pt-3 h-100">
</div>
</div>`}

const FilterItems = (data) => {
    return `<div id="${data.id}" class="pt-3 filter-tab-item">${data.FilterName}</div>`
}

const FilterCheck = (data, category) => {

    let clickVar = `'${data}'` + "," + `'${category}'`;

    return `<div class="form-check">
    <input class="form-check-input" type="checkbox" onclick="filter(${clickVar})">
    <label class="form-check-label">
      ${data}
    </label>
  </div>`
}

$('#mainView').append(FilterPanel);
$('#sidepanel-filter').append(FilterMain);

filterItems.forEach((item) => {
    $('#filter-tabs').append(FilterItems(item));
    if (item.id == 'filter-1') {
        $('#filter-tabs #filter-1').addClass('filter-tab-active');
    }
    $('#filter-check').append(`<div class=${item.id}></div>`);
    item.filters.forEach((el) => {
        $(`#filter-check .${item.id}`).append(FilterCheck(el, item.FilterCategory));
    });
    item.id == 'filter-1' ? $(`.${item.id}`).show() : $(`.${item.id}`).hide();
});

$('.filter-tab-item').click(function () {
    let tabId = this.id;
    let prevId = $('.filter-tab-active').attr('id');
    $(`.${prevId}`).hide();
    $(`.${tabId}`).show();
    $('.filter-tab-active').removeClass('filter-tab-active');
    $(`#${tabId}`).addClass('filter-tab-active');
});

// if(window.innerWidth < 1200){
    $('#filter-header').prepend(`<div class="me-3" onclick="showHide('sidepanel-filter')"><img src="img/close.svg"></div>`)


