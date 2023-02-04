let area=document.getElementById("input");
area.addEventListener("input", function ()
{
    let st=this.value;
    let char=st.length;
    let word=0;
    let kt="";
    console.log(kt);
    for(let i=0; i<st.length; ++i)
    {
        if(st[i]!=' ')
        {
            kt+=st[i];
        }else{
            if(kt.length)
            {
                word++;
            }
            kt="";
        }
    }
    if (kt.length!=0) {
        word++;
    }
    document.getElementById("chars").innerText=String(char);
    document.getElementById("words").innerText=String(word);
});