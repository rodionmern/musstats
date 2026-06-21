const getUsername = () => {
    let match = document.cookie.match(/username=([^;]*)/);
    let username = match ? match[1] : "rodionsaburov";
    document.querySelector('#stats-person-name').innerHTML = `Статистика пользователя ${username}`;
    return(username)
}