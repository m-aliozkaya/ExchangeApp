class UI {
  constructor(firstSelect, secondSelect) {
    this.firstSelect = firstSelect;
    this.secondSelect = secondSelect;

    this.firstOutput = document.getElementById("outputFirst");
    this.secondOutput = document.getElementById("outputSecond");
    this.outputResult = document.getElementById("result");
  }

  changeFirst() {
    this.firstOutput.textContent = this.firstSelect.options[
      this.firstSelect.selectedIndex
    ].textContent;
  }

  changeSecond() {
    this.secondOutput.textContent = this.secondSelect.options[
      this.secondSelect.selectedIndex
    ].textContent;
  }

  changeResult(result) {
    this.outputResult.value = result;
  }
}
