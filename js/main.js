$(function () {
    $('.header__form-moreinfo').on('click', function () {
        $(this).toggleClass('header__form-moreinfo--active');
    });

    $('.header__form-moreinfo').on('click', function () {
        $('.header__form-moreinfo__content-box').animate({
            height: "toggle",
            opacity: "toggle",
        }, "slow");
    });

    $('.header__form-btn').on('click', function () {
        $('.modal__window').addClass('modal__window--active');
    });

    $('.close__modal').on('click', function () {
        $('.modal__window').removeClass('modal__window--active');
    });

});




