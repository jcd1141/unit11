//Joshua Dalton
//IT505

//gets the file name from the user
const fileName = prompt("Enter HTML file name: ") || "sample.html";

try {
    //reads the html file
    const html = await Deno.readTextFile(fileName);

    console.log("\n===== HTML ANALYZER =====");
    console.log(`File: ${fileName}`);

    //finds all image elements
    const images = html.match(/<img\b[^>]*>/gi) || [];

    console.log("\nImage Elements:");
    for (const img of images) {
        console.log(img);
    }

    //finds image sources
    const sources = html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["']/gi);

    console.log("\nImage Sources:");
    for (const source of sources) {
        console.log(source[1]);
    }

    //finds all http and https urls
    const urls = html.match(/https?:\/\/[^\s"'<>]+/gi) || [];

    console.log("\nURLs:");
    for (const url of urls) {
        console.log(url);
    }

    //finds email addresses
    const emails = html.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi) || [];

    console.log("\nEmail Addresses:");
    for (const email of emails) {
        console.log(email);
    }

    //finds all opening html tags
    const tags = [...html.matchAll(/<([a-z][a-z0-9]*)\b[^>]*>/gi)]
        .map(tag => tag[1].toLowerCase());

    //removes duplicate tags
    const uniqueTags = [...new Set(tags)];

    console.log("\nUnique HTML Tags:");
    for (const tag of uniqueTags) {
        console.log(tag);
    }

    //counts how many times each tag appears
    console.log("\nHTML Tag Counts:");
    for (const tag of uniqueTags) {
        const count = tags.filter(t => t === tag).length;
        console.log(`${tag}: ${count}`);
    }

    //displays totals
    console.log("\n===== SUMMARY =====");
    console.log(`Total images: ${images.length}`);
    console.log(`Total URLs: ${urls.length}`);
    console.log(`Total emails: ${emails.length}`);
    console.log(`Total HTML tags: ${tags.length}`);
    console.log(`Unique HTML tags: ${uniqueTags.length}`);

} catch (error) {
    console.log("Error reading file:", error);
}