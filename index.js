let bodyWidth;
let gridWidth;
let gridCount;
let toScroll;
let maxWidth;
let firstScroll = true;


const chooseWidth = () =>{
      bodyWidth = $('body').width()
    
    if(bodyWidth > 800){
        gridCount = 4;
        gridWidth = bodyWidth/gridCount;
        toScroll = bodyWidth/gridCount;
    }else if(bodyWidth <800 && bodyWidth>600){ 
        gridCount = 3;
        gridWidth = bodyWidth/gridCount;
        toScroll = bodyWidth/gridCount;
    }else if(bodyWidth<600 && bodyWidth>400){
        gridCount = 2;
        gridWidth = bodyWidth/gridCount;
        toScroll = bodyWidth/gridCount;
    }else{
        gridCount = 1;
        gridWidth = bodyWidth;
        toScroll = bodyWidth
    }
}



// const createValues = (gridCount) => {
//     gridWidth = bodyWidth/gridCount;
//     toScroll = bodyWidth/gridCount;  
//     gridCount = gridCount;
// }

// const chooseWidth = () =>{
//   bodyWidth = $('body').width()

// if(bodyWidth > 800){
   
//    createValues(4)
// }else if(bodyWidth <800 && bodyWidth>600){ 

//     createValues(3)
// }else if(bodyWidth<600 && bodyWidth>400){
  
//     createValues(2)
// }else{
//     gridCount = 1;
//     gridWidth = bodyWidth;
//     toScroll = bodyWidth
// }
// }



(()=>{
  chooseWidth()  
})()

$(window).resize(()=>{
   chooseWidth()
})


$('.left').click(()=>{ 
   maxWidth = $('.scroller__container').width()/gridCount * (7 - gridCount);

    if(gridWidth >= maxWidth){
        gridWidth = gridCount;
    }

    if(firstScroll){
        gridWidth = gridWidth;
        firstScroll = false;
    }else{
        gridWidth += toScroll
    }
    $('.scroller').animate({scrollLeft: gridWidth}, 800)
    
})


$('.right').click(()=>{

    gridWidth -= toScroll

    if(gridWidth < 0){
        gridWidth = 0;
    }

    $('.scroller').animate({scrollLeft: gridWidth}, 800)
    
    console.log(gridWidth)
    console.log($('.scroller__container').width()/gridCount * (7 - gridCount))
})