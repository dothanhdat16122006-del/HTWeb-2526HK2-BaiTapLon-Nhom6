var sanPham = [
    {id: 1, ten: 'Lò vi sóng Sharp', gia: 2390000, giaCu: 2690000, loai: 'Nhà bếp', hinh: 'assets/lo-vi-song.jpg', moTa: 'Lò vi sóng dùng trong gia đình, dễ sử dụng.'},
    {id: 2, ten: 'Bàn ủi hơi nước', gia: 690000, giaCu: 790000, loai: 'Điện gia dụng', hinh: 'assets/ban-ui.jpg', moTa: 'Ủi quần áo nhanh, kiểu dáng gọn gàng.'},
    {id: 3, ten: 'Bình đun siêu tốc', gia: 520000, giaCu: 620000, loai: 'Nhà bếp', hinh: 'assets/binh-dun-sieu-toc.jpg', moTa: 'Dung tích vừa phải, phù hợp gia đình nhỏ.'},
    {id: 4, ten: 'Đèn điện sạc', gia: 260000, giaCu: 320000, loai: 'Tiện ích', hinh: 'assets/den-dien.jpg', moTa: 'Dùng khi mất điện, sạc lại tiện lợi.'},
    {id: 5, ten: 'Đèn pin cầm tay', gia: 180000, giaCu: 220000, loai: 'Tiện ích', hinh: 'assets/den-pin.jpg', moTa: 'Nhỏ gọn, cầm chắc tay, dùng linh hoạt.'},
    {id: 6, ten: 'Vợt bắt muỗi', gia: 140000, giaCu: 180000, loai: 'Theo mùa', hinh: 'assets/vot-bat-muoi.jpg', moTa: 'Dễ dùng trong nhà, tiện cho mùa mưa.'},
    {id: 7, ten: 'Ổ cắm điện đa năng', gia: 210000, giaCu: 260000, loai: 'Tiện ích', hinh: 'assets/o-cam-dien.jpg', moTa: 'Có nhiều cổng cắm, gọn gàng khi sử dụng.'},
    {id: 8, ten: 'Bình thủy điện', gia: 850000, giaCu: 950000, loai: 'Nhà bếp', hinh: 'assets/binh-thuy-dien.jpg', moTa: 'Giữ nóng nước, phù hợp gia đình và văn phòng.'},
    {id: 9, ten: 'Bếp nướng điện', gia: 1250000, giaCu: 1450000, loai: 'Nhà bếp', hinh: 'assets/bep-nuong-dien.jpg', moTa: 'Nướng tại bàn, dễ vệ sinh sau khi dùng.'},
    {id: 10, ten: 'Nồi lẩu điện', gia: 740000, giaCu: 850000, loai: 'Nhà bếp', hinh: 'assets/noi-lau-dien.jpg', moTa: 'Nấu lẩu nhanh, phù hợp tụ họp gia đình.'},
    {id: 11, ten: 'Nồi chiên không dầu', gia: 1890000, giaCu: 2150000, loai: 'Điện gia dụng', hinh: 'assets/noi-chien.jpg', moTa: 'Chiên nướng ít dầu, dễ thao tác.'},
    {id: 12, ten: 'Thiết bị sưởi ấm', gia: 790000, giaCu: 910000, loai: 'Theo mùa', hinh: 'assets/suoi-am.jpg', moTa: 'Hỗ trợ làm ấm không gian trong ngày lạnh.'},
    {id: 13, ten: 'Nồi cơm điện', gia: 930000, giaCu: 1090000, loai: 'Nhà bếp', hinh: 'assets/noi-com.jpg', moTa: 'Dễ nấu, hợp gia đình 3 đến 5 người.'},
    {id: 14, ten: 'Nồi áp suất điện', gia: 1490000, giaCu: 1690000, loai: 'Điện gia dụng', hinh: 'assets/noi-ap-suat.jpg', moTa: 'Nấu nhanh, tiết kiệm thời gian.'},
    {id: 15, ten: 'Máy rửa xe mini', gia: 1850000, giaCu: 2050000, loai: 'Điện gia dụng', hinh: 'assets/may-rua-xe.jpg', moTa: 'Rửa xe và sân trước nhà khá tiện.'},
    {id: 16, ten: 'Tủ lạnh mini', gia: 5290000, giaCu: 5690000, loai: 'Điện gia dụng', hinh: 'assets/tu-lanh.png', moTa: 'Thiết kế gọn, phù hợp phòng trọ hoặc phòng nhỏ.'}
];

function layGioHang() {
    var gioHang = localStorage.getItem('gioHangGiaDung');
    if (gioHang) {
        return JSON.parse(gioHang);
    }
    return [];
}

function luuGioHang(gioHang) {
    localStorage.setItem('gioHangGiaDung', JSON.stringify(gioHang));
}

function laySanPhamTheoId(id) {
    for (var i = 0; i < sanPham.length; i++) {
        if (sanPham[i].id == id) {
            return sanPham[i];
        }
    }
    return null;
}

function formatTien(tien) {
    return tien.toLocaleString('vi-VN') + 'đ';
}

function capNhatHeader() {
    var gioHang = layGioHang();
    var tongSoLuong = 0;
    for (var i = 0; i < gioHang.length; i++) {
        tongSoLuong += gioHang[i].soLuong;
    }

    var danhSachCount = document.querySelectorAll('.count-product-cart');
    var danhSachText = document.querySelectorAll('.cart-text');

    for (var j = 0; j < danhSachCount.length; j++) {
        danhSachCount[j].innerText = tongSoLuong;
    }
    for (var k = 0; k < danhSachText.length; k++) {
        danhSachText[k].innerText = 'Có ' + tongSoLuong + ' sản phẩm';
    }
}

function themVaoGio(id) {
    var gioHang = layGioHang();
    var timThay = false;

    for (var i = 0; i < gioHang.length; i++) {
        if (gioHang[i].id == id) {
            gioHang[i].soLuong = gioHang[i].soLuong + 1;
            timThay = true;
            break;
        }
    }

    if (!timThay) {
        gioHang.push({id: id, soLuong: 1});
    }

    luuGioHang(gioHang);
    capNhatHeader();
    alert('Đã thêm sản phẩm vào giỏ hàng');
}

function renderSanPham(danhSach) {
    var khung = document.getElementById('productList');
    if (!khung) {
        return;
    }

    var html = '';
    if (danhSach.length == 0) {
        html = '<div class="empty-state">Không tìm thấy sản phẩm phù hợp</div>';
        khung.innerHTML = html;
        var rc0 = document.getElementById('resultCount');
        if (rc0) {
            rc0.innerText = 0;
        }
        return;
    }

    for (var i = 0; i < danhSach.length; i++) {
        var sp = danhSach[i];
        html += '<div class="col-product">';
        html += '<div class="card-product">';
        html += '<div class="card-header">';
        html += '<span class="sale-badge">Sale</span>';
        html += '<img class="card-image" src="' + sp.hinh + '" alt="' + sp.ten + '">';
        html += '</div>';
        html += '<div class="card-content">';
        html += '<div class="product-category">' + sp.loai + '</div>';
        html += '<a href="#" class="card-title-link">' + sp.ten + '</a>';
        html += '<div class="product-price"><span class="current-price">' + formatTien(sp.gia) + '</span><span class="old-price">' + formatTien(sp.giaCu) + '</span></div>';
        html += '<div class="product-desc">' + sp.moTa + '</div>';
        html += '<div class="product-buy"><button class="card-button" onclick="themVaoGio(' + sp.id + ')"><i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ</button></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }

    khung.innerHTML = html;
    var rc = document.getElementById('resultCount');
    if (rc) {
        rc.innerText = danhSach.length;
    }
}

function locSanPham() {
    var tuKhoa = '';
    var oTim = document.getElementById('searchInput');
    if (oTim) {
        tuKhoa = oTim.value.toLowerCase().trim();
    }

    var loaiDangChon = 'Tất cả';
    var nutDangChon = document.querySelector('.filter-btn2.active');
    if (nutDangChon) {
        loaiDangChon = nutDangChon.getAttribute('data-category');
    }

    var ketQua = [];
    for (var i = 0; i < sanPham.length; i++) {
        var sp = sanPham[i];
        var dungLoai = loaiDangChon == 'Tất cả' || sp.loai == loaiDangChon;
        var dungTuKhoa = sp.ten.toLowerCase().indexOf(tuKhoa) != -1;
        if (dungLoai && dungTuKhoa) {
            ketQua.push(sp);
        }
    }

    renderSanPham(ketQua);
}

function ganSuKienLoc() {
    var danhSachNut = document.querySelectorAll('.filter-btn2');
    for (var i = 0; i < danhSachNut.length; i++) {
        danhSachNut[i].onclick = function () {
            for (var j = 0; j < danhSachNut.length; j++) {
                danhSachNut[j].classList.remove('active');
            }
            this.classList.add('active');
            locSanPham();
        };
    }
}

function datLoaiTrongTrangChu(loai) {
    var danhSachNut = document.querySelectorAll('.filter-btn2');
    for (var i = 0; i < danhSachNut.length; i++) {
        danhSachNut[i].classList.remove('active');
        if (danhSachNut[i].getAttribute('data-category') == loai) {
            danhSachNut[i].classList.add('active');
        }
    }
    locSanPham();
    var vung = document.getElementById('san-pham');
    if (vung) {
        vung.scrollIntoView({behavior: 'smooth'});
    }
}

function renderGioHang() {
    var than = document.getElementById('cartBody');
    var tamTinh = document.getElementById('tamTinh');
    var tongCong = document.getElementById('tongCong');
    if (!than) {
        return;
    }

    var gioHang = layGioHang();
    if (gioHang.length == 0) {
        than.innerHTML = '<tr><td colspan="6" class="text-center">Giỏ hàng của bạn đang trống</td></tr>';
        if (tamTinh) tamTinh.innerText = '0đ';
        if (tongCong) tongCong.innerText = '0đ';
        return;
    }

    var html = '';
    var tongTien = 0;
    for (var i = 0; i < gioHang.length; i++) {
        var item = gioHang[i];
        var sp = laySanPhamTheoId(item.id);
        if (sp) {
            var thanhTien = sp.gia * item.soLuong;
            tongTien += thanhTien;
            html += '<tr>';
            html += '<td><img class="cart-img" src="' + sp.hinh + '" alt=""></td>';
            html += '<td>' + sp.ten + '</td>';
            html += '<td>' + formatTien(sp.gia) + '</td>';
            html += '<td><div class="qty-box"><button class="qty-btn" onclick="doiSoLuong(' + sp.id + ', -1)">-</button><span>' + item.soLuong + '</span><button class="qty-btn" onclick="doiSoLuong(' + sp.id + ', 1)">+</button></div></td>';
            html += '<td>' + formatTien(thanhTien) + '</td>';
            html += '<td><button class="remove-btn" onclick="xoaKhoiGio(' + sp.id + ')">Xóa</button></td>';
            html += '</tr>';
        }
    }

    than.innerHTML = html;
    if (tamTinh) tamTinh.innerText = formatTien(tongTien);
    if (tongCong) tongCong.innerText = formatTien(tongTien + 30000);
}

function doiSoLuong(id, thayDoi) {
    var gioHang = layGioHang();
    for (var i = 0; i < gioHang.length; i++) {
        if (gioHang[i].id == id) {
            gioHang[i].soLuong = gioHang[i].soLuong + thayDoi;
            if (gioHang[i].soLuong <= 0) {
                gioHang.splice(i, 1);
            }
            break;
        }
    }
    luuGioHang(gioHang);
    capNhatHeader();
    renderGioHang();
    renderTomTatThanhToan();
}

function xoaKhoiGio(id) {
    var gioHang = layGioHang();
    for (var i = 0; i < gioHang.length; i++) {
        if (gioHang[i].id == id) {
            gioHang.splice(i, 1);
            break;
        }
    }
    luuGioHang(gioHang);
    capNhatHeader();
    renderGioHang();
    renderTomTatThanhToan();
}

function renderTomTatThanhToan() {
    var khung = document.getElementById('checkoutSummary');
    var tamTinh = document.getElementById('checkoutTamTinh');
    var tongCong = document.getElementById('checkoutTongCong');
    if (!khung) {
        return;
    }

    var gioHang = layGioHang();
    if (gioHang.length == 0) {
        khung.innerHTML = '<p>Chưa có sản phẩm nào.</p>';
        if (tamTinh) tamTinh.innerText = '0đ';
        if (tongCong) tongCong.innerText = '0đ';
        return;
    }

    var html = '';
    var tongTien = 0;
    for (var i = 0; i < gioHang.length; i++) {
        var item = gioHang[i];
        var sp = laySanPhamTheoId(item.id);
        if (sp) {
            tongTien += sp.gia * item.soLuong;
            html += '<div class="summary-line"><span>' + sp.ten + ' x ' + item.soLuong + '</span><span>' + formatTien(sp.gia * item.soLuong) + '</span></div>';
        }
    }
    khung.innerHTML = html;
    if (tamTinh) tamTinh.innerText = formatTien(tongTien);
    if (tongCong) tongCong.innerText = formatTien(tongTien + 30000);
}

function xuLyDangNhap() {
    var form = document.getElementById('loginForm');
    if (!form) {
        return;
    }

    form.onsubmit = function (e) {
        e.preventDefault();
        var sdt = document.getElementById('sdt');
        var mk = document.getElementById('matkhau');
        if (sdt.value.trim() == '' || mk.value.trim() == '') {
            alert('Bạn vui lòng nhập đầy đủ thông tin đăng nhập');
            return;
        }
        alert('Đăng nhập thành công (bản demo giao diện)');
        window.location.href = 'index.html';
    };
}


function xuLyDangKy() {
    var form = document.getElementById('signupForm');
    if (!form) {
        return;
    }

    form.onsubmit = function (e) {
        e.preventDefault();
        var hoTen = document.getElementById('hoTenDangKy');
        var sdt = document.getElementById('sdtDangKy');
        var email = document.getElementById('emailDangKy');
        var mk = document.getElementById('matKhauDangKy');
        var nhapLai = document.getElementById('nhapLaiMatKhau');

        if (hoTen.value.trim() == '' || sdt.value.trim() == '' || email.value.trim() == '' || mk.value.trim() == '' || nhapLai.value.trim() == '') {
            alert('Bạn vui lòng nhập đầy đủ thông tin đăng ký');
            return;
        }

        if (mk.value != nhapLai.value) {
            alert('Mật khẩu nhập lại chưa khớp');
            return;
        }

        alert('Đăng ký thành công (bản demo giao diện)');
        window.location.href = 'dangnhap.html';
    };
}

function xuLyThanhToan() {
    var form = document.getElementById('checkoutForm');
    if (!form) {
        return;
    }

    form.onsubmit = function (e) {
        e.preventDefault();
        var hoTen = document.getElementById('hoTen');
        var sdt = document.getElementById('sdtNhan');
        var diaChi = document.getElementById('diaChiNhan');
        var gioHang = layGioHang();

        if (hoTen.value.trim() == '' || sdt.value.trim() == '' || diaChi.value.trim() == '') {
            alert('Bạn vui lòng nhập đầy đủ thông tin nhận hàng');
            return;
        }
        if (gioHang.length == 0) {
            alert('Giỏ hàng đang trống, chưa thể thanh toán');
            return;
        }

        alert('Đặt hàng thành công');
        localStorage.removeItem('gioHangGiaDung');
        window.location.href = 'giohang.html';
    };
}

window.onload = function () {
    capNhatHeader();

    if (document.getElementById('productList')) {
        renderSanPham(sanPham);
        ganSuKienLoc();
        var oTim = document.getElementById('searchInput');
        if (oTim) {
            oTim.oninput = function () {
                locSanPham();
            };
        }
    }

    renderGioHang();
    renderTomTatThanhToan();
    xuLyDangNhap();
    xuLyDangKy();
    xuLyThanhToan();
};
