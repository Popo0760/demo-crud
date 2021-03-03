let ValidService = {};
ValidService.required = {
    required: true,
    trigger: "blur"
};
ValidService.requiredChange = {
    required: true,
    message: "Vui lòng nhập giá trị!",
    trigger: "change"
};
ValidService.checkAz09 = {
    pattern: /^[0-9a-zA-Z]+$/g,
    message: "Chỉ được nhập từ a đến z, từ 0 đến 9!",
    trigger: "blur"
};
ValidService.checkAz09Dot = {
    pattern: /^[\d.\.]$/g,
    message: "Chỉ được nhập a đến z ,từ 0 đến 9 và dấu chấm!",
    trigger: "blur"
};
ValidService.checkAccount = {
    pattern: /^[0-9a-zA-Z.@]+$/g,
    message: "Nhập từ a - z , từ 0 - 9, dấu chấm và @!",
    trigger: "blur"
};
ValidService.checkPhone = {
    pattern: /^(0|\+?84|0084)\d{9}$/,
    message: "Số điện thoại không đúng định dạng!",
    trigger: "blur"
};
ValidService.checkNumber = {
    pattern: /^[0-9]+$/,
    message: "Chỉ được phép nhập từ 0 đến 9!",
    trigger: "blur"
};
ValidService.checkNumberFloatNotNegative = {
    pattern: /^[\d.]+$/,
    message: "Không được nhập số âm!",
    trigger: "blur"
};
ValidService.checkNumberInteger = {
    pattern: /^[-]?[\d]+$/,
    message: "Chỉ được nhập số nguyên!",
    trigger: "blur"
};
ValidService.checkNumberFloat = {
    pattern: /^[-]?[\d.]+$/,
    message: "Chỉ được nhập số nguyên hoặc số thập phân!",
    trigger: "blur"
};
ValidService.checkEmail = {
    pattern: /^[a-zA-Z0-9.!$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
    message: "Email không đúng định dạng!",
    trigger: "blur"
};
ValidService.checkSign = {
    pattern: /^[^ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/g,
    message: "Không được nhập ký tự có dấu!",
    trigger: "blur"
};
ValidService.checkSpace = {
    pattern: /^[^\s]*$/g,
    message: "Không được nhập ký tự trắng!",
    trigger: "blur"
};
ValidService.checkScript = {
    pattern: /^[\u00BF-\u1FFF\u2C00-\uD7FF\w\_\s]*$/g,
    message: "Không được nhập ký tự đặc biệt!",
    trigger: "blur"
};
ValidService.checkLink = {
    pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    message: "Liên kết không đúng định dạng!",
    trigger: "blur"
};
ValidService.checkTextFirst = {
    pattern: /^[a-zA-Z].*/g,
    message: "Ký tự đầu tiên phải là chữ!",
    trigger: "blur"
};
ValidService.checkDateTime = {
    pattern: /^([1-9]|([012][0-9])|(3[01]))[/]([0]{0,1}[1-9]|1[012])[/]\d\d\d\d [012]{0,1}[0-9]:[0-6][0-9]$/g,
    message: "Ngày giờ không đúng định dạng!",
    trigger: "blur"
};
ValidService.checkDate = {
    pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g,
    message: "Ngày không đúng định dạng!",
    trigger: "blur"
};
ValidService.checkYear = {
    pattern: /^\d{4}$/g,
    message: "Năm không đúng định dạng!",
    trigger: "blur"
};
ValidService.checkMonth = {
    pattern: /^\d{2}[/]\d{4}$/g,
    message: "Tháng không đúng định dạng!",
    trigger: "blur"
};

ValidService.checkLength = (start, end) => {
    var mess = "";
    var pattern = "";

    if (start && end) {
        mess = `Nhập từ ${start} đến ${end} ký tự!`;
        pattern = `.{${start},${end}}$`;
    } else if (start) {
        mess = `Nhập lớn hơn ${start} ký tự!`;
        pattern = `.{${start},}$`;
    } else if (end) {
        mess = `Nhập nhỏ hơn ${end} ký tự!`;
        pattern = `.{,${end}}$`;
    }
    return {
        pattern: new RegExp(pattern),
        message: mess,
        trigger: "blur"
    }
};

ValidService.pattern = (pattern, message = "Giá trị không hợp lệ!", trigger = 'blur') => {
    return {
        pattern: typeof(pattern) === "string" ? new RegExp(pattern) : pattern,
        message: message,
        trigger: trigger
    };
};

export default ValidService;