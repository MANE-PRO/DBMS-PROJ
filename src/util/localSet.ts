export const setLocalStorage = () => {
    try {
        localStorage.setItem("email", 'test@test.com')
    } catch (e) {
        console.log("someting went wrong");
    }
}