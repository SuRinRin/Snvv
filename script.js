let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
const coverRight = document.querySelector('.cover.cover-right');
const pages = document.querySelectorAll('.book-page.page-right');
let totalPages = pages.length;
let pageNumber = 0;
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_,index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        },(index + 1) * 200 +100);
    })
}
function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);
setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

pages.forEach((_,index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    },(index + 1) * 200 + 3000 );
}
)   
pageTurnBtn.forEach((el,index) =>{
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})
function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 8000);
}

showSlide(slideIndex);
setTimeout(autoSlide, 5000);

function Submit(event){
    event.preventDefault();
    const url = "https://67e4d69f18194932a58368f2.mockapi.io/messages";

    let message = $("#message").val();
    let add = {
        content: message
    }
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(add), // Chuyển object thành JSON
        contentType: "application/json", // Định dạng dữ liệu gửi đi
        success: function(){
            alert("Gửi thành công ,anh yêu em❤️");
            document.getElementById("message").value = "";
        },
        error: function(error){
            alert("Gửi thất bại");
        }
    });
}

