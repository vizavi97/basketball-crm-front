import {RegisterFormInterface} from "../../pages/auth/Register";

export const validateRegister = (state: RegisterFormInterface, activeTab): string | boolean => {
    if (activeTab === "email") {
        if (!state.email.length || !state.name.length || !state.password.length) {
            return 'Все поля должны быть заполнены!'
        }
        if (state.email.length < 5 || !state.email.includes('@')) {
            return "Поле должно включать в себя символ - '@'"
        }
    }
    if (activeTab === "phone") {
        if (!state.phone.length || !state.name.length || !state.password.length) {
            return 'all fields must be filled'
        }
        if (state.phone.length < 7) {
            return "Phone field must be greater than 7 symbol"
        }
    }
    if (!state.privacy) {
        return 'privacy checkboxes not checked'
    }
    if (state.password.length < 6) {
        return "password field length must be greater than 6"
    }
    return false
};