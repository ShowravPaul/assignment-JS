// kilometer to meter convert

function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "Invalid input!! Enter a positve number.";
    }
        
    var meter = kilometer * 1000;
    return meter;
}



// finding total cost of some smart gadgets

function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        return "Invalid input!! All inputs should be positive number.";
    }

    var totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalCost;
}



// finding total cost of hotel rent

function hotelCost(day){
    if(day < 0){
        return "Invalid input!! Enter a positive integer.";
    }

    var totalCost = 0;
    if(day <= 10) totalCost += day * 100;
    else if(day <= 20){
        totalCost += 10 * 100;
        totalCost += (day-10) * 80;
    }
    else{
        totalCost += 10 * 100;
        totalCost += 10 * 80;
        totalCost += (day-20) * 50;
    }
    return totalCost;
}



// finding biggest name among friends

function megaFriend(friends){
    for(var i=0; i<friends.length; i++){
        if(typeof(friends[i]) != typeof("abc")) return "All elements of this array are not string!";
    }

    if(friends.length == 0){
        return "Empty array!! There is no name!";
    }

    var biggestName = "";
    for(var i=0; i<friends.length; i++){
        if(biggestName.length < friends[i].length){
            biggestName = friends[i];
        }
    }
    return biggestName;
}