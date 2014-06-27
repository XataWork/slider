/**
 * Created by boozz on 27.06.14.
 */
/*Тут будет код слайдера
*   Решил сделать как-то по умному(типо ООП) не используя функциональный метод.
*   Ниже на jQuery тоже самое только меньше строк.
*
* */
var BoozzSlider = {
    ulName: 'list-images',
    controls: 'controls',
    init: function(settings){
            if(settings){
                this.ulName = settings.ulName;
                this.controls = settings.controls;
                this.setParameters();
                this.setWidthUl();
                this.contrElem.addEventListener('click',this.changeSlide,false);
            }
    },
    setParameters: function(){
            this.ulElem = document.getElementById(this.ulName);
            this.contrElem = document.getElementById(this.controls);
            var ulNameLi = this.ulElem.children;
            this.ulCol = ulNameLi.length;
            var i = 0;
            this.ulWidth = 0;
            while(this.ulWidth <= 0){
                this.ulWidth = ulNameLi[i].offsetWidth;
                i++;
            }
        },
    setWidthUl: function(){
            this.ulElem.style.width = this.ulWidth*this.ulCol+"px";
    },
    changeSlide: function(event){
        var idSlide = event.target.id;
        BoozzSlider.ulElem.style.marginLeft = -BoozzSlider.ulWidth*(idSlide-1)+"px";
        var child = BoozzSlider.contrElem.children;
        for(var i = 0; i<child.length; i++){
            child[i].classList.remove('active');
        }
        event.target.classList.add('active');
    }
}
window.onload = function(){
    BoozzSlider.init({ulName:'list-images',controls:'controls'});
}


/*Пример на jQuery
* ps. Немного сделал изменил селекторы в HTML, скорее всего этот пример jQuery работать не будет*/
//$(document).ready(function(){
//    var slider = $('.slider');
////    var sliderWindow = $('.slider-window');
//    var sliderImages = $('.window-slider ul');
//    var imageWidth = $('.window-slider ul li').width();
//    var colElements = $('.window-slider ul li').length;
//    sliderImages.width(imageWidth*colElements);
//    $('.controls ul li').on('click',function(){
//        $(this).siblings('li').removeClass('active');
//        $(this).addClass('active');
//        var number = $(this).attr('id'),
//            marg = -(number-1)*imageWidth;
//        sliderImages.animate({
//            "margin-left": marg
//        },1000);
//    });
//});