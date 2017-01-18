
$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    switch (page.name) {
        case 'OrderList':
            myApp.alert('Here comes About OrderList');
            break;
        case 'OrderDetail':
            myApp.alert('Here comes About OrderDetail');
            break;
    }
});