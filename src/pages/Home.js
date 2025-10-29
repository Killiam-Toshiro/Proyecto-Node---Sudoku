function Home() {
    const container = document.createElement('div');

    const Title = document.createElement('h1');
    Title.textContent = 'Game Page';

    container.appendChild(Title);
    return container;
}

export default Home;