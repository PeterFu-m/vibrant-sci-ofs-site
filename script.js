document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单提交导致页面刷新

    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // 生成二维码内容
    const qrContent = `signuptavc(${phone})date(${date})`;

    // 清空之前生成的二维码
    document.getElementById('qrcode').innerHTML = "";

    // 生成新的二维码
    new QRCode(document.getElementById('qrcode'), {
        text: qrContent,
        width: 128,  // 二维码宽度
        height: 128, // 二维码高度
    });
});
