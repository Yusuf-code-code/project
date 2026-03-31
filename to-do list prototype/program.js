let input = document.getElementById("input");
let d = document.getElementById("parent");
let p = input.value;

    function myFunction() {
        if(input.value.trim() == "") {
            alert("please enter a value");
        }
        else{
        let h = document.createElement("li");
        h.textContent = input.value
        d.append(h);
        input.value = "";
        }
      

    }
    function myFunction2(){
        let b = document.querySelector("li");
        if(b) {
        d.removeChild(d.lastElementChild);
        }
    
    }