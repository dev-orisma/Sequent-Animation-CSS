var tempSani = [];
$(document).ready(function() {
    init_sani();
    play_sani();
    $(window).scroll(function() {
        play_sani();
    });
});
function play_sani() {
    var scroll_now = $(window).scrollTop();
    for (var i in tempSani) {
        if (scroll_now >= tempSani[i].scroll && !$(tempSani[i].after).hasClass("sani")) {
            var active_sequent = tempSani[i];
            delete tempSani[i];
            active_sequent.active();
        }
    }
}
function init_sani() {
    $(".sani").each(function() {
        var sani_obj = new sequent_anime();
        var data_value = refined_data($(this).attr("sani-data"));
        sani_obj.target = $(this);
        sani_obj.scroll = data_value["scroll"];
        sani_obj.after = data_value["after"];
        sani_obj.from_class = data_value["from_class"];
        sani_obj.to_class = data_value["to_class"];
        sani_obj.delay = data_value["delay"];
        tempSani.push(sani_obj);
        if (!$(this).hasClass(data_value["from_class"])) {
            $(this).addClass(data_value["from_class"]);
        }
    });
}
function refined_data(data) {
    var data_split = data.split(",");
    var return_data = [];
    for (var i in data_split) {
        var data_key_val = data_split[i].split(":");
        return_data[data_key_val[0]] = data_key_val[1];
    }
    return return_data;
}
var sequent_anime = function() {
    var target;
    var scroll;
    var after;
    var from_class;
    var to_class;
    var delay;
}
sequent_anime.prototype.active = function() {
    setTimeout(function(obj) {
        $(obj.target).addClass(obj.to_class);
        $(obj.target).removeClass("sani");
        play_sani();
    },this.delay,this);
}