function triggerExample() {
  const element = document.querySelector('#example');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
function triggerExample1() {
  const element = document.querySelector('#example1');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
function triggerExample2() {
  const element = document.querySelector('#example2');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
