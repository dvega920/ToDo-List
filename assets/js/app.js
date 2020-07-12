// Event Listener - jQuery selects <ul> and adds/removes the css class="completed" to the li whenever the li is clicked

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
})

// Event Listener - jQuery selects <ul> and when <span> (trashcan) is clicked triggers fadeOut(). "this" refers to <span> and the fadeOut is occuring on the parent of the <span> which is the <li>. The callback function of the fadeOut then refers to removing <li>.

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(function () {
        $(this).remove();
    })
    // passed in event "e" obj to first callback and then running stopPropagation to prevent "event bubbling"
    e.stopPropagation();
});

//Event Listener - jQuery selects <input> element and creates a new ToDo when "enter" key is pressed. callback checks if event or "e" keycode matches the "enter" keycode. if yes, store the value of input to a new variable and appends new <li> to the <ul>
$("input[type='text']").on("keypress", function (e) {
    if (e.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li> <span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

$("#plus").on("click", function () {
    $("input[type='text'").fadeToggle()
})