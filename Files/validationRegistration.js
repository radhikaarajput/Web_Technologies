    function Validate()
	{

        var fname= document.getElementById("f").value;
        var lname= document.getElementById("l").value;
        var email= document.getElementById("email").value;
        var pno= document.getElementById("pno").value;
		
		var p= document.getElementById("p").value;			
		var c= document.getElementById("cp").value;
		
		if(!letters.test(fname))
		{
            alert('Name field required only alphabet characters');
        return false;
            
        }
        else if(!letters.test(lname))
		{
            alert('Name field required only alphabet characters');
        return false;
            
		}
         
        else if (!filter.test(email))
		{
            alert('Invalid email');
        return false;
            
		}
		
		else if(pno.length!=10)
		{
            alert('10 Characters');
        return false;
            
		}
		else if(p != cp)
		{
            alert ('Password Not Matched');
        return false;
            
        }  
		
		else
		{				
        alert('Sucessfully Registered');
        return true;
		}
	}

