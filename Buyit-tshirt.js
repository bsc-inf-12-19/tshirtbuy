function thatForm(){
    var search = document.getElementById("form").value
    if(search){
        alert("No tshirt available right now. out of order, try to check another time")
    }
    else if(search == ""){
        alert("Please type something")
    }
}
function order(){
    document.getElementById("order").innerHTML = "Out of order"
}