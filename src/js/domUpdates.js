
class domUpdates {

   constructor() {

   }

spinWheel() {
    console.log('test')
    $(".spin-btn").on("click", () => {
      $(".wheel").css("transform", "rotate(4188deg)");
    })
  };
