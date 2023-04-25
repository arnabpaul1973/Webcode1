// const API_URL = "https://anapioficeandfire.com/api/books";
// const ITEM_PER_PAGE = 2;
// const TOTAL_PAGES = 5;
// let currentPage = 1;

async function getUsers() {
    let url = "https://anapioficeandfire.com/api/books";
    try {
        let res = await fetch(url);
        console.log(res);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getCharacters() {
    let url = "https://www.anapioficeandfire.com/api/characters";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2><em>${user.name}</em> (isbn - ${user.isbn})</h2>
                            <p>Number of pages : ${user.numberOfPages}</p>
                            <p>Author : ${user.authors}</p>
                            <p>Publisher : ${user.publisher}</p>
                            <p>Released Date : ${user.released}</p>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();

async function renderCharacters() {
    let characters = await getCharacters();
    let html = '';
    characters.forEach(character => {
        let htmlSegment = `<div class="character">
                            <h2><em>${character.aliases}</em></h2>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container2');
    container.innerHTML = html;
}

renderCharacters();
