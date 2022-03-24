function validate()
{
    let a=document.forms.form.email.value;
    if(a=="")
    {
        alert("Email field cannnot be empty");
        return false;
    }
    var atPos=a.indexOf("@");
    var dotPos=a.lastIndexOf(".");
    if(atPos<1 || dotPos<atPos+2 || dotPos+2>=a.length)
    {
        alert("Enter a Valid Email")
    }

    let b=document.forms.form.namesample.value;

    if(b=="")
    {
        alert("Enter name");
        return false
    }
    else if(b.length<4)
    {
        alert("Name should be more than 4 letters.");
        return false;
    }
}