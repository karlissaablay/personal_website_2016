$(document).ready(function(){

	$(window).fadeThis({speed: 1000});

	// -----------------------------
	// Menu Button Animation
	// -----------------------------
	$(".lines-button.x").click(function(){
		$(this).toggleClass("close");
	});

	// -----------------------------
	// Show section on click
	// -----------------------------
	var active_section;

	$("nav a").click(function(){
		// Remove any other active sections
		$("section, nav a").removeClass("active");

		active_section = $(this).data("section");
		console.log(active_section);

		$(this).addClass("active");
		$("#" + active_section).addClass("active");
	});

	// -----------------------------
	//Show section on click (for work list)
	// -----------------------------
	$("nav a, .work_list a").click(function(){

		// Remove any other active sections
		$("section").removeClass("active");

		active_section = $(this).data("section");
		console.log(active_section);

		$("#" + active_section).addClass("active");
	});

	// -----------------------------
	// Show view work box on click
	// -----------------------------
	$(".view_list .button").click(function(){
		
		var view_work_box = $(this).data("work");
		console.log(view_work_box);

		var active_box = $(".view_work[data-view-work='" + view_work_box + "']");
		active_box.addClass("active");
	});

	$(".view_work_close a").click(function(){
		console.log(":)");
		$(".view_work.active").removeClass("active");
	});
	
});

