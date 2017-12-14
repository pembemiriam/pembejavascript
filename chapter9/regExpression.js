console.log(/ca[rt]/.test(["i will","buy","my","own","car"]));
console.log(/pr?op/.test("it is not poper"));
console.log(/^ferr/.test("ferret"));
console.log(/ious$/.test("so pretentious"));
console.log(/\s./.test("hello .how"));
console.log(/\w{6,}/.test("hello worldg"));
console.log(/(^|\w)e|e($|\w)/i.test("End of the wicked"));