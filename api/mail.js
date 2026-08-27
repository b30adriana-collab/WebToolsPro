export default async function handler(req, res) {
  const { action, login, domain, id } = req.query;
  
  let targetUrl = `https://www.1secmail.com/api/v1/?action=${action}`;
  if (login) targetUrl += `&login=${login}`;
  if (domain) targetUrl += `&domain=${domain}`;
  if (id) targetUrl += `&id=${id}`;
  if (action === 'genRandomMailbox') targetUrl += `&count=1`;

  try {
    const response = await fetch(targetUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from temp mail server' });
  }
}
