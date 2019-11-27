function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("line_bars").style.visibility = 'hidden';
    document.getElementById("close_icon").style.visibility = 'visible';

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("close_icon").style.visibility = 'none';
    document.getElementById("line_bars").style.visibility = 'visible';
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


$(document).ready(function() {
    var data = [{
        "id": "1",
        "car_name": "Tiger Nixon",
        "car_price": "$320800",


    }, {
        "id": "2",
        "car_name": "Garrett Winters",
        "car_price": "$434343",


    }, {
        "id": "3",
        "car_name": "Ashton Cox",
        "car_price": "$86000",


    }, {
        "id": "4",
        "car_name": "Cedric Kelly",
        "car_price": "$433060",


    }, {
        "id": "5",
        "car_name": "Airi Satou",
        "car_price": "$162700",


    }, {
        "id": "6",
        "car_name": "Brielle Williamson",
        "car_price": "$372000",


    }, {
        "id": "7",
        "car_name": "Herrod Chandler",
        "car_price": "$137500",


    }, {
        "id": "8",
        "car_name": "Rhona Davidson",
        "car_price": "$327900",

        "profile_image": "default_profile.png"
    }, {
        "id": "9",
        "car_name": "Colleen Hurst",
        "car_price": "$205500",

    }, {
        "id": "10",
        "car_name": "Sonya Frost",
        "car_price": "103600",


    }];

    $('#txt-search').keyup(function() {
        var searchField = $(this).val();
        //console.log(searchField);
        if (searchField === '') {
            $('#filter-records').html('');
            return;
        }

        var regex = new RegExp(searchField, "i");
        var output = '<div class="row">';
        var count = 1;
        $.each(data, function(key, val) {
            if ((val.car_price.search(regex) != -1) || (val.car_name.search(regex) != -1)) {
                output += '<div class="col-6 col-md-6  well content_piece">';
                output += '<div class="row">';
                output += '<div class="col-md-5 col-6 manage_image"><img class="img-responsive" src="' + 'https://via.placeholder.com/80' + '" alt="' + val.car_name + '" /></div>';
                output += '<div class="col-md-7 col-6 manage_content">';
                output += '<h5>' + val.car_name + '</h5>';
                output += '<h5>' + val.car_price + '</h5>';
                output += '</div>';
                output += '</div>';
                output += '</div>';
                if (count % 2 == 0) {
                    output += '</div><div class="row">'
                }
                count++;
            }
        });
        output += '</div>';
        $('#filter-records').html(output);
    })
});

function test() {
    document.getElementById("popover_data").style.display = "block";
}

function close_overlay() {
    document.getElementById("popover_data").style.display = "none";
}

function fetchData() {
    var x = document.getElementById("txt-search");
    var y = x.value;
    console.log(x.value);

    var node = document.createElement("LI");
    var textnode = document.createTextNode(y);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}