// 폼 제출 시 실행되는 함수
document.getElementById("serchForm").addEventListener("submit", function(event) {
    const qurey = document.getElementById("searchInput").value;
    console.log(qurey);
});