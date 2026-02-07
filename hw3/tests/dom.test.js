var fs = require('fs');


// Fix: Ensure the closing parenthesis is after the arrow function
test('test selectEvent', () => {
    // Read the index.html file into a string
    var html = fs.readFileSync('public/index.html', 'utf8');
    expect(html).toEqual(expect.anything()); 

    // Put the HTML into a testing DOM
    document.body.innerHTML = html;
    const $ = require('jquery');
    
    // Check if the h1 matches
    expect($('h1').html()).toBe("Cheesecake Order Form");
});