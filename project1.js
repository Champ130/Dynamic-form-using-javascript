
function fun1(a){
    var select=document.getElementById("drop");
    var maindiv=document.getElementById("output");
    var add=document.createElement("button");
    var close=document.createElement("button");
    close.id="champ"
    close.innerHTML="x"
    var done=document.createElement("button")
 
    // close.classList="close";
    // close.id="cl"
    // add5.id="cam"
    // var input=document.createElement("input");
    // var input2=document.createElement("input");
    
if(select.value == "select"){
    alert("Please Select Value")


}else if(select.value == "Text" || select.value == "Number" || select.value == "Email"){
        // ---------created Element---------
        var div=document.createElement("div");
        var div1=document.createElement("div");
        var div2=document.createElement("div");
        var input=document.createElement("input");
        var spa=document.createElement("span")

        var input2=document.createElement("input");
        div.id="champ"
        input.id="value1";
        input2.id="value2";
        // input2.className="alpha"
        // input.className="delta"
        close.id="champ";
        div.id="box8"
        div2.id="box9"

        maindiv.appendChild(div);
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(spa)

        div.style.display="flex";
        div.style.justifyContent="space-between";
        div.style.padding="30px";
        div1.style.display="flex";
        div1.style.justifyContent="space-between";
        div1.appendChild(input);
        div1.appendChild(add);
        div2.appendChild(input2);
        div.appendChild(close);
        input.placeholder="Label";
        input2.placeholder=select.value;
        add.id="btn2";

        add.innerHTML="add";
        close.innerHTML="&times";
        add.setAttribute("onclick","fun2(this)");
        close.setAttribute("onclick","fun3(this)");

        

    }else if(select.value == "Radio"){
        // -------------Created Element------------
        var div3=document.createElement("div");
        var div4=document.createElement("div");
        var div5=document.createElement("div");
        var div6=document.createElement("div");
        var div7=document.createElement("div");
        var spa=document.createElement("span");
        var spa2=document.createElement("span");

        // div6.id="ch"

        var input=document.createElement("input");
        var input4=document.createElement("input");
        // var add2=document.createElement("button");
        var add3=document.createElement("button")
        // input3.id="value3";
        input4.id="value4";
        input.id="value1";
        // input.className="delta"
        // input4.className="alpha"
        div5.id="box3";
        div7.id="box4";
        div6.id="box5";
        div3.id="cha1";        

        maindiv.appendChild(div3);
        div3.appendChild(div4);
        div3.appendChild(div5);
        div3.appendChild(spa);
        div3.appendChild(spa2)
        // div3.appendChild(div6);
        div3.style.display="flex";
        div3.style.justifyContent="space-between";
        div3.style.padding="20px";
        div4.style.diaplay="flex";
        div4.style.justifyContent="space-between";
        div4.appendChild(input);
        div4.appendChild(add);
        div5.appendChild(div6)
        div5.appendChild(div7)
        div6.appendChild(input4);
        div6.appendChild(add3);
        div6.appendChild(done)
        div3.appendChild(close);
        input.placeholder="Label";
        input4.placeholder="Radio";
        add.id="btn2";
        add3.id="btn5";
        done.id="dd"
        done.innerHTML="Done"

                
        add.innerHTML="add";
        add3.innerHTML="add";
        close.innerHTML="x";
        close.setAttribute("onclick","fun3(this)");
        add.setAttribute("onclick","fun2(this)");
        add3.setAttribute("onclick","fun4(this)");
        done.setAttribute("onclick", "fun10(this)");


    }else if(select.value == "Checkbox"){
        var div8=document.createElement("div")
        var div9=document.createElement("div")
        var div10=document.createElement("div")
        var div11=document.createElement("div")
        var div12=document.createElement("div")
        var done4=document.createElement("button")
        var spa5=document.createElement("span")
        var spa4=document.createElement("span")
        var spa3=document.createElement("span")


        var input=document.createElement("input")
        var input5=document.createElement("input")
        var add4=document.createElement("button")
        add.id="btn3"
        add4.id="btn6"
        input.id="value1"
        // input.className="delta"
        input5.id="value5"
        // input5.value=" "
        // input5.className="alpha"
        div8.style.display="flex";
        div8.style.justifyContent="space-between";
        div8.style.padding="20px";
        div10.id="box3"
        div11.id="box10"
        div12.id="box6"
        done4.id="dddd";
        done4.innerHTML="Done"
        input.placeholder="Label"
        input5.placeholder="Checkbox"


        add.innerHTML="add"
        add4.innerHTML="add"
        close.innerHTML="x"

        maindiv.appendChild(div8)
        div8.appendChild(div9)
        div8.appendChild(div10)
        div9.appendChild(input)
        div9.appendChild(add)
        div10.appendChild(div11)
        div10.appendChild(div12)
        div11.appendChild(input5)
        div11.appendChild(add4)
        div11.appendChild(done4)
        div8.appendChild(spa3)
        div8.appendChild(spa4)
        div8.appendChild(spa5)
        div8.appendChild(close)

        add.setAttribute("onclick","fun2(this)");
        close.setAttribute("onclick","fun3(this)");
        add4.setAttribute("onclick","fun5(this)");
        done4.setAttribute("onclick", "fun9(this)");

    }else if(select.value == "Option"){
        var div13=document.createElement("div");
        var div14=document.createElement("div");
        var div15=document.createElement("div");
        var div16=document.createElement("div");
        var div17=document.createElement("div");
        var done3=document.createElement("button");
        var spa6=document.createElement("span");
        var spa7=document.createElement("span");
        var spa8=document.createElement("span");
        var spa9=document.createElement("span");


        var input=document.createElement("input");
        var input6=document.createElement("input");
        var add5=document.createElement("button");
        add.id="btn3";
        add5.id="btn4";
        input.id="value1";
        // input.className="delta"
        input6.id="value6";
        // input6.className="alpha"
        div13.style.display="flex";
        div13.style.justifyContent="space-between";
        div13.style.padding="20px";
        div15.id="box3";
        div16.id="box11";
        div17.id="box7";
        done3.id="ddd";
        done3.innerHTML="Done"
        input.placeholder="Label"
        input6.placeholder="Options"

     
        add.innerHTML="add";
        add5.innerHTML="add";
        close.innerHTML="x";

        maindiv.appendChild(div13);
        div13.appendChild(div14);
        div13.appendChild(div15);
        div14.appendChild(input);
        div14.appendChild(add);
        div15.appendChild(div16);
        div15.appendChild(div17);
        div16.appendChild(input6);
        div16.appendChild(add5);
        div16.appendChild(done3);
        div13.appendChild(spa6)
        div13.appendChild(spa7)
        div13.appendChild(spa8)
        div13.appendChild(spa9)
        div13.appendChild(close);
        sec=document.createElement("select");
        div17.appendChild(sec);
        sec.id="selecto";
        // add.id="cam"
        

        add.setAttribute("onclick","fun2(this)");
        close.setAttribute("onclick","fun3(this)");
        add5.setAttribute("onclick","fun6(this)");
        done3.setAttribute("onclick", "fun8(this)");

        
    }else{
        var btn=document.createElement("button");
        maindiv.appendChild(btn);
        btn.innerText="Submit";
        btn.type="submit";
        btn.id="submit";
        btn.setAttribute("onclick","fun7(this)");
    }

}

function fun2(a){
    var input=document.getElementById("value1").value
    a.parentNode.innerHTML= input +" "+ ':-'
   

}

function fun3(a){
    console.log(a);
    a.parentNode.remove();
    
}

function fun4(){
    var r=document.getElementById("box4")
    var r1=document.createElement("div")
    r.appendChild(r1)
    var r2=document.createElement("input")
    r2.type="radio"
    r2.name="champion"
    // r2.value="one"
    r1.appendChild(r2)
    var r3=document.createElement("label")
    r1.appendChild(r3)
    var r4=document.getElementById("value4")
    r3.innerHTML=r4.value 
    // r.value=""
}

function fun5(){
    var r=document.getElementById("box6")
    var r1=document.createElement("div")
    r.appendChild(r1)
    var r2=document.createElement("input")
    r2.type="checkbox"
    r2.name="changa"
    // r2.value="multiple"
    r2.id="max"
    r1.appendChild(r2)
    var r3=document.createElement("label")
    r1.appendChild(r3)
    var r4=document.getElementById("value5")
    r3.innerHTML=r4.value 
    // r.value=""
}

function fun6(a){
    var sec=document.getElementById("selecto")
    var s=document.createElement("option")
    s.id="op"
    var s2=document.getElementById("value6")
    sec.appendChild(s)
    s.innerHTML = s2.value    
}

function fun7(a){
    var put2=document.getElementById("put2")
    var tag0=document.getElementById("tag1")
    put2.innerHTML = a.parentNode.innerHTML;
    // var p=document.getElementById("output")
    // p.style.display="none"
    var beat=document.createElement("button")
    put2.appendChild(beat)
    beat.innerHTML="Submit"
    beat.type="submit"
    beat.id="submit2"
    beat.setAttribute("onclick","fun11(this)")
    a.parentNode.remove()
     tag0.style.display="none"
   
    


}

function fun8(){
    var done3=document.getElementById("ddd")
    var ino=document.getElementById("value6")
    var btnr=document.getElementById("btn4")
    done3.style.display="none"
    ino.style.display="none"
    btnr.style.display="none"
}


function fun9(){
    var done4=document.getElementById("dddd")
    var ino=document.getElementById("value5")
    var btne=document.getElementById("btn6")
    done4.style.display="none"
    ino.style.display="none"
    btne.style.display="none"

}

function fun10(){
    var done3=document.getElementById("dd")
    var ino=document.getElementById("value4")
    var btnw=document.getElementById("btn5")
    done3.style.display="none"
    ino.style.display="none"
    btnw.style.display="none"

}

function fun11(a){
    // var put2=document.getElementById("put2")
    var tag=document.getElementById("tag2")
    var put3=document.getElementById("put3")
    var value4=document.getElementById("value4")
    // var set=document.getElementById("value1")
    // var set2=document.getElementsByClassName("delta")
    // // var para=document.createElement("p")
    // // para.innerHTML=set[1].value
    // // put3.appendChild(para)
    // // put2.innerText
    // // for(g=0;g<set2.length;g++){
    // //     console.log(set2[g].innerText)
    // //     // console.log(set2[g]+";="+set[k].value)


    // // }
    // // put3.appendChi
    
    // var val=a.parentNode.childNodes[1].childNodes[1].childNodes[0]




    // for(k=0;k<val.length;k++){
    // // console.log(set2[a].value+";="+set[i].value)
    // // put3.innerHTML=set[k].Value

    // console.log(val[k])  


    // }
    // console.log(val.value)  



        // console.log(val,val2,val3)
        // //put3.innerHTML=a.parentNode.childNodes[1].childNodes[1].childNodes[0].value
        // console.log(a.parentNode.childNodes[1].childNodes[1].childNodes[0].value)


        var form3=a.parentNode.childNodes
        for(i=0;i<form3.length;i++){
            var out=form3[i].childNodes
            console.log(out)
        if(out.length == 4){
            out[2].innerHTML = out[1].childNodes[0].value
        }               
        
        
        else if (out.length == 5) {
            var gender = document.getElementsByName("champion")
            for (var j = 0; j < gender.length; j++) {
                if (gender[j].checked == true){
                    gender[j].style.display="none"
                    gender[j].parentNode.style.marginLeft="190%"
                    gender[j].parentNode.style.marginTop="-3%"
                    gender[j].parentNode.style.display="flex"
                    gender[j].parentNode.style.justifyContent="space=between"

                    flag=false
                    // out[3].innerHTML=gender[j].value
                    // console.log(gender[j])
                    // out[3].innerHTML=out[1].childNodes.checked
                    // smalldiv[2].style.display="none"
                }else if(gender[j].checked==false){
                    gender[j].parentNode.style.display="none"
                    flag=false
                }
            }
        }else if(out.length == 6){
            var checkbox=document.getElementsByName("changa")
            for (var j = 0; j < checkbox.length; j++) {
                if (checkbox[j].checked == true){
                    checkbox[j].style.display="none"
                    checkbox[j].parentNode.style.marginLeft="190%"
                    checkbox[j].parentNode.style.marginTop="-3%"
                    checkbox[j].parentNode.style.display="flex"
                    checkbox[j].parentNode.style.justifyContent="space=between"

                    flag=false
                    // out[3].innerHTML=gender[j].value
                    // console.log(gender[j])
                    // out[3].innerHTML=out[1].childNodes.checked
                    // smalldiv[2].style.display="none"
                }else if(checkbox[j].checked==false){
                    checkbox[j].parentNode.style.display="none"
                    flag=false
                }
            }
        }else if(out.length == 7){
            out[5].innerHTML=out[1].childNodes[1].childNodes[0].value
            console.log(out[1].childNodes[1].childNodes[0].value)
            out[1].childNodes[1].style.display="none"
            out[5].style.marginRight="3%"
            // console.log(out[1].childNodes[1].childNodes[0].value)
        }
    
    
        console.log(out)
        put3.innerHTML=a.parentNode.innerHTML
        a.style.display="none"
        tag.style.display="none"
}
a.parentNode.remove()
}


function displaytime(){
    var datetime = new Date();
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var session = document.getElementById("sessions")
    if(hrs >= 12){
        session.innerHTML ="PM"
    }else{
        session.innerHTML="AM"
    }

    document.getElementById("hours").innerHTML= hrs
    document.getElementById("minutes").innerHTML= min
    document.getElementById("seconds").innerHTML= sec
}

setInterval(displaytime,10)
