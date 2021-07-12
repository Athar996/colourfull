function change()
{
    var r=Math.floor(Math.random() * 255)
    var g=Math.floor(Math.random() * 255)
    var b=Math.floor(Math.random() * 255)                   
    // var myclr="rgb(" + a + "," + b + "," + c + d + "," + e + "," + f + ")"
    // document.getElementById("myid").style.backgroundColor = myclr
    
    var myclr="rgb(" + r + "," + g + "," + b + ")"
    var myclr2="rgb(" + g + "," + b + "," + r + ")"
    var myclr3="rgb(" + b + "," + r + "," + g + ")"            

    var myclr4="rgb(" + r + "," + r + "," + r + ")"
    var myclr5="rgb(" + g + "," + g + "," + g + ")"
    var myclr6="rgb(" + b + "," + b + "," + b + ")"            
                
    
    document.getElementById("one").style.backgroundColor = myclr
    document.getElementById("two").style.backgroundColor = myclr2
    document.getElementById("three").style.backgroundColor = myclr3
    
    document.getElementById("four").style.backgroundColor = myclr4
    document.getElementById("five").style.backgroundColor = myclr5
    document.getElementById("six").style.backgroundColor = myclr6
}