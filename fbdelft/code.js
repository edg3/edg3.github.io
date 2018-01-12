// Make all text-lists have values and "names"
// - spit
// - many people
// - coal
// - total

// make any adjustment in text list update total


function calcSpit()
{
    var total = 0.0;

    var smeat = document.getElementById('selMeat');
    var choice_meat = smeat.options[smeat.selectedIndex].value;

    var meat_initial_cost = 0.0;
    var meat_cost_per_10 = 0.0;
    var meat_season_addition = 0.0;

    switch (choice_meat)
    {
        case '1':
            //lamb
            meat_initial_cost = 300;
            meat_cost_per_10 = 150;
            meat_season_addition = 330.0;
            break;
        case '2':
            //beef
            meat_initial_cost = 250;
            meat_cost_per_10 = 100;
            meat_season_addition = 270.0;
            break;
        case '3':
            //pork
            meat_initial_cost = 450;
            meat_cost_per_10 = 150;
            meat_season_addition = 250.0;
            break;
        case '4':
            //lamb
            meat_initial_cost = 330;
            meat_cost_per_10 = 90;
            meat_season_addition = 295.0;
            break;
    }

    var speop = document.getElementById('selPeop');
    var choice_peop = speop.options[speop.selectedIndex].value;

    var people_num = 0.0;

    switch (choice_peop)
    {
        case '1':
            people_num = 2.0;
            break;
        case '2':
            people_num = 3.0;
            break;
        case '3':
            people_num = 4.0;
            break;
        case '4':
            people_num = 5.0;
            break;
        case '5':
            people_num = 6.0;
            break;
    }

    var schar = document.getElementById('selChar');
    var choice_char = schar.options[schar.selectedIndex].value;

    var charcoal_bag_cost = 25.0;
    var charcoal_cost = 0.0;

    switch (choice_char)
    {
        case '1':
            charcoal_cost = charcoal_bag_cost * people_num;
            break;
        case '2':
            charcoal_cost = 0.0;
            break;
    }

    var sseas = document.getElementById('selSeas');
    var choice_seas = sseas.options[sseas.selectedIndex].value;

    var season_cost = 0.0;

    switch (choice_seas)
    {
        case '1': //plain
            season_cost = 0.0;
            break;
        case '2': //seasoned
            season_cost = meat_season_addition;
            break;
    }

    var meat_cost = meat_initial_cost + (meat_cost_per_10 * people_num);

    total = meat_cost + charcoal_cost + season_cost;

    var subtotal_div = document.getElementById('subtotal');
    subtotal_div.innerHTML = 'R ' + total + '.00 &#61; R ' + (total + 500) + '.00';

    var charcoal_est = document.getElementById('sub_charc');
    charcoal_est.innerHTML = 'R ' + charcoal_cost + '.00';

    var seasoned_est = document.getElementById('sub_seas');
    seasoned_est.innerHTML = 'R ' + season_cost + '.00';

    var meat_est = document.getElementById('sub_meat');
    meat_est.innerHTML = 'R ' + meat_cost + '.00';
}