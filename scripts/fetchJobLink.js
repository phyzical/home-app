const fs = require('fs');
const fetch = require('node-fetch');

const linkedInUrl = 'https://www.linkedin.com/in/jack-carpenter-77243216a';
const fallbackPayload = {
    uni: {
        name: 'Curtin University',
        url: "https://au.linkedin.com/school/curtinuniversity/",
    },
    job: {
        name: 'Australian Access Federation Ltd (AAF)',
        url: "https://au.linkedin.com/company/australian-access-federation-ltd",
    },
}
const outputFilePath = './src/helpers/linkedInData.json';

async function fetchJobLink() {
    try {
        const response = await fetch(linkedInUrl);
        if (response.ok) {
            console.log('Successfully fetched LinkedIn page.');
            // You can parse the response body here if needed
            const body = JSON.parse((await response.text()).split("<script type=\"application/ld+json\">")[1].split("</script>")[0])['@graph'][1];
            // Save the fetched data or fallback link
            fs.writeFileSync(outputFilePath,
                JSON.stringify({
                    uni: {
                        name: body.alumniOf[0].name,
                        url: body.alumniOf[0].url,
                    },
                    job: {
                        name: body.worksFor[0].name,
                        url: body.worksFor[0].url,
                    }
                })
            );
        } else {
            console.warn('Failed to fetch LinkedIn page. Using fallback link.');
            fs.writeFileSync(outputFilePath, JSON.stringify(fallbackPayload));
        }
    } catch (error) {
        console.error('Error fetching LinkedIn page:', error);
        fs.writeFileSync(outputFilePath, JSON.stringify(fallbackPayload));
    }
}

fetchJobLink();