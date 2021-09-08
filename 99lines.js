var friends = [
    'john', 'chris', 'jaison',
    'tylan', 'london'

];
for(let i = 0; i < friends.length; i++){
    console.log(friends[i] );

    var word = "lines";
    var count = 99;
    
    

    while (count > 0) {
        if (count == 1) {
            word = "line";
        }
        console.log(count + " " + word + " of code in the file");
        console.log(count + " " + word + " of code;");
        count = count - 1;
        // count > 1 is for 2 - initial count
        if (count > 1) {
            word = "lines";
            console.log(friends[i] +" "+"strikes one out, clears it all out, " + count + " " + word + " of code in the file.");
            
        }
        // count == 1 for 1 only
        else if (count == 1) {
            word = "line";
            console.log(friends[i]+ " " +"strikes one out, clears it all out, " + count + " " + word + " of code in the file.");
        }
        // count equal 0
        else if (count == 0) {
            word = "lines";
            console.log(friends[i]+ " " +"strikes one out, clears it all out, no " + word + " of code in the file.");
        }

    }
}

