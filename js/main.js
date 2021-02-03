/*
 * Handle Routing (for single page application)
 * Todo - Use history api for better routing (forward / backward compatible)
 */

const BUTTONS = {
    // Button ID        : Path
    "#home_button": "/my/landing/",
    "#experience_button": "/my/experience",
    "#project_button": "/my/project",
};

$(document).ready(() => {

    // Toggle menu navigation
    $("#menu_button").click(() => $("#menu_list").toggle(100, "swing"));

    // Routing & Event handler for page buttons
    for (const [button, path] of Object.entries(BUTTONS)) {

        $(button).click((e) => {
                        
            // Wallpaper Filter
            if (button == "#home_button") {
                $("#wallpaper").css("filter", "blur(2px)");
                $("#overlay").css("opacity", "0.2");
            }
            else {
                $("#wallpaper").css("filter", "blur(25px)");
                $("#overlay").css("opacity", "0.7");
            }

            virtualRedirect(path)
            e.preventDefault();
        });

    }

    // Replace Content on the screen
    const virtualRedirect = (path) => {

        $.get(path, (data) => {
            $("#content").html(data);
        });
    }

});