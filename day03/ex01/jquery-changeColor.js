

$.fn.changeColor = function () {
    this.each(function () {
        console.log($(this));
        var $dom = $(this);
        $dom.click(function () {
            $dom.css("color", "red");
        });
    });
};

