const BASE_URL = 'https://thatcopy.pw/catapi/rest/'

const catButton = document.getElementById('change-cat');
const catImage = document.getElementById('cat');

const getCats = async () => {

    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }

};

const loadImg = async () => {
    catImage.src = await getCats();
};

catButton.addEventListener('click', loadImg);

loadImg();