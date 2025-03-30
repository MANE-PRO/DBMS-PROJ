export const setLocalStorage = () => {
    try {
        localStorage.setItem("email", 'test@test.com')
    } catch (e) {
        console.log("someting went wrong");
    }
}

export const validateEmail = ()=>{
    const token = localStorage.getItem("email");
    try{
        if(token){
            return true;
        }
    }catch(e){
        return false;
    }
}