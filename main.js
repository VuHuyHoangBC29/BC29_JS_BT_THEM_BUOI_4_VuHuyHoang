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
    var result;
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
        result = "Tháng không xác định";
    } else
    return result;
}

function luiNgay(ngay, thang, nam) {
    if (ngay === 1 && thang === 1) {
        ngay = 31;
        thang = 12;
        nam -= 1;
    } else if (ngay === 1) {
        if (thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
            ngay = 30;
        } else if (thang === 2 || thang === 4 || thang === 6 || thang === 9 || thang === 11) {
            ngay = 31;
        } else if (thang === 3) {
            ngay = 28;
        }
        thang -= 1;
    } else {
        ngay -= 1;
    }
}

document.getElementById("btnHomQua").onclick = function () {
    var ngay = document.getElementById("ngayInput").value*1;
    var thang = document.getElementById("thangInput").value*1;
    var nam = document.getElementById("namInput").value*1;
    var kiemTraNgayThang = checkNgayThang(ngay, thang);
    var ngayHomQua = "";
    if (kiemTraNgayThang === "Ngày không xác định" || "Tháng không xác định") {
        kiemTraNgayThang = "Ngày không xác định";
    } else if (dateFormat = "Ngày/tháng xác định") {
        ngayHomQua = luiNgay(ngay, thang, nam);
    }
    console.log(ngayHomQua);
    document.getElementById("footerBai1").innerHTML = ngayHomQua;
}

// document.getElementById("btnHomQua").onclick = function () {
//     var ngay = document.getElementById("ngayInput").value * 1;
//     var thang = document.getElementById("thangInput").value * 1;
//     var nam = document.getElementById("namInput").value * 1;
//     var dateFormat = callDate(ngay, thang, nam);
//     if (dateFormat = "Ngày không xác định" || "Tháng không xác định") {
//         dateFormat = callDate(ngay, thang, nam);
//     } else if (ngay === 1 && thang === 1) {
//         ngay = 31;
//         thang = 12;
//         nam -= 1;
//     } else if (ngay === 1) {
//         if (thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
//             ngay = 30;
//         } else if (thang === 2 || thang === 4 || thang === 6 || thang === 9 || thang === 11) {
//             ngay = 31;
//         } else if (thang === 3) {
//             ngay = 28;
//         }
//         thang -= 1;
//     } else {
//         ngay -= 1;
//     }
//     document.getElementById("footerBai1").innerHTML = dateFormat;
// }

document.getElementById("btnMai").onclick = function () {
    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;
    var dateFormat = "";

    if (thang === 12 && ngay === 31) {
        ngay = 1;
        thang = 1;
        nam += 1;
    } else if (ngay === 31) {
        if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10) {
            ngay = 1;
            thang += 1;
        }
    } else if (ngay === 30) {
        if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
            ngay = 1;
            thang += 1;
        }
    }
    dateFormat = callDate(ngay, thang, nam);
    document.getElementById("footerBai1").innerHTML = dateFormat;
}