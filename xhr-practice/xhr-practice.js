
let xhr = new XMLHttpRequest(),
    method = "GET",
    url = "./xhr-practice.json";

xhr.open(method, url, true);
xhr.responseType = "json";

xhr.onload = function () {
    let articles = xhr.response.articles;
    let articlesDiv = document.getElementById("articles");

    articles.forEach(article => {
        let newArticleDiv = document.createElement("div");
        newArticleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');

        article.ways_to_achieve.forEach(way => {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(benefit => {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        newArticleDiv.appendChild(title);
        newArticleDiv.appendChild(description);
        newArticleDiv.appendChild(waysHeader);
        newArticleDiv.appendChild(waysList);
        newArticleDiv.appendChild(benefitsHeader);
        newArticleDiv.appendChild(benefitsList);
        articlesDiv.appendChild(newArticleDiv);
    });
};

xhr.send();

