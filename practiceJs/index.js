const btn = document.querySelector("button");

const getClicked = () => {
    if (btn.value == "true") {
        btn.innerText = "두고보자^^";
        btn.value = "false";
    }

    else {
        btn.innerText = "씨발련아";
        btn.value = "true";
    }
}
