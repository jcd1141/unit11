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

} catch (error) {
    console.log("Error reading file:", error);
}