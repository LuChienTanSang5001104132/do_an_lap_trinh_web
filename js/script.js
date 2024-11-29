$(document).ready(function () {
    // Xử lý form liên hệ
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ với chúng tôi!');
    });

    // Chức năng tìm kiếm sản phẩm
    const searchInput = $('#searchInput'); // Lấy ô tìm kiếm
    const productRows = $('#productTable tbody tr'); // Lấy danh sách các dòng sản phẩm

    searchInput.on('keyup', function () {
        const keyword = searchInput.val().toLowerCase().trim(); // Từ khóa tìm kiếm
        productRows.each(function () {
            const row = $(this);
            const productName = row.find('td:first').text().toLowerCase(); // Lấy tên sản phẩm
            const productDescription = row.find('td:nth-child(3)').text().toLowerCase(); // Lấy mô tả sản phẩm

            // Hiển thị/Ẩn sản phẩm dựa vào từ khóa
            if (productName.includes(keyword) || productDescription.includes(keyword)) {
                row.show();
            } else {
                row.hide();
            }
        });
    });
});
$('a.nav-link').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 70 }, 800);
});