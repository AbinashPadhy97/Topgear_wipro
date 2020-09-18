
function genStringCombinations(){
	var input=document.getElementById("str").value;
	var start;
	var end;
	var StrCombinations="";
	for(start=0;start<input.length;start++)
	{
		for(end=start+1;end<=input.length;end++)
			StrCombinations+=input.substring(start, end)+",";		
		
	}
	document.getElementById("show").innerHTML=StrCombinations;
}