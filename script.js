function Carousel (){

    const firstImage = document.getElementById("imageOne");

    let config = {
        buttons: {
            prevBtn: $("#prevBtn"),
            nextBtn: $("#nextBtn"),
            dotBtn: {
                dotOne: $("#dotOne"),
                dotTwo: $("#dotTwo"),
                dotThree: $("#dotThree"),
                dotFour: $("#dotFour")
            }
        },
        slideImage: $("#imageContainer li div"),
        gradient: $("main"),
        transition: 800,
        autoSlide: false,
        suruklemeVarmi: false,
        firstX: 0,
        automated: false
    }

    let {slideImage,gradient,transition,suruklemeVarmi,firstX,automated} = config;

    let currentImage = 0;

    $(nextBtn).click(function(){
        currentImage++;
        animateSlide();
        hidePrevBtn();
        hideNextBtn();
        setGradient();
        dotActivator();
        getStation();
    });
        
    $(prevBtn).click(function(){
        currentImage--;
        animateSlide();
        hidePrevBtn();
        hideNextBtn();
        setGradient();
        dotActivator();
        getStation();
    });
    
    $(".slide-image").mousedown(function (e){
        suruklemeVarmi = true;
        console.log("bastı");
        firstX = e.screenX;
        console.log(firstX);
    });

    $(".slide-image").mouseup(function(){
        suruklemeVarmi = false;
        console.log(firstX);
    });

    $(window).mousemove(function (e){
        if(suruklemeVarmi){
            let newX = e.screenX;
            let farkX = newX - firstX;

            $(".slide-image").css({
                left: $(".slide-image").position().left+farkX,
            })

            firstX = newX;
        }
    })

    $(dotOne).click(function(){
        currentImage = 0;
        animateSlide();
        setGradient();
        dotActivator();
        getStation();
        hidePrevBtn();
        hideNextBtn();
    });

    $(dotTwo).click(function(){
        currentImage = 1;
        animateSlide();
        setGradient();
        dotActivator();
        getStation();
        hidePrevBtn();
        hideNextBtn();
    });

    $(dotThree).click(function(){
        currentImage = 2;
        animateSlide();
        setGradient();
        dotActivator();
        getStation();
        hidePrevBtn();
        hideNextBtn();
    });

    $(dotFour).click(function(){
        currentImage = 3;
        animateSlide();
        setGradient();
        dotActivator();
        getStation();
        hidePrevBtn();
        hideNextBtn();
    });

    $("#flicker").click(function(){
        if(!automated){
            automated = true;
            $("#flicker").animate({
                left: "30px"
            });
            automateSlide();
        }else{
            automated = false;
            $("#flicker").animate({
                left: "0"
            });
        }

    })

    function animateSlide(){
        $(slideImage).animate({
            left: `${currentImage*(-1200)}px`,
        }, transition);
    };

    function setGradient(){
        switch(currentImage){
            case 0:
                $(gradient).css({
                    "background": "rgb(29,29,29)",
                    "background": "linear-gradient(90deg, rgba(29,29,29,1) 0%, rgba(30,223,149,1) 50%, rgba(31,31,31,1) 100%)"
                });
                break;
            case 1:
                $(gradient).css({
                    "background": "rgb(210,150,133)",
                    "background": "linear-gradient(90deg, rgba(210,150,133,1) 0%, rgba(244,242,237,1) 48%, rgba(101,120,149,1) 100%)"
                });
                break;
            case 2:
                $(gradient).css({
                    "background": "rgb(74,74,74)",
                    "background": "linear-gradient(90deg, rgba(74,74,74,1) 0%, rgba(209,209,209,1) 40%, rgba(209,209,209,1) 60%, rgba(0,48,112,1) 100%)"
                });
                break;
            case 3:
                $(gradient).css({
                    "background": "rgb(255,190,0)",
                    "background": "linear-gradient(90deg, rgba(255,190,0,1) 0%, rgba(209,209,209,1) 40%, rgba(209,209,209,1) 60%, rgba(82,0,112,1) 100%)"
                })
        }
    };

    function dotActivator(){
        switch(currentImage){
            case 0:
                $(dotFour).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                $(dotThree).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                $(dotTwo).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                $(dotOne).css({
                    "background-color": "white"
                });
                break;
            case 1:
                $(dotFour).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                $(dotThree).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                $(dotTwo).css({
                    "background-color": "white"
                });
                $(dotOne).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                break;
            case 2:
                $(dotFour).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                $(dotThree).css({
                    "background-color": "white"
                });
                $(dotTwo).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"

                });
                $(dotOne).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                break;
            case 3:
                $(dotFour).css({
                    "background-color": "white"
                });
                $(dotThree).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });
                $(dotTwo).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"

                });
                $(dotOne).css({
                    "background-color": "rgba(75, 75, 75, 0.514)"
                });

        }
    };

    function hidePrevBtn(){
        if(currentImage>0){
            $(prevBtn).css({
                "visibility": "visible"
            });
        }else{
            $(prevBtn).css({
                "visibility": "hidden"
            })
        }
    };

    function hideNextBtn(){
        if(currentImage==3){
            $(nextBtn).css({
                "visibility": "hidden"
            });

        }else{
            $(nextBtn).css({
                "visibility": "visible"
            });
        }
    }

    function automateSlide(){
        setInterval(function(){
            if(currentImage!==3){
            currentImage++;
                animateSlide();
                hidePrevBtn();
                hideNextBtn();
                setGradient();
                dotActivator();
                getStation();
            }else if(currentImage==3){
                currentImage = 0;
                animateSlide();
                hidePrevBtn();
                hideNextBtn();
                setGradient();
                dotActivator();
                getStation();
            }
        }, 3000);
    }

    function getStation(){
        switch(currentImage){
            case 0:
                $(slideImage).removeClass(`image-4`);
                $(slideImage).removeClass(`image-3`);
                $(slideImage).removeClass(`image-2`);
                $(slideImage).addClass(`image-1`);
                break;
            case 1:
                $(slideImage).removeClass(`image-4`);
                $(slideImage).removeClass(`image-3`);
                $(slideImage).addClass(`image-2`);
                $(slideImage).removeClass(`image-1`);
                break;
            case 2:
                $(slideImage).removeClass(`image-4`);
                $(slideImage).addClass(`image-3`);
                $(slideImage).removeClass(`image-2`);
                $(slideImage).removeClass(`image-1`);
                break;
            case 3:
                $(slideImage).addClass(`image-4`);
                $(slideImage).removeClass(`image-3`);
                $(slideImage).removeClass(`image-2`);
                $(slideImage).removeClass(`image-1`);


        }
    }


    setGradient();
    dotActivator();

};

Carousel();

console.log(Carousel);