window.SITE = {
  esc: function (s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  protect: function () {},

  loadArticles: function () {
    return fetch('data/articles.json')
      .then(function (r) {
        if (!r.ok) throw new Error('Impossible de charger les articles');
        return r.json();
      })
      .then(function (data) {
        return data.articles || [];
      });
  },

  articleUrl: function (article) {
    return 'article.html?slug=' + encodeURIComponent(article.slug);
  },

  frDate: function (date) {
    return date || '';
  }
};
