export default async function handler(req, res) {
  const { action, sid_token, email_id } = req.query;
  
  let targetUrl = `https://api.guerrillamail.com/ajax.php?f=${action}`;
  if (sid_token) targetUrl += `&sid_token=${sid_token}`;
  if (email_id) targetUrl += `&email_id=${email_id}`;
  if (action === 'check_email') targetUrl += `&seq=0`;

  try {
    const response = await fetch(targetUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch from temp mail server' });
  }
}
