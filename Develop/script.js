//Current Date 
$(document).ready(function() {
    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);
    });

    $("#clear").click(function() {
        localStorage.clear();
        location.reload()
    });

        // 9 am----------------------
    
        var input_textarea1 = document.querySelector('#note1');
    var save_button1 = document.querySelector('#savenote1');
//save text to display
    input_textarea1.value = localStorage.getItem('content1');
//inputs text into text area
    savenote1.addEventListener('click', updateOutput1);
//local storage
    function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
    };

     
        // 10 am----------------------
   
        var input_textarea2 = document.querySelector('#note2');
    var save_button2 = document.querySelector('#savenote2');
//save text to display
    input_textarea2.value = localStorage.getItem('content2');
//inputs text into text area
    savenote2.addEventListener('click', updateOutput2);
//local storage
    function updateOutput2() {
    localStorage.setItem('content2', input_textarea2.value);
    };

        // 11 am ------------------------------
   
        var input_textarea3 = document.querySelector('#note3');
    var save_button3 = document.querySelector('#savenote3');
//save text to display
    input_textarea3.value = localStorage.getItem('content3');
//inputs text into text area
    savenote3.addEventListener('click', updateOutput3);
//local storage
    function updateOutput3() {
    localStorage.setItem('content3', input_textarea3.value);
    };
       // 12 pm ---------------------------
    
       var input_textarea4 = document.querySelector('#note4');
    var save_button4 = document.querySelector('#savenote4');
//save text to display
    input_textarea4.value = localStorage.getItem('content4');
//inputs text into text area
    savenote4.addEventListener('click', updateOutput4);
//local storage
    function updateOutput4() {
    localStorage.setItem('content4', input_textarea4.value);
    };

        //1 pm -------------------------
    
        var input_textarea5 = document.querySelector('#note5');
    var save_button5 = document.querySelector('#savenote5');
//save text to display
    input_textarea5.value = localStorage.getItem('content5');
//inputs text into text area
    savenote5.addEventListener('click', updateOutput5);
//local storage
    function updateOutput5() {
    localStorage.setItem('content5', input_textarea5.value);
    };
   
        //2 pm ---------------------
   
        var input_textarea6 = document.querySelector('#note6');
    var save_button6 = document.querySelector('#savenote6');
//save text to display
    input_textarea6.value = localStorage.getItem('content6');
//inputs text into text area
    savenote6.addEventListener('click', updateOutput6);
//local storage
    function updateOutput6() {
    localStorage.setItem('content6', input_textarea6.value);
    };

        //3 pm ----------------------
    
        var input_textarea7 = document.querySelector('#note7');
    var save_button7 = document.querySelector('#savenote7');
//save text to display
    input_textarea7.value = localStorage.getItem('content7');
//inputs text into text area
    savenote7.addEventListener('click', updateOutput7);
//local storage
    function updateOutput7() {
    localStorage.setItem('content7', input_textarea7.value);
    };

        //4 pm --------------------------------
   
        var input_textarea8 = document.querySelector('#note8');
    var save_button8 = document.querySelector('#savenote8');
//save text to display
    input_textarea8.value = localStorage.getItem('content8');
//inputs text into text area
    savenote8.addEventListener('click', updateOutput8);
//local storage
    function updateOutput8() {
    localStorage.setItem('content8', input_textarea8.value);
    };


        //5pm ---------------------------
   
        var input_textarea9 = document.querySelector('#note9');
    var save_button9 = document.querySelector('#savenote9');
//save text to display
    input_textarea9.value = localStorage.getItem('content9');
//inputs text into text area
    savenote9.addEventListener('click', updateOutput9);
//local storage
    function updateOutput9() {
    localStorage.setItem('content9', input_textarea9.value);
    };

        //6pm -----------------------------
       
        var input_textarea10 = document.querySelector('#note10');
        var save_button10 = document.querySelector('#savenote10');
    //save text to display
        input_textarea10.value = localStorage.getItem('content10');
    //inputs text into text area
        savenote10.addEventListener('click', updateOutput10);
    //local storage
        function updateOutput10() {
        localStorage.setItem('content10', input_textarea10.value);
        };
        
        // 7 pm -----------------------------------

        var input_textarea11 = document.querySelector('#note11');
        var save_button11 = document.querySelector('#savenote11');
    //save text to display
        input_textarea11.value = localStorage.getItem('content11');
    //inputs text into text area
        savenote11.addEventListener('click', updateOutput11);
    //local storage
        function updateOutput11() {
        localStorage.setItem('content11', input_textarea11.value);
        };


    
    var now= new Date().getHours();

if (now > 9) {
    $("#note1").addClass("past");
	}	
    else if (now >= 9 && now < 10) {
        $("#note1").addClass("present");
	}
    else if (now < 9) {
        $("#note1").addClass("future");
    }
    
if (now > 10) {
     $("#note2").addClass("past");
        }
    else if (now >= 10 && now < 11) {
            $("#note2").addClass("present");
        }
    else if (now < 10) {
            $("#note2").addClass("future");
        }

if (now > 11) {
            $("#note3").addClass("past");
            }
            else if (now >= 11 && now < 12) {
                $("#note3").addClass("present");
            }
            else if (now < 11) {
                $("#note3").addClass("future");
            }

 if (now > 12) {
                $("#note4").addClass("past");
                }
                else if (now >= 12 && now < 13) {
                    $("#note4").addClass("present");
                }
                else if (now < 12) {
                    $("#note4").addClass("future");
                }
            
if (now > 13) {
                $("#note5").addClass("past");
                }
                else if (now >= 13 && now < 14) {
                    $("#note5").addClass("present");
                }
                else if (now < 13) {
                    $("#note5").addClass("future");
                }
            
if (now > 14) {
                $("#note6").addClass("past");
                }
                else if (now >= 14 && now < 15) {
                    $("#note6").addClass("present");
                }
                else if (now < 14) {
                    $("#note6").addClass("future");
                }
            
if (now > 15) {
                $("#note7").addClass("past");
                }
                else if (now >= 15 && now < 16) {
                    $("#note7").addClass("present");
                }
                else if (now < 15) {
                    $("#note7").addClass("future");
                }
            
if (now > 16) {
                $("#note8").addClass("past");
                }
                else if (now >= 16 && now < 17) {
                    $("#note8").addClass("present");
                }
                else if (now < 16) {
                    $("#note8").addClass("future");
                }
            
if (now > 17) {
                $("#note9").addClass("past");
                }
                else if (now >= 17 && now < 18) {
                    $("#note9").addClass("present");
                }
                else if (now < 17) {
                    $("#note9").addClass("future");
                }
            