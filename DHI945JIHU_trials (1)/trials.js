let List = ['beautiful', 'cute', 'Lovely', 'Charming', 'Gorgeous', 'Stunning', 'Elegant', 'Adorable', 'Graceful', 'Exquisite', 'Alluring', 'Radiant', 'Delightful', 'Enchanting', 'Winsome', 'Ravishing', 'Mesmerizing', 'Captivating', 'Angelic', 'Bewitching', 'Splendid', 'Dazzling',
    'Harmonious', 'Blissful', 'Enthralling', 'Magnificent', 'Inviting', 'Dreamy', 'Seraphic', 'Idyllic', 'Picturesque', 'Bewildering', 'Fascinating', 'Tranquil', 'Radiant', 'Winsome', 'Splendorous', 'Grandiose', 'Alluring', 'Eloquent', 'Elegant', 'Breathtaking', 'Sublime', 'Exquisite',
    'Frolicsome', 'Candyfloss', 'Dumpling', 'Furry', 'Bijou', 'Buttercup', 'Glimmering', 'Petite', 'Heartfelt', 'Tender', 'Glowy', 'Cupcake', 'Bouncy', 'Dreamboat', 'Cutesy', 'Dazzling', 'Bumblebee', 'Puffy', 'Sunny-side-up', 'Chickadee', 'Twinkle', 'Merry', 'Pebbles', 'Lullaby',
    'Rosie', 'Sprinkle', 'Beehive', 'Button', 'Sunshine', 'Cuddlebug', 'Sweetie-pie', 'Fluttery', 'Cherry', 'Tiny', 'Moonbeam', 'Binky', 'Snuggle', 'Sunny', 'Flower', 'Giggly', 'Resplendent', 'Serene', 'Enigmatic', 'Ethereal', 'Dainty', 'Chipper', 'Snugglesome', 'Pearly', 'Squeaklet',
    'Darling', 'Whiskers', 'Rosy', 'Gentle', 'Tulip', 'Giggles', 'Fuzzy', 'Peachy', 'Cotton Candy', 'Sunbeam', 'Petal', 'Bubbly', 'Sugary', 'Pumpkin', 'Cheerful', 'Lollipop', 'Sweetheart', 'Sparkle', 'Bonbon', 'Pawfect', 'Bewitching', 'Harmonious', 'Blissful', 'Enthralling', 'Magnificent',
    'Cuddly', 'Angel', 'Cherub', 'Cinnamon', 'Wiggly', 'Velvety', 'Dimple', 'Blossom', 'Honey', 'Muffin', 'Silly', 'Dewdrop', 'Angel Eyes', 'Snoozy', 'Sugarplum', 'Cuddle', 'Fluffy', 'Bumble', 'Petaluma', 'Rainbow', 'Magnificent',
    'Whisker', 'Pumpkin Pie', 'Snooze', 'Dazzle', 'Lolly', 'Blossom', 'Snugglepuss', 'Glowworm', 'Cuddlefish', 'Twinkly', 'Marshmallow', 'Bouncy', 'Starlight', 'Pearly', 'Fluffball', 'Glorious', 'Heavenly', 'Cherubic', 'Darling', 'Sweet',
    'Cuddly', 'Lovable', 'Precious', 'Snuggly', 'Bubbly', 'Cheerful', 'Playful', 'Sunny', 'Innocent', 'Puppy-eyed', 'Endearing', 'Cozy', 'Adorable', 'Cupcake', 'Huggable', 'Heartwarming', 'Whimsical', 'Cute', 'Charming', 'Giggly', 'Fuzzy',
    'Petal-soft', 'Bunny-like', 'Dimpled', 'Teddy', 'Cinnamon-scented', 'Sprinkly', 'Peachy', 'Button-nosed', 'Sunbeam', 'Panda-like', 'Bubblegum', 'Fluffy', 'Delightful', 'Enchanting', 'Winsome', 'Ravishing', 'Mesmerizing', 'Captivating', 'Angelic',
    'Splendid', 'Dazzling', 'Resplendent', 'Serene', 'Enigmatic', 'Ethereal', 'Harmonious', 'Blissful', 'Enthralling', 'Magnificent', 'Smiley', 'Gentle', 'Rosy-cheeked', 'Butterfly-winged', 'Twinkly', 'Blossomy', 'Harmonious',
    'Inviting', 'Dreamy', 'Seraphic', 'Idyllic', 'Picturesque', 'Bewildering', 'Fascinating', 'Tranquil', 'Radiant', 'Winsome', 'Alluring', 'Eloquent', 'Elegant', 'Breathtaking', 'Splendorous', 'Grandiose', 'Moonbeam', 'Binky', 'Snuggle', 'Sunny', 'Flower',
    'Sugary', 'Rainbow-colored', 'Kittenish', 'Warm-hearted', 'Delicate', 'Squeaky', 'Fairytale-like', 'Magic', 'beautiful', 'cute', 'Lovely', 'Charming', 'Gorgeous', 'Stunning', 'Elegant', 'Adorable', 'Cupcake', 'Huggable', 'Heartwarming', 'cutieeeeeee'
];

let nextEl = document.getElementById("next");
nextEl.onclick = function() {
    let inputEl = document.getElementById("inputElement");
    let inputElValue = inputEl.value;
    if (inputElValue === "") {
        alert("Enter your name");
        return;
    }

    let nameEl = document.getElementById("name");
    nameEl.textContent = inputElValue;
    inputEl.value = "";
};
let i1 = 0;
// next elements list
function goon(i) {
    let gobutton = document.getElementById("goon");
    gobutton.onclick = function() {
        let elementEl = document.getElementById("elements");

        i1 += 1;
        elementEl.textContent = List[i1];
    };
}
// back element
function goback(i) {
    let backbutton = document.getElementById("goback");
    backbutton.onclick = function() {
        let elementEl = document.getElementById("elements");

        i1 -= 1;
        elementEl.textContent = List[i1];
    };
}

// iterating list
for (let i of List) {
    goon(i);
    goback(i);
}