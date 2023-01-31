


/* 1  Get the value of each of the inputs in 
the HTML file when the form is submitted. Remember the event.preventDefault() */


//We create a var getForm to take form 
let makeForm = document.getElementById('libform')

makeForm.addEventListener("submit",Madlib)


function Madlib(e){
    e.preventDefault()
    let noun = document.getElementById('noun').value.trim()
    let adjective = document.getElementById('adjective').value.trim()
    let person = document.getElementById('person').value.trim()
    let verb = document.getElementById('verb').value.trim()
    let place = document.getElementById('place').value.trim();
    let span = document.getElementById('story')
    let words = [ person, verb, noun, adjective, place ]


//2 Make sure the values are not empty  

    let empty=false
    words.forEach(element => {
        if(element.length==0 || !isNaN(element)) {
            empty=true
        }
        
    });

    if(empty){
        alert('At least a field is empty')
    }
    else{
//3  Write a story that uses each of the values.
        span.innerHTML = words.join(' ')
    }

//4  Make sure you check the console for errors when playing the game.

// Done

}