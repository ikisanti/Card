    let popupViews = document.querySelectorAll('.popup-view');
    let popupBtns = document.querySelectorAll('.popup-btn');
    let closeBtns = document.querySelectorAll('.close-btn');

    //Quick view button
    let popup = function(popupClick){
      popupViews[popupClick].classList.add('active');
    }

    popupBtns.forEach((popupBtn, i) => {
      popupBtn.addEventListener("click", () => {
        popup(i);
      });
    });

    //Close button
    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
          popupView.classList.remove('active');
        });
      });
    });

  