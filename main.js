/**
 * Bài 1: Tìm ngày trước và ngày sau.
 * - Đầu vào: Nhập ngày, tháng, năm.
 * - Xử lý: 
 *      + Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày.
 *      + Tháng 2 có 28 ngày.
 *      + Tháng 4, 6, 9, 11 có 30 ngày.
 *      + Bấm nút "Ngày hôm qua" => Ngày = Ngày - 1
 *      + Bấm nút "Ngày mai" => Ngày = Ngày + 1
 *      + Ngày tiếp theo của ngày cuối tháng = Ngày đầu tiên của tháng kế tiếp, tương tự cho năm
 *      + Ngày hôm qua của ngày đầu tháng = Ngày cuối tháng của tháng trước đó, tương tự cho năm.
 *  - Đầu ra: show kết quả ngày hôm qua và ngày mai.
 */


function checkNgayThang(ngay, thang) {
    var result = "Ngày xác định";
    if (thang === 2) {
        if (ngay > 28) {
            result = "Ngày không xác định";
        }
    } else if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
        if (ngay >= 32 || ngay === 0) {
            result = "Ngày không xác định";
        }
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        if (ngay >= 31 || ngay === 0) {
            result = "Ngày không xác định";
        }
    } else if (thang > 12 || thang === 0) {
        result = "Ngày không xác định";
    }
    return result;
}

function luiNgay(ngay, thang, nam) {
    var previousDay = "";
    if (ngay === 1 && thang === 1) {
        ngay = 31;
        thang = 12;
        nam -= 1;
        previousDay = ngay + "/" + thang + "/" + nam;
    } else if (ngay === 1) {
        if (thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
            ngay = 30;
        } else if (thang === 2 || thang === 4 || thang === 6 || thang === 9 || thang === 11) {
            ngay = 31;
        } else if (thang === 3) {
            ngay = 28;
        }
        thang -= 1;
        previousDay = ngay + "/" + thang + "/" + nam;
    } else {
        ngay -= 1;
        previousDay = ngay + "/" + thang + "/" + nam;
    }
    return previousDay;
}

function tienNgay(ngay, thang, nam) {
    var nextDay = "";
    if (thang === 12 && ngay === 31) {
        nam += 1;
        thang = 1;
        ngay = 1;
        nextDay = ngay + "/" + thang + "/" + nam;
    } else if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10) {
        if (ngay === 31) {
            thang += 1;
            ngay = 1;
        } else {
            ngay += 1;
        }
        nextDay = ngay + "/" + thang + "/" + nam;
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        if (ngay === 30) {
            thang += 1;
            ngay = 1;   
        } else {
            ngay += 1;
        }
        nextDay = ngay + "/" + thang + "/" + nam;
    } else if (thang === 2) {
        if (ngay === 28) {
            thang += 1;
            ngay = 1; 
        } else {
            ngay += 1;
        }
        nextDay = ngay + "/" + thang + "/" + nam;
    } else {
        ngay += 1;
        nextDay = ngay + "/" + thang + "/" + nam;
    }
    return nextDay;
}

document.getElementById("btnHomQua").onclick = function () {
    var ngayHomQua = "";
    var ngay = document.getElementById("ngayInput").value * 1;
    var thang = document.getElementById("thangInput").value * 1;
    var nam = document.getElementById("namInput").value * 1;
    var kiemTraNgayThang = checkNgayThang(ngay, thang);
    if (kiemTraNgayThang === "Ngày không xác định") {
        kiemTraNgayThang = "Ngày không xác định";
    } else if (kiemTraNgayThang === "Ngày xác định") {
        ngayHomQua = luiNgay(ngay, thang, nam);
    }

    if (kiemTraNgayThang === "Ngày không xác định") {
        document.getElementById("footerBai1").innerHTML = "Ngày không xác định";
    } else {
        document.getElementById("footerBai1").innerHTML = ngayHomQua;
    }
}

document.getElementById("btnMai").onclick = function () {
    var ngayMai = "";
    var ngay = document.getElementById("ngayInput").value * 1;
    var thang = document.getElementById("thangInput").value * 1;
    var nam = document.getElementById("namInput").value * 1;
    var kiemTraNgayThang = checkNgayThang(ngay, thang);
    if (kiemTraNgayThang === "Ngày không xác định") {
        kiemTraNgayThang = "Ngày không xác định";
    } else if (kiemTraNgayThang === "Ngày xác định") {
        ngayMai = tienNgay(ngay, thang, nam);
    }

    if (kiemTraNgayThang === "Ngày không xác định") {
        document.getElementById("footerBai1").innerHTML = "Ngày không xác định";
    } else {
        document.getElementById("footerBai1").innerHTML = ngayMai;
    }
}

/**
 * Bài 2: Xác định ngày của tháng trong năm (bao gồm cả năm nhuận)
 * - Đầu vào: nhập vào tháng, năm.
 * - Xử lý:
 *      + Các tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày.
 *      + Các tháng 4, 6, 9, 11 có 30 ngày.
 *      + Tháng 2 của năm thường có 28 ngày, tháng 2 của năm nhuận có 29 ngày.
 *      + Năm nhuận là năm chia hết cho 4 và không chia hết cho 100 HOẶC năm chia hết cho 400.
 * - Đầu ra: show kết quả
 */
function checkNgayCuaThang(thang, nam) {
    var result = "";
    var ngay;
    if (thang === 2) {
        if (nam % 4 === 0 && nam % 100 !== 0 || nam % 400 === 0) {
            ngay = 29;
            result = "Tháng 2 của năm nhuận " + nam + " có " + ngay + " ngày";
        } else {
            ngay = 28;
            result = "Tháng 2 của năm " + nam + " có " + ngay + " ngày";
        }
    } else if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
        ngay = 31;
        result = "Tháng " + thang + " của năm " + nam + " có " + ngay + " ngày";
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        result = "Tháng " + thang + " của năm " + nam + " có " + ngay + " ngày";
    } else if (thang > 12 || thang === 0) {
        result = "Ngày không xác định";
    }
    return result;
}

document.getElementById("btnNgayCuaThang").onclick = function () {
    var thang = document.getElementById("thangInput2").value * 1;
    var nam = document.getElementById("namInput2").value * 1;
    var ngayCuaThang = checkNgayCuaThang(thang, nam);
    document.getElementById("footerBai2").innerHTML = ngayCuaThang;
}


/**
 * Bài 3: Đọc số nguyên có 3 chữ số.
 * - Đầu vào: nhập số nguyên có 3 chữ số.
 * - Xử lý:
 *      + Giả sử số nguyên có chữ số là n = xyz.
 *      + Hàng trăm = Math.floor(n / 100) = x.
 *          . x = 1 -> 9 + trăm.
 *      + Hàng chục = Math.floor(n % 100 / 10) = y.
 *          . y = 0 -> 9 + chục (0 đọc là lẻ)
 *      + Hàng đơn vị = n % 10 = z.
 *          . x = 0 -> 9.
 *  - Đầu ra: show kết quả.
 */
document.getElementById("btnDocSo").onclick = function () {
    var n = document.getElementById("soNguyen3ChuSo").value * 1;
    var x = Math.floor(n / 100);
    var y = Math.floor(n % 100 / 10);
    var z = n % 10;
    var hangTram = "";
    var hangChuc = "";
    var hangDonVi = "";
    var docSo = "";

    switch (x) {
        case 1:
            hangTram = "Một";
            break;

        case 2:
            hangTram = "Hai";
            break;

        case 3:
            hangTram = "Ba";
            break;

        case 4:
            hangTram = "Bốn";
            break;

        case 5:
            hangTram = "Năm";
            break;

        case 6:
            hangTram = "Sáu";
            break;

        case 7:
            hangTram = "Bảy";
            break;

        case 8:
            hangTram = "Tám";
            break;

        case 9:
            hangTram = "Chín";
            break;
    }

    switch (y) {
        case 0:
            hangChuc = "lẻ";
            break;

        case 1:
            hangChuc = "";
            break;

        case 2:
            hangChuc = "hai";
            break;

        case 3:
            hangChuc = "ba";
            break;

        case 4:
            hangChuc = "bốn";
            break;

        case 5:
            hangChuc = "năm";
            break;

        case 6:
            hangChuc = "sáu";
            break;

        case 7:
            hangChuc = "bảy";
            break;

        case 8:
            hangChuc = "tám";
            break;

        case 9:
            hangChuc = "chín";
            break;
    }

    switch (z) {
        case 0:
            hangDonVi = "";
            break;

        case 1:
            hangDonVi = "một";
            break;

        case 2:
            hangDonVi = "hai";
            break;

        case 3:
            hangDonVi = "ba";
            break;

        case 4:
            hangDonVi = "bốn";
            break;

        case 5:
            hangDonVi = "năm";
            break;

        case 6:
            hangDonVi = "sáu";
            break;

        case 7:
            hangDonVi = "bảy";
            break;

        case 8:
            hangDonVi = "tám";
            break;

        case 9:
            hangDonVi = "chín";
            break;
    }
    if (y === 0 && z === 0) {
        docSo = hangTram + " trăm";
    } else if (y === 0) {
        docSo = hangTram + " trăm lẻ " + hangDonVi;
    } else if (y === 1) {
        docSo = hangTram + " trăm mười " + hangDonVi;
    } else if (z === 1) {
        docSo = hangTram + " trăm " + hangChuc + " mươi mốt";
    } else {
        docSo = hangTram + " trăm " + hangChuc + " mươi " + hangDonVi;
    }
    document.getElementById("footerBai3").innerHTML = docSo;
}

/**
 * Bài 4: Xuất ra tên sinh viên xa trường nhất
 * - Đầu vào: Nhập các dữ liệu:
 *      + Tên sinh viên 1 + tọa độ x1 + tọa độ y1.
 *      + Tên sinh viên 2 + tọa độ x2 + tọa độ y2.
 *      + Tên sinh viên 3 + tọa độ x3 + tọa độ y3.
 *      + Tọa độ trường.
 * 
 * - Xử lý:
 *      + Quãng đường d = Math.squrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1))
 *          . x2 là x của trường, x1 là x của sinh viên tương ứng.
 *          . y2 là x của trường, y1 là x của sinh viên tương ứng.
 *      + So sánh quãng đường từ trường cho tới các sinh viên 1, 2, 3.
 * 
 * - Đầu ra: show kết quả.
 */
document.getElementById("btnTim").onclick = function () {
    var tenSV1 = document.getElementById("ten1").value;
    var tenSV2 = document.getElementById("ten2").value;
    var tenSV3 = document.getElementById("ten3").value;
    var x1 = document.getElementById("x1").value * 1;
    var y1 = document.getElementById("y1").value * 1;
    var x2 = document.getElementById("x2").value * 1;
    var y2 = document.getElementById("y2").value * 1;
    var x3 = document.getElementById("x3").value * 1;
    var y3 = document.getElementById("y3").value * 1;
    var xtruong = document.getElementById("truongX").value * 1;
    var ytruong = document.getElementById("truongY").value * 1;
    var d1 = Math.sqrt((xtruong - x1) * (xtruong - x1) + (ytruong - y1) * (ytruong - y1));
    var d2 = Math.sqrt((xtruong - x2) * (xtruong - x2) + (ytruong - y2) * (ytruong - y2));
    var d3 = Math.sqrt((xtruong - x3) * (xtruong - x3) + (ytruong - y3) * (ytruong - y3));
    console.log(d1, d2, d3);
    var max = d1;
    var xaNhat = "";
    if (d2 > max) {
        max = d2;
    }
    if (d3 > max) {
        max = d3;
    }
    console.log(max);

    if (max === d1) {
        xaNhat = "Sinh viên xa trường nhất là: " + tenSV1;
    } else if (max === d2) {
        xaNhat = "Sinh viên xa trường nhất là: " + tenSV2;
    } else if (max === d3) {
        xaNhat = "Sinh viên xa trường nhất là: " + tenSV3;
    }

    document.getElementById("footerBai4").innerHTML = xaNhat;
}
