//Function display
function display(p){
    p.style.display='flex';
    /*p.style.alignItems='center';*/
}


//Books
document.getElementById('books').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    var elmnt = document.getElementById("books-sell");
    display(elmnt);
  elmnt.scrollIntoView();
  });

//Tools
document.getElementById('tools').addEventListener('click',()  =>{
  //window.location.href="#tiles.sell";
  var elmnt = document.getElementById("tools-sell");
  display(elmnt);
elmnt.scrollIntoView();
});


//Year1
document.getElementById('year1').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    var elmnt = document.getElementById("year1-section");
    display(elmnt);
  elmnt.scrollIntoView();
  });

//Year2
document.getElementById('year2').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("year1-section").style.display='none';
    var elmnt = document.getElementById("year2-section");
    display(elmnt);
  elmnt.scrollIntoView();
  });

//Year3
document.getElementById('year3').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("year1-section").style.display='none';
    document.getElementById("year2-section").style.display='none';
    var elmnt = document.getElementById("year3-section");
    display(elmnt);
  elmnt.scrollIntoView();
  });

//Year4
document.getElementById('year4').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("year1-section").style.display='none';
    document.getElementById("year2-section").style.display='none';
    document.getElementById("year3-section").style.display='none';
    var elmnt = document.getElementById("year4-section");
    display(elmnt);
  elmnt.scrollIntoView();
  });

//sell tool
document.getElementById('tools-sell').addEventListener('click',()  =>{
  //window.location.href="#tiles.sell";
  document.getElementById("year1-section").style.display='none';
  document.getElementById("year2-section").style.display='none';
  document.getElementById("year3-section").style.display='none';
  document.getElementById("year4-section").style.display='none';
  var elmnt = document.getElementById("tools-sell");
  display(elmnt);
elmnt.scrollIntoView();
});


//Home Buttons

//home0
document.getElementById('home-btn0').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    var elmnt = document.getElementById("top");
  elmnt.scrollIntoView();
  });

  document.getElementById('home-btn1').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("books-sell").style.display='none';
    var elmnt = document.getElementById("top");
  elmnt.scrollIntoView();
  });
 
document.getElementById('home-btn2').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("books-sell").style.display='none';
    var elmnt = document.getElementById("top");
  elmnt.scrollIntoView();
  });
 
  document.getElementById('home-btn3').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("books-sell").style.display='none';
    var elmnt = document.getElementById("top");
  elmnt.scrollIntoView();
  });
 
  document.getElementById('home-btn4').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("books-sell").style.display='none';
    var elmnt = document.getElementById("top");
  elmnt.scrollIntoView();
  });

  document.getElementById('home-btn5').addEventListener('click',()  =>{
    //window.location.href="#tiles.sell";
    document.getElementById("books-sell").style.display='none';
    var elmnt = document.getElementById("top");
  elmnt.scrollIntoView();
  });
