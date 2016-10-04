var tempSani = [];
$(document).ready(function() {
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
        var begin_anime;
        sani_obj.target = $(this);
        sani_obj.scroll = data_value["scroll"];
        sani_obj.after = data_value["after"];
        if (typeof(data_value["from_class"]) == "string" && typeof(data_value["to_class"]) == "string" && typeof(data_value["delay"]) == "string") {
            sani_obj.from_class = data_value["from_class"];
            sani_obj.to_class = data_value["to_class"];
            sani_obj.delay = data_value["delay"];
            begin_anime =  data_value["from_class"];
        } else if (typeof(data_value["animation"]) == "string") {
            var anime_class = window[data_value["animation"]];
            sani_obj.from_class = anime_class.from;
            sani_obj.to_class = anime_class.to;
            sani_obj.delay = anime_class.delay;
            begin_anime =  anime_class.from;
        } else {
            console.error("Animation not defined.");
        }
        tempSani.push(sani_obj);
        if (!$(this).hasClass(begin_anime)) {
            $(this).addClass(begin_anime);
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
var animation = function(from,to,delay) {
    this.from = from;
    this.to = to;
    this.delay = delay;
}
sequent_anime.prototype.active = function() {
    setTimeout(function(obj) {
        $(obj.target).addClass(obj.to_class);
        $(obj.target).removeClass("sani");
        play_sani();
    },this.delay,this);
}