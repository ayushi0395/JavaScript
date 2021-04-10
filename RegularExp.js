// REGULAR  EXPRESSION  :-
		function demo
		{
			var re=/\d/;          //  data entered by user should have only one digit in it .

        /*    var re=/^\d/;                               -----should start withh  only one digit in it .	
            var re=/\d$/;                                 -----should end with only  one digit in it .	
            var re=/^\d$/;                                -----should start and end with  a digit in it .	
            var re=/^\d\d\d\d\d$/;                        -----should start and end with a  digit and should have 5 digits in it .	
            var re=/^\d\d\d\d\d\d\d\d\d\d$/;              -----should start and end with a  digit and should have 10 digits in it ..	
            var re=/^\d{10}$/;                            -----should start and end with a  digit and should have 10 digits in it .	
            var re=/^\d{3,6}$/;                           -----should have 3 ,4 ,5 or 6 digits in it and should start and end with a digit.
            var re=/^\d{2}\-\d{2}\-\d{4}$/;               -----format of date (with - in between ).	
            var re=/^\d{2}\s\d{2}\s\d{4}$/;               -----format of date with space (s) in between .	
            var re=/^\w$/;                                -----should have digit or a character  in it .		
            var re=/^\w{5}$/;                             -----should have 5 digit , character or combination of both in it .		
            var re=/^\w{2,5}$/;                           -----should have 2,3,4 or 5 digit , character or combination of both   in it .		
            var re=/^\w{3,10}\ @ \w{5}\ . \w{3}$/;        -----format of email.		
        */

			x=document.getElementById('t1').value;
			if(re.test(x))
			{
				document.getElementById('t2').innerHTML="welcome";      //if got the correct order for data , welcome msg  
			}
			else
			{
				document.getElementById('t2').innerHTML="invalid";     //if got the incorrect order for data , invalid msg  
			}

		}
	