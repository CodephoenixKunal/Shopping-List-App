 /* Function ready : JQuery's "ready" method checks that the page is ready for your code to work with 
When the page is ready, the function inside the parenthesis of the the .ready() method is run.
Its a good practice to wrap the entire code within this method as then, it can be used elsewhere on the page or even in another file
 
*/
 // $(function () {

 //     let $varJQ1
 //     let $varJQ2

 //     // $("li[id != 'one']").delay(500).fadeIn(1400)

 //     // / The above is the example of chaining and animation

 //     $varJQ1 = $("ul").html()
 //     // $varJQ2 = $("li").html()

 //     // $varJQ1 = $("ul").text()
 //     $varJQ2 = $("li").text()

 //     let $listHTML = $("ul").html();
 //     $("ul").append($listHTML);


 //     let $listText = $("ul").text();
 //     $("ul").append("<p>" + $listText + "</p>")

 //     let $listItemHTML = $("li:nth-child(2)").html()
 //     $("li").append("<i>" + $listItemHTML + "</i>")

 //     console.log($varJQ1, $varJQ2, $listHTML)


 // }); /* "Function ready" - page ends */

 // ===============================================================================================
 // Staring afresh


 $(document).ready(function () {
     /* alternative sybtax : $(function(){
 }) */


     let $listHTML = $("ul").html()
     $("ul").append($listHTML)

     //  console.log($("ul").text())

     let $listText = $("li").text()
     $("ul").append("<p>" + $listText + "</p>")

     let $listItemHTML = $("li:nth-child(2)").html()
     $("li").append("<i>" + $listItemHTML + "</i>")





     //  console.log($listText)
     console.log($listHTML)
     console.log($listItemHTML)
     console.log($("li:nth-child(2)").html())


     $("li:nth-child(3)").addClass("cool");
     $("li:nth-child(3)").text("This works too");

     $("li.hot").html(function () {
         return '<em>' + $(this).text() + "</em>"
     })

     $('li:contains("Fresh")').text('almonds')

     $("ul").before('<p class = "notice">Just Updated</p>');

     $("ul#listing").append("<li> NEW ITEM</li>")

     $("li:last-child").addClass("hot bul")

     let $newListItem = $("<li><em>GLUTEN-FREE</em> SOY Sauce</li>").addClass("hot bul")

     $("li:nth-child(4)").after($newListItem);

     $("ul").attr("id", "group");

     $("li").each(function () {
         let ids = this.id;
         console.log(ids);
         $(this).append('<span class = "order"> ' + ids + ' </span>');
     })

     /* Example using 'Events' */
     let ids = '';
     let $listItems = $("li");

     $listItems.on("mouseover click", function (e) {
         console.log(e)
         ids = this.id;
         $listItems.children("span").remove();
         $(this).append('<span class = "priority" > ' + ids + '</span>');
     })

     $listItems.on("mouseout", (function () {
         $(this).children("span").remove();
     }));

     //  $("li").on("click", function (e) {
     //      $("li span").remove();
     //      let date = new Date(); /* Created a new Date object */
     //      date.setTime(e.timeStamp);
     //      let clicked = date.toDateString();

     //      $(this).append('<span class = "date">' + clicked + ' ' + e.type + '</span>')

     //  })

     let $footNotes = $('<div id = "notes"></div>');

     /*Delegating events */

     $("ul").on("click", {
         status: "Important"
     }, function (e) {


         $("ul").after($footNotes);

         let listItem = 'Item: ' + e.target.textContent + '</br>';
         let itemStatus = 'Status: ' + e.data.status + '</br>';
         let eventType = 'Event: ' + e.type;
         $("#notes").html(listItem + itemStatus + eventType)



     })
     /* The below is to remove the access data being accumulated */
     $footNotes.on("mouseout", function () {

         $(this).remove()
     })

     /* Effects in JQuery */

     $("h3").hide().slideDown();

     $("li").hide().each(function (index) {
         $(this).delay(700 * index).fadeIn(700);
     })

     //  $("li").on("click", function () {
     //      $(this).fadeOut(700)
     //  })



     /* CSS Animating */
     $("li").on("click", function () {
         $(this).animate({
             opacity: 0.0,
             paddingLeft: "+=80"
         }, 500, function () {
             $(this).remove();
         });
     });


     /* Traversing the DOM */

     $("ul").hide();
     $("h1").append(' <a>  show</a>');
     $("h1").on("click", function () {
         $("div #secondHead").next().next().fadeIn(500).children(".hot").addClass("complete");
         $("h1").find('a').fadeOut()
     })



 });