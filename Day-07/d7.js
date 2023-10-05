function addStudent(id , refreshCallback) {
    refreshCallback();
}
function refreshStudentlist() {
    console.log('hello students')
}
addStudent(1, refreshStudentlist);