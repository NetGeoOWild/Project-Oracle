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
        $('.modal').css('display', 'block');
    });

    $('.close__modal').on('click', function () {
        $('.modal').css('display', 'none');
    });

});

const yesBtn = document.querySelector('.modal-question__yes');
const noBtn = document.querySelector('.modal-question__no');
const modal = document.querySelector('.modal');
const modalQuestion = document.querySelector('.modal-question');
const modalContent = document.querySelector('.modal-content');

modal.onclick = function (e) {
    if (e.target === modal) {
        modalQuestion.style.display = 'block';
        modalContent.style.opacity = '0.1';
    }
}

yesBtn.onclick = function () {
    modalQuestion.style.display = 'none';
    modal.style.display = 'none';
    window.location.reload();
}

noBtn.onclick = function () {
    modalQuestion.style.display = 'none';
    modalContent.style.opacity = '1';
}