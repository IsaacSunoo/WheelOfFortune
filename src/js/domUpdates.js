class domUpdates {

    constructor() {

    }

    spinWheel() {
        $(".spin-btn").on("click", () => {
            $(".wheel").css("transform", "rotate(4188deg)");
        });
    }

}

export default domUpdates;

