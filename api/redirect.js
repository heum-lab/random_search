export default async function handler(req, res) {
    // 위키백과 한국어 랜덤 문서 API 호출
    const wikiRes = await fetch(
          'https://ko.wikipedia.org/api/rest_v1/page/random/summary',
          { headers: { 'User-Agent': 'RandomNaverSearch/1.0' } }
        );
    const data = await wikiRes.json();
    const keyword = data.title;

    // 네이버 검색 URL로 리다이렉트
    const naverUrl = `https://m.search.naver.com/search.naver?query=${encodeURIComponent(keyword)}`;

    res.redirect(302, naverUrl);
  }
