import ValidService from '@/service/ValidService';
let model = {};

//dữ liệu Form
model.dataForm = {
    id: null,
    name: null,
    age: null,
    gender: null,
    phone: null,
    birthday: null,
    createdAt: null,
    hobbies: null
}

//Validation Form
model.validForm = {
    id: [],
    name: [ValidService.required],
    age: [ValidService.required],
    gender: [],
    phone: [ValidService.required],
    birthday: [],
    createdAt: [],
    hobbies: []
}