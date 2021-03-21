$(function () {
    var productTabList = $('.product-tab-list'),
        tabContent = $('.tab-content');

    data.forEach(function(item, index){
        var tab = $('<a data-toggle="tab"></a>').attr('href','#tab' + index);
        (0 === index) && tab.addClass('active');
        tab.append('<h4>' + item.category + '</h4>');

        productTabList.append(tab); 

        tabPane = $('<div class="tab-pane"></div>').attr('id', 'tab' + index);
        (0 === index) && tabPane.addClass('active');
        tabContent.append(tabPane);

        row = $('<div class="row"></div>');
        tabPane.append(row);
        item.products.forEach(function(product){
            // var productWrapper = $('<div class="row"><div class="custom-col-5"><div class="product-wrapper mb-25"></div></div></div>')
            var productWrapper = $('<div class="product-wrapper mb-25"></div>');
            productWrapper.append($('<div class="product-img">' + 
                                        '<a href="#"><img src="'+ product['product-image'] +'" alt=""></a>' + 
                                    '</div>'));
            productWrapper.append($('<div class="product-content">' + 
                                        '<h4><a href="#">' + product['product-name'] + '</a></h4>' + 
                                        '<div class="product-price-wrapper">' + 
                                            '<span>' + product['product-price'] + '</span>' + 
                                            (product['product-old-price'] ? '<span class="product-price-old">' + product['product-old-price'] + '</span>' : '') +
                                        '</div>' + 
                                    '</div>'));
            row.append($('<div class="custom-col-5"></div>').append(productWrapper));
        });

        
        
    });
});

// <div class="tab-content jump">
				
//     <div id="tab1" class="tab-pane active">
//         <div class="row">
            
//             <div class="custom-col-5">
//                 <div class="product-wrapper mb-25">
//                     <div class="product-img">
//                         <a href="#">
//                             <img src="assets/img/products/product-1.jpg" alt="">
//                         </a>
//                     </div>
//                     <div class="product-content">
//                         <h4>
//                             <a href="#">PRODUCTS NAME HERE</a>
//                         </h4>
//                         <div class="product-price-wrapper">
//                             <span>$100.00</span>
//                             <span class="product-price-old">$120.00</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>