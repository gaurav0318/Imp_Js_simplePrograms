function exam_status(totmarks, is_exam)
	{
	if(is_exam){
		return totmarks >= 90;
	}
	return (totalmarks >= 89 && totmarks <=100);
	}
	console.log(exam_status("88", " "));
	console.log(exam_status("99", "true"));

