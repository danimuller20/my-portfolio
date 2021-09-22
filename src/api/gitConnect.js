export const fetchGitConnect = () => {
  return fetch('https://gitconnected.com/v1/portfolio/danimuller20')
    .then(response => response.json())
    .then(data => data)
}
