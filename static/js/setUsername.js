const inputId = document.querySelector('#username-input');

inputId.addEventListener('change', () => {
    if (inputId.value == "") {
        document.cookie = 'username=rodionsaburov; path=/; max-age=31536000';
        document.querySelector('#stats-person-name').innerHTML = 'Статистика пользователя rodionsaburov';
    }
    else {
        console.log('Новое значение (окончательное):', inputId.value);
        document.cookie = `username=${inputId.value}; path=/; max-age=31536000`;
        document.querySelector('#stats-person-name').innerHTML = `Статистика пользователя ${inputId.value}`;
    }
    updateStats()
});