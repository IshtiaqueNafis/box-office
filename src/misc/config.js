const API_BASE_URL = 'https://api.tvmaze.com'

export async function apiGET(queryString) {
    // eslint-disable-next-line no-return-await
    return await fetch(`${API_BASE_URL}${queryString}`).then(r => r.json())
}