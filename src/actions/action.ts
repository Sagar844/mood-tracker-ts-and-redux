export const HAPPY_BUTTON_CLICKED = "happy button clicked"
export const SAD_BUTTON_CLICKED = "Sad button clicked"
export const ANGRAY_BUTTON_CLICKED = "Angray button clicked"


export const HappyButtonClicked = (count:number,when:Date) =>({
  type:HAPPY_BUTTON_CLICKED ,
  payload:{count,when}

});

export const SadButtonClicked = (count:number, when:Date) =>({
  type: SAD_BUTTON_CLICKED  ,
  payload:{count,when}
});

export const AngrayButtonClicked = (count:number, when:Date) =>({
  type: ANGRAY_BUTTON_CLICKED  ,
  payload:{count,when}
});



