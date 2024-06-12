const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const para = document.getElementById("paragraph");

const togglePlus = (plusid, minusid, paraid) => {
  let plusData = `#plus-${plusid}`;
  let minusData = `#minus-${minusid}`;
  let paraData = `#paragraph-${paraid}`;
  $(plusData).on("click", function () {
    $(plusData).css("display", "none");
    $(minusData).css("display", "block");
    $(paraData).slideToggle("slow");
  });
};

const toggleMinus = (plusid, minusid, paraid) => {
  let plusData = `#plus-${plusid}`;
  let minusData = `#minus-${minusid}`;
  let paraData = `#paragraph-${paraid}`;
  $(minusData).on("click", function () {
    $(minusData).css("display", "none");
    $(plusData).css("display", "block");
    $(paraData).slideToggle("slow");
  });
};

const toggle = (plusid, minusid, paraid) => {
  togglePlus(plusid, minusid, paraid);
  toggleMinus(plusid, minusid, paraid);
};

toggle(1, 1, 1);
toggle(2, 2, 2);
toggle(3, 3, 3);
toggle(4, 4, 4);
