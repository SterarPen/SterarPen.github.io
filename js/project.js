$(document).ready(function() {
    $("#project_list").on('click', 'li.project_item', function() {
        $(".project_item").css("color", "white");
        $(this).css("color", "red");
        var project_id = $(this).attr("name");
        console.log(project_id);    
        $.getJSON("/resource/project.json", function(data) {
            var project = data[project_id - 1];
            $("#project_name .value").text(project.project_name);
            $("#project_url a").attr("href", project.project_url);
            $("#project_url a").text(project.project_url);
            $("#project_date").text(project.project_start_date + " - " + project.project_end_date);
            $("#project_description .value p").text(project.project_description);
            $("#project_demo .value a").attr("href", project.project_demo);
            $("#project_demo .value a").text(project.project_demo);
            $("#project_img img").attr("src", project.project_image);
        });
    });

    $.getJSON("/resource/project.json", function(data) {
        console.log(data);
        $.each(data, function(i, item) {
            console.log(item);
            $("#project_list").append("<li name='" + item.project_id + "' class='project_item'>" +
            item.project_name + "</li>");
        });
    });

    $("#project_list li:first").trriger("click");
});
