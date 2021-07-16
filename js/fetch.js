// fetch(dataUrl)
//     .then(function (data) {
//         data.json().then(function (resp) {
//             rowData = resp.map(function (item) {
//                 let tempDate = new Date(item.DealDate);
//                 item.DealDate = tempDate.toLocaleDateString();
//                 item.Eligibility = item.Eligibility == false ? "Eligible" : "Not Eligible";
//                 return item;
//             });
//         })
//             .then(function () {
//                 const gridOptions = {
//                     defaultColDef: {
//                         resizable: true,
//                         filter: true
//                     },
//                     columnDefs: columnDefs,
//                     rowData: rowData,
//                     animateRows: true,
//                     isExternalFilterPresent: isExternalFilterPresent,
//                     doesExternalFilterPass: doesExternalFilterPass
//                 };
//                 new agGrid.Grid(eGridDiv, gridOptions);
//                 gridOptions.api.sizeColumnsToFit();
//             });
//     })
//     .catch(function (error) {
//         console.log(error);
//     });



// external filter////////////////


// function isExternalFilterPresent() {
//     return FinanceFilter !== 'everyone';
// }

// function doesExternalFilterPass(node) {
//     if (FinanceFilter == 'Jackson Pollock') {
//         return node.data.FinanceManager == FinanceFilter;
//     }
//     else{
//         return true;
//     }
// }

// function filterthis(option) {
//     FinanceFilter = option;
//     gridOptions.api.onFilterChanged();
// }


// parsing data ///////////////////


// function parseEligibility(data) {
//     return data.value == false ? "Eligible" : "Not Eligible";
// }

// function parseDate(data) {
//     return data.value ? (new Date(data.value).toLocaleDateString()) : '';
// }