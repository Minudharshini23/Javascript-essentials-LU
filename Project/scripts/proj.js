
console.log("QUOTES");

var array_of_quotes=[
    "Refuse to be denied by someone else's vision of what's possible.",
    " In every moment, for every reason--choose LOVE.",
    " Sometimes the greatest gift you can give another is to ask for help. Here is pleasure in giving.",
    "To achieve your dream, see the world as you want it to be, not as it may appear to be.",
    "You can summit the biggest mountain by simply taking the first step",
    " Choose to love with all your heart, even if it sometimes breaks.",
    "We're only here to learn to love",
    "How we see ourselves determines how we see the world.",
    "Life works better when we go with the flow rather than fighting the current.",
    "Live purposefully. Give abundantly. Love unconditionally. Hug joyfully. Celebrate gratefully."
]

function print()
{
setInterval(print,3000)
var i=Math.floor(Math.random()*(array_of_quotes.length));
document.getElementById('displayquotes').innerHTML=array_of_quotes[i];
}
print();
