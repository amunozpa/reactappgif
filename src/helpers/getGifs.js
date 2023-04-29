export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zUTOZVy5XZOTB1w767silCJUmAuBsa8z&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((e) => ({
        id: e.id,
        title: e.title,
        url: e.images.downsized_medium.url
    }))

    //console.log(resp);
    //console.log(data);
    console.log('gifs',gifs);
    return gifs;

}