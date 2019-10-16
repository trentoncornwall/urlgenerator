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
			"/create", {
				region: region,
				rid: rid,
				date: date,
				time: time,
				party: party,
				source: source
			},
			data => {
				//Initiating ClipboardJS library
				new ClipboardJS(".btn");
				// Creating Date Specific URL
				let urlLabel = $("<div id='urllabel'>").append(
					$("<p>").text("Date Specific URL:")
				);
				let urlField = $(`<input id='urlField' value=${data.query}>`);
				let copyButton = $(
					`<button class='btn' data-clipboard-target='#urlField'>`
				).text("Copy");

				$("#urlcontainer").empty();
				$("#urlcontainer").append(urlField, copyButton);
				$(".urllabel").append(urlLabel);

				// Creating RestRef URL
				new ClipboardJS(".btn");
				let rrLabel = $("<div id='urllabel'>").append(
					$("<p>").text("Standard RestRef URL:")
				);
				let rrField = $(`<input id='urlField' value=${data.restref}>`);
				let rrcopyButton = $(
					`<button class='btn' data-clipboard-target='#rrField'>`
				).text("Copy");
				$("#rrcontainer").empty();
				$("#rrcontainer").append(rrField, rrcopyButton);
				$(".rrlabel").append(rrLabel);
			}
		);
	}
}