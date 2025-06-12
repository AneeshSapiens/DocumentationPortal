
		function sendFeedback() {
		var ratingval="";
		var ratingstr="No answer selected";
		var topicUrl=location.href;
		var x=document.getElementsByTagName("meta");
		var txt="";
		var comments = ratings.comment.value;
		for (var i=0; i < ratings.Wasthishelpful.length; i++) {
			if (ratings.Wasthishelpful[i].checked) {
			ratingval = ratings.Wasthishelpful[i].value;
			}
			}
			if (ratingval != "") ratingstr = "Was this helpful? "+ratingval;
			ratingstr += ". \r\n\r\n\Additional comments:"+comments;
			ratingstr += ("\r\n\r\n\The URL of this page is: " + window.location.href)
 
			for (var j=0;j<x.length;j++) {
			if (x[j].name=="objectid") txt=", topic "+x[j].content;
			}
			slashloc = topicUrl.lastIndexOf("/");
			if (slashloc != -1) {
			part1 = topicUrl.substring(0,slashloc);
			part2 = topicUrl.substring(slashloc+1, topicUrl.length);
			slashlocb = part1.lastIndexOf("/");
			if (slashlocb != -1) {
			part1 = part1.substring(slashlocb+1, part1.length);    
			qloc = part2.indexOf("?");
			if (qloc != -1) {
			part2 = part2.substring(0,qloc);
			}
			top.location.href="mailto:sapienstechdocs@sapiens.com?subject=Comment about'"+document.title+"' in '"+part1+"'&body="+escape(ratingstr);
			}
			}
			}