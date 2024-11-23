import * as cheerio from 'cheerio';

async function getHomepageHTML() {
  const response = await fetch('https://www.divine-pride.net');

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    return null;
  }

  const html = await response.text();

  return cheerio.load(html, null, false);
}

async function extractServersFromPage() {
  const $ = await getHomepageHTML();
  const serversElements = $('[server]');

  const servers = [
    ...new Set([...serversElements].map(({ attribs }) => attribs.server)),
  ].sort((a, b) => a.localeCompare(b));

  console.log(servers);
  return servers;
}

//extractServersFromPage();
