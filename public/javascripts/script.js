function create(theForm) {
	event.preventDefault();
	const region = $("#region").val();
	const rid = $("#rid").val();
	const date = $("#datepicker").val();
	const time = $("#time").val();
	const party = $("#party").val();
	const source = $("#source").val();

	//
	// Yea... I built a server... because I wanted practice
	//

	if (!region || !rid || !date || !time || !party) {
		$("#url").text("Missing Fields...");
	} else {
		$.post(
			"/create",
			{
				region: region,
				rid: rid,
				date: date,
				time: time,
				party: party,
				source: source
			},
			data => {
				$("#url").text(data);
			}
		);
	}
}
