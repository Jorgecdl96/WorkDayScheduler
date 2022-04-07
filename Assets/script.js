var currentDay = $('#currentDay');
var hour8 = $('#hr-8');
var hour9 = $('#hr-9');
var hour10 = $('#hr-10');
var hour11 = $('#hr-11');
var hour12 = $('#hr-12');
var hour13 = $('#hr-13');
var hour14 = $('#hr-14');
var hour15 = $('#hr-15');
var hour16 = $('#hr-16');
var saveBtn = $('.saveBtn');


currentDay.text(moment().format("MMM Do YY"));

var hoursPerDay = new Date ();

var hours = hoursPerDay.getHours();

var type = typeof(hours);
console.log(type);
console.log(hours);

var hour = [0,0,0,0,0,0,0,0,hour8,hour9,hour10,hour11,hour12,hour13,hour14,hour15,hour16];

console.log(hour.length)

for (let i = 8; i < hour.length; i++) {
    
    if (hours === i) {
        hour[i].addClass('present');
    }else if (hours > i){
        hour[i].addClass('past');
    }else if(hours < i){
        hour[i].addClass('future');
    }
}

function saveToLocalStorage(e){

    var btnNum = e.target.id;

    var arrayBtn = [0,0,0,0,0,0,0,0,'btn8', 'btn9', 'btn10', 'btn11', 'btn12', 'btn13', 'btn14', 'btn15', 'btn16'];

    for (let i = 8; i < arrayBtn.length; i++) {
        
        if(btnNum === arrayBtn[i]){

            hour[i] = hour[i].val();

            localStorage.setItem('hour' + i, hour[i]);

        }
        
    }

}

for (let i = 8; i < hour.length; i++) {

    hour[i].val(localStorage.getItem('hour' + i));
    
}

//$('#hr-8').val(localStorage.getItem('hour8'));

saveBtn.on('click', saveToLocalStorage);

//saveBtn.on('click', function(e){
    //console.log(e.target.id);

    // var btnNum = e.target.id;

    // var arrayBtn = [0,0,0,0,0,0,0,0,'btn8', 'btn9', 'btn10', 'btn11', 'btn12', 'btn13', 'btn14', 'btn15', 'btn16'];

    // for (let i = 8; i < arrayBtn.length; i++) {
        
    //     if(btnNum === arrayBtn[i]){

    //         hour[i] = hour[i].val();

    //         localStorage.setItem('hour' + i, hour[i]);

    //     }
        
    // }

    // switch (e.target.id) {
    //     case 'btn8':
    //         console.log('Hola');
    //         break;
            
    //     default:
    //         console.log('Quack');
    //         break;
    // }
//});

