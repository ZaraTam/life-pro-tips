export function getLifeProTips(keywords) {

    var url = "https://www.reddit.com/r/LifeProTips/search.json?q=${keywords}&restrict_sr=true&sort=relevance&limit=3";

    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        console.log(data);
        var i;
        for (i = 0; i < data.data.children.length; i++) {
            var lifeprotip = data.data.children[i].data.title;
            var permalink = "https://www.reddit.com" + data.data.children[i].data.permalink
            console.log(lifeprotip, permalink)
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}


export function getShittyLifeProTips(keywords) {

    var url = "https://www.reddit.com/r/ShittyLifeProTips/search.json?q=${keywords}&restrict_sr=true&sort=relevance&limit=3";

    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        console.log(data);
        var i;
        for (i = 0; i < data.data.children.length; i++) {
            var shittylifeprotip = data.data.children[i].data.title;
            var permalink = "https://www.reddit.com" + data.data.children[i].data.permalink
            console.log(shittylifeprotip, permalink)
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}


export function getProTips(keywords) {

    getLifeProTips(keywords);
    getShittyLifeProTips(keywords);
}


export function isLucky(is_lucky) {

    var sort_options = ["relevance", "hot", "top", "new", "comments"];
    var sort_by = is_lucky == 0 ? "relevance" : sort_options[Math.floor(Math.random() * sort_options.length)];

    return sort_by;
}