/**
 * Created by boozz on 27.06.14.
 */
/*Тут будет код слайдера
*   Пока набросал на jQuery, для понимания шагов выполнения
* */
//var slider = {
//    sliderElem: document.getElementsByClassName('slider'),
//    sliderImages: document.getElementsByTagName('ul')
//}
//document.getElementsByClassName('slider');
$(document).ready(function(){
    var slider = $('.slider');
//    var sliderWindow = $('.slider-window');
    var sliderImages = $('.window-slider ul');
    var imageWidth = $('.window-slider ul li').width();
    var colElements = $('.window-slider ul li').length;
    sliderImages.width(imageWidth*colElements);
    $('.controls ul li').on('click',function(){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        var number = $(this).attr('id'),
            marg = -(number-1)*imageWidth;
        sliderImages.animate({
            "margin-left": marg
        },1000);
    });
});